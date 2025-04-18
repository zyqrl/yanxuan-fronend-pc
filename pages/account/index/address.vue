<!--
 * @Author: ch
 * @Date: 2022-05-04 17:53:24
 * @LastEditors: ch
 * @LastEditTime: 2022-05-04 17:53:34
 * @Description: file content
-->

<template>
  <div>
    <div class="title">收货地址</div>
    <BsAddress
      ref="bsAddress"
      @getList="getList"
      @onSaveSuccess="onSaveSuccess"
      :isAccount="true"
      :isParentEdit="isEdit"
    ></BsAddress>
    <el-table :data="addressList" style="width: 100%">
      <el-table-column prop="name" label="收货人" width="130px">
      </el-table-column>
      <el-table-column prop="phone" label="手机号码" width="140px">
      </el-table-column>
      <el-table-column label="收货地址" width="430px">
        <template slot-scope="scope">
          {{
            scope.row.province +
            scope.row.city +
            scope.row.area +
            scope.row.detailAddress
          }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btns">
            <span @click="editItem(scope.$index)">编辑</span>
            <span @click="deleteItem(scope.row)">删除</span>
            <span v-if="scope.row.isDefault" class="default">默认地址</span>
            <span v-else @click="setItem(scope.row)">设为默认地址</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ApiPutAddress, ApiDeleteAddress } from "@/plugins/api/base";

import BsAddress from "@/components/BsAddress.vue";
import UiButton from "@/components/UiButton.vue";
export default {
  components: { BsAddress, UiButton },
  data() {
    return {
      isEdit: false,
      addressList: [],
    };
  },
  methods: {
    onSaveSuccess() {
      this.isEdit = false;
    },
    getList(list) {
      this.addressList = list || [];
    },
    editItem(i) {
      console.log(i);
      this.isEdit = true;
      this.$refs.bsAddress.setAddressData(i);
    },
    async setItem(item) {
      let params = JSON.parse(JSON.stringify(item));
      params.isDefault = true;
      let res = await ApiPutAddress(params);
      this.$refs.bsAddress.getAddressData();
      if (!res.error) {
        this.$message.success("设置成功~");
      }
    },
    deleteItem(item) {
      let vm = this;
      vm.$confirm("确认删除此收货地址吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: async (e) => {
          console.log(e);
          if (e == `confirm`) {
            let res = await ApiDeleteAddress({
              idList: [item.id],
            });
            if (!res.error) {
              vm.$message.success("删除成功~");
              vm.$refs.bsAddress.getAddressData();
            }
            console.log(res);
          }
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.btns {
  span {
    cursor: pointer;
    margin-right: 40px;
    &:hover {
      color: #ff875b;
    }
  }
  .default {
    display: inline-block;
    width: 84px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #ff875b;
    color: #ff875b;
    text-align: center;
    line-height: 30px;
  }
}
</style>
