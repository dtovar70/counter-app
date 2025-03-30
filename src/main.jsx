import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HelloWordApp} from './HelloWordApp'
import {FirstApp} from './FirstApp'
import './index.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       {/*  <FirstApp 
            title = "Hola soy Goku"
            subtitle = "Soy un subtitulo"
        /> */}
        <CounterApp
            value = {3}
        />        
    </React.StrictMode>
);