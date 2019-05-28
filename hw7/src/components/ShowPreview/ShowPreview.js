import React, { PureComponent, Component } from 'react';
import { Link } from 'react-router-dom';
import './showPreview.css';
class ShowPreview extends Component {
  render() {
    const { id, image, summary, name } = this.props;
    return (
      <div className="showPreview">
        <Link className="title" to={`/shows/${id}`}>
          {name.toString()}
        </Link>
        {image !== null && (
          <img src={image.medium.toString()} alt="show poster" />
        )}
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    );
  }
}

export default ShowPreview;
