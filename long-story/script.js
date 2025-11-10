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
    // hard coding by logged section positions:
    const sectionPositions = [
        { top: 51, height: 3829, bottom: 3880 },   // section 1
        { top: 772, height: 1136, bottom: 1908 },  // section 2
        { top: 2068, height: 826, bottom: 2894 },  // section 3
        { top: 3054, height: 826, bottom: 3880 }   // section 4
    ];

    // set data attributes for backgrounds
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    const bg3 = document.getElementById('bg3');
    const bg4 = document.getElementById('bg4');
    const bg5 = document.getElementById('bg5');

    // bg1: fully visible at top, fade out as section 2 starts
    bg1.setAttribute('data-0', 'opacity:1;');
    bg1.setAttribute('data-' + sectionPositions[1].top, 'opacity:0;');

    // bg2: fade in over BG1 as section 2 scrolls in
    bg2.setAttribute('data-' + sectionPositions[1].top, 'opacity:0;');
    bg2.setAttribute('data-' + (sectionPositions[1].top + 100), 'opacity:1;');
    bg2.setAttribute('data-' + (sectionPositions[1].top + sectionPositions[1].height / 3 * 2), 'opacity:0;');

    // bg3: suddenly appear (no fade) a third of the way through section 2
    bg3.setAttribute('data-0', 'opacity:0;');
    bg3.setAttribute('data-' + (sectionPositions[1].top + sectionPositions[1].height / 3), 'opacity:1;');
    bg3.setAttribute('data-' + sectionPositions[2].top, 'opacity:0;');

    // bg4: fade in as section 3 scrolls in
    bg4.setAttribute('data-' + sectionPositions[2].top, 'opacity:0;');
    bg4.setAttribute('data-' + (sectionPositions[2].top + 100), 'opacity:1;');
    bg4.setAttribute('data-' + sectionPositions[3].top, 'opacity:0;');

    // bg5: fade in as section 4 scrolls in, fully visible by bottom
    bg5.setAttribute('data-' + sectionPositions[3].top, 'opacity:0;');
    bg5.setAttribute('data-' + (sectionPositions[3].top + 100), 'opacity:1;');
    bg5.setAttribute('data-' + document.body.scrollHeight, 'opacity:1;');

    /* Skrollr */
    const s = skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        mobileCheck: function() { return false; }
    });
    console.log('Skrollr initialized:', s);
});
