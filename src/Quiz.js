import React from 'react'
import Step1 from './Step1'
import Questions2 from './Questions2'
import Questions3 from './Questions3'
import data from './data.json'

export default class Quiz extends React.Component {
    constructor() {
        super()
        this.state = {
            data: data,
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
            name
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
        })
    }

    navigateTo = (e) => {
        let nextStep = this.state.currentStep

        if (e.currentTarget.attributes.navigate.value === 'next') {
            nextStep++;
        } else {
            nextStep--;
        }

        this.setState({
            currentStep: nextStep
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
                <Step1 onUpdateSelected={ this.updateSelected } currentStep={this.state.currentStep} selected={this.state.selected} />
                <Questions2 onUpdateSelected={ this.updateSelected } currentStep={this.state.currentStep} selected={this.state.selected} />
                <Questions3 onUpdateSelected={ this.updateSelected } currentStep={this.state.currentStep} onDataSend={ this.onSendData } onNameChange={ this.addName} />
                <div className="questionnaire__navigation">
                    {this.state.currentStep !== 1 &&
                        <button className="button" navigate="prev" onClick={this.navigateTo}>Previous Question</button>
                    }
                    {this.state.currentStep !== 3 &&
                        <button className="button" navigate="next" onClick={this.navigateTo}>Next Question</button>
                    }
                </div>
                <button className="text-link" onClick={ this.resetQuestionnaire }>Reset answers</button>
            </div>
        )
    }
}
