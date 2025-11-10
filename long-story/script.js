/*
this handles launching skrollr and calculating the background image fade in timing for storytelling
moved everything js over here once it started to get to long again
*/
let s;
document.addEventListener('DOMContentLoaded', function() {
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
    const bg3 = document.getElementById('bg3');
    const bg4 = document.getElementById('bg4');
    const bg5 = document.getElementById('bg5');
    const sections = document.querySelectorAll('.section');
  
/* Skrollr */
    if (typeof skrollr !== 'undefined') {
        s = skrollr.init({
            forceHeight: false,
            smoothScrolling: true,
            mobileCheck: function() { return false; }  //force skrollr to run on mobile
        });
        console.log('Skrollr initialized successfully');
    } else {
        console.error('Skrollr failed to load');
    }
  
    // find section heights and positions
    const sectionPositions = [];
    let cumulativeHeight = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = cumulativeHeight;
        const sectionHeight = rect.height;
        const sectionBottom = sectionTop + sectionHeight;
        sectionPositions[index] = {
            top: sectionTop,
            height: sectionHeight,
            bottom: sectionBottom
        };
        cumulativeHeight = sectionBottom;
    });

    // set data attributes for backgrounds based on section positions
    bg1.setAttribute('data-0', 'opacity:1;');
    bg1.setAttribute('data-' + sectionPositions[0].bottom, 'opacity:0;');

    bg2.setAttribute('data-' + sectionPositions[0].bottom, 'opacity:0;');
    bg2.setAttribute('data-' + ((sectionPositions[0].bottom + sectionPositions[1].bottom) / 2), 'opacity:1;');
    bg2.setAttribute('data-' + (sectionPositions[1].bottom / 2), 'opacity:0;');

    bg3.setAttribute('data-' + (sectionPositions[1].bottom / 2), 'opacity:1;');
    bg3.setAttribute('data-' + (sectionPositions[1].bottom + 100), 'opacity:0;');

    bg4.setAttribute('data-' + (sectionPositions[1].bottom + 100), 'opacity:0;');
    bg4.setAttribute('data-' + ((sectionPositions[1].bottom + sectionPositions[2].bottom) / 2), 'opacity:1;');
    bg4.setAttribute('data-' + sectionPositions[2].bottom, 'opacity:0;');

    bg5.setAttribute('data-' + sectionPositions[2].bottom, 'opacity:0;');
    bg5.setAttribute('data-' + sectionPositions[3].bottom, 'opacity:1;');

    //refresh after calculations?
    setTimeout(() => { 
        s.refresh();
        console.log('Skrollr refreshed');
    }, 500);
});
