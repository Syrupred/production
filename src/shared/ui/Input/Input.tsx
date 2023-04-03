import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputpProps = Omit<InputHTMLAttributes<HTMLInputElement>,
 'value' | 'readOnly' | 'onChange'>

interface InputProps extends HTMLInputpProps {
className?: string;
value?: string;
type?: string;
autofocus?: boolean;
placeholder: string;
readOnly?: boolean;
onChange?: (value: string) => void;
}

const Input = memo(({
    className, value, onChange, type = 'text', autofocus, placeholder, readOnly, ...otherProps
}: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            <div className={cls.placeholder}>{placeholder}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});

export default memo(Input);
