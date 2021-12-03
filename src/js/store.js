
import { createStore } from 'framework7';

let stdSettings = {
  darkMode: false,
}

const isJson = (json) => {
  try {
    JSON.parse(json);
  } catch (e) {
    console.log(e)
    return false;
  }
  return true;
}

const settingsName = 'settings';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
  },
  getters: {
    products({ state }) {
      return state.products;
    },
    loginMethode({state}) {
      state.loginMethode();
    },
    spotifyApi({state}) {
      return state.spotifyapi;
    },
    userId({state}) {
      return state.userId;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },

    setUserId({ state }, userId) {
      state.userId = userId;
    },

    addLoginMethod({state}, method) {
      state.loginMethode = method
    },

    addSpotifyApi({state}, obj) {
      state.spotifyapi = obj
    },
    changeSetting({state}, keyValueMap) {
      let key = keyValueMap['key'];
      let value = keyValueMap['value'];

      stdSettings[key] = value;
      let settingsJson = JSON.stringify(stdSettings);
      localStorage.setItem(settingsName, settingsJson);
    },
    getSetting({state}, key) {
      let savedData = localStorage.getItem(settingsName);

      if (isJson(savedData) && savedData != null) {
        let settingsObj = JSON.parse(savedData);
        if (settingsObj.hasOwnProperty(key)) {
          return settingsObj[key];
        }
      }
      return stdSettings[key];
    }
  },
});

export default store;
