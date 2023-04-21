import { useTranslation } from 'react-i18next';
import Pages from 'shared/ui/Pages/Pages';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (<Pages>{t('O сайте')}</Pages>);
};

export default AboutPage;
