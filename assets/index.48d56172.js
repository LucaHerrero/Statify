var Z=Object.defineProperty;var ii=(o,c,d)=>c in o?Z(o,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[c]=d;var z=(o,c,d)=>(ii(o,typeof c!="symbol"?c+"":c,d),d);import{c as U,a as ei,S as ai,F as ti}from"./vendor.4b7dcee7.js";const si=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&t(v)}).observe(document,{childList:!0,subtree:!0});function d(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerpolicy&&(p.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?p.credentials="include":r.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function t(r){if(r.ep)return;r.ep=!0;const p=d(r);fetch(r.href,p)}};si();function P(o,{$on:c,$f7:d,$update:t,$store:r}){let p={};const v=r.getters.spotifyApi.value;let l={};return v.getMe().then(function(s){p=s,r.dispatch("setUserId",s.id),t()},function(s){console.error(s),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopArtists().then(function(s){l.myTopArtists==null&&(l.myTopArtists=s,console.log("myTopArtists",s),t())},function(s){console.error(s),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopTracks().then(function(s){l.myTopTracks==null&&(l.myTopTracks=s,console.log("myTopTracks",s),t())},function(s){console.error(s),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyRecentlyPlayedTracks().then(function(s){l.myRecentTracks==null&&(l.myRecentTracks=s,console.log("myTopTracks",s),t())},function(s){console.error(s),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(s){s.$;var m=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,m`
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
                <div class="title sliding">Statify</div>
                <div class="right">
                    <a href="#" class="link icon-only panel-open" data-panel="right">
                        <i class="icon f7-icons if-not-md">menu</i>
                        <i class="icon material-icons if-md">menu</i>
                    </a>
                </div>
                <div class="title-large">
                    <div class="title-large-text">Hello ${p.display_name}</div>
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

            ${l.myTopTracks!=null&&l.myTopTracks.total>0&&m`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${l.myTopTracks!=null&&l.myTopTracks.total>0&&m`
                        ${l.myTopTracks.items.map(i=>m`
                        <div class="swiper-slide">
                            <a href="/track/${i.id}/">
                                ${i.album.images.length>1?m`
                                <img class="elevation-3" src="${i.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${i.name}</div>
                                <div class="artist">${i.artists.map(e=>m`${e.name} `)}</div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}

            ${l.myTopArtists!=null&&l.myTopArtists.total>0&&m`
            <div class="block-title">Your top Artists</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${l.myTopArtists!=null&&l.myTopArtists.total>0&&m`
                        ${l.myTopArtists.items.map(i=>m`

                        <div class="swiper-slide">
                            <a href="/artist/${i.id}/">
                                ${i.images.length>1?m`
                                <img class="elevation-3 round" src="${i.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title text-align-center">${i.name}</div>
                                <div class="artist text-align-center">${i.followers.total.toLocaleString()} Followers
                                </div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}


            ${l.myRecentTracks!=null&&l.myRecentTracks.items.length>0&&m`
            <div class="block-title">Your recent Tracks</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${l.myRecentTracks!=null&&l.myRecentTracks.items.length>0&&m`
                        ${l.myRecentTracks.items.map(i=>m`
                        <div class="swiper-slide">
                            <a href="/track/${i.track.id}/">
                                ${i.track.album.images.length>1?m`
                                <img class="elevation-3" src="${i.track.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${i.track.name}</div>
                                <div class="artist">${i.track.artists.map(e=>m`${e.name} `)}</div>
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
`}}P.id="0faa2c7a6d";P.style=`
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
`;function H(){return function(o){o.$;var c=o.$h;return o.$root,o.$f7,o.$f7route,o.$f7router,o.$theme,o.$update,o.$store,c`
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
`}}H.id="e2b48f4f58";function J(){return function(o){o.$;var c=o.$h;return o.$root,o.$f7,o.$f7route,o.$f7router,o.$theme,o.$update,o.$store,c`
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
`}}J.id="30f7a3a0f2";function V(o,{$store:c}){const d=c.getters.products,t=()=>{c.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(r){r.$;var p=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,p`
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
          ${d.value.map(v=>p`
            <li><a href="/product/${v.id}/">${v.title}</a></li>
          `)}
        </ul>
      </div>
      ${d.value.length===3&&p`
        <div class="block">
          <button class="button button-fill" @click=${t}>Add Product</Button>
        </div>
      `}
    </div>
  </div>
`}}V.id="7c2df0cfa1";function G(o,{$f7route:c,$store:d}){const t=d.getters.products,r=c.params.id;let p;return t.value.forEach(v=>{v.id===r&&(p=v)}),function(v){v.$;var l=v.$h;return v.$root,v.$f7,v.$f7route,v.$f7router,v.$theme,v.$update,v.$store,l`
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
        <div class="title">${p.title}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block-title">About ${p.title}</div>
      <div class="block block-strong">
        ${p.description}
      </div>
    </div>
  </div>
`}}G.id="37e2d0196f";function Y(o,{$:c,$on:d,$f7:t,$store:r,$update:p}){d("pageInit",(s,m)=>{r.dispatch("getSetting","darkMode").then(function(i){var e=t.toggle.create({el:".darkModeToggle",on:{change:function(){v()}}});e.checked!=i&&e.toggle()})});const v=()=>{var s=t.toggle.get(".darkModeToggle");r.dispatch("changeSetting",{key:"darkMode",value:s.checked});const m=c("html");s.checked?m.addClass("theme-dark"):m.removeClass("theme-dark")},l=()=>{t.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})};return function(s){s.$;var m=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,m`
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
      <div class="block-title">Style</div>
      <div class="list">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="material-icons-round">dark_mode</i>
              </div>
              <div class="item-inner">
                <div class="item-title">Darkmode</div>
                <div class="item-after">
                  <label class="toggle darkModeToggle">
                    <input type="checkbox" />
                    <span class="toggle-icon"></span>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="block">
        <button class="button button-round color-red" @click="${l}">Logout</button>
      </div>
    </div>
  </div>
`}}Y.id="437f815e5a";function R(o,{$:c,$f7:d,$on:t,$update:r,$store:p}){let v;t("pageInit",()=>{v=d.searchbar.create({el:".searchbar",customSearch:!0,on:{search(u,a,n){a!=""&&$()},clear(){l={},r()}}}),d.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let l={},s=!1;const m=p.getters.spotifyApi.value;let i={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},e={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const f=u=>{let a;u.path==null?a=u.srcElement.innerText:a=u.path[0].innerText;for(let n in e)e[n].active=!1;for(let n in e)a=="All"&&(e[n].active=!0),a==e[n].name&&(e[n].active=!0);v.query!=""&&$(),r()},$=u=>{let a=v.query;if(e.all.active){S(a,["album","artist","playlist","track"],{limit:3});return}if(e.tracks.active){S(a,["track"],{limit:20});return}if(e.albums.active){S(a,["album"],{limit:20});return}if(e.artists.active){S(a,["artist"],{limit:20});return}if(e.playlists.active){S(a,["playlist"],{limit:20});return}},S=(u,a,n,y)=>{y||(s=!0),r(),m.search(u,a,n).then(function(g){if(y)return h(g);s=!1,l=g,console.log(g),r()},function(g){console.error(g),s=!1})},h=u=>{if(u.playlists){let a=l.playlists.items.concat(u.playlists.items);l.playlists.items=a,b=!1,r()}if(u.tracks){let a=l.tracks.items.concat(u.tracks.items);l.tracks.items=a,b=!1,r()}if(u.albums){let a=l.albums.items.concat(u.albums.items);l.albums.items=a,b=!1,r()}if(u.artists){let a=l.artists.items.concat(u.artists.items);l.artists.items=a,b=!1,r()}};let b=!1;const k=u=>{if(b)return;b=!0,r();let a=l[u].items.length;console.log(a),S(v.query,[i[u]],{limit:20,offset:a},!0)};return function(u){u.$;var a=u.$h;return u.$root,u.$f7,u.$f7route,u.$f7router,u.$theme,u.$update,u.$store,a`
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
                        ${Object.keys(e).map(n=>a`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${e[n].active?"button-fill":"button-outline"}"
                                @click="${f}">${e[n].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${s==!0?a`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:a``}

            ${l.tracks!=null?a`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${l.tracks.items.map(n=>a`
                    <li>
                        <a href="/track/${n.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${n.album.images.length>0?a`
                                <img src="${n.album.images[n.album.images.length-1].url}" class="track-cover" />
                                `:a`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${n.name}</div>
                                </div>
                                <div class="item-subtitle">${n.artists.map(y=>a`${y.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.tracks.items.length>2?a`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                    @click=${()=>k("tracks")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:a` `}
            `:a``}

            ${l.albums!=null?a`
            <div class="block-title">Albums</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${l.albums.items.map(n=>a`
                    <li>
                        <a href="/album/${n.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${n.images.length>0?a`
                                <img src="${n.images[n.images.length-1].url}" class="album-cover" />
                                `:a`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${n.name}</div>
                                </div>
                                <div class="item-subtitle">${n.artists.map(y=>a`${y.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.albums.items.length>2?a`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                        @click=${()=>k("albums")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:a` `}
            `:a``}

            ${l.artists!=null?a`
            <div class="block-title">Artists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${l.artists.items.map(n=>a`
                    <li>
                        <a href="/artist/${n.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${n.images.length>0?a`
                                <img src="${n.images[n.images.length-1].url}" class="artist-cover" />
                                `:a`
                                <img src="./assets/icons/face_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${n.name}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.artists.items.length>2?a`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                        @click=${()=>k("artists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:a` `}
            `:a``}

            ${l.playlists!=null?a`
            <div class="block-title">Playlists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${l.playlists.items.map(n=>a`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${n.images.length>0?a`
                                <img src="${n.images[n.images.length-1].url}" class="playlist-cover" />
                                `:a`
                                <img src="./assets/icons/queue_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${n.name}</div>
                                </div>
                                <div class="item-subtitle">${n.owner.display_name}</div>

                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.playlists.items.length>2&&a`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                        @click=${()=>k("playlists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `}
            `:a``}

        </div>
    </div>
`}}R.id="0274069499";R.style=`
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
`;function D(o,{$:c,$f7:d,$update:t,$on:r,$store:p,$f7router:v}){const l=p.getters.spotifyApi.value;var s=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let m=s.exec(navigator.language)[5];console.log(m);let i=o.album;console.log(i);let e={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const f=a=>{v.navigate("/add/playlist/",{props:{items:[a]}})},$=()=>{const a={title:`Statify - ${i.name}`,text:"Look at this album i found!",url:window.location.origin+v.url};try{navigator.share(a)}catch(n){console.log("share error",n)}},S=()=>{e.trackIsSavedLoading=!0;let a=[];for(let n=0;n<i.tracks.items.length;n++){let y=i.tracks.items[n];a.push(y.id)}e.albumIsSavedLoading=!0,l.containsMySavedAlbums([i.id]).then(function(n){e.albumIsSavedLoading=!1,i.isSaved=n[0],console.log(i),t()}),l.containsMySavedTracks(a).then(function(n){e.trackIsSavedLoading=!1;for(let y=0;y<i.tracks.items.length;y++){let g=i.tracks.items[y];g.isSaved=n[y]}console.log(i.tracks),t()})};S(),r("pageInit",(a,n)=>{const y=w=>{var _=Math.floor(w/1e3%60),I=Math.floor(w/(1e3*60)),I=I<10?"0"+I:I;return _=_<10?"0"+_:_,I+":"+_};let g=0;for(let w=0;w<i.tracks.items.length;w++){let I=i.tracks.items[w].duration_ms;g=g+I}e.duration=y(g),t()}),l.containsMySavedAlbums([i.id]).then(function(a){e.albumIsSavedLoading=!1,e.albumIsSaved=a[0],t()});const h=()=>{v.navigate("/add/playlist/",{props:{items:i.tracks.items}})},b=()=>{e.albumIsSavedLoading=!0,t();let a;a=l.addToMySavedAlbums,a([i.id]).then(function(n){e.albumIsSavedLoading=!1,e.albumIsSaved=!e.albumIsSaved,t()},function(n){console.log(n),e.trackIsSavedLoading=!1,t()})},k=a=>{e.trackIsSavedLoading=!0,t();let n;e.albumIsSaved?n=l.removeFromMySavedTracks:n=l.addToMySavedTracks,n([a.id]).then(function(y){e.albumIsSavedLoading=!1,S(),t()},function(y){console.log(y),e.albumIsSavedLoading=!1,S(),t()})},u=()=>{const a=track.available_markets.map(U),n=track.available_markets;let y="",g="";n.includes(m)&&(g=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${m}". \u{1F601}</p></div>`);for(let _=0;_<n.length;_++)y=`${y}<div class="col"><div class="marketItem">${a[_]} ${n[_]}</div></div>`;d.sheet.create({content:`
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
                ${g}
              <div class="block">
                <div class="row marketRow">
                    
          ${y}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return r("pageBeforeOut",(a,n)=>{}),function(a){a.$;var n=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,n`
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
                <div class="title">${i.name}</div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${u}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${$}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${i.images.length>1?n`
            <div class="previewImageBlock">
                <img src="${i.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${i.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:n`
            `}
            <div class="contentBlock">
                ${e.showProgressbar}


                <div class="block block-strong no-margin-top optionsBlock">
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${h}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                                class=" button button-large button-round optionsButtons button-preloader ${e.albumIsSavedLoading?"button-loading":""}"
                                @click=${b}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${e.albumIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Beginn Pagecontent -->

                ${i.tracks!=null?n`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${i.tracks.items.map(y=>n`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${y.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${i.images.length>0?n`
                                        <img src="${i.images[i.images.length-1].url}" class="track-cover"/>
                                        `:n`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${y.name}</div>
                                            <div class="item-after">

                                                ${y.isSaved?n`<span class="material-icons-round trackHeart">favorite</span>`:n``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${y.artists.map(g=>n`${g.name} `)}
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
                                <a href="#" class="swipeout-overswipe" @click="${()=>f(y)}"><span
                                        class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span></a>

                            </div>
                        </li>
                        `)}
                    </ul>
                </div>
                `:n``}


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
                            <a href="${i.external_urls.spotify}" class="item-link item-content external">
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
`}}D.id="4165858067";D.style=`
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
`;function N(o,{$store:c,$update:d}){console.log("artistView",o);const t=o.artist,r=c.getters.spotifyApi.value;let p={},l=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(navigator.language)[5];return p.topTracks==null&&r.getArtistTopTracks(t.id,l).then(function(s){console.log("topTracks",s),p.topTracks=s,d()}),function(s){s.$;var m=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,m`
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
      </div>
    </div>
    <div class="page-content">
      ${t.images.length>1?m`
      <div class="previewImageBlock">
        <img src="${t.images[1].url}" width="200px" height="200px" class="imageBlur" />
        <img src="${t.images[1].url}" width="200px" height="200px" class="imageNoBlur" />
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
        ${t.genres.length>0&&m`
          <div class="block-title">Genre</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="false"
            data-mousewheel="true" class="swiper-container swiper-init">
            <div class="swiper-wrapper">
              ${t.genres.map(i=>m`
              <div class="swiper-slide" style="width:initial">
                <div class="chip">
                  <div class="chip-label">${i.charAt(0).toUpperCase()+i.slice(1)}</div>
                </div>
              </div>
              `)}
            </div>
          </div>
        </div>
          
          `}



        ${p.topTracks!=null&&p.topTracks.tracks.length>0&&m`
        <div class="block-title">Artist top Tracks</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true"
            data-mousewheel="true" class="swiper-container swiper-init topTracks">
            <div class="swiper-wrapper">
              ${p.topTracks.tracks.map(i=>m`
              <div class="swiper-slide">
                <a href="/track/${i.id}/">
                  ${i.album.images.length>1?m`
                  <img class="elevation-3" src="${i.album.images[1].url}" />
                  `:m`
                  <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                  `}
                  <div class="title">${i.name}</div>
                  <div class="artist">${i.artists.map(e=>m`${e.name} `)}</div>
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
`}}N.id="7c4f0e37de";N.style=`
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
`;function Q(o,{$:c,$f7router:d,$f7:t,$store:r,$on:p,$update:v}){const l=r.getters.spotifyApi.value;let s=o.items;const m=r.getters.userId.value;let i={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(o.items),(!o.items||o.items.length<1)&&t.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){d.back()});const e=b=>{for(var k=0;k<s.length;k++)s[k]===b&&(s.splice(k,1),k--);s.length==0&&d.back(),v()},f=()=>{let b=c('[name="playlistSelection"]');for(let k=0;k<b.length;k++){const u=b[k];c(u).prop("checked",i.select)}i.select=!i.select,v()},$=()=>{i.playlists=[],v(),l.getUserPlaylists().then(function(b){console.log(b),i.playlists=h(b,m),console.log(i.playlists),v()},function(b){console.error(b),t.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})};p("pageInit",(b,k)=>{$()});const S=()=>{i.saveLoading=!0;let b=c('[name="playlistSelection"]:checked'),k=[];b.length==0&&t.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let u=0;u<s.length;u++)k.push(s[u].uri);for(let u=0;u<b.length;u++){const a=b[u].value;l.addTracksToPlaylist(a,k).then(function(n){i.saveCount=i.saveCount+1,i.saveCount==b.length&&(i.saveLoading=!1,i.select=!0,i.saveCount=0,$()),v()},function(n){console.error(n),t.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})}},h=(b,k)=>{let u=b.items,a=[];for(let n=0;n<u.length;n++){if(u[n].collaborative){a.push(u[n]);continue}if(u[n].owner.id==k){a.push(u[n]);continue}}return a};return function(b){b.$;var k=b.$h;return b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme,b.$update,b.$store,k`
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
                <div class="title">Add ${s.length} ${s.length>1?"tracks":"track"} to playlist
                </div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${f}">
                      <i class="icon material-icons-round">${i.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${S}">
                ${i.saveLoading?k`
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
                                    ${s.map(u=>k`
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">

                                                <img src="./assets/icons/library_music_black_48dp.svg" width="35" />

                                            </div>
                                            <div class="item-inner">
                                                <div class="item-title-row">
                                                    <div class="item-title">${u.name}</div>
                                                    <div class="item-after"><i class="icon material-icons-round" @click="${()=>e(u)}">cancel</i></div>
                                                </div>
                                                <div class="item-subtitle">${u.artists.map(a=>k`${a.name} `)}</div>
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
            <div class="block-title">${i.playlists.length>1?"Playlists":"Playlist"}</div>
            <div class="list media-list">
                <ul>
                    ${i.playlists!=null?k`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${i.playlists.map(u=>k`
                            <li>
                                <label class="item-checkbox item-content">
                                    <input type="checkbox" name="playlistSelection" value="${u.id}" />
                                    <i class="icon icon-checkbox"></i>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${u.name}</div>
                                            <div class="item-after">${u.tracks.total} Tracks</div>
                                        </div>
                                        <div class="item-subtitle">${u.owner.display_name}</div>
                                        <div class="item-text">${u.description}</div>
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
`}}Q.id="6902c46a7a";function E(o,{$f7:c,$on:d,$onBeforeMount:t,$onMounted:r,$onBeforeUnmount:p,$onUnmounted:v}){let l="Jimmy",s=25,m=["Tennis","Chess","Football"];const i=()=>{c.dialog.alert("Hello World")};return t(()=>{console.log("onBeforeMount")}),r(()=>{console.log("onMounted")}),p(()=>{console.log("onBeforeUnmount")}),v(()=>{console.log("onUnmounted")}),d("pageMounted",(e,f)=>{console.log("pageMounted",f)}),d("pageInit",(e,f)=>{console.log("pageInit",f)}),d("pageBeforeIn",(e,f)=>{console.log("pageBeforeIn",f)}),d("pageAfterIn",(e,f)=>{console.log("pageAfterIn",f)}),d("pageBeforeOut",(e,f)=>{console.log("pageBeforeOut",f)}),d("pageAfterOut",(e,f)=>{console.log("pageAfterOut",f)}),d("pageBeforeRemove",(e,f)=>{console.log("pageBeforeRemove",f)}),function(e){e.$;var f=e.$h;e.$root,e.$f7;var $=e.$f7route;e.$f7router;var S=e.$theme;return e.$update,e.$store,f`
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
        <a href="#" class="button button-raised" @click=${i}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${l}. I am ${s} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${m.map(h=>f`
          <li>${h}</li>
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
`}}E.id="c5b276e6b0";E.style=`
  p {
    margin: 10px 0;
  }
`;function W(){return function(o){o.$;var c=o.$h;return o.$root,o.$f7,o.$f7route,o.$f7router,o.$theme,o.$update,o.$store,c`
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
`}}W.id="a801fa6dd8";const li={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"};function O(o,{$:c,$f7:d,$update:t,$on:r,$store:p,$f7router:v}){const l=p.getters.spotifyApi.value;let s=!1;var m=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let i=m.exec(navigator.language)[5];console.log(i);const e=o.track,f=e.album;let $,S="play_arrow",h={trackIsSavedLoading:!0};console.log(e);const b=()=>{const g={title:`Statify - ${e.name}`,text:"Look at this track i found!",url:window.location.origin+v.url};try{navigator.share(g)}catch(w){console.log("share error",w)}};r("pageInit",(g,w)=>{const _=I=>{var B=Math.floor(I/1e3%60),T=Math.floor(I/(1e3*60)),T=T<10?"0"+T:T;return B=B<10?"0"+B:B,T+":"+B};h.duration=_(e.duration_ms),t()}),l.containsMySavedTracks([e.id]).then(function(g){h.trackIsSavedLoading=!1,h.trackIsSaved=g[0],t()}),l.getAudioFeaturesForTrack(e.id).then(function(g){h.songAnalytics=g,console.log(g),t()});const k=()=>{v.navigate("/add/playlist/",{props:{items:[e]}})},u=()=>{h.trackIsSavedLoading=!0,t();let g;h.trackIsSaved?g=l.removeFromMySavedTracks:g=l.addToMySavedTracks,g([e.id]).then(function(w){h.trackIsSavedLoading=!1,h.trackIsSaved=!h.trackIsSaved,console.log(h),t()},function(w){console.log(w),h.trackIsSavedLoading=!1,t()})},a=()=>{$=new Audio(e.preview_url),console.log(e),$.addEventListener("loadstart",function(){s=!0,t()}),$.addEventListener("canplaythrough",function(){s=!1,$.play(),t()}),$.addEventListener("ended",function(){S="play_arrow",h.showProgressbar=!1,t()}),$.addEventListener("timeupdate",function(){let g=$.currentTime/$.duration*100;d.progressbar.set(".progressbar",g),t()})},n=()=>{const g=e.available_markets.map(U),w=e.available_markets;let _="",I="";w.includes(i)&&(I=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${i}". \u{1F601}</p></div>`);for(let T=0;T<w.length;T++)_=`${_}<div class="col"><div class="marketItem">${g[T]} ${w[T]}</div></div>`;var B=d.sheet.create({content:`
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
        `});B.open()},y=()=>{$||a(),s||($.paused?(S="pause",h.showProgressbar=!0,t(),$.play()):(S="play_arrow",h.showProgressbar=!1,t(),$.pause()))};return r("pageBeforeOut",(g,w)=>{$&&$.pause()}),function(g){g.$;var w=g.$h;return g.$root,g.$f7,g.$f7route,g.$f7router,g.$theme,g.$update,g.$store,w`
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
                    <a href="#" class="link icon-only" @click="${n}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${b}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${f.images.length>1?w`
            <div class="previewImageBlock">
                <img src="${f.images[1].url}" width="200px" class="imageBlur" />
                <img src="${f.images[1].url}" width="200px" class="imageNoBlur" />
            </div>
            `:w`
            `}
            <div class="contentBlock">
                ${h.showProgressbar&&w`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${e.preview_url&&w`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${s?"button-loading":""}"
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
                            class=" button button-large button-round optionsButtons button-preloader ${h.trackIsSavedLoading?"button-loading":""}"
                            @click=${u}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${h.trackIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>

                    </div>


                </div>

                <div class="block-title">Album</div>
                <div class="list media-list">
                    <ul>
                        <li>
                            <a href="/album/${f.id}/" class="item-link item-content">
                                <div class="item-media">
                                    ${f.images.length>1?w`
                                    <img src="${f.images[1].url}" width="70" />
                                    `:w`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${f.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${f.artists.map(_=>w`
                                        ${_.name} `)}
                                    </div>
                                    <div class="item-text">${f.release_date.substring(0,4)} · ${f.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${h.songAnalytics!=null&&w`
                <div class="block-title">Song analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${h.songAnalytics.danceability}"
                                data-value-text="${(h.songAnalytics.danceability*100).toFixed(0)}%"
                                data-value-text-color="#f44336" data-border-color="#f44336"
                                data-label-text="Danceability score"></div>
                        </div>
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${h.songAnalytics.valence}"
                                data-value-text="${(h.songAnalytics.valence*100).toFixed(0)}%"
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



                ${h.songAnalytics!=null&&w`
                <div class="block-title">Audio analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        ${h.songAnalytics.key>=0&&w`
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${li[h.songAnalytics.key]}</h1>
                                    <p class="no-margin-top">Key</p>
                                </div>
                            </div>
                        </div>
                        `}
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${h.songAnalytics.tempo}</h1>
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
                                    <div class="item-after">${h.duration}</div>
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
`}}O.id="e623cae008";O.style=`
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
`;var oi=[{path:"/",component:P},{path:"/track/:trackId/",async:function({router:o,to:c,resolve:d}){var t=o.app,r=t.store,p=c.params.trackId,v=r.getters.spotifyApi.value;t.preloader.show(),v.getTrack(p).then(function(l){t.preloader.hide(),d({component:O},{props:{track:l}})},function(l){console.log(l),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){o.back()})})}},{path:"/album/:albumId/",async:function({router:o,to:c,resolve:d}){var t=o.app,r=t.store,p=c.params.albumId,v=r.getters.spotifyApi.value;t.preloader.show(),v.getAlbum(p).then(function(l){t.preloader.hide(),d({component:D},{props:{album:l}})},function(l){console.log(l),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){o.back()})})}},{path:"/artist/:artistId/",async:function({router:o,to:c,resolve:d}){var t=o.app,r=t.store,p=c.params.artistId,v=r.getters.spotifyApi.value;t.preloader.show(),v.getArtist(p).then(function(l){t.preloader.hide(),console.log(l),d({component:N},{props:{artist:l}})},function(l){console.log(l),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){o.back()})})}},{path:"/about/",component:H},{path:"/add/playlist",component:Q},{path:"/form/",component:J},{path:"/search/",component:R},{path:"/catalog/",component:V},{path:"/product/:id/",component:G},{path:"/profile/",component:Y},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:E},{path:"(.*)",component:W}];let F={darkMode:!1};const ni=o=>{try{JSON.parse(o)}catch(c){return console.log(c),!1}return!0},X="settings",j=ei({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:o}){return o.products},loginMethode({state:o}){o.loginMethode()},spotifyApi({state:o}){return o.spotifyapi},userId({state:o}){return o.userId}},actions:{addProduct({state:o},c){o.products=[...o.products,c]},setUserId({state:o},c){o.userId=c},addLoginMethod({state:o},c){o.loginMethode=c},addSpotifyApi({state:o},c){o.spotifyapi=c},changeSetting({state:o},c){let d=c.key,t=c.value;F[d]=t;let r=JSON.stringify(F);localStorage.setItem(X,r)},getSetting({state:o},c){let d=localStorage.getItem(X);if(ni(d)&&d!=null){let t=JSON.parse(d);if(t.hasOwnProperty(c))return t[c]}return F[c]}}});function M(o,{$f7:c,$update:d,$f7router:t}){let r="",p="";const v=i=>{r=i.target.value,d()},l=i=>{p=i.target.value,d()},s=i=>{console.log(i)},m=()=>{c.dialog.alert("Username: "+r+"<br/>Password: "+p,()=>{c.loginScreen.close()})};return function(i){i.$;var e=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,e`
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
          <a href="#view-catalog" class="tab-link" @click="${s}">
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
                      <input type="password" name="password" placeholder="Your password" value="${p}" @input="${l}"/>

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
`}}M.id="c653cf2188";function q(o,{$:c,$el:d,$on:t,$f7:r,$update:p,$store:v}){let l=[];t("pageInit",(e,f)=>{});let s=0;r.request({url:"./assets/data/login_faq.json",async:!0,error:function(e){console.log(e),s=s+1,s<5?request(this):m()},success:function(e){try{l=JSON.parse(e)}catch(f){console.log(f),s=s+1,s<5?request(this):m();return}p(),r.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:l.length,observer:!0})}});const m=()=>{console.log(c(".faq-loading").html()),c(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),c(".faq-loading").removeClass("skeleton-text"),c(".faq-loading").removeClass("skeleton-effect-wave")},i=()=>{v.getters.loginMethode};return function(e){e.$;var f=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,f`
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
                    <button @click="${i}"
                        class="col button button-large button-raised button-fill color-green"><i
                            class="icon spotify-icon"></i>Login with Spotify</button>
                    <p><label class="checkbox"><input type="checkbox" /><i class="icon-checkbox"></i></label> Don't show
                        this again.</p>
                </div>
                <div class="block-title faq_title">FAQ</div>
                <div data-space-between="50" class="swiper-container">
                    <div class="swiper-wrapper">
                        ${l.map($=>f`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${$.title}</div>
                                <div class="card-content card-content-padding">${$.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${l.length==0&&f`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}q.id="9f3eb7158e";q.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class ri{constructor(c,d){z(this,"login",()=>{const c="https://accounts.spotify.com/authorize",d="c34980adc6984ebd9418e19f418f10dd",{origin:t}=window.location,r=`${t}/`,p=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played"].toString().replace(",","%20"),v="token";window.location=`${c}?client_id=${d}&redirect_uri=${r}&scope=${p}&response_type=${v}`});z(this,"parseUrlHash",()=>{let d=window.location.hash.substr(1).split("&");const t={};d.forEach(p=>{let v=p.split("="),l=v[0],s=v[1];t[l]=s});let r=t.expires_in;if(r!=null&&!isNaN(r)){let p=parseInt(r),v=new Date;v.setSeconds(p),t.expireOnDate=v.toJSON()}else return null;return t});z(this,"isTokenValid",c=>{try{let d=c.expireOnDate,t=Date.parse(d);return new Date().getTime()<t}catch{return!1}});this.app=c,this.width=d}}let A,C=new ri(ci),x,L=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(A=JSON.parse(localStorage.getItem("tokenMap")),C.isTokenValid(A)?(x=M,L=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?x=q:(A=C.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(A)),x=M,L=!0)):window.location.hash==null||window.location.hash==""?x=q:(A=C.parseUrlHash(),A!=null?(localStorage.setItem("tokenMap",JSON.stringify(A)),x=M,L=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(x=q,L=!1));let K=new ai;L&&K.setAccessToken(A.access_token);j.dispatch("addSpotifyApi",K);j.dispatch("addLoginMethod",C.login);var ci=new ti({name:"Statify",theme:"md",el:"#app",component:x,tokenMap:A,store:j,routes:oi,on:{pageInit:function(){}}});function di(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=di;const vi=()=>{const o=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(o)},ui=()=>"standalone"in window.navigator&&window.navigator.standalone;vi()&&!ui()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));
