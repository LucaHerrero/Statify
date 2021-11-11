import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

import SpotifyWebApi from 'spotify-web-api-js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';
import mainAppView from '../app.f7';
import loginView from '../pages/login.f7';
// Import main app component
import Authorization from './Authorization';

let tokenMap;
let test = new Authorization(app);
let App;
let tokenRequestSuccessful = false;
if (localStorage.getItem('tokenMap') != null) {
  tokenMap = JSON.parse(localStorage.getItem('tokenMap'));
  if (test.isTokenValid(tokenMap)) {
    App = mainAppView;
    tokenRequestSuccessful = true;
  } else {
    if (window.location.hash == null || window.location.hash == "") {
      App = loginView;
    } else {
      tokenMap = test.parseUrlHash();
      localStorage.setItem('tokenMap', JSON.stringify(tokenMap))
      App = mainAppView
      tokenRequestSuccessful = true;
    }
  }
} else if (window.location.hash == null || window.location.hash == "") {
  App = loginView;
  console.log("test")
} else {
  tokenMap = test.parseUrlHash();
  localStorage.setItem('tokenMap', JSON.stringify(tokenMap))
  App = mainAppView
  tokenRequestSuccessful = true;
}

let spotify = new SpotifyWebApi();
console.log(tokenMap)
if (tokenRequestSuccessful) {
  spotify.setAccessToken(tokenMap.access_token);
}

spotify
  .getMe() // note that we don't pass a user id
  .then(
    function (data) {
      console.log('User playlists', data);
    },
    function (err) {
      console.error(err);
    }
  );

store.dispatch("addSpotifyApi", spotify);
store.dispatch("addLoginMethod", test.login);
var app = new Framework7({
  name: 'Statify', // App name
  theme: 'md', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  tokenMap: tokenMap,
  // App store
  store: store,
  // App routes
  routes: routes,
});