import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import { searchRequest } from '../../actions/search';
import { getShowRequest } from '../../actions/show';
import { connect } from 'react-redux';

class AppRouter extends PureComponent {
  getShowById = (id, shows) => {
    if (id === undefined || shows === undefined) return {};
    const show = shows.filter(show => show.id == id);
    console.log('match item', show);
    if (!show.length) {
      return undefined;
    } else {
      return show.pop();
    }
  };
  render() {
    const { search, searchRequest, getShowRequest, shows } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            render={props => (
              <Search
                {...props}
                results={search.results}
                error={search.error}
                loadingState={search.loadingState}
                getSearchRequest={searchRequest}
              />
            )}
            exact
          />
          <Route
            path="/shows/:id"
            render={props => (
              <ShowPage
                {...props}
                getShowRequest={getShowRequest}
                getShowById={this.getShowById}
                error={shows.error}
                show={this.getShowById(props.match.params.id, shows.list)}
                loadingState={shows.loadingState}
                id={props.match.params.id}
              />
            )}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  shows: state.shows
});

const mapDispatchToProps = { searchRequest, getShowRequest };
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
