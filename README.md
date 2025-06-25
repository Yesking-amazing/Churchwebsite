# Divine Trinity Church Website

A modern, responsive website for Divine Trinity Church in Wetzikon, Switzerland, built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, responsive design with beautiful UI components
- 📱 Mobile-first approach with smooth animations
- 📧 Working contact form with email functionality
- 🎯 Smooth scrolling navigation
- ⚡ Fast performance with Next.js 14 App Router
- 🎭 Beautiful gradients and modern styling
- 📝 Form validation with Zod and React Hook Form
- 🔧 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Email**: Nodemailer with Gmail SMTP
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Gmail account for email functionality

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd divine-trinity-church
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Gmail credentials in `.env.local`:
```env
GMAIL_USER=divinetrinity.wetzikon@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password_here
```

### Gmail Setup for Email Functionality

To enable the contact form email functionality:

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this app password in your `.env.local` file

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── ContactForm.tsx      # Contact form component
│   └── Navigation.tsx       # Navigation component
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Colors and Styling

The website uses a blue and yellow color scheme representing trust and warmth. You can customize the colors in:

- `src/app/globals.css` for global styles
- Individual components for specific styling
- Tailwind classes throughout the components

### Content

Update the church information in:

- `src/app/page.tsx` - Main content, service times, contact info
- `src/app/layout.tsx` - SEO metadata
- `src/components/Navigation.tsx` - Navigation items

### Email Configuration

The contact form sends emails to `divinetrinity.wetzikon@gmail.com`. To change this:

1. Update the email address in `src/app/api/contact/route.ts`
2. Update your environment variables accordingly

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

Make sure to set your environment variables on your chosen platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support or questions about the website, please contact:
- Email: divinetrinity.wetzikon@gmail.com

## License

This project is created for Divine Trinity Church. All rights reserved.

---

Built with ❤️ for the Divine Trinity Church community in Wetzikon, Switzerland.