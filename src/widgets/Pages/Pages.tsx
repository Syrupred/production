import { StateSchema } from 'app/provider/StoreProvider';
import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll';
import UseInitialEffect from 'shared/lib/hooks/useInitialEffect';
import UseThrottle from 'shared/lib/hooks/useThrottle';
import cls from './Pages.module.scss';
import { getScrollSaveSelectorsByPath, scrollActions } from './ScrollSave/model';

interface PagesProps {
className?: string;
children: ReactNode;
onScrollEnd?: () => void;
}

const Pages = ({ className, children, onScrollEnd }: PagesProps) => {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSaveSelectorsByPath(state, pathname),
    );
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    UseInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = UseThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Pages, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

export default Pages;
