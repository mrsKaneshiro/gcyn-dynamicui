<template>
  <div id="app">
    <g-breadcrumb />
    <g-table
      :data-list="dataList"
      :column="column"
      :total="total"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
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
        label: 'ID',
      },
      {
        props: 'name',
        label: '姓名',
      },
    ];
    this.dataList = [
      {
        id: '12345',
        name: 'gaoxin',
      },
      {
        id: '1111',
        name: 'gaoxin',
        $style: {
          id: 'backgroundColor: #008000',
          name: 'backgroundColor: #fff000',
        },
      },
    ];
  },
  // components: {
  //   gTable
  // },
  methods: {
    currentChange(val) {
      console.log(`父级${val}页`);
    },
  },
};
</script>
