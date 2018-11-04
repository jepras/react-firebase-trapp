import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTeam } from '../../store/actions/teamActions';
import { Redirect } from 'react-router-dom';

class CreateTeam extends Component {
  state = {
    teamName: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // calls mapDispatchToProp function
    this.props.createTeam(this.state);
    // access to browser history through props -- NEED HELP
    /* this.props.history.push('/'); */
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a new team</h5>
          <div className="input-field">
            <input type="text" id="teamName" onChange={this.handleChange} />
            <label htmlFor="teamName">Title</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // passing in action createTeam imported in the top. Item is in the state. Dispatch as parameter.
    createTeam: team => dispatch(createTeam(team))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeam);
