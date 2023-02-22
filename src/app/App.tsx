import classNames from 'shared/lib/classNames/classNames';

import { AppRouter } from 'app/provider/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

export default () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={<PageLoader />}>
            <Navbar />

            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
