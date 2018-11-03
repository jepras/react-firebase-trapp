import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMember } from '../../store/actions/teamActions';
import { Redirect } from 'react-router-dom';

class AddMember extends Component {
  state = {
    mail: '',
    team: this.props.team.teamName
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // calls mapDispatchToProp function
    this.props.addMember(this.state);
    this.setState({
      mail: ''
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    console.log(this.props);

    return (
      <div className="section">
        <form
          className="card white row add-data no-margin valign-wrapper"
          onSubmit={this.handleSubmit}
        >
          <div className="col s1">
            <i className="material-icons">add</i>
          </div>
          <div className="input-field col s9">
            <input
              type="text"
              id="mail"
              onChange={this.handleChange}
              value={this.state.mail}
            />
            <label htmlFor="mail">Mail</label>
          </div>

          <div className="input-field col s2">
            <button className="btn pink lighten-1">Add</button>
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
    // passing in action addMember imported in the top. Item is in the state. Dispatch as parameter.
    addMember: item => dispatch(addMember(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMember);
