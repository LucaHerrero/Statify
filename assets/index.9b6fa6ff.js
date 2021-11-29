var X=Object.defineProperty;var K=(a,r,c)=>r in a?X(a,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[r]=c;var M=(a,r,c)=>(K(a,typeof r!="symbol"?r+"":r,c),c);import{c as j,a as Z,S as ii,F as ei}from"./vendor.4b7dcee7.js";const ti=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function c(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerpolicy&&(u.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?u.credentials="include":n.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(n){if(n.ep)return;n.ep=!0;const u=c(n);fetch(n.href,u)}};ti();function R(a,{$on:r,$f7:c,$update:l,$store:n}){let u={};const v=n.getters.spotifyApi.value;let t={};return v.getMe().then(function(d){u=d,n.dispatch("setUserId",d.id),l()},function(d){console.error(d),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopArtists().then(function(d){t.myTopArtists==null&&(t.myTopArtists=d,console.log("myTopArtists",d),l())},function(d){console.error(d),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopTracks().then(function(d){t.myTopTracks==null&&(t.myTopTracks=d,console.log("myTopTracks",d),l())},function(d){console.error(d),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyRecentlyPlayedTracks().then(function(d){t.myRecentTracks==null&&(t.myRecentTracks=d,console.log("myTopTracks",d),l())},function(d){console.error(d),c.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(d){d.$;var m=d.$h;return d.$root,d.$f7,d.$f7route,d.$f7router,d.$theme,d.$update,d.$store,m`
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

            ${t.myTopTracks!=null&&t.myTopTracks.total>0&&m`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${t.myTopTracks!=null&&t.myTopTracks.total>0&&m`
                        ${t.myTopTracks.items.map(o=>m`
                        <div class="swiper-slide">
                            <a href="/track/${o.id}/">
                                ${o.album.images.length>1?m`
                                <img class="elevation-3" src="${o.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${o.name}</div>
                                <div class="artist">${o.artists.map(e=>m`${e.name} `)}</div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}

            ${t.myTopArtists!=null&&t.myTopArtists.total>0&&m`
            <div class="block-title">Your top Artists</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${t.myTopArtists!=null&&t.myTopArtists.total>0&&m`
                        ${t.myTopArtists.items.map(o=>m`

                        <div class="swiper-slide">
                            <a href="/artist/${o.id}/">
                                ${o.images.length>1?m`
                                <img class="elevation-3 round" src="${o.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title text-align-center">${o.name}</div>
                                <div class="artist text-align-center">${o.followers.total.toLocaleString()} Followers
                                </div>
                            </a>
                        </div>
                        `)}
                        `}
                    </div>
                </div>
            </div>
            `}


            ${t.myRecentTracks!=null&&t.myRecentTracks.items.length>0&&m`
            <div class="block-title">Your recent Tracks</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${t.myRecentTracks!=null&&t.myRecentTracks.items.length>0&&m`
                        ${t.myRecentTracks.items.map(o=>m`
                        <div class="swiper-slide">
                            <a href="/track/${o.track.id}/">
                                ${o.track.album.images.length>1?m`
                                <img class="elevation-3" src="${o.track.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${o.track.name}</div>
                                <div class="artist">${o.track.artists.map(e=>m`${e.name} `)}</div>
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
`}}R.id="b65119aebb";R.style=`
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
`;function U(){return function(a){a.$;var r=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,r`
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
`}}U.id="6345269fda";function H(){return function(a){a.$;var r=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,r`
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
`}}H.id="89ac4a947f";function V(a,{$store:r}){const c=r.getters.products,l=()=>{r.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(n){n.$;var u=n.$h;return n.$root,n.$f7,n.$f7route,n.$f7router,n.$theme,n.$update,n.$store,u`
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
          ${c.value.map(v=>u`
            <li><a href="/product/${v.id}/">${v.title}</a></li>
          `)}
        </ul>
      </div>
      ${c.value.length===3&&u`
        <div class="block">
          <button class="button button-fill" @click=${l}>Add Product</Button>
        </div>
      `}
    </div>
  </div>
`}}V.id="34a557335b";function J(a,{$f7route:r,$store:c}){const l=c.getters.products,n=r.params.id;let u;return l.value.forEach(v=>{v.id===n&&(u=v)}),function(v){v.$;var t=v.$h;return v.$root,v.$f7,v.$f7route,v.$f7router,v.$theme,v.$update,v.$store,t`
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
`}}J.id="451aa72aa7";function Y(a,{$:r,$f7:c}){const l=()=>{c.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})},n=()=>{r("body").addClass("theme-dark")};return function(u){u.$;var v=u.$h;return u.$root,u.$f7,u.$f7route,u.$f7router,u.$theme,u.$update,u.$store,v`
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
<<<<<<< HEAD
        <button class="button button-round color-blue" @click="${n}">Turn on darkmode</button>
=======
        <button class="button button-round color-purple" @click="${l}">Logout</button>
>>>>>>> 441ca799166110db9f8e90f20fc3c52baa250a35
        <button class="button button-round color-red" @click="${l}">Logout</button>
      </div>
    </div>
  </div>
`}}Y.id="21567bfe10";function C(a,{$:r,$f7:c,$on:l,$update:n,$store:u}){let v;l("pageInit",()=>{v=c.searchbar.create({el:".searchbar",customSearch:!0,on:{search(p,i,s){i!=""&&w()},clear(){t={},n()}}}),c.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let t={},d=!1;const m=u.getters.spotifyApi.value;let o={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},e={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const f=p=>{let i;p.path==null?i=p.srcElement.innerText:i=p.path[0].innerText;for(let s in e)e[s].active=!1;for(let s in e)i=="All"&&(e[s].active=!0),i==e[s].name&&(e[s].active=!0);v.query!=""&&w(),n()},w=p=>{let i=v.query;if(e.all.active){S(i,["album","artist","playlist","track"],{limit:3});return}if(e.tracks.active){S(i,["track"],{limit:20});return}if(e.albums.active){S(i,["album"],{limit:20});return}if(e.artists.active){S(i,["artist"],{limit:20});return}if(e.playlists.active){S(i,["playlist"],{limit:20});return}},S=(p,i,s,k)=>{k||(d=!0),n(),m.search(p,i,s).then(function(b){if(k)return y(b);d=!1,t=b,console.log(b),n()},function(b){console.error(b),d=!1})},y=p=>{if(p.playlists){let i=t.playlists.items.concat(p.playlists.items);t.playlists.items=i,g=!1,n()}if(p.tracks){let i=t.tracks.items.concat(p.tracks.items);t.tracks.items=i,g=!1,n()}if(p.albums){let i=t.albums.items.concat(p.albums.items);t.albums.items=i,g=!1,n()}if(p.artists){let i=t.artists.items.concat(p.artists.items);t.artists.items=i,g=!1,n()}};let g=!1;const h=p=>{if(g)return;g=!0,n();let i=t[p].items.length;console.log(i),S(v.query,[o[p]],{limit:20,offset:i},!0)};return function(p){p.$;var i=p.$h;return p.$root,p.$f7,p.$f7route,p.$f7router,p.$theme,p.$update,p.$store,i`
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
                        ${Object.keys(e).map(s=>i`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${e[s].active?"button-fill":"button-outline"}"
                                @click="${f}">${e[s].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${d==!0?i`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:i``}

            ${t.tracks!=null?i`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.tracks.items.map(s=>i`
                    <li>
                        <a href="/track/${s.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${s.album.images.length>0?i`
                                <img src="${s.album.images[s.album.images.length-1].url}" class="track-cover" />
                                `:i`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${s.name}</div>
                                </div>
                                <div class="item-subtitle">${s.artists.map(k=>i`${k.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.tracks.items.length>2?i`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                    @click=${()=>h("tracks")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:i` `}
            `:i``}

            ${t.albums!=null?i`
            <div class="block-title">Albums</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.albums.items.map(s=>i`
                    <li>
                        <a href="/album/${s.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${s.images.length>0?i`
                                <img src="${s.images[s.images.length-1].url}" class="album-cover" />
                                `:i`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${s.name}</div>
                                </div>
                                <div class="item-subtitle">${s.artists.map(k=>i`${k.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.albums.items.length>2?i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                        @click=${()=>h("albums")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:i` `}
            `:i``}

            ${t.artists!=null?i`
            <div class="block-title">Artists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.artists.items.map(s=>i`
                    <li>
                        <a href="/artist/${s.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${s.images.length>0?i`
                                <img src="${s.images[s.images.length-1].url}" class="artist-cover" />
                                `:i`
                                <img src="./assets/icons/face_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${s.name}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.artists.items.length>2?i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                        @click=${()=>h("artists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:i` `}
            `:i``}

            ${t.playlists!=null?i`
            <div class="block-title">Playlists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${t.playlists.items.map(s=>i`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${s.images.length>0?i`
                                <img src="${s.images[s.images.length-1].url}" class="playlist-cover" />
                                `:i`
                                <img src="./assets/icons/queue_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${s.name}</div>
                                </div>
                                <div class="item-subtitle">${s.owner.display_name}</div>

                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${t.playlists.items.length>2&&i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${g?"button-loading":""}"
                        @click=${()=>h("playlists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `}
            `:i``}

        </div>
    </div>
`}}C.id="c2a66839e9";C.style=`
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
`;function F(a,{$:r,$f7:c,$update:l,$on:n,$store:u,$f7router:v}){const t=u.getters.spotifyApi.value;var d=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let m=d.exec(navigator.language)[5];console.log(m);let o=a.album;console.log(o);let e={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const f=i=>{v.navigate("/add/playlist/",{props:{items:[i]}})},w=()=>{const i={title:`Statify - ${o.name}`,text:"Look at this album i found!",url:o.external_urls.spotify};try{navigator.share(i)}catch(s){console.log("share error",s)}},S=()=>{e.trackIsSavedLoading=!0;let i=[];for(let s=0;s<o.tracks.items.length;s++){let k=o.tracks.items[s];i.push(k.id)}e.albumIsSavedLoading=!0,t.containsMySavedAlbums([o.id]).then(function(s){e.albumIsSavedLoading=!1,o.isSaved=s[0],console.log(o),l()}),t.containsMySavedTracks(i).then(function(s){e.trackIsSavedLoading=!1;for(let k=0;k<o.tracks.items.length;k++){let b=o.tracks.items[k];b.isSaved=s[k]}console.log(o.tracks),l()})};S(),n("pageInit",(i,s)=>{const k=$=>{var _=Math.floor($/1e3%60),I=Math.floor($/(1e3*60)),I=I<10?"0"+I:I;return _=_<10?"0"+_:_,I+":"+_};let b=0;for(let $=0;$<o.tracks.items.length;$++){let I=o.tracks.items[$].duration_ms;b=b+I}e.duration=k(b),l()}),t.containsMySavedAlbums([o.id]).then(function(i){e.albumIsSavedLoading=!1,e.albumIsSaved=i[0],l()});const y=()=>{v.navigate("/add/playlist/",{props:{items:o.tracks.items}})},g=()=>{e.albumIsSavedLoading=!0,l();let i;i=t.addToMySavedAlbums,i([o.id]).then(function(s){e.albumIsSavedLoading=!1,e.albumIsSaved=!e.albumIsSaved,l()},function(s){console.log(s),e.trackIsSavedLoading=!1,l()})},h=i=>{e.trackIsSavedLoading=!0,l();let s;e.albumIsSaved?s=t.removeFromMySavedTracks:s=t.addToMySavedTracks,s([i.id]).then(function(k){e.albumIsSavedLoading=!1,S(),l()},function(k){console.log(k),e.albumIsSavedLoading=!1,S(),l()})},p=()=>{const i=track.available_markets.map(j),s=track.available_markets;let k="",b="";s.includes(m)&&(b=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${m}". \u{1F601}</p></div>`);for(let _=0;_<s.length;_++)k=`${k}<div class="col"><div class="marketItem">${i[_]} ${s[_]}</div></div>`;c.sheet.create({content:`
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
                    
          ${k}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return n("pageBeforeOut",(i,s)=>{}),function(i){i.$;var s=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,s`
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
                <div class="right">
                    <a href="#" class="link icon-only" @click="${p}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${w}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${o.images.length>1?s`
            <div class="previewImageBlock">
                <img src="${o.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${o.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:s`
            `}
            <div class="contentBlock">
                ${e.showProgressbar}


                <div class="block block-strong no-margin-top optionsBlock">
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${y}">
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

                ${o.tracks!=null?s`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${o.tracks.items.map(k=>s`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${k.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${o.images.length>0?s`
                                        <img src="${o.images[o.images.length-1].url}" class="track-cover"/>
                                        `:s`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${k.name}</div>
                                            <div class="item-after">

                                                ${k.isSaved?s`<span class="material-icons-round trackHeart">favorite</span>`:s``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${k.artists.map(b=>s`${b.name} `)}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swipeout-actions-left">
                                <a href="#" class="swipeout-overswipe" @click="${()=>h(k)}">
                                    <span class="material-icons-round optionButtonIcon">
                                ${k.isSaved?"favorite":"favorite_border"}
                            </span></a>
                            </div>
                            <div class="swipeout-actions-right">
                                <a href="#" class="swipeout-overswipe" @click="${()=>f(k)}"><span
                                        class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span></a>

                            </div>
                        </li>
                        `)}
                    </ul>
                </div>
                `:s``}


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
                            <a href="${o.external_urls.spotify}" class="item-link item-content external">
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
`}}F.id="c259ea37b2";F.style=`
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
`;function D(a){console.log("artistView",a);const r=a.artist;return function(c){c.$;var l=c.$h;return c.$root,c.$f7,c.$f7route,c.$f7router,c.$theme,c.$update,c.$store,l`
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
        <div class="title">${r.name}</div>
      </div>
    </div>
    <div class="page-content">
      ${r.images.length>1?l`
      <div class="previewImageBlock">
        <img src="${r.images[1].url}" width="200px" class="imageBlur" />
        <img src="${r.images[1].url}" width="200px" class="imageNoBlur" />
      </div>
      `:l`
      `}
      <div class="contentBlock">

      </div>
    </div>
  </div>
`}}D.id="93f40a176a";D.style=`
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
`;function G(a,{$:r,$f7router:c,$f7:l,$store:n,$on:u,$update:v}){const t=n.getters.spotifyApi.value;let d=a.items;const m=n.getters.userId.value;let o={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(a.items),(!a.items||a.items.length<1)&&l.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){c.back()});const e=g=>{for(var h=0;h<d.length;h++)d[h]===g&&(d.splice(h,1),h--);d.length==0&&c.back(),v()},f=()=>{let g=r('[name="playlistSelection"]');for(let h=0;h<g.length;h++){const p=g[h];r(p).prop("checked",o.select)}o.select=!o.select,v()},w=()=>{o.playlists=[],v(),t.getUserPlaylists().then(function(g){console.log(g),o.playlists=y(g,m),console.log(o.playlists),v()},function(g){console.error(g),l.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){c.back()})})};u("pageInit",(g,h)=>{w()});const S=()=>{o.saveLoading=!0;let g=r('[name="playlistSelection"]:checked'),h=[];g.length==0&&l.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let p=0;p<d.length;p++)h.push(d[p].uri);for(let p=0;p<g.length;p++){const i=g[p].value;t.addTracksToPlaylist(i,h).then(function(s){o.saveCount=o.saveCount+1,o.saveCount==g.length&&(o.saveLoading=!1,o.select=!0,o.saveCount=0,w()),v()},function(s){console.error(s),l.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){c.back()})})}},y=(g,h)=>{let p=g.items,i=[];for(let s=0;s<p.length;s++){if(p[s].collaborative){i.push(p[s]);continue}if(p[s].owner.id==h){i.push(p[s]);continue}}return i};return function(g){g.$;var h=g.$h;return g.$root,g.$f7,g.$f7route,g.$f7router,g.$theme,g.$update,g.$store,h`
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
                <div class="title">Add ${d.length} ${d.length>1?"tracks":"track"} to playlist
                </div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${f}">
                      <i class="icon material-icons-round">${o.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${S}">
                ${o.saveLoading?h`
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
                                    ${d.map(p=>h`
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
                                                <div class="item-subtitle">${p.artists.map(i=>h`${i.name} `)}</div>
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
            <div class="block-title">${o.playlists.length>1?"Playlists":"Playlist"}</div>
            <div class="list media-list">
                <ul>
                    ${o.playlists!=null?h`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${o.playlists.map(p=>h`
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
`}}G.id="51034f1b90";function E(a,{$f7:r,$on:c,$onBeforeMount:l,$onMounted:n,$onBeforeUnmount:u,$onUnmounted:v}){let t="Jimmy",d=25,m=["Tennis","Chess","Football"];const o=()=>{r.dialog.alert("Hello World")};return l(()=>{console.log("onBeforeMount")}),n(()=>{console.log("onMounted")}),u(()=>{console.log("onBeforeUnmount")}),v(()=>{console.log("onUnmounted")}),c("pageMounted",(e,f)=>{console.log("pageMounted",f)}),c("pageInit",(e,f)=>{console.log("pageInit",f)}),c("pageBeforeIn",(e,f)=>{console.log("pageBeforeIn",f)}),c("pageAfterIn",(e,f)=>{console.log("pageAfterIn",f)}),c("pageBeforeOut",(e,f)=>{console.log("pageBeforeOut",f)}),c("pageAfterOut",(e,f)=>{console.log("pageAfterOut",f)}),c("pageBeforeRemove",(e,f)=>{console.log("pageBeforeRemove",f)}),function(e){e.$;var f=e.$h;e.$root,e.$f7;var w=e.$f7route;e.$f7router;var S=e.$theme;return e.$update,e.$store,f`
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
        <a href="#" class="button button-raised" @click=${o}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${t}. I am ${d} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${m.map(y=>f`
          <li>${y}</li>
          `)}
        </ul>
      </div>
      <div class="block-title">Extended Context</div>
      <div class="block block-strong">
        <p>Component page context as Template7 page context is also extended with some additional variables.</p>
        <h4>$f7route</h4>
        <p>Contains properties of the current route:</p>
        <ul style="padding-left:25px">
          <li><b>$f7route.url</b>: ${w.url}</li>
          <li><b>$f7route.path</b>: ${w.path}</li>
          <li><b>$f7route.params</b>: ${JSON.stringify(w.params)}</li>
          <li><b>$f7route.hash</b>: ${w.hash}</li>
          <li><b>$f7route.query</b>: ${JSON.stringify(w.query)}</li>
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
`}}E.id="84ed4d329a";E.style=`
  p {
    margin: 10px 0;
  }
`;function Q(){return function(a){a.$;var r=a.$h;return a.$root,a.$f7,a.$f7route,a.$f7router,a.$theme,a.$update,a.$store,r`
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
`}}Q.id="f2ad6b26a3";function N(a,{$:r,$f7:c,$update:l,$on:n,$store:u,$f7router:v}){const t=u.getters.spotifyApi.value;let d=!1;var m=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let o=m.exec(navigator.language)[5];console.log(o);const e=a.track,f=e.album;let w,S="play_arrow",y={trackIsSavedLoading:!0};console.log(e);const g=()=>{const b={title:`Statify - ${e.name}`,text:"Look at this track i found!",url:e.external_urls.spotify};try{navigator.share(b)}catch($){console.log("share error",$)}};n("pageInit",(b,$)=>{const _=I=>{var A=Math.floor(I/1e3%60),T=Math.floor(I/(1e3*60)),T=T<10?"0"+T:T;return A=A<10?"0"+A:A,T+":"+A};y.duration=_(e.duration_ms),l()}),t.containsMySavedTracks([e.id]).then(function(b){y.trackIsSavedLoading=!1,y.trackIsSaved=b[0],l()}),t.getAudioFeaturesForTrack(e.id).then(function(b){y.songAnalytics=b,console.log(b),l()});const h=()=>{v.navigate("/add/playlist/",{props:{items:[e]}})},p=()=>{y.trackIsSavedLoading=!0,l();let b;y.trackIsSaved?b=t.removeFromMySavedTracks:b=t.addToMySavedTracks,b([e.id]).then(function($){y.trackIsSavedLoading=!1,y.trackIsSaved=!y.trackIsSaved,console.log(y),l()},function($){console.log($),y.trackIsSavedLoading=!1,l()})},i=()=>{w=new Audio(e.preview_url),console.log(e),w.addEventListener("loadstart",function(){d=!0,l()}),w.addEventListener("canplaythrough",function(){d=!1,w.play(),l()}),w.addEventListener("ended",function(){S="play_arrow",y.showProgressbar=!1,l()}),w.addEventListener("timeupdate",function(){let b=w.currentTime/w.duration*100;c.progressbar.set(".progressbar",b),l()})},s=()=>{const b=e.available_markets.map(j),$=e.available_markets;let _="",I="";$.includes(o)&&(I=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${o}". \u{1F601}</p></div>`);for(let T=0;T<$.length;T++)_=`${_}<div class="col"><div class="marketItem">${b[T]} ${$[T]}</div></div>`;var A=c.sheet.create({content:`
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
        `});A.open()},k=()=>{w||i(),d||(w.paused?(S="pause",y.showProgressbar=!0,l(),w.play()):(S="play_arrow",y.showProgressbar=!1,l(),w.pause()))};return n("pageBeforeOut",(b,$)=>{w&&w.pause()}),function(b){b.$;var $=b.$h;return b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme,b.$update,b.$store,$`
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
                    <a href="#" class="link icon-only" @click="${s}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${g}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${f.images.length>1?$`
            <div class="previewImageBlock">
                <img src="${f.images[1].url}" width="200px" class="imageBlur" />
                <img src="${f.images[1].url}" width="200px" class="imageNoBlur" />
            </div>
            `:$`
            `}
            <div class="contentBlock">
                ${y.showProgressbar&&$`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${e.preview_url&&$`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${d?"button-loading":""}"
                        @click=${k}>
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
                            class=" button button-large button-round optionsButtons button-preloader ${y.trackIsSavedLoading?"button-loading":""}"
                            @click=${p}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${y.trackIsSaved?"favorite":"favorite_border"}
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
                                    ${f.images.length>1?$`
                                    <img src="${f.images[1].url}" width="70" />
                                    `:$`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${f.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${f.artists.map(_=>$`
                                        ${_.name} `)}
                                    </div>
                                    <div class="item-text">${f.release_date.substring(0,4)} · ${f.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${y.songAnalytics!=null&&$`
                <div class="block-title">Song analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${y.songAnalytics.danceability}"
                                data-value-text="${(y.songAnalytics.danceability*100).toFixed(0)}%"
                                data-value-text-color="#f44336" data-border-color="#f44336"
                                data-label-text="Danceability score"></div>
                        </div>
                        <div class="col text-align-center">
                            <div class="gauge gauge-init" data-type="semicircle"
                                data-value="${y.songAnalytics.valence}"
                                data-value-text="${(y.songAnalytics.valence*100).toFixed(0)}%"
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










                ${e.artists!=null?$`
                <div class="block-title">Artists</div>
                <div class="list media-list margin-bottom-half">
                    <ul>
                        ${e.artists.map(_=>$`
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

                `:$``}


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
                                    <div class="item-after">${y.duration}</div>
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
`}}N.id="d4f20e9eb7";N.style=`
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
`;var ai=[{path:"/",component:R},{path:"/track/:trackId/",async:function({router:a,to:r,resolve:c}){var l=a.app,n=l.store,u=r.params.trackId,v=n.getters.spotifyApi.value;l.preloader.show(),v.getTrack(u).then(function(t){l.preloader.hide(),c({component:N},{props:{track:t}})},function(t){console.log(t),l.preloader.hide(),l.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/album/:albumId/",async:function({router:a,to:r,resolve:c}){var l=a.app,n=l.store,u=r.params.albumId,v=n.getters.spotifyApi.value;l.preloader.show(),v.getAlbum(u).then(function(t){l.preloader.hide(),c({component:F},{props:{album:t}})},function(t){console.log(t),l.preloader.hide(),l.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/artist/:artistId/",async:function({router:a,to:r,resolve:c}){var l=a.app,n=l.store,u=r.params.artistId,v=n.getters.spotifyApi.value;l.preloader.show(),v.getArtist(u).then(function(t){l.preloader.hide(),console.log(t),c({component:D},{props:{artist:t}})},function(t){console.log(t),l.preloader.hide(),l.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){a.back()})})}},{path:"/about/",component:U},{path:"/add/playlist",component:G},{path:"/form/",component:H},{path:"/search/",component:C},{path:"/catalog/",component:V},{path:"/product/:id/",component:J},{path:"/profile/",component:Y},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:E},{path:"(.*)",component:Q}];const O=Z({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:a}){return a.products},loginMethode({state:a}){a.loginMethode()},spotifyApi({state:a}){return a.spotifyapi},userId({state:a}){return a.userId}},actions:{addProduct({state:a},r){a.products=[...a.products,r]},setUserId({state:a},r){a.userId=r},addLoginMethod({state:a},r){a.loginMethode=r},addSpotifyApi({state:a},r){a.spotifyapi=r}}});function z(a,{$f7:r,$update:c,$f7router:l}){let n="",u="";const v=m=>{n=m.target.value,c()},t=m=>{u=m.target.value,c()},d=()=>{r.dialog.alert("Username: "+n+"<br/>Password: "+u,()=>{r.loginScreen.close()})};return function(m){m.$;var o=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,o`
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
          <a href="#view-catalog" class="tab-link">
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
      <div id="view-home" class="view view-main view-init tab tab-active" data-url="/">
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
                      <input type="text" name="username" placeholder="Your username" value="${n}" @input="${v}"/>

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${u}" @input="${t}"/>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${d}">Sign In</a>

                </li>
              </ul>
              <div class="block-footer">Some text about login information.<br/>Click "Sign In" to close Login Screen</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
`}}z.id="f07e37f94c";function L(a,{$:r,$el:c,$on:l,$f7:n,$update:u,$store:v}){let t=[];l("pageInit",(e,f)=>{});let d=0;n.request({url:"./assets/data/login_faq.json",async:!0,error:function(e){console.log(e),d=d+1,d<5?request(this):m()},success:function(e){try{t=JSON.parse(e)}catch(f){console.log(f),d=d+1,d<5?request(this):m();return}u(),n.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:t.length,observer:!0})}});const m=()=>{console.log(r(".faq-loading").html()),r(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),r(".faq-loading").removeClass("skeleton-text"),r(".faq-loading").removeClass("skeleton-effect-wave")},o=()=>{v.getters.loginMethode};return function(e){e.$;var f=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,f`
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
                    <button @click="${o}"
                        class="col button button-large button-raised button-fill color-green"><i
                            class="icon spotify-icon"></i>Login with Spotify</button>
                    <p><label class="checkbox"><input type="checkbox" /><i class="icon-checkbox"></i></label> Don't show
                        this again.</p>
                </div>
                <div class="block-title faq_title">FAQ</div>
                <div data-space-between="50" class="swiper-container">
                    <div class="swiper-wrapper">
                        ${t.map(w=>f`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${w.title}</div>
                                <div class="card-content card-content-padding">${w.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${t.length==0&&f`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}L.id="35a2d362b7";L.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class si{constructor(r,c){M(this,"login",()=>{const r="https://accounts.spotify.com/authorize",c="c34980adc6984ebd9418e19f418f10dd",{origin:l}=window.location,n=`${l}/`,u=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played"].toString().replace(",","%20"),v="token";window.location=`${r}?client_id=${c}&redirect_uri=${n}&scope=${u}&response_type=${v}`});M(this,"parseUrlHash",()=>{let c=window.location.hash.substr(1).split("&");const l={};c.forEach(u=>{let v=u.split("="),t=v[0],d=v[1];l[t]=d});let n=l.expires_in;if(n!=null&&!isNaN(n)){let u=parseInt(n),v=new Date;v.setSeconds(u),l.expireOnDate=v.toJSON()}else return null;return l});M(this,"isTokenValid",r=>{try{let c=r.expireOnDate,l=Date.parse(c);return new Date().getTime()<l}catch{return!1}});this.app=r,this.width=c}}let B,P=new si(li),x,q=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(B=JSON.parse(localStorage.getItem("tokenMap")),P.isTokenValid(B)?(x=z,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?x=L:(B=P.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(B)),x=z,q=!0)):window.location.hash==null||window.location.hash==""?x=L:(B=P.parseUrlHash(),B!=null?(localStorage.setItem("tokenMap",JSON.stringify(B)),x=z,q=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(x=L,q=!1));let W=new ii;q&&W.setAccessToken(B.access_token);O.dispatch("addSpotifyApi",W);O.dispatch("addLoginMethod",P.login);var li=new ei({name:"Statify",theme:"md",el:"#app",component:x,tokenMap:B,store:O,routes:ai,on:{pageInit:function(){}}});function oi(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=oi;const ni=()=>{const a=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(a)},ri=()=>"standalone"in window.navigator&&window.navigator.standalone;ni()&&!ri()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));
