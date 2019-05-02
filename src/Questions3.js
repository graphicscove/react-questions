import React from 'react'
import Name from './Name'

class Questions3 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    updateName = (e) => {
        const props = this.props
        this.setState({
            name: e.target.value
        })

        props.onNameChange(e.target.value)
    }

    render() {
        const props = this.props

        if (props.currentStep !== 3) {
            return null;
        }

        return (
            <>
                <p>What is your name?</p>
                <input type="text" onChange={ this.updateName } value={ props.name } className="questionnaire__name" />
                <div className="questionnaire__thanks">
                    {this.state.name &&
                        <>Thanks for taking part <Name name={ this.state.name } />!</>
                    }
                </div>
                <button type="submit" className="button questionnaire__submit" onClick={ props.onDataSend }>Submit Answers</button>
            </>
        )
    }
}

export default Questions3
