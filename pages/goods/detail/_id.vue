<template>
  <div v-if="pageLoading">
    <main class="main">
      <el-skeleton style="width: 100%; padding: 40px" :loading="true" animated>
        <template slot="template">
          <div class="flex">
            <el-skeleton-item
              variant="image"
              style="width: 456px; height: 456px"
            />
            <div style="flex: 1; padding: 0 20px">
              <el-skeleton-item variant="h1" style="width: 100%" />
              <el-skeleton-item
                variant="h2"
                style="width: 100%; height: 130px; margin-top: 20px"
              />
              <el-skeleton-item
                variant="h3"
                style="margin-top: 34px; width: 90%"
              />
              <el-skeleton-item
                variant="h3"
                style="margin-top: 34px; width: 70%"
              />
              <el-skeleton-item
                variant="h3"
                style="margin-top: 34px; width: 50%"
              />
              <el-skeleton-item
                variant="h3"
                style="margin-top: 34px; width: 50%"
              />
              <el-skeleton-item
                variant="h3"
                style="margin-top: 34px; width: 100%"
              />
            </div>
          </div>
        </template>
      </el-skeleton>
    </main>
  </div>
  <div v-else>
    <HeaderBar v-show="showHeaderBar" :tabKey="headerKey" @jump="handleJump" @addCart="addCart" />
    <nav class="nav flex flex-middle flex-center">
      <p class="nav__crumbs">
        全部商品
        <i class="el-icon-arrow-right"></i>
        {{ detailData.name }}
      </p>
    </nav>
    <main class="main flex" v-if="detailData.isEnable">
      <aside class="main__preview">
        <img
          class="main__preview-big"
          :src="detailData.pictureList[activeImg]"
          alt="商品大图"
        />
        <div class="main__preview-control">
          <img
            class="main__preview-control--left"
            src="~/assets/img/goods/left.png"
            alt="左侧切换"
            @click="onImgLeft"
          />
          <div
            class="main__preview-control--imgs"
            :style="
              activeImg > 4
                ? 'transform: translateX(-' + (activeImg - 4) * 78 + 'px);'
                : ''
            "
          >
            <img
              :class="index == activeImg ? 'img-active' : ''"
              :src="item"
              alt=""
              v-for="(item, index) in detailData.pictureList"
              :key="index"
              @click="onActiveImg(index)"
            />
          </div>
          <img
            class="main__preview-control--right"
            src="~/assets/img/goods/right.png"
            alt="右侧切换"
            @click="onImgRight"
          />
        </div>
      </aside>
      <article class="main__details">
        <p class="main__details-title">
          <span class="main__details-title--label">新品</span>
          {{ detailData.name }}
        </p>
        <div
          v-if="detailData.productActivityVO.isStartActivity"
          class="main__details-skill flex flex-right flex-middle"
        >
          距结束仅剩
          <span>{{ surplus.lefth }}</span>
          <span>{{ surplus.leftm }}</span>
          <span>{{ surplus.lefts }}</span>
        </div>
        <div class="main__details-msg">
          <div class="main__details-msg--price flex flex-middle">
            <span class="msg-txt">售价</span>
            <strong class="msg-price">{{ getPrice }}</strong>
            <div
              v-if="
                detailData.productActivityVO.isActivity &&
                !detailData.productActivityVO.isStartActivity
              "
              class="main__details-msg--skill flex flex-column flex-bottom"
            >
              <span class="skill-txt">即将开始秒杀</span>
              <div class="skill-2" v-if="isToday()">
                <span>{{ surplus.lefth }}</span>
                <span>{{ surplus.leftm }}</span>
                <span>{{ surplus.lefts }}</span>
              </div>
              <span class="skill-1" v-else>{{ getBeginTime() }}</span>
            </div>
          </div>
          <div class="hr"></div>
          <div class="main__details-msg--service flex flex-middle">
            <span class="msg-txt">服务</span>
            <span class="msg-service"
              >假一赔四 · 全国包邮 · 不支持7天无理由退换</span
            >
            <img
              @click="onShowService()"
              class="msg-icon"
              src="~/assets/img/goods/more.png"
              alt="服务"
            />
          </div>
        </div>
        <div class="main__details-option" v-if="isStock()">
          <div
            class="main__details-option--line flex flex-middle"
            v-for="(item, index) in detailData.attributeGroupList"
            :key="item.id"
          >
            <span class="line-txt">{{ item.name }}</span>
            <div class="line-btns">
              <UiButton
                type="yellow_line"
                v-for="val in item.attributes"
                :key="val.symbol"
                @click="handleAttrItem(val, index)"
                :class="{
                  'attr-item__active': val.active,
                  'attr-item__disabled': val.disabled,
                }"
                >{{ val.name }}</UiButton
              >
            </div>
          </div>
          <div class="main__details-option--line flex flex-middle">
            <span class="line-txt">数量</span>
            <div class="line-btns">
              <el-input-number v-model="curBuyNum" :min="1" :max='maxBuyNum'></el-input-number>
            </div>
          </div>
        </div>
        <div class="main__details-none flex flex-middle" v-else>
          <img src="@/assets/img/goods/tips.png" alt="" />
          <span>此商品暂无库存啦~看看其他的吧</span>
        </div>
        <div class="main__details-pay" v-if="isStock()">
          <UiButton type="yellow_line" @click="addCart">加入购物车</UiButton>
          <UiButton type="yellow_panel" @click="buyNow">立即购买</UiButton>
        </div>
      </article>
    </main>

    <main v-else class="main">
      <img class="main-none-img" src="@/assets/img/goods/none.png" alt="" />
      <p class="main-none-txt">商品已下架啦，去逛逛别的吧~</p>
    </main>
    <section class="section flex" v-if="detailData.isEnable">
      <div class="section-recommend">
        <p class="section-title">看了又看</p>
        <UiGoodsItem
          v-for="item in recommendedData"
          :item="item"
          :key="item.id"
        ></UiGoodsItem>
      </div>
      <div class="section-details">
        <p class="section-title" ref="detailRef">商品详情</p>
        <div class="rich" v-html="detailData.detail" v-if="detailData.detail" ></div>
        <div class="section-details--none" v-else>
          <img src="@/assets/img/goods/none.png" alt="" />
          <p>暂无详情</p>
        </div>
        <Comment ref="commentRef" />
      </div>

    </section>
    <BsChosen v-else></BsChosen>

    <el-dialog
      title="服务详情"
      :visible.sync="showService"
      width="380px"
      center
    >
      <section class="service__section flex flex-column">
        <div class="service-item">
          <h3>假一赔四</h3>
          <p>正品保障，假一赔四</p>
        </div>
        <div class="service-item">
          <h3>全国包邮</h3>
          <p>偏远地区（青海、西藏、新疆）除外</p>
        </div>
        <div class="service-item">
          <h3>不支持7天退换</h3>
          <p>此商品不支持七天无理由退换</p>
        </div>
      </section>
      <div class="flex flex-center">
        <UiButton type="yellow_panel service-btn" @click="showService = false"
          >确定</UiButton
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import UiMoney from "@/components/UiMoney.vue";
import UiButton from "@/components/UiButton.vue";
import UiGoodsItem from "@/components/UiGoodsItem.vue";
import BsChosen from "@/components/BsChosen.vue";
import Comment from './module/Comment.vue';
import { ApiPutAddCart } from "@/plugins/api/cart";
import {
  ApiGetGoodsDetail,
  ApiGetGoodsSkus,
  ApiGetGoodsList,
} from "@/plugins/api/goods";
import HeaderBar from './module/HeaderBar.vue';
export default {
  components: { UiMoney, UiButton, UiGoodsItem, BsChosen, Comment, HeaderBar },
  data() {
    return {
      pageLoading: true,
      curBuyNum: 1,
      activeImg: 0,
      recommendedData: [],
      skuData: [],
      detailData: {
        isEnable: false,
        pictureList: [],
        productActivityVO: {},
      },
      surplus: {},
      timer: null,
      startTime: "",
      endTime: "",
      showService: false,
      showHeaderBar : false,
      headerKey: 'detail'
    };
  },
  async created() {
    let vm = this;
    let id = this.$route.params.id;
    let res1 = await ApiGetGoodsDetail({ id });
    let res2 = await ApiGetGoodsSkus({ productId: id });
    let res3 = await ApiGetGoodsList({
      length: 3,
      pageIndex: 1,
      name: "",
      categoryId: "",
      order: "",
    });
    vm.detailData = res1.result;
    vm.skuData = res2.result;

    vm.recommendedData = res3.result ? res3.result.records : [];
    vm.pageLoading = false;
    if (
      vm.detailData.productActivityVO.isActivity &&
      !vm.detailData.productActivityVO.isStartActivity &&
      vm.isToday()
    ) {
      vm.startTime = new Date(
        vm.detailData.productActivityVO.currentTime
      ).getTime();
      vm.endTime = new Date(
        vm.detailData.productActivityVO.activityStartTime
      ).getTime();
      vm.setSurplus();
    } else if (vm.detailData.productActivityVO.isStartActivity) {
      vm.startTime = new Date(
        vm.detailData.productActivityVO.currentTime
      ).getTime();
      vm.endTime = new Date(
        vm.detailData.productActivityVO.activityEndTime
      ).getTime();
      vm.setSurplus();
    }
  },
  computed: {
    /**
     * 当前选中SKU，根据选中规格计算
     */
    curSku() {
      return (
        this.skuData.find(
          (i) => i.attributeSymbolList === this.selectedSymbol.join(",")
        ) || {}
      );
    },
    // [1,.,3]
    selectedSymbol() {
      return this.detailData.attributeGroupList
        .map((item) => {
          const activeAttr = item.attributes.find((i) => i.active);
          return activeAttr ? activeAttr.symbol : ".";
        })
        .filter((i) => i)//.sort();
    },
    /**
     * 最大可购买数量
     * 1、有限购则对比限购跟库存，取最小值
     * 2、没限购取库存
     */
    maxBuyNum() {
      const singleBuyLimit = this.detailData.singleBuyLimit;
      const stock = this.curSku.stock;
      return singleBuyLimit ? Math.min(singleBuyLimit, stock || 1) : stock;
    },
    getPrice() {
      if (this.curSku.sellPrice) {
        return this.curSku.sellPrice;
      } else {
        return this.detailData.productActivityVO.isStartActivity
          ? this.detailData.productActivityVO.activityPrice
          : this.detailData.startingPrice;
      }
    },
  },
  mounted(){
      window.addEventListener("scroll", this.setHeaderBar);
      this.setHeaderBar()
  },
  destroyed() {
    window.removeEventListener("scroll", this.setHeaderBar);
  },
  methods: {
    setHeaderBar(){
      const  y = window.scrollY
      this.showHeaderBar = y > 700;
      if(this.showHeaderBar){
        const dY = this.$refs.detailRef.offsetTop;
        const cY = this.$refs.commentRef.$el.offsetTop;
        if(y >= cY){
          this.headerKey = 'comment';
        }else if(y > dY){
          this.headerKey = 'detail';
        }
      }


    },
    handleJump(val){
      if(val === 'detail'){
        this.$refs.detailRef.scrollIntoView();
      }else{
        this.$refs.commentRef.$el.scrollIntoView();
      }
      this.headerKey = val;
    },
    onShowService() {
      this.showService = true;
    },
    addCart() {
      let ids = [this.detailData.id];
      this.$router.push({
        path: `/orderSubmit`,
        query: {
          mode: "cart",
          ids,
        },
      });
    },
    isStock() {
      return this.skuData.some((item) => item.stock > 0);
    },
    /* 获取倒计时 */
    getSurplus(startTime, endTime) {
      let nowtime = new Date(startTime), //获取当前时间
        endtime = new Date(endTime); //定义结束时间
      let leftObj = {};
      leftObj["lefttime"] = endtime.getTime() - nowtime.getTime(); //距离结束时间的毫秒数
      leftObj["leftd"] = Math.floor(
        leftObj["lefttime"] / (1000 * 60 * 60 * 24)
      ); //计算天数
      leftObj["lefth"] = Math.floor(
        (leftObj["lefttime"] / (1000 * 60 * 60)) % 24
      ); //计算小时数
      leftObj["leftm"] = Math.floor((leftObj["lefttime"] / (1000 * 60)) % 60); //计算分钟数
      leftObj["lefts"] = Math.floor((leftObj["lefttime"] / 1000) % 60); //计算秒数
      return leftObj;
    },
    setSurplus() {
      let vm = this;
      vm.surplus = vm.getSurplus(vm.startTime, vm.endTime);
      if (vm.timer) {
        return false;
      }
      vm.timer = setInterval(() => {
        vm.startTime += 1000;
        vm.surplus = vm.getSurplus(vm.startTime, vm.endTime);
        if (vm.surplus.lefttime <= 0) {
          clearInterval(vm.timer);
          if (location) {
            location?.reload();
          }
        }
      }, 1000);
    },
    isToday() {
      let vm = this;
      let begin = new Date(
        vm.detailData.productActivityVO.activityStartTime
      ).getTime();
      let now = new Date(vm.detailData.productActivityVO.currentTime).getTime();
      if (new Date(begin).toDateString() === new Date(now).toDateString()) {
        return true;
      } else if (new Date(begin) < new Date()) {
        return false;
      }
    },
    getBeginTime() {
      let vm = this;
      let begin = new Date(
        vm.detailData.productActivityVO.activityStartTime
      ).getTime();
      let timestr = new Date(begin);
      let month = timestr.getMonth() + 1;
      let date = timestr.getDate();
      let hour = timestr.getHours();
      let minute = timestr.getMinutes();
      let datetime = `${month}月${date}日 ${hour}:${minute} 开始`;
      return datetime;
    },
    onActiveImg(i) {
      this.activeImg = i;
    },
    onImgLeft() {
      let vm = this;
      if (vm.activeImg > 0) {
        vm.activeImg--;
      }
    },
    onImgRight() {
      let vm = this;
      if (vm.activeImg < vm.detailData.pictureList.length - 1) {
        vm.activeImg++;
      }
    },
    /**
     * 点击属性项，设置选中和禁用项
     */
    handleAttrItem(item, groupIndex) {
      let vm = this;
      // 禁用选项
      if (item.disabled) {
        return false;
      }
      // 每次重选规格，购买数量都置为1
      vm.curBuyNum = 1;
      const active = item.active;
      // 把当前选项组的装先置为未选状态
      vm.detailData.attributeGroupList[groupIndex].attributes.forEach(
        (item) => {
          this.$set(item, "active", false);
        }
      );
      // 设置当前点击选项选中
      this.$set(item, "active", !active);
      this.setDisabledItem(item, groupIndex);
    },
    /**
     * 每次点击选项属性时，计算不可选属性
     */
    setDisabledItem(item, groupIndex) {
      let vm = this;
      vm.detailData.attributeGroupList.forEach((group, idx) => {
        // 拿到已选项数组，这个是按照项组顺序排序好的缓存数组
        let symbolCache = Object.assign([], this.selectedSymbol);
        // 跳过当前属性组
        if (groupIndex === idx) return false;
        // 遍历其他选项组中的选项
        group.attributes.forEach((item) => {
          // 根据选项组下标，补位选项属性
          symbolCache[idx] = item.symbol;
          const reg = new RegExp(symbolCache.join(","));
          // 根据补位选项寻找是否有有效SKU，有则可选，没有则禁用
          const res = vm.skuData
            .filter((i) => reg.test(i.attributeSymbolList))
            .find((i) => i.stock > 0);
          if (res) {
            item.disabled = false;
          } else {
            item.disabled = true;
          }
        });
      });
    },
    buyNow() {
      if (!this.$isLoginValidate()) {
        return;
      }
      if (!this.curSku.skuId) {
        this.$message.error("请选择规格~");
        return false;
      }

      let query = {
        mode: "buyNow",
        skuId: this.curSku.skuId,
        num: this.curBuyNum,
				productType : this.detailData.productType,
        activityType: 1,
      };
      this.$router.push({
        path: "/order/submit",
        query,
      });
    },

    /**
     * 加入购物车
     */
    async addCart() {
      if (!this.$isLoginValidate()) {
        return;
      }
      if (!this.curSku.skuId) {
        this.$message.error("请选择规格~");
        return false;
      }
      const { error, result } = await ApiPutAddCart({
        productSkuId: this.curSku.skuId,
        productId: this.detailData.id,
        number: this.curBuyNum,
      });
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      this.$message.success("加入购物车成功~");
      this.$store.dispatch("getCartProducts");
      // this.$Router.push('/cart');
    },

    
  },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 40px;
  background: #f2f4f6;
  margin-bottom: 14px;
  &__crumbs {
    width: 1200px;
    color: #666;
    @include ellipsis;
    padding-right: 970px
  }
}
.main {
  @include layout-box;
  &__preview {
    width: 456px;
    margin-right: 30px;
    &-big {
      width: 456px;
      height: 456px;
      margin-bottom: 24px;
    }
    &-control {
      width: 100%;
      height: 58px;
      position: relative;
      overflow: hidden;
      padding-left: 43px;
      &::before {
        content: "";
        width: 43px;
        height: 58px;
        background: #fff;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      &::after {
        content: "";
        width: 43px;
        height: 58px;
        background: #fff;
        position: absolute;
        right: 0;
        top: 0;
      }
      &--left,
      &--right {
        width: 20px;
        height: 34px;
        position: absolute;
        top: 12px;
        z-index: 1;
        cursor: pointer;
      }
      &--left {
        left: 0;
      }
      &--right {
        right: 0;
      }
      &--imgs {
        width: 1500px;
        img {
          width: 58px;
          height: 58px;
          margin-right: 20px;
          cursor: pointer;
        }
        .img-active {
          border: 1px solid #ff512b;
        }
      }
    }
  }
  &__details {
    width: 714px;
    padding-top: 10px;
    &-title {
      font-size: 16px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      padding-bottom: 20px;
      &--label {
        display: inline-block;
        font-size: 12px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #3083ff;
        padding: 4px 8px;
        margin-right: 6px;
        background: rgba(48, 131, 255, 0.1);
      }
    }

    &-skill {
      width: 100%;
      height: 32px;
      background: url(@/assets/img/goods/skill.png) no-repeat;
      background-size: contain;
      padding: 0 20px;
      font-size: 14px;
      font-family: PingFang SC-常规体, PingFang SC;
      font-weight: normal;
      color: #ffffff;
      span {
        width: 22px;
        height: 22px;
        background: #e83710;
        border-radius: 2px;
        margin-left: 10px;
        font-size: 14px;
        font-family: PingFang SC-常规体, PingFang SC;
        font-weight: normal;
        color: #ffffff;
        line-height: 22px;
        text-align: center;
      }
    }

    &-msg {
      width: 714px;
      min-height: 127px;
      background: #f8f8f8;
      padding: 30px 20px;
      .msg-txt {
        font-size: 14px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #9e9e9e;
        margin-right: 20px;
      }

      .msg-price {
        font-size: 22px;
        color: #ff512b;
        &::before {
          content: "￥";
          font-size: 14px;
        }
      }

      .msg-service {
        font-size: 14px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }
      .msg-icon {
        margin-left: 6px;
        width: 12px;
        height: 12px;
        cursor: pointer;
      }
      &--price {
        padding-bottom: 30px;
      }

      &--skill {
        margin-left: auto;

        .skill-1 {
          font-size: 16px;
          font-family: PingFang SC-常规体, PingFang SC;
          font-weight: normal;
          color: #e83710;
        }

        .skill-2 {
          margin-top: 6px;
          span {
            display: inline-block;
            width: 22px;
            height: 22px;
            background: #e83710;
            border-radius: 2px;
            font-size: 14px;
            font-family: PingFang SC-常规体, PingFang SC;
            font-weight: normal;
            color: #ffffff;
            text-align: center;
            line-height: 22px;
          }
        }
      }
      .hr {
        width: 673px;
        height: 1px;
        background: #dddddd;
      }
      &--service {
        padding-top: 16px;
      }
    }

    &-option {
      padding-top: 24px;

      &--line {
        margin-bottom: 6px;
        .line-txt {
          font-size: 14px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #9e9e9e;
          margin-left: 20px;
          margin-right: 33px;
        }
        .line-btns {
          width: 600px;
          /deep/.ui-button__yellow_line {
            background: #fff;
            margin-right: 14px;
            color: #666;
            margin-bottom: 6px;
            border-color: #ccc;
          }
          .attr-item__active {
            border: 1px solid #ff512b;
          }
          .attr-item__disabled {
            color: #999999;
            background: #eeeeee;
          }
        }
      }
    }

    &-none {
      width: 713px;
      height: 40px;
      background: #f3f3f3;
      margin-top: 20px;
      padding: 0 20px;

      img {
        width: 18px;
        height: 18px;
        margin-right: 12px;
      }

      span {
        font-size: 14px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }
    }

    &-pay {
      margin-top: 40px;
      button {
        width: 144px;
        height: 46px;
        margin-right: 30px;
        font-size: 18px;
        &:nth-child(1) {
          background: #fff;
        }
        &:nth-child(2) {
          border: none;
        }
      }
    }
  }
  &-none-img {
    display: block;
    width: 228px;
    height: 144px;
    margin: 60px auto 20px;
  }
  &-none-txt {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #999999;
    margin-bottom: 50px;
  }
}
.section {
  width: 1200px;
  margin: 64px auto 0;
  &-recommend {
    width: 228px;
    margin-right: 30px;

    /deep/.goods-item {
      border: 1px solid #f2f2f2;
    }
  }
  &-details {
    width: 938px;

    &--none {
      img {
        display: block;
        width: 228px;
        height: 144px;
        margin: 133px auto 20px;
      }

      p {
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-family: PingFang SC-常规体, PingFang SC;
        font-weight: normal;
        color: #999999;
      }
    }
  }
  &-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border: 1px solid #f2f2f2;
    padding-left: 16px;
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #666666;
  }
}

.service-item {
  margin-bottom: 25px;
  padding-left: 30px;

  h3 {
    font-size: 18px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 50%;
      margin-top: -3px;
      height: 6px;
      width: 6px;
      background: #ff875b;
      border-radius: 50%;
    }
  }
  p {
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    padding-top: 10px;
  }
}

.service-btn {
  width: 272px;
  height: 36px;
  background: linear-gradient(90deg, #ff7f39 0%, #ffa35b 100%);
  border-radius: 4px;
}
</style>
