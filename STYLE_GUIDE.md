# Style Guide

This guide ensures consistency across all content and code in Diego's Portfolio.

## 📝 Content Style Guide

### Writing Tone & Voice
**Conversational but Professional**
```
✅ "I discovered that hash maps are incredibly powerful for lookup problems"
✅ "This challenge taught me the importance of choosing the right data structure"
✅ "My first approach was O(n²), but I realized I could optimize using..."

❌ "Hash maps are data structures that provide efficient lookups"
❌ "The optimal solution utilizes advanced algorithmic techniques"
❌ "One should consider performance implications when..."
```

### Content Structure Templates

**Problem Description Template:**
```
You are given [input description]. Your task is to [objective].

**Example:**
Input: [concrete example]
Output: [expected result]
Explanation: [why this is the answer]

**Constraints:**
- [constraint 1]
- [constraint 2]
- [constraint 3]
```

**Solution Approach Template:**
```
My approach uses [main technique/data structure] to solve this efficiently.

**The key insight:** [your main "aha" moment]

**Algorithm steps:**
1. [step 1]
2. [step 2]
3. [step 3]
```

**Key Takeaways Template:**
```
- **[Category]:** [specific learning point]
- **[Category]:** [specific learning point]
- **[Category]:** [specific learning point]

Examples:
- **Time Complexity:** Understanding when O(n log n) is acceptable vs needing O(n)
- **Data Structure Choice:** Hash maps excel at "have I seen this before?" problems
- **Edge Cases:** Always consider empty inputs and single-element cases
```

## 💻 Code Style Guide

### Python Code Standards

**Function Documentation:**
```python
def function_name(param1, param2):
    """
    Brief description of what the function does.
    
    Args:
        param1 (type): Description of parameter
        param2 (type): Description of parameter
    
    Returns:
        type: Description of return value
        
    Time: O(complexity)
    Space: O(complexity)
    """
    # Implementation here
```

**Variable Naming:**
```python
# ✅ Descriptive names
left_pointer = 0
right_pointer = len(arr) - 1
complement = target - current_num
max_profit = 0

# ❌ Unclear abbreviations
l = 0
r = len(arr) - 1
comp = target - num
mp = 0
```

**Comments:**
```python
# ✅ Explain WHY, not WHAT
# Store complements to avoid O(n²) nested loops
num_map = {}

# Calculate midpoint to avoid integer overflow
mid = left + (right - left) // 2

# ❌ Obvious comments
# Create a dictionary
num_map = {}

# Set mid to the middle
mid = (left + right) // 2
```

### JavaScript Code Standards

**Function Style:**
```javascript
// ✅ Clear, documented functions
function filterByDifficulty(difficulty) {
    currentDifficultyFilter = difficulty;
    updateFilterButtons('difficulty', difficulty);
    applyFilters();
}

// ❌ Unclear, undocumented
function fbd(d) {
    cdf = d;
    ufb('difficulty', d);
    af();
}
```

**Event Handling:**
```javascript
// ✅ Descriptive event handlers
function handleThemeToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ❌ Generic names
function toggle() {
    // unclear what this toggles
}
```

### HTML Standards

**Semantic Structure:**
```html
<!-- ✅ Semantic, accessible HTML -->
<article class="challenge-preview-card" data-difficulty="easy" data-topic="algorithms">
    <header class="challenge-header">
        <h3 class="challenge-title">Two Sum Problem</h3>
        <time class="challenge-date" datetime="2025-01-15">Jan 15, 2025</time>
    </header>
    
    <p class="challenge-description">Given an array of integers...</p>
    
    <footer class="challenge-actions">
        <a href="two-sum-problem.html" class="read-more-btn" aria-label="Read full solution for Two Sum Problem">
            Read Full Solution →
        </a>
    </footer>
</article>

<!-- ❌ Generic, non-semantic -->
<div class="card">
    <div class="header">
        <div class="title">Two Sum Problem</div>
        <div class="date">Jan 15, 2025</div>
    </div>
    <div class="desc">Given an array of integers...</div>
    <div class="footer">
        <a href="challenge1.html">Read More</a>
    </div>
</div>
```

**Class Naming (BEM-inspired):**
```html
<!-- ✅ Clear, consistent naming -->
<div class="challenge-preview-card">
    <div class="challenge-header">
        <h3 class="challenge-title">...</h3>
        <div class="challenge-meta">
            <span class="badge difficulty-easy">EASY</span>
            <span class="badge topic-algorithms">ALGORITHMS</span>
        </div>
    </div>
</div>

<!-- ❌ Unclear, inconsistent -->
<div class="card">
    <div class="header">
        <h3 class="title">...</h3>
        <div class="meta">
            <span class="easy">EASY</span>
            <span class="algo">ALGORITHMS</span>
        </div>
    </div>
</div>
```

### CSS Standards

**Organization:**
```css
/* ✅ Organized by component */
/* Challenge Preview Cards */
.challenge-preview-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    /* ... */
}

.challenge-preview-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.challenge-header {
    display: flex;
    justify-content: space-between;
    /* ... */
}

/* ❌ Random order */
.challenge-preview-card:hover { /* ... */ }
.challenge-header { /* ... */ }
.challenge-preview-card { /* ... */ }
```

**CSS Custom Properties:**
```css
/* ✅ Use CSS variables for consistency */
:root {
    --accent-color: #007bff;
    --accent-hover: #0056b3;
    --border-radius: 12px;
    --shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.challenge-card {
    background: var(--card-bg);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

/* ❌ Hardcoded values */
.challenge-card {
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

## 🎨 Visual Design Standards

### Color Palette
```css
/* Light Theme */
--bg-color: #ffffff;
--text-color: #333333;
--card-bg: #f8f9fa;
--accent-color: #007bff;
--secondary-text: #6c757d;

/* Dark Theme */
--bg-color: #1a1a1a;
--text-color: #e9ecef;
--card-bg: #2d2d2d;
--accent-color: #4dabf7;
--secondary-text: #adb5bd;
```

### Typography Scale
```css
/* Headers */
h1: 3rem (48px)      /* Hero title */
h2: 2.5rem (40px)    /* Section titles */
h3: 1.3rem (21px)    /* Challenge titles */

/* Body Text */
body: 1rem (16px)    /* Base font size */
large: 1.2rem (19px) /* Hero description */
small: 0.9rem (14px) /* Meta text */
```

### Spacing System
```css
/* Use consistent spacing increments */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 2rem;     /* 32px */
--space-lg: 3rem;     /* 48px */
--space-xl: 4rem;     /* 64px */
```

### Component Standards

**Badges:**
```css
.badge {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Difficulty colors */
.difficulty-easy { background: #d4edda; color: #155724; }
.difficulty-medium { background: #fff3cd; color: #856404; }
.difficulty-hard { background: #f8d7da; color: #721c24; }
```

**Buttons:**
```css
.read-more-btn {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.read-more-btn:hover {
    color: var(--accent-hover);
}
```

## 🔤 Content Standards

### Challenge Titles
```
✅ Descriptive and Clear:
- "Two Sum Problem"
- "Binary Search Implementation"
- "Linear Regression Analysis"
- "K-Means Customer Segmentation"

❌ Vague or Generic:
- "Algorithm Challenge #1"
- "Data Science Project"
- "My Latest Problem"
- "Hard Challenge"
```

### Preview Descriptions
```
✅ One clear sentence (under 100 characters):
- "Given an array of integers and a target sum, find two numbers that add up to the target."
- "Implement binary search algorithm for finding elements in sorted arrays."

❌ Too long or vague:
- "This is a really interesting problem that I found challenging and learned a lot from while working on it."
- "Algorithm problem."
```

### Strategy Descriptions
```
✅ Specific technique mentioned:
- "Hash map for O(1) complement lookups"
- "Two pointers technique for sorted array"
- "Dynamic programming with memoization"

❌ Generic or obvious:
- "Used good algorithm"
- "Solved efficiently"
- "Applied best practices"
```

## 📱 Responsive Design Standards

### Breakpoints
```css
/* Mobile First Approach */
/* Base styles: 320px+ */

@media (min-width: 768px) {
    /* Tablet styles */
}

@media (min-width: 1024px) {
    /* Desktop styles */
}

@media (min-width: 1200px) {
    /* Large desktop styles */
}
```

### Grid Standards
```css
.challenges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .challenges-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}
```

## ✅ Quality Checklist

**Before committing, verify:**
- [ ] All placeholder text replaced
- [ ] Code follows naming conventions
- [ ] CSS uses existing variables
- [ ] HTML is semantic and accessible
- [ ] Content follows tone guidelines
- [ ] Mobile responsive design maintained
- [ ] Dark/light themes both work
- [ ] All links tested and working
- [ ] No console errors in browser
- [ ] Passes basic accessibility check

This style guide ensures our portfolio maintains professional quality and consistency as it grows!
