# BetterSeason Website - Deployment Guide

This guide covers deploying your BetterSeason website to various platforms.

## Table of Contents
1. [Local Testing](#local-testing)
2. [GitHub Pages](#github-pages)
3. [Vercel](#vercel)
4. [Netlify](#netlify)
5. [Traditional Hosting](#traditional-hosting)
6. [Custom Domain](#custom-domain)
7. [SSL/HTTPS](#ssl-https)

---

## Local Testing

### Using Python (Recommended)
```bash
cd website/
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Using Node.js
```bash
cd website/
npx http-server
# Visit: http://localhost:8080
```

### Using Ruby
```bash
cd website/
ruby -run -ehttpd . -p8000
# Visit: http://localhost:8000
```

### Using PHP
```bash
cd website/
php -S localhost:8000
# Visit: http://localhost:8000
```

---

## GitHub Pages (Free & Easy)

### Step 1: Create Docs Directory
```bash
mkdir docs
cp website/* docs/
```

### Step 2: Configure GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Select "/docs" folder
6. Click "Save"

### Step 3: Wait for Deployment
- GitHub will build and deploy automatically
- Usually takes 1-2 minutes
- Your site will be at: `https://username.github.io/BetterSeason`

### Optional: Custom Domain
```bash
# Add CNAME file
echo "yoursite.com" > docs/CNAME
git add docs/CNAME
git commit -m "Add custom domain"
git push
```

---

## Vercel (Free Tier Available)

### Step 1: Sign Up
- Visit https://vercel.com
- Sign up with GitHub account

### Step 2: Create Project
1. Click "New Project"
2. Select your BetterSeason repository
3. Set project name: `betterseason-website`

### Step 3: Configure
- Root Directory: `website` (or `.`)
- Build Command: (leave empty)
- Output Directory: `.`

### Step 4: Deploy
- Click "Deploy"
- Vercel will deploy automatically
- Your site will be at: `https://betterseason.vercel.app`

### Environment Variables
No special environment variables needed for static site.

---

## Netlify (Free Tier Available)

### Step 1: Connect Repository
1. Visit https://netlify.com
2. Click "Add new site"
3. Select "Connect to Git"
4. Choose GitHub
5. Select BetterSeason repository

### Step 2: Configure
- Base directory: `website`
- Build command: (leave empty)
- Publish directory: `website`

### Step 3: Deploy
- Click "Deploy site"
- Netlify will deploy automatically
- Your site will be at: `https://betterseason.netlify.app`

### Continuous Deployment
- Every push to main branch auto-deploys
- Automatic SSL certificate

---

## Traditional Hosting (cPanel, etc.)

### Step 1: Upload Files
```bash
# Using FTP
ftp user@hosting.com
# Or use cPanel file manager

# Upload website/ contents to public_html/
```

### Step 2: Directory Structure
```
public_html/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### Step 3: Test Website
- Visit: `https://yoursite.com`
- Should load the website

### File Permissions
```bash
# If needed, set permissions
chmod 644 *.html *.css *.js *.md
chmod 755 .
```

---

## AWS Hosting

### Using S3 + CloudFront

#### Step 1: Create S3 Bucket
```bash
# AWS CLI
aws s3 mb s3://betterseason-website
aws s3 sync website/ s3://betterseason-website/
```

#### Step 2: Enable Static Website Hosting
1. Go to S3 bucket settings
2. Properties → Static website hosting
3. Select "Use this bucket to host a website"
4. Index document: `index.html`
5. Error document: `index.html` (for SPA support)

#### Step 3: Set Bucket Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::betterseason-website/*"
        }
    ]
}
```

#### Step 4: CloudFront Distribution
1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Create distribution
4. Wait for deployment (5-10 minutes)

---

## Azure Static Web Apps

### Step 1: Connect Repository
1. Visit Azure Portal
2. Create "Static Web App"
3. Select GitHub repository
4. Select BetterSeason repo

### Step 2: Configure
- Location: `website`
- Build presets: Custom
- Build command: (leave empty)
- Output location: `website`

### Step 3: Deploy
- Click "Review + create"
- Azure will deploy automatically

---

## Custom Domain

### Domain Configuration

#### Update DNS Records
```
Type  | Host  | Value
------|-------|--------
CNAME | www   | yourhosting.com
CNAME | @     | yourhosting.com
```

#### GitHub Pages with Custom Domain
```bash
echo "betterseason.com" > docs/CNAME
git add docs/CNAME
git commit -m "Add custom domain"
git push
```

#### Vercel/Netlify with Custom Domain
1. Go to domain settings
2. Add custom domain
3. Update DNS records
4. Wait for verification (usually instant)

---

## SSL/HTTPS

Most hosting providers (GitHub Pages, Vercel, Netlify) provide free SSL automatically.

### If SSL not working
1. Clear browser cache
2. Wait 24 hours for DNS propagation
3. Contact hosting support

### Force HTTPS
```bash
# Add to htaccess (traditional hosting)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Performance Optimization

### Minify Files (Optional)
```bash
# Minify CSS
npx cssnano styles.css --output styles.min.css

# Minify JavaScript
npx terser script.js --output script.min.js
```

### Update HTML to use minified versions
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

### Enable Caching Headers
Add to `.htaccess` (traditional hosting):
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 30 days"
    ExpiresByType text/html "access plus 0 seconds"
    ExpiresByType text/css "access plus 30 days"
    ExpiresByType application/javascript "access plus 30 days"
</IfModule>
```

### Enable Gzip Compression
Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

---

## Monitoring & Analytics

### Add Google Analytics (Optional)
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### Add Vercel Analytics (if using Vercel)
Automatic with Vercel deployment.

### Monitor Site Status
- Use Uptime Robot (free)
- Set up alerts for downtime

---

## Backup & Recovery

### Regular Backups
```bash
# Create backup
tar -czf backups/website-$(date +%Y%m%d).tar.gz website/
```

### GitHub as Backup
All files are already backed up in Git repository.

### Version Control
```bash
git log --oneline  # See all versions
git revert <hash>  # Revert to previous version
```

---

## Troubleshooting

### Website not loading
- Check file permissions
- Verify DNS records
- Clear CDN cache

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path
- Verify MIME type is `text/css`

### JavaScript not working
- Check browser console (F12)
- Verify script file is loaded
- Check for JavaScript errors

### Email issues (if added later)
- Configure SMTP properly
- Check spam folder
- Verify sender domain

---

## Maintenance

### Regular Updates
```bash
# Pull latest changes
git pull origin main

# Deploy updated files
git push origin main
```

### Monitor Uptime
- Use uptime monitoring service
- Set up automated backups
- Keep dependencies updated

### Update Website Content
1. Edit files locally
2. Test locally
3. Push to GitHub
4. Automatic deployment triggers

---

## Quick Reference

| Platform | Free | SSL | Custom Domain | Deploy Time |
|----------|------|-----|---------------|-------------|
| GitHub Pages | ✅ | ✅ | ✅ | 1-2 min |
| Vercel | ✅ | ✅ | ✅ | <1 min |
| Netlify | ✅ | ✅ | ✅ | <1 min |
| AWS S3 | Paid | ✅ | ✅ | 5-10 min |
| Azure | ✅ | ✅ | ✅ | 2-5 min |
| Traditional | Paid | ✅* | ✅ | Manual |

*May require paid SSL certificate

---

## Final Checklist

- [ ] Website works locally
- [ ] All links function correctly
- [ ] Mobile responsiveness verified
- [ ] SSL/HTTPS enabled
- [ ] DNS records configured
- [ ] Backups created
- [ ] Monitoring set up
- [ ] Custom domain working

---

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review error messages carefully
3. Check file permissions
4. Verify DNS propagation
5. Contact hosting support

---

**Happy deploying! 🚀**

Your BetterSeason website is ready for the world! 🍂❄️🌸☀️
