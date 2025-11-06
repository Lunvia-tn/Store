(function(){
    "use strict";

    // =====================
    // Detect mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // =====================
    // 1. Mobile protections
    if(isMobile){
        const style = document.createElement('style');
        style.innerHTML = `
            /* Remove tap highlight and prevent unwanted selection */
            * {
                -webkit-tap-highlight-color: transparent !important;
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                outline: none !important;
            }

            input, textarea, select {
                -webkit-user-select: text !important;
                user-select: text !important;
                outline: auto !important;
            }

            a, button {
                -webkit-tap-highlight-color: transparent !important;
                outline: none !important;
            }

            /* Remove focus and active styles */
            a:focus, button:focus,
            a:active, button:active {
                outline: none !important;
                box-shadow: none !important;
            }
        `;
        document.head.appendChild(style);

        // Prevent multi-touch zoom
        document.addEventListener('touchstart', e => {
            if(e.touches.length > 1) e.preventDefault();
        }, { passive: false });
    }

    // =====================
    // 2. Desktop protections
    if(!isMobile){
        // Disable right-click, selection, drag, copy/paste
        ['contextmenu','selectstart','dragstart','copy','cut','paste'].forEach(evt => {
            document.addEventListener(evt, e => e.preventDefault());
        });

        // Disable keyboard shortcuts (DevTools, view source)
        document.addEventListener('keydown', e => {
            const blocked = ["F12","I","J","C","U","S"];
            if(
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && blocked.includes(e.key)) ||
                (e.ctrlKey && blocked.includes(e.key))
            ) e.preventDefault();
        });

        // Anti-iframe embedding
        if(window.top !== window.self){
            window.top.location = window.location;
        }

        // DevTools detection
        let devtoolsOpen = false;
        const threshold = 200;
        const checkDevTools = () => {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;
            const isOpen = widthDiff || heightDiff;
            if(isOpen && !devtoolsOpen){
                devtoolsOpen = true;
                alert('DevTools detected! Page will be blocked.');
                location.href = 'about:blank';
            } else if(!isOpen) devtoolsOpen = false;
        };
        setInterval(checkDevTools, 1000);

        // Anti-clone overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(255,255,255,0.98)';
        overlay.style.color = '#000';
        overlay.style.zIndex = '999999';
        overlay.style.display = 'none';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.fontSize = '24px';
        overlay.style.textAlign = 'center';
        overlay.innerText = 'Viewing source or copying content is disabled!';
        document.body.appendChild(overlay);

        const showOverlay = () => overlay.style.display = 'flex';
        const hideOverlay = () => overlay.style.display = 'none';

        document.addEventListener('keydown', e => {
            if(e.ctrlKey && e.key === 'u') showOverlay();
        });
        document.addEventListener('contextmenu', showOverlay);
        document.addEventListener('copy', showOverlay);
    }

    // =====================
    // 3. Console tampering protection
    (function consoleProtection(){
        const originalConsole = console.log;
        window.console.log = function(...args){
            try { originalConsole.apply(console, args); } catch(e){}
        };
        ['log','warn','error','info','debug'].forEach(method=>{
            Object.defineProperty(console, method, { configurable: false, writable: false });
        });
    })();

    // =====================
    // 4. Input XSS / unsafe character protection
    (function xssProtection(){
        const unsafeChars = ['<','>','"',"'",'(',')',';','{','}','='];
        document.body.addEventListener('input', e => {
            const val = e.target.value;
            if(unsafeChars.some(ch => val.includes(ch))) e.target.value = '';
        });
    })();

    // =====================
    // 5. Critical function wrapper
    window.protect = function(fn){
        try { fn(); } catch(e) {}
    };

})();
