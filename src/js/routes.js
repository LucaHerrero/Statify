import HomePage from '../pages/mainView/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import CategoriesPage from '../pages/mainView/categories.f7';
import ProductPage from '../pages/product.f7';
import ProfilePage from '../pages/mainView/profile.f7';
import SearchPage from '../pages/mainView/search.f7'

import AlbumPage from '../pages/album.f7';
import ArtistPage from '../pages/artistView.f7';

import CategoryPage from '../pages/categoryView.f7';

import AnalyticsView from '../pages/analyticsView.f7';

import addPlaylist from '../pages/add/playlist.f7'
import DynamicRoutePage from '../pages/dynamic-route.f7';
import NotFoundPage from '../pages/404.f7';

import TrackPage from '../pages/trackView.f7';

let routes = [{
    path: '/',
    component: HomePage,
  },
  {
    path: '/track/:trackId/',
    async: function ({
      router,
      to,
      resolve
    }) {
      let app = router.app;
      let store = app.store;
      let trackId = to.params.trackId;
      let spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getTrack(trackId)
        .then(
          function (data) {
            app.preloader.hide();

            resolve({
              component: TrackPage,
            }, {
              props: {
                track: data,
              }
            });
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
    path: '/category/:categoryId/',
    async: function ({
      router,
      to,
      resolve
    }) {
      let app = router.app;
      let store = app.store;
      let categoryId = to.params.categoryId;
      let spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getCategoryPlaylists(categoryId)
        .then(
          function (data) {
            app.preloader.hide();

            resolve({
              component: CategoriesPage,
            }, {
              props: {
                playlists: data,
                pageMode: true,
                arrayKey: 'playlists'
              }
            });
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
    path: '/track/:trackId/analytics/',
    async: function ({
      router,
      to,
      resolve
    }) {
      let app = router.app;
      let store = app.store;
      let trackId = to.params.trackId;
      let spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getAudioFeaturesForTrack(trackId)
        .then(
          function (data) {
            app.preloader.hide();

            resolve({
              component: AnalyticsView,
            }, {
              props: {
                analytics: data,
              }
            });
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
    path: '/album/:albumId/',
    async: function ({
      router,
      to,
      resolve
    }) {
      let app = router.app;
      let store = app.store;
      let albumId = to.params.albumId;
      let spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getAlbum(albumId)
        .then(
          function (data) {
            app.preloader.hide();

            resolve({
              component: AlbumPage,
            }, {
              props: {
                album: data,
              }
            });
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
    path: '/artist/:artistId/',
    async: function ({
      router,
      to,
      resolve
    }) {
      let app = router.app;
      let store = app.store;
      let artistId = to.params.artistId;
      let spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getArtist(artistId)
        .then(
          function (data) {
            app.preloader.hide();
            console.log(data)
            resolve({
              component: ArtistPage,
            }, {
              props: {
                artist: data,
              }
            });
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
    path: '/categories/',
    async: function ({
      router,
      to,
      resolve
    }) {
      let app = router.app;
      let store = app.store;
      let spotify = store.getters.spotifyApi.value;

      app.preloader.show();

      spotify
        .getCategories()
        .then(
          function (data) {
            app.preloader.hide();

            resolve({
              component: CategoriesPage,
            }, {
              props: {
                categories: data,
                arrayKey: 'categories',
              }
            });
          },
          function (err) {
            console.log(err)
            app.preloader.hide();

            app.dialog.alert('An error occurred when loading the data.', 'Sorry 😔', function () {
              router.back();
            });
          }
        );
    }
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
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;