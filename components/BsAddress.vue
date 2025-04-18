<template>
  <div>
    <div class="address flex flex-middle" v-if="!isOperation && !isAccount">
      <article class="address__msg">
        <div class="address__msg-line flex flex-middle">
          <img src="@/assets/img/goods/point.png" alt="收货地址" />
          <span class="address__msg-line--txt">默认地址</span>
          <UiButton type="yellow_panel" @click="onEdit()">修改</UiButton>
        </div>
        <div class="address__msg-line flex flex-middle">
          <span class="address__msg-line--type">收货地址:</span>
          <span class="address__msg-line--txt">{{
            curAddressListItem.province +
            curAddressListItem.city +
            curAddressListItem.area +
            curAddressListItem.detailAddress
          }}</span>
        </div>
        <div class="address__msg-line flex flex-middle">
          <span class="address__msg-line--type">收 货 人 :</span>
          <span class="address__msg-line--txt">{{
            curAddressListItem.name
          }}</span>
        </div>
        <div class="address__msg-line flex flex-middle">
          <span class="address__msg-line--type">手机号码:</span>
          <span class="address__msg-line--txt">{{
            curAddressListItem.phone
          }}</span>
        </div>
      </article>
      <div class="hr"></div>
      <div class="address__operation flex flex-column flex-middle">
        <UiButton type="grey" class="flex flex-middle" @click="onSwtich">
          <img
            class="icon"
            src="@/assets/img/goods/switch.png"
            alt="切换地址"
          />
          切换地址
        </UiButton>
        <UiButton
          type="grey"
          @click="isOperation = true"
          class="flex flex-middle"
        >
          <img class="icon" src="@/assets/img/goods/add.png" alt="新建地址" />
          新建地址
        </UiButton>
      </div>
    </div>
    <div
      class="address"
      :class="isAccount ? 'account' : 'flex flex-middle'"
      v-else
    >
      <article class="address__msg">
        <div class="address__msg-line flex flex-middle">
          <span class="address__msg-line--type">所在区域</span>
          <no-ssr
            ><v-distpicker
              :province="selectData.province.value"
              :city="selectData.city.value"
              :area="selectData.area.value"
              @selected="onSelected"
            ></v-distpicker
          ></no-ssr>
        </div>
        <div class="address__msg-line flex flex-middle">
          <span class="address__msg-line--type">详细地址</span>
          <el-input
            v-model="detailAddress"
            type="textarea"
            :rows="3"
            class="max-ipt"
            maxlength="30"
          ></el-input>
        </div>
        <div class="address__msg-line flex flex-middle">
          <span class="address__msg-line--type">收货人</span>
          <el-input v-model="addressUser" class="min-ipt" maxlength="8"></el-input>
          <span class="address__msg-line--type">手机号码</span>
          <el-input
            v-model="addressPhone"
            oninput="value=value.replace(/[^\d]/g,'')"
            class="min-ipt"
            maxlength="18"
          ></el-input>
        </div>
      </article>
      <div class="hr" v-if="!isAccount"></div>
      <div
        class="address__edit flex flex-middle"
        :class="!isAccount ? 'flex-column' : ''"
      >
        <el-checkbox v-model="defaultAddress">设为默认地址</el-checkbox>
        <div
          class="address__edit--btns flex flex-middle"
          :class="isAccount ? 'clearmargin' : ''"
        >
          <UiButton
            v-if="addressList[0]&&addressList[0].id && !isAccount"
            type="grey"
            @click="onCanceloperation()"
            >取消</UiButton
          >
          <UiButton type="yellow_panel" @click="onAddAddress"
            >{{ getEditState ? "保存" : "新增" }}地址</UiButton
          >
        </div>
      </div>
    </div>

    <el-dialog
      title="选择地址"
      center
      :visible.sync="dialogVisible"
      width="380px"
    >
      <div class="address__list">
        <section
          @click="onAddressItem(item)"
          class="address__list-item"
          :class="
            item.id == curAddressListItem.id ? 'address__list-active' : ''
          "
          v-for="item in addressList"
          :key="item.id"
        >
          <div class="address__list-item--name">
            <span class="address__list-item--label">收 货 人 ：</span
            >{{ item.name }}
          </div>
          <div class="address__list-item--phone">
            <span class="address__list-item--label">手机号码：</span
            >{{ item.phone }}
          </div>
          <div class="address__list-item--detail">
            <span class="address__list-item--label">收货地址：</span>
            {{ item.province + item.city + item.area + item.detailAddress }}
          </div>
        </section>
      </div>
      <span slot="footer" class="dialog-footer flex flex-between">
        <UiButton type="grey" @click="onCancel">取消</UiButton>
        <UiButton type="yellow_panel">确认</UiButton>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import UiButton from "@/components/UiButton.vue";
import { IsPhone } from "@/plugins/utils/index.js";
import {
  ApiGetAddress,
  ApiPostAddress,
  ApiPutAddress,
} from "@/plugins/api/base";
export default {
  components: { UiButton },
  props: {
    addressData: {
      type: Object,
      default: () => {},
    },
    isAccount: {
      type: Boolean,
      default: false,
    },
    isParentEdit: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "addressData",
    event: "emitAddress",
  },
  computed: {
    getEditState() {
      return this.isEdit || this.isParentEdit;
    },
  },
  data() {
    return {
      isEdit: false,
      isOperation: false,
      dialogVisible: false,
      detailAddress: "",
      addressUser: "",
      addressPhone: "",
      defaultAddress: false,
      selectData: {
        area: {
          value: "",
        },
        city: {
          value: "",
        },
        province: {
          value: "",
        },
      },
      addressList: [{}],
      curAddressListItem: 0,
      editIndex: 0,
    };
  },
  created() {
    this.getAddressData();
  },
  methods: {
    onCanceloperation() {
      let vm = this;
      vm.isOperation = false;
      vm.clearForm();
      vm.$emit("onSaveSuccess");
    },
    onEdit() {
      let vm = this;
      let curIndex = vm.addressList.findIndex(
        (item) => item.id == vm.curAddressListItem.id
      );
      vm.isOperation = true;
      vm.isEdit = true;
      vm.setAddressData(curIndex);
    },
    async getAddressData() {
      let vm = this;
      let res = await ApiGetAddress();
      if (res.result && res.result.length) {
        vm.isOperation = false;
        vm.addressList = res.result;
        let curIndex = vm.addressList.findIndex((item) => item.isDefault);
        vm.curAddressListItem =
          curIndex > -1 ? vm.addressList[curIndex] : vm.addressList[0];
        vm.$emit("getList", vm.addressList);
        vm.$emit("emitAddress", vm.curAddressListItem);
      } else {
        vm.defaultAddress = true;
        vm.isOperation = true;
        vm.addressList = [];
        vm.$emit("getList", vm.addressList);
      }
      console.log("获取收货地址", res);
    },
    setAddressData(i) {
      let vm = this;
      vm.editIndex = i;
      let editItem = vm.addressList[i];
      console.log(editItem);
      vm.$set(vm.selectData.area, "value", editItem.area);
      vm.$set(vm.selectData.city, "value", editItem.city);
      vm.$set(vm.selectData.province, "value", editItem.province);
      vm.$set(vm.selectData.area, "code", editItem.areaCode);
      vm.$set(vm.selectData.city, "code", editItem.cityCode);
      vm.$set(vm.selectData.province, "code", editItem.provinceCode);
      vm.$set(vm, "detailAddress", editItem.detailAddress);
      vm.$set(vm, "defaultAddress", editItem.isDefault);
      vm.$set(vm, "addressUser", editItem.name);
      vm.$set(vm, "addressPhone", editItem.phone);
    },
    onSwtich() {
      this.dialogVisible = true;
    },
    onCancel() {
      this.dialogVisible = false;
    },
    onSelected(data) {
      this.selectData = data;
    },
    async onAddAddress() {
      let vm = this;
      let curItem = vm.addressList[vm.editIndex];
      console.log(`vm.addressPhone != curItem.phone`, vm.addressPhone, curItem);
      if (!vm.selectData?.area?.code) {
        vm.$message.error("请选择所在区域~");
        return;
      }
      if (!vm.detailAddress) {
        vm.$message.error("请输入详细地址~");
        return;
      }
      if (!vm.addressUser) {
        vm.$message.error("请输入收货人~");
        return;
      }
      if (!IsPhone(vm.addressPhone) && vm.addressPhone != curItem.phone) {
        vm.$message.error("请输入收货人手机号码~");
        return;
      }
      let params = {
        area: vm.selectData.area.value,
        areaCode: vm.selectData.area.code,
        city: vm.selectData.city.value,
        cityCode: vm.selectData.city.code,
        detailAddress: vm.detailAddress,
        isDefault: vm.defaultAddress,
        name: vm.addressUser,
        phone: vm.addressPhone,
        province: vm.selectData.province.value,
        provinceCode: vm.selectData.province.code,
      };
      let res;
      if (vm.getEditState) {
        let editParams = Object.assign(vm.addressList[vm.editIndex], params);
        res = await ApiPutAddress(editParams);
      } else {
        res = await ApiPostAddress(params);
      }
      if (!res.error) {
        vm.$message.success("添加成功!");
        vm.clearForm();
        vm.$emit("onSaveSuccess");
        vm.isEdit = false;
        vm.getAddressData();
      }
      console.log(res);
    },
    onAddressItem(item) {
      let vm = this;
      vm.curAddressListItem = item;
      vm.$emit("emitAddress", item);
      vm.dialogVisible = false;
    },
    clearForm() {
      let vm = this;
      vm.$set(vm.selectData.area, "value", "");
      vm.$set(vm.selectData.city, "value", "");
      vm.$set(vm.selectData.province, "value", "");
      vm.$set(vm.selectData.area, "code", "");
      vm.$set(vm.selectData.city, "code", "");
      vm.$set(vm.selectData.province, "code", "");
      vm.$set(vm, "detailAddress", "");
      vm.$set(vm, "defaultAddress", false);
      vm.$set(vm, "addressUser", "");
      vm.$set(vm, "addressPhone", "");
    },
  },
};
</script>
<style lang="scss" scoped>
.address {
  @include layout-box;
  min-height: 189px;
  border: 1px solid #dddddd;
  padding: 28px 34px 8px;
  &__msg {
    width: 776px;
    &-line {
      margin-bottom: 20px;
      img {
        width: 20px;
        height: 24px;
        margin-right: 14px;
      }
      &--type {
        width: 70px;
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #999999;
      }
      &--txt {
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #333333;
      }
      /deep/.ui-button__yellow_panel {
        width: 62px;
        height: 30px;
        color: #ff875b;
        background: rgba(255, 135, 91, 0.1);
        border-radius: 4px 4px 4px 4px;
        margin-left: 54px;
      }

      .max-ipt {
        width: 450px;
      }

      .min-ipt {
        width: 164px;
        margin-right: 50px;
        /deep/.el-input__inner {
          width: 164px;
          height: 28px;
          background: #ffffff;
          border-radius: 2px;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
  .hr {
    width: 2px;
    height: 107px;
    background: #eeeeee;
  }
  &__operation {
    flex: 1;
    /deep/.ui-button__grey {
      width: 114px;
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #666666;
      &:nth-child(1) {
        margin-bottom: 30px;
      }
    }
    .icon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
  }

  &__edit {
    flex: 1;
    &--btns {
      margin-top: 30px;
      /deep/.ui-button__grey {
        width: 90px;
        height: 30px;
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #666666;
        margin-right: 38px;
      }
    }
    .clearmargin {
      margin: 0 0 0 20px;
    }
  }
}

.address__list {
  height: 265px;
  overflow-y: auto;
  //滚动条样式
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 4px;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #eeeeee;
  }
  &-item {
    width: 320px;
    height: 120px;
    border: 1px solid #dddddd;
    margin-bottom: 24px;
    cursor: pointer;
    padding: 16px 20px;
    > div {
      margin-bottom: 10px;
    }

    &--detail {
      @include ellipses(2);
    }

    &--label {
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #999999;
    }
  }

  &-active {
    border: 1px solid #ff875b;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
      background: url(@/assets/img/goods/active.png);
    }
  }
}

.dialog-footer {
  /deep/.ui-button {
    width: 150px;
    height: 36px;
    background: #ffffff;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid #eeeeee;
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #000;
  }
  /deep/.ui-button__yellow_panel {
    background: #ff875b;
    color: #fff;
  }
}

/deep/.distpicker-address-wrapper {
  select {
    width: 164px;
    height: 28px;
    background: #ffffff;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    padding: 0;
  }
}

.account {
  width: 1000px;
}
</style>
