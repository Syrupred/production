import { ButtonHTMLAttributes, memo } from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
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
disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const {
        children,
        className, theme = ThemeButton.OUTLINE, square, size = SizeButton.M, disabled, ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            {...otherProps}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
        >
            {children}
        </button>
    );
};

export default memo(Button);
