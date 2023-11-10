# DynmicUI 使用说明

## 1. g-table

必传参数：

```
  :dataList="dataList" //表格体
  :column="column"  //表头
  :total="total"    //总页数
  @currentChange    //翻页事件，非必选
  slot name="scope"
```

interface

```
dataList = [
      {
        id: '12345',
        name: ''
      },
      {
        id: '1111',
        name: '',
        // 如有定制表格背景颜色，须在$style中添加
        $style: {
          id: 'backgroundColor: #008000',
          name: 'backgroundColor: #fff000',
        },
      },
    ]

column = [
      {
        props: 'id',
        label: 'ID'
      },
      {
        props: 'name',
        label: '姓名'
      },
    ];
```
