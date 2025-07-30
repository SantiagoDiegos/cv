# Project Checklist

Quick reference for maintaining standards and quality in Diego's Portfolio.

## 📋 Adding a New Challenge - Complete Checklist

### ✅ Before You Start
- [ ] Pull latest changes: `git pull origin main`
- [ ] Test current site works locally
- [ ] Choose descriptive filename (e.g., `binary-search-algorithm.html`)

### ✅ Content Creation
- [ ] Copy `challenge-template.html`
- [ ] Rename with descriptive name (kebab-case)
- [ ] Replace ALL `[PLACEHOLDER]` text
- [ ] Follow content structure exactly:
  - [ ] 🎯 Problem Description (with examples)
  - [ ] 💡 Small Hint (guidance, not solution)
  - [ ] 🚀 My Solution Approach (your thinking)
  - [ ] 💻 Code Implementation (clean, commented)
  - [ ] 🎯 Key Takeaways (specific insights)
  - [ ] 🧠 Problem-Solving Strategies Used
  - [ ] 📚 What I Learned (technical + personal)

### ✅ Code Quality
- [ ] Code is tested and actually works
- [ ] Variables have descriptive names
- [ ] Functions include docstrings with complexity
- [ ] Comments explain WHY, not WHAT
- [ ] No console errors when running

### ✅ Content Quality
- [ ] Writing is conversational but professional
- [ ] Personal insights included (what YOU learned)
- [ ] Specific examples provided
- [ ] Trade-offs and alternatives mentioned
- [ ] Honest about challenges and struggles

### ✅ Main Page Updates
- [ ] Add challenge preview card to `index.html`
- [ ] Update correct link: `href="your-new-filename.html"`
- [ ] Set correct `data-difficulty` (easy/medium/hard)
- [ ] Set correct `data-topic` (algorithms/statistics/data-science)
- [ ] Update stats counters in About section
- [ ] Use consistent date format (MMM DD, YYYY)

### ✅ Testing (Critical!)
- [ ] **Local testing**: Open `index.html` in browser
- [ ] **All links work**: Click through everything
- [ ] **Challenge page loads**: Your new challenge opens
- [ ] **Back button works**: Returns to main page
- [ ] **Filters work**: Challenge appears in correct filters
- [ ] **Search works**: Can find your challenge by title
- [ ] **Theme toggle**: Works on all pages
- [ ] **Mobile responsive**: Test on phone/tablet
- [ ] **No console errors**: Check browser dev tools

### ✅ Version Control
- [ ] Clear commit message with description
- [ ] Test one final time before pushing
- [ ] `git add .` → `git commit -m "..."` → `git push origin main`
- [ ] Verify deployment on GitHub Pages (5-10 min delay)

## 🎯 Quality Standards Quick Check

### Content Must Have:
- [ ] **Personal voice** - "I learned..." not "One should..."
- [ ] **Specific insights** - Not generic statements
- [ ] **Working code** - Actually tested
- [ ] **Complete sections** - No placeholder text left
- [ ] **Proper difficulty** - Realistic assessment

### Code Must Have:
- [ ] **Descriptive names** - `left_pointer` not `l`
- [ ] **Documentation** - Function docstrings
- [ ] **Comments** - Explain complex logic
- [ ] **Consistency** - Follow existing patterns
- [ ] **No errors** - Clean console

### Design Must Have:
- [ ] **Existing classes** - Don't create new CSS
- [ ] **Consistent spacing** - Follow current layout
- [ ] **Proper badges** - Correct difficulty/topic colors
- [ ] **Mobile friendly** - Responsive design maintained

## 🚫 Common Mistakes to Avoid

### Content Issues
- [ ] ❌ Generic descriptions ("This is a good problem")
- [ ] ❌ Missing personal insights
- [ ] ❌ Copy-paste solutions from internet
- [ ] ❌ Vague takeaways ("I learned a lot")
- [ ] ❌ No concrete examples

### Technical Issues  
- [ ] ❌ Wrong data attributes (`data-difficulty="Easy"` vs `data-difficulty="easy"`)
- [ ] ❌ Broken links after renaming files
- [ ] ❌ Forgetting to update stats in About section
- [ ] ❌ Mixed naming conventions
- [ ] ❌ Console errors

### Process Issues
- [ ] ❌ Not testing before committing
- [ ] ❌ Vague commit messages ("update")
- [ ] ❌ Pushing directly without local testing
- [ ] ❌ Not updating documentation

## 📁 File Organization Standards

### Naming Convention
```
✅ CORRECT:
- two-sum-problem.html
- binary-search-recursive.html
- linear-regression-analysis.html

❌ INCORRECT:
- challenge1.html
- TwoSum.html
- myNewChallenge.html
```

### Required Files Structure
```
portfolio/
├── index.html ⭐ (main page)
├── styles.css ⭐ (stylesheet)
├── main.js ⭐ (functionality)
├── challenge-template.html ⭐ (template)
├── [challenge-name].html ⭐ (challenges)
├── README.md (documentation)
├── CONTRIBUTING.md (team guidelines)
└── assets/ (optional - images, etc.)
```

## 🎨 Brand & Style Consistency

### Topics (use exactly these)
- `algorithms`
- `data-science`
- `statistics`

### Difficulty Levels
- `easy` - 15-30 minutes
- `medium` - 30-90 minutes  
- `hard` - Complex, multi-step

### Color Usage
- **Don't add new colors** - use existing CSS variables
- **Badges** - automatic based on difficulty/topic
- **Consistent spacing** - follow existing patterns

## 🔄 Deployment Checklist

### Pre-Deploy
- [ ] Local testing complete
- [ ] All links verified
- [ ] Mobile responsive confirmed
- [ ] No console errors
- [ ] Stats updated correctly

### Deploy
- [ ] Clear commit message
- [ ] Push to main branch
- [ ] Wait 5-10 minutes for GitHub Pages
- [ ] Test live site
- [ ] Verify all functionality works

### Post-Deploy
- [ ] Challenge appears on main page
- [ ] Individual challenge page loads
- [ ] Filters include new challenge
- [ ] Search finds new challenge
- [ ] Mobile version works

## 📊 Performance Standards

### Load Time Goals
- [ ] First load: < 3 seconds
- [ ] Theme toggle: < 0.3 seconds
- [ ] Filter/search: < 0.5 seconds

### SEO Goals  
- [ ] Descriptive filenames
- [ ] Proper heading structure (h1 → h2 → h3)
- [ ] Meta descriptions (if added)

## 🆘 Quick Troubleshooting

**Challenge not showing up?**
1. Check filename matches link exactly
2. Verify data attributes are lowercase
3. Clear browser cache
4. Check console for errors

**Filters not working?**
1. Verify `data-difficulty` and `data-topic` values
2. Check for typos in attribute values
3. Test in fresh browser window

**Styling broken?**
1. Check for CSS syntax errors
2. Verify class names match existing ones
3. Test in incognito mode

**Site not updating?**
1. Hard refresh (Ctrl+F5)
2. Check GitHub Actions for build status
3. Wait 10-15 minutes
4. Test in private browsing

## ✨ Excellence Indicators

**Your challenge is excellent if:**
- [ ] You'd be proud to show it in a job interview
- [ ] It teaches something specific and valuable
- [ ] Code is clean and well-documented
- [ ] Writing shows genuine learning and reflection
- [ ] Everything works perfectly on first try
- [ ] A teammate could easily understand and maintain it

## 🎯 Remember: Quality Over Quantity

**Better to have:**
- 5 excellent, thoughtful challenges
- Clean, maintainable code
- Consistent, professional presentation
- Genuine insights and learning

**Than:**
- 20 rushed, generic challenges
- Messy, untested code
- Inconsistent formatting
- Surface-level observations

---

💡 **Pro Tip**: Keep this checklist open while working on challenges. It saves time and ensures consistency!

📝 **When in doubt**: Look at existing challenges as examples and follow the same patterns.
