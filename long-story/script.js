document.addEventListener('DOMContentLoaded', function() {
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    const bg3 = document.getElementById('bg3');
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    // initial opacity for the first background
    bg1.style.opacity = '1';

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // finding the scroll position relative to each section
        const section1End = sections[0].offsetTop + sections[0].offsetHeight;
        const section2End = sections[1].offsetTop + sections[1].offsetHeight;

        // fade backgrounds based on scroll position
        if (scrollPosition < section1End) {
            // fade in bg1, fade out bg2 and bg3
            bg1.style.opacity = 1;
            bg2.style.opacity = 0;
            bg3.style.opacity = 0;
        } else if (scrollPosition < section2End) {
            // fade in bg2, fade out bg1 and bg3
            const opacity = (scrollPosition - section1End) / windowHeight;
            bg1.style.opacity = 1 - opacity;
            bg2.style.opacity = opacity;
            bg3.style.opacity = 0;
        } else {
            // fade in bg3, fade out bg1 and bg2
            const opacity = (scrollPosition - section2End) / windowHeight;
            bg2.style.opacity = 1 - opacity;
            bg3.style.opacity = opacity;
            bg1.style.opacity = 0;
        }
    });
});
