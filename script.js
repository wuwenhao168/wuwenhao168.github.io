// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 导航栏活跃状态
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function setActiveNav() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // 初始设置
    setActiveNav();
    window.addEventListener('scroll', setActiveNav);
    
    // 2. 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 移动端点击后关闭导航（如果有的话）
                if (window.innerWidth <= 768) {
                    // 这里可以添加移动端导航的处理逻辑
                }
            }
        });
    });
    
    // 3. 联系表单处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 验证表单
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('请填写所有必填字段');
                return;
            }
            
            if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
                alert('请输入有效的邮箱地址');
                return;
            }
            
            // 模拟表单提交
            this.innerHTML = `
                <div style="text-align: center; padding: 30px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">✓</div>
                    <h3 style="color: #28a745; margin-bottom: 10px;">消息已发送！</h3>
                    <p style="color: #666; margin-bottom: 20px;">感谢您的留言，我们会尽快回复您。</p>
                    <button onclick="location.reload()" class="btn" style="background-color: #007bff;">
                        发送新消息
                    </button>
                </div>
            `;
        });
    }
    
    // 4. 视频卡片悬停效果增强
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 5. 滚动动画（当元素进入视口时）
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.video-card, .about-content, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始设置动画元素
    document.querySelectorAll('.video-card, .about-content, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 首次执行和滚动监听
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // 6. 返回顶部按钮
    const createBackToTopButton = () => {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #e60012;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            opacity: 0;
            transition: opacity 0.3s, transform 0.3s;
            z-index: 1000;
        `;
        
        document.body.appendChild(backToTopBtn);
        
        // 显示/隐藏逻辑
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
            }
        });
        
        // 点击事件
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 悬停效果
        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.transform = 'scale(1.1)';
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.transform = 'scale(1)';
        });
    };
    
    createBackToTopButton();
    
    console.log('网站脚本已加载，所有功能正常运行！');
});