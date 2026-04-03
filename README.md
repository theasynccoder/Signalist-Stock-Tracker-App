<p align="center">
  <img src="public/assets/icons/logo.svg" alt="Signalist Logo" width="200" />
</p>

<h1 align="center">Signalist</h1>

<p align="center">
  <strong>Real-time stock market tracking with personalized alerts and AI-powered insights</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#api-integrations">API Integrations</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## 📊 Overview

**Signalist** is a modern, full-stack stock market application that provides real-time market data, interactive charts, personalized watchlists, and AI-powered daily news summaries delivered directly to your inbox. Built with Next.js 16 and powered by TradingView widgets, it offers a professional-grade trading experience.

## ✨ Features

### 📈 Real-Time Market Data
- **Market Overview** - Track major indices and sectors with live price updates
- **Stock Heatmaps** - Visual representation of S&P 500 performance by sector
- **Market Quotes** - Real-time quotes for financial, technology, and service sectors
- **Top Stories** - Latest market news from trusted financial sources

### 📉 Detailed Stock Analysis
- **Interactive Charts** - Advanced candlestick and baseline charts
- **Technical Analysis** - Buy/sell indicators and oscillators
- **Company Profiles** - Comprehensive company information and descriptions
- **Financial Data** - Revenue, earnings, and key financial metrics

### ⭐ Personalized Watchlist
- Add/remove stocks to your personal watchlist
- Quick access to your favorite stocks
- Persistent storage with MongoDB

### 🔍 Stock Search
- Global stock search powered by Finnhub API
- Keyboard shortcut support (`Ctrl/Cmd + K`)
- Real-time search results with debouncing

### 🤖 AI-Powered Features
- **Personalized Welcome Emails** - AI-generated onboarding based on user preferences
- **Daily News Summaries** - Automated daily email digests with market news relevant to your watchlist
- Powered by Google Gemini 2.5 Flash

### 🔐 Authentication
- Secure email/password authentication
- User profile with investment preferences
- Country, risk tolerance, and industry preferences

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) |
| **Authentication** | [Better Auth](https://www.better-auth.com/) |
| **Background Jobs** | [Inngest](https://www.inngest.com/) |
| **AI/LLM** | [Google Gemini](https://ai.google.dev/) |
| **Email** | [Nodemailer](https://nodemailer.com/) |
| **Charts** | [TradingView Widgets](https://www.tradingview.com/widget/) |
| **Market Data** | [Finnhub API](https://finnhub.io/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun
- MongoDB Atlas account (or local MongoDB instance)
- API keys for Finnhub, Gemini, and email service

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/signalist.git
   cd signalist
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see [Environment Variables](#environment-variables) section)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Running Inngest Dev Server

For background job processing (emails, scheduled tasks):

```bash
npx inngest-cli@latest dev
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication (Better Auth)
BETTER_AUTH_SECRET=your_secret_key_min_32_chars
BETTER_AUTH_URL=http://localhost:3000

# Finnhub API (Stock Market Data)
FINNHUB_API_KEY=your_finnhub_api_key
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

# Google Gemini (AI Features)
GEMINI_API_KEY=your_gemini_api_key

# Email (Nodemailer)
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_password
```

### Getting API Keys

| Service | Link | Notes |
|---------|------|-------|
| **MongoDB** | [mongodb.com](https://www.mongodb.com/cloud/atlas) | Free tier available |
| **Finnhub** | [finnhub.io](https://finnhub.io/) | Free tier: 60 calls/minute |
| **Google Gemini** | [ai.google.dev](https://ai.google.dev/) | Free tier available |
| **Gmail App Password** | [Google Account](https://myaccount.google.com/apppasswords) | Requires 2FA enabled |

## 📁 Project Structure

```
signalist/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/              # Sign in page
│   │   └── sign-up/              # Sign up page with preferences
│   ├── (root)/                   # Main application routes
│   │   ├── page.tsx              # Dashboard with market overview
│   │   └── stocks/[symbol]/      # Individual stock details
│   ├── api/                      # API routes
│   │   ├── auth/[...all]/        # Better Auth handlers
│   │   └── inngest/              # Inngest webhook endpoint
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── forms/                    # Form input components
│   ├── ui/                       # shadcn/ui components
│   ├── Header.tsx                # Navigation header
│   ├── SearchCommand.tsx         # Stock search dialog
│   ├── TradingViewWidget.tsx     # Chart widget wrapper
│   └── WatchlistButton.tsx       # Watchlist toggle button
├── database/                     # Database configuration
│   ├── mongoose.ts               # MongoDB connection
│   └── models/                   # Mongoose models
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions & configurations
│   ├── actions/                  # Server actions
│   ├── better-auth/              # Auth configuration
│   ├── inngest/                  # Background job functions
│   └── nodemailer/               # Email templates & config
├── middleware/                   # Next.js middleware
├── public/                       # Static assets
│   └── assets/                   # Icons and images
├── scripts/                      # Utility scripts
└── types/                        # TypeScript type definitions
```

## 🔌 API Integrations

### TradingView Widgets

The application uses TradingView's free embeddable widgets for:
- Market Overview
- Stock Heatmaps
- Advanced Charts (Candlestick, Baseline)
- Technical Analysis
- Company Profiles
- Financial Data
- Market News Timeline

### Finnhub API

Used for:
- Stock symbol search
- Company news fetching
- Market news aggregation

### Inngest Functions

| Function | Trigger | Description |
|----------|---------|-------------|
| `sign-up-email` | `app/user.created` | Sends AI-personalized welcome email |
| `daily-news-summary` | Cron: `0 12 * * *` | Daily market news digest at 12:00 UTC |

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Testing & Utilities
npm run lint         # Run ESLint
npm run test:db      # Test database connection
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components built on Radix UI primitives:

- Avatar
- Button
- Command (search dialog)
- Dialog
- Dropdown Menu
- Input
- Label
- Popover
- Select
- Sonner (toasts)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Inngest Production Setup

1. Create an account at [inngest.com](https://www.inngest.com)
2. Add the `INNGEST_SIGNING_KEY` environment variable
3. Configure the webhook URL in Inngest dashboard

### Other Platforms

The app can be deployed on any platform supporting Node.js:
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TradingView](https://www.tradingview.com/) for their excellent free widgets
- [Finnhub](https://finnhub.io/) for market data API
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Vercel](https://vercel.com/) for Next.js and hosting

---

<p align="center">
  Made with ❤️ by the Signalist Team
</p>
