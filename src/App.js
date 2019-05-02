import React from 'react';
import Questionnaire from './Questionnaire'
import './app.sass';

const App = () => (
    <div className="app">
        <header className="app__header">
            <h1>Questionnaire</h1>
        </header>
        <Questionnaire />
        <footer className="app__footer">

        </footer>
    </div>
)

export default App;
