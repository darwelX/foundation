$(document).foundation()
$('[data-toggle-dia]').click( function (ev){
    const panel = $(this).data('toggleDia');
    $('#lineup-tabs').foundation('selectTab',panel);
});

const $offCanvas = $('#offCanvas');
$offCanvas.find('li').click(function (ev){
    $offCanvas.foundation('close');
});



function animateViernes(){
    var $animation1 = $("#guns-uno").data("animation");
    var $animation2 = $("#guns-dos").data("animation");
    var $animation3 = $("#guns-tres").data("animation");
    var $animation4 = $("#guns-cuatro").data("animation");
    MotionUI.animateIn($("#guns-uno"), $animation1);
    MotionUI.animateIn($("#guns-dos"), $animation2);
    MotionUI.animateIn($("#guns-tres"), $animation3);
    MotionUI.animateIn($("#guns-cuatro"), $animation4);
}

function animateSabado(){
    var $animation1 = $("#beatles-uno").data("animation");
    var $animation2 = $("#beatles-dos").data("animation");
    var $animation3 = $("#beatles-tres").data("animation");
    var $animation4 = $("#beatles-cuatro").data("animation");
    MotionUI.animateIn($("#beatles-uno"), $animation1);
    MotionUI.animateIn($("#beatles-dos"), $animation2);
    MotionUI.animateIn($("#beatles-tres"), $animation3);
    MotionUI.animateIn($("#beatles-cuatro"), $animation4);
}

function animateDomingo(){
    var $animation1 = $("#queen-uno").data("animation");
    var $animation2 = $("#queen-dos").data("animation");
    var $animation3 = $("#queen-tres").data("animation");
    var $animation4 = $("#queen-cuatro").data("animation");
    MotionUI.animateIn($("#queen-uno"), $animation1);
    MotionUI.animateIn($("#queen-dos"), $animation2);
    MotionUI.animateIn($("#queen-tres"), $animation3);
    MotionUI.animateIn($("#queen-cuatro"), $animation4);
}

const $tabViernes = $('#viernes');
$tabViernes.click(function(eve){
    animateViernes();
});

const $tabSabado = $('#sabado');
$tabSabado.click(function(eve){
    animateSabado();
});

const $tabDomingo = $('#domingo');
$tabDomingo.click(function(eve){
    animateDomingo();
});

const $tabViernesSticky = $('#viernes-sticky');
$tabViernesSticky.click(function(eve){
    animateViernes();
});

const $tabSabadoSticky = $('#sabado-sticky');
$tabSabadoSticky.click(function(eve){
    animateSabado();
});

const $tabDomingoSticky = $('#domingo-sticky');
$tabDomingoSticky.click(function(eve){
    animateDomingo();
});

const $tabViernesCanvas = $('#viernes-canvas');
$tabViernesCanvas.click(function(eve){
    animateViernes();
});

const $tabSabadoCanvas = $('#sabado-canvas');
$tabSabadoCanvas.click(function(eve){
    animateSabado();
});

const $tabDomingoCanvas = $('#domingo-canvas');
$tabDomingoCanvas.click(function(eve){
    animateDomingo();
});

animateViernes();
