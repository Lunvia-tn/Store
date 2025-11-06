// =====================
// security.js - Fixed & Stable Self-Defending Script
// =====================

(function(){
    "use strict";

    // =====================
    // 1. Full Event Blocking
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());

    // Touch gestures (mobile)
    document.addEventListener('touchstart', e => {
        if (e.touches.length > 1) e.preventDefault(); // prevent pinch zoom
    }, { passive: false });
    document.addEventListener('gesturestart', e => e.preventDefault());

    // =====================
    // 2. Disable Keyboard Shortcuts
    document.addEventListener('keydown', e => {
        const blocked = ["F12", "I", "J", "C", "U", "S"];
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && blocked.includes(e.key)) ||
            (e.ctrlKey && blocked.includes(e.key))
        ) {
            e.preventDefault();
            // console.log('Shortcut blocked!'); // optional
        }
    });

    // =====================
    // 3. Detect DevTools (stable version)
    let devtoolsOpen = false;
    const threshold = 200; // px, adjusted to reduce false positives

    const checkDevTools = () => {
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;

        const isOpen = widthDiff || heightDiff;
        if (isOpen && !devtoolsOpen) {
            devtoolsOpen = true;
            console.warn('DevTools detected!'); // optional action
            // location.reload(); // remove automatic reload to avoid infinite loops
        } else if (!isOpen) {
            devtoolsOpen = false;
        }
    };

    setInterval(checkDevTools, 1500);

    // =====================
    // 4. Console tampering protection (safe version)
    (function consoleProtection() {
        const originalConsole = console.log;
        window.console.log = function(...args){
            try {
                originalConsole.apply(console, args);
            } catch(e) {
                // silently fail, don't reload page
            }
        };
    })();

    // =====================
    // 5. Input XSS protection
    (function xssProtection() {
        const unsafeChars = ['<', '>', '"', "'", '(', ')', ';', '{', '}', '='];
        document.body.addEventListener('input', e => {
            const val = e.target.value;
            if (unsafeChars.some(ch => val.includes(ch))) {
                e.target.value = '';
                // optional alert: alert('Potential malicious input blocked!');
            }
        });
    })();

    // =====================
    // 6. Critical function wrapper
    window.protect = function(fn){
        try { fn(); } catch(e) {}
    };

})();
