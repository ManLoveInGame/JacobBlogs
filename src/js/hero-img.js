

var scaleAnimation = anime.timeline({
    easing: 'easeInOutExpo',
    autoplay: false,
    direction: 'alternate',
});

scaleAnimation.add({
    targets: [".Hero-anime",".hero-img"],
    width: ['100%', '50%'],
    borderRadius: ['0', '24px'],
    opacity: [1, 0.95],

});

scaleAnimation.add({
    targets: ".hero-container",
    height:["100%","50%"],
});

const HeroText = document.querySelector('.hero-text');
HeroText.style.alignItems = 'center'; // Set alignment


scaleAnimation.add({
    targets: ".hero-text",
    top: ["50%","85%"],
    left: ["50%","20%"],

});

window.onscroll = function(e){
    // console.log(window.pageYOffset);
    // scaleAnimation.seek(window.pageYOffset * 1);
    scaleAnimation.seek(window.pageYOffset * 10);
};

