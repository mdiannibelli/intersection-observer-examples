const $allHiddenImages = document.querySelectorAll('.hidden-img');

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-img')
        }
    })
}, {
    rootMargin: '10px'
});

$allHiddenImages.forEach((element) => {
    intersectionObserver.observe(element)
})