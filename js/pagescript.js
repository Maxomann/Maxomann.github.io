// A $( document ).ready() block.
$( document ).ready(function() {
    $('#cover').height( document.body.clientHeight-80 );
    initContactInfo();
    $('.scroll').on("click touchstart", navTo);
});

function scrollToElement(element){
    if(element===undefined){
        $('html,body').animate({scrollTop: $('body').offset().top-80});
    }else{
        $('html,body').animate({scrollTop: element.offset().top-80});
    }
}

function navTo(event){
    var page = location.href.split('#')[0];
    var href = event.target.href.split('#');
    var dest_page = href[0];
    var dest_hash = href[1];
    if(dest_hash===undefined){
        dest_hash='';
    }

    if(page===dest_page){
        event.preventDefault();

        var dest_hash_location = '#'+dest_hash;
        var element = $(dest_hash_location);
        /*if(!dest_hash){
            history.pushState(null, null, ' ');
        }else{
            history.pushState(null, null, dest_hash_location);
        }*/
        if(element.length!==0){
            scrollToElement(element);
        }else{
            scrollToElement(undefined);
        }
        // bootstrap navbar
        var navbar_header = $('.navbar-header button');
        if(!navbar_header.hasClass('collapsed')){
            navbar_header.addClass('collapsed');
        }
        var navbar = $('#navbar');
        if(navbar.hasClass('in')){
            navbar.removeClass('in');
        }
    }
}

function initContactInfo(){
    // Mail hrefs
    $(".addMailtoHref").attr("href", "mailto:info@kay-gonschior.de");

    $(".contact_general").html("<h3>Kay Gonschior</h3><p>info@kay-gonschior.de<br>0176 / 48391997<br>Xing</p>");

    $(".contact_imp_de").html("<br>Gonschior, Kay Leon<br>Scheideweg, 26<br>20253 Hamburg<br><h2>Kontakt</h2>Telefon: 0176 / 48391997<br>E-Mail: <a href='mailto:info@kay-gonschior.de'>info@kay-gonschior.de</a><br>");
    $(".contact_imp_en").html("<br>Gonschior, Kay Leon<br>Scheideweg, 26<br>20253 Hamburg<br><h2>Contact</h2>Telephone: 0176 / 48391997<br>E-Mail: <a href='mailto:info@kay-gonschior.de'>info@kay-gonschior.de</a><br>");

    $(".priv_mail").html("<a href='mailto:info@kay-gonschior.de'>info@kay-gonschior.de</a> )<br>");
}
