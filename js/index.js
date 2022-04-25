$(document).ready(function() { 
    getQuote();
});

/* Variables declaration */

const btnCssSwitcher = document.querySelector('#css-switcher')
const pageUpBottom = document.querySelector("#page-up");

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

$('#page-top-btn').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 750);
    return false;
});

/* End function */

/* Smooth scroll */

$('a').click(function(){
    if($(this).attr('target') != '_blank'){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 750);
        return false;
    }
});

/* Smooth scroll */

/* Random quote */

function getQuote() {

    //Creation of a variable to store all possible quotes
    let randNums = [0,2,3,1,4];

    //Creation of the arrays
    quotes = new Array(5);
    sources = new Array(5);

    //Initialize the arrays values with quotes
    quotes[0] = "You don't need to be better than anyone else; you just need to be better than you used to be.";
    sources[0] = "Wayne Dyer";
    quotes[1] = "Strive not to be a success, but rather to be of value.";
    sources[1] = "Albert Einstein";
    quotes[2] = "Don't go through life, grow through life.";
    sources[2] = "Eric Butterworth";
    quotes[3] = "If there is no struggle, there is no progress.";
    sources[3] = "Frederick Douglass";
    quotes[4] = "Be the change you want to see in this world.";
    sources[4] = "Gandhi";

    //Get a random quote
    var i = Math.floor(Math.random() * quotes.length);
    setInterval(function() {
        randNums = randNums.splice(i,1);
    }, 50);

    //Integrate the quote as HTML
    document.getElementById("innerHtmlBlockquote").innerHTML = "<h4>" + quotes[randNums[i]] + "</h4>";
    document.getElementById("innerHtmlBlockquote").innerHTML += "<footer class='blockquote-footer'>" + sources[randNums[i]] + "</footer>";
}

/* Random quote */