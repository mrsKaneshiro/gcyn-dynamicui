import BreadCrumb from './breadCrumb.vue'; // 如果这里报红， 加一个env.d.ts，再去 tsconfig.json 里面这样配置："include": ["packages/**/*.ts", "packages/**/*.d.ts", "packages/**/*.tsx", "packages/**/*.vue", "./*.d.ts"],

// 一定要先给name赋值，这样后面的局部install和全局install方法才能读到同一个name
BreadCrumb.name = 'g-breadcrumb';

// 用户按需加载
// 为组件添加 install 方法，用于按需引入
// 如果想通过CDN方式引入，需要编写install函数
BreadCrumb.install = function (Vue) {
  // 注册组件
  Vue.component('g-breadcrumb', BreadCrumb);
};

export default BreadCrumb;
