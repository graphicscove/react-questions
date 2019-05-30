import React from 'react'
import Question from './Question'

export default class Quiz extends React.Component {
    constructor({questions}) {
        super();
        this.questions = questions
        this.quizLength = Object.keys(this.questions).length;
        this.state = {
            currentQuestion: 1,
            answers: []
        }
    }

    submitAnswer = (e) => {
        const question = 'question_' + this.state.currentQuestion
        let result = false
        if (this.questions[question].correctAnswer === e.currentTarget.value + 1) {
            result = true
        }
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            answers: [...this.state.answers, result]
        })
    }

    quizList = () => {
        this.setState({
            currentQuestion: 0
        })
        this.props.endQuiz()
    }

    render() {
        const question = 'question_' + this.state.currentQuestion
        const results = this.state.answers.filter(Boolean).length
        return (
            <>
                {this.state.currentQuestion > this.quizLength - 1  &&
                    <>
                        <h1>Finished!</h1>
                        <p>You scored {results} out of {this.quizLength - 1}</p>
                        <button className="button" onClick={this.quizList}>View other quizes</button>
                    </>
                }
                {this.state.currentQuestion <= this.quizLength - 1 && this.state.currentQuestion !== 0 &&
                    <>
                        <Question question={this.questions[question].question} answers={this.questions[question].answers} submitAnswer={this.submitAnswer} />
                    </>
                }
            </>
        )
    }
}
