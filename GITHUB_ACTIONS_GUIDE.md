# GitHub Actions Deployment Guide

This document explains how the portfolio is deployed using GitHub Actions with v1 at the root and v2 at `/v2`.

## 🚀 Overview

- **v1 (Root)**: `https://manojgadamsetty.com`
- **v2**: `https://manojgadamsetty.com/v2`
- **Auto-deploys**: On every push to `main` branch
- **Hosting**: GitHub Pages (free)
- **Custom Domain**: manojgadamsetty.com

## 📁 Directory Structure

```
portfolio/
├── index.html                 # V1 root index
├── assets/                    # V1 shared assets
├── showcase/                  # V1 showcase section
├── resume-cv.html            # V1 resume
│
├── v2/                        # V2 New Version
│   ├── index.html            # V2 homepage
│   ├── cv.html               # V2 CV
│   ├── resume.html           # V2 Resume
│   ├── experience.html        # V2 Experience
│   ├── work.html             # V2 Work/Projects
│   ├── about.html            # V2 About
│   ├── education.html        # V2 Education
│   ├── contact.html          # V2 Contact
│   ├── styles.css            # V2 Styles
│   ├── theme.js              # V2 Theme Toggle
│   └── assets/               # V2 Assets
│
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions Workflow
│
├── 404.html                  # Error handler + SPA router
├── CNAME                     # Custom domain
└── package.json
```

## 🔄 GitHub Actions Workflow

### File: `.github/workflows/deploy.yml`

The workflow automatically triggers when you:
1. Push to the `main` branch
2. Create a pull request to `main`
3. Manually trigger via "Run workflow" button

### What the Workflow Does

1. **Checkout Code**: Pulls the latest repository state
2. **Verify Structure**: Confirms all files are present
3. **Create 404.html**: Generates SPA routing handler
4. **Setup Pages**: Configures GitHub Pages
5. **Upload Artifact**: Prepares files for deployment
6. **Deploy**: Publishes to GitHub Pages
7. **Summary**: Shows deployment status

### Key Features

✅ **Automatic Deployment**: No manual steps after push  
✅ **Dual Version Support**: Both v1 and v2 accessible  
✅ **SPA Routing**: 404.html handles v2 navigation  
✅ **CNAME Preservation**: Custom domain maintained  
✅ **Workflow Dispatch**: Manual trigger option  
✅ **Concurrency Control**: Prevents simultaneous deployments  

## 🌐 How It Works

### URL Routing

| URL | Served By | File |
|-----|-----------|------|
| `manojgadamsetty.com` | Root | `index.html` |
| `manojgadamsetty.com/v2` | V2 | `v2/index.html` |
| `manojgadamsetty.com/v2/resume` | 404 → SPA | `v2/index.html` |
| `manojgadamsetty.com/v2/experience` | 404 → SPA | `v2/index.html` |
| `manojgadamsetty.com/about.html` | Root | `about.html` |
| `manojgadamsetty.com/resume-cv.html` | Root | `resume-cv.html` |

### SPA Routing Magic (404.html)

When GitHub Pages can't find a file (404 error), it serves `404.html`. Our 404 handler:

```javascript
if (pathname.startsWith('/v2')) {
  window.location.replace('/v2/index.html');
} else {
  window.location.replace('/');
}
```

This guarantees:
- `/v2/*` requests go to v2 index (v2 app handles routing)
- Other 404s go to root (v1 handles them)

## 📝 Deployment Workflow

### Step 1: Make Changes
```bash
# Edit any files
vim v2/index.html
vim styles.css
# ... make changes ...
```

### Step 2: Commit & Push
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Step 3: Automatic Deployment
- GitHub Actions workflow triggers automatically
- ~2-3 minutes for deployment to complete
- Check "Actions" tab on GitHub to see progress

### Step 4: Verify Live
```
https://manojgadamsetty.com       # V1
https://manojgadamsetty.com/v2    # V2
```

## 🔧 Configuration

### GitHub Pages Settings

The deployment uses these GitHub settings (no manual config needed):

- **Source**: Deploy from a branch
- **Branch**: `main`
- **Folder**: `/ (root)`
- **Custom Domain**: manojgadamsetty.com (in CNAME file)
- **Enforce HTTPS**: Enabled

### Permissions

The workflow requires these GitHub Permissions (auto-configured):

```yaml
permissions:
  contents: read         # Read repository
  pages: write          # Write to Pages
  id-token: write       # OIDC token for deployment
```

## 📊 Deployment Status

Check deployment status:

1. **GitHub Actions Tab**: `repository → Actions → Deploy Portfolio to GitHub Pages`
2. **Events**: Shows all deployment runs
3. **Logs**: Click a run to see detailed output
4. **Status Badge**: Can be added to README.md

## 🚨 Troubleshooting

### V2 Pages Not Loading

**Problem**: `/v2/resume` shows 404  
**Solution**: v2 uses SPA routing, needs 404.html (already configured)

```bash
# Verify 404.html exists
ls -la 404.html
```

### Deployment Fails

**Problem**: Workflow shows error  
**Solution**: 
1. Check "Actions" tab for error details
2. Verify all files are committed: `git status`
3. Ensure no syntax errors in HTML/CSS

### CNAME Issues

**Problem**: Domain not working  
**Solution**:
1. Verify DNS settings with domain provider
2. Confirm CNAME file contains correct domain
3. Allow 24-48 hours for DNS propagation

### Changes Not Live

**Problem**: Pushed changes but site unchanged  
**Solution**:
1. Check workflow completed (green checkmark)
2. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Try incognito/private browser
4. Wait up to 5 minutes for CDN caching

## 📱 Testing Locally

Before pushing, test the deployment locally:

```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Test both versions
# Visit http://localhost:3000 (root)
# Visit http://localhost:3000/v2 (v2)
```

## 🔐 Security

GitHub Pages automatically:
- ✅ Enforces HTTPS
- ✅ Uses GitHub's CDN
- ✅ Protects against DDoS
- ✅ Provides security headers

Custom domain setup:
- ✅ CNAME file keeps domain secure
- ✅ GitHub manages SSL certificate
- ✅ Auto-renews HTTPS certificate

## 📈 Performance

GitHub Pages + Custom Domain provides:
- 🚀 Global CDN distribution
- ⚡ < 100ms response times
- 🔄 Automatic caching
- 📍 Geo-located servers

## 🛠️ Manual Deployment (Alternative)

If needed, manually trigger deployment:

```bash
# GitHub CLI (if installed)
gh workflow run deploy.yml

# Or via GitHub UI:
# 1. Go to repository → Actions
# 2. Select "Deploy Portfolio to GitHub Pages"
# 3. Click "Run workflow"
```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://pages.github.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domains on GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-site)

## ✅ Quick Checklist

- [ ] Main branch has all latest changes
- [ ] `v2/` folder with all v2 pages
- [ ] `index.html` at root (v1)
- [ ] `404.html` at root (SPA routing)
- [ ] `CNAME` file with domain
- [ ] `.github/workflows/deploy.yml` configured
- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain pointing to GitHub Pages

---

**Last Updated**: April 19, 2026  
**Workflow Version**: 2.0 (Dual v1 + v2 Support)
