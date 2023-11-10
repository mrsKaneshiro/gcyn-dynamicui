<template>
  <div id="app">
    <g-table
      :dataList="dataList"
      :column="column"
      :total="total"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
// import gTable from './packages/table/gTable.vue'

export default {
  name: 'App',
  // components: {
  //   gTable
  // },
  methods: {
    currentChange(val) {
      console.log(`父级${val}页`)
    }
  },
  data() {
    return {
      dataList: [],
      column: [],
      total: 50,
    };
  },
  beforeMount() {
    this.column = [
      {
        props: 'id',
        label: 'ID'
      },
      {
        props: 'name',
        label: '姓名'
      },
    ];
    this.dataList = [
      {
        id: '12345',
        name: 'gaoxin'
      },
      {
        id: '1111',
        name: 'gaoxin',
        $style: {
          id: 'backgroundColor: #008000',
          name: 'backgroundColor: #fff000',
        },
      },
    ]
  },
}
</script>
