# MAISON ÉLÉGANCE

[English](#english) | [中文](#chinese)

# <a name="english"></a>Luxury Jewelry Brand Website

An elegant luxury jewelry brand website built with Next.js, featuring bilingual support and responsive design.

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Hero/           # Hero section
│   ├── Collections/    # Collections display
│   ├── Featured/       # Featured items
│   ├── Latest/         # Latest collections
│   ├── Services/       # Craftsmanship
│   ├── Footer/         # Footer component
│   └── Sidebar/        # Side navigation
├── locales/            # Localization
│   ├── zh.js          # Chinese content
│   └── en.js          # English content
└── page.js            # Main page
```

## Key Features

1. Responsive Design
   - Desktop (1024px+)
   - Tablet (768px - 1024px)
   - Mobile (<768px)

2. Bilingual Support
   - English
   - Chinese

3. Interactive Features
   - Sidebar navigation
   - Language switching
   - Responsive layout
   - Elegant animations

4. Component Features
   - Side navigation menu
   - Brand showcase
   - Collection display
   - Craftsmanship section
   - Footer information

## Theme Styling

1. Color System
```css
:root {
  --primary: #B8860B;     /* Primary - Dark Gold */
  --background: #000;     /* Background - Black */
  --text: #fff;          /* Main Text - White */
  --text-secondary: #888; /* Secondary Text - Gray */
}
```

## Getting Started

1. Install Dependencies
```bash
npm install
```

2. Development
```bash
npm run dev
```

3. Production Build
```bash
npm run build
```

## Customization

1. Content Modification
   - Edit language files in `locales`
   - Modify text content

2. Style Customization
   - Modify component style files
   - Adjust responsive layout

## Performance

1. Image Optimization
   - Next.js Image component
   - Responsive images

2. Code Splitting
   - Component-level splitting
   - Lazy loading

3. SEO Optimization
   - Semantic HTML
   - Meta tags optimization

---

# <a name="chinese"></a>高端珠宝品牌网站

一个优雅的高端珠宝品牌展示网站，基于 Next.js 构建，支持中英文切换，响应式设计。

## 项目结构

```
app/
├── components/          # 可复用组件
│   ├── Hero/           # 首屏展示
│   ├── Collections/    # 系列展示
│   ├── Featured/       # 精选展示
│   ├── Latest/         # 最新系列
│   ├── Services/       # 匠心工艺
│   ├── Footer/         # 页脚组件
│   └── Sidebar/        # 侧边导航
├── locales/            # 多语言配置
│   ├── zh.js          # 中文内容
│   └── en.js          # 英文内容
└── page.js            # 主页面
```

## 主要功能

1. 响应式设计
   - 桌面端（1024px+）
   - 平板端（768px - 1024px）
   - 移动端（<768px）

2. 多语言支持
   - 中文
   - 英文

3. 交互功能
   - 侧边栏导航
   - 语言切换
   - 响应式布局
   - 优雅动画效果

4. 组件特性
   - 侧边导航菜单
   - 品牌展示区域
   - 系列展示
   - 匠心工艺
   - 页脚信息

## 样式主题

1. 颜色系统
```css
:root {
  --primary: #B8860B;     /* 主色调 - 暗金色 */
  --background: #000;     /* 背景色 - 黑色 */
  --text: #fff;          /* 主要文本 - 白色 */
  --text-secondary: #888; /* 次要文本 - 灰色 */
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
   - 编辑 `locales` 下的语言文件
   - 修改文本内容

2. 样式定制
   - 修改组件样式文件
   - 调整响应式布局

## 性能优化

1. 图片优化
   - 使用 Next.js Image 组件
   - 支持响应式图片

2. 代码分割
   - 组件级别代码分割
   - 按需加载

3. SEO 优化
   - 语义化 HTML
   - Meta 标签优化

## License | 许可证

MIT License
