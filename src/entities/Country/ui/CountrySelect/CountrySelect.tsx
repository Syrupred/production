import { Country } from 'entities/Country/model/types/country';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';

interface CountrySelectProps {
className?: string;
value?: string;
onChange?: (value: Country) => void;
readonly?: boolean;
}

const options = [{ value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }];

const CountrySelect = ({
    className, value, onChange, readonly = true,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            value={value}
            onChange={onChangeCountry}
            className={classNames('', { }, [className])}
            label={t('Укажите страну')}
            options={options}
        />
    );
};

export default memo(CountrySelect);
