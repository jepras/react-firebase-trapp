import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createData } from '../../store/actions/dataActions';
import { Redirect } from 'react-router-dom';

class CreateData extends Component {
  state = {
    title: '',
    content: '',
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
    this.props.createData(this.state);
    // access to browser history through props
    /*     this.props.history.push('/'); */
  };
  render() {
    const { auth, team } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    console.log(this.props);

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create some data</h5>

          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>

          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
        <p>teamss: {team.teamName}</p>
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
    // passing in action createData imported in the top. Item is in the state. Dispatch as parameter.
    createData: item => dispatch(createData(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateData);
