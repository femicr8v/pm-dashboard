This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development Guidelines

When working on this project, always follow these guidelines:

1. **Use shadcn/ui components** as the preferred UI library for all pages, components, and layouts.
   - Before using any specific shadcn/ui component, check if that component is already installed in the project.
   - If the required component is not installed, install it using: `npx shadcn@latest add [component-name]`
   - Current shadcn/ui configuration: New York style with Slate base color

2. **Use context7 MCP** for all searches, references, or documentation lookups when developing.

3. **Code Quality Standards:**
   - Ensure code is clean, semantic, and accessible
   - Follow best practices for maintainability
   - Use TypeScript for type safety
   - Follow React and Next.js best practices

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
