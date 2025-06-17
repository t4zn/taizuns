# 🔗 Linktree-like Website

![Preview of Linktree-like Website](https://raw.githubusercontent.com/Anuswar/linktree-clone/main/assets/images/preview.jpg)

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat&logo=google-chrome&logoColor=white)](https://anuswarrrao.sbs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
[![Last Commit](https://img.shields.io/github/last-commit/Anuswar/linktree-clone)](https://github.com/Anuswar/linktree-clone/commits/main)

</div>


A modern, responsive Linktree clone that serves as your personal link hub. Showcase all your important links in one beautifully designed, mobile-friendly page with dark/light mode support and smooth animations.



## ✨ Features

- **Dark/Light Mode Toggle** – Switch seamlessly between dark and light themes.
- **Animated Background & Animations** – Subtle, smooth effects for a modern and dynamic feel.
- **Mobile Responsive** – Works flawlessly on all screen sizes.
- **Link Buttons** – Showcase unlimited links to your portfolio, blog, or social media.
- **Share Button** – One-click to share your link page with others.
- **Contact Links** – Connect via email, call, or social media (Instagram, GitHub, LinkedIn).



## 🛠️ Installation

To run this profile page locally or make contributions, follow these steps:

### 🔁 Option 1: Clone the Repository

1. **Clone the repository:**

```bash
git clone https://github.com/Anuswar/linktree-clone.git
cd linktree-clone
```

2. **Open the `index.html` file** in your preferred web browser.

### 📦 Option 2: Direct Download

1. **Download the repository as a ZIP** file from GitHub.
2. **Extract** the contents to your desired location.
3. **Open `index.html`** in your web browser.



## 📂 Project Structure

```
linktree-clone-main/
│
├── LICENSE.md                  # License information for the project
├── README.md                   # Documentation and setup instructions
├── index.html                  # Main HTML file of the project
├── CNAME                       # Custom domain configuration (used for GitHub Pages)
│
├── js/                         # JavaScript files
│   └── script.js               # Main JavaScript file
│
├── libraries/                  # External libraries
│   ├── google-font/            # Web font files (e.g., Nunito)
│   └── animate.css             # Animate.css for animations
│
├── assets/                     # Static assets like styles and images
│   ├── css/                    # CSS files
│   │   └── styles.css          # Main stylesheet
│   │
│   └── images/                 # Image files
│       ├── favicon/            # Favicon and web manifest files
│       ├── icon/               # Icon images (e.g., moon.svg, sun.svg)
│       ├── preview.jpg         # Screenshot/preview of the project interface
│       └── profile-picture.jpg # User profile picture for display
```



## 🎨 Customization

### 🔧 Personal Information

1. Replace `assets/images/profile-picture.webp` with your own photo.
2. Edit personal details in `index.html`:

   * Name and bio
   * Contact information
   * Social media links

### ➕ Adding Links

```html
<li class="animate__animated animate__bounceIn" style="animation-delay:0.2s;">
  <a href="your-link-here" target="_blank" rel="noopener">
    <img src="assets/images/icon/website.svg" alt="Website icon" class="icon icon-large">
    <div>
      <h3>Your Link Title</h3><small>Visit my personal website.</small>
    </div>
  </a>
</li>
```

### 🎨 Color Schemes

Modify the CSS variables in `assets/css/styles.css`:

```css
:root {
  /* Background Colors */
  --bg-dark: #your-color;
  --bg-light: #your-color;

  /* Text Colors */
  --text-dark: #your-color;
  --text-light: #your-color;

  /* Button Colors */
  --btn-bg: #your-color;
  --btn-bg-hover: #your-color;
  --btn-text: #your-color;

  /* Border Colors */
  --border-light: #your-color;

  /* Shadow Colors */
  --shadow-dark: #your-color;
  --shadow-light: #your-color;
  --shadow-light-hover: #your-color;

  /* Grid Colors */
  --grid-dark: #your-color;
  --grid-light: #your-color;

  /* Scrollbar Colors */
  --scrollbar-thumb: #your-color;
}
```



## 🤝 Contributing

Contributions are welcome! If you find any issues, have suggestions, or want to add new features, please open an issue or create a pull request.

**Steps to contribute:**

1. **Fork the repository**
2. **Create a new branch** for your feature or fix
3. **Commit your changes** with clear messages
4. **Push to your fork**
5. **Open a pull request** to the `main` branch



## 📄 License
This project is licensed under the [MIT License](LICENSE.md), which means you are free to use, modify, and distribute the code.
