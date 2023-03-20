import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import DynamicModalLoader,
{ ReducersList } from 'shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModalLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, { }, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModalLoader>
    );
};

export default ProfilePage;
