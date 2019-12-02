import React from 'react';

class BadgeForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: 'Designer',
        twitter: '',
    };

    handleChange = (event) => {
        console.log({ 
            name: event.target.name,
            value: event.target.value,
        });

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClick = (event) => {
        console.log("Button was clicked");
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form was submitted");
        console.log(this.state);
    }

    render () {
        return (
            <div>
                <h1>New attendant!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First name:</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last name:</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job title:</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter:</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>
                    <button
                        onClick = {this.handleClick}
                        className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;