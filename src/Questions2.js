import React from 'react'

class Questions2 extends React.Component {
    render() {
        const props = this.props

        if (props.currentStep !== 2) {
            return null;
        }

        return (
            <div className="questionnaire__fields">
                <p>Tick the things that interest you:</p>
                <div className="questionnaire__field">
                    <input id="input-21" type="checkbox" onChange={ props.onUpdateSelected } defaultChecked={Object.values(this.props.selected).indexOf('input-21') > -1} />
                    <label htmlFor="input-21">Interacting with the local community</label>
                </div>
                <div className="questionnaire__field">
                    <input id="input-22" type="checkbox" onChange={ props.onUpdateSelected } defaultChecked={Object.values(this.props.selected).indexOf('input-22') > -1} />
                    <label htmlFor="input-22">Extreeme experiences</label>
                </div>
                <div className="questionnaire__field">
                    <input id="input-23" type="checkbox" onChange={ props.onUpdateSelected } defaultChecked={Object.values(this.props.selected).indexOf('input-23') > -1} />
                    <label htmlFor="input-23">Tasting the local cuisine</label>
                </div>
            </div>
        )
    }
}

export default Questions2
