# News & Weather Dashboard

A modern, responsive dashboard built with Next.js 14, TypeScript, and Tailwind CSS that aggregates news, weather, and other data from multiple APIs.

## 🌟 Live Demo

[View Live Demo](your-vercel-url-here)

## 🚀 Features

### Dashboard
- 📱 Responsive grid layout with multiple widgets
- 🌓 Dark/Light mode toggle
- 📊 Real-time data updates
- ⚡ Loading states with skeleton loaders
- 🛡️ Error handling with retry functionality

### News Section
- 📰 Latest news articles with headlines and images
- 🏷️ Category filtering (Technology, Business, Sports, Entertainment)
- 🔍 Search functionality
- 📄 Article modal with full content
- 📑 Pagination support

### Weather Widget
- 🌤️ Current weather conditions
- 📅 5-day weather forecast
- 🎯 Location-based weather using geolocation
- 🔎 City search functionality
- 🖼️ Weather icons and visual indicators

### Country Information
- 🌍 Country selector with search
- 🏳️ Display of flags and key information
- 📊 Interactive country statistics
- 💱 Currency information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: 
  - Shadcn/ui
  - Aceternity UI (animations)
- **State Management**: React Context API
- **APIs Integration**:
  - News API
  - OpenWeatherMap API
  - REST Countries API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-weather-dashboard.git
cd news-weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

## 🔑 API Keys Setup

1. **News API** (https://newsapi.org/):
   - Sign up for a free account
   - Get API key from dashboard
   - Free tier: 100 requests/day

2. **OpenWeatherMap** (https://openweathermap.org/api):
   - Create an account
   - Navigate to API keys section
   - Free tier: 1000 calls/day

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Shadcn components
│   ├── layout/       # Layout components
│   ├── widgets/      # Dashboard widgets
│   └── common/       # Reusable components
├── hooks/            # Custom hooks
├── types/           # TypeScript definitions
├── lib/             # Utilities
└── app/             # Next.js app directory
```

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid system
- Touch-friendly interface
- Optimized for all screen sizes:
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (> 1024px)

## ⚡ Performance Optimizations

- Image optimization using Next.js Image component
- API response caching
- Lazy loading for components
- Debounced search inputs
- Memoization of expensive calculations

## 🔄 State Management

- Context API for global state
- Local storage for user preferences
- Custom hooks for complex state logic
- Type-safe state management

## 🐛 Error Handling

- Comprehensive error boundaries
- Network error handling
- API rate limit handling
- Fallback UI for API unavailability
- User-friendly error messages

## 🧪 Known Issues

- News API has CORS restrictions in production
- Weather API occasional rate limiting
- [Add any other known issues]

## 🔜 Future Improvements

- [ ] PWA support
- [ ] Real-time updates
- [ ] Data visualization charts
- [ ] Social sharing
- [ ] Favorites system
- [ ] Advanced search filters

## 📄 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type     # Run TypeScript checks
```



## 📝 License

[MIT License](LICENSE)

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
 