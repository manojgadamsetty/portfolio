# Deployment Guide for GitHub Pages

Follow these steps to deploy your portfolio website to GitHub Pages for free hosting.

## Prerequisites

- GitHub account
- Git installed on your computer
- Your portfolio files ready

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name options:
   - For user site: `yourusername.github.io` (will be accessible at https://yourusername.github.io)
   - For project site: `portfolio` or any name (will be accessible at https://yourusername.github.io/repository-name)
5. Make sure it's set to **Public**
6. **Do NOT** initialize with README, .gitignore, or license (we already have these files)
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

```bash
# Navigate to your project directory
cd /Users/manojgadamsetty/Documents/CODE/MyWebSite

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Professional portfolio website"

# Add GitHub repository as remote origin
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

## Step 4: Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to your repository root:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. In GitHub Pages settings, add your custom domain
3. Enable "Enforce HTTPS"

## Step 5: Automatic Deployment

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy your site when you push changes to the main branch.

## Quick Commands Reference

```bash
# After making changes to your website
git add .
git commit -m "Update website content"
git push

# Your changes will be live in a few minutes
```

## Troubleshooting

### Site Not Loading
- Wait 5-10 minutes after first deployment
- Check repository settings → Pages
- Ensure repository is public
- Verify branch and folder settings

### CSS/JS Not Loading
- Check file paths in HTML are correct
- Ensure all files are committed and pushed
- Clear browser cache

### Custom Domain Issues
- Verify DNS settings with your domain provider
- Add both www and non-www versions if needed
- Allow 24-48 hours for DNS propagation

## Your Website URLs

After deployment, your website will be available at:

- **User site**: `https://yourusername.github.io`
- **Project site**: `https://yourusername.github.io/repository-name`
- **Custom domain**: `https://yourdomain.com` (if configured)

## Next Steps

1. **Customize Content**: Update personal information, projects, and contact details
2. **Add Images**: Replace placeholder images with your actual photos
3. **Update Links**: Ensure all social media and project links are correct
4. **SEO Optimization**: Add meta tags, sitemap, and analytics
5. **Performance**: Optimize images and add caching headers

## Maintenance

- Regularly update your projects and experience
- Keep dependencies updated
- Monitor site performance
- Backup your repository

---

**Need Help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or open an issue in this repository.
