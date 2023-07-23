import React from 'react';
import './App.scss';
import {Map} from './components/Map'
function App() {
    return (
        <div className={'app-container'}>

            <div className={'routes-container'}>
                <div>Маршрут №1</div>
                <div>Маршрут №2</div>
                <div>Маршрут №3</div>
            </div>

            <Map/>

        </div>);
}

export default App;
