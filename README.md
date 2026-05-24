# V2 Labs - Next.js Frontend Web App

This is the front-facing digital portal for the **V2 Labs** agency. It has been built using **Next.js (App Router)** and **TypeScript** to achieve high performance, responsive navigation, and visually stunning interactive elements.

## Features

- **Premium Vanilla CSS Design System**: Fully configured using HSL variables in `globals.css` to render standard dark navy backgrounds (`#0F172A`), electric blue glows (`#2563EB`), cyan highlight accents (`#06B6D4`), and pristine typography (Google Fonts Outfit & Inter).
- **Responsive Navigation & Layout**: Tailored layouts with fluid grids that scale flawlessly between mobile smartphones, tablets, and wide screens.
- **Client-Side Form Estimator**: Integrated estimation forms that handle input validation, load states, error feedback, and success banners when saving leads to Django.
- **Next.js Standalone Build**: Configured inside `next.config.ts` for super-efficient Docker Alpine production images.

---

## 🛠️ Getting Started Locally

1. Ensure you have **Node.js (v18+)** installed.
2. In this folder (`v2-frontend`), install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the web app at [http://localhost:3000](http://localhost:3000).

## 🐋 Docker Container Commands

- **Build Docker Image**:
  ```bash
  docker build -t v2labs-frontend .
  ```
- **Run Container**:
  ```bash
  docker run -p 3000:3000 v2labs-frontend
  ```
