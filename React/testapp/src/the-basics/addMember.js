import React from 'react';

class addMember extends React.Component {
    state = {
        name: null,
        likes: null,
        drift: 'false'
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addMember(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={ this.handleChange } />

                    <label htmlFor="name">likes: </label>
                    <input type="text" id="likes" onChange={ this.handleChange } />

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default addMember;