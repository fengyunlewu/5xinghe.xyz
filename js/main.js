/**
 * I, President 官方网站交互脚本
 * 作者: 开心可乐
 * 日期: 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // FAQ手风琴效果
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggleIcon = this.querySelector('.toggle-icon');
            
            // 切换当前问题的展开状态
            answer.classList.toggle('active');
            
            // 更新加号/减号图标
            if (answer.classList.contains('active')) {
                toggleIcon.textContent = '-';
            } else {
                toggleIcon.textContent = '+';
            }
            
            // 关闭其他已展开的问题（可选，取消注释启用）
            /*
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherToggleIcon = otherQuestion.querySelector('.toggle-icon');
                    
                    otherAnswer.classList.remove('active');
                    otherToggleIcon.textContent = '+';
                }
            });
            */
        });
    });
    
    // 自动展开第一个FAQ项（可选）
    if (faqQuestions.length > 0) {
        const firstAnswer = faqQuestions[0].nextElementSibling;
        const firstToggleIcon = faqQuestions[0].querySelector('.toggle-icon');
        
        firstAnswer.classList.add('active');
        firstToggleIcon.textContent = '-';
    }
    
    // 截图轮播
    const sliderContainer = document.querySelector('.screenshot-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const items = document.querySelectorAll('.screenshot-item');
    
    if (sliderContainer && items.length > 0) {
        const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
        let currentPosition = 0;
        const maxPosition = (items.length - getVisibleItems()) * itemWidth;
        
        // 点击下一张按钮
        nextBtn.addEventListener('click', function() {
            currentPosition = Math.min(currentPosition + itemWidth, maxPosition);
            sliderContainer.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
        });
        
        // 点击上一张按钮
        prevBtn.addEventListener('click', function() {
            currentPosition = Math.max(currentPosition - itemWidth, 0);
            sliderContainer.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
        });
        
        // 响应式调整
        window.addEventListener('resize', debounce(function() {
            // 重新计算
            const newItemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
            const visibleItems = getVisibleItems();
            
            const maxPos = (items.length - visibleItems) * newItemWidth;
            currentPosition = Math.min(currentPosition, maxPos);
            
            sliderContainer.scrollTo({
                left: currentPosition,
                behavior: 'auto'
            });
        }, 200));
        
        // 判断当前可见的项目数
        function getVisibleItems() {
            const containerWidth = sliderContainer.offsetWidth;
            const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
            return Math.max(1, Math.floor(containerWidth / itemWidth));
        }
    }
    
    // 滚动动画
    const animatedElements = document.querySelectorAll('.feature-card, .minister-card, .plan-card, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑固定导航栏的高度
                    behavior: 'smooth'
                });
                
                // 如果在移动视图中，关闭导航菜单
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // 工具函数：防抖
    function debounce(func, delay) {
        let timeoutId;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }
}); 