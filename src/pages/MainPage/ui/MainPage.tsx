import { BugButton } from 'app/provider/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <BugButton />
        </div>
    );
};

export default MainPage;
