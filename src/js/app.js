import $ from 'dom7';
import Framework7 from 'framework7/bundle';

import 'framework7/framework7-bundle.css';

import '../css/icons.css';
import '../css/app.css';

import SpotifyWebApi from 'spotify-web-api-js';

import routes from './routes.js';
import store from './store.js';
import mainAppView from '../app.f7';
import loginView from '../pages/login.f7';

import Authorization from './Authorization';

let tokenMap;
let authorization = new Authorization(app);
let App;
let tokenRequestSuccessful = false;

if (localStorage.getItem('tokenMap') != null && localStorage.getItem('tokenMap') != "null") {
  tokenMap = JSON.parse(localStorage.getItem('tokenMap'));
  if (authorization.isTokenValid(tokenMap)) {
    App = mainAppView;
    tokenRequestSuccessful = true;
  } else {
    if (window.location.hash == null || window.location.hash == "") {
      App = loginView;
    } else {
      tokenMap = authorization.parseUrlHash();
      localStorage.setItem('tokenMap', JSON.stringify(tokenMap))
      App = mainAppView
      tokenRequestSuccessful = true;
    }
  }
} else if (window.location.hash == null || window.location.hash == "") {
  App = loginView;
} else {
  tokenMap = authorization.parseUrlHash();
  if (tokenMap != null) {
    localStorage.setItem('tokenMap', JSON.stringify(tokenMap))
    App = mainAppView
    tokenRequestSuccessful = true;
  } else {
    App = loginView
    tokenRequestSuccessful = false;
  }
}

let spotify = new SpotifyWebApi();

if (tokenRequestSuccessful) {
  spotify.setAccessToken(tokenMap.access_token);
}

store.dispatch("addSpotifyApi", spotify);
store.dispatch("addLoginMethod", authorization.login);

var app = new Framework7({
  name: 'Statify',
  theme: 'md',
  el: '#app',
  component: App,
  tokenMap: tokenMap,
  view: {
    browserHistory: true,
  browserHistorySeparator: '',
  },
  store: store,

  routes: routes,
  on: {
    pageInit: function () {
    }
  }
});


function reportWindowSize() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
}

window.onresize = reportWindowSize;