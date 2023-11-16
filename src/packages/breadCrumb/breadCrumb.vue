<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(k, i) in toList" :key="i" :to="`${k.path}`">
        <!-- <i class="el-icon-s-home" v-if="i == 0" /> -->
        {{ k.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'g-breadcrumb',
  data() {
    return {
      toList: [],
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        this.handleRouteChange(to, from);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleRouteChange(to, from) {
      if (!to.meta.breadCrumb) {
        return;
      }
      const bc = to.meta.breadCrumb;
      this.toList = [];
      const pathList = to.path.split('/').slice(1);
      if (bc.length !== pathList.length) {
        console.log('meta与路径匹配失败，请重新配置路由');
        console.log(bc, pathList);
        return;
      }
      let t = '';
      for (let i = 0; i < bc.length; i++) {
        t = t + '/' + pathList[i];
        this.toList.push({
          name: bc[i],
          path: t,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  margin: 20px 10px 20px 0px;
}
</style>
