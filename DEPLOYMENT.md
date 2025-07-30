# Deployment Guide

Complete guide for deploying and maintaining Diego's Portfolio on GitHub Pages.

## 🚀 Initial Setup

### 1. Repository Configuration
```bash
# Create repository (if not already done)
# Repository settings:
# - Name: portfolio (or diego-portfolio)
# - Description: "Algorithm & Data Science Learning Portfolio"
# - Public repository (required for free GitHub Pages)
# - Initialize with README: No (we have our own)
```

### 2. Enable GitHub Pages
1. Go to repository **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main
4. **Folder**: / (root)
5. **Save**

Your site will be available at: `https://yourusername.github.io/repository-name`

### 3. Custom Domain (Optional)
If you have a custom domain:
1. Add `CNAME` file to root directory with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in Pages settings

## 📁 File Structure Requirements

**GitHub Pages Requirements:**
```
repository-root/
├── index.html              # REQUIRED - Entry point
├── styles.css
├── main.js
├── challenge-name.html     # Individual challenges
└── assets/                 # Optional - for images, etc.
```

**Important Notes:**
- `index.html` MUST be in root directory
- All challenge files MUST be in root directory
- No build process needed (vanilla HTML/CSS/JS)

## 🔄 Deployment Workflow

### Standard Deployment Process
```bash
# 1. Local testing first
open index.html  # Test locally

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "Add binary search challenge

- Covers recursive and iterative approaches
- Includes complexity analysis
- Updated main page stats"

# 4. Push to GitHub
git push origin main

# 5. Verify deployment (5-10 minutes later)
# Visit: https://yourusername.github.io/repository-name
```

### Branch Strategy (Recommended)
```bash
# For larger changes, use feature branches
git checkout -b add-machine-learning-section

# Make changes, test locally
# Commit changes
git commit -m "Add machine learning challenge section"

# Push branch
git push origin add-machine-learning-section

# Create Pull Request on GitHub
# Review, test, then merge to main
```

## 🧪 Pre-Deployment Testing

### Local Testing Checklist
**Before every deployment:**
- [ ] Open `index.html` in browser
- [ ] Test all navigation links
- [ ] Verify theme toggle works
- [ ] Test filters (difficulty + topic)  
- [ ] Test search functionality
- [ ] Check mobile responsive design
- [ ] Verify all challenge pages load
- [ ] Test back buttons on challenge pages
- [ ] Check for JavaScript console errors
- [ ] Verify stats are updated correctly

### Cross-Browser Testing
**Test in multiple browsers:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing
```bash
# Use browser dev tools:
# - Network tab: Check load times
# - Lighthouse: Audit performance, accessibility, SEO
# - Responsive design mode: Test mobile layouts

# Goals:
# - First load: < 3 seconds
# - Lighthouse performance: 90+
# - Lighthouse accessibility: 90+
# - Lighthouse SEO: 90+
```

## 🔍 Post-Deployment Verification

### Immediate Checks (within 10 minutes)
1. **Site loads**: Visit your GitHub Pages URL
2. **All pages work**: Click through every link
3. **Filters work**: Test difficulty and topic filters
4. **Search works**: Try searching for different terms
5. **Themes work**: Toggle between light and dark modes
6. **Mobile works**: Test on actual mobile device

### Common Deployment Issues

**Site not updating?**
```bash
# Check deployment status
# Go to: Repository → Actions tab
# Look for "pages build and deployment" workflow

# Force refresh browser cache
# Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

# Clear browser cache completely
# Or test in incognito/private mode
```

**404 errors?**
- Check filename capitalization (case-sensitive on GitHub)
- Verify file paths in links
- Ensure files are in root directory, not subdirectories

**CSS/JS not loading?**
- Check file paths are relative (`./styles.css` not `/styles.css`)
- Verify no typos in `<link>` and `<script>` tags
- Check for syntax errors in CSS/JS files

**Filters not working?**
- Check `data-` attributes match filter values exactly
- Verify JavaScript has no console errors
- Test locally first

## 📊 Monitoring & Maintenance

### Regular Maintenance Tasks

**Weekly:**
- [ ] Check site is loading properly
- [ ] Verify all new content displays correctly
- [ ] Test on mobile device

**Monthly:**
- [ ] Run Lighthouse audit
- [ ] Check for broken links
- [ ] Verify performance is still good
- [ ] Test in different browsers

**As Needed:**
- [ ] Update social media links
- [ ] Refresh About section
- [ ] Add new topics/categories
- [ ] Update contact information

### Analytics Setup (Optional)
Add Google Analytics for insights:

```html
<!-- Add to <head> of index.html and all challenge pages -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛡️ Security & Best Practices

### Content Security
- **No sensitive information** in code (API keys, passwords)
- **External links** open in new tabs with `target="_blank" rel="noopener"`
- **Images** include alt text for accessibility
- **Forms** (if added) include proper validation

### SEO Optimization
```html
<!-- Add to each challenge page <head> -->
<meta name="description" content="Learn how to solve the Two Sum problem using hash maps for O(n) time complexity. Includes code examples and detailed explanation.">
<meta name="keywords" content="algorithms, two sum, hash map, leetcode, python, time complexity">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Two Sum Problem - Diego's Portfolio">
<meta property="og:description" content="Learn how to solve the Two Sum problem using hash maps...">
<meta property="og:url" content="https://yourusername.github.io/portfolio/two-sum-problem.html">
```

### Performance Optimization
- **Compress images** before adding to repository
- **Minify CSS/JS** for production (optional - files are small)
- **Use semantic HTML** for better loading
- **Avoid external dependencies** (keeps site fast)

## 🔄 Backup & Recovery

### Repository Backup
```bash
# Regular backups (monthly)
git clone --mirror https://github.com/yourusername/portfolio.git backup-2025-01.git

# Or download repository as ZIP from GitHub
```

### Content Backup
- Keep challenge content drafts in local files
- Export important analytics data regularly
- Document any custom domain configurations

## 📈 Scaling for Growth

### Future Considerations

**When you have 20+ challenges:**
- Consider organizing by categories/subdirectories
- Implement pagination on main page
- Add advanced search features
- Consider a static site generator (Jekyll, Hugo)

**For team collaboration:**
- Use Pull Request workflows
- Implement branch protection rules
- Set up automated testing with GitHub Actions
- Create issue templates for new challenges

**Performance at scale:**
- Implement lazy loading for images
- Consider CDN for static assets
- Add search indexing for large content
- Monitor Core Web Vitals

## 🆘 Troubleshooting

### Common Issues

**"Your site is having problems"**
1. Check GitHub Actions tab for build errors
2. Verify `index.html` exists in root
3. Check for HTML syntax errors
4. Wait 10-15 minutes and try again

**Changes not appearing**
1. Hard refresh browser (Ctrl+F5)
2. Check file was actually committed and pushed
3. Verify GitHub Actions completed successfully
4. Try incognito/private browsing mode

**Broken styles/JavaScript**
1. Check browser console for errors
2. Verify file paths are correct
3. Check for syntax errors in CSS/JS
4. Test locally first

### Getting Help
1. **GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/pages)
2. **GitHub Community**: [github.community](https://github.community)
3. **Check status**: [githubstatus.com](https://githubstatus.com)

---

**Remember**: GitHub Pages is free but has some limitations:
- 1GB storage limit
- 100GB bandwidth per month
- Public repositories only (for free accounts)
- No server-side processing (static files only)

For our portfolio, these limitations are more than sufficient! 🚀
