(function(){
    "use strict";

    // Detect mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // =====================
    // 1. Full Event Blocking (desktop only)
    if(!isMobile){
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('selectstart', e => e.preventDefault());
        document.addEventListener('dragstart', e => e.preventDefault());
        document.addEventListener('copy', e => e.preventDefault());
        document.addEventListener('cut', e => e.preventDefault());
        document.addEventListener('paste', e => e.preventDefault());
    }

    // =====================
    // 2. Mobile fixes: remove tap highlight, prevent unwanted selection
    if(isMobile){
        const style = document.createElement('style');
        style.innerHTML = `
            * {
                -webkit-tap-highlight-color: transparent !important; /* remove blue tap highlight */
                -webkit-user-select: none !important;  /* disable text selection */
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                outline: none !important; /* remove focus outline */
            }
            input, textarea, select {
                -webkit-user-select: text !important; /* allow typing */
                user-select: text !important;
                outline: auto !important; /* normal input outline */
            }
            a, button {
                -webkit-tap-highlight-color: transparent !important; /* remove tap on links/buttons */
            }
        `;
        document.head.appendChild(style);

        // Prevent multi-touch gestures (pinch/zoom)
        document.addEventListener('touchstart', function(e){
            if(e.touches.length > 1){
                e.preventDefault();
            }
        }, { passive: false });
    }

    // =====================
    // 3. Disable Keyboard Shortcuts (desktop only)
    if(!isMobile){
        document.addEventListener('keydown', e => {
            const blocked = ["F12", "I", "J", "C", "U", "S"];
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && blocked.includes(e.key)) ||
                (e.ctrlKey && blocked.includes(e.key))
            ) {
                e.preventDefault();
            }
        });
    }

    // =====================
    // 4. Detect DevTools (desktop only)
    if(!isMobile){
        let devtoolsOpen = false;
        const threshold = 200; 
        const checkDevTools = () => {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;
            const isOpen = widthDiff || heightDiff;
            if(isOpen && !devtoolsOpen){
                devtoolsOpen = true;
                console.warn('DevTools detected!');
            } else if(!isOpen){
                devtoolsOpen = false;
            }
        };
        setInterval(checkDevTools, 1500);
    }

    // =====================
    // 5. Console tampering protection (safe version)
    (function consoleProtection() {
        const originalConsole = console.log;
        window.console.log = function(...args){
            try {
                originalConsole.apply(console, args);
            } catch(e) {}
        };
    })();

    // =====================
    // 6. Input XSS protection
    (function xssProtection() {
        const unsafeChars = ['<', '>', '"', "'", '(', ')', ';', '{', '}', '='];
        document.body.addEventListener('input', e => {
            const val = e.target.value;
            if (unsafeChars.some(ch => val.includes(ch))) {
                e.target.value = '';
            }
        });
    })();

    // =====================
    // 7. Critical function wrapper
    window.protect = function(fn){
        try { fn(); } catch(e) {}
    };

})();
