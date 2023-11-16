# DynmicUI 使用说明

## 1. 动态表格 | g-table

必传参数：

```JavaScript
  :dataList="dataList" //表格体
  :column="column"  //表头
  :total="total"    //总页数
  @currentChange    //翻页事件，非必选
  slot name="scope"
```

interface

```JavaScript
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

## 2. 动态面包屑 | g-breadcrumb

g-breadcrumb 会自动观测 router 变化来生成，因此只需要配置 router.config.js 即可，配置方法如下：

```JavaScript
// router.config.js
{
    path: '/predict',
    meta: {
      breadCrumb: ['表征预测'],
    },
    component: () => import('@ra-phenotype-predict/pages/predict.vue'),
  },
  {
    path: '/predict/detail', // breadcrumb层级需要严格遵循路由层级
    meta: {
      breadCrumb: ['表征预测', '疾病活动等级预测'],
    },
    component: () =>
      import('@ra-phenotype-predict/pages/predict/predictDetail.vue'),
  },
  {
    path: '/research',
    meta: {
      breadCrumb: ['我的研究'],
    },
    component: () => import('@ra-phenotype-predict/pages/research.vue'),
  },
  {
    path: '/research/detail',
    name: 'researchDetail',
    beforeEnter: (to, from, next) => { // 动态的labels可以通过路由拦截来作动态修改
      to.meta.breadCrumb = ['我的研究', to.params.modelLabels];
      next();
    },
  },
```

注意：需要 breadcrumb 的所有路由均在同一个路由层级，不存在 children 关系。

使用方法

```html
<!-- app.vue -->
<g-breadcrumb />
```
