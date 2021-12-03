var Z=Object.defineProperty;var ii=(l,c,d)=>c in l?Z(l,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[c]=d;var q=(l,c,d)=>(ii(l,typeof c!="symbol"?c+"":c,d),d);import{c as U,a as ei,S as ti,F as ai}from"./vendor.4b7dcee7.js";const si=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function d(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerpolicy&&(p.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?p.credentials="include":r.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(r){if(r.ep)return;r.ep=!0;const p=d(r);fetch(r.href,p)}};si();function R(l,{$on:c,$f7:d,$update:a,$store:r}){let p={};const v=r.getters.spotifyApi.value;let s={};return v.getMe().then(function(n){p=n,r.dispatch("setUserId",n.id),a()},function(n){console.error(n),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopArtists().then(function(n){s.myTopArtists==null&&(s.myTopArtists=n,console.log("myTopArtists",n),a())},function(n){console.error(n),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyTopTracks().then(function(n){s.myTopTracks==null&&(s.myTopTracks=n,console.log("myTopTracks",n),a())},function(n){console.error(n),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),v.getMyRecentlyPlayedTracks().then(function(n){s.myRecentTracks==null&&(s.myRecentTracks=n,console.log("myTopTracks",n),a())},function(n){console.error(n),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(n){n.$;var u=n.$h;return n.$root,n.$f7,n.$f7route,n.$f7router,n.$theme,n.$update,n.$store,u`
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

            ${s.myTopTracks!=null&&s.myTopTracks.total>0&&u`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${s.myTopTracks!=null&&s.myTopTracks.total>0&&u`
                        ${s.myTopTracks.items.map(i=>u`
                        <div class="swiper-slide">
                            <a href="/track/${i.id}/">
                                ${i.album.images.length>1?u`
                                <img class="elevation-3" src="${i.album.images[1].url}" />
                                `:u`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${i.name}</div>
                                <div class="artist">${i.artists.map(e=>u`${e.name} `)}</div>
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
                        ${s.myTopArtists.items.map(i=>u`

                        <div class="swiper-slide">
                            <a href="/artist/${i.id}/">
                                ${i.images.length>1?u`
                                <img class="elevation-3 round" src="${i.images[1].url}" />
                                `:u`
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


            ${s.myRecentTracks!=null&&s.myRecentTracks.items.length>0&&u`
            <div class="block-title">Your recent Tracks</div>
            <div class="block block-strong no-padding-horizontal">

                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-mousewheel="true"
                    class="swiper-container swiper-init">
                    <div class="swiper-wrapper">
                        ${s.myRecentTracks!=null&&s.myRecentTracks.items.length>0&&u`
                        ${s.myRecentTracks.items.map(i=>u`
                        <div class="swiper-slide">
                            <a href="/track/${i.track.id}/">
                                ${i.track.album.images.length>1?u`
                                <img class="elevation-3" src="${i.track.album.images[1].url}" />
                                `:u`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${i.track.name}</div>
                                <div class="artist">${i.track.artists.map(e=>u`${e.name} `)}</div>
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
`}}R.id="bdefa840cd";R.style=`
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
`;function H(){return function(l){l.$;var c=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,c`
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
`}}H.id="b41453ffbf";function J(){return function(l){l.$;var c=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,c`
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
`}}J.id="cd9cbdc9fd";function V(l,{$store:c}){const d=c.getters.products,a=()=>{c.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(r){r.$;var p=r.$h;return r.$root,r.$f7,r.$f7route,r.$f7router,r.$theme,r.$update,r.$store,p`
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
          <button class="button button-fill" @click=${a}>Add Product</Button>
        </div>
      `}
    </div>
  </div>
`}}V.id="cc4383fa0b";function G(l,{$f7route:c,$store:d}){const a=d.getters.products,r=c.params.id;let p;return a.value.forEach(v=>{v.id===r&&(p=v)}),function(v){v.$;var s=v.$h;return v.$root,v.$f7,v.$f7route,v.$f7router,v.$theme,v.$update,v.$store,s`
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
`}}G.id="f52377f4d3";function Y(l,{$:c,$on:d,$f7:a,$store:r,$update:p}){let v={};d("pageInit",(u,i)=>{r.dispatch("getSetting","darkMode").then(function(e){v.darkMode=e;var g=a.toggle.create({el:".darkModeToggle",on:{change:function(){n()}}});g.checked!=e&&g.toggle()})});const s=()=>{a.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})},n=()=>{let u=!v.darkMode;r.dispatch("changeSetting",{key:"darkMode",value:u}),v.darkMode=u;var i=a.toggle.get(".darkModeToggle");i.checked!=u&&i.toggle();const e=c("html");i.checked?e.addClass("theme-dark"):e.removeClass("theme-dark"),p()};return function(u){u.$;var i=u.$h;return u.$root,u.$f7,u.$f7route,u.$f7router,u.$theme,u.$update,u.$store,i`
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
      <div class="block-title">Mixed and nested</div>
      <div class="list">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media">
                <i class="material-icons-round">dark_mode</i>
              </div>
              <div class="item-inner">
                <div class="item-title">With toggle</div>
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
        <button class="button button-round color-red" @click="${s}">Logout</button>
      </div>
    </div>
  </div>
`}}Y.id="8e90401eae";function C(l,{$:c,$f7:d,$on:a,$update:r,$store:p}){let v;a("pageInit",()=>{v=d.searchbar.create({el:".searchbar",customSearch:!0,on:{search(m,t,o){t!=""&&$()},clear(){s={},r()}}}),d.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let s={},n=!1;const u=p.getters.spotifyApi.value;let i={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},e={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const g=m=>{let t;m.path==null?t=m.srcElement.innerText:t=m.path[0].innerText;for(let o in e)e[o].active=!1;for(let o in e)t=="All"&&(e[o].active=!0),t==e[o].name&&(e[o].active=!0);v.query!=""&&$(),r()},$=m=>{let t=v.query;if(e.all.active){_(t,["album","artist","playlist","track"],{limit:3});return}if(e.tracks.active){_(t,["track"],{limit:20});return}if(e.albums.active){_(t,["album"],{limit:20});return}if(e.artists.active){_(t,["artist"],{limit:20});return}if(e.playlists.active){_(t,["playlist"],{limit:20});return}},_=(m,t,o,y)=>{y||(n=!0),r(),u.search(m,t,o).then(function(b){if(y)return f(b);n=!1,s=b,console.log(b),r()},function(b){console.error(b),n=!1})},f=m=>{if(m.playlists){let t=s.playlists.items.concat(m.playlists.items);s.playlists.items=t,h=!1,r()}if(m.tracks){let t=s.tracks.items.concat(m.tracks.items);s.tracks.items=t,h=!1,r()}if(m.albums){let t=s.albums.items.concat(m.albums.items);s.albums.items=t,h=!1,r()}if(m.artists){let t=s.artists.items.concat(m.artists.items);s.artists.items=t,h=!1,r()}};let h=!1;const k=m=>{if(h)return;h=!0,r();let t=s[m].items.length;console.log(t),_(v.query,[i[m]],{limit:20,offset:t},!0)};return function(m){m.$;var t=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,t`
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
                        ${Object.keys(e).map(o=>t`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${e[o].active?"button-fill":"button-outline"}"
                                @click="${g}">${e[o].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${n==!0?t`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:t``}

            ${s.tracks!=null?t`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.tracks.items.map(o=>t`
                    <li>
                        <a href="/track/${o.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${o.album.images.length>0?t`
                                <img src="${o.album.images[o.album.images.length-1].url}" class="track-cover" />
                                `:t`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${o.name}</div>
                                </div>
                                <div class="item-subtitle">${o.artists.map(y=>t`${y.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${s.tracks.items.length>2?t`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${h?"button-loading":""}"
                    @click=${()=>k("tracks")}>
                    <span class="preloader"></span>
                    <span>Load more</span>
                </button>
            </div>
            `:t` `}
            `:t``}

            ${s.albums!=null?t`
            <div class="block-title">Albums</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.albums.items.map(o=>t`
                    <li>
                        <a href="/album/${o.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${o.images.length>0?t`
                                <img src="${o.images[o.images.length-1].url}" class="album-cover" />
                                `:t`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${o.name}</div>
                                </div>
                                <div class="item-subtitle">${o.artists.map(y=>t`${y.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${s.albums.items.length>2?t`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${h?"button-loading":""}"
                        @click=${()=>k("albums")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:t` `}
            `:t``}

            ${s.artists!=null?t`
            <div class="block-title">Artists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.artists.items.map(o=>t`
                    <li>
                        <a href="/artist/${o.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${o.images.length>0?t`
                                <img src="${o.images[o.images.length-1].url}" class="artist-cover" />
                                `:t`
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
            ${s.artists.items.length>2?t`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${h?"button-loading":""}"
                        @click=${()=>k("artists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `:t` `}
            `:t``}

            ${s.playlists!=null?t`
            <div class="block-title">Playlists</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${s.playlists.items.map(o=>t`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${o.images.length>0?t`
                                <img src="${o.images[o.images.length-1].url}" class="playlist-cover" />
                                `:t`
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
            ${s.playlists.items.length>2&&t`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${h?"button-loading":""}"
                        @click=${()=>k("playlists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `}
            `:t``}

        </div>
    </div>
`}}C.id="5e96df3d94";C.style=`
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
`;function F(l,{$:c,$f7:d,$update:a,$on:r,$store:p,$f7router:v}){const s=p.getters.spotifyApi.value;var n=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let u=n.exec(navigator.language)[5];console.log(u);let i=l.album;console.log(i);let e={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const g=t=>{v.navigate("/add/playlist/",{props:{items:[t]}})},$=()=>{const t={title:`Statify - ${i.name}`,text:"Look at this album i found!",url:window.location.origin+v.url};try{navigator.share(t)}catch(o){console.log("share error",o)}},_=()=>{e.trackIsSavedLoading=!0;let t=[];for(let o=0;o<i.tracks.items.length;o++){let y=i.tracks.items[o];t.push(y.id)}e.albumIsSavedLoading=!0,s.containsMySavedAlbums([i.id]).then(function(o){e.albumIsSavedLoading=!1,i.isSaved=o[0],console.log(i),a()}),s.containsMySavedTracks(t).then(function(o){e.trackIsSavedLoading=!1;for(let y=0;y<i.tracks.items.length;y++){let b=i.tracks.items[y];b.isSaved=o[y]}console.log(i.tracks),a()})};_(),r("pageInit",(t,o)=>{const y=w=>{var S=Math.floor(w/1e3%60),I=Math.floor(w/(1e3*60)),I=I<10?"0"+I:I;return S=S<10?"0"+S:S,I+":"+S};let b=0;for(let w=0;w<i.tracks.items.length;w++){let I=i.tracks.items[w].duration_ms;b=b+I}e.duration=y(b),a()}),s.containsMySavedAlbums([i.id]).then(function(t){e.albumIsSavedLoading=!1,e.albumIsSaved=t[0],a()});const f=()=>{v.navigate("/add/playlist/",{props:{items:i.tracks.items}})},h=()=>{e.albumIsSavedLoading=!0,a();let t;t=s.addToMySavedAlbums,t([i.id]).then(function(o){e.albumIsSavedLoading=!1,e.albumIsSaved=!e.albumIsSaved,a()},function(o){console.log(o),e.trackIsSavedLoading=!1,a()})},k=t=>{e.trackIsSavedLoading=!0,a();let o;e.albumIsSaved?o=s.removeFromMySavedTracks:o=s.addToMySavedTracks,o([t.id]).then(function(y){e.albumIsSavedLoading=!1,_(),a()},function(y){console.log(y),e.albumIsSavedLoading=!1,_(),a()})},m=()=>{const t=track.available_markets.map(U),o=track.available_markets;let y="",b="";o.includes(u)&&(b=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${u}". \u{1F601}</p></div>`);for(let S=0;S<o.length;S++)y=`${y}<div class="col"><div class="marketItem">${t[S]} ${o[S]}</div></div>`;d.sheet.create({content:`
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
        `}).open()};return r("pageBeforeOut",(t,o)=>{}),function(t){t.$;var o=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,o`
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
                    <a href="#" class="link icon-only" @click="${m}">
                        <i class="icon material-icons">language</i>
                    </a>
                    <a href="#" class="link icon-only" @click="${$}">
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
                        <a class=" button button-large button-round optionsButtons" @click="${f}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                                class=" button button-large button-round optionsButtons button-preloader ${e.albumIsSavedLoading?"button-loading":""}"
                                @click=${h}>
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
                        ${i.tracks.items.map(y=>o`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${y.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${i.images.length>0?o`
                                        <img src="${i.images[i.images.length-1].url}" class="track-cover"/>
                                        `:o`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${y.name}</div>
                                            <div class="item-after">

                                                ${y.isSaved?o`<span class="material-icons-round trackHeart">favorite</span>`:o``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${y.artists.map(b=>o`${b.name} `)}
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
                                <a href="#" class="swipeout-overswipe" @click="${()=>g(y)}"><span
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
`}}F.id="f570ecac6a";F.style=`
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
`;function D(l,{$store:c,$update:d}){console.log("artistView",l);const a=l.artist,r=c.getters.spotifyApi.value;let p={},s=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(navigator.language)[5];return p.topTracks==null&&r.getArtistTopTracks(a.id,s).then(function(n){console.log("topTracks",n),p.topTracks=n,d()}),function(n){n.$;var u=n.$h;return n.$root,n.$f7,n.$f7route,n.$f7router,n.$theme,n.$update,n.$store,u`
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
      </div>
    </div>
    <div class="page-content">
      ${a.images.length>1?u`
      <div class="previewImageBlock">
        <img src="${a.images[1].url}" width="200px" height="200px" class="imageBlur" />
        <img src="${a.images[1].url}" width="200px" height="200px" class="imageNoBlur" />
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
        ${a.genres.length>0&&u`
          <div class="block-title">Genre</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="false"
            data-mousewheel="true" class="swiper-container swiper-init">
            <div class="swiper-wrapper">
              ${a.genres.map(i=>u`
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



        ${p.topTracks!=null&&p.topTracks.tracks.length>0&&u`
        <div class="block-title">Artist top Tracks</div>
        <div class="block block-strong no-padding-horizontal">
          <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true"
            data-mousewheel="true" class="swiper-container swiper-init topTracks">
            <div class="swiper-wrapper">
              ${p.topTracks.tracks.map(i=>u`
              <div class="swiper-slide">
                <a href="/track/${i.id}/">
                  ${i.album.images.length>1?u`
                  <img class="elevation-3" src="${i.album.images[1].url}" />
                  `:u`
                  <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                  `}
                  <div class="title">${i.name}</div>
                  <div class="artist">${i.artists.map(e=>u`${e.name} `)}</div>
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
`}}D.id="6543b85908";D.style=`
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
`;function W(l,{$:c,$f7router:d,$f7:a,$store:r,$on:p,$update:v}){const s=r.getters.spotifyApi.value;let n=l.items;const u=r.getters.userId.value;let i={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(l.items),(!l.items||l.items.length<1)&&a.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){d.back()});const e=h=>{for(var k=0;k<n.length;k++)n[k]===h&&(n.splice(k,1),k--);n.length==0&&d.back(),v()},g=()=>{let h=c('[name="playlistSelection"]');for(let k=0;k<h.length;k++){const m=h[k];c(m).prop("checked",i.select)}i.select=!i.select,v()},$=()=>{i.playlists=[],v(),s.getUserPlaylists().then(function(h){console.log(h),i.playlists=f(h,u),console.log(i.playlists),v()},function(h){console.error(h),a.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})};p("pageInit",(h,k)=>{$()});const _=()=>{i.saveLoading=!0;let h=c('[name="playlistSelection"]:checked'),k=[];h.length==0&&a.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let m=0;m<n.length;m++)k.push(n[m].uri);for(let m=0;m<h.length;m++){const t=h[m].value;s.addTracksToPlaylist(t,k).then(function(o){i.saveCount=i.saveCount+1,i.saveCount==h.length&&(i.saveLoading=!1,i.select=!0,i.saveCount=0,$()),v()},function(o){console.error(o),a.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})}},f=(h,k)=>{let m=h.items,t=[];for(let o=0;o<m.length;o++){if(m[o].collaborative){t.push(m[o]);continue}if(m[o].owner.id==k){t.push(m[o]);continue}}return t};return function(h){h.$;var k=h.$h;return h.$root,h.$f7,h.$f7route,h.$f7router,h.$theme,h.$update,h.$store,k`
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
                    <a href="#" class="link icon-only" @click="${g}">
                      <i class="icon material-icons-round">${i.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${_}">
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
                                    ${n.map(m=>k`
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">

                                                <img src="./assets/icons/library_music_black_48dp.svg" width="35" />

                                            </div>
                                            <div class="item-inner">
                                                <div class="item-title-row">
                                                    <div class="item-title">${m.name}</div>
                                                    <div class="item-after"><i class="icon material-icons-round" @click="${()=>e(m)}">cancel</i></div>
                                                </div>
                                                <div class="item-subtitle">${m.artists.map(t=>k`${t.name} `)}</div>
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
                            ${i.playlists.map(m=>k`
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
`}}W.id="437b7239e0";function E(l,{$f7:c,$on:d,$onBeforeMount:a,$onMounted:r,$onBeforeUnmount:p,$onUnmounted:v}){let s="Jimmy",n=25,u=["Tennis","Chess","Football"];const i=()=>{c.dialog.alert("Hello World")};return a(()=>{console.log("onBeforeMount")}),r(()=>{console.log("onMounted")}),p(()=>{console.log("onBeforeUnmount")}),v(()=>{console.log("onUnmounted")}),d("pageMounted",(e,g)=>{console.log("pageMounted",g)}),d("pageInit",(e,g)=>{console.log("pageInit",g)}),d("pageBeforeIn",(e,g)=>{console.log("pageBeforeIn",g)}),d("pageAfterIn",(e,g)=>{console.log("pageAfterIn",g)}),d("pageBeforeOut",(e,g)=>{console.log("pageBeforeOut",g)}),d("pageAfterOut",(e,g)=>{console.log("pageAfterOut",g)}),d("pageBeforeRemove",(e,g)=>{console.log("pageBeforeRemove",g)}),function(e){e.$;var g=e.$h;e.$root,e.$f7;var $=e.$f7route;e.$f7router;var _=e.$theme;return e.$update,e.$store,g`
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
        <p>Hello! My name is ${s}. I am ${n} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${u.map(f=>g`
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
          <li><b>$theme.ios</b>: ${_.ios}</li>
          <li><b>$theme.md</b>: ${_.md}</li>
          <li><b>$theme.aurora</b>: ${_.aurora}</li>
        </ul>
      </div>
    </div>
  </div>
`}}E.id="e0e7f8b8ff";E.style=`
  p {
    margin: 10px 0;
  }
`;function Q(){return function(l){l.$;var c=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,c`
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
`}}Q.id="0cb1aea05d";const li={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"};function N(l,{$:c,$f7:d,$update:a,$on:r,$store:p,$f7router:v}){const s=p.getters.spotifyApi.value;let n=!1;var u=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let i=u.exec(navigator.language)[5];console.log(i);const e=l.track,g=e.album;let $,_="play_arrow",f={trackIsSavedLoading:!0};console.log(e);const h=()=>{const b={title:`Statify - ${e.name}`,text:"Look at this track i found!",url:window.location.origin+v.url};try{navigator.share(b)}catch(w){console.log("share error",w)}};r("pageInit",(b,w)=>{const S=I=>{var x=Math.floor(I/1e3%60),B=Math.floor(I/(1e3*60)),B=B<10?"0"+B:B;return x=x<10?"0"+x:x,B+":"+x};f.duration=S(e.duration_ms),a()}),s.containsMySavedTracks([e.id]).then(function(b){f.trackIsSavedLoading=!1,f.trackIsSaved=b[0],a()}),s.getAudioFeaturesForTrack(e.id).then(function(b){f.songAnalytics=b,console.log(b),a()});const k=()=>{v.navigate("/add/playlist/",{props:{items:[e]}})},m=()=>{f.trackIsSavedLoading=!0,a();let b;f.trackIsSaved?b=s.removeFromMySavedTracks:b=s.addToMySavedTracks,b([e.id]).then(function(w){f.trackIsSavedLoading=!1,f.trackIsSaved=!f.trackIsSaved,console.log(f),a()},function(w){console.log(w),f.trackIsSavedLoading=!1,a()})},t=()=>{$=new Audio(e.preview_url),console.log(e),$.addEventListener("loadstart",function(){n=!0,a()}),$.addEventListener("canplaythrough",function(){n=!1,$.play(),a()}),$.addEventListener("ended",function(){_="play_arrow",f.showProgressbar=!1,a()}),$.addEventListener("timeupdate",function(){let b=$.currentTime/$.duration*100;d.progressbar.set(".progressbar",b),a()})},o=()=>{const b=e.available_markets.map(U),w=e.available_markets;let S="",I="";w.includes(i)&&(I=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${i}". \u{1F601}</p></div>`);for(let B=0;B<w.length;B++)S=`${S}<div class="col"><div class="marketItem">${b[B]} ${w[B]}</div></div>`;var x=d.sheet.create({content:`
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
        `});x.open()},y=()=>{$||t(),n||($.paused?(_="pause",f.showProgressbar=!0,a(),$.play()):(_="play_arrow",f.showProgressbar=!1,a(),$.pause()))};return r("pageBeforeOut",(b,w)=>{$&&$.pause()}),function(b){b.$;var w=b.$h;return b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme,b.$update,b.$store,w`
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
                    <a href="#" class="link icon-only" @click="${h}">
                        <i class="icon material-icons">share</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${g.images.length>1?w`
            <div class="previewImageBlock">
                <img src="${g.images[1].url}" width="200px" class="imageBlur" />
                <img src="${g.images[1].url}" width="200px" class="imageNoBlur" />
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
                            ${_}
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
                            @click=${m}>
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
                            <a href="/album/${g.id}/" class="item-link item-content">
                                <div class="item-media">
                                    ${g.images.length>1?w`
                                    <img src="${g.images[1].url}" width="70" />
                                    `:w`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${g.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${g.artists.map(S=>w`
                                        ${S.name} `)}
                                    </div>
                                    <div class="item-text">${g.release_date.substring(0,4)} · ${g.total_tracks}
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
                                    <h1 class="margin-bottom-half" style="color: var(--f7-navbar-link-color);">${li[f.songAnalytics.key]}</h1>
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
                        ${e.artists.map(S=>w`
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
`}}N.id="cc25b7bad3";N.style=`
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
`;var oi=[{path:"/",component:R},{path:"/track/:trackId/",async:function({router:l,to:c,resolve:d}){var a=l.app,r=a.store,p=c.params.trackId,v=r.getters.spotifyApi.value;a.preloader.show(),v.getTrack(p).then(function(s){a.preloader.hide(),d({component:N},{props:{track:s}})},function(s){console.log(s),a.preloader.hide(),a.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){l.back()})})}},{path:"/album/:albumId/",async:function({router:l,to:c,resolve:d}){var a=l.app,r=a.store,p=c.params.albumId,v=r.getters.spotifyApi.value;a.preloader.show(),v.getAlbum(p).then(function(s){a.preloader.hide(),d({component:F},{props:{album:s}})},function(s){console.log(s),a.preloader.hide(),a.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){l.back()})})}},{path:"/artist/:artistId/",async:function({router:l,to:c,resolve:d}){var a=l.app,r=a.store,p=c.params.artistId,v=r.getters.spotifyApi.value;a.preloader.show(),v.getArtist(p).then(function(s){a.preloader.hide(),console.log(s),d({component:D},{props:{artist:s}})},function(s){console.log(s),a.preloader.hide(),a.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){l.back()})})}},{path:"/about/",component:H},{path:"/add/playlist",component:W},{path:"/form/",component:J},{path:"/search/",component:C},{path:"/catalog/",component:V},{path:"/product/:id/",component:G},{path:"/profile/",component:Y},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:E},{path:"(.*)",component:Q}];let O={darkMode:!1};const ni=l=>{try{JSON.parse(l)}catch(c){return console.log(c),!1}return!0},X="settings",j=ei({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:l}){return l.products},loginMethode({state:l}){l.loginMethode()},spotifyApi({state:l}){return l.spotifyapi},userId({state:l}){return l.userId}},actions:{addProduct({state:l},c){l.products=[...l.products,c]},setUserId({state:l},c){l.userId=c},addLoginMethod({state:l},c){l.loginMethode=c},addSpotifyApi({state:l},c){l.spotifyapi=c},changeSetting({state:l},c){let d=c.key,a=c.value;console.log(d,a),O[d]=a;let r=JSON.stringify(O);localStorage.setItem(X,r)},getSetting({state:l},c){let d=localStorage.getItem(X);if(ni(d)&&d!=null){let a=JSON.parse(d);if(a.hasOwnProperty(c))return a[c]}return O[c]}}});function z(l,{$f7:c,$update:d,$f7router:a}){let r="",p="";const v=i=>{r=i.target.value,d()},s=i=>{p=i.target.value,d()},n=i=>{console.log(i)},u=()=>{c.dialog.alert("Username: "+r+"<br/>Password: "+p,()=>{c.loginScreen.close()})};return function(i){i.$;var e=i.$h;return i.$root,i.$f7,i.$f7route,i.$f7router,i.$theme,i.$update,i.$store,e`
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
                      <input type="password" name="password" placeholder="Your password" value="${p}" @input="${s}"/>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${u}">Sign In</a>

                </li>
              </ul>
              <div class="block-footer">Some text about login information.<br/>Click "Sign In" to close Login Screen</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
`}}z.id="2c25ead789";function L(l,{$:c,$el:d,$on:a,$f7:r,$update:p,$store:v}){let s=[];a("pageInit",(e,g)=>{});let n=0;r.request({url:"./assets/data/login_faq.json",async:!0,error:function(e){console.log(e),n=n+1,n<5?request(this):u()},success:function(e){try{s=JSON.parse(e)}catch(g){console.log(g),n=n+1,n<5?request(this):u();return}p(),r.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:s.length,observer:!0})}});const u=()=>{console.log(c(".faq-loading").html()),c(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),c(".faq-loading").removeClass("skeleton-text"),c(".faq-loading").removeClass("skeleton-effect-wave")},i=()=>{v.getters.loginMethode};return function(e){e.$;var g=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,g`
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
                        ${s.map($=>g`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${$.title}</div>
                                <div class="card-content card-content-padding">${$.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${s.length==0&&g`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}L.id="d727a97d5f";L.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class ri{constructor(c,d){q(this,"login",()=>{const c="https://accounts.spotify.com/authorize",d="c34980adc6984ebd9418e19f418f10dd",{origin:a}=window.location,r=`${a}/`,p=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played"].toString().replace(",","%20"),v="token";window.location=`${c}?client_id=${d}&redirect_uri=${r}&scope=${p}&response_type=${v}`});q(this,"parseUrlHash",()=>{let d=window.location.hash.substr(1).split("&");const a={};d.forEach(p=>{let v=p.split("="),s=v[0],n=v[1];a[s]=n});let r=a.expires_in;if(r!=null&&!isNaN(r)){let p=parseInt(r),v=new Date;v.setSeconds(p),a.expireOnDate=v.toJSON()}else return null;return a});q(this,"isTokenValid",c=>{try{let d=c.expireOnDate,a=Date.parse(d);return new Date().getTime()<a}catch{return!1}});this.app=c,this.width=d}}let T,P=new ri(ci),A,M=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(T=JSON.parse(localStorage.getItem("tokenMap")),P.isTokenValid(T)?(A=z,M=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?A=L:(T=P.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(T)),A=z,M=!0)):window.location.hash==null||window.location.hash==""?A=L:(T=P.parseUrlHash(),T!=null?(localStorage.setItem("tokenMap",JSON.stringify(T)),A=z,M=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(A=L,M=!1));let K=new ti;M&&K.setAccessToken(T.access_token);j.dispatch("addSpotifyApi",K);j.dispatch("addLoginMethod",P.login);var ci=new ai({name:"Statify",theme:"md",el:"#app",component:A,tokenMap:T,store:j,routes:oi,on:{pageInit:function(){}}});function di(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=di;const vi=()=>{const l=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(l)},ui=()=>"standalone"in window.navigator&&window.navigator.standalone;vi()&&!ui()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));
