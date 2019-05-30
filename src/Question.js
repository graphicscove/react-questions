import React from 'react'

export default class Question extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        return (
            <>
                <h2>{this.props.question}</h2>
                <ul className="question">
                    {this.props.answers.map((item, i) => {
                        return <li className="question__answer" key={item} onClick={this.props.submitAnswer} value={i}>{item}</li>
                    })}
                </ul>
            </>
        )
    }
}
