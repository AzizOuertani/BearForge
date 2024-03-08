# Web Starter / Landing Page with Next.js + Tailwind CSS + TypeScript

## Getting Started

Clone the repository:
```bash
git clone https://github.com/AzizOuertani/BearForge.git
```

Install dependencies:
```bash
cd BearForge
npm install
```

Run the development server:

```bash
npm run dev
```

## Project Configuration

#### Change Title, Description, and Application URL

Open the file `src/constants/config.ts` and modify the title, description, and URL of your application.

#### Configure Favicon

Generate your own favicon using RealFaviconGenerator, then copy it to the `/public/favicon` folder

#### Configure Fonts

I use Inter as the default font. You can replace it with another font if you wish or add another one.

Import the font into the main layout `src/app/layout.tsx`:

```javascript
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

Configure `theme.extend.fontFamily` in `tailwind.config.js` :

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
  },
}
```

## Components

Components are configured with `shadcn/ui`. You can easily start adding components. For example, to add a button, run the following command:

```bash
npx shadcn-ui@latest add button
```
