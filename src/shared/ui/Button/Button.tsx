import { ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
className?: string;
theme?: ThemeButton;
}

const Button = (props: ButtonProps) => {
    const {
        children, className, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};

export default Button;
