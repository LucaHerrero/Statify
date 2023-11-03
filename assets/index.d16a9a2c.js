var ei=Object.defineProperty;var ai=(a,r,d)=>r in a?ei(a,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[r]=d;var q=(a,r,d)=>(ai(a,typeof r!="symbol"?r+"":r,d),d);import{c as V,a as ti,i as si,g as oi,S as li,F as ni}from"./vendor.d81ac2fa.js";const ri=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))i(v);new MutationObserver(v=>{for(const u of v)if(u.type==="childList")for(const n of u.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(v){const u={};return v.integrity&&(u.integrity=v.integrity),v.referrerpolicy&&(u.referrerPolicy=v.referrerpolicy),v.crossorigin==="use-credentials"?u.credentials="include":v.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(v){if(v.ep)return;v.ep=!0;const u=d(v);fetch(v.href,u)}};ri();function D(a,{$on:r,$f7:d,$update:i,$store:v}){let u={};const n=v.getters.spotifyApi.value;let t={};return n.getMe().then(function(l){u=l,console.log(l),v.dispatch("setUser",l),i()},function(l){console.error(l),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),n.getMyTopArtists().then(function(l){t.myTopArtists==null&&(t.myTopArtists=l,console.log("myTopArtists",l),i())},function(l){console.error(l),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),n.getMyTopTracks().then(function(l){t.myTopTracks==null&&(t.myTopTracks=l,console.log("myTopTracks",l),i())},function(l){console.error(l),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),n.getMyRecentlyPlayedTracks().then(function(l){t.myRecentTracks==null&&(t.myRecentTracks=l,console.log("myTopTracks",l),i())},function(l){console.error(l),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(l){l.$;var p=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,p`
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
                    <div class="title-large-text">Hello ${u.display_name}</div>
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

            ${t.myTopTracks!=null&&t.myTopTracks.total>0&&p`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${t.myTopTracks!=null&&t.myTopTracks.total>0&&p`
                        ${t.myTopTracks.items.map(e=>p`
                        <div class="swiper-slide">
                            <a href="/track/${e.id}/">
                                ${e.album.images.length>1?p`
                                <img class="elevation-3" src="${e.album.images[1].url}" />
                                `:p`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${e.name}</div>
                                <div class="artist">${e.artists.map(s=>p`${s.name} `)}</div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}

            ${t.myTopArtists!=null&&t.myTopArtists.total>0&&p`
            <div class="block-title">Your top Artists</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${t.myTopArtists!=null&&t.myTopArtists.total>0&&p`
                        ${t.myTopArtists.items.map(e=>p`

                        <div class="swiper-slide">
                            <a href="/artist/${e.id}/">
                                ${e.images.length>1?p`
                                <img class="elevation-3 round" src="${e.images[1].url}" />
                                `:p`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title text-align-center">${e.name}</div>
                                <div class="artist text-align-center">${e.followers.total.toLocaleString()} Followers
                                </div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}


            ${t.myRecentTracks!=null&&t.myRecentTracks.items.length>0&&p`
            <div class="block-title">Your recent Tracks</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${t.myRecentTracks!=null&&t.myRecentTracks.items.length>0&&p`
                        ${t.myRecentTracks.items.map(e=>p`
                        <div class="swiper-slide">
                            <a href="/track/${e.track.id}/">
                                ${e.track.album.images.length>1?p`
                                <img class="elevation-3" src="${e.track.album.images[1].url}" />
                                `:p`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${e.track.name}</div>
                                <div class="artist">${e.track.artists.map(s=>p`${s.name} `)}</div>
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
`}}D.id="e5cc9ebe47";D.style=`
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
`;function K(){return function(a){a.$;var r=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,r`
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
`}}K.id="b58beefe55";function Y(){return function(a){a.$;var r=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,r`
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
`}}Y.id="9aff48ed76";function C(a,{$:r,$on:d,$f7:i,$store:v,$update:u}){const n=a.arrayKey;let t=a[n][n].items;const l=a.pageMode,p=v.getters.spotifyApi.value,e=m=>m.images&&m.images.length>0?m.images[0].url:m.icons&&m.icons.length>0?m.icons[0].url:"./assets/icons/audiotrack_black_48dp.svg",s=m=>S!=m[n].total;let b=!0,h=!0,S=t.length;const k=()=>{console.log("Loading more items..."),!!b&&(b=!1,p.getCategories({offset:S}).then(m=>{if(!s(m)){h=!1,u();return}let f=m[n].items;t=[...t,...f],b=!0,S=t.length,u()}))};return function(m){m.$;var f=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,f`
  <div class="page" data-name="categories">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        ${l&&f`
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        `}
        <div class="title">Categories</div>
      </div>
    </div>
    <div class="page-content infinite-scroll-content" @infinite=${k}>


      <div class="categoriesContainer">
        ${t.map(g=>f`
        <a href="/category/${g.id}/" class="categoriesItem">
          <img class="elevation-3" src="${e(g)}" />

          <div class=" title">${g.name}</div>
        </a>
        `)}
      </div>
      ${h&&f`
      <div class="preloader infinite-scroll-preloader"></div>
      `}
    </div>
  </div>
`}}C.id="e3443ae6d2";C.style=`
  .categoriesContainer {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;

    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: stretch;
    align-items: stretch;

  }

  .categoriesItem {}

  .categoriesItem {
    max-width: 400px;
    max-height: 400px;
    margin: 10px;
    flex-grow: 1;
  }

  .categoriesItem>img {
    border-radius: 5%;
    object-fit: cover;
    width: 100%;

  }

  .categoriesItem {
    width: 150px;
    text-overflow: ellipsis;
    overflow-y: hidden;
  }

  .categoriesItem>div.title {
    color: var(--f7-block-title-large-text-color);
    font-weight: 500;
  }
`;function Q(a,{$f7route:r,$store:d}){const i=d.getters.products,v=r.params.id;let u;return i.value.forEach(n=>{n.id===v&&(u=n)}),function(n){n.$;var t=n.$h;return n.$root,n.$f7,n.$f7route,n.$f7router,n.$theme,n.$update,n.$store,t`
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
        <div class="title">${u.title}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block-title">About ${u.title}</div>
      <div class="block block-strong">
        ${u.description}
      </div>
    </div>
  </div>
`}}Q.id="268f964dd5";function E(a,{$:r,$on:d,$f7:i,$store:v,$update:u}){let n={};const t=v.getters.spotifyApi.value;d("pageInit",(e,s)=>{v.dispatch("getSetting","darkMode").then(function(b){var h=i.toggle.create({el:"#darkModeToggle",on:{change:function(){l()}}});h.checked!=b&&h.toggle()})});const l=()=>{var e=i.toggle.get("#darkModeToggle");v.dispatch("changeSetting",{key:"darkMode",value:e.checked});const s=r("html");e.checked?s.addClass("theme-dark"):s.removeClass("theme-dark")},p=()=>{i.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})};return t.getMe().then(function(e){n.user=e,u()},function(e){console.error(e),i.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(e){e.$;var s=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,s`
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
                  <label class="toggle" id="darkModeToggle">
                    <input type="checkbox" />
                    <span class="toggle-icon"></span>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>


      ${n.user!=null&&s`

      <div class="block userdatablock1">
        <div class="imageBlock">
          ${n.user.images.length>0?s`
          <img src="${n.user.images[0].url}" width="100" height="100" />
          `:s`
          <img src="/assets/icons/face_black_48dp.svg" id="svgimage" width="100" height="100" />
          `}
        </div>


        <div class="infoBlock">
          <h1>${n.user.display_name}</h1>
          <div class="chip">
            <div class="chip-label">${n.user.product=="premium"?"Premium":"Freemium"}</div>
          </div>
        </div>
      </div>

      `}
      <div class="block">
        <button class="button button-round color-red" @click="${p}">Logout</button>
      </div>
    </div>
  </div>
`}}E.id="37c4cddb32";E.style=`
  .userdatablock1 {
    display: flex;
  }

  .userdatablock1>div.imageBlock>img {
    border-radius: 50%;
  }

  .userdatablock1>div.infoBlock {
    padding-left: 10px;
    max-height: 100px;
  }

  .userdatablock1>div.infoBlock>h1 {
    margin-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;function N(a,{$:r,$f7:d,$on:i,$update:v,$store:u}){let n;i("pageInit",()=>{n=d.searchbar.create({el:".searchbar",customSearch:!0,on:{search(g,o,c){o!=""&&h()},clear(){t={},v()}}}),d.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let t={},l=!1;const p=u.getters.spotifyApi.value;let e={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},s={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const b=g=>{let o;g.path==null?o=g.srcElement.innerText:o=g.path[0].innerText;for(let c in s)s[c].active=!1;for(let c in s)o=="All"&&(s[c].active=!0),o==s[c].name&&(s[c].active=!0);n.query!=""&&h(),v()},h=g=>{let o=n.query;if(s.all.active){S(o,["album","artist","playlist","track"],{limit:3});return}if(s.tracks.active){S(o,["track"],{limit:20});return}if(s.albums.active){S(o,["album"],{limit:20});return}if(s.artists.active){S(o,["artist"],{limit:20});return}if(s.playlists.active){S(o,["playlist"],{limit:20});return}},S=(g,o,c,$)=>{$||(l=!0),v(),p.search(g,o,c).then(function(_){if($)return k(_);l=!1,t=_,console.log(_),v()},function(_){console.error(_),l=!1})},k=g=>{if(g.playlists){let o=t.playlists.items.concat(g.playlists.items);t.playlists.items=o,m=!1,v()}if(g.tracks){let o=t.tracks.items.concat(g.tracks.items);t.tracks.items=o,m=!1,v()}if(g.albums){let o=t.albums.items.concat(g.albums.items);t.albums.items=o,m=!1,v()}if(g.artists){let o=t.artists.items.concat(g.artists.items);t.artists.items=o,m=!1,v()}};let m=!1;const f=g=>{if(m)return;m=!0,v();let o=t[g].items.length;console.log(o),S(n.query,[e[g]],{limit:20,offset:o},!0)};return function(g){g.$;var o=g.$h;return g.$root,g.$f7,g.$f7route,g.$f7router,g.$theme,g.$update,g.$store,o`
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
                        ${Object.keys(s).map(c=>o`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${s[c].active?"button-fill":"button-outline"}"
                                @click="${b}">${s[c].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${l==!0?o`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:o``}

            ${t.tracks!=null?o`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.tracks.items.map(c=>o`
                    <li>
                        <a href="/track/${c.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${c.album.images.length>0?o`
                                <img src="${c.album.images[c.album.images.length-1].url}" class="track-cover" />
                                `:o`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${c.name}</div>
                                </div>
                                <div class="item-subtitle">${c.artists.map($=>o`${$.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.tracks.items.length>2?o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${m?"button-loading":""}"
                    @click=${()=>f("tracks")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:o` `}
            `:o``}

            ${t.albums!=null?o`
            <div class="block-title">Albums</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.albums.items.map(c=>o`
                    <li>
                        <a href="/album/${c.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${c.images.length>0?o`
                                <img src="${c.images[c.images.length-1].url}" class="album-cover" />
                                `:o`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${c.name}</div>
                                </div>
                                <div class="item-subtitle">${c.artists.map($=>o`${$.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.albums.items.length>2?o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${m?"button-loading":""}"
                    @click=${()=>f("albums")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:o` `}
            `:o``}

            ${t.artists!=null?o`
            <div class="block-title">Artists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.artists.items.map(c=>o`
                    <li>
                        <a href="/artist/${c.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${c.images.length>0?o`
                                <img src="${c.images[c.images.length-1].url}" class="artist-cover" />
                                `:o`
                                <img src="./assets/icons/face_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${c.name}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.artists.items.length>2?o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${m?"button-loading":""}"
                    @click=${()=>f("artists")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:o` `}
            `:o``}

            ${t.playlists!=null?o`
            <div class="block-title">Playlists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.playlists.items.map(c=>o`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${c.images.length>0?o`
                                <img src="${c.images[c.images.length-1].url}" class="playlist-cover" />
                                `:o`
                                <img src="./assets/icons/queue_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${c.name}</div>
                                </div>
                                <div class="item-subtitle">${c.owner.display_name}</div>

                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.playlists.items.length>2&&o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${m?"button-loading":""}"
                    @click=${()=>f("playlists")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `}
            `:o``}

        </div>
    </div>
`}}N.id="e61615933f";N.style=`
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
`;function F(a,{$:r,$f7:d,$update:i,$on:v,$store:u,$f7router:n}){const t=u.getters.spotifyApi.value;var l=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let p=l.exec(navigator.language)[5];console.log(p);let e=a.album;console.log(e);let s={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const b=o=>{n.navigate("/add/playlist/",{props:{items:[o]}})},h=()=>{const o={title:`Statify - ${e.name}`,text:"Look at this album i found!",url:window.location.origin+n.url};try{navigator.share(o)}catch(c){console.log("share error",c)}},S=()=>{s.trackIsSavedLoading=!0;let o=[];for(let c=0;c<e.tracks.items.length;c++){let $=e.tracks.items[c];o.push($.id)}s.albumIsSavedLoading=!0,t.containsMySavedAlbums([e.id]).then(function(c){s.albumIsSavedLoading=!1,e.isSaved=c[0],console.log(e),i()}),t.containsMySavedTracks(o).then(function(c){s.trackIsSavedLoading=!1;for(let $=0;$<e.tracks.items.length;$++){let _=e.tracks.items[$];_.isSaved=c[$]}console.log(e.tracks),i()})};S(),v("pageInit",(o,c)=>{const $=y=>{var w=Math.floor(y/1e3%60),I=Math.floor(y/(1e3*60)),I=I<10?"0"+I:I;return w=w<10?"0"+w:w,I+":"+w};let _=0;for(let y=0;y<e.tracks.items.length;y++){let I=e.tracks.items[y].duration_ms;_=_+I}s.duration=$(_),i()}),t.containsMySavedAlbums([e.id]).then(function(o){s.albumIsSavedLoading=!1,s.albumIsSaved=o[0],i()});const k=()=>{n.navigate("/add/playlist/",{props:{items:e.tracks.items}})},m=()=>{s.albumIsSavedLoading=!0,i();let o;o=t.addToMySavedAlbums,o([e.id]).then(function(c){s.albumIsSavedLoading=!1,s.albumIsSaved=!s.albumIsSaved,i()},function(c){console.log(c),s.trackIsSavedLoading=!1,i()})},f=o=>{s.trackIsSavedLoading=!0,i();let c;s.albumIsSaved?c=t.removeFromMySavedTracks:c=t.addToMySavedTracks,c([o.id]).then(function($){s.albumIsSavedLoading=!1,S(),i()},function($){console.log($),s.albumIsSavedLoading=!1,S(),i()})},g=()=>{const o=track.available_markets.map(V),c=track.available_markets;let $="",_="";c.includes(p)&&(_=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${p}". \u{1F601}</p></div>`);for(let w=0;w<c.length;w++)$=`${$}<div class="col"><div class="marketItem">${o[w]} ${c[w]}</div></div>`;d.sheet.create({content:`
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
                ${_}
              <div class="block">
                <div class="row marketRow">
                    
          ${$}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return v("pageBeforeOut",(o,c)=>{}),function(o){o.$;var c=o.$h;return o.$root,o.$f7,o.$f7route,o.$f7router,o.$theme,o.$update,o.$store,c`
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
                    <a href="#" class="link icon-only" @click="${g}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${h}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${e.images.length>1?c`
            <div class="previewImageBlock">
                <img src="${e.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${e.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:c`
            `}
            <div class="contentBlock">
                ${s.showProgressbar}


                <div class="block block-strong no-margin-top optionsBlock">
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${k}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                                class=" button button-large button-round optionsButtons button-preloader ${s.albumIsSavedLoading?"button-loading":""}"
                                @click=${m}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${s.albumIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Beginn Pagecontent -->

                ${e.tracks!=null?c`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${e.tracks.items.map($=>c`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${$.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${e.images.length>0?c`
                                        <img src="${e.images[e.images.length-1].url}" class="track-cover"/>
                                        `:c`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${$.name}</div>
                                            <div class="item-after">

                                                ${$.isSaved?c`<span class="material-icons-round trackHeart">favorite</span>`:c``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${$.artists.map(_=>c`${_.name} `)}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swipeout-actions-left">
                                <a href="#" class="swipeout-overswipe" @click="${()=>f($)}">
                                    <span class="material-icons-round optionButtonIcon">
                                ${$.isSaved?"favorite":"favorite_border"}
                            </span></a>
                            </div>
                            <div class="swipeout-actions-right">
                                <a href="#" class="swipeout-overswipe" @click="${()=>b($)}"><span
                                        class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span></a>

                            </div>
                        </li>
                        `)}
                    </ul>
                </div>
                `:c``}


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
                                    <div class="item-after">${s.duration}</div>
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
                <!-- End of Pagecontent -->
            </div>
        </div>
    </div>
`}}F.id="34669e48c8";F.style=`
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
`;function O(a,{$store:r,$update:d}){console.log("artistView",a);const i=a.artist,v=r.getters.spotifyApi.value;let u={},t=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(navigator.language)[5];return u.topTracks==null&&v.getArtistTopTracks(i.id,t).then(function(l){console.log("topTracks",l),u.topTracks=l,d()}),function(l){l.$;var p=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,p`
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
      </div>
    </div>
    <div class="page-content">
      ${i.images.length>1?p`
      <div class="previewImageBlock">
        <img src="${i.images[1].url}" width="200px" height="200px" class="imageBlur" />
        <img src="${i.images[1].url}" width="200px" height="200px" class="imageNoBlur" />
      </div>
      `:p`
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
        ${i.genres.length>0&&p`
          <div class="block-title">Genre</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="false"
            data-mousewheel="true" class="swiper-container swiper-init">
            <div class="swiper-wrapper">
              ${i.genres.map(e=>p`
              <div class="swiper-slide" style="width:initial">
                <div class="chip">
                  <div class="chip-label">${e.charAt(0).toUpperCase()+e.slice(1)}</div>
                </div>
              </div>
              `)}
            </div>
          </div>
        </div>
          
          `}



        ${u.topTracks!=null&&u.topTracks.tracks.length>0&&p`
        <div class="block-title">Artist top Tracks</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true"
            data-mousewheel="true" class="swiper-container swiper-init topTracks">
            <div class="swiper-wrapper">
              ${u.topTracks.tracks.map(e=>p`
              <div class="swiper-slide">
                <a href="/track/${e.id}/">
                  ${e.album.images.length>1?p`
                  <img class="elevation-3" src="${e.album.images[1].url}" />
                  `:p`
                  <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                  `}
                  <div class="title">${e.name}</div>
                  <div class="artist">${e.artists.map(s=>p`${s.name} `)}</div>
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
`}}O.id="d01dc146d9";O.style=`
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
`;function j(a,{$:r,$f7:d,$f7router:i,$store:v,$update:u}){v.getters.spotifyApi.value;const n=a.analytics,t=[{percent:n.danceability,percentString:Math.round(n.danceability*100)+"%",name:"Danceability"},{percent:n.energy,percentString:Math.round(n.energy*100)+"%",name:"Energy"},{percent:n.speechiness,percentString:Math.round(n.speechiness*100)+"%",name:"Speechiness"}];return console.error(a.analytics),function(l){l.$;var p=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,p`
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
            <div class="block">
                <div class="row">
                    ${t.map(e=>p`

                    <div class="col-50 text-align-center valueItem">
                        <div class="gauge gauge-init"
                             data-type="semicircle"
                             data-value="${e.percent}"
                             data-value-text="${e.percentString}"
                             data-value-text-color="#e91e63"
                             data-border-color="#e91e63"
                             data-label-text="${e.name}"
                        ></div>
                    </div>
                    `)}
                </div>
            </div>
        </div>
    </div>
`}}j.id="d420a1ef97";j.style=`
    .valueItem {
        margin-bottom: 25px;
    }
`;function W(a,{$:r,$f7router:d,$f7:i,$store:v,$on:u,$update:n}){const t=v.getters.spotifyApi.value;let l=a.items;const p=v.getters.user.value.id;console.log(p);let e={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(a.items),(!a.items||a.items.length<1)&&i.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){d.back()});const s=m=>{for(var f=0;f<l.length;f++)l[f]===m&&(l.splice(f,1),f--);l.length==0&&d.back(),n()},b=()=>{let m=r('[name="playlistSelection"]');for(let f=0;f<m.length;f++){const g=m[f];r(g).prop("checked",e.select)}e.select=!e.select,n()},h=()=>{e.playlists=[],n(),t.getUserPlaylists().then(function(m){console.log(m),e.playlists=k(m,p),console.log(e.playlists),n()},function(m){console.error(m),i.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})};u("pageInit",(m,f)=>{h()});const S=()=>{e.saveLoading=!0;let m=r('[name="playlistSelection"]:checked'),f=[];m.length==0&&i.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let g=0;g<l.length;g++)f.push(l[g].uri);for(let g=0;g<m.length;g++){const o=m[g].value;t.addTracksToPlaylist(o,f).then(function(c){e.saveCount=e.saveCount+1,e.saveCount==m.length&&(e.saveLoading=!1,e.select=!0,e.saveCount=0,h()),n()},function(c){console.error(c),i.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})}},k=(m,f)=>{let g=m.items,o=[];for(let c=0;c<g.length;c++){if(g[c].collaborative){o.push(g[c]);continue}if(g[c].owner.id==f){o.push(g[c]);continue}}return o};return function(m){m.$;var f=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,f`
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
                <div class="title">Add ${l.length} ${l.length>1?"tracks":"track"} to playlist
                </div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${b}">
                      <i class="icon material-icons-round">${e.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${S}">
                ${e.saveLoading?f`
                <div class="text-align-center">
                    <div class="preloader"></div>
                </div>

                `:f`

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
                                    ${l.map(g=>f`
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">

                                                <img src="./assets/icons/library_music_black_48dp.svg" width="35" />

                                            </div>
                                            <div class="item-inner">
                                                <div class="item-title-row">
                                                    <div class="item-title">${g.name}</div>
                                                    <div class="item-after"><i class="icon material-icons-round" @click="${()=>s(g)}">cancel</i></div>
                                                </div>
                                                <div class="item-subtitle">${g.artists.map(o=>f`${o.name} `)}</div>
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
            <div class="block-title">${e.playlists.length>1?"Playlists":"Playlist"}</div>
            <div class="list media-list">
                <ul>
                    ${e.playlists!=null?f`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${e.playlists.map(g=>f`
                            <li>
                                <label class="item-checkbox item-content">
                                    <input type="checkbox" name="playlistSelection" value="${g.id}" />
                                    <i class="icon icon-checkbox"></i>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${g.name}</div>
                                            <div class="item-after">${g.tracks.total} Tracks</div>
                                        </div>
                                        <div class="item-subtitle">${g.owner.display_name}</div>
                                        <div class="item-text">${g.description}</div>
                                    </div>
                                </label>
                            </li>
                            `)}
                        </ul>
                    </div>

                    `:f`
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
`}}W.id="f56a4ee5da";function U(a,{$f7:r,$on:d,$onBeforeMount:i,$onMounted:v,$onBeforeUnmount:u,$onUnmounted:n}){let t="Jimmy",l=25,p=["Tennis","Chess","Football"];const e=()=>{r.dialog.alert("Hello World")};return i(()=>{console.log("onBeforeMount")}),v(()=>{console.log("onMounted")}),u(()=>{console.log("onBeforeUnmount")}),n(()=>{console.log("onUnmounted")}),d("pageMounted",(s,b)=>{console.log("pageMounted",b)}),d("pageInit",(s,b)=>{console.log("pageInit",b)}),d("pageBeforeIn",(s,b)=>{console.log("pageBeforeIn",b)}),d("pageAfterIn",(s,b)=>{console.log("pageAfterIn",b)}),d("pageBeforeOut",(s,b)=>{console.log("pageBeforeOut",b)}),d("pageAfterOut",(s,b)=>{console.log("pageAfterOut",b)}),d("pageBeforeRemove",(s,b)=>{console.log("pageBeforeRemove",b)}),function(s){s.$;var b=s.$h;s.$root,s.$f7;var h=s.$f7route;s.$f7router;var S=s.$theme;return s.$update,s.$store,b`
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
        <a href="#" class="button button-raised" @click=${e}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${t}. I am ${l} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${p.map(k=>b`
          <li>${k}</li>
          `)}
        </ul>
      </div>
      <div class="block-title">Extended Context</div>
      <div class="block block-strong">
        <p>Component page context as Template7 page context is also extended with some additional variables.</p>
        <h4>$f7route</h4>
        <p>Contains properties of the current route:</p>
        <ul style="padding-left:25px">
          <li><b>$f7route.url</b>: ${h.url}</li>
          <li><b>$f7route.path</b>: ${h.path}</li>
          <li><b>$f7route.params</b>: ${JSON.stringify(h.params)}</li>
          <li><b>$f7route.hash</b>: ${h.hash}</li>
          <li><b>$f7route.query</b>: ${JSON.stringify(h.query)}</li>
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
`}}U.id="0b8a00ac44";U.style=`
  p {
    margin: 10px 0;
  }
`;function X(){return function(a){a.$;var r=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,r`
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
`}}X.id="402c3a51e3";const ci={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"};function G(a,{$:r,$f7:d,$update:i,$on:v,$store:u,$f7router:n}){const t=u.getters.spotifyApi.value;let l=!1;var p=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let e=p.exec(navigator.language)[5];console.log(e);const s=a.track,b=s.album;let h,S="play_arrow",k={trackIsSavedLoading:!0};console.log(s);const m=()=>{const y={title:`Statify - ${s.name}`,text:"Look at this track i found!",url:window.location.origin+n.url};try{navigator.share(y)}catch(w){console.log("share error",w)}};v("pageInit",(y,w)=>{const I=M=>{var T=Math.floor(M/1e3%60),A=Math.floor(M/(1e3*60)),A=A<10?"0"+A:A;return T=T<10?"0"+T:T,A+":"+T};k.duration=I(s.duration_ms),i()}),t.containsMySavedTracks([s.id]).then(function(y){k.trackIsSavedLoading=!1,k.trackIsSaved=y[0],i()}),t.getAudioFeaturesForTrack(s.id).then(function(y){k.songAnalytics=y,console.log(y),i()});const f=()=>{n.navigate("/add/playlist/",{props:{items:[s]}})},g=()=>{k.trackIsSavedLoading=!0,i();let y;k.trackIsSaved?y=t.removeFromMySavedTracks:y=t.addToMySavedTracks,y([s.id]).then(function(w){k.trackIsSavedLoading=!1,k.trackIsSaved=!k.trackIsSaved,console.log(k),i()},function(w){console.log(w),k.trackIsSavedLoading=!1,i()})},o=()=>{h=new Audio(s.preview_url),console.log(s),h.addEventListener("loadstart",function(){l=!0,i()}),h.addEventListener("canplaythrough",function(){l=!1,h.play(),i()}),h.addEventListener("ended",function(){S="play_arrow",k.showProgressbar=!1,i()}),h.addEventListener("timeupdate",function(){let y=h.currentTime/h.duration*100;d.progressbar.set(".progressbar",y),i()})},c=()=>{const y=s.available_markets.map(V),w=s.available_markets;let I="",M="";w.includes(e)&&(M=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${e}". \u{1F601}</p></div>`);for(let A=0;A<w.length;A++)I=`${I}<div class="col"><div class="marketItem">${y[A]} ${w[A]}</div></div>`;var T=d.sheet.create({content:`
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
                ${M}
              <div class="block">
                <div class="row marketRow">
                    
          ${I}

        </div>
              </div>
            </div>
          </div>
        `});T.open()},$=()=>{h||o(),l||(h.paused?(S="pause",k.showProgressbar=!0,i(),h.play()):(S="play_arrow",k.showProgressbar=!1,i(),h.pause()))},_=y=>Math.round(y);return v("pageBeforeOut",(y,w)=>{h&&h.pause()}),function(y){y.$;var w=y.$h;return y.$root,y.$f7,y.$f7route,y.$f7router,y.$theme,y.$update,y.$store,w`
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
                <div class="title">${s.name}</div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${c}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${m}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${b.images.length>1?w`
            <div class="previewImageBlock">
                <img src="${b.images[1].url}" width="200px" class="imageBlur" />
                <img src="${b.images[1].url}" width="200px" class="imageNoBlur" />
            </div>
            `:w`
            `}
            <div class="contentBlock">
                ${k.showProgressbar&&w`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${s.preview_url&&w`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${l?"button-loading":""}"
                        @click=${$}>
                        <span class="preloader"></span>
                        <span></span>
                        <span class="material-icons-round optionButtonIcon">
                            ${S}
                        </span>
                    </button>
                    `}
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${f}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                            class=" button button-large button-round optionsButtons button-preloader ${k.trackIsSavedLoading?"button-loading":""}"
                            @click=${g}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${k.trackIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>

                    </div>


                </div>

                <div class="block-title">Album</div>
                <div class="list media-list">
                    <ul>
                        <li>
                            <a href="/album/${b.id}/" class="item-link item-content">
                                <div class="item-media">
                                    ${b.images.length>1?w`
                                    <img src="${b.images[1].url}" width="70" />
                                    `:w`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${b.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${b.artists.map(I=>w`
                                        ${I.name} `)}
                                    </div>
                                    <div class="item-text">${b.release_date.substring(0,4)} · ${b.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${k.songAnalytics!=null&&w`
                <div class="block-title">Song analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${k.songAnalytics.danceability}"
                                data-value-text="${(k.songAnalytics.danceability*100).toFixed(0)}%"
                                data-value-text-color="#f44336" data-border-color="#f44336"
                                data-label-text="Danceability score"></div>
                        </div>
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${k.songAnalytics.valence}"
                                data-value-text="${(k.songAnalytics.valence*100).toFixed(0)}%"
                                data-value-text-color="#e91e63" data-border-color="#e91e63"
                                data-label-text="Happy Song"></div>
                        </div>
                    </div>
                </div>
                <div class="list media-list no-margin-top no-hairlines">
                    <ul>
                        <li>
                            <a href="/track/${s.id}/analytics/" class="item-link item-content">
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



                ${k.songAnalytics!=null&&w`
                <div class="block-title">Audio analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        ${k.songAnalytics.key>=0&&w`
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">
                                        ${ci[k.songAnalytics.key]}</h1>
                                    <p class="no-margin-top">Key</p>
                                </div>
                            </div>
                        </div>
                        `}
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">
                                        ${_(k.songAnalytics.tempo)}</h1>
                                    <p class="no-margin-top">BPM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list media-list no-margin-top no-hairlines">
                    <ul>
                        <li>
                            <a href="/track/${s.id}/analytics/" class="item-link item-content">
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






                ${s.artists!=null?w`
                <div class="block-title">Artists</div>
                <div class="list media-list margin-bottom-half">
                    <ul>
                        ${s.artists.map(I=>w`
                        <li>
                            <a href="/artist/${I.id}/" class="item-link item-content">
                                <div class="item-media">
                                    <i class="icon material-icons-round">face</i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${I.name}</div>
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
                                    <div class="item-after">${k.duration}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="${s.external_urls.spotify}" class="item-link item-content external">
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
`}}G.id="ed45c08933";G.style=`
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
`;let di=[{path:"/",component:D},{path:"/track/:trackId/",async:function({router:a,to:r,resolve:d}){let i=a.app,v=i.store,u=r.params.trackId,n=v.getters.spotifyApi.value;i.preloader.show(),n.getTrack(u).then(function(t){i.preloader.hide(),d({component:G},{props:{track:t}})},function(t){console.log(t),i.preloader.hide(),i.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/category/:categoryId/",async:function({router:a,to:r,resolve:d}){let i=a.app,v=i.store,u=r.params.categoryId,n=v.getters.spotifyApi.value;i.preloader.show(),n.getCategoryPlaylists(u).then(function(t){i.preloader.hide(),d({component:C},{props:{playlists:t,pageMode:!0,arrayKey:"playlists"}})},function(t){console.log(t),i.preloader.hide(),i.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/track/:trackId/analytics/",async:function({router:a,to:r,resolve:d}){let i=a.app,v=i.store,u=r.params.trackId,n=v.getters.spotifyApi.value;i.preloader.show(),n.getAudioFeaturesForTrack(u).then(function(t){i.preloader.hide(),d({component:j},{props:{analytics:t}})},function(t){console.log(t),i.preloader.hide(),i.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/album/:albumId/",async:function({router:a,to:r,resolve:d}){let i=a.app,v=i.store,u=r.params.albumId,n=v.getters.spotifyApi.value;i.preloader.show(),n.getAlbum(u).then(function(t){i.preloader.hide(),d({component:F},{props:{album:t}})},function(t){console.log(t),i.preloader.hide(),i.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/artist/:artistId/",async:function({router:a,to:r,resolve:d}){let i=a.app,v=i.store,u=r.params.artistId,n=v.getters.spotifyApi.value;i.preloader.show(),n.getArtist(u).then(function(t){i.preloader.hide(),console.log(t),d({component:O},{props:{artist:t}})},function(t){console.log(t),i.preloader.hide(),i.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/about/",component:K},{path:"/add/playlist",component:W},{path:"/form/",component:Y},{path:"/search/",component:N},{path:"/categories/",async:function({router:a,to:r,resolve:d}){let i=a.app,u=i.store.getters.spotifyApi.value;i.preloader.show(),u.getCategories().then(function(n){i.preloader.hide(),d({component:C},{props:{categories:n,arrayKey:"categories"}})},function(n){console.log(n),i.preloader.hide(),i.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/product/:id/",component:Q},{path:"/profile/",component:E},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:U},{path:"(.*)",component:X}],H={darkMode:!1};const vi=a=>{try{JSON.parse(a)}catch(r){return console.log(r),!1}return!0},Z="settings",J=ti({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:a}){return a.products},loginMethode({state:a}){a.loginMethode()},spotifyApi({state:a}){return a.spotifyapi},user({state:a}){return a.user}},actions:{addProduct({state:a},r){a.products=[...a.products,r]},setUser({state:a},r){a.user=r},addLoginMethod({state:a},r){a.loginMethode=r},addSpotifyApi({state:a},r){a.spotifyapi=r},changeSetting({state:a},r){let d=r.key,i=r.value;H[d]=i;let v=JSON.stringify(H);localStorage.setItem(Z,v)},getSetting({state:a},r){let d=localStorage.getItem(Z);if(vi(d)&&d!=null){let i=JSON.parse(d);if(i.hasOwnProperty(r))return i[r]}return H[r]}}});function P(a,{$f7:r,$update:d,$f7router:i}){let v="",u="";const n=p=>{v=p.target.value,d()},t=p=>{u=p.target.value,d()},l=()=>{r.dialog.alert("Username: "+v+"<br/>Password: "+u,()=>{r.loginScreen.close()})};return function(p){p.$;var e=p.$h;return p.$root,p.$f7,p.$f7route,p.$f7router,p.$theme,p.$update,p.$store,e`
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
          <a href="#view-categories" class="tab-link">
            <i class="icon f7-icons if-not-md">square_list_fill</i>
            <i class="icon material-icons if-md">view_list</i>
            <span class="tabbar-label">Categories</span>
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
      <div id="view-home" class="view view-main view-init tab tab-active" data-url="/" data-browser-history="true"
        data-browser-history-separator="">
        <!-- Home page will be loaded here dynamically from / route -->
      </div>

      <!-- Catalog View -->
      <div id="view-categories" class="view view-init tab" data-name="categories" data-url="/categories/">
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
                      <input type="text" name="username" placeholder="Your username" value="${v}"
                        @input="${n}" />

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${u}"
                        @input="${t}" />

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${l}">Sign In</a>

                </li>
              </ul>
              <div class="block-footer">Some text about login information.<br />Click "Sign In" to close Login Screen
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
`}}P.id="e9f510fed7";function z(a,{$:r,$el:d,$on:i,$f7:v,$update:u,$store:n}){let t=[];i("pageInit",(s,b)=>{});let l=0;v.request({url:"./assets/data/login_faq.json",async:!0,error:function(s){console.log(s),l=l+1,l<5?request(this):p()},success:function(s){try{t=JSON.parse(s)}catch(b){console.log(b),l=l+1,l<5?request(this):p();return}u(),v.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:t.length,observer:!0})}});const p=()=>{console.log(r(".faq-loading").html()),r(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),r(".faq-loading").removeClass("skeleton-text"),r(".faq-loading").removeClass("skeleton-effect-wave")},e=()=>{n.getters.loginMethode};return function(s){s.$;var b=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,b`
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
                    <button @click="${e}"
                        class="col button button-large button-raised button-fill color-green"><i
                            class="icon spotify-icon"></i>Login with Spotify</button>
                    <p><label class="checkbox"><input type="checkbox" /><i class="icon-checkbox"></i></label> Don't show
                        this again.</p>
                </div>
                <div class="block-title faq_title">FAQ</div>
                <div data-space-between="50" class="swiper-container">
                    <div class="swiper-wrapper">
                        ${t.map(h=>b`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${h.title}</div>
                                <div class="card-content card-content-padding">${h.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${t.length==0&&b`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}z.id="00dfc3fee7";z.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class pi{constructor(r,d){q(this,"login",()=>{const r="https://accounts.spotify.com/authorize",d="c34980adc6984ebd9418e19f418f10dd",{origin:i}=window.location,v=`${i}/`,u=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played","user-read-private"].toString().replace(",","%20"),n="token";window.location=`${r}?client_id=${d}&redirect_uri=${v}&scope=${u}&response_type=${n}`});q(this,"parseUrlHash",()=>{let d=window.location.hash.substr(1).split("&");const i={};d.forEach(u=>{let n=u.split("="),t=n[0],l=n[1];i[t]=l});let v=i.expires_in;if(v!=null&&!isNaN(v)){let u=parseInt(v),n=new Date;n.setSeconds(u),i.expireOnDate=n.toJSON()}else return null;return i});q(this,"isTokenValid",r=>{try{let d=r.expireOnDate,i=Date.parse(d);return new Date().getTime()<i}catch{return!1}});this.app=r,this.width=d}}const ui={apiKey:"AIzaSyDfmwSR-jHCyuzp5iacmdFpil1XGMXdg6o",authDomain:"statify-648ab.firebaseapp.com",projectId:"statify-648ab",storageBucket:"statify-648ab.appspot.com",messagingSenderId:"406057587813",appId:"1:406057587813:web:4480c991b53940f788628c",measurementId:"G-3J6GJC3TDN"},mi=si(ui);oi(mi);let B,R=new pi(gi),x,L=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(B=JSON.parse(localStorage.getItem("tokenMap")),R.isTokenValid(B)?(x=P,L=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?x=z:(B=R.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(B)),x=P,L=!0)):window.location.hash==null||window.location.hash==""?x=z:(B=R.parseUrlHash(),B!=null?(localStorage.setItem("tokenMap",JSON.stringify(B)),x=P,L=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(x=z,L=!1));let ii=new li;L&&ii.setAccessToken(B.access_token);J.dispatch("addSpotifyApi",ii);J.dispatch("addLoginMethod",R.login);var gi=new ni({name:"Statify",theme:"md",el:"#app",component:x,tokenMap:B,store:J,routes:di,on:{pageInit:function(){}}});function bi(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=bi;const fi=()=>{const a=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(a)},hi=()=>"standalone"in window.navigator&&window.navigator.standalone;fi()&&!hi()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));window.onSpotifyWebPlaybackSDKReady=()=>{const a="BQBZ8b9plWq3pGSSTCDNyWvotQpISVUZ7dPoA0wBGPYUZiSIJzW2dSKozBjBEy1oo9aUYqaGbRq-zSLjyjHtJ-bcks6QG4fx41pai5fiPMRIyw1AD16ehxGJnwsf61GFuRrunoLuQPpncI5YGvZA3RNlmMfEKdy9h4t1Mam3EWrE9GyKQmXqiKw",r=new Spotify.Player({name:"Statify",getOAuthToken:d=>{d(a)},volume:.5});r.addListener("ready",({device_id:d})=>{console.log("Ready with Device ID",d)}),r.addListener("not_ready",({device_id:d})=>{console.log("Device ID has gone offline",d)}),r.addListener("initialization_error",({message:d})=>{console.error(d)}),r.addListener("authentication_error",({message:d})=>{console.error(d)}),r.addListener("account_error",({message:d})=>{console.error(d)}),document.getElementById("togglePlay").onclick=function(){r.togglePlay()},r.connect()};
