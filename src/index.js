import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './redux/store';

import App from './containers/App';
import CreatePost from './containers/CreatePost';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import { PostList } from './containers/PostList';
import Welcome from './containers/Welcome';

import MainLayout from './layouts/MainLayout';

import muiTheme from './styles/mui-theme';
import './styles/index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/create-post" component={CreatePost} />
              <Route exact path="/posts" component={PostList} />
              <Route exact path="/posts/new" component={CreatePost} />
              <Route component={NotFound} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
