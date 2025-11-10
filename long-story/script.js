/*
this handles launching skrollr and calculating the background image fade in timing for storytelling
moved everything js over here once it started to get to long again
*/
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

    // set data attributes for backgrounds
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    const bg3 = document.getElementById('bg3');
    const bg4 = document.getElementById('bg4');
    const bg5 = document.getElementById('bg5');

    // bg1: fade in at top, fade out at end of section 1
    bg1.setAttribute('data-0', 'opacity:1;');
    bg1.setAttribute('data-' + sectionPositions[0].bottom, 'opacity:0;');

    // bg2: fade in at start of section 2, fade out at end of section 2
    bg2.setAttribute('data-' + sectionPositions[0].bottom, 'opacity:0;');
    bg2.setAttribute('data-' + (sectionPositions[0].bottom + 10), 'opacity:1;');
    bg2.setAttribute('data-' + sectionPositions[1].bottom, 'opacity:0;');

    bg3.setAttribute('data-' + sectionPositions[1].bottom, 'opacity:0;');
    bg3.setAttribute('data-' + (sectionPositions[1].bottom + 10), 'opacity:1;');
    bg3.setAttribute('data-' + sectionPositions[2].bottom, 'opacity:0;');

    bg4.setAttribute('data-' + sectionPositions[2].bottom, 'opacity:0;');
    bg4.setAttribute('data-' + (sectionPositions[2].bottom + 10), 'opacity:1;');
    bg4.setAttribute('data-' + sectionPositions[3].bottom, 'opacity:0;');

    bg5.setAttribute('data-' + sectionPositions[3].bottom, 'opacity:0;');
    bg5.setAttribute('data-' + (sectionPositions[3].bottom + 10), 'opacity:1;');
    bg5.setAttribute('data-' + (document.body.scrollHeight), 'opacity:1;');

    /* Skrollr */
    const s = skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        mobileCheck: function() { return false; }
    });
    console.log('Skrollr initialized:', s);
});
