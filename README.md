# Primal Training - Fitness Website

![Primal Training](public/hero.png)

## 📋 Overview

Primal Training is a modern, responsive fitness website built with Next.js and Tailwind CSS. The website features smooth animations, responsive design for all device sizes, and a clean, professional layout that showcases fitness services and programs.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Smooth Animations**: GSAP-powered animations for enhanced user experience
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Performance Optimized**: Fast loading times with Next.js
- **TypeScript Support**: Type-safe code for better development experience

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js 15.5.4](https://nextjs.org/)
- **UI Library**: [React 19.1.0](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP 3.13.0](https://greensock.com/gsap/)
- **Smooth Scrolling**: [@studio-freight/react-lenis 0.0.47](https://github.com/studio-freight/react-lenis)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Font**: [Geist](https://vercel.com/font) from Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/primal-training.git
   cd primal-training
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📱 Component Structure

The website consists of several key components:

- **Navbar**: Responsive navigation bar with mobile menu
- **Trainband**: Hero banner with "TRAIN HARD. LIVE BETTER" slogan
- **Hero**: Main hero section with grid layout showcasing services
- **CommunityBand**: Community features section
- **CTABand**: Call-to-action section with "DISCOVER YOUR POTENTIAL"
- **Spot**: Spotlight section for featured content
- **Footer**: Website footer with links and information

## 🎨 Design Features

- **Responsive Typography**: Text sizes adapt to different screen sizes
- **Reveal Animations**: Elements reveal with smooth animations as users scroll
- **Color Scheme**: Professional black, white, and accent color palette
- **Grid Layouts**: Modern grid-based layouts for content organization
- **Border Styling**: Clean border separations between content sections

## 📝 Usage

Modify the components in the `src/app/components` directory to customize the website according to your needs. The main page layout is defined in `src/app/page.tsx`.

Key CSS utility classes are defined in `src/app/globals.css` including:

- Container classes (container-desktop, container-tablet, etc.)
- Typography styles (Header1, Paragraph1, etc.)
- Button styles (Button-primary, Button-secondary, etc.)
- Responsive helpers (mobile-only, tablet-only, desktop-only)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- Design inspiration from modern fitness websites
- Icons from [Heroicons](https://heroicons.com/)
- Images from [Unsplash](https://unsplash.com/)
