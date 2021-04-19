//scroll

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 1000}});

new ScrollMagic.Scene({triggerElement: "#sec1"})
    .setClassToggle("#menu1", "active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec2"})
    .setClassToggle("#menu2", "active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec3"})
    .setClassToggle("#menu3", "active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#sec4"})
    .setClassToggle("#menu4", "active")
    .addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#sec2", duration: 200})
    .addTo(controller)
    .on("enter", function(){
        $('.percent').each(function() {
            var dataHeight = $(this).data("percent");
            $(this).css({
                'width' : dataHeight + '%',
            });
        }); 
    })


//menu téléphone
let togglemenu = false;
$('#fleche').click(function(){
    if (!togglemenu){
        ouvrirMenu()
    }else{
        fermerMenu()
    };
});
$('#menuTel a').click(function(){
    fermerMenu();
})

function ouvrirMenu(){
    $('#menuTel').css({
        'transform' : 'translateX(0)',
    })
    $('#fleche').css({
        'backgroundImage' : 'url(sources/flecheGauche.png)',
    })
    togglemenu = true;
}
function fermerMenu(){
    $('#menuTel').css({
        'transform' : 'translateX(-387px)',
    })
    $('#fleche').css({
        'backgroundImage' : 'url(sources/flecheDroite.png)',
    })
    togglemenu = false; 
}

//contact