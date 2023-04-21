import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
className?: string;
children: ReactNode;
}

const Card = ({ className, children, ...othersprops }: CardProps) => (
    <div className={classNames(cls.Card, { }, [className])} {...othersprops}>
        {children}
    </div>
);

export default Card;
