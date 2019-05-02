import React from 'react'
import Questions1 from './Questions1'
import Questions2 from './Questions2'
import Questions3 from './Questions3'

export default class Questionnaire extends React.Component {
    constructor() {
        super()
        this.state = {
            currentStep: 1,
            selected: [],
            name: ''
        }
    }

    updateSelected = (e) => {
        if (![...this.state.selected].includes(e.target.id)) {
            this.setState({
                selected: [...this.state.selected, e.target.id]
            })
        } else {
            const index = [...this.state.selected].indexOf(e.target.id)
            this.setState({
                selected: [...this.state.selected.slice(index)]
            })
        }
    }

    addName = (name) => {
        this.setState({
            name: name
        })
    }

    onSendData = () => {
        const data = {
            'name': this.state.name,
            'answers': this.state.selected
        }

        console.log(data);

        fetch('/api', {
            method: 'POST',
            body:  data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => console.log(response))
    }

    next = () => {
        let currentStep = this.state.currentStep + 1;

        this.setState({
            currentStep: currentStep
        });
    }

    prev = () => {
        let currentStep = this.state.currentStep - 1;

        this.setState({
            currentStep: currentStep
        });
    }

    resetQuestionnaire = () => {
        this.setState({
            currentStep: 1,
            selected: [],
            name: ''
        });
    }

    render() {
        return (
            <div className="questionnaire">
                <Questions1 onUpdateSelected={ this.updateSelected } currentStep={this.state.currentStep} selected={this.state.selected} />
                <Questions2 onUpdateSelected={ this.updateSelected } currentStep={this.state.currentStep} selected={this.state.selected} />
                <Questions3 onUpdateSelected={ this.updateSelected } currentStep={this.state.currentStep} onDataSend={ this.onSendData } onNameChange={ this.addName} />
                <div className="questionnaire__navigation">
                    {this.state.currentStep !== 1 &&
                        <button className="button" onClick={this.prev}>Previous Question</button>
                    }
                    {this.state.currentStep !== 3 &&
                        <button className="button" onClick={this.next}>Next Question</button>
                    }
                </div>
                <button className="text-link" onClick={ this.resetQuestionnaire }>Reset answers</button>
            </div>
        )
    }
}
