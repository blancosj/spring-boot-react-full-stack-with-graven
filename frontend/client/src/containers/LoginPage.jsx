import React, { PropTypes } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
     // prevent default action. in this case, action is the form submission event
     event.preventDefault();

    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);

    axios.post('/api/login', {
         email: this.state.user.email,
         password: this.state.user.password
      }).then(function (response) {
         console.log(response);
      }).catch(function (error) {
         console.log(error);
      });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
