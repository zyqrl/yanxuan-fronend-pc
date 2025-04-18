<!--
* @Description：使用请参考https://element.eleme.cn/#/zh-CN/component/pagination
-->
<template>
  <div class="bs-pagination flex flex-right">
    <el-pagination
      background
      v-bind="$attrs"
      :current-page="currentPage"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      @size-change="$emit('size-change', $event)"
      @current-change="$emit('current-change', $event)"
    >
    </el-pagination>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BsPagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: "prev, pager, next, jumper",
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
.bs-pagination {
  @include layout-box;
  margin-top: 60px;
  /deep/.el-pagination {
    .btn-prev,
    .btn-next {
      width: 32px;
      height: 32px;
      background: #ffffff;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .el-pagination__jump {
      color: #333333;
    }
    .el-pager {
      .number {
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 2px;
      }
      .active {
        color: #ffffff;
        background: #ff512b;
        border: none;
      }
    }
  }
}
</style>
