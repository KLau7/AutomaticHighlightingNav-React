
export const queuedThrottle = (fn, timeout = 500) => {
    var queue = null;
    var timer = null;
        
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                queue && queue(...arguments);
                timer = null;
                queue = null;
            }, timeout);
            fn(...arguments);
        }else {
            queue = () => {
                fn(...arguments);
            }
        }
    }
}