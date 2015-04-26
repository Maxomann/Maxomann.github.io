////MOBILE CONTROL
var panelActive=true;
var mobileControl=false;

function showPanel(){
    var child_zero = document.getElementById('nav').children[0];
    var panel_childs = child_zero.children;

    panel_childs[1].style.visibility = 'visible';
    panel_childs[1].style.pointerEvents = 'inherit';

    panel_childs[2].style.visibility = 'visible';
    panel_childs[2].style.pointerEvents = 'inherit';

    panel_childs[3].style.visibility = 'visible';
    panel_childs[3].style.pointerEvents = 'inherit';

    panel_childs[4].style.visibility = 'visible';
    panel_childs[4].style.pointerEvents = 'inherit';

    panel_childs[5].style.visibility = 'visible';
    panel_childs[5].style.pointerEvents = 'inherit';

    panelActive=true;
}
function hidePanel(){
    var child_zero = document.getElementById('nav').children[0];
    var panel_childs = child_zero.children;

    panel_childs[1].style.visibility = 'hidden';
    panel_childs[1].style.pointerEvents = 'none';

    panel_childs[2].style.visibility = 'hidden';
    panel_childs[2].style.pointerEvents = 'none';

    panel_childs[3].style.visibility = 'hidden';
    panel_childs[3].style.pointerEvents = 'none';

    panel_childs[4].style.visibility = 'hidden';
    panel_childs[4].style.pointerEvents = 'none';

    panel_childs[5].style.visibility = 'hidden';
    panel_childs[5].style.pointerEvents = 'none';
    panelActive=false;
}
function changePanel(){
    if(panelActive){
        hidePanel();
    }
    else{
        showPanel();
    }
}
function enableMobileControl(){
    document.getElementById('nav_planelButtonContainer').style.visibility = "visible";
    hidePanel();
    mobileControl=true;
}
function disableMobileControl(){
    document.getElementById('nav_planelButtonContainer').style.visibility = "hidden";
    showPanel();
    mobileControl=false;
}
function checkMobileControl(){
    if(window.innerWidth<=835){
        if(!mobileControl){
            enableMobileControl();
        }
    }
    else{
        if(mobileControl){
            disableMobileControl();
        }
    }
}

////BACKGROUND
function resizeHeaderBackgroundImage() {
    if(window.innerWidth>835)
        document.getElementById('article').style.marginTop = (window.innerHeight).toString() + "px";
    else
        document.getElementById('article').style.marginTop = 0;
}

////PROTECTION
function placeProtected(){
    var mails = document.getElementsByClassName('mail_info');
    for(n in mails){
        mails[n].href="mailto:" + he.decode("&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x6B;&#x61;&#x79;&#x2D;&#x67;&#x6F;&#x6E;&#x73;&#x63;&#x68;&#x69;&#x6F;&#x72;&#x2E;&#x64;&#x65;");
        mails[n].innerHTML="&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x6B;&#x61;&#x79;&#x2D;&#x67;&#x6F;&#x6E;&#x73;&#x63;&#x68;&#x69;&#x6F;&#x72;&#x2E;&#x64;&#x65;";
    }
    
    var impressums = document.getElementsByClassName('impressum_info');
    for(n in impressums){   
impressums[n].innerHTML=he.decode("&#x3C;&#x70;&#x3E;&#x4B;&#x61;&#x79;&#x20;&#x47;&#x6F;&#x6E;&#x73;&#x63;&#x68;&#x69;&#x6F;&#x72;&#x3C;&#x2F;&#x70;&#x3E;&#xA;&#x3C;&#x70;&#x3E;&#x53;&#x63;&#x68;&#x65;&#x69;&#x64;&#x65;&#x77;&#x65;&#x67;&#x2C;&#x20;&#x32;&#x36;&#x3C;&#x2F;&#x70;&#x3E;&#xA;&#x3C;&#x70;&#x3E;&#x32;&#x30;&#x32;&#x35;&#x33;&#x20;&#x48;&#x61;&#x6D;&#x62;&#x75;&#x72;&#x67;&#x3C;&#x2F;&#x70;&#x3E;&#xA;&#x3C;&#x2F;&#x62;&#x72;&#x3E;&#xA;&#x3C;&#x70;&#x3E;&#x54;&#x65;&#x6C;&#x65;&#x66;&#x6F;&#x6E;&#x3A;&#x9;&#x30;&#x34;&#x30;&#x2F;&#x37;&#x38;&#x38;&#x39;&#x34;&#x35;&#x38;&#x38;&#x3C;&#x2F;&#x70;&#x3E;")
    }
}

////CALLBACKS
$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
        });
    
    placeProtected();
    resizeHeaderBackgroundImage();
    disableMobileControl();
    checkMobileControl();

    var nav = document.getElementById('nav');
    nav.style.height = "68px";
    nav.children[0].style.height = "68px";
});

function onResize(){
    resizeHeaderBackgroundImage();
    checkMobileControl();
};

window.addEventListener("resize", onResize);