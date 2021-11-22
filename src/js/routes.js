
import HomePage from '../pages/mainView/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import CatalogPage from '../pages/mainView/catalog.f7';
import ProductPage from '../pages/product.f7';
import ProfilePage from '../pages/mainView/profile.f7';
import SearchPage from '../pages/mainView/search.f7'


import addPlaylist from '../pages/add/playlist.f7'
import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

import TrackPage from '../pages/trackView.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/track/:trackId/',
    async: function ({ router, to, resolve }) {
      var app = router.app;
      var store = app.store;
      var trackId = to.params.trackId;
      var spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getTrack(trackId)
        .then(
          function (data) {
            app.preloader.hide();
            
            resolve(
              {
                component: TrackPage,
              },
              {
                props: {
                  track: data,
                }
              }
            );
          },
          function (err) {
            console.log(err)
            app.preloader.hide();

            app.dialog.alert('An error occurred when loading the data.', 'Sorry 😔', function () {
              router.back();
            });
          }
        );
    },
  },
  {
    path: '/about/',
    component: AboutPage,
  },

  {
    path: '/add/playlist',
    component: addPlaylist,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;
      console.log(app.store)
      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;