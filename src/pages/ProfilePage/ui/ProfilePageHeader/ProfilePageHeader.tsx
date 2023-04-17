import { profileActions, updateProfileData } from 'entities/Profile';
import { getProfileState } from 'entities/Profile/model/selectors/getProfileState';
import { getAuthUserData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import classNames from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileState);
    const authData = useSelector(getAuthUserData);

    const isEdit = profile.data?.id === authData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    console.log(profile.data?.id, authData?.id);
    return (
        <div className={classNames(cls.ProfilePageHeader, { }, [className, cls.header])}>
            <Text title={t('Профиль')} />

            {isEdit && (
                <div className={cls.btnsWrapper}>
                    {profile.readonly
                        ? (
                            <Button
                                className={cls.editBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    theme={ThemeButton.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>

    );
};

export default ProfilePageHeader;
