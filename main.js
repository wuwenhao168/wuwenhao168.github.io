// 哲数理化跨学科智能体主要JavaScript功能

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initScrollEffects();
    initProblemSystem();
    initHeroCanvas();
    initMobileMenu();
    initScrollNavigation();
});

// 初始化动画效果
function initAnimations() {
    // 六脉神剑卡片动画
    const philosophyCards = document.querySelectorAll('.philosophy-card');
    if (philosophyCards.length > 0) {
        anime({
            targets: philosophyCards,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutExpo'
        });
    }

    // 题型卡片动画
    const problemCards = document.querySelectorAll('.problem-card');
    if (problemCards.length > 0) {
        anime({
            targets: problemCards,
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 600,
            easing: 'easeOutBack'
        });
    }

    // 浮动元素动画
    const floatingElements = document.querySelectorAll('.floating-element');
    if (floatingElements.length > 0) {
        anime({
            targets: floatingElements,
            translateY: [-10, 10],
            duration: 3000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }

    // 团队卡片动画
    const teamCards = document.querySelectorAll('.team-card');
    if (teamCards.length > 0) {
        anime({
            targets: teamCards,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(300),
            duration: 800,
            easing: 'easeOutExpo'
        });
    }

    // 报告卡片动画
    const reportCards = document.querySelectorAll('.report-card');
    if (reportCards.length > 0) {
        anime({
            targets: reportCards,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutExpo'
        });
    }
}

// 初始化滚动效果
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要滚动动画的元素
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// 初始化题目系统
function initProblemSystem() {
    // 创建题目数据库
    window.problemDatabase = {
        juniorHigh: [
            {
                id: 'jh001',
                type: 'quadratic',
                title: '二次函数顶点问题',
                content: '已知二次函数 y = x² - 4x + 3，求其顶点坐标和对称轴',
                sword: '主矛盾剑',
                philosophy: '抓住主要矛盾：顶点是决定二次函数性质的核心',
                solution: [
                    '识别主要矛盾：顶点坐标(h,k)决定函数性质',
                    '使用配方法：y = (x² - 4x + 4) - 1 = (x-2)² - 1',
                    '得出顶点：(2, -1)，对称轴：x = 2',
                    '验证：顶点处的函数值确实是最小值'
                ],
                difficulty: 'medium',
                category: '函数'
            },
            {
                id: 'jh002',
                type: 'triangle',
                title: '全等三角形证明',
                content: '在△ABC和△DEF中，已知AB=DE，∠A=∠D，AC=DF，证明两三角形全等',
                sword: '实践论剑',
                philosophy: '通过实践验证理论：边边边公理的实践应用',
                solution: [
                    '分析已知条件：两边及其夹角对应相等',
                    '应用SAS公理：边角边对应相等则三角形全等',
                    '逻辑推理：AB=DE，∠A=∠D，AC=DF',
                    '得出结论：△ABC ≅ △DEF (SAS)'
                ],
                difficulty: 'easy',
                category: '几何'
            }
        ],
        seniorHigh: [
            {
                id: 'sh001',
                type: 'derivative',
                title: '导数综合应用',
                content: '求函数f(x) = x³ - 3x² + 2x的极值点',
                sword: '主矛盾剑',
                philosophy: '抓住主要矛盾：导数为零是极值的必要条件',
                solution: [
                    '求导数：f\'(x) = 3x² - 6x + 2',
                    '令f\'(x) = 0：3x² - 6x + 2 = 0',
                    '解方程：x = (6 ± √(36-24))/6 = (6 ± √12)/6',
                    '得：x₁ = (3 + √3)/3，x₂ = (3 - √3)/3',
                    '通过二阶导数验证极值性质'
                ],
                difficulty: 'hard',
                category: '导数'
            }
        ]
    };

    // 添加题目点击事件
    const problemButtons = document.querySelectorAll('.problem-card button');
    problemButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.problem-card');
            const problemId = card.dataset.problemId;
            showProblemDetail(problemId);
        });
    });
}

// 显示题目详情
function showProblemDetail(problemId) {
    const allProblems = [...window.problemDatabase.juniorHigh, ...window.problemDatabase.seniorHigh];
    const problem = allProblems.find(p => p.id === problemId);
    
    if (problem) {
        // 创建模态框显示题目详情
        const modal = createProblemModal(problem);
        document.body.appendChild(modal);
        
        // 添加显示动画
        anime({
            targets: modal,
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutExpo'
        });
        
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 400,
            delay: 100,
            easing: 'easeOutBack'
        });
    }
}

// 创建题目详情模态框
function createProblemModal(problem) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
    modal.style.opacity = '0';
    
    const difficultyColor = getDifficultyColor(problem.difficulty);
    const swordColor = getSwordColor(problem.sword);
    
    modal.innerHTML = `
        <div class="modal-content bg-slate-800 rounded-2xl p-8 max-w-4xl max-h-90vh overflow-y-auto m-4" style="opacity: 0; transform: scale(0.8);">
            <div class="flex justify-between items-start mb-6">
                <h2 class="text-2xl font-bold text-amber-400">${problem.title}</h2>
                <button class="close-modal text-slate-400 hover:text-white text-2xl">&times;</button>
            </div>
            
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold text-amber-400 mb-3">题目内容</h3>
                    <div class="bg-slate-700 rounded-lg p-4 text-slate-200">
                        ${problem.content}
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-lg font-semibold text-amber-400 mb-3">哲学指导</h3>
                        <div class="bg-slate-700 rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <div class="w-8 h-8 bg-${swordColor}-500 rounded-full flex items-center justify-center mr-3">
                                    <span class="text-white font-bold text-sm">${getSwordInitial(problem.sword)}</span>
                                </div>
                                <span class="text-white font-medium">${problem.sword}</span>
                            </div>
                            <p class="text-slate-300">${problem.philosophy}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-amber-400 mb-3">题目信息</h3>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span class="text-slate-300">难度：</span>
                                <span class="text-${difficultyColor}-400">${getDifficultyText(problem.difficulty)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-300">类型：</span>
                                <span class="text-white">${problem.category}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-300">编号：</span>
                                <span class="text-white">${problem.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-amber-400 mb-3">解题步骤</h3>
                    <div class="space-y-3">
                        ${problem.solution.map((step, index) => `
                            <div class="flex items-start space-x-3">
                                <div class="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                                    ${index + 1}
                                </div>
                                <div class="text-slate-200">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flex space-x-4 pt-6 border-t border-slate-600">
                    <button class="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors">
                        开始解题
                    </button>
                    <button class="border border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-medium hover:bg-amber-400 hover:text-slate-900 transition-colors">
                        收藏题目
                    </button>
                    <button class="border border-slate-400 text-slate-400 px-6 py-3 rounded-lg font-medium hover:bg-slate-400 hover:text-slate-900 transition-colors">
                        分享题目
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // 添加关闭事件
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    return modal;
}

// 关闭模态框
function closeModal(modal) {
    anime({
        targets: modal,
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInExpo',
        complete: () => {
            modal.remove();
        }
    });
}

// 获取难度颜色
function getDifficultyColor(difficulty) {
    switch(difficulty) {
        case 'easy': return 'green';
        case 'medium': return 'yellow';
        case 'hard': return 'red';
        default: return 'gray';
    }
}

// 获取难度文本
function getDifficultyText(difficulty) {
    switch(difficulty) {
        case 'easy': return '简单';
        case 'medium': return '中等';
        case 'hard': return '困难';
        default: return '未知';
    }
}

// 获取剑法颜色
function getSwordColor(sword) {
    const colors = {
        '主矛盾剑': 'red',
        '量质变剑': 'blue',
        '否定之否定剑': 'green',
        '实践论剑': 'purple',
        '持久战剑': 'orange',
        '唯物论剑': 'indigo'
    };
    return colors[sword] || 'gray';
}

// 获取剑法首字母
function getSwordInitial(sword) {
    const initials = {
        '主矛盾剑': '主',
        '量质变剑': '量',
        '否定之否定剑': '否',
        '实践论剑': '实',
        '持久战剑': '持',
        '唯物论剑': '唯'
    };
    return initials[sword] || '?';
}

// 初始化英雄区域画布
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    // 创建粒子动画效果
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    // 动画循环
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            // 更新位置
            particle.x += particle.vx;
            particle.y += particle.vy;

            // 边界检测
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            // 绘制粒子
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${particle.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // 响应式处理
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 初始化移动端菜单
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 初始化滚动导航
function initScrollNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// 工具函数：节流
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：防抖
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// 导出全局函数
window.scrollToSection = scrollToSection;
window.showProblemDetail = showProblemDetail;