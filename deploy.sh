#!/bin/bash

# Deployment script for Manoj's Portfolio Website
# This script helps deploy the website to GitHub Pages

echo "🚀 Portfolio Website Deployment Script"
echo "======================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Initializing..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📁 Adding all files to git..."
git add .

# Get commit message from user or use default
echo "💬 Enter commit message (or press Enter for default):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update portfolio website - $(date +'%Y-%m-%d %H:%M')"
fi

# Commit changes
echo "📝 Committing changes..."
git commit -m "$commit_message"

# Check if remote origin exists
if ! git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 No remote origin found. Please add your GitHub repository:"
    echo "Example: git remote add origin https://github.com/yourusername/your-repo-name.git"
    echo ""
    echo "Then run this script again or manually push with:"
    echo "git push -u origin main"
    exit 1
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Success! Your website has been deployed!"
    echo "📱 It will be available at your GitHub Pages URL in a few minutes"
    echo "🔄 GitHub Pages may take 5-10 minutes to update"
    echo ""
    echo "🔗 Check your repository settings → Pages to see the live URL"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "1. Your GitHub repository URL is correct"
    echo "2. You have push permissions to the repository"
    echo "3. Your internet connection is stable"
fi
