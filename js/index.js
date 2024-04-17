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

/* Function to make page title to scroll */

(function titleScroller(text) {
   document.title = text;
   setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
   }, 500);
}("João Sousa - IT Individual"));

/* End Function */

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
        scrollTop: $('#page-top').offset().top
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
    quotes[1] = "Don't go through life, grow through life.";
    sources[1] = "Eric Butterworth";
    quotes[2] = "If there is no struggle, there is no progress.";
    sources[2] = "Frederick Douglass";
    quotes[3] = "Change is inevitable. Growth is optional.";
    sources[3] = "John C. Maxwell";
    quotes[4] = "When we stop growing, we stop living and start existing.";
    sources[4] = "Warren Wiersbe";

    //Get a random quote
    var i = Math.floor(Math.random() * quotes.length);
    setInterval(function() {
        randNums = randNums.splice(i,1);
    }, 25);

    //Integrate the quote as HTML
    document.getElementById("innerHtmlBlockquote").innerHTML = "<h4>" + quotes[randNums[i]] + "</h4>";
    document.getElementById("innerHtmlBlockquote").innerHTML += "<footer class='blockquote-footer'>" + sources[randNums[i]] + "</footer>";
}

/* Random quote */
