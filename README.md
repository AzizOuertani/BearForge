# Bearforge website

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

## Add projects or partners

1. Add a background image under `/public/images/partners` || `/public/images/projects`
2. Create a React component that contains the logo in SVG format under `/public/svg/partner` || `/public/svg/project`
3. Access the `src/data/partners.tsx` || `src/data/projects.tsx`  file and add the following:

```javascript
   {
    name: "partner_project_name",
    description: "partner_project_description",
    imageUrl: "/images/partners/clevercloud-background.png",
    twitterUrl: "twitter URL",
    githubUrl: "GitHub URL",
    linkedinUrl: "LinkedIn URL",
    projectLogo: <projectLogo />,
    button: "Visit Website",
    buttonUrl: "website URL",
  }
```



## Project Configuration

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
