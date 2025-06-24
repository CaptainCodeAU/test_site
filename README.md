# CSS Theme Switcher - Zen Garden Style

A beautiful, responsive website demonstrating the power of CSS design with two distinct themes that can be switched dynamically. Inspired by the original CSS Zen Garden, this project showcases how the same HTML structure can be completely transformed through different CSS stylesheets.

## 🌟 Features

-   **Two Distinct Themes:**

    -   **Modern Minimalist**: Clean, contemporary design with blue color scheme and smooth animations
    -   **Vintage Classic**: Warm, traditional design with brown tones and ornate decorative elements

-   **Interactive Theme Switching:**

    -   Click buttons in the header to switch between themes
    -   Click design links in the sidebar for alternative switching
    -   Keyboard shortcuts (Alt+1 for Modern, Alt+2 for Vintage)
    -   Theme preference saved in localStorage

-   **Modern Web Technologies:**

    -   Semantic HTML5 structure
    -   CSS3 with custom properties (CSS variables)
    -   Vanilla JavaScript (no dependencies)
    -   Responsive design that works on all devices
    -   Smooth animations and transitions
    -   Accessibility features (ARIA labels, keyboard navigation)

-   **Performance Optimized:**
    -   CSS preloading for smooth theme transitions
    -   Intersection Observer for scroll animations
    -   Minimal JavaScript footprint

## 🗂️ Project Structure

```
Website1/
├── index.html          # Main HTML file with semantic structure
├── theme-modern.css    # Modern minimalist theme styles
├── theme-vintage.css   # Vintage classic theme styles
├── script.js          # Theme switching and interactive functionality
└── README.md          # This file
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Click the theme buttons** in the header to switch between styles
4. **Enjoy** the seamless transformation!

## 🎨 Theme Details

### Modern Minimalist Theme

-   **Color Palette**: Blues (#2563eb, #0ea5e9) with clean grays
-   **Typography**: Inter font family for body text, Playfair Display for headings
-   **Design**: Clean lines, subtle shadows, card-based layout
-   **Animations**: Smooth hover effects and fade-in animations

### Vintage Classic Theme

-   **Color Palette**: Warm browns (#8b4513, #d2691e) with cream backgrounds
-   **Typography**: Playfair Display throughout for a classic feel
-   **Design**: Ornate borders, decorative elements, traditional layout
-   **Special Effects**: Drop caps, decorative quotes, textured backgrounds

## 🔧 Customization

### Adding New Themes

1. Create a new CSS file (e.g., `theme-dark.css`)
2. Update the `themes` object in `script.js`:
    ```javascript
    const themes = {
    	modern: {
    		css: 'theme-modern.css',
    		name: 'Modern Minimalist',
    		designer: 'by Clean Design Co.',
    	},
    	vintage: {
    		css: 'theme-vintage.css',
    		name: 'Vintage Classic',
    		designer: 'by Retro Studios',
    	},
    	dark: {
    		css: 'theme-dark.css',
    		name: 'Dark Mode',
    		designer: 'by Night Studios',
    	},
    };
    ```
3. Add a new button in the HTML:
    ```html
    <button class="theme-btn" data-theme="dark">Dark</button>
    ```

### Modifying Existing Themes

Each theme uses CSS custom properties (variables) defined in the `:root` selector. You can easily modify colors, fonts, and spacing by updating these variables at the top of each CSS file.

## 📱 Browser Support

-   **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
-   **CSS Grid**: Required for layout
-   **CSS Custom Properties**: Required for theming
-   **Intersection Observer**: Used for scroll animations
-   **localStorage**: Used for theme persistence

## 🌐 Hosting on GitHub Pages

Follow these steps to host your website on GitHub for free:

### Step 1: Create a GitHub Repository

1. **Sign up** for a GitHub account at [github.com](https://github.com) if you don't have one
2. **Click the "+" icon** in the top right corner and select "New repository"
3. **Name your repository** (e.g., `css-theme-switcher` or `my-zen-garden`)
4. **Make it public** (required for free GitHub Pages)
5. **Check "Add a README file"** if you want (you can replace it later)
6. **Click "Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. **Click "uploading an existing file"** on your new repository page
2. **Drag and drop** all your project files (`index.html`, `theme-modern.css`, `theme-vintage.css`, `script.js`, `README.md`)
3. **Write a commit message** like "Initial website upload"
4. **Click "Commit changes"**

**Option B: Using Git Command Line**

```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
cd YOUR-REPOSITORY-NAME

# Copy your website files to this directory
# Then add, commit, and push
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click on "Settings"** tab
3. **Scroll down** to "Pages" in the left sidebar
4. **Click "Pages"**
5. **Under "Source"**, select "Deploy from a branch"
6. **Choose "main" branch** and "/ (root)" folder
7. **Click "Save"**

### Step 4: Access Your Website

1. **Wait 1-2 minutes** for GitHub to build your site
2. **Your website URL** will be: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`
3. **GitHub will show you the URL** in the Pages settings

### Step 5: Custom Domain (Optional)

If you have your own domain:

1. **Add a CNAME file** to your repository with your domain name
2. **Configure your domain's DNS** to point to GitHub Pages
3. **Update the custom domain** in repository settings

### Updating Your Website

To update your website:

1. **Make changes** to your local files
2. **Upload the updated files** to GitHub (replace the old ones)
3. **Your website will automatically update** within a few minutes

## 🛠️ Development Tips

### Local Development

-   Use a local web server for development (like Live Server in VS Code)
-   Test both themes thoroughly across different devices and browsers
-   Validate HTML and CSS for best practices

### Performance

-   Optimize images if you add any (WebP format recommended)
-   Minify CSS and JavaScript for production
-   Consider adding a service worker for offline functionality

### SEO and Accessibility

-   Add meta descriptions and Open Graph tags
-   Ensure proper heading hierarchy (h1, h2, h3)
-   Test with screen readers
-   Add alt text for any images you include

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 🎯 Inspiration

This project is inspired by the original [CSS Zen Garden](http://www.csszengarden.com/) by Dave Shea, which demonstrated the power of CSS-based design in the early 2000s. The goal is to show how modern CSS techniques can create even more impressive design variations from the same HTML structure.

---

**Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript**
