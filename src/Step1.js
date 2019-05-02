import React from 'react'

class Step1 extends React.Component {
    render() {
        const props = this.props

        if (props.currentStep !== 1) {
            return null;
        }

        return (
            <div className="questionnaire__fields">
                <p>Tick the things you like:</p>
                <div className="questionnaire__field">
                    <input id="input-11" type="checkbox" onChange={ props.onUpdateSelected } defaultChecked={Object.values(this.props.selected).indexOf('input-11') > -1} />
                    <label htmlFor="input-11">Relaxing on the beach</label>
                </div>
                <div className="questionnaire__field">
                    <input id="input-12" type="checkbox" onChange={ props.onUpdateSelected } defaultChecked={Object.values(this.props.selected).indexOf('input-12') > -1} />
                    <label htmlFor="input-12">Exploring</label>
                </div>
                <div className="questionnaire__field">
                    <input id="input-13" type="checkbox" onChange={ props.onUpdateSelected } defaultChecked={Object.values(this.props.selected).indexOf('input-13') > -1} />
                    <label htmlFor="input-13">Discovering Wildlife</label>
                </div>
            </div>
        )
    }
}

export default Step1
