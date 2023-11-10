<template>
  <div class="g-table">
    <el-table :data="dataList" border stripe :cell-style="cellStyle">
      <el-table-column
        v-for="(e, i) in column"
        :key="i"
        :prop="e.props"
        align="center"
        :label="e.label"
      />
      <slot name="scope"></slot>
      <!-- 操作栏 -->
    </el-table>
    <el-row v-show="total > 10" type="flex" justify="end">
      <el-pagination
        layout="total, prev, pager, next"
        :total="total"
        :current-page.sync="pageNo"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'gTable',
  props: {
    dataList: {
      type: Array,
      require: true,
      default: () => []
    },
    column: {
      type: Array,
      require: true,
      default: () => []
    },
    total: {
      type: Number || String,
      require: true,
      default: 0,
    },
  },
  data() {
    return {
      pageNo: 1,
      pageSize: 10
    };
  },
  methods: {
    cellStyle({ row, column }) {
      if (row.$style) {
        // 说明这行里面有列需要设置cellstyle
        const styleList = Object.keys(row.$style) //获取需要设置的列
        const cY = column.property // 当前遍历到的列
        if (styleList.indexOf(cY) > -1) {
          // 说明这个值需要设置背景颜色
          return `${row.$style[cY]}`
        } else {
          return
        }
      }
      return
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      // 翻页，触发父级翻页逻辑，重新传递表格内容
      this.$emit('currentChange', val);
    }
  },
};
</script>

