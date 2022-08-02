var Z=Object.defineProperty;var ii=(t,n,c)=>n in t?Z(t,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[n]=c;var z=(t,n,c)=>(ii(t,typeof n!="symbol"?n+"":n,c),c);import{c as G,a as ei,S as ai,F as ti}from"./vendor.4b7dcee7.js";const si=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))e(v);new MutationObserver(v=>{for(const g of v)if(g.type==="childList")for(const d of g.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function c(v){const g={};return v.integrity&&(g.integrity=v.integrity),v.referrerpolicy&&(g.referrerPolicy=v.referrerpolicy),v.crossorigin==="use-credentials"?g.credentials="include":v.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function e(v){if(v.ep)return;v.ep=!0;const g=c(v);fetch(v.href,g)}};si();function R(t,{$on:n,$f7:c,$update:e,$store:v}){let g={};const d=v.getters.spotifyApi.value;let s={};return d.getMe().then(function(r){g=r,console.log(r),v.dispatch("setUser",r),e()},function(r){console.error(r),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),d.getMyTopArtists().then(function(r){s.myTopArtists==null&&(s.myTopArtists=r,console.log("myTopArtists",r),e())},function(r){console.error(r),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),d.getMyTopTracks().then(function(r){s.myTopTracks==null&&(s.myTopTracks=r,console.log("myTopTracks",r),e())},function(r){console.error(r),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),d.getMyRecentlyPlayedTracks().then(function(r){s.myRecentTracks==null&&(s.myRecentTracks=r,console.log("myTopTracks",r),e())},function(r){console.error(r),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(r){r.$;var u=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,u`
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
                    <div class="title-large-text">Hello ${g.display_name}</div>
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

            ${s.myTopTracks!=null&&s.myTopTracks.total>0&&u`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${s.myTopTracks!=null&&s.myTopTracks.total>0&&u`
                        ${s.myTopTracks.items.map(a=>u`
                        <div class="swiper-slide">
                            <a href="/track/${a.id}/">
                                ${a.album.images.length>1?u`
                                <img class="elevation-3" src="${a.album.images[1].url}" />
                                `:u`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${a.name}</div>
                                <div class="artist">${a.artists.map(i=>u`${i.name} `)}</div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}

            ${s.myTopArtists!=null&&s.myTopArtists.total>0&&u`
            <div class="block-title">Your top Artists</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${s.myTopArtists!=null&&s.myTopArtists.total>0&&u`
                        ${s.myTopArtists.items.map(a=>u`

                        <div class="swiper-slide">
                            <a href="/artist/${a.id}/">
                                ${a.images.length>1?u`
                                <img class="elevation-3 round" src="${a.images[1].url}" />
                                `:u`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title text-align-center">${a.name}</div>
                                <div class="artist text-align-center">${a.followers.total.toLocaleString()} Followers
                                </div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}


            ${s.myRecentTracks!=null&&s.myRecentTracks.items.length>0&&u`
            <div class="block-title">Your recent Tracks</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${s.myRecentTracks!=null&&s.myRecentTracks.items.length>0&&u`
                        ${s.myRecentTracks.items.map(a=>u`
                        <div class="swiper-slide">
                            <a href="/track/${a.track.id}/">
                                ${a.track.album.images.length>1?u`
                                <img class="elevation-3" src="${a.track.album.images[1].url}" />
                                `:u`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${a.track.name}</div>
                                <div class="artist">${a.track.artists.map(i=>u`${i.name} `)}</div>
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
`}}R.id="ea1758904c";R.style=`
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
`;function J(){return function(t){t.$;var n=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,n`
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
`}}J.id="0469a58358";function V(){return function(t){t.$;var n=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,n`
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
`}}V.id="0f70b835ae";function M(t,{$:n,$on:c,$f7:e,$store:v,$update:g}){const d=t.arrayKey;let s=t[d][d].items;const r=t.pageMode,u=v.getters.spotifyApi.value,a=p=>p.images&&p.images.length>0?p.images[0].url:p.icons&&p.icons.length>0?p.icons[0].url:"./assets/icons/audiotrack_black_48dp.svg",i=p=>S!=p[d].total;let b=!0,k=!0,S=s.length;const w=()=>{console.log("Loading more items..."),!!b&&(b=!1,u.getCategories({offset:S}).then(p=>{if(!i(p)){k=!1,g();return}let h=p[d].items;s=[...s,...h],b=!0,S=s.length,g()}))};return function(p){p.$;var h=p.$h;return p.$root,p.$f7,p.$f7route,p.$f7router,p.$theme,p.$update,p.$store,h`
  <div class="page" data-name="categories">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        ${r&&h`
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
    <div class="page-content infinite-scroll-content" @infinite=${w}>


      <div class="categoriesContainer">
        ${s.map(m=>h`
        <a href="/category/${m.id}/" class="categoriesItem">
          <img class="elevation-3" src="${a(m)}" />

          <div class=" title">${m.name}</div>
        </a>
        `)}
      </div>
      ${k&&h`
      <div class="preloader infinite-scroll-preloader"></div>
      `}
    </div>
  </div>
`}}M.id="cbe6f4ec03";M.style=`
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
`;function K(t,{$f7route:n,$store:c}){const e=c.getters.products,v=n.params.id;let g;return e.value.forEach(d=>{d.id===v&&(g=d)}),function(d){d.$;var s=d.$h;return d.$root,d.$f7,d.$f7route,d.$f7router,d.$theme,d.$update,d.$store,s`
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
        <div class="title">${g.title}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block-title">About ${g.title}</div>
      <div class="block block-strong">
        ${g.description}
      </div>
    </div>
  </div>
`}}K.id="3b589d4283";function D(t,{$:n,$on:c,$f7:e,$store:v,$update:g}){let d={};const s=v.getters.spotifyApi.value;c("pageInit",(a,i)=>{v.dispatch("getSetting","darkMode").then(function(b){var k=e.toggle.create({el:"#darkModeToggle",on:{change:function(){r()}}});k.checked!=b&&k.toggle()})});const r=()=>{var a=e.toggle.get("#darkModeToggle");v.dispatch("changeSetting",{key:"darkMode",value:a.checked});const i=n("html");a.checked?i.addClass("theme-dark"):i.removeClass("theme-dark")},u=()=>{e.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})};return s.getMe().then(function(a){d.user=a,g()},function(a){console.error(a),e.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(a){a.$;var i=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,i`
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


      ${d.user!=null&&i`

      <div class="block userdatablock1">
        <div class="imageBlock">
          ${d.user.images.length>0?i`
          <img src="${d.user.images[0].url}" width="100" height="100" />
          `:i`
          <img src="/assets/icons/face_black_48dp.svg" id="svgimage" width="100" height="100" />
          `}
        </div>


        <div class="infoBlock">
          <h1>${d.user.display_name}</h1>
          <div class="chip">
            <div class="chip-label">${d.user.product=="premium"?"Premium":"Freemium"}</div>
          </div>
        </div>
      </div>

      `}
      <div class="block">
        <button class="button button-round color-red" @click="${u}">Logout</button>
      </div>
    </div>
  </div>
`}}D.id="152362f88d";D.style=`
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
`;function E(t,{$:n,$f7:c,$on:e,$update:v,$store:g}){let d;e("pageInit",()=>{d=c.searchbar.create({el:".searchbar",customSearch:!0,on:{search(m,o,l){o!=""&&k()},clear(){s={},v()}}}),c.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let s={},r=!1;const u=g.getters.spotifyApi.value;let a={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},i={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const b=m=>{let o;m.path==null?o=m.srcElement.innerText:o=m.path[0].innerText;for(let l in i)i[l].active=!1;for(let l in i)o=="All"&&(i[l].active=!0),o==i[l].name&&(i[l].active=!0);d.query!=""&&k(),v()},k=m=>{let o=d.query;if(i.all.active){S(o,["album","artist","playlist","track"],{limit:3});return}if(i.tracks.active){S(o,["track"],{limit:20});return}if(i.albums.active){S(o,["album"],{limit:20});return}if(i.artists.active){S(o,["artist"],{limit:20});return}if(i.playlists.active){S(o,["playlist"],{limit:20});return}},S=(m,o,l,$)=>{$||(r=!0),v(),u.search(m,o,l).then(function(f){if($)return w(f);r=!1,s=f,console.log(f),v()},function(f){console.error(f),r=!1})},w=m=>{if(m.playlists){let o=s.playlists.items.concat(m.playlists.items);s.playlists.items=o,p=!1,v()}if(m.tracks){let o=s.tracks.items.concat(m.tracks.items);s.tracks.items=o,p=!1,v()}if(m.albums){let o=s.albums.items.concat(m.albums.items);s.albums.items=o,p=!1,v()}if(m.artists){let o=s.artists.items.concat(m.artists.items);s.artists.items=o,p=!1,v()}};let p=!1;const h=m=>{if(p)return;p=!0,v();let o=s[m].items.length;console.log(o),S(d.query,[a[m]],{limit:20,offset:o},!0)};return function(m){m.$;var o=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,o`
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
                        ${Object.keys(i).map(l=>o`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${i[l].active?"button-fill":"button-outline"}"
                                @click="${b}">${i[l].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${r==!0?o`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:o``}

            ${s.tracks!=null?o`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.tracks.items.map(l=>o`
                    <li>
                        <a href="/track/${l.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${l.album.images.length>0?o`
                                <img src="${l.album.images[l.album.images.length-1].url}" class="track-cover" />
                                `:o`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${l.name}</div>
                                </div>
                                <div class="item-subtitle">${l.artists.map($=>o`${$.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${s.tracks.items.length>2?o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${p?"button-loading":""}"
                    @click=${()=>h("tracks")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:o` `}
            `:o``}

            ${s.albums!=null?o`
            <div class="block-title">Albums</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.albums.items.map(l=>o`
                    <li>
                        <a href="/album/${l.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${l.images.length>0?o`
                                <img src="${l.images[l.images.length-1].url}" class="album-cover" />
                                `:o`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${l.name}</div>
                                </div>
                                <div class="item-subtitle">${l.artists.map($=>o`${$.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${s.albums.items.length>2?o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${p?"button-loading":""}"
                    @click=${()=>h("albums")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:o` `}
            `:o``}

            ${s.artists!=null?o`
            <div class="block-title">Artists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.artists.items.map(l=>o`
                    <li>
                        <a href="/artist/${l.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${l.images.length>0?o`
                                <img src="${l.images[l.images.length-1].url}" class="artist-cover" />
                                `:o`
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
            ${s.artists.items.length>2?o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${p?"button-loading":""}"
                    @click=${()=>h("artists")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:o` `}
            `:o``}

            ${s.playlists!=null?o`
            <div class="block-title">Playlists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.playlists.items.map(l=>o`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${l.images.length>0?o`
                                <img src="${l.images[l.images.length-1].url}" class="playlist-cover" />
                                `:o`
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
            ${s.playlists.items.length>2&&o`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${p?"button-loading":""}"
                    @click=${()=>h("playlists")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `}
            `:o``}

        </div>
    </div>
`}}E.id="6834a561dd";E.style=`
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
`;function N(t,{$:n,$f7:c,$update:e,$on:v,$store:g,$f7router:d}){const s=g.getters.spotifyApi.value;var r=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let u=r.exec(navigator.language)[5];console.log(u);let a=t.album;console.log(a);let i={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const b=o=>{d.navigate("/add/playlist/",{props:{items:[o]}})},k=()=>{const o={title:`Statify - ${a.name}`,text:"Look at this album i found!",url:window.location.origin+d.url};try{navigator.share(o)}catch(l){console.log("share error",l)}},S=()=>{i.trackIsSavedLoading=!0;let o=[];for(let l=0;l<a.tracks.items.length;l++){let $=a.tracks.items[l];o.push($.id)}i.albumIsSavedLoading=!0,s.containsMySavedAlbums([a.id]).then(function(l){i.albumIsSavedLoading=!1,a.isSaved=l[0],console.log(a),e()}),s.containsMySavedTracks(o).then(function(l){i.trackIsSavedLoading=!1;for(let $=0;$<a.tracks.items.length;$++){let f=a.tracks.items[$];f.isSaved=l[$]}console.log(a.tracks),e()})};S(),v("pageInit",(o,l)=>{const $=y=>{var _=Math.floor(y/1e3%60),I=Math.floor(y/(1e3*60)),I=I<10?"0"+I:I;return _=_<10?"0"+_:_,I+":"+_};let f=0;for(let y=0;y<a.tracks.items.length;y++){let I=a.tracks.items[y].duration_ms;f=f+I}i.duration=$(f),e()}),s.containsMySavedAlbums([a.id]).then(function(o){i.albumIsSavedLoading=!1,i.albumIsSaved=o[0],e()});const w=()=>{d.navigate("/add/playlist/",{props:{items:a.tracks.items}})},p=()=>{i.albumIsSavedLoading=!0,e();let o;o=s.addToMySavedAlbums,o([a.id]).then(function(l){i.albumIsSavedLoading=!1,i.albumIsSaved=!i.albumIsSaved,e()},function(l){console.log(l),i.trackIsSavedLoading=!1,e()})},h=o=>{i.trackIsSavedLoading=!0,e();let l;i.albumIsSaved?l=s.removeFromMySavedTracks:l=s.addToMySavedTracks,l([o.id]).then(function($){i.albumIsSavedLoading=!1,S(),e()},function($){console.log($),i.albumIsSavedLoading=!1,S(),e()})},m=()=>{const o=track.available_markets.map(G),l=track.available_markets;let $="",f="";l.includes(u)&&(f=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${u}". \u{1F601}</p></div>`);for(let _=0;_<l.length;_++)$=`${$}<div class="col"><div class="marketItem">${o[_]} ${l[_]}</div></div>`;c.sheet.create({content:`
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
                ${f}
              <div class="block">
                <div class="row marketRow">
                    
          ${$}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return v("pageBeforeOut",(o,l)=>{}),function(o){o.$;var l=o.$h;return o.$root,o.$f7,o.$f7route,o.$f7router,o.$theme,o.$update,o.$store,l`
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
                <div class="title">${a.name}</div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${m}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${k}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${a.images.length>1?l`
            <div class="previewImageBlock">
                <img src="${a.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${a.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:l`
            `}
            <div class="contentBlock">
                ${i.showProgressbar}


                <div class="block block-strong no-margin-top optionsBlock">
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${w}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                                class=" button button-large button-round optionsButtons button-preloader ${i.albumIsSavedLoading?"button-loading":""}"
                                @click=${p}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${i.albumIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Beginn Pagecontent -->

                ${a.tracks!=null?l`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${a.tracks.items.map($=>l`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${$.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${a.images.length>0?l`
                                        <img src="${a.images[a.images.length-1].url}" class="track-cover"/>
                                        `:l`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${$.name}</div>
                                            <div class="item-after">

                                                ${$.isSaved?l`<span class="material-icons-round trackHeart">favorite</span>`:l``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${$.artists.map(f=>l`${f.name} `)}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swipeout-actions-left">
                                <a href="#" class="swipeout-overswipe" @click="${()=>h($)}">
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
                                    <div class="item-after">${i.duration}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="${a.external_urls.spotify}" class="item-link item-content external">
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
`}}N.id="6a5a054e87";N.style=`
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
`;function F(t,{$store:n,$update:c}){console.log("artistView",t);const e=t.artist,v=n.getters.spotifyApi.value;let g={},s=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(navigator.language)[5];return g.topTracks==null&&v.getArtistTopTracks(e.id,s).then(function(r){console.log("topTracks",r),g.topTracks=r,c()}),function(r){r.$;var u=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,u`
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
      </div>
    </div>
    <div class="page-content">
      ${e.images.length>1?u`
      <div class="previewImageBlock">
        <img src="${e.images[1].url}" width="200px" height="200px" class="imageBlur" />
        <img src="${e.images[1].url}" width="200px" height="200px" class="imageNoBlur" />
      </div>
      `:u`
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
        ${e.genres.length>0&&u`
          <div class="block-title">Genre</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="false"
            data-mousewheel="true" class="swiper-container swiper-init">
            <div class="swiper-wrapper">
              ${e.genres.map(a=>u`
              <div class="swiper-slide" style="width:initial">
                <div class="chip">
                  <div class="chip-label">${a.charAt(0).toUpperCase()+a.slice(1)}</div>
                </div>
              </div>
              `)}
            </div>
          </div>
        </div>
          
          `}



        ${g.topTracks!=null&&g.topTracks.tracks.length>0&&u`
        <div class="block-title">Artist top Tracks</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true"
            data-mousewheel="true" class="swiper-container swiper-init topTracks">
            <div class="swiper-wrapper">
              ${g.topTracks.tracks.map(a=>u`
              <div class="swiper-slide">
                <a href="/track/${a.id}/">
                  ${a.album.images.length>1?u`
                  <img class="elevation-3" src="${a.album.images[1].url}" />
                  `:u`
                  <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                  `}
                  <div class="title">${a.name}</div>
                  <div class="artist">${a.artists.map(i=>u`${i.name} `)}</div>
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
`}}F.id="43a9a1213f";F.style=`
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
`;function Y(t,{$:n,$f7router:c,$f7:e,$store:v,$on:g,$update:d}){const s=v.getters.spotifyApi.value;let r=t.items;const u=v.getters.user.value.id;console.log(u);let a={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(t.items),(!t.items||t.items.length<1)&&e.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){c.back()});const i=p=>{for(var h=0;h<r.length;h++)r[h]===p&&(r.splice(h,1),h--);r.length==0&&c.back(),d()},b=()=>{let p=n('[name="playlistSelection"]');for(let h=0;h<p.length;h++){const m=p[h];n(m).prop("checked",a.select)}a.select=!a.select,d()},k=()=>{a.playlists=[],d(),s.getUserPlaylists().then(function(p){console.log(p),a.playlists=w(p,u),console.log(a.playlists),d()},function(p){console.error(p),e.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){c.back()})})};g("pageInit",(p,h)=>{k()});const S=()=>{a.saveLoading=!0;let p=n('[name="playlistSelection"]:checked'),h=[];p.length==0&&e.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let m=0;m<r.length;m++)h.push(r[m].uri);for(let m=0;m<p.length;m++){const o=p[m].value;s.addTracksToPlaylist(o,h).then(function(l){a.saveCount=a.saveCount+1,a.saveCount==p.length&&(a.saveLoading=!1,a.select=!0,a.saveCount=0,k()),d()},function(l){console.error(l),e.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){c.back()})})}},w=(p,h)=>{let m=p.items,o=[];for(let l=0;l<m.length;l++){if(m[l].collaborative){o.push(m[l]);continue}if(m[l].owner.id==h){o.push(m[l]);continue}}return o};return function(p){p.$;var h=p.$h;return p.$root,p.$f7,p.$f7route,p.$f7router,p.$theme,p.$update,p.$store,h`
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
                      <i class="icon material-icons-round">${a.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${S}">
                ${a.saveLoading?h`
                <div class="text-align-center">
                    <div class="preloader"></div>
                </div>

                `:h`

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
                                    ${r.map(m=>h`
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">

                                                <img src="./assets/icons/library_music_black_48dp.svg" width="35" />

                                            </div>
                                            <div class="item-inner">
                                                <div class="item-title-row">
                                                    <div class="item-title">${m.name}</div>
                                                    <div class="item-after"><i class="icon material-icons-round" @click="${()=>i(m)}">cancel</i></div>
                                                </div>
                                                <div class="item-subtitle">${m.artists.map(o=>h`${o.name} `)}</div>
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
            <div class="block-title">${a.playlists.length>1?"Playlists":"Playlist"}</div>
            <div class="list media-list">
                <ul>
                    ${a.playlists!=null?h`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${a.playlists.map(m=>h`
                            <li>
                                <label class="item-checkbox item-content">
                                    <input type="checkbox" name="playlistSelection" value="${m.id}" />
                                    <i class="icon icon-checkbox"></i>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${m.name}</div>
                                            <div class="item-after">${m.tracks.total} Tracks</div>
                                        </div>
                                        <div class="item-subtitle">${m.owner.display_name}</div>
                                        <div class="item-text">${m.description}</div>
                                    </div>
                                </label>
                            </li>
                            `)}
                        </ul>
                    </div>

                    `:h`
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
`}}Y.id="5aa33fba35";function O(t,{$f7:n,$on:c,$onBeforeMount:e,$onMounted:v,$onBeforeUnmount:g,$onUnmounted:d}){let s="Jimmy",r=25,u=["Tennis","Chess","Football"];const a=()=>{n.dialog.alert("Hello World")};return e(()=>{console.log("onBeforeMount")}),v(()=>{console.log("onMounted")}),g(()=>{console.log("onBeforeUnmount")}),d(()=>{console.log("onUnmounted")}),c("pageMounted",(i,b)=>{console.log("pageMounted",b)}),c("pageInit",(i,b)=>{console.log("pageInit",b)}),c("pageBeforeIn",(i,b)=>{console.log("pageBeforeIn",b)}),c("pageAfterIn",(i,b)=>{console.log("pageAfterIn",b)}),c("pageBeforeOut",(i,b)=>{console.log("pageBeforeOut",b)}),c("pageAfterOut",(i,b)=>{console.log("pageAfterOut",b)}),c("pageBeforeRemove",(i,b)=>{console.log("pageBeforeRemove",b)}),function(i){i.$;var b=i.$h;i.$root,i.$f7;var k=i.$f7route;i.$f7router;var S=i.$theme;return i.$update,i.$store,b`
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
        <a href="#" class="button button-raised" @click=${a}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${s}. I am ${r} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${u.map(w=>b`
          <li>${w}</li>
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
          <li><b>$theme.ios</b>: ${S.ios}</li>
          <li><b>$theme.md</b>: ${S.md}</li>
          <li><b>$theme.aurora</b>: ${S.aurora}</li>
        </ul>
      </div>
    </div>
  </div>
`}}O.id="f24ad278ef";O.style=`
  p {
    margin: 10px 0;
  }
`;function Q(){return function(t){t.$;var n=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,n`
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
`}}Q.id="6d6a161ff5";const oi={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"};function j(t,{$:n,$f7:c,$update:e,$on:v,$store:g,$f7router:d}){const s=g.getters.spotifyApi.value;let r=!1;var u=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let a=u.exec(navigator.language)[5];console.log(a);const i=t.track,b=i.album;let k,S="play_arrow",w={trackIsSavedLoading:!0};console.log(i);const p=()=>{const f={title:`Statify - ${i.name}`,text:"Look at this track i found!",url:window.location.origin+d.url};try{navigator.share(f)}catch(y){console.log("share error",y)}};v("pageInit",(f,y)=>{const _=I=>{var T=Math.floor(I/1e3%60),A=Math.floor(I/(1e3*60)),A=A<10?"0"+A:A;return T=T<10?"0"+T:T,A+":"+T};w.duration=_(i.duration_ms),e()}),s.containsMySavedTracks([i.id]).then(function(f){w.trackIsSavedLoading=!1,w.trackIsSaved=f[0],e()}),s.getAudioFeaturesForTrack(i.id).then(function(f){w.songAnalytics=f,console.log(f),e()});const h=()=>{d.navigate("/add/playlist/",{props:{items:[i]}})},m=()=>{w.trackIsSavedLoading=!0,e();let f;w.trackIsSaved?f=s.removeFromMySavedTracks:f=s.addToMySavedTracks,f([i.id]).then(function(y){w.trackIsSavedLoading=!1,w.trackIsSaved=!w.trackIsSaved,console.log(w),e()},function(y){console.log(y),w.trackIsSavedLoading=!1,e()})},o=()=>{k=new Audio(i.preview_url),console.log(i),k.addEventListener("loadstart",function(){r=!0,e()}),k.addEventListener("canplaythrough",function(){r=!1,k.play(),e()}),k.addEventListener("ended",function(){S="play_arrow",w.showProgressbar=!1,e()}),k.addEventListener("timeupdate",function(){let f=k.currentTime/k.duration*100;c.progressbar.set(".progressbar",f),e()})},l=()=>{const f=i.available_markets.map(G),y=i.available_markets;let _="",I="";y.includes(a)&&(I=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${a}". \u{1F601}</p></div>`);for(let A=0;A<y.length;A++)_=`${_}<div class="col"><div class="marketItem">${f[A]} ${y[A]}</div></div>`;var T=c.sheet.create({content:`
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
        `});T.open()},$=()=>{k||o(),r||(k.paused?(S="pause",w.showProgressbar=!0,e(),k.play()):(S="play_arrow",w.showProgressbar=!1,e(),k.pause()))};return v("pageBeforeOut",(f,y)=>{k&&k.pause()}),function(f){f.$;var y=f.$h;return f.$root,f.$f7,f.$f7route,f.$f7router,f.$theme,f.$update,f.$store,y`
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
                    <a href="#" class="link icon-only" @click="${l}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${p}">
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
                ${w.showProgressbar&&y`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${i.preview_url&&y`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${r?"button-loading":""}"
                        @click=${$}>
                        <span class="preloader"></span>
                        <span></span>
                        <span class="material-icons-round optionButtonIcon">
                            ${S}
                        </span>
                    </button>
                    `}
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${h}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                            class=" button button-large button-round optionsButtons button-preloader ${w.trackIsSavedLoading?"button-loading":""}"
                            @click=${m}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${w.trackIsSaved?"favorite":"favorite_border"}
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
                                        ${b.artists.map(_=>y`
                                        ${_.name} `)}
                                    </div>
                                    <div class="item-text">${b.release_date.substring(0,4)} · ${b.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${w.songAnalytics!=null&&y`
                <div class="block-title">Song analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${w.songAnalytics.danceability}"
                                data-value-text="${(w.songAnalytics.danceability*100).toFixed(0)}%"
                                data-value-text-color="#f44336" data-border-color="#f44336"
                                data-label-text="Danceability score"></div>
                        </div>
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${w.songAnalytics.valence}"
                                data-value-text="${(w.songAnalytics.valence*100).toFixed(0)}%"
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



                ${w.songAnalytics!=null&&y`
                <div class="block-title">Audio analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        ${w.songAnalytics.key>=0&&y`
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${oi[w.songAnalytics.key]}</h1>
                                    <p class="no-margin-top">Key</p>
                                </div>
                            </div>
                        </div>
                        `}
                        <div class="col text-align-center">
                            <div class="card card-outline">
                                <div class="card-content">
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${w.songAnalytics.tempo}</h1>
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






                ${i.artists!=null?y`
                <div class="block-title">Artists</div>
                <div class="list media-list margin-bottom-half">
                    <ul>
                        ${i.artists.map(_=>y`
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
                                    <div class="item-after">${w.duration}</div>
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
            </div>
        </div>
    </div>
`}}j.id="470cecc73c";j.style=`
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
`;var li=[{path:"/",component:R},{path:"/track/:trackId/",async:function({router:t,to:n,resolve:c}){var e=t.app,v=e.store,g=n.params.trackId,d=v.getters.spotifyApi.value;e.preloader.show(),d.getTrack(g).then(function(s){e.preloader.hide(),c({component:j},{props:{track:s}})},function(s){console.log(s),e.preloader.hide(),e.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){t.back()})})}},{path:"/category/:categoryId/",async:function({router:t,to:n,resolve:c}){var e=t.app,v=e.store,g=n.params.categoryId,d=v.getters.spotifyApi.value;e.preloader.show(),d.getCategoryPlaylists(g).then(function(s){e.preloader.hide(),c({component:M},{props:{playlists:s,pageMode:!0,arrayKey:"playlists"}})},function(s){console.log(s),e.preloader.hide(),e.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){t.back()})})}},{path:"/album/:albumId/",async:function({router:t,to:n,resolve:c}){var e=t.app,v=e.store,g=n.params.albumId,d=v.getters.spotifyApi.value;e.preloader.show(),d.getAlbum(g).then(function(s){e.preloader.hide(),c({component:N},{props:{album:s}})},function(s){console.log(s),e.preloader.hide(),e.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){t.back()})})}},{path:"/artist/:artistId/",async:function({router:t,to:n,resolve:c}){var e=t.app,v=e.store,g=n.params.artistId,d=v.getters.spotifyApi.value;e.preloader.show(),d.getArtist(g).then(function(s){e.preloader.hide(),console.log(s),c({component:F},{props:{artist:s}})},function(s){console.log(s),e.preloader.hide(),e.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){t.back()})})}},{path:"/about/",component:J},{path:"/add/playlist",component:Y},{path:"/form/",component:V},{path:"/search/",component:E},{path:"/categories/",async:function({router:t,to:n,resolve:c}){var e=t.app,v=e.store,g=v.getters.spotifyApi.value;e.preloader.show(),g.getCategories().then(function(d){e.preloader.hide(),c({component:M},{props:{categories:d,arrayKey:"categories"}})},function(d){console.log(d),e.preloader.hide(),e.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){t.back()})})}},{path:"/product/:id/",component:K},{path:"/profile/",component:D},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:O},{path:"(.*)",component:Q}];let U={darkMode:!1};const ni=t=>{try{JSON.parse(t)}catch(n){return console.log(n),!1}return!0},W="settings",H=ei({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:t}){return t.products},loginMethode({state:t}){t.loginMethode()},spotifyApi({state:t}){return t.spotifyapi},user({state:t}){return t.user}},actions:{addProduct({state:t},n){t.products=[...t.products,n]},setUser({state:t},n){t.user=n},addLoginMethod({state:t},n){t.loginMethode=n},addSpotifyApi({state:t},n){t.spotifyapi=n},changeSetting({state:t},n){let c=n.key,e=n.value;U[c]=e;let v=JSON.stringify(U);localStorage.setItem(W,v)},getSetting({state:t},n){let c=localStorage.getItem(W);if(ni(c)&&c!=null){let e=JSON.parse(c);if(e.hasOwnProperty(n))return e[n]}return U[n]}}});function C(t,{$f7:n,$update:c,$f7router:e}){let v="",g="";const d=u=>{v=u.target.value,c()},s=u=>{g=u.target.value,c()},r=()=>{n.dialog.alert("Username: "+v+"<br/>Password: "+g,()=>{n.loginScreen.close()})};return function(u){u.$;var a=u.$h;return u.$root,u.$f7,u.$f7route,u.$f7router,u.$theme,u.$update,u.$store,a`
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
                        @input="${d}" />

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${g}"
                        @input="${s}" />

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${r}">Sign In</a>

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
`}}C.id="85c08a2b21";function L(t,{$:n,$el:c,$on:e,$f7:v,$update:g,$store:d}){let s=[];e("pageInit",(i,b)=>{});let r=0;v.request({url:"./assets/data/login_faq.json",async:!0,error:function(i){console.log(i),r=r+1,r<5?request(this):u()},success:function(i){try{s=JSON.parse(i)}catch(b){console.log(b),r=r+1,r<5?request(this):u();return}g(),v.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:s.length,observer:!0})}});const u=()=>{console.log(n(".faq-loading").html()),n(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),n(".faq-loading").removeClass("skeleton-text"),n(".faq-loading").removeClass("skeleton-effect-wave")},a=()=>{d.getters.loginMethode};return function(i){i.$;var b=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,b`
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
                    <button @click="${a}"
                        class="col button button-large button-raised button-fill color-green"><i
                            class="icon spotify-icon"></i>Login with Spotify</button>
                    <p><label class="checkbox"><input type="checkbox" /><i class="icon-checkbox"></i></label> Don't show
                        this again.</p>
                </div>
                <div class="block-title faq_title">FAQ</div>
                <div data-space-between="50" class="swiper-container">
                    <div class="swiper-wrapper">
                        ${s.map(k=>b`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${k.title}</div>
                                <div class="card-content card-content-padding">${k.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${s.length==0&&b`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}L.id="531ed8a4df";L.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class ri{constructor(n,c){z(this,"login",()=>{const n="https://accounts.spotify.com/authorize",c="c34980adc6984ebd9418e19f418f10dd",{origin:e}=window.location,v=`${e}/`,g=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played","user-read-private"].toString().replace(",","%20"),d="token";window.location=`${n}?client_id=${c}&redirect_uri=${v}&scope=${g}&response_type=${d}`});z(this,"parseUrlHash",()=>{let c=window.location.hash.substr(1).split("&");const e={};c.forEach(g=>{let d=g.split("="),s=d[0],r=d[1];e[s]=r});let v=e.expires_in;if(v!=null&&!isNaN(v)){let g=parseInt(v),d=new Date;d.setSeconds(g),e.expireOnDate=d.toJSON()}else return null;return e});z(this,"isTokenValid",n=>{try{let c=n.expireOnDate,e=Date.parse(c);return new Date().getTime()<e}catch{return!1}});this.app=n,this.width=c}}let B,P=new ri(ci),x,q=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(B=JSON.parse(localStorage.getItem("tokenMap")),P.isTokenValid(B)?(x=C,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?x=L:(B=P.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(B)),x=C,q=!0)):window.location.hash==null||window.location.hash==""?x=L:(B=P.parseUrlHash(),B!=null?(localStorage.setItem("tokenMap",JSON.stringify(B)),x=C,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(x=L,q=!1));let X=new ai;q&&X.setAccessToken(B.access_token);H.dispatch("addSpotifyApi",X);H.dispatch("addLoginMethod",P.login);var ci=new ti({name:"Statify",theme:"md",el:"#app",component:x,tokenMap:B,store:H,routes:li,on:{pageInit:function(){}}});function di(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=di;const vi=()=>{const t=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)},pi=()=>"standalone"in window.navigator&&window.navigator.standalone;vi()&&!pi()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));window.onSpotifyWebPlaybackSDKReady=()=>{const t="BQBZ8b9plWq3pGSSTCDNyWvotQpISVUZ7dPoA0wBGPYUZiSIJzW2dSKozBjBEy1oo9aUYqaGbRq-zSLjyjHtJ-bcks6QG4fx41pai5fiPMRIyw1AD16ehxGJnwsf61GFuRrunoLuQPpncI5YGvZA3RNlmMfEKdy9h4t1Mam3EWrE9GyKQmXqiKw",n=new Spotify.Player({name:"Statify",getOAuthToken:c=>{c(t)},volume:.5});n.addListener("ready",({device_id:c})=>{console.log("Ready with Device ID",c)}),n.addListener("not_ready",({device_id:c})=>{console.log("Device ID has gone offline",c)}),n.addListener("initialization_error",({message:c})=>{console.error(c)}),n.addListener("authentication_error",({message:c})=>{console.error(c)}),n.addListener("account_error",({message:c})=>{console.error(c)}),document.getElementById("togglePlay").onclick=function(){n.togglePlay()},n.connect()};
