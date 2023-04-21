import { createSelector } from '@reduxjs/toolkit';
import { getAuthUserData } from 'entities/User';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/aboutpage.svg';
import ProfileIcon from 'shared/assets/icons/profilepage.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getAuthUserData, (userData) => {
    const sidebarItemList: SidebarItemType[] = [
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

    ];

    if (userData) {
        sidebarItemList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'Страница профиля',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticlesIcon,
                authOnly: true,
            },
        );
    }
    return sidebarItemList;
});
