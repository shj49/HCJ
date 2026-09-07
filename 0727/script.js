document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. 타이핑 효과 (현주님 정보로 커스텀) */
    const typingText = document.getElementById("typing-text");
    const words = [
        "심현주입니다. ✨", 
        "경성대학교 화장품학과 전공생입니다. 🔬", 
        "뷰티 분야의 새로운 가치를 창출합니다. 💄"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 150;
        if (isDeleting) typeSpeed /= 2;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1800; // 완료 후 대기 시간
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    /* 2. 스킬 프로그레스 바 애니메이션 */
    const skillBars = document.querySelectorAll(".bar");
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
    }
    setTimeout(animateSkills, 500);

    /* 3. 라이트/다크 모드 토글 */
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        let theme = "light";
        if (document.body.getAttribute("data-theme") !== "dark") {
            document.body.setAttribute("data-theme", "dark");
            themeToggle.textContent = "☀️";
            theme = "dark";
        } else {
            document.body.removeAttribute("data-theme");
            themeToggle.textContent = "🌙";
            theme = "light";
        }
        localStorage.setItem("theme", theme);
    });

    /* 4. 프로젝트 필터링 */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || filterValue === category) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    /* 5. 연락처 문의 모달창 */
    const modal = document.getElementById("contact-modal");
    const openBtn = document.getElementById("open-modal-btn");
    const closeBtn = document.querySelector(".close-btn");
    const contactForm = document.getElementById("contact-form");

    openBtn.addEventListener("click", () => modal.style.display = "flex");
    closeBtn.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // 문의 메일 모의 전송
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = document.getElementById("name").value;
        alert(`감사합니다, ${userName}님! 심현주 학생에게 메시지가 성공적으로 전송되었습니다.`);
        contactForm.reset();
        modal.style.display = "none";
    });
});