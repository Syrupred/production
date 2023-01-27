import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from 'pages/AboutPage';
import { MainPageAsync } from 'pages/MainPage';
import classNames from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';


export default () => {
    const { theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
            </Suspense>
        </div>
    )
}