import React from 'react'
import Quiz from './Quiz'
import Listing from './Listing'
import data from './data.json'
import './app.sass'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            welcome: true,
            current: 0,
            listing: false,
            quiz: false
        }
    }

    loadQuiz = () => {
        this.setState({
            welcome: false,
            current: 1,
            quiz: true
        })
    }

    newQuiz = (e) => {
        this.setState({
            current: e.currentTarget.value + 1,
            listing: false,
            quiz: true
        })
    }

    endQuiz = () => {
        this.setState({
            current: 0,
            listing: true,
            quiz: false
        })
    }

    render() {
        const quizId = 'quiz_' + this.state.current
        return (
            <div className="app">
                <div className="viewport">
                    <header className="app__header">

                    </header>
                    <main className="wrapper">
                        {this.state.welcome === true &&
                            <>
                                <h1>Welcome</h1>
                                <h2>Click the button to get started</h2>
                                <button className="button" onClick={this.loadQuiz}>Start Quiz</button>
                            </>
                        }
                        {this.state.quiz === true &&
                            <>
                                <Quiz questions={data[quizId]} endQuiz={this.endQuiz} />
                            </>
                        }
                        {this.state.listing === true &&
                            <>
                                <h1>Still want to play?</h1>
                                <p>Select another quiz below or try the same one again.</p>
                                <Listing quizListing={data} newQuiz={this.newQuiz} />
                            </>
                        }
                    </main>
                    <footer className="app__footer">

                    </footer>
                </div>
            </div>
        )
    }
}
