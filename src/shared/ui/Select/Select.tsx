import { ChangeEvent, memo } from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
    content: string;
    value: string;
}

interface SelectProps {
className?: string;
label?: string;
options?: SelectOptions[];
value?: string;
readonly?: boolean;
onChange?: (value: string) => void;
}

const Select = ({
    className, label, options, value, onChange, readonly,
}: SelectProps) => {
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {options?.map((opt) => (
                    <option
                        className={cls.option}
                        value={opt.value}
                        key={opt.value}
                    >
                        {opt.content}

                    </option>
                ))}
            </select>
        </div>
    );
};

export default memo(Select);
