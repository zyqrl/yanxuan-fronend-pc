<!--
 * @Author: ch
 * @Date: 2022-05-04 17:50:33
 * @LastEditors: ch
 * @LastEditTime: 2022-06-01 11:40:32
 * @Description: file content
-->

<template>
  <div class="home-banner">
    <el-carousel height="360px" indicator-position="outside">
      <el-carousel-item v-for="item in data" :key="item.id">
        <el-image
          @click="onBannerClick(item)"
          :src="item.pictureUrl"
          fit="cover"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { AD_JUMP_TYPE } from '@/plugins/dicts/ad';
export default {
  name: "HomtBanner",
  props : {
    data : {
      type : Array,
      default : () => ([])
    }
  },
  data() {
    return {
    };
  },
  methods: {
    onBannerClick(item) {
      switch (item.jumpType) {
        case AD_JUMP_TYPE.GOODS:
          window.open(`${location.origin}/goods/detail/${item.jumpUrl}`);
          break;
        case AD_JUMP_TYPE.CATEGORY:
          window.open(`${location.origin}/goods/list?id=${item.jumpUrl}&levelType=2`);
          break;
        case AD_JUMP_TYPE.LINK:
          window.open(item.jumpUrl, '_blank');
          break;
        default: 
          break
      }
    }

  },
};
</script>
<style lang="scss" scoped>
.home-banner {
  @include layout-box;
  /deep/.el-carousel {
    .el-carousel__container {
      i {
        font-size: 18px;
      }
    }
    .el-carousel__arrow {
      width: 45px;
      height: 45px;
    }
    .el-carousel__indicators {
      display: none;
    }
    .el-carousel__arrow--left {
      left: calc(50% - 550px) !important;
    }
    .el-carousel__arrow--right {
      right: calc(50% - 550px) !important;
    }
    .el-image {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>
