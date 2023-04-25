import { useCallback, useRef } from 'react';

const UseThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttleRef = useRef(false);
    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;
            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
};

export default UseThrottle;
