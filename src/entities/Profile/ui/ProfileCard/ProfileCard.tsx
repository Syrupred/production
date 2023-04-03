import { CurrencySelect } from 'entities/Currency';

import { ProfileSchema } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';

import classNames, { Mods } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';

import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';

import { Text, TextAlign } from 'shared/ui/Text/Text';
import { CountrySelect } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
className?: string;
data?: ProfileSchema;
readonly?: boolean;
onChangeFirstName?: (value: string) => void;
onChangeLastName?: (value: string) => void;
onChangeAge?: (value: string) => void;
onChangeCity?: (value: string) => void;
onChangeUsername?: (value: string) => void;
onChangeAvatar?: (value: string) => void;
onChangeCurrency?: (value: Currency) => void;
onChangeCountry?: (value: Country) => void;
}

const ProfileCard = ({
    className, onChangeCurrency, onChangeCountry,
    data, readonly, onChangeFirstName,
    onChangeLastName, onChangeAge, onChangeCity, onChangeUsername, onChangeAvatar,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (data?.isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, mods, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (data?.error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />

            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, { }, [className])}>

            <div className={cls.data}>
                {data?.form?.avatar
                && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.form?.avatar} alt={t('Аватар')} />
                    </div>
                )}
                <Input
                    value={data?.form?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.form?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readonly}
                />
                <Input
                    value={data?.form?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readonly}
                    type="number"
                />
                <Input
                    value={data?.form?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.form?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.form?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.form?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.form?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
