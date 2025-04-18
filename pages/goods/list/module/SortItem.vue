<template>
  <div class="sort-item" @click="onSort">
    <span class="sort-item-txt">{{ sortText }}</span>
    <div class="sort-img-box">
      <img
        v-if="sortType === 0 || sortType === 1"
        src="~/assets/img/goods/sort-t1.png"
        alt="sort"
      />
      <img
        v-if="sortType === 2"
        src="~/assets/img/goods/sort-t2.png"
        alt="sort"
      />
      <img
        v-if="sortType === 0 || sortType === 2"
        src="~/assets/img/goods/sort-b1.png"
        alt="sort"
      />
      <img
        v-if="sortType === 1"
        src="~/assets/img/goods/sort-b2.png"
        alt="sort"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "SortItem",
  props: {
    sortText: {
      type: String,
      default: "",
    },
    /* 
      0:未选中
      1:desc
      2:asc
    */
    sortType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    onSort() {
      this.$emit("onSort");
    },
  },
};
</script>
<style lang="scss" scoped>
.sort-item {
  margin-right: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .sort-item-txt {
    margin-right: 6px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .sort-img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img {
    width: 6px;
    height: 3px;
    margin: 3px 0;
  }
}
</style>
