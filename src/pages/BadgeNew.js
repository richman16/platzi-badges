import React from 'react';

// Importar estilos
import './styles/BadgeNew.css';
// Importar Componentes
// import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import hero from '../images/badge-header.svg';

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
    };

    handleChange = (event) => {
        // Agregar una variable auxiliar
        // const nextForm = this.state.form;
        // nextForm[event.target.name] = event.target.value;
        // this.setState({
        //     form: nextForm,
        // });

        // Utilizamos mejor
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            },
        });
    };

    render () {
        return (
            <React.Fragment>

                <div className="BadgeNew__hero">
                    <img
                        className="img-fluid"
                        src={hero}
                        alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatar="https://www.gravatar.com/avatar/f44641a21a40330e05484ab104a66eb9?s=200" />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={ this.state.form }
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default BadgeNew;