import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {Suspense} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';

import './styles/index.scss';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {AppRouter} from 'app/providers/router';



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter />
        </div>
    );
};

export default App;