import { getAuthUserData } from 'entities/User';
import React, { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getAuthUserData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (!isAuth && route.authOnly) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <Routes>
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                    path={path}
                />

            )) }
        </Routes>

    );
});
