# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (App directory) and NextUI (v2).

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-pages-template)

> Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
> Read more: [App Router](https://nextjs.org/docs/app/)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

### For Javascript use below command to get boilerplate template used with demo pages

```bash
git clone https://github.com/lakshya-webDev/nextui-js-bolierplate.git
```

### For Typescript use below command to get boilerplate template used with demo pages

```bash
npx create-next-app -e https://github.com/nextui-org/next-pages-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

### How to use meta tags in Next JS adding the common meta data text in json and use in each page
```bash
{
    "home": {
        "title": "Home - Next.js + NextUI",
        "description": "Make beautiful websites regardless of your design experience."
    },
    "employees": {
        "title": "Employees - All Employees List",
        "description": "Welcome to the Employees Page listing"
    }
}

eg:for page.jsx
add below
export const metadata = {
  title: MetData['home'].title,
  description: MetData['home'].description,
}

```
## License

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).
