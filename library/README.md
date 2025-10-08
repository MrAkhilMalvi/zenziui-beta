
````md
# 🌈 ZenZi UI

Elegant and modern React component library built with **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- ⚡️ Built with **React + TypeScript**
- 🎨 Styled using **Tailwind CSS**
- 🌀 Smooth animations powered by **Framer Motion**
- 🧩 Reusable, customizable, and themeable components
- 🧱 Perfect for modern Next.js applications

---

## 📦 Installation

```bash
npm install zenziui
# or
yarn add zenziui
# or
pnpm add zenziui
````

---

## 🚀 Usage

Import components directly into your React or Next.js project:

```tsx
import { AIInput_01 } from "zenziui";

export default function App() {
  const handleSubmit = (value: string) => {
    console.log("AI prompt:", value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <AIInput_01
        placeholder="Ask AI anything..."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

```

Make sure Tailwind CSS is set up in your project.
You can customize the look using your own Tailwind theme.

---

## 🧱 Components

| Component       | Description                                         |
| --------------- | --------------------------------------------------- |
| `HeroGeometric` | A modern hero section with animated gradient shapes |
| `Button`        | Elegant, themeable buttons                          |
| `Input`         | Beautiful and accessible form inputs                |
| `Card`          | Flexible container for content sections             |

*(More coming soon…)*


## 🧾 License

MIT © [MrAkhilMalvi](https://github.com/MrAkhilMalvi)



