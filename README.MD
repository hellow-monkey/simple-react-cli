## 一个简单的react脚手架

### 说明
* 基础框架: react + react-router + hox
* 构建工具: webpack + typescript + babel + eslint + prettier + stylelint + scss + postcss
* 其他工具集成: flyio + compressorjs + viewerjs + reset-css + normalize.css
* 主要是个人的经验总结，包括了常用工具函数、常用css处理、个人觉得很舒服的项目结构、状态管理等

### 特点
* 同时支持pc端和移动端适配
* 使用hox最为状态管理库，贼香
* route配置，可拓展支持权限控制等场景
* 常用的助手函数开箱即用
* 常用的css类集成，足以应对大部分场景

## 目录说明
* build => webpack配置
* dist => 产出
* public => html为模板，其他文件打包会拷过去
* src.config => 项目配置，含route配置
* src.extend => 拓展原生方法，如Array的flat方法
* src.helper => 助手函数，涵盖: 加解密、文件压缩、路由处理、本地存储、常用的校验、图片预览、防抖、节流、路由参数处理等等
* src.layout => 页面布局模板
* src.page => 页面
* src.plugin => 工具拓展，如网络请求、日期处理等
* src.service => 业务代码归属地，分模块编写业务代码
* src.static => 样式、图片等
* src.store => 数据存放的地方，分模块编写业务的配置信息及缓存数据(hox)
* src.component => 组件

### 建议
* tsx的部分改用js写，这样能省去很多事，而且tsx的内容大多不需要大多的引入提示
* 尽量抽离出公共样式，尽量使用css变量