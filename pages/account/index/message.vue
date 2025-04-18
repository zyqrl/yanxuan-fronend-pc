<!--
 * @Author: ch
 * @Date: 2022-05-04 17:48:12
 * @LastEditors: ch
 * @LastEditTime: 2022-06-13 11:49:37
 * @Description: file content
-->

<template>
  <div>
    <main class="main">
      <h3 class="title">消息通知</h3>
      <section class="section">
        <div
          class="section__item flex"
          :class="item.payload.customType !== 'orderAutoDelivery' && 'section__pointer'"
          v-for="item in msgData"
          :key="item.id"
          @click="handleDetail(item)"
        >
          <img
            class="section__item-img"
            :src="item.payload.productImageUrls ? item.payload.productImageUrls[0] : require('@/assets/img/account/im/system.png')"
            alt="消息通知"
          />
          <div class="section__item-content flex flex-column">
            <div class="section__item-content--title flex">
              <span>{{ item.payload.title || `` }}</span>
              <span class="section__item-content--time">{{item.createTimeStamp}}</span>
            </div>
            <div class="section__item-content--txt" >{{ item.payload.content }}</div>
            <div class="section__item-content--txt" v-if="item.payload.customType === 'orderAutoDelivery'">
                <template v-for="i in item.payload.virtualProductContentList" @click="openLink(i)">
                  <a v-if="i.shipType === 1"  :key="i.shipContent" :href="i.shipContent" target="_blank">[下载文件]</a>
                  <span v-else :key="i.shipContent" >{{i.shipContent}}</span>
                </template>
            </div>
          </div>
        </div>
        <UiEmpty
          v-if="!msgData.length"
          desc="暂无消息通知"
          :icon="require('@/assets/img/account/order/empty.png')"
        >
        </UiEmpty>
      </section>
    </main>
  </div>
</template>
<script>
import UiEmpty from "@/components/UiEmpty.vue";
import {FormatDate, CreateUUID} from '@/plugins/utils';
import {Im, ImInit} from '@/plugins/chat'
export default {
  components: { UiEmpty },
  data() {
    return {};
  },
  watch:{
    curSession(nv,ov){
      if(nv.id != ov.id){
        Im.getHistoryMsg();
      }
    }
  },
  computed: {
    curSession(){
      let data = this.$store.state.socketMsgData
      Im.setCurSessionId(data.id);
      return data;
    },
    msgData(){
      let data =  this.curSession.messageList || [];
      return data.map(i => {
        let item = {...i}
        item.createTimeStamp = FormatDate(i.createTimeStamp, 'mm-dd hh:ii:ss')
        return item;
      }).reverse();
    },
  },
  mounted() {
		
    setTimeout(()=>{
      this.readMsg();
    },5000)
  },
  methods: {

		/**
		 * 把当前会话消息置为已读
		 */
		readMsg(){
			Im.setRead({
				content: { 
					sessionId : this.curSession.id
				}
			});
		},
    
		/**
		 * 点击详情跳转
		 */
		handleDetail(item){
      if(item.payload.customType === 'orderAutoDelivery'){
          return false;
      }else if(['orderPay','orderDelivery','orderCancel'].includes(item.payload.customType)){
				this.$router.push(`/account/order/detail?id=${item.payload.primaryId}`)
			}else if(['refundFail','refundSuccess'].includes(item.payload.customType)){
				this.$message.warning('请在移动端查看售后详情~');
			}else if(item.payload.linkJump){
					window.location.href = item.payload.linkJump;
			}
		}
  },
  destroyed(){
      Im.setCurSessionId(null);
    
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 1000px;
  .title {
    width: 100%;
    height: 42px;
    background: #f8f8f8;
    border: 1px solid #dddddd;
    padding: 0 24px;
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    line-height: 42px;
  }

  .section {
    padding: 22px 20px 0;
    border: 1px solid #ddd;
    margin-top: -1px;
    max-height: 600px;
    overflow-y: auto;
    &__pointer{
      cursor: pointer;
    }

    &__item {
      margin-bottom: 20px;

      &-img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }

      &-content {
        width: 840px;
        &--title {
          margin: 8px 0;
          font-size: 16px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #333333;
        }
        &--time {
          font-size: 12px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #999999;
          margin-left: auto;
        }
        &--txt {
          margin-top: auto;
          margin-bottom: 8px;
          font-size: 14px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #999999;
          a{
            color: #FF875B;
          }
        }
      }
    }
  }
}
</style>
