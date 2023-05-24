let videos = document.querySelectorAll('.video');

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    videos.forEach(video => {
        let videoSection = video.parentElement.parentElement;
        let videoSectionTop = videoSection.offsetTop - 450;
        let videoSectionHeight = videoSection.getBoundingClientRect().height + 300;

        if (scrollY > videoSectionTop && scrollY <= videoSectionTop + videoSectionHeight) {
            video.play();
        } else {
            video.pause();
        }
    });
});

//!========== FAQS =========
let questions = document.querySelectorAll('.question');



const removeAllShow = () => {
    questions.forEach(question => {
        question.classList.remove('show');
    });
};
questions.forEach(question => {
    question.addEventListener('click', () => {
        if (question.classList.contains('show')) {
            question.classList.remove('show');
        } else {
            removeAllShow();
            question.classList.add('show');
        }
    });
});