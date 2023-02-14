import { ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
className?: string;
theme?: ThemeButton;
square?: boolean;
size?: SizeButton;
}

const Button = (props: ButtonProps) => {
    const {
        children, className, theme, square, size = SizeButton.M, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
        >
            {children}
        </button>
    );
};

export default Button;
