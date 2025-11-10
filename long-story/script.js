/*
this handles launching skrollr and calculating the background image fade in timing for storytelling
moved everything js over here once it started to get to long again

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const sectionPositions = [];

    // find absolute positions for each section
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        sectionPositions[index] = {
            top: sectionTop,
            height: sectionHeight,
            bottom: sectionBottom
        };
        console.log(`Section ${index + 1}: Top=${sectionTop}, Height=${sectionHeight}, Bottom=${sectionBottom}`);
    });

    console.log('Total page height:', document.body.scrollHeight);
 i just wanted to make it responsive to at least diffrent desktop sizes... if not mobile oh well, hard coding it is*/
document.addEventListener('DOMContentLoaded', function() {
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    const bg3 = document.getElementById('bg3');
    const bg4 = document.getElementById('bg4');
    const bg5 = document.getElementById('bg5');

    // bg1: fully visible at top, fade out as section 2 starts (1000px)
    bg1.setAttribute('data-0', 'opacity:1;');
    bg1.setAttribute('data-1000', 'opacity:0;');

    // bg2: fade in over BG1 as section 2 scrolls in (1000px to 2000px)
    bg2.setAttribute('data-1000', 'opacity:0;');
    bg2.setAttribute('data-1100', 'opacity:1;'); // 100px after section 2 starts
    bg2.setAttribute('data-1666', 'opacity:0;');  // 2/3 through section 2 (1000 + (1000 / 3 * 2))

    // bg3: suddenly appear (no fade) a third of the way through section 2 (~1333px)
    bg3.setAttribute('data-0', 'opacity:0;');
    bg3.setAttribute('data-1333', 'opacity:1;');
    bg3.setAttribute('data-2000', 'opacity:0;');  // Fade out at end of section 2

    // bg4: fade in as section 3 scrolls in (2000px to 3000px)
    bg4.setAttribute('data-2000', 'opacity:0;');
    bg4.setAttribute('data-2100', 'opacity:1;'); // 100px after section 3 starts
    bg4.setAttribute('data-3000', 'opacity:0;');  // Fade out at end of section 3

    // bg5: fade in as section 4 scrolls in (3000px to 4000px), fully visible by bottom
    bg5.setAttribute('data-3000', 'opacity:0;');
    bg5.setAttribute('data-3100', 'opacity:1;'); // 100px after section 4 starts
    bg5.setAttribute('data-99999', 'opacity:1;'); // Stay visible to bottom

    /* Skrollr */
    const s = skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        smoothScrollingDuration: 1000, // SmoothR scrollR animation
        mobileCheck: function() { return false; } //run on mobile (it doesn't)
    });
    console.log('Skrollr initialized:', s);
});
