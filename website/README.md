# BetterSeason Website

A professional, modern website for the BetterSeason Minecraft Plugin. This website showcases all features, installation instructions, commands, and configuration options for the advanced seasonal plugin.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Interactive Elements**: Smooth scrolling, fade-in animations, and hover effects
- **Code Highlighting**: Easy-to-read code blocks with copy-to-clipboard functionality

## File Structure

```
website/
├── index.html          # Main HTML file with all content
├── styles.css          # Comprehensive CSS styling
├── script.js           # Interactive JavaScript functionality
└── README.md          # This file
```

## Features Showcased

### Sections
1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching introduction with season icons
3. **Core Features** - 6 feature cards highlighting main capabilities
4. **Advanced Systems** - Detailed information about seasonal, temperature, calendar, and crop systems
5. **Commands** - Available commands with usage examples
6. **Permissions** - Plugin permission system
7. **Installation** - Step-by-step installation guide
8. **Configuration** - Configuration examples for different use cases
9. **Technical Details** - Threading model, data persistence, and performance info
10. **Project Structure** - Directory structure of the plugin
11. **Roadmap** - Future enhancements checklist
12. **Footer** - Quick links and plugin information

## Design Features

### Color Scheme
- **Primary**: Green (#2ecc71) - Main accent color
- **Secondary**: Blue (#3498db) - Secondary accents
- **Dark Background**: Dark blue (#1a1a2e, #16213e) - Professional look
- **Season Colors**: Spring (light green), Summer (yellow), Autumn (orange), Winter (light blue)

### Interactive Elements
- **Smooth Scrolling**: All navigation links use smooth scroll behavior
- **Hover Effects**: Cards and buttons have smooth hover animations
- **Copy to Clipboard**: Code blocks have copy buttons on hover
- **Fade In Animation**: Elements fade in as you scroll
- **Parallax Effect**: Hero image moves with scroll
- **Ripple Effect**: Buttons have ripple effect on click

### Responsive Breakpoints
- Desktop: 1200px+ (full layout)
- Tablet: 768px-1199px (adjusted grid)
- Mobile: 480px-767px (single column)
- Small Mobile: <480px (optimized layout)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2ecc71;
    --secondary-color: #3498db;
    --dark-bg: #1a1a2e;
    --light-bg: #16213e;
    /* ... more colors ... */
}
```

### Adding New Sections
1. Add content HTML to `index.html`
2. Add corresponding CSS class to `styles.css`
3. Add any interactive functionality to `script.js`

### Customizing Fonts
Update the `font-family` in the body selector in `styles.css`

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari, Chrome Android

## Performance

- **File Size**: ~50KB total (HTML + CSS + JS)
- **Load Time**: <1 second on typical internet connection
- **Lighthouse Score**: 90+ on desktop

## Deployment

### Local Testing
```bash
# Navigate to website directory
cd website/

# Open with Python server (Python 3)
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

### GitHub Pages
1. Copy website files to `docs/` folder in repository
2. Go to GitHub Settings > Pages
3. Select `docs` folder as source
4. Website will be available at `https://username.github.io/BetterSeason`

### Traditional Hosting
1. Upload all files to web hosting
2. Ensure directory structure is maintained
3. Test on various devices

## Features by Section

### Hero Section
- Plugin name and description
- Call-to-action buttons
- Plugin metadata badges
- Animated season icons

### Features Grid
- 6 main features with icons
- Hover animations
- Descriptive text

### Systems Sections
- Detailed season information
- Temperature modifiers explanation
- Calendar features
- Crop growth rates comparison

### Commands
- Command syntax
- Permission requirements
- Usage examples
- Output examples

### Installation Steps
- Build instructions
- Deployment steps
- Server startup
- Verification

### Configuration Examples
- Basic configuration
- Temperature effects
- Season modifiers
- Crop growth settings

### Technical Details
- Threading model
- Data persistence
- API integration points
- Performance optimization

## JavaScript Features

### Navigation
- Smooth scroll to sections
- Active link highlighting
- Mobile-friendly

### Animations
- Fade-in effects on scroll
- Parallax scrolling
- Button ripple effects
- Hover animations

### Code Blocks
- Copy to clipboard functionality
- Syntax highlighting ready
- Responsive sizing

### Performance
- Lazy loading support
- Scroll performance optimization
- Efficient animations

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing (can be added)
- Proper heading hierarchy
- Mobile responsiveness
- Fast loading time

## Accessibility

- Proper color contrast ratios
- Keyboard navigation support
- Semantic HTML elements
- Alt text for icons (can be added for images)
- Focus states for interactive elements

## Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Add multi-language support
- [ ] Integrate download counter
- [ ] Add video tutorials section
- [ ] Create blog/changelog section
- [ ] Add user testimonials
- [ ] Create interactive documentation
- [ ] Add search functionality
- [ ] Create REST API documentation
- [ ] Add GitHub integration

## License

This website is part of the BetterSeason project and follows the same license (GNU GPLv3).

## Support

For issues or suggestions about the website:
1. Check existing issues on GitHub
2. Create a new issue with detailed information
3. Include screenshots if applicable

---

**Happy seasoning! 🍂❄️🌸☀️**

Made with ❤️ for the Minecraft community
