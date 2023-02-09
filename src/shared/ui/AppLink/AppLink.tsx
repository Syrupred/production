import { Link, LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
    'PRIMARY' = 'primary',
    'SECONDARY' = 'secondary',

}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: string;
}

const AppLink = (props: AppLinkProps) => {
    const {
        to, children, theme = AppLinkTheme.PRIMARY, className, ...otherProps
    } = props;
    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;
