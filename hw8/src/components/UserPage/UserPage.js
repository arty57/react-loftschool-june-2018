import React, { Component } from 'react';
import {
  getUserRequest,
  getIsFetched,
  getIsFetching,
  getUserData,
  getUserError
} from '../../ducks/users';
import { connect } from 'react-redux';
import './userpage.css';
import Spinner from 'react-svg-spinner';
import Followers from '../Followers';
class UserPage extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.getUserRequest(id);
  };
  componentDidUpdate = prevProps => {
    const id = this.props.match.params.id;
    if (prevProps.match.params.id !== id) {
      this.props.getUserRequest(id);
    }
  };
  render() {
    const { isFetching, isFetched, userData, userError } = this.props;

    if (userError !== null && !isFetched && !isFetching)
      return <p>{userError.toString()}</p>;
    if (isFetching || userData === null)
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    const { login } = userData;
    return (
      <React.Fragment>
        <div className="user-page">
          <div className="user-photo">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
          <div className="user-info">
            <h3>{userData.login}</h3>
            <p>Followers: {userData.followers}</p>
          </div>
        </div>
        <Followers login={login} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state),
  userData: getUserData(state),
  userError: getUserError(state)
});
const mapDispatchToProps = {
  getUserRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
