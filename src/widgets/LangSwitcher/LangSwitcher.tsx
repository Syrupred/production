import { useTranslation } from 'react-i18next';

import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={cls.LangSwitcher}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('переключить')}

        </Button>
    );
};

export default LangSwitcher;
