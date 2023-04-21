import { MutableRefObject, ReactNode, useRef } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Pages.module.scss';

interface PagesProps {
className?: string;
children: ReactNode;
onScrollEnd?: () => void;
}

const Pages = ({ className, children, onScrollEnd }: PagesProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(cls.Pages, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

export default Pages;
