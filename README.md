# Amiya Mandal - Portfolio Website

A clean, fast, and minimal personal portfolio website built with pure HTML, CSS, and JavaScript.


## 📁 Project Structure

```
.
├── index.html          # Home page
├── valuable.html       # Bookmarked posts
├── experiences.html    # Experiences (placeholder)
├── writing.html        # Writing (placeholder)
├── styles-html.css     # All styling
├── app.js              # JavaScript functionality
└── amiya.jpg           # Profile image
```

## 🛠️ Local Development

### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

### Option 2: Local Server
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve

# Or use the npm script
npm run serve
```

Then visit: `http://localhost:8000`

## 📤 Deployment

### Deploy to GitHub Pages

1. **Install dependencies** (only gh-pages for deployment):
```bash
npm install
```

2. **Deploy**:
```bash
npm run deploy
```


## ✏️ Making Changes

### Update Content
Edit the HTML files directly. For example, in `index.html`:
```html
<p class="subtitle">Product Manager | Curious about AI, systems, and design</p>
```

### Update Styling
Edit `styles-html.css`:
```css
.sidebar {
  background-color: #f9fafb;
}
```

### Add JavaScript Features
Edit `app.js`:
```javascript
// Your custom code here
```

**No build step needed** - just save and refresh!


## 🎨 Pages

- **Home** (`/`) - Bio, current work, and past experience
- **Valuable** (`/valuable.html`) - Bookmarked articles and posts
- **Experiences** (`/experiences.html`) - Coming soon
- **Writing** (`/writing.html`) - Coming soon


---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

