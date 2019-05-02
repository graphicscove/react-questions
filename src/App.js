import React from 'react';
import Quiz from './Quiz'
import './app.sass';

const App = () => (
    <div className="app">
        <header className="app__header">
            <h1>Quiz</h1>
        </header>
        <Quiz />
        <footer className="app__footer">

        </footer>
    </div>
)

export default App;
