const btnCssSwitcher = document.querySelector('#css-switcher')
pageUpBottom = document.getElementById("page-up");

window.onscroll = function() {scrollFunction()};

//Function to listen odd and even clicks on the CSS switcher (dark mode switcher)
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

//Function to invert colors (dark mode)
function invert() {
    const css = `html {
        -webkit-filter: invert(100%);
        -moz-filter: invert(100%);
        -o-filter: invert(100%);
        -ms-filter: invert(100%);
    }`
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

//Function to switch to normal color mode
function revert() {
    const xss = `html {
        -webkit-filter: invert(0%);
        -moz-filter: invert(0%);
        -o-filter: invert(0%);
        -ms-filter: invert(0%);
    }`
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

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 490) {
    pageUpBottom.style.display = "block";
  } else {
    pageUpBottom.style.display = "none";
  }
}

function toTheTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
