# MAISON ÉLÉGANCE - 高端品牌网站模板

一个优雅的高端品牌展示网站模板，基于 Next.js 构建，支持中英文切换，响应式设计。

## 项目结构

```
app/
├── components/          # 可复用组件
│   ├── layout/         # 布局相关组件
│   │   ├── Header/    
│   │   ├── Footer/    
│   │   └── Navbar/    
│   ├── ui/            # UI 组件
│   │   ├── Button/   
│   │   ├── Card/     
│   │   └── Icons/    
│   └── sections/      # 页面区块组件
│       ├── Hero/      
│       ├── Features/  
│       └── Contact/   
├── styles/            # 样式文件
│   ├── globals.css    # 全局样式
│   └── variables.css  # CSS 变量
├── utils/             # 工具函数
│   ├── i18n.js       # 国际化工具
│   └── animations.js  # 动画工具
├── hooks/             # 自定义 Hooks
│   └── useScroll.js  # 滚动相关 Hook
└── content/          # 内容配置
    └── locales/      # 多语言内容
        ├── zh.js     # 中文内容
        └── en.js     # 英文内容
```

## 主要功能

1. 响应式设计
   - 桌面端（1024px+）
   - 平板端（768px - 1024px）
   - 移动端（<768px）

2. 多语言支持
   - 中文
   - 英文
   - 易扩展其他语言

3. 交互功能
   - 导航栏透明渐变
   - 汉堡菜单动画
   - 卡片翻转效果
   - 平滑滚动

4. 组件特性
   - 顶部导航栏（透明渐变）
   - 侧边菜单（响应式）
   - 翻转卡片展示
   - 页脚联系信息

## 样式主题

1. 颜色系统
```css
:root {
  --primary: #4A3F35;     /* 主色 */
  --primary-light: #6B5D4F;
  --background: #FAF3E0;  /* 背景色 */
  --text: #1a1a1a;       /* 文本色 */
  --text-light: #D4C8BE;
}
```

2. 字体系统
```css
:root {
  --font-primary: "Playfair Display", serif;
  --font-secondary: system-ui, sans-serif;
}
```

## 使用指南

1. 安装依赖
```bash
npm install
```

2. 开发环境运行
```bash
npm run dev
```

3. 构建生产版本
```bash
npm run build
```

## 自定义配置

1. 内容修改
   - 编辑 `content/locales` 下的语言文件
   - 修改文本和图片资源

2. 样式定制
   - 修改 `styles/variables.css` 中的主题变量
   - 调整组件样式文件

3. 功能扩展
   - 在 `components` 中添加新组件
   - 在 `hooks` 中添加新的功能钩子

## 性能优化

1. 图片优化
   - 使用 Next.js Image 组件
   - 支持响应式图片
   - WebP 格式支持

2. 代码分割
   - 组件懒加载
   - 路由级别代码分割

3. SEO 优化
   - 语义化 HTML
   - Meta 标签优化
   - 结构化数据

## 最佳实践

1. 组件开发
   - 保持组件单一职责
   - 使用 TypeScript 类型检查
   - 编写组件文档

2. 样式管理
   - 使用 CSS Modules
   - 遵循 BEM 命名规范
   - 响应式设计优先

3. 状态管理
   - 使用 React Hooks
   - 合理的状态提升
   - 避免过度优化

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交变更
4. 发起 Pull Request

## 许可证

MIT License
