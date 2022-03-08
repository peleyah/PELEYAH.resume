/* Variables declaration */

const btnCssSwitcher = document.querySelector('#css-switcher')
pageUpBottom = document.getElementById("page-up");

/* End variables declaration /*

/* Event to listen to scrollbar being used and trigger scrollFunction */

window.onscroll = function() {scrollFunction()};


/* End event */

/* Function to listen odd and even clicks on the CSS switcher (dark mode switcher) */

btnCssSwitcher.addEventListener(
'click',
    function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            //odd clicks
            revert();
            
        } else {
            //even clicks
            invert();
        }
        $(this).data("clicks", !clicks);
    }
) 

/* End function */

/* Function to invert colors (dark mode) */

function invert() {
    const css = `html{
        -webkit-filter: invert(100%);
        -moz-filter: invert(100%);
        -o-filter: invert(100%);
        -ms-filter: invert(100%);
    }
    .img-profile{
        -webkit-filter: invert(100%);
        -moz-filter: invert(100%);
        -o-filter: invert(100%);
        -ms-filter: invert(100%);
    }
    `
    const head = document.head
    const style = document.createElement('style')
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

/* End function */

/* Function to switch to normal color mode */

function revert() {
    const xss = `html{
        -webkit-filter: invert(0%);
        -moz-filter: invert(0%);
        -o-filter: invert(0%);
        -ms-filter: invert(0%);
    }
    .img-profile{
        -webkit-filter: invert(0%);
        -moz-filter: invert(0%);
        -o-filter: invert(0%);
        -ms-filter: invert(0%);
    }
    `
    const head = document.head
    const style = document.createElement('style')
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = xss;
    } else {
        style.appendChild(document.createTextNode(xss));
    }
    head.appendChild(style);
}

/* End function */

/* Function to hide page top buttom on scrolling */

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 490) {
    pageUpBottom.style.display = "block";
  } else {
    pageUpBottom.style.display = "none";
  }
}

/* Function to push page to the top, used when page top button is clicked */

$('button').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

/* End function */

/* Smooth scroll */

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

/* Smooth scroll */