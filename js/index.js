const btn_switcher = document.querySelector('#css_switcher')

//Function to listen odd and even clicks on the CSS switcher (dark mode switcher)
btn_switcher.addEventListener(
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