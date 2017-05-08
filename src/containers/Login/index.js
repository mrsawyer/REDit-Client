import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Gandalf from 'gandalf-validator';
import { connect } from 'react-redux';

import { login } from '../../redux/actions';

import styles from './styles.css';

class Login extends Gandalf {
    constructor() {
    const fields = [
      {
        name: 'email',
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
        },
        debounce: 300,
      },
      {
        name: 'password',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Password',
        },
        debounce: 300,
      },
    ];

    super(fields);
  }

  handleSubmit() {
    const data = this.getCleanFormData();
      if (!data) return;
      this.props.dispatch(login(data));
    }

  render() {
    const fields = this.state.fields;
    return (
      <div className={styles.login}>
        <AppBar
          title="Login"
          showMenuIconButton={false}
          style={{backgroundColor:'lightgray'}}
          titleStyle={{color:'black'}}
        />
        <div>
          <div style={{width:'90%', margin:'2% 5%'}}>
            { fields.email.element }
          </div>
          <div style={{width:'90%', margin:'2% 5%'}}>
            { fields.password.element }
          </div>
          <div style={{margin:'20px 5%'}}>
            <FlatButton backgroundColor="rgb(183, 28, 28)" style={{color: 'white'}} onClick={() => this.handleSubmit()} label="Login"/>
            <FlatButton label="Sign Up"/>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus,
  };
}

export default connect(mapStateToProps)(Login);
