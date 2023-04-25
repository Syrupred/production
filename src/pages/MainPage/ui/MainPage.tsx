import { BugButton } from 'app/provider/ErrorBoundary';

import { useTranslation } from 'react-i18next';
import Pages from 'widgets/Pages/Pages';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Pages>

            {t('Главная страница')}

            <BugButton />

        </Pages>
    );
};

export default MainPage;
