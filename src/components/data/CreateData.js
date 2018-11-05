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
    this.setState({
      title: '',
      content: ''
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <form
        className="card white row add-data no-margin valign-wrapper"
        onSubmit={this.handleSubmit}
      >
        <div className="col input-field five">
          <i className="material-icons">add</i>
        </div>
        <div className="input-field col s5">
          <input
            type="text"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label htmlFor="title">Title</label>
        </div>

        <div className="input-field col s5">
          <input
            id="content"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <label htmlFor="content">Content</label>
        </div>
        <div className="input-field col s2">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
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
