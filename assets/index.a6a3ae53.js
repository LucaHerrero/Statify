var X=Object.defineProperty;var K=(s,d,u)=>d in s?X(s,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[d]=u;var z=(s,d,u)=>(K(s,typeof d!="symbol"?d+"":d,u),u);import{c as j,a as Z,S as ii,F as ei}from"./vendor.4b7dcee7.js";const ti=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function u(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=u(r);fetch(r.href,c)}};ti();function P(s,{$on:d,$f7:u,$update:o,$store:r}){let c={};const v=r.getters.spotifyApi.value;let a={};return v.getMe().then(function(n){c=n,r.dispatch("setUserId",n.id),o()},function(n){console.error(n),u.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopArtists().then(function(n){a.myTopArtists==null&&(a.myTopArtists=n,console.log("myTopArtists",n),o())},function(n){console.error(n),u.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopTracks().then(function(n){a.myTopTracks==null&&(a.myTopTracks=n,console.log("myTopTracks",n),o())},function(n){console.error(n),u.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyRecentlyPlayedTracks().then(function(n){a.myRecentTracks==null&&(a.myRecentTracks=n,console.log("myTopTracks",n),o())},function(n){console.error(n),u.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(n){n.$;var m=n.$h;return n.$root,n.$f7,n.$f7route,n.$f7router,n.$theme,n.$update,n.$store,m`
    <div class="page" data-name="home">
        <!-- Top Navbar -->
        <div class="navbar navbar-large">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link icon-only panel-open" data-panel="left">
                        <i class="icon f7-icons if-not-md">menu</i>
                        <i class="icon material-icons if-md">menu</i>
                    </a>
                </div>
                <div class="title sliding">Stativ</div>
                <div class="right">
                    <a href="#" class="link icon-only panel-open" data-panel="right">
                        <i class="icon f7-icons if-not-md">menu</i>
                        <i class="icon material-icons if-md">menu</i>
                    </a>
                </div>
                <div class="title-large">
                    <div class="title-large-text">Hello ${c.display_name}</div>
                </div>
            </div>
        </div>

        <!-- Scrollable page content-->
        <div class="page-content">
            <div class="block block-strong">
                <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab
                    contains
                    independent view with its own routing and navigation.</p>
            </div>

            ${a.myTopTracks!=null&&a.myTopTracks.total>0&&m`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${a.myTopTracks!=null&&a.myTopTracks.total>0&&m`
                        ${a.myTopTracks.items.map(t=>m`
                        <div class="swiper-slide">
                            <a href="/track/${t.id}/">
                                ${t.album.images.length>1?m`
                                <img class="elevation-3" src="${t.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${t.name}</div>
                                <div class="artist">${t.artists.map(e=>m`${e.name} `)}</div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}

            ${a.myTopArtists!=null&&a.myTopArtists.total>0&&m`
            <div class="block-title">Your top Artists</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${a.myTopArtists!=null&&a.myTopArtists.total>0&&m`
                        ${a.myTopArtists.items.map(t=>m`

                        <div class="swiper-slide">
                            <a href="/artist/${t.id}/">
                                ${t.images.length>1?m`
                                <img class="elevation-3 round" src="${t.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title text-align-center">${t.name}</div>
                                <div class="artist text-align-center">${t.followers.total.toLocaleString()} Followers
                                </div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}


            ${a.myRecentTracks!=null&&a.myRecentTracks.items.length>0&&m`
            <div class="block-title">Your recent Tracks</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${a.myRecentTracks!=null&&a.myRecentTracks.items.length>0&&m`
                        ${a.myRecentTracks.items.map(t=>m`
                        <div class="swiper-slide">
                            <a href="/track/${t.track.id}/">
                                ${t.track.album.images.length>1?m`
                                <img class="elevation-3" src="${t.track.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${t.track.name}</div>
                                <div class="artist">${t.track.artists.map(e=>m`${e.name} `)}</div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}







        </div>
    </div>
`}}P.id="d10d7fb7df";P.style=`
    .swiper-container>div>div.swiper-slide {
        width: 150px;
    }

    .swiper-container>div>div.swiper-slide:first-child {
        margin-left: 15px;
    }

    .swiper-container>div>div.swiper-slide:last-child {
        margin-right: 15px;
    }

    .swiper-container>div>div.swiper-slide>a>img {
        width: 150px;
        height: 150px;
        border-radius: 5%;
        object-fit: cover;

    }

    .swiper-container>div>div.swiper-slide>a {
        width: 150px;
        text-overflow: ellipsis;
        overflow-y: hidden;
    }

    .swiper-container>div>div.swiper-slide>a>div.title {
        color: var(--f7-block-title-large-text-color);
        font-weight: 500;
    }

    .swiper-container>div>div.swiper-slide>a>div.artist {
        color: var(--f7-block-title-large-text-color);
        opacity: 0.5;
    }

    .round {
        border-radius: 50% !important;
    }
`;function U(){return function(s){s.$;var d=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,d`
<div class="page" data-name="about">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">About</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block-title">About My App</div>
    <div class="block block-strong">
      <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.</p>
      <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.</p>
    </div>
    <div class="block">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!</p>
      <p>Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
    </div>
  </div>
</div>
`}}U.id="4f323cbbd2";function H(){return function(s){s.$;var d=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,d`
<div class="page" data-name="form">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">Form</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block-title">Form Example</div>
    <div class="list no-hairlines-md">
      <ul>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Name</div>
              <div class="item-input-wrap">
                <input type="text" placeholder="Your name"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">E-mail</div>
              <div class="item-input-wrap">
                <input type="email" placeholder="E-mail"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">URL</div>
              <div class="item-input-wrap">
                <input type="url" placeholder="URL"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Password</div>
              <div class="item-input-wrap">
                <input type="password" placeholder="Password"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Phone</div>
              <div class="item-input-wrap">
                <input type="tel" placeholder="Phone"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Gender</div>
              <div class="item-input-wrap">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Birth date</div>
              <div class="item-input-wrap">
                <input type="date" placeholder="Birth day" value="2014-04-30"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title">Toggle</div>
              <div class="item-after">
                <label class="toggle toggle-init">
                  <input type="checkbox"/>
                  <span class="toggle-icon"></span>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Slider</div>
              <div class="item-input-wrap">
                <div class="range-slider range-slider-init" data-label="true">
                  <input type="range" value="50" min="0" max="100" step="1"/>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Textarea</div>
              <div class="item-input-wrap">
                <textarea placeholder="Bio"></textarea>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Resizable</div>
              <div class="item-input-wrap">
                <textarea placeholder="Bio" class="resizable"></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block-title">Buttons</div>
    <div class="block block-strong">
      <p class="row">
        <a href="#" class="col button">Button</a>
        <a href="#" class="col button button-fill">Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-raised">Raised</a>
        <a href="#" class="col button button-raised button-fill">Raised Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-round">Round</a>
        <a href="#" class="col button button-round button-fill">Round Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-outline">Outline</a>
        <a href="#" class="col button button-round button-outline">Outline Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-small button-outline">Small</a>
        <a href="#" class="col button button-small button-round button-outline">Small Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-small button-fill">Small</a>
        <a href="#" class="col button button-small button-round button-fill">Small Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-large button-raised">Large</a>
        <a href="#" class="col button button-large button-fill button-raised">Large Fill</a>
      </p>

      <p class="row">
        <a href="#" class="col button button-large button-fill button-raised color-red">Large Red</a>
        <a href="#" class="col button button-large button-fill button-raised color-green">Large Green</a>
      </p>

    </div>
    <div class="block-title">Checkbox group</div>
    <div class="list">
      <ul>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Books" checked="checked"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Books</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Movies"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Movies</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Food"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Food</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Drinks"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Drinks</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div class="block-title">Radio buttons group</div>
    <div class="list">
      <ul>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Books" checked="checked"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Books</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Movies"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Movies</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Food"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Food</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Drinks"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Drinks</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</div>
`}}H.id="42940a23b6";function V(s,{$store:d}){const u=d.getters.products,o=()=>{d.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(r){r.$;var c=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,c`
  <div class="page" data-name="catalog">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="title">Catalog</div>
      </div>
    </div>
    <div class="page-content">
      <div class="list links-list">
        <ul>
          ${u.value.map(v=>c`
            <li><a href="/product/${v.id}/">${v.title}</a></li>
          `)}
        </ul>
      </div>
      ${u.value.length===3&&c`
        <div class="block">
          <button class="button button-fill" @click=${o}>Add Product</Button>
        </div>
      `}
    </div>
  </div>
`}}V.id="b8ddde6cfb";function G(s,{$f7route:d,$store:u}){const o=u.getters.products,r=d.params.id;let c;return o.value.forEach(v=>{v.id===r&&(c=v)}),function(v){v.$;var a=v.$h;return v.$root,v.$f7,v.$f7route,v.$f7router,v.$theme,v.$update,v.$store,a`
  <div class="page" data-name="product">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">${c.title}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block-title">About ${c.title}</div>
      <div class="block block-strong">
        ${c.description}
      </div>
    </div>
  </div>
`}}G.id="670bf2447d";function J(s,{$:d,$f7:u}){const o=()=>{u.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})},r=()=>{d("body").addClass("theme-dark")};return function(c){c.$;var v=c.$h;return c.$root,c.$f7,c.$f7route,c.$f7router,c.$theme,c.$update,c.$store,v`
  <div class="page" data-name="settings">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="title">Profile</div>
        <div class="right">
          <a href="#" class="link icon-only panel-open" data-panel="right">
            <i class="icon material-icons-outlined">settings</i>
          </a>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="block-title">Form Example</div>
      <div class="list no-hairlines-md">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Name</div>
                <div class="item-input-wrap">
                  <input type="text" placeholder="Your name" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">E-mail</div>
                <div class="item-input-wrap">
                  <input type="email" placeholder="E-mail" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">URL</div>
                <div class="item-input-wrap">
                  <input type="url" placeholder="URL" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Password</div>
                <div class="item-input-wrap">
                  <input type="password" placeholder="Password" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Phone</div>
                <div class="item-input-wrap">
                  <input type="tel" placeholder="Phone" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Gender</div>
                <div class="item-input-wrap">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Birth date</div>
                <div class="item-input-wrap">
                  <input type="date" placeholder="Birth day" value="2014-04-30" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Toggle</div>
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="checkbox" />
                    <span class="toggle-icon"></span>
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Slider</div>
                <div class="item-input-wrap">
                  <div class="range-slider range-slider-init" data-label="true">
                    <input type="range" value="50" min="0" max="100" step="1" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Textarea</div>
                <div class="item-input-wrap">
                  <textarea placeholder="Bio"></textarea>
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Resizable</div>
                <div class="item-input-wrap">
                  <textarea placeholder="Bio" class="resizable"></textarea>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block-title">Buttons</div>
      <div class="block block-strong">
        <p class="row">
          <a href="#" class="col button">Button</a>
          <a href="#" class="col button button-fill">Fill</a>
        </p>
        <p class="row">
          <a href="#" class="col button button-raised">Raised</a>
          <a href="#" class="col button button-raised button-fill">Raised Fill</a>
        </p>
        <p class="row">
          <a href="#" class="col button button-round">Round</a>
          <a href="#" class="col button button-round button-fill">Round Fill</a>
        </p>
        <p class="row">
          <a href="#" class="col button button-outline">Outline</a>
          <a href="#" class="col button button-round button-outline">Outline Round</a>
        </p>
        <p class="row">
          <a href="#" class="col button button-small button-outline">Small</a>
          <a href="#" class="col button button-small button-round button-outline">Small Round</a>
        </p>
        <p class="row">
          <a href="#" class="col button button-small button-fill">Small</a>
          <a href="#" class="col button button-small button-round button-fill">Small Round</a>
        </p>
        <p class="row">
          <a href="#" class="col button button-large button-raised">Large</a>
          <a href="#" class="col button button-large button-fill button-raised">Large Fill</a>
        </p>

        <p class="row">
          <a href="#" class="col button button-large button-fill button-raised color-red">Large Red</a>
          <a href="#" class="col button button-large button-fill button-raised color-green">Large Green</a>
        </p>

      </div>
      <div class="block-title">Checkbox group</div>
      <div class="list">
        <ul>
          <li>
            <label class="item-checkbox item-content">
              <input type="checkbox" name="checkbox" value="Books" checked="checked" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title">Books</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input type="checkbox" name="checkbox" value="Movies" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title">Movies</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input type="checkbox" name="checkbox" value="Food" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title">Food</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-checkbox item-content">
              <input type="checkbox" name="checkbox" value="Drinks" />
              <i class="icon icon-checkbox"></i>
              <div class="item-inner">
                <div class="item-title">Drinks</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="block-title">Radio buttons group</div>
      <div class="list">
        <ul>
          <li>
            <label class="item-radio item-content">
              <input type="radio" name="radio" value="Books" checked="checked" />
              <i class="icon icon-radio"></i>
              <div class="item-inner">
                <div class="item-title">Books</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-radio item-content">
              <input type="radio" name="radio" value="Movies" />
              <i class="icon icon-radio"></i>
              <div class="item-inner">
                <div class="item-title">Movies</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-radio item-content">
              <input type="radio" name="radio" value="Food" />
              <i class="icon icon-radio"></i>
              <div class="item-inner">
                <div class="item-title">Food</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-radio item-content">
              <input type="radio" name="radio" value="Drinks" />
              <i class="icon icon-radio"></i>
              <div class="item-inner">
                <div class="item-title">Drinks</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="block">
        <button class="button button-round color-blue" @click="${r}">Turn on darkmode</button>
        <button class="button button-round color-red" @click="${o}">Logout</button>
      </div>
    </div>
  </div>
`}}J.id="da49292157";function C(s,{$:d,$f7:u,$on:o,$update:r,$store:c}){let v;o("pageInit",()=>{v=u.searchbar.create({el:".searchbar",customSearch:!0,on:{search(p,i,l){i!=""&&$()},clear(){a={},r()}}}),u.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let a={},n=!1;const m=c.getters.spotifyApi.value;let t={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},e={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const h=p=>{let i;p.path==null?i=p.srcElement.innerText:i=p.path[0].innerText;for(let l in e)e[l].active=!1;for(let l in e)i=="All"&&(e[l].active=!0),i==e[l].name&&(e[l].active=!0);v.query!=""&&$(),r()},$=p=>{let i=v.query;if(e.all.active){S(i,["album","artist","playlist","track"],{limit:3});return}if(e.tracks.active){S(i,["track"],{limit:20});return}if(e.albums.active){S(i,["album"],{limit:20});return}if(e.artists.active){S(i,["artist"],{limit:20});return}if(e.playlists.active){S(i,["playlist"],{limit:20});return}},S=(p,i,l,y)=>{y||(n=!0),r(),m.search(p,i,l).then(function(b){if(y)return f(b);n=!1,a=b,console.log(b),r()},function(b){console.error(b),n=!1})},f=p=>{if(p.playlists){let i=a.playlists.items.concat(p.playlists.items);a.playlists.items=i,g=!1,r()}if(p.tracks){let i=a.tracks.items.concat(p.tracks.items);a.tracks.items=i,g=!1,r()}if(p.albums){let i=a.albums.items.concat(p.albums.items);a.albums.items=i,g=!1,r()}if(p.artists){let i=a.artists.items.concat(p.artists.items);a.artists.items=i,g=!1,r()}};let g=!1;const k=p=>{if(g)return;g=!0,r();let i=a[p].items.length;console.log(i),S(v.query,[t[p]],{limit:20,offset:i},!0)};return function(p){p.$;var i=p.$h;return p.$root,p.$f7,p.$f7route,p.$f7router,p.$theme,p.$update,p.$store,i`
    <div class="page" data-name="catalog">
        <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
                <div class="title">Search</div>
                <div class="subnavbar">
                    <form class="searchbar">
                        <div class="searchbar-inner">
                            <div class="searchbar-input-wrap">
                                <input type="search" placeholder="Search" />
                                <i class="searchbar-icon"></i>
                                <span class="input-clear-button"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="block chip-block">
                <div data-space-between="10" data-slides-per-view="auto" class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${Object.keys(e).map(l=>i`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${e[l].active?"button-fill":"button-outline"}"
                                @click="${h}">${e[l].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${n==!0?i`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:i``}

            ${a.tracks!=null?i`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${a.tracks.items.map(l=>i`
                    <li>
                        <a href="/track/${l.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${l.album.images.length>0?i`
                                <img src="${l.album.images[l.album.images.length-1].url}" class="track-cover" />
                                `:i`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${l.name}</div>
                                </div>
                                <div class="item-subtitle">${l.artists.map(y=>i`${y.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.tracks.items.length>2?i`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                    @click=${()=>k("tracks")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:i` `}
            `:i``}

            ${a.albums!=null?i`
            <div class="block-title">Albums</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${a.albums.items.map(l=>i`
                    <li>
                        <a href="/album/${l.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${l.images.length>0?i`
                                <img src="${l.images[l.images.length-1].url}" class="album-cover" />
                                `:i`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${l.name}</div>
                                </div>
                                <div class="item-subtitle">${l.artists.map(y=>i`${y.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.albums.items.length>2?i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                        @click=${()=>k("albums")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:i` `}
            `:i``}

            ${a.artists!=null?i`
            <div class="block-title">Artists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${a.artists.items.map(l=>i`
                    <li>
                        <a href="/artist/${l.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${l.images.length>0?i`
                                <img src="${l.images[l.images.length-1].url}" class="artist-cover" />
                                `:i`
                                <img src="./assets/icons/face_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${l.name}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.artists.items.length>2?i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                        @click=${()=>k("artists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:i` `}
            `:i``}

            ${a.playlists!=null?i`
            <div class="block-title">Playlists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${a.playlists.items.map(l=>i`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${l.images.length>0?i`
                                <img src="${l.images[l.images.length-1].url}" class="playlist-cover" />
                                `:i`
                                <img src="./assets/icons/queue_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${l.name}</div>
                                </div>
                                <div class="item-subtitle">${l.owner.display_name}</div>

                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.playlists.items.length>2&&i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                        @click=${()=>k("playlists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `}
            `:i``}

        </div>
    </div>
`}}C.id="48d53e3b6d";C.style=`
    .button-load-more {
        width: initial;
        display: inline-block;
    }

    .chip-block {
        margin: 10px 0px;
    }

    .chip-slide {
        width: auto !important;
    }

    .result-block {
        margin-top: 0;
    }

    .button-round {
        text-transform: inherit;
    }

    .track-cover {
        background-image: url('./assets/icons/audiotrack_black_48dp.svg');
        width: 45px;
        height: 45px;
        object-fit: cover;
    }

    .album-cover {
        background-image: url('./assets/icons/library_music_black_48dp.svg');
        width: 45px;
        height: 45px;
        object-fit: cover;
    }

    .artist-cover {
        background-image: url('./assets/icons/face_black_48dp.svg');
        width: 45px;
        height: 45px;
        object-fit: cover;
    }

    .playlist-cover {
        background-image: url('./assets/icons/queue_music_black_48dp.svg');
        width: 45px;
        height: 45px;
        object-fit: cover;
    }
`;function F(s,{$:d,$f7:u,$update:o,$on:r,$store:c,$f7router:v}){const a=c.getters.spotifyApi.value;var n=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let m=n.exec(navigator.language)[5];console.log(m);let t=s.album;console.log(t);let e={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const h=i=>{v.navigate("/add/playlist/",{props:{items:[i]}})},$=()=>{const i={title:`Statify - ${t.name}`,text:"Look at this album i found!",url:window.location.origin+v.url};try{navigator.share(i)}catch(l){console.log("share error",l)}},S=()=>{e.trackIsSavedLoading=!0;let i=[];for(let l=0;l<t.tracks.items.length;l++){let y=t.tracks.items[l];i.push(y.id)}e.albumIsSavedLoading=!0,a.containsMySavedAlbums([t.id]).then(function(l){e.albumIsSavedLoading=!1,t.isSaved=l[0],console.log(t),o()}),a.containsMySavedTracks(i).then(function(l){e.trackIsSavedLoading=!1;for(let y=0;y<t.tracks.items.length;y++){let b=t.tracks.items[y];b.isSaved=l[y]}console.log(t.tracks),o()})};S(),r("pageInit",(i,l)=>{const y=w=>{var _=Math.floor(w/1e3%60),I=Math.floor(w/(1e3*60)),I=I<10?"0"+I:I;return _=_<10?"0"+_:_,I+":"+_};let b=0;for(let w=0;w<t.tracks.items.length;w++){let I=t.tracks.items[w].duration_ms;b=b+I}e.duration=y(b),o()}),a.containsMySavedAlbums([t.id]).then(function(i){e.albumIsSavedLoading=!1,e.albumIsSaved=i[0],o()});const f=()=>{v.navigate("/add/playlist/",{props:{items:t.tracks.items}})},g=()=>{e.albumIsSavedLoading=!0,o();let i;i=a.addToMySavedAlbums,i([t.id]).then(function(l){e.albumIsSavedLoading=!1,e.albumIsSaved=!e.albumIsSaved,o()},function(l){console.log(l),e.trackIsSavedLoading=!1,o()})},k=i=>{e.trackIsSavedLoading=!0,o();let l;e.albumIsSaved?l=a.removeFromMySavedTracks:l=a.addToMySavedTracks,l([i.id]).then(function(y){e.albumIsSavedLoading=!1,S(),o()},function(y){console.log(y),e.albumIsSavedLoading=!1,S(),o()})},p=()=>{const i=track.available_markets.map(j),l=track.available_markets;let y="",b="";l.includes(m)&&(b=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${m}". \u{1F601}</p></div>`);for(let _=0;_<l.length;_++)y=`${y}<div class="col"><div class="marketItem">${i[_]} ${l[_]}</div></div>`;u.sheet.create({content:`
          <div class="sheet-modal">
            <div class="toolbar">
              <div class="toolbar-inner">
                <div class="left"></div>
                <div class="right">
                  <a class="link sheet-close">Done</a>
                </div>
              </div>
            </div>
            <div class="sheet-modal-inner">
                ${b}
              <div class="block">
                <div class="row marketRow">
                    
          ${y}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return r("pageBeforeOut",(i,l)=>{}),function(i){i.$;var l=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,l`
    <div class="page">
        <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span class="if-not-md">Back</span>
                    </a>
                </div>
                <div class="title">${t.name}</div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${p}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${$}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${t.images.length>1?l`
            <div class="previewImageBlock">
                <img src="${t.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${t.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:l`
            `}
            <div class="contentBlock">
                ${e.showProgressbar}


                <div class="block block-strong no-margin-top optionsBlock">
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${f}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                                class=" button button-large button-round optionsButtons button-preloader ${e.albumIsSavedLoading?"button-loading":""}"
                                @click=${g}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${e.albumIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Beginn Pagecontent -->

                ${t.tracks!=null?l`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${t.tracks.items.map(y=>l`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${y.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${t.images.length>0?l`
                                        <img src="${t.images[t.images.length-1].url}" class="track-cover"/>
                                        `:l`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${y.name}</div>
                                            <div class="item-after">

                                                ${y.isSaved?l`<span class="material-icons-round trackHeart">favorite</span>`:l``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${y.artists.map(b=>l`${b.name} `)}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swipeout-actions-left">
                                <a href="#" class="swipeout-overswipe" @click="${()=>k(y)}">
                                    <span class="material-icons-round optionButtonIcon">
                                ${y.isSaved?"favorite":"favorite_border"}
                            </span></a>
                            </div>
                            <div class="swipeout-actions-right">
                                <a href="#" class="swipeout-overswipe" @click="${()=>h(y)}"><span
                                        class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span></a>

                            </div>
                        </li>
                        `)}
                    </ul>
                </div>
                `:l``}


                <div class="block-title">Infos</div>
                <div class="list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="material-icons-round">
                                    av_timer
                                </i></div>
                                <div class="item-inner">
                                    <div class="item-title">Duration time</div>
                                    <div class="item-after">${e.duration}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="${t.external_urls.spotify}" class="item-link item-content external">
                                <div class="item-media">
                                    <i class="icon material-icons-round">launch
                                    </i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">Open in Spotify</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- End of Pagecontent -->
            </div>
        </div>
    </div>
`}}F.id="9eb4456f94";F.style=`
    .trackHeart {
        font-size: 15px;
        margin-right: -5px;
    }

    .optionsBlock {
        display: flex;
    }

    .optionsButtons {
        width: fit-content !important;
    }

    .optionButtonIcon {
        margin-left: 0 !important;
        margin-right: 4px;
    }

    .marketItem {
        width: min-content;
    }

    .marketRow > div {
        width: fit-content !important;
        margin: 5px !important;
    }

    .sheet-modal-inner {
        overflow-y: scroll !important;
    }

    .previewImageBlock {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 0;
    }

    .track-cover {
        background-image: url('./assets/icons/audiotrack_black_48dp.svg');
        width: 45px;
        height: 45px;
        object-fit: cover;
    }

    .previewImageBlock > img {
        display: block;
        object-fit: cover;
        object-position: center;
    }

    .contentBlock {
        background: var(--f7-page-bg-color);
        position: relative;
        z-index: 1;
        margin-top: 0;
        height: fit-content;
    }

    .imageBlur {
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 30px;
    }

    .imageNoBlur {
        padding: 30px;
        position: inherit;
        margin-left: auto;
        margin-right: auto;
    }
`;function E(s,{$store:d,$update:u}){console.log("artistView",s);const o=s.artist,r=d.getters.spotifyApi.value;let c={},a=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(navigator.language)[5];return c.topTracks==null&&r.getArtistTopTracks(o.id,a).then(function(n){console.log("topTracks",n),c.topTracks=n,u()}),function(n){n.$;var m=n.$h;return n.$root,n.$f7,n.$f7route,n.$f7router,n.$theme,n.$update,n.$store,m`
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">${o.name}</div>
      </div>
    </div>
    <div class="page-content">
      ${o.images.length>1?m`
      <div class="previewImageBlock">
        <img src="${o.images[1].url}" width="200px" height="200px" class="imageBlur" />
        <img src="${o.images[1].url}" width="200px" height="200px" class="imageNoBlur" />
      </div>
      `:m`
      `}
      <div class="contentBlock">


        <div class="block block-strong no-margin-top optionsBlock">
          <div style="margin-left: auto; display: flex;">
            <a class=" button button-large button-round optionsButtons">
              <span class="material-icons-round optionButtonIcon">
                playlist_add
              </span>
            </a>
            <button
              class=" button button-large button-round optionsButtons button-preloader ${""}">
              <span class="preloader"></span>
              <span></span>
              <span class="material-icons-round optionButtonIcon">
                ${"favorite_border"}
              </span>
            </button>
          </div>
        </div>

        ${c.topTracks!=null&&c.topTracks.tracks.length>0&&m`
        <div class="block-title">Artist top Tracks</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true"
            data-mousewheel="true" class="swiper-container swiper-init topTracks">
            <div class="swiper-wrapper">
              ${c.topTracks.tracks.map(t=>m`
              <div class="swiper-slide">
                <a href="/track/${t.id}/">
                  ${t.album.images.length>1?m`
                  <img class="elevation-3" src="${t.album.images[1].url}" />
                  `:m`
                  <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                  `}
                  <div class="title">${t.name}</div>
                  <div class="artist">${t.artists.map(e=>m`${e.name} `)}</div>
                </a>
              </div>
              `)}
            </div>
          </div>
        </div>
        `}





      </div>
    </div>
  </div>
`}}E.id="a4ba5387b9";E.style=`
  .optionsBlock {
    display: flex;
  }

  .optionsButtons {
    width: fit-content !important;
  }

  .optionButtonIcon {
    margin-left: 0 !important;
    margin-right: 4px;
  }

  .imageBlur {
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -o-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 30px;
  }

  .imageNoBlur {
    padding: 30px;
    position: inherit;
    margin-left: auto;
    margin-right: auto;
  }

  .contentBlock {
    background: var(--f7-page-bg-color);
    position: relative;
    z-index: 1;
    height: 1000px;
    margin-top: 0;
  }

  .previewImageBlock {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 0;
  }

  .previewImageBlock>img {
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;function Y(s,{$:d,$f7router:u,$f7:o,$store:r,$on:c,$update:v}){const a=r.getters.spotifyApi.value;let n=s.items;const m=r.getters.userId.value;let t={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(s.items),(!s.items||s.items.length<1)&&o.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){u.back()});const e=g=>{for(var k=0;k<n.length;k++)n[k]===g&&(n.splice(k,1),k--);n.length==0&&u.back(),v()},h=()=>{let g=d('[name="playlistSelection"]');for(let k=0;k<g.length;k++){const p=g[k];d(p).prop("checked",t.select)}t.select=!t.select,v()},$=()=>{t.playlists=[],v(),a.getUserPlaylists().then(function(g){console.log(g),t.playlists=f(g,m),console.log(t.playlists),v()},function(g){console.error(g),o.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){u.back()})})};c("pageInit",(g,k)=>{$()});const S=()=>{t.saveLoading=!0;let g=d('[name="playlistSelection"]:checked'),k=[];g.length==0&&o.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let p=0;p<n.length;p++)k.push(n[p].uri);for(let p=0;p<g.length;p++){const i=g[p].value;a.addTracksToPlaylist(i,k).then(function(l){t.saveCount=t.saveCount+1,t.saveCount==g.length&&(t.saveLoading=!1,t.select=!0,t.saveCount=0,$()),v()},function(l){console.error(l),o.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){u.back()})})}},f=(g,k)=>{let p=g.items,i=[];for(let l=0;l<p.length;l++){if(p[l].collaborative){i.push(p[l]);continue}if(p[l].owner.id==k){i.push(p[l]);continue}}return i};return function(g){g.$;var k=g.$h;return g.$root,g.$f7,g.$f7route,g.$f7router,g.$theme,g.$update,g.$store,k`
    <div class="page" data-name="about">
        <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span class="if-not-md">Back</span>
                    </a>
                </div>
                <div class="title">Add ${n.length} ${n.length>1?"tracks":"track"} to playlist
                </div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${h}">
                      <i class="icon material-icons-round">${t.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${S}">
                ${t.saveLoading?k`
                <div class="text-align-center">
                    <div class="preloader"></div>
                </div>

                `:k`

                <i class="icon material-icons-round">done</i>
                `}
            </a>
        </div>
        <div class="page-content">
            <div class="block block-strong inset">
                <p>Select the playlists on which the tracks are to be saved.</p>
            </div>
            <div class="list accordion-list accordion-opposite">
                <ul>
                    <li class="accordion-item">
                        <a href="" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title">Tracks</div>
                            </div>
                        </a>
                        <div class="accordion-item-content">

                            <div class="list media-list margin-top-half">
                                <ul class="no-padding-left">
                                    ${n.map(p=>k`
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">

                                                <img src="./assets/icons/library_music_black_48dp.svg" width="35" />

                                            </div>
                                            <div class="item-inner">
                                                <div class="item-title-row">
                                                    <div class="item-title">${p.name}</div>
                                                    <div class="item-after"><i class="icon material-icons-round" @click="${()=>e(p)}">cancel</i></div>
                                                </div>
                                                <div class="item-subtitle">${p.artists.map(i=>k`${i.name} `)}</div>
                                            </div>
                                        </div>
                                    </li>
                                    `)}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="block">
                <button class="col button button-fill button-round"><i class="icon material-icons-round">add</i>Round</button>

            </div>
            <div class="block-title">${t.playlists.length>1?"Playlists":"Playlist"}</div>
            <div class="list media-list">
                <ul>
                    ${t.playlists!=null?k`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${t.playlists.map(p=>k`
                            <li>
                                <label class="item-checkbox item-content">
                                    <input type="checkbox" name="playlistSelection" value="${p.id}" />
                                    <i class="icon icon-checkbox"></i>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${p.name}</div>
                                            <div class="item-after">${p.tracks.total} Tracks</div>
                                        </div>
                                        <div class="item-subtitle">${p.owner.display_name}</div>
                                        <div class="item-text">${p.description}</div>
                                    </div>
                                </label>
                            </li>
                            `)}
                        </ul>
                    </div>

                    `:k`
                    <div class="block block-strong">
                        <div class="block-inner text-align-center">
                            <div class="preloader"></div>
                        </div>
                    </div>
                    `}

                </ul>
            </div>
        </div>
    </div>
`}}Y.id="22826431ea";function D(s,{$f7:d,$on:u,$onBeforeMount:o,$onMounted:r,$onBeforeUnmount:c,$onUnmounted:v}){let a="Jimmy",n=25,m=["Tennis","Chess","Football"];const t=()=>{d.dialog.alert("Hello World")};return o(()=>{console.log("onBeforeMount")}),r(()=>{console.log("onMounted")}),c(()=>{console.log("onBeforeUnmount")}),v(()=>{console.log("onUnmounted")}),u("pageMounted",(e,h)=>{console.log("pageMounted",h)}),u("pageInit",(e,h)=>{console.log("pageInit",h)}),u("pageBeforeIn",(e,h)=>{console.log("pageBeforeIn",h)}),u("pageAfterIn",(e,h)=>{console.log("pageAfterIn",h)}),u("pageBeforeOut",(e,h)=>{console.log("pageBeforeOut",h)}),u("pageAfterOut",(e,h)=>{console.log("pageAfterOut",h)}),u("pageBeforeRemove",(e,h)=>{console.log("pageBeforeRemove",h)}),function(e){e.$;var h=e.$h;e.$root,e.$f7;var $=e.$f7route;e.$f7router;var S=e.$theme;return e.$update,e.$store,h`
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">Component Page</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block block-strong">
        <p>Component page template is compiled as ES Template. In addition it has lifecycle hooks, events handling, data managment and Virtual DOM data bindings.</p>
        <p>It is useful to use Component page when you need page-specific logic.</p>
      </div>
      <div class="block-title">Events Handling</div>
      <div class="block block-strong">
        <a href="#" class="button button-raised" @click=${t}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${a}. I am ${n} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${m.map(f=>h`
          <li>${f}</li>
          `)}
        </ul>
      </div>
      <div class="block-title">Extended Context</div>
      <div class="block block-strong">
        <p>Component page context as Template7 page context is also extended with some additional variables.</p>
        <h4>$f7route</h4>
        <p>Contains properties of the current route:</p>
        <ul style="padding-left:25px">
          <li><b>$f7route.url</b>: ${$.url}</li>
          <li><b>$f7route.path</b>: ${$.path}</li>
          <li><b>$f7route.params</b>: ${JSON.stringify($.params)}</li>
          <li><b>$f7route.hash</b>: ${$.hash}</li>
          <li><b>$f7route.query</b>: ${JSON.stringify($.query)}</li>
        </ul>

        <h4>$theme</h4>
        <p>Currently active theme:</p>
        <ul style="padding-left:25px">
          <li><b>$theme.ios</b>: ${S.ios}</li>
          <li><b>$theme.md</b>: ${S.md}</li>
          <li><b>$theme.aurora</b>: ${S.aurora}</li>
        </ul>
      </div>
    </div>
  </div>
`}}D.id="d998363caa";D.style=`
  p {
    margin: 10px 0;
  }
`;function Q(){return function(s){s.$;var d=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,d`
<div class="page">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">Not found</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block block-strong">
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </div>
  </div>
</div>
`}}Q.id="6fd8e164b2";const ai={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"};function N(s,{$:d,$f7:u,$update:o,$on:r,$store:c,$f7router:v}){const a=c.getters.spotifyApi.value;let n=!1;var m=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let t=m.exec(navigator.language)[5];console.log(t);const e=s.track,h=e.album;let $,S="play_arrow",f={trackIsSavedLoading:!0};console.log(e);const g=()=>{const b={title:`Statify - ${e.name}`,text:"Look at this track i found!",url:window.location.origin+v.url};try{navigator.share(b)}catch(w){console.log("share error",w)}};r("pageInit",(b,w)=>{const _=I=>{var x=Math.floor(I/1e3%60),B=Math.floor(I/(1e3*60)),B=B<10?"0"+B:B;return x=x<10?"0"+x:x,B+":"+x};f.duration=_(e.duration_ms),o()}),a.containsMySavedTracks([e.id]).then(function(b){f.trackIsSavedLoading=!1,f.trackIsSaved=b[0],o()}),a.getAudioFeaturesForTrack(e.id).then(function(b){f.songAnalytics=b,console.log(b),o()});const k=()=>{v.navigate("/add/playlist/",{props:{items:[e]}})},p=()=>{f.trackIsSavedLoading=!0,o();let b;f.trackIsSaved?b=a.removeFromMySavedTracks:b=a.addToMySavedTracks,b([e.id]).then(function(w){f.trackIsSavedLoading=!1,f.trackIsSaved=!f.trackIsSaved,console.log(f),o()},function(w){console.log(w),f.trackIsSavedLoading=!1,o()})},i=()=>{$=new Audio(e.preview_url),console.log(e),$.addEventListener("loadstart",function(){n=!0,o()}),$.addEventListener("canplaythrough",function(){n=!1,$.play(),o()}),$.addEventListener("ended",function(){S="play_arrow",f.showProgressbar=!1,o()}),$.addEventListener("timeupdate",function(){let b=$.currentTime/$.duration*100;u.progressbar.set(".progressbar",b),o()})},l=()=>{const b=e.available_markets.map(j),w=e.available_markets;let _="",I="";w.includes(t)&&(I=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${t}". \u{1F601}</p></div>`);for(let B=0;B<w.length;B++)_=`${_}<div class="col"><div class="marketItem">${b[B]} ${w[B]}</div></div>`;var x=u.sheet.create({content:`
          <div class="sheet-modal">
            <div class="toolbar">
              <div class="toolbar-inner">
                <div class="left"></div>
                <div class="right">
                  <a class="link sheet-close">Done</a>
                </div>
              </div>
            </div>
            <div class="sheet-modal-inner">
                ${I}
              <div class="block">
                <div class="row marketRow">
                    
          ${_}

        </div>
              </div>
            </div>
          </div>
        `});x.open()},y=()=>{$||i(),n||($.paused?(S="pause",f.showProgressbar=!0,o(),$.play()):(S="play_arrow",f.showProgressbar=!1,o(),$.pause()))};return r("pageBeforeOut",(b,w)=>{$&&$.pause()}),function(b){b.$;var w=b.$h;return b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme,b.$update,b.$store,w`
    <div class="page">
        <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span class="if-not-md">Back</span>
                    </a>
                </div>
                <div class="title">${e.name}</div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${l}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${g}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${h.images.length>1?w`
            <div class="previewImageBlock">
                <img src="${h.images[1].url}" width="200px" class="imageBlur" />
                <img src="${h.images[1].url}" width="200px" class="imageNoBlur" />
            </div>
            `:w`
            `}
            <div class="contentBlock">
                ${f.showProgressbar&&w`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${e.preview_url&&w`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${n?"button-loading":""}"
                        @click=${y}>
                        <span class="preloader"></span>
                        <span></span>
                        <span class="material-icons-round optionButtonIcon">
                            ${S}
                        </span>
                    </button>
                    `}
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${k}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                            class=" button button-large button-round optionsButtons button-preloader ${f.trackIsSavedLoading?"button-loading":""}"
                            @click=${p}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${f.trackIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>

                    </div>


                </div>

                <div class="block-title">Album</div>
                <div class="list media-list">
                    <ul>
                        <li>
                            <a href="/album/${h.id}/" class="item-link item-content">
                                <div class="item-media">
                                    ${h.images.length>1?w`
                                    <img src="${h.images[1].url}" width="70" />
                                    `:w`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${h.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${h.artists.map(_=>w`
                                        ${_.name} `)}
                                    </div>
                                    <div class="item-text">${h.release_date.substring(0,4)} · ${h.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${f.songAnalytics!=null&&w`
                <div class="block-title">Song analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${f.songAnalytics.danceability}"
                                data-value-text="${(f.songAnalytics.danceability*100).toFixed(0)}%"
                                data-value-text-color="#f44336" data-border-color="#f44336"
                                data-label-text="Danceability score"></div>
                        </div>
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${f.songAnalytics.valence}"
                                data-value-text="${(f.songAnalytics.valence*100).toFixed(0)}%"
                                data-value-text-color="#e91e63" data-border-color="#e91e63"
                                data-label-text="Happy Song"></div>
                        </div>
                    </div>
                </div>
                <div class="list media-list no-margin-top no-hairlines">
                    <ul>
                        <li>
                            <a href="/artist/" class="item-link item-content">
                                <div class="item-media">
                                    <i class="icon material-icons-round">bar_chart</i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">More analytics</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                `}



                ${f.songAnalytics!=null&&w`
                <div class="block-title">Audio analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        ${f.songAnalytics.key>=0&&w`
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${ai[f.songAnalytics.key]}</h1>
                                    <p class="no-margin-top">Key</p>
                                </div>
                            </div>
                        </div>
                        `}
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${f.songAnalytics.tempo}</h1>
                                    <p class="no-margin-top">BPM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list media-list no-margin-top no-hairlines">
                    <ul>
                        <li>
                            <a href="/artist/" class="item-link item-content">
                                <div class="item-media">
                                    <i class="icon material-icons-round">bar_chart</i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">More analytics</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                `}






                ${e.artists!=null?w`
                <div class="block-title">Artists</div>
                <div class="list media-list margin-bottom-half">
                    <ul>
                        ${e.artists.map(_=>w`
                        <li>
                            <a href="/artist/${_.id}/" class="item-link item-content">
                                <div class="item-media">
                                    <i class="icon material-icons-round">face</i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${_.name}</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `)}
                    </ul>
                </div>

                `:w``}


                <div class="block-title">Infos</div>
                <div class="list">
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media"><i class="material-icons-round">
                                        av_timer
                                    </i></div>
                                <div class="item-inner">
                                    <div class="item-title">Duration time</div>
                                    <div class="item-after">${f.duration}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="${e.external_urls.spotify}" class="item-link item-content external">
                                <div class="item-media">
                                    <i class="icon material-icons-round">launch
                                    </i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">Open in Spotify</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`}}N.id="2c62e2ea69";N.style=`
    .optionsBlock {
        display: flex;
    }

    .spotify-icon {
        height: 24px;
        width: 24px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
        color: var(--f7-text-color)
    }

    .playButton {
        width: fit-content !important;
    }

    .optionsButtons {
        width: fit-content !important;
    }

    .optionButtonIcon {
        margin-left: 0 !important;
        margin-right: 4px;
    }

    .marketItem {
        width: min-content;
    }

    .marketRow>div {
        width: fit-content !important;
        margin: 5px !important;
    }

    .sheet-modal-inner {
        overflow-y: scroll !important;
    }

    .previewImageBlock {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 0;
    }

    .previewImageBlock>img {
        display: block;
        object-fit: cover;
        object-position: center;
    }

    .contentBlock {
        background: var(--f7-page-bg-color);
        position: relative;
        z-index: 1;
        height: 1000px;
        margin-top: 0;
    }

    .imageBlur {
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 30px;
    }

    .imageNoBlur {
        padding: 30px;
        position: inherit;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-container>div>div.swiper-slide {
        width: 150px;
    }

    .swiper-container>div>div.swiper-slide:first-child {
        margin-left: 15px;
    }

    .swiper-container>div>div.swiper-slide:last-child {
        margin-right: 15px;
    }

    .swiper-container>div>div.swiper-slide>a>img {
        width: 150px;
        height: 150px;
        border-radius: 5%;
        object-fit: cover;

    }

    .swiper-container>div>div.swiper-slide>a {
        width: 150px;
        text-overflow: ellipsis;
        overflow-y: hidden;
    }

    .swiper-container>div>div.swiper-slide>a>div.title {
        color: var(--f7-block-title-large-text-color);
        font-weight: 500;
    }

    .swiper-container>div>div.swiper-slide>a>div.artist {
        color: var(--f7-block-title-large-text-color);
        opacity: 0.5;
    }
`;var si=[{path:"/",component:P},{path:"/track/:trackId/",async:function({router:s,to:d,resolve:u}){var o=s.app,r=o.store,c=d.params.trackId,v=r.getters.spotifyApi.value;o.preloader.show(),v.getTrack(c).then(function(a){o.preloader.hide(),u({component:N},{props:{track:a}})},function(a){console.log(a),o.preloader.hide(),o.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/album/:albumId/",async:function({router:s,to:d,resolve:u}){var o=s.app,r=o.store,c=d.params.albumId,v=r.getters.spotifyApi.value;o.preloader.show(),v.getAlbum(c).then(function(a){o.preloader.hide(),u({component:F},{props:{album:a}})},function(a){console.log(a),o.preloader.hide(),o.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/artist/:artistId/",async:function({router:s,to:d,resolve:u}){var o=s.app,r=o.store,c=d.params.artistId,v=r.getters.spotifyApi.value;o.preloader.show(),v.getArtist(c).then(function(a){o.preloader.hide(),console.log(a),u({component:E},{props:{artist:a}})},function(a){console.log(a),o.preloader.hide(),o.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/about/",component:U},{path:"/add/playlist",component:Y},{path:"/form/",component:H},{path:"/search/",component:C},{path:"/catalog/",component:V},{path:"/product/:id/",component:G},{path:"/profile/",component:J},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:D},{path:"(.*)",component:Q}];const O=Z({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:s}){return s.products},loginMethode({state:s}){s.loginMethode()},spotifyApi({state:s}){return s.spotifyapi},userId({state:s}){return s.userId}},actions:{addProduct({state:s},d){s.products=[...s.products,d]},setUserId({state:s},d){s.userId=d},addLoginMethod({state:s},d){s.loginMethode=d},addSpotifyApi({state:s},d){s.spotifyapi=d}}});function M(s,{$f7:d,$update:u,$f7router:o}){let r="",c="";const v=t=>{r=t.target.value,u()},a=t=>{c=t.target.value,u()},n=t=>{console.log(t)},m=()=>{d.dialog.alert("Username: "+r+"<br/>Password: "+c,()=>{d.loginScreen.close()})};return function(t){t.$;var e=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,e`
  <div id="app">

    <!-- Left panel with cover effect-->
    <div class="panel panel-left panel-cover theme-dark panel-init">
      <div class="view">
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">Left Panel</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block">Left panel content goes here</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Right panel with reveal effect-->
    <div class="panel panel-right panel-reveal theme-dark">
      <div class="view">
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">Right Panel</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block">Right panel content goes here</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Views/Tabs container -->
    <div class="views tabs safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <div class="toolbar toolbar-bottom tabbar-labels">
        <div class="toolbar-inner">
          <a href="#view-home" class="tab-link tab-link-active">
            <i class="icon f7-icons if-not-md">house_fill</i>
            <i class="icon material-icons if-md">home</i>
            <span class="tabbar-label">Home</span>
          </a>
          <a href="#view-catalog" class="tab-link" @click="${n}">
            <i class="icon f7-icons if-not-md">square_list_fill</i>
            <i class="icon material-icons if-md">view_list</i>
            <span class="tabbar-label">Catalog</span>
          </a>
          <a href="#view-search" class="tab-link">
            <i class="icon material-icons-outlined">search</i>
            <span class="tabbar-label">Search</span>
          </a>
          <a href="#view-profile" class="tab-link">
            <i class="icon material-icons-outlined">people</i>
            <span class="tabbar-label">Profile</span>
          </a>
        </div>
      </div>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <div id="view-home" class="view view-main view-init tab tab-active" data-url="/" data-browser-history="true" data-browser-history-separator="">
        <!-- Home page will be loaded here dynamically from / route -->
      </div>

      <!-- Catalog View -->
      <div id="view-catalog" class="view view-init tab" data-name="catalog" data-url="/catalog/">
        <!-- Catalog page will be loaded here dynamically from /catalog/ route -->
      </div>

      <!-- Search View -->
      <div id="view-search" class="view view-init tab" data-name="search" data-url="/search/">
        <!-- Catalog page will be loaded here dynamically from /catalog/ route -->
      </div>

      <!-- Settings View -->
      <div id="view-profile" class="view view-init tab" data-name="profile" data-url="/profile/">
        <!-- Settings page will be loaded here dynamically from /settings/ route -->
      </div>
    </div>


    <!-- Popup -->
    <div class="popup" id="my-popup">
      <div class="view">
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">Popup</div>
              <div class="right">
                <a href="#" class="link popup-close">Close</a>
              </div>
            </div>
          </div>
          <div class="page-content">
            <div class="block">
              <p>Popup content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Screen -->
    <div class="login-screen" id="my-login-screen">
      <div class="view">
        <div class="page">
          <div class="page-content login-screen-content">
            <div class="login-screen-title">Login</div>
            <div class="list">
              <ul>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Username</div>
                    <div class="item-input-wrap">
                      <input type="text" name="username" placeholder="Your username" value="${r}" @input="${v}"/>

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${c}" @input="${a}"/>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${m}">Sign In</a>

                </li>
              </ul>
              <div class="block-footer">Some text about login information.<br/>Click "Sign In" to close Login Screen</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
`}}M.id="92a26d79f2";function L(s,{$:d,$el:u,$on:o,$f7:r,$update:c,$store:v}){let a=[];o("pageInit",(e,h)=>{});let n=0;r.request({url:"./assets/data/login_faq.json",async:!0,error:function(e){console.log(e),n=n+1,n<5?request(this):m()},success:function(e){try{a=JSON.parse(e)}catch(h){console.log(h),n=n+1,n<5?request(this):m();return}c(),r.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:a.length,observer:!0})}});const m=()=>{console.log(d(".faq-loading").html()),d(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),d(".faq-loading").removeClass("skeleton-text"),d(".faq-loading").removeClass("skeleton-effect-wave")},t=()=>{v.getters.loginMethode};return function(e){e.$;var h=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,h`
    <div class="view view-main view-init">
        <div class="page" data-name="about">
            <div class="navbar">
                <div class="navbar-bg"></div>
                <div class="navbar-inner sliding">
                    <div class="title">Login to Spotify</div>
                </div>
            </div>
            <div class="page-content">
                <div class="block-title faq_title">About My App</div>
                <div class="block block-strong">
                    <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur,
                        fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi
                        quidem illum consequuntur, a, quisquam.</p>
                    <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi
                        harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis,
                        reiciendis ex debitis, ut tenetur alias.</p>
                    <button @click="${t}"
                        class="col button button-large button-raised button-fill color-green"><i
                            class="icon spotify-icon"></i>Login with Spotify</button>
                    <p><label class="checkbox"><input type="checkbox" /><i class="icon-checkbox"></i></label> Don't show
                        this again.</p>
                </div>
                <div class="block-title faq_title">FAQ</div>
                <div data-space-between="50" class="swiper-container">
                    <div class="swiper-wrapper">
                        ${a.map($=>h`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${$.title}</div>
                                <div class="card-content card-content-padding">${$.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${a.length==0&&h`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}L.id="d4ecf62167";L.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class li{constructor(d,u){z(this,"login",()=>{const d="https://accounts.spotify.com/authorize",u="c34980adc6984ebd9418e19f418f10dd",{origin:o}=window.location,r=`${o}/`,c=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played"].toString().replace(",","%20"),v="token";window.location=`${d}?client_id=${u}&redirect_uri=${r}&scope=${c}&response_type=${v}`});z(this,"parseUrlHash",()=>{let u=window.location.hash.substr(1).split("&");const o={};u.forEach(c=>{let v=c.split("="),a=v[0],n=v[1];o[a]=n});let r=o.expires_in;if(r!=null&&!isNaN(r)){let c=parseInt(r),v=new Date;v.setSeconds(c),o.expireOnDate=v.toJSON()}else return null;return o});z(this,"isTokenValid",d=>{try{let u=d.expireOnDate,o=Date.parse(u);return new Date().getTime()<o}catch{return!1}});this.app=d,this.width=u}}let T,R=new li(oi),A,q=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(T=JSON.parse(localStorage.getItem("tokenMap")),R.isTokenValid(T)?(A=M,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?A=L:(T=R.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(T)),A=M,q=!0)):window.location.hash==null||window.location.hash==""?A=L:(T=R.parseUrlHash(),T!=null?(localStorage.setItem("tokenMap",JSON.stringify(T)),A=M,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(A=L,q=!1));let W=new ii;q&&W.setAccessToken(T.access_token);O.dispatch("addSpotifyApi",W);O.dispatch("addLoginMethod",R.login);var oi=new ei({name:"Statify",theme:"md",el:"#app",component:A,tokenMap:T,store:O,routes:si,on:{pageInit:function(){}}});function ni(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=ni;const ri=()=>{const s=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(s)},ci=()=>"standalone"in window.navigator&&window.navigator.standalone;ri()&&!ci()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));
