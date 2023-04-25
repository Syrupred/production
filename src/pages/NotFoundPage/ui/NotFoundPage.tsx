import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import Pages from 'widgets/Pages/Pages';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (

        <Pages className={classNames(cls.NotFoundPage)}>
            {t('Страница не найдена')}
        </Pages>

    );
};

export default NotFoundPage;
