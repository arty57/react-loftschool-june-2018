import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchFollowersRequest,
  getFollowersData,
  getIsFollowersLoading,
  getFollowersError
} from '../../ducks/followers';
import Spinner from 'react-svg-spinner';
import Follower from '../Follower';
import './followers.css';
class Followers extends Component {
  componentDidMount = () => {
    const { login } = this.props;
    this.props.fetchFollowersRequest(login);
  };
  render() {
    const { isLoading, followers, error } = this.props;

    if (error !== null && !isLoading) return <p>{error.toString()}</p>;
    if (isLoading === true || followers === null) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }
    return (
      <div className="followers">
        {followers.map(item => (
          <Follower
            login={item.login}
            avatar_url={item.avatar_url}
            key={item.login}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsFollowersLoading(state),
  followers: getFollowersData(state),
  error: getFollowersError(state)
});
const mapDispatchToProps = {
  fetchFollowersRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
