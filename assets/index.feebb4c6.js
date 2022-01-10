var Z=Object.defineProperty;var ii=(s,n,d)=>n in s?Z(s,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[n]=d;var z=(s,n,d)=>(ii(s,typeof n!="symbol"?n+"":n,d),d);import{c as H,a as ei,S as ai,F as ti}from"./vendor.4b7dcee7.js";const si=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&t(v)}).observe(document,{childList:!0,subtree:!0});function d(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(c){if(c.ep)return;c.ep=!0;const u=d(c);fetch(c.href,u)}};si();function C(s,{$on:n,$f7:d,$update:t,$store:c}){let u={};const v=c.getters.spotifyApi.value;let l={};return v.getMe().then(function(r){u=r,console.log(r),c.dispatch("setUser",r),t()},function(r){console.error(r),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopArtists().then(function(r){l.myTopArtists==null&&(l.myTopArtists=r,console.log("myTopArtists",r),t())},function(r){console.error(r),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopTracks().then(function(r){l.myTopTracks==null&&(l.myTopTracks=r,console.log("myTopTracks",r),t())},function(r){console.error(r),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyRecentlyPlayedTracks().then(function(r){l.myRecentTracks==null&&(l.myRecentTracks=r,console.log("myTopTracks",r),t())},function(r){console.error(r),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(r){r.$;var m=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,m`
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
`}}C.id="fc981e3976";C.style=`
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
`;function G(){return function(s){s.$;var n=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,n`
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
`}}G.id="a8214a953b";function J(){return function(s){s.$;var n=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,n`
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
`}}J.id="680c0365b7";function V(s,{$store:n}){const d=n.getters.products,t=()=>{n.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(c){c.$;var u=c.$h;return c.$root,c.$f7,c.$f7route,c.$f7router,c.$theme,c.$update,c.$store,u`
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
          ${d.value.map(v=>u`
            <li><a href="/product/${v.id}/">${v.title}</a></li>
          `)}
        </ul>
      </div>
      ${d.value.length===3&&u`
        <div class="block">
          <button class="button button-fill" @click=${t}>Add Product</Button>
        </div>
      `}
    </div>
  </div>
`}}V.id="937033598b";function Y(s,{$f7route:n,$store:d}){const t=d.getters.products,c=n.params.id;let u;return t.value.forEach(v=>{v.id===c&&(u=v)}),function(v){v.$;var l=v.$h;return v.$root,v.$f7,v.$f7route,v.$f7router,v.$theme,v.$update,v.$store,l`
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
`}}Y.id="698bd09ff1";function R(s,{$:n,$on:d,$f7:t,$store:c,$update:u}){let v={};const l=c.getters.spotifyApi.value;d("pageInit",(i,e)=>{c.dispatch("getSetting","darkMode").then(function(b){var k=t.toggle.create({el:"#darkModeToggle",on:{change:function(){r()}}});k.checked!=b&&k.toggle()})});const r=()=>{var i=t.toggle.get("#darkModeToggle");c.dispatch("changeSetting",{key:"darkMode",value:i.checked});const e=n("html");i.checked?e.addClass("theme-dark"):e.removeClass("theme-dark")},m=()=>{t.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})};return l.getMe().then(function(i){v.user=i,u()},function(i){console.error(i),t.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(i){i.$;var e=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,e`
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


      ${v.user!=null&&e`

      <div class="block userdatablock1">
        <div class="imageBlock">
          ${v.user.images.length>0?e`
          <img src="${v.user.images[0].url}" width="100" height="100" />
          `:e`
          <img src="./assets/icons/face_black_48dp.svg" width="100" height="100" />
          `}
        </div>


        <div class="infoBlock">
          <h1>${v.user.display_name}</h1>
          <div class="chip">
            <div class="chip-label">${v.user.product=="premium"?"Premium":"Freemium"}</div>
          </div>
        </div>
      </div>

      `}
      <div class="block">
        <button class="button button-round color-red" @click="${m}">Logout</button>
      </div>
    </div>
  </div>
`}}R.id="cffdefd591";R.style=`
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
`;function D(s,{$:n,$f7:d,$on:t,$update:c,$store:u}){let v;t("pageInit",()=>{v=d.searchbar.create({el:".searchbar",customSearch:!0,on:{search(p,a,o){a!=""&&k()},clear(){l={},c()}}}),d.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let l={},r=!1;const m=u.getters.spotifyApi.value;let i={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},e={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const b=p=>{let a;p.path==null?a=p.srcElement.innerText:a=p.path[0].innerText;for(let o in e)e[o].active=!1;for(let o in e)a=="All"&&(e[o].active=!0),a==e[o].name&&(e[o].active=!0);v.query!=""&&k(),c()},k=p=>{let a=v.query;if(e.all.active){_(a,["album","artist","playlist","track"],{limit:3});return}if(e.tracks.active){_(a,["track"],{limit:20});return}if(e.albums.active){_(a,["album"],{limit:20});return}if(e.artists.active){_(a,["artist"],{limit:20});return}if(e.playlists.active){_(a,["playlist"],{limit:20});return}},_=(p,a,o,$)=>{$||(r=!0),c(),m.search(p,a,o).then(function(g){if($)return h(g);r=!1,l=g,console.log(g),c()},function(g){console.error(g),r=!1})},h=p=>{if(p.playlists){let a=l.playlists.items.concat(p.playlists.items);l.playlists.items=a,f=!1,c()}if(p.tracks){let a=l.tracks.items.concat(p.tracks.items);l.tracks.items=a,f=!1,c()}if(p.albums){let a=l.albums.items.concat(p.albums.items);l.albums.items=a,f=!1,c()}if(p.artists){let a=l.artists.items.concat(p.artists.items);l.artists.items=a,f=!1,c()}};let f=!1;const w=p=>{if(f)return;f=!0,c();let a=l[p].items.length;console.log(a),_(v.query,[i[p]],{limit:20,offset:a},!0)};return function(p){p.$;var a=p.$h;return p.$root,p.$f7,p.$f7route,p.$f7router,p.$theme,p.$update,p.$store,a`
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
                        ${Object.keys(e).map(o=>a`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${e[o].active?"button-fill":"button-outline"}"
                                @click="${b}">${e[o].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${r==!0?a`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:a``}

            ${l.tracks!=null?a`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${l.tracks.items.map(o=>a`
                    <li>
                        <a href="/track/${o.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${o.album.images.length>0?a`
                                <img src="${o.album.images[o.album.images.length-1].url}" class="track-cover" />
                                `:a`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${o.name}</div>
                                </div>
                                <div class="item-subtitle">${o.artists.map($=>a`${$.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.tracks.items.length>2?a`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${f?"button-loading":""}"
                    @click=${()=>w("tracks")}>
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
                    ${l.albums.items.map(o=>a`
                    <li>
                        <a href="/album/${o.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${o.images.length>0?a`
                                <img src="${o.images[o.images.length-1].url}" class="album-cover" />
                                `:a`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${o.name}</div>
                                </div>
                                <div class="item-subtitle">${o.artists.map($=>a`${$.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.albums.items.length>2?a`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${f?"button-loading":""}"
                        @click=${()=>w("albums")}>
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
                    ${l.artists.items.map(o=>a`
                    <li>
                        <a href="/artist/${o.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${o.images.length>0?a`
                                <img src="${o.images[o.images.length-1].url}" class="artist-cover" />
                                `:a`
                                <img src="./assets/icons/face_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${o.name}</div>
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
                        class="button button-small button-outline button-round button-preloader button-load-more ${f?"button-loading":""}"
                        @click=${()=>w("artists")}>
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
                    ${l.playlists.items.map(o=>a`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${o.images.length>0?a`
                                <img src="${o.images[o.images.length-1].url}" class="playlist-cover" />
                                `:a`
                                <img src="./assets/icons/queue_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${o.name}</div>
                                </div>
                                <div class="item-subtitle">${o.owner.display_name}</div>

                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${l.playlists.items.length>2&&a`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${f?"button-loading":""}"
                        @click=${()=>w("playlists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `}
            `:a``}

        </div>
    </div>
`}}D.id="03ca97e58a";D.style=`
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
`;function E(s,{$:n,$f7:d,$update:t,$on:c,$store:u,$f7router:v}){const l=u.getters.spotifyApi.value;var r=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let m=r.exec(navigator.language)[5];console.log(m);let i=s.album;console.log(i);let e={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const b=a=>{v.navigate("/add/playlist/",{props:{items:[a]}})},k=()=>{const a={title:`Statify - ${i.name}`,text:"Look at this album i found!",url:window.location.origin+v.url};try{navigator.share(a)}catch(o){console.log("share error",o)}},_=()=>{e.trackIsSavedLoading=!0;let a=[];for(let o=0;o<i.tracks.items.length;o++){let $=i.tracks.items[o];a.push($.id)}e.albumIsSavedLoading=!0,l.containsMySavedAlbums([i.id]).then(function(o){e.albumIsSavedLoading=!1,i.isSaved=o[0],console.log(i),t()}),l.containsMySavedTracks(a).then(function(o){e.trackIsSavedLoading=!1;for(let $=0;$<i.tracks.items.length;$++){let g=i.tracks.items[$];g.isSaved=o[$]}console.log(i.tracks),t()})};_(),c("pageInit",(a,o)=>{const $=y=>{var S=Math.floor(y/1e3%60),I=Math.floor(y/(1e3*60)),I=I<10?"0"+I:I;return S=S<10?"0"+S:S,I+":"+S};let g=0;for(let y=0;y<i.tracks.items.length;y++){let I=i.tracks.items[y].duration_ms;g=g+I}e.duration=$(g),t()}),l.containsMySavedAlbums([i.id]).then(function(a){e.albumIsSavedLoading=!1,e.albumIsSaved=a[0],t()});const h=()=>{v.navigate("/add/playlist/",{props:{items:i.tracks.items}})},f=()=>{e.albumIsSavedLoading=!0,t();let a;a=l.addToMySavedAlbums,a([i.id]).then(function(o){e.albumIsSavedLoading=!1,e.albumIsSaved=!e.albumIsSaved,t()},function(o){console.log(o),e.trackIsSavedLoading=!1,t()})},w=a=>{e.trackIsSavedLoading=!0,t();let o;e.albumIsSaved?o=l.removeFromMySavedTracks:o=l.addToMySavedTracks,o([a.id]).then(function($){e.albumIsSavedLoading=!1,_(),t()},function($){console.log($),e.albumIsSavedLoading=!1,_(),t()})},p=()=>{const a=track.available_markets.map(H),o=track.available_markets;let $="",g="";o.includes(m)&&(g=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${m}". \u{1F601}</p></div>`);for(let S=0;S<o.length;S++)$=`${$}<div class="col"><div class="marketItem">${a[S]} ${o[S]}</div></div>`;d.sheet.create({content:`
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
                    
          ${$}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return c("pageBeforeOut",(a,o)=>{}),function(a){a.$;var o=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,o`
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
                    <a href="#" class="link icon-only" @click="${p}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${k}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${i.images.length>1?o`
            <div class="previewImageBlock">
                <img src="${i.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${i.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:o`
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
                                @click=${f}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${e.albumIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Beginn Pagecontent -->

                ${i.tracks!=null?o`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${i.tracks.items.map($=>o`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${$.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${i.images.length>0?o`
                                        <img src="${i.images[i.images.length-1].url}" class="track-cover"/>
                                        `:o`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${$.name}</div>
                                            <div class="item-after">

                                                ${$.isSaved?o`<span class="material-icons-round trackHeart">favorite</span>`:o``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${$.artists.map(g=>o`${g.name} `)}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swipeout-actions-left">
                                <a href="#" class="swipeout-overswipe" @click="${()=>w($)}">
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
                `:o``}


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
`}}E.id="3def7ab38b";E.style=`
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
`;function N(s,{$store:n,$update:d}){console.log("artistView",s);const t=s.artist,c=n.getters.spotifyApi.value;let u={},l=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(navigator.language)[5];return u.topTracks==null&&c.getArtistTopTracks(t.id,l).then(function(r){console.log("topTracks",r),u.topTracks=r,d()}),function(r){r.$;var m=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,m`
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



        ${u.topTracks!=null&&u.topTracks.tracks.length>0&&m`
        <div class="block-title">Artist top Tracks</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true"
            data-mousewheel="true" class="swiper-container swiper-init topTracks">
            <div class="swiper-wrapper">
              ${u.topTracks.tracks.map(i=>m`
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
`}}N.id="c53c450496";N.style=`
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
`;function Q(s,{$:n,$f7router:d,$f7:t,$store:c,$on:u,$update:v}){const l=c.getters.spotifyApi.value;let r=s.items;const m=c.getters.user.value.id;console.log(m);let i={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(s.items),(!s.items||s.items.length<1)&&t.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){d.back()});const e=f=>{for(var w=0;w<r.length;w++)r[w]===f&&(r.splice(w,1),w--);r.length==0&&d.back(),v()},b=()=>{let f=n('[name="playlistSelection"]');for(let w=0;w<f.length;w++){const p=f[w];n(p).prop("checked",i.select)}i.select=!i.select,v()},k=()=>{i.playlists=[],v(),l.getUserPlaylists().then(function(f){console.log(f),i.playlists=h(f,m),console.log(i.playlists),v()},function(f){console.error(f),t.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})};u("pageInit",(f,w)=>{k()});const _=()=>{i.saveLoading=!0;let f=n('[name="playlistSelection"]:checked'),w=[];f.length==0&&t.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let p=0;p<r.length;p++)w.push(r[p].uri);for(let p=0;p<f.length;p++){const a=f[p].value;l.addTracksToPlaylist(a,w).then(function(o){i.saveCount=i.saveCount+1,i.saveCount==f.length&&(i.saveLoading=!1,i.select=!0,i.saveCount=0,k()),v()},function(o){console.error(o),t.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})}},h=(f,w)=>{let p=f.items,a=[];for(let o=0;o<p.length;o++){if(p[o].collaborative){a.push(p[o]);continue}if(p[o].owner.id==w){a.push(p[o]);continue}}return a};return function(f){f.$;var w=f.$h;return f.$root,f.$f7,f.$f7route,f.$f7router,f.$theme,f.$update,f.$store,w`
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
                <div class="title">Add ${r.length} ${r.length>1?"tracks":"track"} to playlist
                </div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${b}">
                      <i class="icon material-icons-round">${i.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${_}">
                ${i.saveLoading?w`
                <div class="text-align-center">
                    <div class="preloader"></div>
                </div>

                `:w`

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
                                    ${r.map(p=>w`
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
                                                <div class="item-subtitle">${p.artists.map(a=>w`${a.name} `)}</div>
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
                    ${i.playlists!=null?w`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${i.playlists.map(p=>w`
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

                    `:w`
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
`}}Q.id="eceaeb1eb9";function F(s,{$f7:n,$on:d,$onBeforeMount:t,$onMounted:c,$onBeforeUnmount:u,$onUnmounted:v}){let l="Jimmy",r=25,m=["Tennis","Chess","Football"];const i=()=>{n.dialog.alert("Hello World")};return t(()=>{console.log("onBeforeMount")}),c(()=>{console.log("onMounted")}),u(()=>{console.log("onBeforeUnmount")}),v(()=>{console.log("onUnmounted")}),d("pageMounted",(e,b)=>{console.log("pageMounted",b)}),d("pageInit",(e,b)=>{console.log("pageInit",b)}),d("pageBeforeIn",(e,b)=>{console.log("pageBeforeIn",b)}),d("pageAfterIn",(e,b)=>{console.log("pageAfterIn",b)}),d("pageBeforeOut",(e,b)=>{console.log("pageBeforeOut",b)}),d("pageAfterOut",(e,b)=>{console.log("pageAfterOut",b)}),d("pageBeforeRemove",(e,b)=>{console.log("pageBeforeRemove",b)}),function(e){e.$;var b=e.$h;e.$root,e.$f7;var k=e.$f7route;e.$f7router;var _=e.$theme;return e.$update,e.$store,b`
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
        <p>Hello! My name is ${l}. I am ${r} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${m.map(h=>b`
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
          <li><b>$f7route.url</b>: ${k.url}</li>
          <li><b>$f7route.path</b>: ${k.path}</li>
          <li><b>$f7route.params</b>: ${JSON.stringify(k.params)}</li>
          <li><b>$f7route.hash</b>: ${k.hash}</li>
          <li><b>$f7route.query</b>: ${JSON.stringify(k.query)}</li>
        </ul>

        <h4>$theme</h4>
        <p>Currently active theme:</p>
        <ul style="padding-left:25px">
          <li><b>$theme.ios</b>: ${_.ios}</li>
          <li><b>$theme.md</b>: ${_.md}</li>
          <li><b>$theme.aurora</b>: ${_.aurora}</li>
        </ul>
      </div>
    </div>
  </div>
`}}F.id="b745f42cea";F.style=`
  p {
    margin: 10px 0;
  }
`;function W(){return function(s){s.$;var n=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,n`
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
`}}W.id="0c87d5ba9f";const li={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"};function O(s,{$:n,$f7:d,$update:t,$on:c,$store:u,$f7router:v}){const l=u.getters.spotifyApi.value;let r=!1;var m=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let i=m.exec(navigator.language)[5];console.log(i);const e=s.track,b=e.album;let k,_="play_arrow",h={trackIsSavedLoading:!0};console.log(e);const f=()=>{const g={title:`Statify - ${e.name}`,text:"Look at this track i found!",url:window.location.origin+v.url};try{navigator.share(g)}catch(y){console.log("share error",y)}};c("pageInit",(g,y)=>{const S=I=>{var A=Math.floor(I/1e3%60),B=Math.floor(I/(1e3*60)),B=B<10?"0"+B:B;return A=A<10?"0"+A:A,B+":"+A};h.duration=S(e.duration_ms),t()}),l.containsMySavedTracks([e.id]).then(function(g){h.trackIsSavedLoading=!1,h.trackIsSaved=g[0],t()}),l.getAudioFeaturesForTrack(e.id).then(function(g){h.songAnalytics=g,console.log(g),t()});const w=()=>{v.navigate("/add/playlist/",{props:{items:[e]}})},p=()=>{h.trackIsSavedLoading=!0,t();let g;h.trackIsSaved?g=l.removeFromMySavedTracks:g=l.addToMySavedTracks,g([e.id]).then(function(y){h.trackIsSavedLoading=!1,h.trackIsSaved=!h.trackIsSaved,console.log(h),t()},function(y){console.log(y),h.trackIsSavedLoading=!1,t()})},a=()=>{k=new Audio(e.preview_url),console.log(e),k.addEventListener("loadstart",function(){r=!0,t()}),k.addEventListener("canplaythrough",function(){r=!1,k.play(),t()}),k.addEventListener("ended",function(){_="play_arrow",h.showProgressbar=!1,t()}),k.addEventListener("timeupdate",function(){let g=k.currentTime/k.duration*100;d.progressbar.set(".progressbar",g),t()})},o=()=>{const g=e.available_markets.map(H),y=e.available_markets;let S="",I="";y.includes(i)&&(I=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${i}". \u{1F601}</p></div>`);for(let B=0;B<y.length;B++)S=`${S}<div class="col"><div class="marketItem">${g[B]} ${y[B]}</div></div>`;var A=d.sheet.create({content:`
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
                    
          ${S}

        </div>
              </div>
            </div>
          </div>
        `});A.open()},$=()=>{k||a(),r||(k.paused?(_="pause",h.showProgressbar=!0,t(),k.play()):(_="play_arrow",h.showProgressbar=!1,t(),k.pause()))};return c("pageBeforeOut",(g,y)=>{k&&k.pause()}),function(g){g.$;var y=g.$h;return g.$root,g.$f7,g.$f7route,g.$f7router,g.$theme,g.$update,g.$store,y`
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
                    <a href="#" class="link icon-only" @click="${o}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${f}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${b.images.length>1?y`
            <div class="previewImageBlock">
                <img src="${b.images[1].url}" width="200px" class="imageBlur" />
                <img src="${b.images[1].url}" width="200px" class="imageNoBlur" />
            </div>
            `:y`
            `}
            <div class="contentBlock">
                ${h.showProgressbar&&y`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${e.preview_url&&y`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${r?"button-loading":""}"
                        @click=${$}>
                        <span class="preloader"></span>
                        <span></span>
                        <span class="material-icons-round optionButtonIcon">
                            ${_}
                        </span>
                    </button>
                    `}
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${w}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                            class=" button button-large button-round optionsButtons button-preloader ${h.trackIsSavedLoading?"button-loading":""}"
                            @click=${p}>
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
                            <a href="/album/${b.id}/" class="item-link item-content">
                                <div class="item-media">
                                    ${b.images.length>1?y`
                                    <img src="${b.images[1].url}" width="70" />
                                    `:y`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${b.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${b.artists.map(S=>y`
                                        ${S.name} `)}
                                    </div>
                                    <div class="item-text">${b.release_date.substring(0,4)} · ${b.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${h.songAnalytics!=null&&y`
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



                ${h.songAnalytics!=null&&y`
                <div class="block-title">Audio analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        ${h.songAnalytics.key>=0&&y`
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






                ${e.artists!=null?y`
                <div class="block-title">Artists</div>
                <div class="list media-list margin-bottom-half">
                    <ul>
                        ${e.artists.map(S=>y`
                        <li>
                            <a href="/artist/${S.id}/" class="item-link item-content">
                                <div class="item-media">
                                    <i class="icon material-icons-round">face</i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${S.name}</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `)}
                    </ul>
                </div>

                `:y``}


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
`}}O.id="c91d049ec4";O.style=`
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
`;var oi=[{path:"/",component:C},{path:"/track/:trackId/",async:function({router:s,to:n,resolve:d}){var t=s.app,c=t.store,u=n.params.trackId,v=c.getters.spotifyApi.value;t.preloader.show(),v.getTrack(u).then(function(l){t.preloader.hide(),d({component:O},{props:{track:l}})},function(l){console.log(l),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/album/:albumId/",async:function({router:s,to:n,resolve:d}){var t=s.app,c=t.store,u=n.params.albumId,v=c.getters.spotifyApi.value;t.preloader.show(),v.getAlbum(u).then(function(l){t.preloader.hide(),d({component:E},{props:{album:l}})},function(l){console.log(l),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/artist/:artistId/",async:function({router:s,to:n,resolve:d}){var t=s.app,c=t.store,u=n.params.artistId,v=c.getters.spotifyApi.value;t.preloader.show(),v.getArtist(u).then(function(l){t.preloader.hide(),console.log(l),d({component:N},{props:{artist:l}})},function(l){console.log(l),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/about/",component:G},{path:"/add/playlist",component:Q},{path:"/form/",component:J},{path:"/search/",component:D},{path:"/catalog/",component:V},{path:"/product/:id/",component:Y},{path:"/profile/",component:R},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:F},{path:"(.*)",component:W}];let j={darkMode:!1};const ni=s=>{try{JSON.parse(s)}catch(n){return console.log(n),!1}return!0},K="settings",U=ei({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:s}){return s.products},loginMethode({state:s}){s.loginMethode()},spotifyApi({state:s}){return s.spotifyapi},user({state:s}){return s.user}},actions:{addProduct({state:s},n){s.products=[...s.products,n]},setUser({state:s},n){s.user=n},addLoginMethod({state:s},n){s.loginMethode=n},addSpotifyApi({state:s},n){s.spotifyapi=n},changeSetting({state:s},n){let d=n.key,t=n.value;j[d]=t;let c=JSON.stringify(j);localStorage.setItem(K,c)},getSetting({state:s},n){let d=localStorage.getItem(K);if(ni(d)&&d!=null){let t=JSON.parse(d);if(t.hasOwnProperty(n))return t[n]}return j[n]}}});function M(s,{$f7:n,$update:d,$f7router:t}){let c="",u="";const v=i=>{c=i.target.value,d()},l=i=>{u=i.target.value,d()},r=i=>{console.log(i)},m=()=>{n.dialog.alert("Username: "+c+"<br/>Password: "+u,()=>{n.loginScreen.close()})};return function(i){i.$;var e=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,e`
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
          <a href="#view-catalog" class="tab-link" @click="${r}">
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
                      <input type="text" name="username" placeholder="Your username" value="${c}" @input="${v}"/>

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${u}" @input="${l}"/>

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
`}}M.id="c0aca1ce20";function L(s,{$:n,$el:d,$on:t,$f7:c,$update:u,$store:v}){let l=[];t("pageInit",(e,b)=>{});let r=0;c.request({url:"./assets/data/login_faq.json",async:!0,error:function(e){console.log(e),r=r+1,r<5?request(this):m()},success:function(e){try{l=JSON.parse(e)}catch(b){console.log(b),r=r+1,r<5?request(this):m();return}u(),c.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:l.length,observer:!0})}});const m=()=>{console.log(n(".faq-loading").html()),n(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),n(".faq-loading").removeClass("skeleton-text"),n(".faq-loading").removeClass("skeleton-effect-wave")},i=()=>{v.getters.loginMethode};return function(e){e.$;var b=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,b`
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
                        ${l.map(k=>b`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${k.title}</div>
                                <div class="card-content card-content-padding">${k.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${l.length==0&&b`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}L.id="963eb65789";L.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class ri{constructor(n,d){z(this,"login",()=>{const n="https://accounts.spotify.com/authorize",d="c34980adc6984ebd9418e19f418f10dd",{origin:t}=window.location,c=`${t}/`,u=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played","user-read-private"].toString().replace(",","%20"),v="token";window.location=`${n}?client_id=${d}&redirect_uri=${c}&scope=${u}&response_type=${v}`});z(this,"parseUrlHash",()=>{let d=window.location.hash.substr(1).split("&");const t={};d.forEach(u=>{let v=u.split("="),l=v[0],r=v[1];t[l]=r});let c=t.expires_in;if(c!=null&&!isNaN(c)){let u=parseInt(c),v=new Date;v.setSeconds(u),t.expireOnDate=v.toJSON()}else return null;return t});z(this,"isTokenValid",n=>{try{let d=n.expireOnDate,t=Date.parse(d);return new Date().getTime()<t}catch{return!1}});this.app=n,this.width=d}}let T,P=new ri(ci),x,q=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(T=JSON.parse(localStorage.getItem("tokenMap")),P.isTokenValid(T)?(x=M,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?x=L:(T=P.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(T)),x=M,q=!0)):window.location.hash==null||window.location.hash==""?x=L:(T=P.parseUrlHash(),T!=null?(localStorage.setItem("tokenMap",JSON.stringify(T)),x=M,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(x=L,q=!1));let X=new ai;q&&X.setAccessToken(T.access_token);U.dispatch("addSpotifyApi",X);U.dispatch("addLoginMethod",P.login);var ci=new ti({name:"Statify",theme:"md",el:"#app",component:x,tokenMap:T,store:U,routes:oi,on:{pageInit:function(){}}});function di(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=di;const vi=()=>{const s=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(s)},ui=()=>"standalone"in window.navigator&&window.navigator.standalone;vi()&&!ui()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));window.onSpotifyWebPlaybackSDKReady=()=>{const s="BQBZ8b9plWq3pGSSTCDNyWvotQpISVUZ7dPoA0wBGPYUZiSIJzW2dSKozBjBEy1oo9aUYqaGbRq-zSLjyjHtJ-bcks6QG4fx41pai5fiPMRIyw1AD16ehxGJnwsf61GFuRrunoLuQPpncI5YGvZA3RNlmMfEKdy9h4t1Mam3EWrE9GyKQmXqiKw",n=new Spotify.Player({name:"Statify",getOAuthToken:d=>{d(s)},volume:.5});n.addListener("ready",({device_id:d})=>{console.log("Ready with Device ID",d)}),n.addListener("not_ready",({device_id:d})=>{console.log("Device ID has gone offline",d)}),n.addListener("initialization_error",({message:d})=>{console.error(d)}),n.addListener("authentication_error",({message:d})=>{console.error(d)}),n.addListener("account_error",({message:d})=>{console.error(d)}),document.getElementById("togglePlay").onclick=function(){n.togglePlay()},n.connect()};
