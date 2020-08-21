let likes = 0;
setInterval(() => {
    const heart = document.querySelector('svg[aria-label="Like"]').parentNode;
    if (heart) {
    	console.log("Like");
        heart.click()
        likes++;
    }
}, 1000);

function pageScroll() {
    window.scrollBy(0,10);
    scrolldelay = setTimeout(pageScroll,20);
}

pageScroll();
