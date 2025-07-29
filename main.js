let currentDifficultyFilter = 'all';
let currentTopicFilter = 'all';

function initializePage() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function filterByDifficulty(difficulty) {
    currentDifficultyFilter = difficulty;
    updateFilterButtons('difficulty', difficulty);
    applyFilters();
}

function filterByTopic(topic) {
    currentTopicFilter = topic;
    updateFilterButtons('topic', topic);
    applyFilters();
}

function updateFilterButtons(type, active) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        const isDifficultyBtn = btn.onclick && btn.onclick.toString().includes('filterByDifficulty');
        const isTopicBtn = btn.onclick && btn.onclick.toString().includes('filterByTopic');
        
        if ((type === 'difficulty' && isDifficultyBtn) || (type === 'topic' && isTopicBtn)) {
            btn.classList.remove('active');
            
            if (btn.onclick.toString().includes(`'${active}'`)) {
                btn.classList.add('active');
            }
        }
    });
}

function applyFilters() {
    const searchTerm = document.querySelector('.search-box')?.value.toLowerCase() || '';
    const cards = document.querySelectorAll('.challenge-preview-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.challenge-title').textContent.toLowerCase();
        const description = card.querySelector('.challenge-description').textContent.toLowerCase();
        
        const matchesSearch = searchTerm === '' || title.includes(searchTerm) || description.includes(searchTerm);
        const matchesDifficulty = currentDifficultyFilter === 'all' || card.dataset.difficulty === currentDifficultyFilter;
        const matchesTopic = currentTopicFilter === 'all' || card.dataset.topic === currentTopicFilter;
        
        if (matchesSearch && matchesDifficulty && matchesTopic) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function filterChallenges() {
    applyFilters();
}

document.addEventListener('DOMContentLoaded', initializePage);
