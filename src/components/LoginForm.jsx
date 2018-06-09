import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  iconSend: {
    marginLeft: theme.spacing.unit,
  },
  authentication: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
  wrapperForm: {
    display: 'flex',
    flexFlow: 'column',
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
});

class LoginForm extends Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  };

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form className={classes.wrapperForm} onSubmit={this.handleSubmit}>
        <TextField
          required
          label="User Name"
          placeholder="Type your user Name ..."
          type="text"
          name="username"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          className={classes.authentication}
          error={!username.isValid}
        />
        <TextField
          required
          label="Password"
          placeholder="Type your password ..."
          type="password"
          name="password"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          className={classes.authentication}
          error={!password.isValid}
        />
        <Button
          className={classes.button}
          variant="raised"
          type="submit"
          color="primary"
        >
          Login <Send className={classes.iconSend} />
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
