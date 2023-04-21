import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
callback?: () => void;
triggerRef: MutableRefObject<HTMLElement>;
wrapperRef: MutableRefObject<HTMLElement>;
}

const useInfiniteScroll = ({ triggerRef, wrapperRef, callback }: UseInfiniteScrollProps) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperRefer = wrapperRef.current;
        const triggerRefer = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperRefer,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRefer);
        }
        return () => {
            if (observer) {
                observer.unobserve(triggerRefer);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};

export default useInfiniteScroll;
