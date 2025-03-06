# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase professional skills, projects, and experience.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional interface using Tailwind CSS and Shadcn UI components
- **Dynamic Content**: Easily updatable sections for projects, skills, and experience
- **Admin Panel**: Secure admin area for content management
- **Contact Form**: Allow visitors to reach out directly
- **Dark/Light Mode**: Theme support for user preference

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Authentication**: Next.js API routes
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── admin/            # Admin dashboard
│   ├── api/              # API routes
│   ├── components/       # App-specific components
│   ├── contact/          # Contact page
│   ├── work/             # Projects/work page
│   └── page.tsx          # Homepage
├── components/           # Shared components
│   ├── ui/               # UI components from Shadcn
│   └── LoginDialog.tsx   # Authentication component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update your personal information, skills, and experience in the respective component files:

- `app/components/Hero.tsx` - Main introduction
- `app/components/Skills.tsx` - Technical skills
- `app/components/WorkExperience.tsx` - Work history
- `app/components/Education.tsx` - Educational background
- `app/components/ProjectsSection.tsx` - Featured projects

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`.

## Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

Alternatively, you can build the project for production:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## License

MIT

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)