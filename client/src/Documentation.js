import React, { Component } from 'react';
import arch from './arch.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h3>Dokumentacja</h3>
            <img src={arch} alt="architektura" />

            Aplikacja bazuje na przykładzie z lab. 9.<br/>
            Zmodyfikowano:<br/>

            server:<br/>
            <p>- index.js - zmieniono limit dla indeksu k do 20</p>
            <br/>

            client:<br/>
            <p>- Fib.js - zmodyfikowano funkcję render (wyświetlanie historii) <br/>
            - App.js - wykorzystano router React</p>
            <br/>
            Dodano elementy:<br/>
            <p>- Home.js - komponent strony głównej<br/>
            - Documentation.js - komponent dokumentacji</p><br/>
            
            worker:<br/>
            <p>- index.js - poprawiono funkcję obliczającą k-ty wyraz ciągu</p>
            <br/>

            

            <Link to="/">Powrót</Link>
            </header>
        </div>
    );
  };
