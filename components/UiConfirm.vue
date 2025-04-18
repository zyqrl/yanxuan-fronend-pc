<template>
  <el-dialog
    width="16%"
    center
    :visible.sync="dialogVisible"
    :show-close="false"
    class="bs-order-ensure"
  >
    <div class="dialog-content flex flex-middle">
      <img src="~/assets/img/common/icon-warning.png" />
      <span>{{ title }}</span>
    </div>
    <div class="dialog-footer flex flex-between">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button class="dialog-footer__btn--ensure" @click="onConfirm"
        >确认</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
import UiButton from "./UiButton.vue";
export default {
  components: { UiButton },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },
  methods: {
    onConfirm() {
      this.$emit("confirm");
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-dialog {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 41px 60px;
    .dialog-content {
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
      padding: 0 2px 42px 2px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 17px;
      }
    }
    .dialog-footer {
      .el-button {
        width: 90px;
        height: 30px;
        font-size: 14px;
      }
      .dialog-footer__btn--ensure {
        background: #ff875b;
        color: #ffffff;
      }
    }
  }
}
</style>
