import React from 'react'

class Name extends React.Component {
    render(props) {
        return (
            <span data-element="name">{this.props.name}</span>
        )
    }
}

export default Name
