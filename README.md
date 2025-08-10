# Portfolio Template

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Build and deployment**, select **GitHub Actions**

2. **Automatic Deployment**:
   - The workflow triggers automatically on pushes to `main` or `master` branch
   - Pull requests to these branches will also trigger builds (but not deployment)

3. **Manual Deployment**:
   - Go to **Actions** tab in your repository
   - Select **Deploy to GitHub Pages** workflow
   - Click **Run workflow**

### Configuration Details

- **Base URL**: Configured for `https://[username].github.io/Portfolio-template/`
- **Build Output**: `./dist` directory
- **Node Version**: 18.x
- **Deployment**: Automatic on push to main/master branch

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Customization

To use this template with your own repository:

1. Fork this repository
2. Update the `homepage` field in `package.json` to match your repository URL
3. Update the `base` path in `vite.config.ts` to match your repository name
4. Push to your main branch to trigger deployment
