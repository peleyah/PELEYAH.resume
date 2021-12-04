const btn_switcher = document.querySelector('#css_switcher')

    const randomFunc = [
    revert,
    invert,
    ]

    btn_switcher.addEventListener(
    'click',
        function() {
            randomFunc[Math.floor(Math.random() * randomFunc.length)]();
        }
    ) 

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

    function revert() {
        const css = `html {
            -webkit-filter: invert(0%);
            -moz-filter: invert(0%);
            -o-filter: invert(0%);
            -ms-filter: invert(0%);
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