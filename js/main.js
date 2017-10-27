/*
global TimelineMax, $,TweenMax, Power0, Power2, Power3, Back
*/
// Set these to the banner dimentions
var BANNER_WIDTH=300;
var BANNER_HEIGHT=250;

//This is used to report timing
var stopWatch;

//Set the initial states of all divs here
function setInitialStates(){
    hideAll(["#bg1","#bg2","#bg5","#dish","#steam1","#txt11","#txt12","#txt21","#txt22","#new","#txt31","#txt32","#txt33"
        ,"#cta","#light","#pasta1","#pasta2","#logo","#steam7"]);
}
var tl2 = new TimelineMax({repeat:0});
var steamTween;
//This gets called when the ad is finished loading
function mainInit(){
    setInitialStates();
    $(".container").show();
    addListeners();
    seq01();

}
var preloadImages = [
    "assets/bg.jpg",
    "assets/bg1.png",
    "assets/bg5.png",
    "assets/dish.png",
    "assets/new.png",
    "assets/steam1.png",
    "assets/steam3.png",
    "assets/steam4.png",
    "assets/txt11.png",
    "assets/txt12.png",
    "assets/txt21.png",
    "assets/txt22.png",
    "assets/txt31.png",
    "assets/txt32.png",
    "assets/txt33.png",
    "assets/ctatext.png",
    "assets/light.png",
    "assets/pasta1.png",
    "assets/pasta2.png",
    "assets/logo.png"
];
//Preload all images in the passed list (if any)
function preload() {
    var lastLoadedImage = 0;
    loadNext();
    function loadNext() {
        if (lastLoadedImage >= preloadImages.length) {
            mainInit();
        } else {
            var img = new Image();
            img.src = preloadImages[lastLoadedImage];
            img.onload = loadNext;
        }
        lastLoadedImage++;
    }
}
// Function steam and steam2 used for steam animation
function steam(){
    tl2.restart();
    $("#steam1").show();
    $("#steam7").show();
    tl2.set ("#steam1", {x: 120, y: 120, alpha: 0});
    tl2.set ("#steam7", {x: 60, y: 120, alpha: 0});
    tl2.to($("#steam1"), 1, {x: 100, y: 120, alpha: getRandomFN(0.5, 1), ease: Power2.easeOut});
    tl2.to($("#steam7"), 1, {x: 100, y: 120, alpha: getRandomFN(0.5, 1), ease: Power2.easeOut});
  
}
//The first function in our sequence of animations
function seq01(){
    console.log("seq01");
        
    stopWatch = new Date().getTime(); 

    var twnDelay = 0;    
    $("#bg1").show();
    $("#bg5").show();
    $("#txt11").show();
    $("#txt12").show();
    $("#dish").show();
    $("#steam1").show();
    TweenMax.set ("#steam1", {x: 100, y: 120, opacity: 0});
    TweenMax.set ("#txt11", {x: 42, y: 24, opacity: 1});
    TweenMax.set ("#txt12", {x: 92, y: 60, opacity: 1});
    TweenMax.set ("#dish", {y: +BANNER_HEIGHT});

    TweenMax.from($("#bg1"), 14, {y: -500, rotationZ: "0.01deg", force3D: false , ease: Power0.easeOut, delay:twnDelay});
    TweenMax.from($("#bg5"), 9, {y: -500, rotationZ: "0.01deg", force3D: false , ease: Power0.easeOut, delay:twnDelay});
    twnDelay+=0;
    TweenMax.from($("#txt11"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.from($("#txt12"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.to($("#dish"), 1.2, {y: 0, rotationZ: "0.01deg", force3D: false , ease: Power3.easeOut, delay: twnDelay});
    twnDelay+=1;
    TweenMax.delayedCall(twnDelay, steam);
    TweenMax.delayedCall(twnDelay, createSteam);
    TweenMax.to($("#steam1"), 1, {x: 100, y: 120, opacity: 1, ease: Power2.easeOut, delay: twnDelay});
    twnDelay+=1.5;
    TweenMax.to($("#txt12"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.to($("#txt11"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});

    twnDelay+=0.75;
    TweenMax.delayedCall(twnDelay, seq02);
}
function seq02(){
    var twnDelay=0;
    $("#txt21").show();
    $("#txt22").show();
    $("#new").show();

    TweenMax.set ("#txt21", {x: 86, y: 24, opacity: 1});
    TweenMax.set ("#txt22", {x: 128, y: 55, opacity: 1});
    TweenMax.set ("#new", {opacity: 0, x: 188, y: 87, scale: 0});

    twnDelay+=0;
    TweenMax.from($("#txt21"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.from($("#txt22"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.to($("#new"), 0.75, {opacity:1, scale: 1, ease: Back.easeInOut.config(3), force3D:true, delay:twnDelay});

    twnDelay+=2.5;
    TweenMax.delayedCall(twnDelay, seq03);
}
function seq03(){
    var twnDelay=0;
    $("#bg2").show();
    TweenMax.set ("#bg2", {opacity: 0});
    TweenMax.to($("#bg2"), 1, {opacity:1 , ease:Power2.easeOut, delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.delayedCall(twnDelay, seq04);
}
function seq04(){
    var twnDelay=0;
    $("#txt31").show();
    $("#txt32").show();
    $("#txt33").show();
    $("#cta").show();
    $("#light").show();
    $("#pasta1").show();
    $("#pasta2").show();
    $("#logo").show();

    TweenMax.set ("#txt31", {x: 31, y: 24, opacity: 1});
    TweenMax.set ("#txt32", {x: 31, y: 54, opacity: 1});
    TweenMax.set ("#txt33", {x: 31, y: 84, opacity: 1});
    TweenMax.set ("#light", {opacity: 0});
    TweenMax.set ("#pasta1", {x: +BANNER_WIDTH, y: 179});
    TweenMax.set ("#pasta2", {x: +BANNER_WIDTH, y: 26});
    TweenMax.set ("#cta", {opacity: 0,scale: 0});
    TweenMax.set (".ctatext", {x: -51, y: -12, scale: 0.5222});
    TweenMax.set ("#logo", {y: +BANNER_HEIGHT});

    TweenMax.delayedCall(twnDelay, function() {
        steamTween.kill();
    });
    twnDelay+=0.5;
    TweenMax.to($("#pasta1"), 1, {x: 153, rotationZ: "0.01deg", force3D: false, ease: Power3.easeOut, delay: twnDelay});
    TweenMax.to($("#pasta2"), 1, {x: 210, rotationZ: "0.01deg", force3D: false, ease: Power3.easeOut, delay: twnDelay+0.25});
    TweenMax.to($("#light"), 1, {opacity: 1, ease: Power3.easeOut, delay: twnDelay+0.5});
    TweenMax.to($("#logo"), 1, {y: 0, ease: Power3.easeOut, delay: twnDelay});
    twnDelay+=0.5;
    TweenMax.from($("#txt31"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.from($("#txt32"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+=0.5;
    TweenMax.from($("#txt33"), 1, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -50", rotationZ: "0.01deg",delay:twnDelay});
    twnDelay+= 1;
    TweenMax.to($("#cta"), 0.75, {opacity:1, scale: 1, ease: Back.easeInOut.config(3), force3D:true, delay:twnDelay});
    twnDelay+=0.05;
    TweenMax.delayedCall(twnDelay, returnTimer);
    TweenMax.delayedCall(twnDelay, function() {
        steamTween.kill();
    });
}
function addListeners(){
    //Cta animation
    cta.addEventListener("mouseover",function(){
            TweenMax.to($("#cta"), 0.5, {x: -13, y: -3, width: 130, height: 36, ease: Back.easeInOut.config(3), force3D:true});
            TweenMax.to($(".ctatext"), 0.5, {x: -39.160, y: -9, scale: 0.6, ease: Back.easeInOut.config(3), rotationZ: "0.01deg", force3D: false});
        }
    );

    cta.addEventListener("mouseout",function(){
            TweenMax.to($("#cta"), 0.5, {x: 0, y: 0, width: 109, height: 30, ease: Back.easeInOut.config(3), force3D:true});
            TweenMax.to($(".ctatext"), 0.5, {x: -51.202, y: -12.1202, scale: 0.52332, ease: Back.easeInOut.config(3), rotationZ: "0.01deg", force3D: false});
        }
    );
}
//A simple helper function to do display:none to multiple items
function hideAll(whichOnes){
    for (var q=0;q<whichOnes.length;q++){
        $(whichOnes[q]).hide();
    }
}
//This will echo how many seconds have passed
function returnTimer(){
    stopWatch = ((new Date().getTime())-stopWatch) * 0.001;
    console.log(stopWatch+" seconds");
}
//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
}
// Steam maker
function createSteam() {
    var duration = getRandomFN(6, 8);
    var animDelay = getRandomFN(0.05, 0.1);
    var steamImg = document.createElement('img');
    $(steamImg).addClass(".steam").attr('src', 'assets/steam' + Math.floor(getRandomFN(3, 4)) + '.png');
    $(".steamContainer").append(steamImg);

    TweenMax.set(steamImg, { x: 80, y: 100, alpha: getRandomFN(0.2, 0.5), rotationZ: 0.01, scale: getRandomFN(0.2, 0.8), force3D: true, overwrite: false });
    TweenMax.from(steamImg, 2, { alpha: 0, overwrite: false });
    TweenMax.to(steamImg, duration, { bezier: { curviness: 0.8, values: [{ x: getRandomFN(80, 130), y: getRandomFN(35, 45) }, { x: getRandomFN(80, 130), y: getRandomFN(2, 10) }, { x: getRandomFN(80, 130), y: getRandomFN(-40, -60) }], autoRotate: false }, ease: Power0.easeNone, overwrite: false });
    TweenMax.to(steamImg, duration, { rotation: getRandomFN(-80, 80) });
    TweenMax.to(steamImg, 2, { alpha: 0, delay: duration - 2, overwrite: false });

    steamTween = TweenMax.delayedCall(animDelay, function() {
        createSteam();
    });
    TweenMax.delayedCall(duration, function() {
        $(steamImg).remove();
    });
}
function getRandomFN(min, max) {
    return Math.random() * (max - min) + min;
}