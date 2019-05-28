import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Follower extends Component {
  render() {
    const { login, avatar_url } = this.props;

    return (
      <div className="user-page">
        <div className="user-photo">
          <img src={avatar_url} alt="avatar" />
        </div>
        <div className="user-info">
          <Link to={`/user/${login}`}>
            <h3>{login}</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Follower;
