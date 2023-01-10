# 🍚Norisang Restaurant Webpage のりさん食堂

## Setup ESLint

1. npx eslint --init
2. npm install -D eslint-plugin-simple-import-sort eslint-plugin-unused-imports

---

## **Client**

### > React (v18.2)

---

### > Nextjs (v13.1.1)

- npx create-next-app@latest --typescript

---

### > Tailwind CSS

https://tailwindcss.com/docs/installation

1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p

> Add the Tailwind directives to your CSS

```css
/** global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Configure your template paths

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss")],
};
```

---

### > Font Awesome

> https://fontawesome.com/icons

1. npm i --save @fortawesome/fontawesome-svg-core
2. npm install --save @fortawesome/free-solid-svg-icons
3. npm i --save @fortawesome/free-brands-svg-icons
4. npm i --save @fortawesome/react-fontawesome@latest

※ Typescript Issue

![FontAwesomeIconProps 오류](https://user-images.githubusercontent.com/75498045/211368357-f42025bd-c6ba-46e5-b83f-b073b21c87ed.png)

> solution
>
> > https://github.com/FortAwesome/react-fontawesome/issues/366
