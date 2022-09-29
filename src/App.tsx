import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {Suspense} from 'react';
import {MainPageAsync} from './pages/MainPage/MainPageAsync';
import {AboutPageAsync} from './pages/AboutPage/AboutPageAsync';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames';

import './styles/index.scss';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;