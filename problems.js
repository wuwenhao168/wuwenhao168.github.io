// 题目数据库
const problemsDatabase = {
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
        },
        {
            id: 'jh003',
            type: 'equation',
            title: '一元二次方程求解',
            content: '解方程：x² - 5x + 6 = 0',
            sword: '量质变剑',
            philosophy: '分析临界点和突变节点：判别式决定解的性质',
            solution: [
                '计算判别式：Δ = b² - 4ac = 25 - 24 = 1',
                '分析：Δ > 0，有两个不相等的实数根',
                '使用求根公式：x = (5 ± √1)/2',
                '得出解：x₁ = 3，x₂ = 2'
            ],
            difficulty: 'easy',
            category: '代数'
        },
        {
            id: 'jh004',
            type: 'probability',
            title: '概率计算问题',
            content: '一个袋子里有3个红球和2个白球，随机取出2个球，求都是红球的概率',
            sword: '唯物论剑',
            philosophy: '坚持数据导向的科学精神：基于客观概率计算',
            solution: [
                '总球数：3红 + 2白 = 5个球',
                '从5个球中取2个的组合数：C(5,2) = 10',
                '从3个红球中取2个的组合数：C(3,2) = 3',
                '概率 = 3/10 = 0.3'
            ],
            difficulty: 'medium',
            category: '概率'
        },
        {
            id: 'jh005',
            type: 'function',
            title: '一次函数应用题',
            content: '某商品原价100元，现降价x元销售，降价后销量增加2x件。原销量为50件，求总收入最大时的降价金额',
            sword: '主矛盾剑',
            philosophy: '识别主要矛盾：总收入是降价金额的二次函数',
            solution: [
                '设降价x元，则单价为(100-x)元',
                '销量为(50+2x)件',
                '总收入函数：R(x) = (100-x)(50+2x)',
                '展开得：R(x) = -2x² + 150x + 5000',
                '求顶点：x = -b/2a = -150/(-4) = 37.5元'
            ],
            difficulty: 'hard',
            category: '应用题'
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
        },
        {
            id: 'sh002',
            type: 'sequence',
            title: '数列通项与求和',
            content: '已知数列{aₙ}中，a₁ = 1，aₙ₊₁ = 2aₙ + 1，求通项公式',
            sword: '否定之否定剑',
            philosophy: '通过错题反思和理论升级：从错误中找出正确规律',
            solution: [
                '写出前几项：1, 3, 7, 15, 31...',
                '观察规律：aₙ = 2ⁿ - 1',
                '数学归纳法验证',
                '证明：aₙ₊₁ = 2aₙ + 1 = 2(2ⁿ - 1) + 1 = 2ⁿ⁺¹ - 1',
                '符合递推关系，公式正确'
            ],
            difficulty: 'hard',
            category: '数列'
        },
        {
            id: 'sh003',
            type: 'trigonometry',
            title: '三角函数综合',
            content: '求函数y = sin²x + cosx的最大值',
            sword: '量质变剑',
            philosophy: '分析临界点和突变节点：三角函数的周期性变化',
            solution: [
                '利用恒等式：sin²x = 1 - cos²x',
                '转化为：y = 1 - cos²x + cosx',
                '设t = cosx，则y = -t² + t + 1',
                '二次函数在[-1,1]上的最大值',
                '顶点在t = 1/2处，y_max = -1/4 + 1/2 + 1 = 5/4'
            ],
            difficulty: 'medium',
            category: '三角函数'
        },
        {
            id: 'sh004',
            type: 'geometry',
            title: '立体几何证明',
            content: '在正方体ABCD-A₁B₁C₁D₁中，证明A₁C⊥平面BDC₁',
            sword: '实践论剑',
            philosophy: '通过实践验证理论：空间几何的实证推理',
            solution: [
                '建立坐标系，设正方体边长为1',
                '确定各点坐标：A₁(0,0,1)，C(1,1,0)',
                '向量A₁C = (1,1,-1)',
                '求平面BDC₁的法向量',
                '证明A₁C与法向量平行'
            ],
            difficulty: 'hard',
            category: '立体几何'
        },
        {
            id: 'sh005',
            type: 'conic',
            title: '圆锥曲线综合',
            content: '已知椭圆x²/4 + y² = 1，求过点P(1,1/2)的切线方程',
            sword: '持久战剑',
            philosophy: '长期备考和难题攻坚策略：分步解决复杂问题',
            solution: [
                '设切线方程：y - 1/2 = k(x - 1)',
                '代入椭圆方程，整理得',
                '(1 + 4k²)x² + 4k(1 - 2k)x + 4(1 - 2k)² - 4 = 0',
                '令判别式Δ = 0，解出k值',
                '得到切线方程：y = ±(1/2)x ± 1'
            ],
            difficulty: 'hard',
            category: '圆锥曲线'
        }
    ]
};

// 当前显示的题目
let currentProblems = [];
let filteredProblems = [];

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initProblems();
    initFilters();
    initModal();
    animateElements();
});

// 初始化题目
function initProblems() {
    currentProblems = [...problemsDatabase.juniorHigh, ...problemsDatabase.seniorHigh];
    filteredProblems = [...currentProblems];
    renderProblems(filteredProblems);
    updateStatistics();
}

// 初始化筛选器
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选题目
            const filter = this.dataset.filter;
            filterProblems(filter);
        });
    });
}

// 筛选题目
function filterProblems(filter) {
    if (filter === 'all') {
        filteredProblems = [...currentProblems];
    } else if (filter === 'junior') {
        filteredProblems = [...problemsDatabase.juniorHigh];
    } else if (filter === 'senior') {
        filteredProblems = [...problemsDatabase.seniorHigh];
    } else {
        // 按剑法筛选
        filteredProblems = currentProblems.filter(problem => problem.sword === filter);
    }
    
    renderProblems(filteredProblems);
    updateStatistics();
}

// 渲染题目网格
function renderProblems(problems) {
    const grid = document.getElementById('problems-grid');
    grid.innerHTML = '';
    
    problems.forEach((problem, index) => {
        const card = createProblemCard(problem, index);
        grid.appendChild(card);
    });
    
    // 添加动画
    anime({
        targets: '.problem-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutExpo'
    });
}

// 创建题目卡片
function createProblemCard(problem, index) {
    const card = document.createElement('div');
    card.className = 'problem-card rounded-2xl p-6';
    card.dataset.problemId = problem.id;
    
    const difficultyColor = getDifficultyColor(problem.difficulty);
    const swordColor = getSwordColor(problem.sword);
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 bg-${difficultyColor}-500 text-white text-sm rounded-full">
                ${getDifficultyText(problem.difficulty)}
            </span>
            <div class="sword-icon bg-${swordColor}-500" title="${problem.sword}">
                ${getSwordInitial(problem.sword)}
            </div>
        </div>
        
        <h3 class="text-xl font-bold text-white mb-3">${problem.title}</h3>
        <p class="text-slate-300 mb-4 line-clamp-3">${problem.content}</p>
        
        <div class="flex items-center justify-between">
            <span class="text-amber-400 text-sm">${problem.category}</span>
            <button class="bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors">
                查看详情
            </button>
        </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', () => showProblemModal(problem));
    
    return card;
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

// 显示题目详情模态框
function showProblemModal(problem) {
    const modal = document.getElementById('problem-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    title.textContent = problem.title;
    
    content.innerHTML = `
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-semibold text-amber-400 mb-3">题目内容</h3>
                <div class="bg-slate-600/50 rounded-lg p-4 text-slate-200">
                    ${problem.content}
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold text-amber-400 mb-3">哲学指导</h3>
                    <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                            <div class="sword-icon bg-${getSwordColor(problem.sword)}-500 mr-3">
                                ${getSwordInitial(problem.sword)}
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
                            <span class="text-${getDifficultyColor(problem.difficulty)}-400">${getDifficultyText(problem.difficulty)}</span>
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
    `;
    
    modal.classList.add('show');
}

// 初始化模态框
function initModal() {
    const modal = document.getElementById('problem-modal');
    const closeBtn = document.getElementById('close-modal');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// 更新统计信息
function updateStatistics() {
    document.getElementById('total-problems').textContent = filteredProblems.length;
}

// 动画效果
function animateElements() {
    // 筛选按钮动画
    anime({
        targets: '.filter-btn',
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: anime.stagger(50),
        duration: 400,
        easing: 'easeOutBack'
    });
    
    // 统计数字动画
    anime({
        targets: '.text-4xl',
        innerHTML: [0, (el) => el.innerHTML],
        duration: 2000,
        delay: 500,
        easing: 'easeOutExpo',
        round: 1
    });
}