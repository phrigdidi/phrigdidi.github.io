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

        // find the positions of each section
        const section1Top = sections[0].offsetTop;
        const section1Bottom = section1Top + sections[0].offsetHeight;
        const section2Top = sections[1].offsetTop;
        const section2Bottom = section2Top + sections[1].offsetHeight;

        // fade backgrounds based on scroll position
        if (scrollPosition < section1Bottom) {
            // fade in bg1, fade out bg2 and bg3
            bg1.style.opacity = 1;
            bg2.style.opacity = 0;
            bg3.style.opacity = 0;
        } else if (scrollPosition < section2Bottom) {
            // fade in bg2, fade out bg1 and bg3
            const progress = (scrollPosition - section1Bottom) / windowHeight;
            bg1.style.opacity = 1 - progress;
            bg2.style.opacity = progress;
            bg3.style.opacity = 0;
        } else {
            // fade in bg3, fade out bg1 and bg2
            const progress = (scrollPosition - section2Bottom) / windowHeight;
            bg2.style.opacity = 1 - progress;
            bg3.style.opacity = progress;
        }
    });
});
