import { CSSProperties, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    border?: string;
}

const Skeleton = memo(({
    className, height, width, border,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        height, width, borderRadius: border,
    };

    return (
        <div className={classNames(cls.Skeleton, { }, [className])} style={styles} />
    );
});

export default Skeleton;
