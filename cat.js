console.log('cat.js loaded');
function attachCatEvents() {
    console.log('attachCatEvents called');
    const catImg = document.getElementById('catImg');
    const catBtn = document.querySelector('.cat-button');
    if (catImg && catBtn) {
        catBtn.onmouseenter = () => { catImg.src = 'Img/cat 2.png'; };
        catBtn.onmouseleave = () => { catImg.src = 'Img/cat 1.png'; };
        catBtn.onmousedown  = () => { catImg.src = 'Img/cat 2.png'; };
        catBtn.onmouseup    = () => { catImg.src = 'Img/cat 1.png'; };
    
        catBtn.ontouchstart = (e) => {
            catImg.src = 'Img/cat 2.png';
          
            e.preventDefault();
        };
        catBtn.ontouchend = () => { catImg.src = 'Img/cat 1.png'; };
        catBtn.ontouchcancel = () => { catImg.src = 'Img/cat 1.png'; };
    }
}