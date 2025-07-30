# Diego's Algorithm & Data Science Portfolio

A professional portfolio website showcasing learning challenges in algorithms, data science, and statistical analysis. Built with vanilla HTML, CSS, and JavaScript for GitHub Pages deployment.

## 🚀 Live Site
[Visit Portfolio](https://yourusername.github.io/portfolio-repo-name)

## 📁 Project Structure
```
portfolio/
├── README.md                           # Project documentation
├── CONTRIBUTING.md                     # Guidelines for contributors
├── index.html                          # Main homepage
├── styles.css                          # Main stylesheet
├── main.js                            # Core JavaScript functionality
├── challenge-template.html             # Template for new challenges
├── challenges/                         # Challenge pages directory
│   ├── two-sum-problem.html
│   ├── normal-distribution-analysis.html
│   └── customer-segmentation-kmeans.html
├── assets/                             # Static assets (if needed)
│   ├── images/
│   └── diagrams/
└── docs/                              # Additional documentation
    ├── STYLE_GUIDE.md
    └── DEPLOYMENT.md
```

## 🛠 Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid/Flexbox
- **Vanilla JavaScript** - No frameworks for simplicity
- **GitHub Pages** - Free hosting

## 🎯 Key Features
- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme toggle
- ✅ Advanced filtering (difficulty + topic)
- ✅ Search functionality
- ✅ SEO-friendly URLs
- ✅ Fast loading (no external dependencies)

## 📝 Adding New Challenges

### Quick Start
1. Copy `challenge-template.html`
2. Rename using our naming convention (see below)
3. Fill in all `[PLACEHOLDER]` content
4. Add challenge preview to `index.html`
5. Update stats counters
6. Test locally before committing

### Naming Convention
**Challenge Files:** Use kebab-case descriptive names
```
✅ Good: binary-search-implementation.html
✅ Good: linear-regression-analysis.html
✅ Good: merge-sort-optimization.html

❌ Bad: challenge1.html
❌ Bad: MyNewChallenge.html
❌ Bad: binarySearch.html
```

**Topics:** Use consistent keywords
- `algorithms`
- `data-science` 
- `statistics`
- `machine-learning` (if added later)

**Difficulty Levels:**
- `easy` - Beginner-friendly problems
- `medium` - Intermediate complexity 
- `hard` - Advanced or complex problems

## 🎨 Content Standards

### Challenge Structure
Every challenge must include these sections (in order):
1. **🎯 Problem Description** - Clear problem statement with examples
2. **💡 Small Hint** - Gentle guidance without giving away solution
3. **🚀 My Solution Approach** - Your thinking process and strategy
4. **💻 Code Implementation** - Clean, commented code
5. **🎯 Key Takeaways** - Most important lessons learned
6. **🧠 Problem-Solving Strategies Used** - Mental approach taken
7. **📚 What I Learned** - Technical and conceptual insights

### Code Standards
```python
# ✅ Good: Clean, commented code
def two_sum(nums, target):
    """
    Find two numbers that add up to target.
    
    Args:
        nums: List of integers
        target: Target sum value
    
    Returns:
        List of indices of the two numbers
        
    Time: O(n), Space: O(n)
    """
    num_map = {}  # Store number -> index mapping
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    
    return []
```

### Writing Style
- **Be conversational** - Write like you're explaining to a friend
- **Show your thinking** - Include your mental process
- **Be specific** - Use concrete examples and numbers
- **Explain trade-offs** - Why you chose one approach over another

## 🔧 Development Workflow

### Before You Start
1. Pull latest changes: `git pull origin main`
2. Test the site locally (open `index.html` in browser)
3. Check all links work and themes toggle properly

### Adding a Challenge
1. **Create branch** (optional but recommended):
   ```bash
   git checkout -b add-binary-search-challenge
   ```

2. **Copy template**:
   ```bash
   cp challenge-template.html binary-search-implementation.html
   ```

3. **Fill in content** following our standards
4. **Add to index.html** with proper preview
5. **Update stats** in about section
6. **Test everything** - links, filters, search, themes
7. **Commit with clear message**:
   ```bash
   git add .
   git commit -m "Add binary search implementation challenge
   
   - Includes recursive and iterative solutions
   - Covers time/space complexity analysis
   - Added to algorithms filter category"
   ```

### Deployment
- **GitHub Pages deploys automatically** from main branch
- Changes are live within 5-10 minutes
- Test thoroughly before pushing to main

## 📱 Browser Support
- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)  
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Goals
- ⚡ First load: < 2 seconds
- ⚡ Theme toggle: < 0.3 seconds
- ⚡ Filter/Search: < 0.5 seconds
- 📱 Mobile-first responsive design
- 🔍 SEO score: 90+ (Lighthouse)

## 🔍 SEO Best Practices
- Descriptive filenames and URLs
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for any images added
- Meta descriptions for challenge pages
- Semantic HTML structure

## 🐛 Common Issues & Solutions

**Theme not saving:**
- Check localStorage is enabled in browser
- Clear browser cache and try again

**Filters not working:**
- Ensure data attributes match filter values exactly
- Check for typos in `data-difficulty` and `data-topic`

**Styling broken:**
- Verify `styles.css` path is correct
- Check for CSS syntax errors
- Ensure proper class names are used

**Challenge page not loading:**
- Check filename matches link in `index.html` exactly
- Ensure file is in root directory (not subfolder)
- Verify proper HTML structure

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact
- **Portfolio**: [Your live site URL]
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ by Diego | Building knowledge one challenge at a time**
