import React, { PureComponent } from 'react';
import { LOADING_STATE } from '../../reducers/shows';
import './showPage.css';
class ShowPage extends PureComponent {
  componentDidMount = () => {
    const { getShowRequest, id } = this.props;
    console.log('mount', this.props);
    if (this.props.show === undefined) {
      console.log('mount request');
      getShowRequest(id);
    }
  };
  componentDidUpdate = prevProps => {
    const { getShowRequest, id } = this.props;
    console.log('update', this.props.show);
    if (prevProps.match.params.id !== id) {
      console.log('update request');
      getShowRequest(id);
    }
  };

  render() {
    const { loadingState, error } = this.props;
    console.log('render', this.props.show);
    if (loadingState === LOADING_STATE.failure) return error;
    if (loadingState === LOADING_STATE.success && this.props.show === undefined)
      console.log('warning!', this.props);
    if (loadingState !== LOADING_STATE.success || this.props.show === undefined)
      return <p>Loading...</p>;
    const { image, summary, name } = this.props.show;
    const { cast } = this.props.show._embedded;
    return (
      <div className="showPage">
        <h2 className="title">{name}</h2>
        {image !== null &&
          image !== undefined && <img src={image.medium} alt="show poster" />}
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <div className="actors">
          {cast.map(value => {
            return (
              <div className="actor" key={value.person.id}>
                <h3 className="actorName">{value.person.name}</h3>
                {image !== null && (
                  <img src={value.person.image.medium} alt="actor poster" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowPage;
