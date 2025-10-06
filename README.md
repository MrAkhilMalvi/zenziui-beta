# ZenziUI 🎨

A modern, lightweight, and customizable **React component library** designed to speed up development with **production-ready UI building blocks**. Built with **TailwindCSS, Radix, and Framer Motion**, ZenziUI focuses on **accessibility, theming, and developer experience**.

![ZenziUI Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=ZenziUI+🎨+Modern+React+Components)

[![npm version](https://img.shields.io/npm/v/zenziui.svg?style=flat-square)](https://www.npmjs.com/package/zenziui)
[![bundle size](https://img.shields.io/bundlephobia/minzip/zenziui?style=flat-square)](https://bundlephobia.com/package/zenziui)
[![license](https://img.shields.io/github/license/MrAkhilMalvi/zenziui?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square)](https://www.typescriptlang.org/)

🌐 **Live Documentation**: [zenziui-beta.vercel.app](https://zenziui-beta.vercel.app)

---

## ✨ Why ZenziUI?

| Feature | Benefit |
|---------|---------|
| ⚡ **Headless + Styled** | Radix primitives for accessibility + Tailwind for beautiful styling |
| 🎭 **Motion-Ready** | Built-in Framer Motion animations out of the box |
| 🎨 **Themeable** | Dark mode & custom themes with CSS variables |
| 📦 **Tree-Shakable** | Import only what you need, keep bundles light |
| 🔥 **Developer First** | TypeScript, CVA variants, and flexible APIs |

---

## 🚀 Quick Start

### Installation

```bash
# npm
npm install zenziui

# pnpm
pnpm add zenziui

# yarn
yarn add zenziui
```

### Basic Usage

```tsx
import { Button, Card, Input } from "zenziui";

export default function LoginForm() {
  return (
    <Card className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>
      <div className="space-y-4">
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email" 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter your password" 
        />
        <Button variant="primary" size="lg" className="w-full">
          Sign In
        </Button>
      </div>
    </Card>
  );
}
```

---

## 🎨 Components Showcase

### Interactive Buttons
```tsx
import { Button, ParticleButton } from "zenziui";

// Standard buttons
<Button variant="primary" size="md">Click Me</Button>
<Button variant="outline" size="sm">Outline</Button>

// Special effects
<ParticleButton>Magic ✨</ParticleButton>
```

### User Avatars
```tsx
import { Avatar, AvatarPicker } from "zenziui";

// Single avatar
<Avatar 
  src="/user.jpg" 
  alt="User" 
  size="lg" 
  fallback="UA" 
/>

// Avatar picker with upload
<AvatarPicker onImageChange={(file) => console.log(file)} />
```

### Form Elements
```tsx
import { Input, Select, Checkbox } from "zenziui";

<Input label="Username" placeholder="Enter username" />
<Select 
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]} 
/>
<Checkbox label="Accept terms and conditions" />
```

### Background Elements
```tsx
import { BackgroundPaths } from "zenziui";

<BackgroundPaths 
  color="#6366f1" 
  density={10} 
  speed={1.5} 
/>
```

---

## 🎭 Animation Examples

```tsx
import { motion } from "framer-motion";
import { Button } from "zenziui";

// Hover animations
<Button 
  variant="primary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Animated Button
</Button>

// Page transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Card>Content with entrance animation</Card>
</motion.div>
```

---

## 🛠️ Advanced Usage

### Custom Theming

```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}

// Your component
<Button 
  variant="primary" 
  className="bg-primary-500 hover:bg-primary-600"
>
  Custom Themed
</Button>
```

### Component Variants

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
  }
);
```

---

## 📦 Available Components

| Component | Status | Description |
|-----------|--------|-------------|
| Button | ✅ Stable | Multiple variants with animations |
| Avatar | ✅ Stable | User avatars with fallbacks |
| AvatarPicker | ✅ Stable | Image upload with crop |
| ParticleButton | ✅ Stable | Button with particle effects |
| BackgroundPaths | ✅ Stable | Animated background patterns |
| Input | ✅ Stable | Form inputs with labels |
| Select | ✅ Stable | Custom select dropdown |
| Checkbox | ✅ Stable | Custom checkbox |
| Card | ✅ Stable | Container component |
| Modal | 🚧 Beta | Accessible modal dialog |
| Tabs | 🚧 Beta | Interactive tab component |
| Navigation | 🔄 Planned | Responsive navigation |
| DataTable | 🔄 Planned | Sortable, filterable tables |

---

## 🔧 Development

### Local Setup

```bash
# Clone repository
git clone https://github.com/MrAkhilMalvi/zenziui
cd zenziui

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build library
pnpm build
```

### Project Structure

```
zenziui/
├── packages/
│   ├── ui/           # Component library
│   ├── docs/         # Documentation site
│   └── utils/        # Shared utilities
├── examples/         # Usage examples
└── scripts/          # Build scripts
```



## 🤝 Contributing

We love contributions! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

- Use TypeScript for all new components
- Follow the existing code style and structure
- Add tests for new features
- Update documentation accordingly
- Ensure accessibility standards (a11y)

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea? Let us know!

- **Bug Reports**: [Create an issue](https://github.com/MrAkhilMalvi/zenziui/issues/new?template=bug_report.md)
- **Feature Requests**: [Suggest a feature](https://github.com/MrAkhilMalvi/zenziui/issues/new?template=feature_request.md)
- **Questions**: [Discussion forum](https://github.com/MrAkhilMalvi/zenziui/discussions)

---

## 📚 Documentation & Resources

- 📖 [Full Documentation](https://zenziui-beta.vercel.app) - Complete API reference and guides
- 🎯 [Examples Gallery](https://zenziui-beta.vercel.app/docs) - Real-world usage examples
- 🎨 [Theme Builder](https://zenziui-beta.vercel.app/theming) - Customize your theme
- 📱 [Component Playground](https://zenziui-beta.vercel.app/playground) - Experiment with components

---

## ❤️ Community & Support

- **Share your projects** using `#ZenziUI` on [Twitter](https://twitter.com) and [LinkedIn](https://linkedin.com)
- **Join discussions** on our [GitHub Discussions](https://github.com/MrAkhilMalvi/zenziui/discussions)
- **Follow updates** - Star the repository to stay updated

---

## 📜 License

MIT © 2025 [Akhil Malvi](https://github.com/MrAkhilMalvi)

See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ using React, TypeScript, TailwindCSS, and Radix UI**

[Get Started](#quick-start) • [View Components](#-components-showcase) • [Join Community](#-community--support)

</div>

---

