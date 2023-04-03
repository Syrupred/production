import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/aboutpage.svg';
import ProfileIcon from 'shared/assets/icons/profilepage.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная страница',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'O сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Страница профиля',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
