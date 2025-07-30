# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and a fully functional contact form.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all screen sizes
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Animated Components**: Built with Framer Motion for engaging animations
- **Contact Form**: Functional contact form with Formspree integration
- **Project Showcase**: Beautiful project cards with live demos and GitHub links
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal bio, skills, and experience overview
3. **Projects Section**: Showcase of featured projects with links
4. **Contact Section**: Contact form and social media links
5. **Navigation**: Smooth scrolling navigation bar
6. **Footer**: Additional links and copyright information

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Heroicons** - Beautiful SVG icons
- **Formspree** - Contact form handling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Personal Information
Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update bio, skills, and experience
- `src/data/projects.ts` - Add your own projects
- `src/components/Contact.tsx` - Update contact information and social links
- `src/components/Footer.tsx` - Update name and links

### Contact Form Setup
To enable the contact form functionality:

1. Sign up for a free account at [Formspree](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/components/Contact.tsx` with your actual form ID

### Customization
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `src/index.css`
- **Animations**: Adjust animation settings in individual components
- **Layout**: Modify component layouts and spacing as needed

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Customization Guide

### Changing Colors
Update the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // Main primary color
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Modifying Animations
Adjust animation settings in components using Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  // Your content
</motion.div>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS** 