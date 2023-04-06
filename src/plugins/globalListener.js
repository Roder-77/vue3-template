// eslint-disable-next-line no-unused-vars
function preventRightClick() {
    window.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    }, true);
}

// eslint-disable-next-line no-unused-vars
function detectDevToolsOpen() {
    function devToolsOpened() {
        // ToDo
    }

    // Detect DevTools (FireFox)
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        // Detect Resize (Chrome/Firefox/Edge Works) but (Triggers on Zoom In Chrome and Zoom Out FireFox)
        window.onresize = function() {
            if ((window.outerHeight - window.innerHeight) > 100 || (window.outerWidth - window.innerWidth) > 100)
                devToolsOpened();
        };
    }

    // Detect Fire Bug
    if (window.console && window.console.firebug || console.assert(1) === '_firebugIgnore') {
        devToolsOpened();
    }

    // Detect Key Shortcuts
    // https://stackoverflow.com/a/65135979/9498503
    window.addEventListener('keydown', function(e) {
        const isdevToolsOpened = (
            // Mac
            // CMD + Alt + I (Chrome, Firefox, Safari)
            e.metaKey === true && e.altKey === true && e.code === 'KeyI'
            // CMD + Alt + J (Chrome)
            || e.metaKey === true && e.altKey === true && e.code === 'KeyJ'
            // CMD + Alt + C (Chrome)
            || e.metaKey === true && e.altKey === true && e.code === 'KeyC'
            // CMD + Shift + C (Chrome)
            || e.metaKey === true && e.shiftKey === true && e.code === 'KeyC'
            // windows
            // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
            || e.ctrlKey === true && e.shiftKey === true && e.code === 'KeyI'
            // Ctrl + Shift + J (Chrome, Edge)
            || e.ctrlKey === true && e.shiftKey === true && e.code === 'KeyJ'
            // Ctrl + Shift + C (Chrome, Edge)
            || e.ctrlKey === true && e.shiftKey === true && e.code === 'KeyC'
            // F12 (Chome, Firefox, Edge)
            || e.code === 'F12'
            // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
            || e.metaKey === true && e.altKey === true && e.code === 'KeyU'
            || e.ctrlKey === true && e.code === 'KeyU'
        );

        if (isdevToolsOpened)
            devToolsOpened();
    });
}

export default {
    install() {
        preventRightClick();
        detectDevToolsOpen();
    },
};
