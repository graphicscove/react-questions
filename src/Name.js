import React from 'react'

class Name extends React.Component {
    render() {
        return (
            <span data-element="name">{this.props.name}</span>
        )
    }
}

export default Name
