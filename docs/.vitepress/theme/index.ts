import DefaultTheme from 'vitepress/theme'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import { Test } from './../../../src/components/Test';

import 'vitepress-theme-demoblock/theme/styles/index.css'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'

export default {
  ...DefaultTheme,
  // 扩展实例
  enhanceApp({ app }) {
    // 注册 DemoBlock 组件
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
    // 注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
  },
}
