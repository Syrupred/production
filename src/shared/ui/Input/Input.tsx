import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputpProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputpProps {
className?: string;
value?: string;
type?: string;
autofocus?: boolean;
placeholder: string;

onChange?: (value: string) => void;
}

const Input = memo(({
    className, value, onChange, type = 'text', autofocus, placeholder, ...otherProps
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
    return (
        <div className={classNames(cls.Input, { }, [className])}>
            <div>{placeholder}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    );
});

export default memo(Input);
