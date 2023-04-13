/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import Button, { ThemeButton } from '../Button/Button';

import cls from './Code.module.scss';

interface CodeProps {
className?: string;
text: string;
}

const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, { }, [className])}>
            <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};

export default memo(Code);
