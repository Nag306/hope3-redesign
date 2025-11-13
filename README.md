# Foundation Website

A modern, responsive website for educational foundations built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd foundation-website
```

2. Install dependencies
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

Create a production build:
```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles
└── App.jsx             # Main app component
```

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ Accessibility compliant
- ✅ SEO optimized
- ✅ Multi-step forms
- ✅ File upload support
- ✅ Lazy loading
- ✅ Code splitting

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-api-endpoint.com
VITE_SITE_NAME=Your Foundation Name
```

### Backend Integration

Forms are configured to POST to configurable endpoints. Update the API URL in your environment variables and implement the corresponding backend endpoints:

- `/api/apply` - Application form
- `/api/volunteer` - Volunteer form  
- `/api/contact` - Contact form

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request