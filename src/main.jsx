import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HelloWordApp} from './HelloWordApp'
import {FirstApp} from './FirstApp'
import './index.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp 
            title="Mi título" 
            subtitle="Mi subtítulo" 
            name="Mi nombre" 
        />
    </React.StrictMode>
);