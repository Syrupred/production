import {
    fetchProfileData, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { getProfileState } from 'entities/Profile/model/selectors/getProfileState';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Country } from 'entities/Country/model/types/country';
import classNames from 'shared/lib/classNames/classNames';
import DynamicModalLoader,
{ ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'entities/Currency/model/types/currency';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import UseInitialEffect from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import Pages from 'widgets/Pages/Pages';
import cls from './ProfilePage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileState);
    const { id } = useParams<{id: string}>();

    const validateErrorsTranslate = {
        [ValidateProfileError.INCORRRECT_AGE]: t('некорректный возраст'),
        [ValidateProfileError.INCORRRECT_COUNTRY]: t('некорректная страна'),
        [ValidateProfileError.INCORRRECT_USER_DATA]: t('имя и фамилия обязательны'),
        [ValidateProfileError.NO_DATA]: t('данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]: t('ошибка при сохранении изменений'),
    };
    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: value }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    UseInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>

            <Pages className={classNames(cls.ProfilePage, { }, [className])}>
                <ProfilePageHeader />
                {profile.validateErrors?.length && profile.validateErrors?.map((error) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorsTranslate[error]}
                        key={error}
                    />
                ))}
                <ProfileCard
                    data={profile}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    readonly={profile.readonly}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Pages>

        </DynamicModalLoader>
    );
};

export default ProfilePage;
