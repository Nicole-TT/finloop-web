# 样式目录说明

`index.html` 通过 stylesheet 链接提前加载 `src/styles.css`，不再等待 React 脚本导入样式。后者是有序入口，负责 Google Fonts、Tailwind 和业务样式的加载；不在入口添加具体选择器。

## 文件职责

- `global/theme.css`：字体栈、Tailwind 主题、品牌变量。
- `global/base.css`：CSS 变量、页面基础、全局字体特性（case 与连字设置）。
- `global/elements.css`：链接、按钮继承、键盘焦点、跳转链接。
- `global/languages.css`：繁体语言的 PingFang HK 字体回退顺序。
- `components/`：导航、页脚、公共 CTA、产品首屏、平台案例、AI 助手及设置。
- `pages/`：首页、金融产品、FinOne、FinEAM、星企通、FinRWA、Web Portal、星路通、星智通、AI、关于我们、新闻、联系、招聘及解决方案。
- `shared/`：现有跨页面基础规则、布局调整、AI 侧栏引起的响应式适配。部分历史规则同时服务多个页面，保留在这里。

## 常见修改位置

| 修改内容 | 文件 |
| --- | --- |
| 默认字体和品牌主题 | `global/theme.css` |
| case / 连字等全局字体特性 | `global/base.css` |
| 繁体字体 | `global/languages.css` |
| 首页 Logo 动画区域、AI 输入区 | `pages/home.css` |
| 首页四组数据的字号、字重、位置 | `pages/home-metrics.css` |
| FinOne 页面 | `pages/finone.css`、`pages/finone-refinements.css` |
| FinEAM 页面 | `pages/fineam.css` |
| 星企通页面 / 对比版本 | `pages/xingqitong.css` / `pages/xingqitong-comparison.css` |
| 全站 AI 会话界面 | `components/assistant.css` |
| 公共产品首屏 | `components/product-hero.css` |
| 公共 CTA 最终样式 | `components/cta.css` |

## 加载和维护规则

本次是文件拆分，不是视觉重构。原有声明、选择器、媒体查询和加载顺序全部保留；按入口顺序拼接各文件，可以还原拆分前的规则文本。

`-base` 表示早期基础规则，`-refinements` 表示后续调整。它们暂时没有合并，因为合并会移动规则，可能改变与公共样式之间的覆盖关系。涉及多个页面的规则没有强行复制进各页面。

所有 CSS 仍统一加载；本次没有改成路由懒加载，也没有引入 CSS Modules、改类名或新增依赖。拆分的目的在于维护职责清晰，不代表 CSS 下载体积下降。

修改前先查找现有选择器，注意入口中后加载的文件是否覆盖它。页面响应式规则与其对应区块保存在一起；新的公共组件样式放入 components，页面独有样式放入 pages。不要随意重排入口导入，也不要为了覆盖一条规则再新增文件。
