import { Currency } from 'entities/Currency/model/types/currency';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';

interface CurrencySelectProps {
className?: string;
value?: string;
onChange?: (value: Currency) => void;
readonly?: boolean;
}

const options = [{ value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD }];

const CurrencySelect = ({
    className, value, onChange, readonly = true,
}: CurrencySelectProps) => {
    const { t } = useTranslation();
    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            readonly={readonly}
            value={value}
            onChange={onChangeCountry}
            className={classNames('', { }, [className])}
            label={t('Укажите валюту')}
            options={options}
        />
    );
};

export default memo(CurrencySelect);
