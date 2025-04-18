<template>
  <el-dialog
    center
    width="17%"
    :visible.sync="dialogVisible"
    :show-close="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <div class="flex flex-column flex-middle">
      <div class="dialog-body-wrap">
        <p>本期秒杀活动已结束</p>
        <p>感谢你的参与</p>
      </div>
      <UiButton type="yellow_gradual" :radius="true" @click="onClose"
        >好的</UiButton
      >
    </div>
  </el-dialog>
</template>
<script>
import UiButton from "@/components/UiButton";
export default {
  name: "SeckillDialogEnd",
  components: { UiButton },
  props: {
    visible: {
      type: Boolean,
      default: false,
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
    onClose() {
      this.$emit("close");
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
    padding: 41px 0;
    .dialog-body-wrap {
      width: 145px;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: rgba(0, 0, 0, 0.9);
      margin-bottom: 20px;
    }
    .ui-button {
      width: 164px;
      height: 30px;
    }
  }
}
</style>
