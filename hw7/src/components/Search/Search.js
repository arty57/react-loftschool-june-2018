import React, { PureComponent, Component } from 'react';
import ShowPreview from '../ShowPreview';
import './search.css';

class Search extends Component {
  state = { searchName: '' };
  onInputchangeHandle = event => {
    const val = event.target.value;
    this.setState({ ...this.state, searchName: val });
  };
  onButtonClick = () => {
    console.log('click');
    this.props.getSearchRequest(this.state.searchName);
  };
  render() {
    const { results } = this.props;
    return (
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.searchName}
            onChange={this.onInputchangeHandle}
          />
          <button onClick={this.onButtonClick}>Search</button>
        </div>
        <div className="searchResult">
          {results.map(value => {
            return (
              <ShowPreview
                {...value}
                key={value.id}
                currentLocation={this.props.location}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
