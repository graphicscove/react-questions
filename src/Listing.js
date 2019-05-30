import React from 'react'

export default class Listing extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.listing = []
        for (let [key, value] of Object.entries(this.props.quizListing)) {
            this.listing.push(value.name)
        }
    }
    render() {
        return (
            <ul>
                {this.listing.map((item, i) => {
                    return <li key={item} onClick={this.props.newQuiz} value={i}>{item}</li>
                })}
            </ul>
        )
    }
}
