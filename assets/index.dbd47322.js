var W=Object.defineProperty;var X=(s,c,d)=>c in s?W(s,c,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[c]=d;var q=(s,c,d)=>(X(s,typeof c!="symbol"?c+"":c,d),d);import{c as D,a as K,S as Z,F as ii}from"./vendor.4b7dcee7.js";const ei=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const p of o)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function d(o){const p={};return o.integrity&&(p.integrity=o.integrity),o.referrerpolicy&&(p.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?p.credentials="include":o.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function t(o){if(o.ep)return;o.ep=!0;const p=d(o);fetch(o.href,p)}};ei();function P(s,{$on:c,$f7:d,$update:t,$store:o}){let p={};const u=o.getters.spotifyApi.value;let a={};return u.getMe().then(function(v){p=v,o.dispatch("setUserId",v.id),t()},function(v){console.error(v),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),u.getMyTopArtists().then(function(v){a.myTopArtists==null&&(a.myTopArtists=v,console.log("myTopArtists",v),t())},function(v){console.error(v),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),u.getMyTopTracks().then(function(v){a.myTopTracks==null&&(a.myTopTracks=v,console.log("myTopTracks",v),t())},function(v){console.error(v),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),u.getMyRecentlyPlayedTracks().then(function(v){a.myRecentTracks==null&&(a.myRecentTracks=v,console.log("myTopTracks",v),t())},function(v){console.error(v),d.dialog.alert("An error occurred when loading the data, your saved token will be deleted and you will have to log in again after reloading the app.","Sorry \u{1F614}",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})}),function(v){v.$;var m=v.$h;return v.$root,v.$f7,v.$f7route,v.$f7router,v.$theme,v.$update,v.$store,m`
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

            ${a.myTopTracks!=null&&a.myTopTracks.total>0&&m`
            <div class="block-title">Your top Tracks</div>
            <div class="block block-strong no-padding-horizontal">
                <div data-space-between="15" data-slides-per-view="auto" data-free-mode="true" data-looped-slides="true" data-mousewheel="true"
                    class="swiper-container swiper-init topTracks">
                    <div class="swiper-wrapper">
                        ${a.myTopTracks!=null&&a.myTopTracks.total>0&&m`
                        ${a.myTopTracks.items.map(n=>m`
                        <div class="swiper-slide">
                            <a href="/track/${n.id}/">
                                ${n.album.images.length>1?m`
                                <img class="elevation-3" src="${n.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${n.name}</div>
                                <div class="artist">${n.artists.map(e=>m`${e.name} `)}</div>
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
                        ${a.myTopArtists.items.map(n=>m`

                        <div class="swiper-slide">
                            <a href="/artist/${n.id}/">
                                ${n.images.length>1?m`
                                <img class="elevation-3 round" src="${n.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title text-align-center">${n.name}</div>
                                <div class="artist text-align-center">${n.followers.total.toLocaleString()} Followers
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
                        ${a.myRecentTracks.items.map(n=>m`
                        <div class="swiper-slide">
                            <a href="/track/${n.track.id}/">
                                ${n.track.album.images.length>1?m`
                                <img class="elevation-3" src="${n.track.album.images[1].url}" />
                                `:m`
                                <img class="elevation-3" src="./assets/icons/audiotrack_black_48dp.svg" width="100" />
                                `}
                                <div class="title">${n.track.name}</div>
                                <div class="artist">${n.track.artists.map(e=>m`${e.name} `)}</div>
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
`}}P.id="89b328d1db";P.style=`
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
`;function j(){return function(s){s.$;var c=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,c`
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
`}}j.id="815339d218";function U(){return function(s){s.$;var c=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,c`
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
`}}U.id="6e456275e2";function H(s,{$store:c}){const d=c.getters.products,t=()=>{c.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(o){o.$;var p=o.$h;return o.$root,o.$f7,o.$f7route,o.$f7router,o.$theme,o.$update,o.$store,p`
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
          ${d.value.map(u=>p`
            <li><a href="/product/${u.id}/">${u.title}</a></li>
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
`}}H.id="154489a41c";function V(s,{$f7route:c,$store:d}){const t=d.getters.products,o=c.params.id;let p;return t.value.forEach(u=>{u.id===o&&(p=u)}),function(u){u.$;var a=u.$h;return u.$root,u.$f7,u.$f7route,u.$f7router,u.$theme,u.$update,u.$store,a`
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
`}}V.id="c37d7df4f5";function J(s,{$f7:c}){const d=()=>{c.dialog.confirm("Do you really want to log out?","Logout",function(){localStorage.removeItem("tokenMap"),window.location.href=window.location.origin+window.location.pathname})};return function(t){t.$;var o=t.$h;return t.$root,t.$f7,t.$f7route,t.$f7router,t.$theme,t.$update,t.$store,o`
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
        <button class="button button-round color-red" @click="${d}">Logout</button>
      </div>
    </div>
  </div>
`}}J.id="6ce7727cc0";function R(s,{$:c,$f7:d,$on:t,$update:o,$store:p}){let u;t("pageInit",()=>{u=d.searchbar.create({el:".searchbar",customSearch:!0,on:{search(l,i,r){i!=""&&k()},clear(){a={},o()}}}),d.swiper.create(".chip-swiper",{speed:400,spaceBetween:10,loop:!1,slidesPerView:"auto",observer:!0})});let a={},v=!1;const m=p.getters.spotifyApi.value;let n={tracks:"track",artists:"artist",albums:"album",playlists:"playlist"},e={all:{active:!0,name:"All"},artists:{active:!0,name:"Artists"},albums:{active:!0,name:"Albums"},tracks:{active:!0,name:"Songs"},playlists:{active:!0,name:"Playlists"}};const f=l=>{let i;l.path==null?i=l.srcElement.innerText:i=l.path[0].innerText;for(let r in e)e[r].active=!1;for(let r in e)i=="All"&&(e[r].active=!0),i==e[r].name&&(e[r].active=!0);u.query!=""&&k(),o()},k=l=>{let i=u.query;if(e.all.active){_(i,["album","artist","playlist","track"],{limit:3});return}if(e.tracks.active){_(i,["track"],{limit:20});return}if(e.albums.active){_(i,["album"],{limit:20});return}if(e.artists.active){_(i,["artist"],{limit:20});return}if(e.playlists.active){_(i,["playlist"],{limit:20});return}},_=(l,i,r,g)=>{g||(v=!0),o(),m.search(l,i,r).then(function(h){if(g)return y(h);v=!1,a=h,console.log(h),o()},function(h){console.error(h),v=!1})},y=l=>{if(l.playlists){let i=a.playlists.items.concat(l.playlists.items);a.playlists.items=i,b=!1,o()}if(l.tracks){let i=a.tracks.items.concat(l.tracks.items);a.tracks.items=i,b=!1,o()}if(l.albums){let i=a.albums.items.concat(l.albums.items);a.albums.items=i,b=!1,o()}if(l.artists){let i=a.artists.items.concat(l.artists.items);a.artists.items=i,b=!1,o()}};let b=!1;const w=l=>{if(b)return;b=!0,o();let i=a[l].items.length;console.log(i),_(u.query,[n[l]],{limit:20,offset:i},!0)};return function(l){l.$;var i=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,i`
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
                        ${Object.keys(e).map(r=>i`
                        <div class="swiper-slide chip-slide">
                            <button
                                class="button button-round ${e[r].active?"button-fill":"button-outline"}"
                                @click="${f}">${e[r].name}</button>
                        </div>
                        `)}
                    </div>
                </div>
            </div>

            ${v==!0?i`
            <div class="block text-align-center">
                <div class="preloader color-multi"></div>
            </div>
            `:i``}

            ${a.tracks!=null?i`
            <div class="block-title">Songs</div>
            <div class="list media-list margin-bottom-half">
                <ul>
                    ${a.tracks.items.map(r=>i`
                    <li>
                        <a href="/track/${r.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${r.album.images.length>0?i`
                                <img src="${r.album.images[r.album.images.length-1].url}" class="track-cover" />
                                `:i`
                                <img src="./assets/icons/audiotrack_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${r.name}</div>
                                </div>
                                <div class="item-subtitle">${r.artists.map(g=>i`${g.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.tracks.items.length>2?i`
            <div class="block no-margin-top text-align-center">
                <button
                    class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                    @click=${()=>w("tracks")}>
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
                    ${a.albums.items.map(r=>i`
                    <li>
                        <a href="/album/${r.id}/" class="item-link item-content">
                            <div class="item-media">
                                ${r.images.length>0?i`
                                <img src="${r.images[r.images.length-1].url}" class="album-cover" />
                                `:i`
                                <img src="./assets/icons/library_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${r.name}</div>
                                </div>
                                <div class="item-subtitle">${r.artists.map(g=>i`${g.name} `)}</div>
                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.albums.items.length>2?i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                        @click=${()=>w("albums")}>
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
                    ${a.artists.items.map(r=>i`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${r.images.length>0?i`
                                <img src="${r.images[r.images.length-1].url}" class="artist-cover" />
                                `:i`
                                <img src="./assets/icons/face_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${r.name}</div>
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
                        class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                        @click=${()=>w("artists")}>
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
                    ${a.playlists.items.map(r=>i`
                    <li>
                        <a href="#" class="item-link item-content">
                            <div class="item-media">
                                ${r.images.length>0?i`
                                <img src="${r.images[r.images.length-1].url}" class="playlist-cover" />
                                `:i`
                                <img src="./assets/icons/queue_music_black_48dp.svg" width="45" />
                                `}
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">${r.name}</div>
                                </div>
                                <div class="item-subtitle">${r.owner.display_name}</div>

                            </div>
                        </a>
                    </li>
                    `)}
                </ul>
            </div>
            ${a.playlists.items.length>2&&i`
                <div class="block no-margin-top text-align-center">
                    <button
                        class="button button-small button-outline button-round button-preloader button-load-more ${b?"button-loading":""}"
                        @click=${()=>w("playlists")}>
                        <span class="preloader"></span>
                        <span>Load more</span>
                    </button>
                </div>
                `}
            `:i``}

        </div>
    </div>
`}}R.id="a0fd7b17ca";R.style=`
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
`;function C(s,{$:c,$f7:d,$update:t,$on:o,$store:p,$f7router:u}){const a=p.getters.spotifyApi.value;var v=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let m=v.exec(navigator.language)[5];console.log(m);let n=s.album;console.log(n);let e={albumIsSavedLoading:!0,trackIsSavedLoading:!0};const f=l=>{u.navigate("/add/playlist/",{props:{items:[l]}})},k=()=>{e.trackIsSavedLoading=!0;let l=[];for(let i=0;i<n.tracks.items.length;i++){let r=n.tracks.items[i];l.push(r.id)}e.albumIsSavedLoading=!0,a.containsMySavedAlbums([n.id]).then(function(i){e.albumIsSavedLoading=!1,n.isSaved=i[0],console.log(n),t()}),a.containsMySavedTracks(l).then(function(i){e.trackIsSavedLoading=!1;for(let r=0;r<n.tracks.items.length;r++){let g=n.tracks.items[r];g.isSaved=i[r]}console.log(n.tracks),t()})};k(),o("pageInit",(l,i)=>{const r=h=>{var $=Math.floor(h/1e3%60),S=Math.floor(h/(1e3*60)),S=S<10?"0"+S:S;return $=$<10?"0"+$:$,S+":"+$};let g=0;for(let h=0;h<n.tracks.items.length;h++){let S=n.tracks.items[h].duration_ms;g=g+S}e.duration=r(g),t()}),a.containsMySavedAlbums([n.id]).then(function(l){e.albumIsSavedLoading=!1,e.albumIsSaved=l[0],t()});const _=()=>{u.navigate("/add/playlist/",{props:{items:n.tracks.items}})},y=()=>{e.albumIsSavedLoading=!0,t();let l;l=a.addToMySavedAlbums,l([n.id]).then(function(i){e.albumIsSavedLoading=!1,e.albumIsSaved=!e.albumIsSaved,t()},function(i){console.log(i),e.trackIsSavedLoading=!1,t()})},b=l=>{e.trackIsSavedLoading=!0,t();let i;e.albumIsSaved?i=a.removeFromMySavedTracks:i=a.addToMySavedTracks,i([l.id]).then(function(r){e.albumIsSavedLoading=!1,k(),t()},function(r){console.log(r),e.albumIsSavedLoading=!1,k(),t()})},w=()=>{const l=track.available_markets.map(D),i=track.available_markets;let r="",g="";i.includes(m)&&(g=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${m}". \u{1F601}</p></div>`);for(let $=0;$<i.length;$++)r=`${r}<div class="col"><div class="marketItem">${l[$]} ${i[$]}</div></div>`;d.sheet.create({content:`
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
                    
          ${r}

        </div>
              </div>
            </div>
          </div>
        `}).open()};return o("pageBeforeOut",(l,i)=>{}),function(l){l.$;var i=l.$h;return l.$root,l.$f7,l.$f7route,l.$f7router,l.$theme,l.$update,l.$store,i`
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
                <div class="title">${n.name}</div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${w}">
                        <i class="icon material-icons">language</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${n.images.length>1?i`
            <div class="previewImageBlock">
                <img src="${n.images[1].url}" width="200px" class="imageBlur"/>
                <img src="${n.images[1].url}" width="200px" class="imageNoBlur"/>
            </div>
            `:i`
            `}
            <div class="contentBlock">
                ${e.showProgressbar}


                <div class="block block-strong no-margin-top optionsBlock">
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${_}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                                class=" button button-large button-round optionsButtons button-preloader ${e.albumIsSavedLoading?"button-loading":""}"
                                @click=${y}>
                            <span class="preloader"></span>
                            <span></span>
                            <span class="material-icons-round optionButtonIcon">
                                ${e.albumIsSaved?"favorite":"favorite_border"}
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Beginn Pagecontent -->

                ${n.tracks!=null?i`
                <div class="block-title">Songs</div>
                <div class="list media-list">
                    <ul>
                        ${n.tracks.items.map(r=>i`
                        <li class="swipeout">
                            <div class="swipeout-content">
                                <a href="/track/${r.id}/" class="item-link item-content">
                                    <div class="item-media">
                                        ${n.images.length>0?i`
                                        <img src="${n.images[n.images.length-1].url}" class="track-cover"/>
                                        `:i`
                                        <img src="./assets/icons/audiotrack_black_48dp.svg" width="45"/>
                                        `}
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${r.name}</div>
                                            <div class="item-after">

                                                ${r.isSaved?i`<span class="material-icons-round trackHeart">favorite</span>`:i``}
                                            </div>
                                        </div>
                                        <div class="item-subtitle">${r.artists.map(g=>i`${g.name} `)}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swipeout-actions-left">
                                <a href="#" class="swipeout-overswipe" @click="${()=>b(r)}">
                                    <span class="material-icons-round optionButtonIcon">
                                ${r.isSaved?"favorite":"favorite_border"}
                            </span></a>
                            </div>
                            <div class="swipeout-actions-right">
                                <a href="#" class="swipeout-overswipe" @click="${()=>f(r)}"><span
                                        class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span></a>

                            </div>
                        </li>
                        `)}
                    </ul>
                </div>
                `:i``}


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
                            <a href="${n.external_urls.spotify}" class="item-link item-content external">
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
`}}C.id="28686b1be0";C.style=`
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
`;function F(s){console.log("artistView",s);const c=s.artist;return function(d){d.$;var t=d.$h;return d.$root,d.$f7,d.$f7route,d.$f7router,d.$theme,d.$update,d.$store,t`
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
        <div class="title">${c.name}</div>
      </div>
    </div>
    <div class="page-content">
      ${c.images.length>1?t`
      <div class="previewImageBlock">
        <img src="${c.images[1].url}" width="200px" class="imageBlur" />
        <img src="${c.images[1].url}" width="200px" class="imageNoBlur" />
      </div>
      `:t`
      `}
      <div class="contentBlock">

      </div>
    </div>
  </div>
`}}F.id="7976079f41";F.style=`
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
`;function Y(s,{$:c,$f7router:d,$f7:t,$store:o,$on:p,$update:u}){const a=o.getters.spotifyApi.value;let v=s.items;const m=o.getters.userId.value;let n={playlistsLoading:!0,playlists:[],saveLoading:!1,saveCount:0,select:!0};console.log(s.items),(!s.items||s.items.length<1)&&t.dialog.alert("An error is happend, 0 tracks found to add to your playlist.","Sorry \u{1F614}",function(){d.back()});const e=b=>{for(var w=0;w<v.length;w++)v[w]===b&&(v.splice(w,1),w--);v.length==0&&d.back(),u()},f=()=>{let b=c('[name="playlistSelection"]');for(let w=0;w<b.length;w++){const l=b[w];c(l).prop("checked",n.select)}n.select=!n.select,u()},k=()=>{n.playlists=[],u(),a.getUserPlaylists().then(function(b){console.log(b),n.playlists=y(b,m),console.log(n.playlists),u()},function(b){console.error(b),t.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})};p("pageInit",(b,w)=>{k()});const _=()=>{n.saveLoading=!0;let b=c('[name="playlistSelection"]:checked'),w=[];b.length==0&&t.toast.create({text:"No items selected \u{1F928}.",closeTimeout:3e3}).open();for(let l=0;l<v.length;l++)w.push(v[l].uri);for(let l=0;l<b.length;l++){const i=b[l].value;a.addTracksToPlaylist(i,w).then(function(r){n.saveCount=n.saveCount+1,n.saveCount==b.length&&(n.saveLoading=!1,n.select=!0,n.saveCount=0,k()),u()},function(r){console.error(r),t.dialog.alert("An error occurred when loading the data, you go back to the previous page.","Sorry \u{1F614}",function(){d.back()})})}},y=(b,w)=>{let l=b.items,i=[];for(let r=0;r<l.length;r++){if(l[r].collaborative){i.push(l[r]);continue}if(l[r].owner.id==w){i.push(l[r]);continue}}return i};return function(b){b.$;var w=b.$h;return b.$root,b.$f7,b.$f7route,b.$f7router,b.$theme,b.$update,b.$store,w`
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
                <div class="title">Add ${v.length} ${v.length>1?"tracks":"track"} to playlist
                </div>
                <div class="right">
                    <a href="#" class="link icon-only" @click="${f}">
                      <i class="icon material-icons-round">${n.select?"select_all":"deselect"}</i>
                    </a>
                  </div>
            </div>
        </div>
        <div class="fab-backdrop"></div>
        <div class="fab fab-right-bottom">
            <a href="#" @click="${_}">
                ${n.saveLoading?w`
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
                                    ${v.map(l=>w`
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media">

                                                <img src="./assets/icons/library_music_black_48dp.svg" width="35" />

                                            </div>
                                            <div class="item-inner">
                                                <div class="item-title-row">
                                                    <div class="item-title">${l.name}</div>
                                                    <div class="item-after"><i class="icon material-icons-round" @click="${()=>e(l)}">cancel</i></div>
                                                </div>
                                                <div class="item-subtitle">${l.artists.map(i=>w`${i.name} `)}</div>
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
            <div class="block-title">${n.playlists.length>1?"Playlists":"Playlist"}</div>
            <div class="list media-list">
                <ul>
                    ${n.playlists!=null?w`
                    <div class="list media-list margin-top-half">
                        <ul class="no-padding-left">
                            ${n.playlists.map(l=>w`
                            <li>
                                <label class="item-checkbox item-content">
                                    <input type="checkbox" name="playlistSelection" value="${l.id}" />
                                    <i class="icon icon-checkbox"></i>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">${l.name}</div>
                                            <div class="item-after">${l.tracks.total} Tracks</div>
                                        </div>
                                        <div class="item-subtitle">${l.owner.display_name}</div>
                                        <div class="item-text">${l.description}</div>
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
`}}Y.id="e4751cd984";function E(s,{$f7:c,$on:d,$onBeforeMount:t,$onMounted:o,$onBeforeUnmount:p,$onUnmounted:u}){let a="Jimmy",v=25,m=["Tennis","Chess","Football"];const n=()=>{c.dialog.alert("Hello World")};return t(()=>{console.log("onBeforeMount")}),o(()=>{console.log("onMounted")}),p(()=>{console.log("onBeforeUnmount")}),u(()=>{console.log("onUnmounted")}),d("pageMounted",(e,f)=>{console.log("pageMounted",f)}),d("pageInit",(e,f)=>{console.log("pageInit",f)}),d("pageBeforeIn",(e,f)=>{console.log("pageBeforeIn",f)}),d("pageAfterIn",(e,f)=>{console.log("pageAfterIn",f)}),d("pageBeforeOut",(e,f)=>{console.log("pageBeforeOut",f)}),d("pageAfterOut",(e,f)=>{console.log("pageAfterOut",f)}),d("pageBeforeRemove",(e,f)=>{console.log("pageBeforeRemove",f)}),function(e){e.$;var f=e.$h;e.$root,e.$f7;var k=e.$f7route;e.$f7router;var _=e.$theme;return e.$update,e.$store,f`
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
        <a href="#" class="button button-raised" @click=${n}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${a}. I am ${v} years old.</p>
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
`}}E.id="c91963ab58";E.style=`
  p {
    margin: 10px 0;
  }
`;function G(){return function(s){s.$;var c=s.$h;return s.$root,s.$f7,s.$f7route,s.$f7router,s.$theme,s.$update,s.$store,c`
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
`}}G.id="4e9664cdbf";function N(s,{$:c,$f7:d,$update:t,$on:o,$store:p,$f7router:u}){const a=p.getters.spotifyApi.value;let v=!1;var m=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;let n=m.exec(navigator.language)[5];console.log(n);const e=s.track,f=e.album;let k,_="play_arrow",y={trackIsSavedLoading:!0};console.log(e),o("pageInit",(g,h)=>{const $=S=>{var T=Math.floor(S/1e3%60),I=Math.floor(S/(1e3*60)),I=I<10?"0"+I:I;return T=T<10?"0"+T:T,I+":"+T};y.duration=$(e.duration_ms),t()}),a.containsMySavedTracks([e.id]).then(function(g){y.trackIsSavedLoading=!1,y.trackIsSaved=g[0],t()}),a.getAudioFeaturesForTrack(e.id).then(function(g){y.songAnalytics=g,console.log(g),t()});const b=()=>{u.navigate("/add/playlist/",{props:{items:[e]}})},w=()=>{y.trackIsSavedLoading=!0,t();let g;y.trackIsSaved?g=a.removeFromMySavedTracks:g=a.addToMySavedTracks,g([e.id]).then(function(h){y.trackIsSavedLoading=!1,y.trackIsSaved=!y.trackIsSaved,console.log(y),t()},function(h){console.log(h),y.trackIsSavedLoading=!1,t()})},l=()=>{k=new Audio(e.preview_url),k.addEventListener("loadstart",function(){v=!0,t()}),k.addEventListener("canplaythrough",function(){v=!1,k.play(),t()}),k.addEventListener("ended",function(){_="play_arrow",y.showProgressbar=!1,t()}),k.addEventListener("timeupdate",function(){let g=k.currentTime/k.duration*100;d.progressbar.set(".progressbar",g),t()})},i=()=>{const g=e.available_markets.map(D),h=e.available_markets;let $="",S="";h.includes(n)&&(S=`<div class="block block-strong"><div class="block-inner"></div><p class="no-margin-top">This track is avaible in your region "${n}". \u{1F601}</p></div>`);for(let I=0;I<h.length;I++)$=`${$}<div class="col"><div class="marketItem">${g[I]} ${h[I]}</div></div>`;var T=d.sheet.create({content:`
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
                ${S}
              <div class="block">
                <div class="row marketRow">
                    
          ${$}

        </div>
              </div>
            </div>
          </div>
        `});T.open()},r=()=>{k||l(),v||(k.paused?(_="pause",y.showProgressbar=!0,t(),k.play()):(_="play_arrow",y.showProgressbar=!1,t(),k.pause()))};return o("pageBeforeOut",(g,h)=>{k&&k.pause()}),function(g){g.$;var h=g.$h;return g.$root,g.$f7,g.$f7route,g.$f7router,g.$theme,g.$update,g.$store,h`
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
                    <a href="#" class="link icon-only" @click="${i}">
                        <i class="icon material-icons">language</i>
                    </a>
                </div>
            </div>
        </div>
        <div class="page-content">
            ${f.images.length>1?h`
            <div class="previewImageBlock">
                <img src="${f.images[1].url}" width="200px" class="imageBlur" />
                <img src="${f.images[1].url}" width="200px" class="imageNoBlur" />
            </div>
            `:h`
            `}
            <div class="contentBlock">
                ${y.showProgressbar&&h`
                <span class="progressbar" id="trackprogressbar"></span>`}


                <div class="block block-strong no-margin-top optionsBlock">
                    ${e.preview_url&&h`
                    <button
                        class=" button button-large button-fill button-round button-preloader optionsButtons ${v?"button-loading":""}"
                        @click=${r}>
                        <span class="preloader"></span>
                        <span></span>
                        <span class="material-icons-round optionButtonIcon">
                            ${_}
                        </span>
                    </button>
                    `}
                    <div style="margin-left: auto; display: flex;">
                        <a class=" button button-large button-round optionsButtons" @click="${b}">
                            <span class="material-icons-round optionButtonIcon">
                                playlist_add
                            </span>
                        </a>
                        <button
                            class=" button button-large button-round optionsButtons button-preloader ${y.trackIsSavedLoading?"button-loading":""}"
                            @click=${w}>
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
                                    ${f.images.length>1?h`
                                    <img src="${f.images[1].url}" width="70" />
                                    `:h`
                                    <img src="./assets/icons/library_music_black_48dp.svg" width="70" />
                                    `}
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${f.name}</div>
                                    </div>
                                    <div class="item-subtitle">
                                        ${f.artists.map($=>h`
                                        ${$.name} `)}
                                    </div>
                                    <div class="item-text">${f.release_date.substring(0,4)} · ${f.total_tracks}
                                        Tracks</div>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>

                ${y.songAnalytics!=null&&h`
                <div class="block-title">Song analytics</div>
                <div class="block block-strong no-margin-bottom">
                    <div class="row">
                      <div class="col text-align-center">
                        <div class="gauge gauge-init"
                          data-type="semicircle"
                          data-value="${y.songAnalytics.danceability}"
                          data-value-text="${(y.songAnalytics.danceability*100).toFixed(0)}%"
                          data-value-text-color="#f44336"
                          data-border-color="#f44336"
                          data-label-text="Danceability score"
                        ></div>
                      </div>
                      <div class="col text-align-center">
                        <div class="gauge gauge-init"
                          data-type="semicircle"
                          data-value="${y.songAnalytics.valence}"
                          data-value-text="${(y.songAnalytics.valence*100).toFixed(0)}%"
                          data-value-text-color="#e91e63"
                          data-border-color="#e91e63"
                          data-label-text="Happy Song"
                        ></div>
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










                ${e.artists!=null?h`
                <div class="block-title">Artists</div>
                <div class="list media-list margin-bottom-half">
                    <ul>
                        ${e.artists.map($=>h`
                        <li>
                            <a href="/artist/${$.id}" class="item-link item-content">
                                <div class="item-media">
                                    <i class="icon material-icons-round">face</i>
                                </div>
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-title">${$.name}</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        `)}
                    </ul>
                </div>

                `:h``}


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
`}}N.id="376eba772d";N.style=`
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
`;var ti=[{path:"/",component:P},{path:"/track/:trackId/",async:function({router:s,to:c,resolve:d}){var t=s.app,o=t.store,p=c.params.trackId,u=o.getters.spotifyApi.value;t.preloader.show(),u.getTrack(p).then(function(a){t.preloader.hide(),d({component:N},{props:{track:a}})},function(a){console.log(a),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/album/:albumId/",async:function({router:s,to:c,resolve:d}){var t=s.app,o=t.store,p=c.params.albumId,u=o.getters.spotifyApi.value;t.preloader.show(),u.getAlbum(p).then(function(a){t.preloader.hide(),d({component:C},{props:{album:a}})},function(a){console.log(a),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/artist/:artistId/",async:function({router:s,to:c,resolve:d}){var t=s.app,o=t.store,p=c.params.artistId,u=o.getters.spotifyApi.value;t.preloader.show(),u.getArtist(p).then(function(a){t.preloader.hide(),console.log(a),d({component:F},{props:{artist:a}})},function(a){console.log(a),t.preloader.hide(),t.dialog.alert("An error occurred when loading the data.","Sorry \u{1F614}",function(){s.back()})})}},{path:"/about/",component:j},{path:"/add/playlist",component:Y},{path:"/form/",component:U},{path:"/search/",component:R},{path:"/catalog/",component:H},{path:"/product/:id/",component:V},{path:"/profile/",component:J},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:E},{path:"(.*)",component:G}];const O=K({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:s}){return s.products},loginMethode({state:s}){s.loginMethode()},spotifyApi({state:s}){return s.spotifyapi},userId({state:s}){return s.userId}},actions:{addProduct({state:s},c){s.products=[...s.products,c]},setUserId({state:s},c){s.userId=c},addLoginMethod({state:s},c){s.loginMethode=c},addSpotifyApi({state:s},c){s.spotifyapi=c}}});function M(s,{$f7:c,$update:d,$f7router:t}){let o="",p="";const u=m=>{o=m.target.value,d()},a=m=>{p=m.target.value,d()},v=()=>{c.dialog.alert("Username: "+o+"<br/>Password: "+p,()=>{c.loginScreen.close()})};return function(m){m.$;var n=m.$h;return m.$root,m.$f7,m.$f7route,m.$f7router,m.$theme,m.$update,m.$store,n`
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
                      <input type="text" name="username" placeholder="Your username" value="${o}" @input="${u}"/>

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${p}" @input="${a}"/>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${v}">Sign In</a>

                </li>
              </ul>
              <div class="block-footer">Some text about login information.<br/>Click "Sign In" to close Login Screen</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
`}}M.id="677f4d0df5";function x(s,{$:c,$el:d,$on:t,$f7:o,$update:p,$store:u}){let a=[];t("pageInit",(e,f)=>{});let v=0;o.request({url:"./assets/data/login_faq.json",async:!0,error:function(e){console.log(e),v=v+1,v<5?request(this):m()},success:function(e){try{a=JSON.parse(e)}catch(f){console.log(f),v=v+1,v<5?request(this):m();return}p(),o.swiper.create(".swiper-container",{speed:400,spaceBetween:10,loop:!0,loopedSlides:a.length,observer:!0})}});const m=()=>{console.log(c(".faq-loading").html()),c(".faq-loading").html(`
                <div class="card-content card-content-padding">Loading failed \u{1F614}</div>
            `),c(".faq-loading").removeClass("skeleton-text"),c(".faq-loading").removeClass("skeleton-effect-wave")},n=()=>{u.getters.loginMethode};return function(e){e.$;var f=e.$h;return e.$root,e.$f7,e.$f7route,e.$f7router,e.$theme,e.$update,e.$store,f`
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
                    <button @click="${n}"
                        class="col button button-large button-raised button-fill color-green"><i
                            class="icon spotify-icon"></i>Login with Spotify</button>
                    <p><label class="checkbox"><input type="checkbox" /><i class="icon-checkbox"></i></label> Don't show
                        this again.</p>
                </div>
                <div class="block-title faq_title">FAQ</div>
                <div data-space-between="50" class="swiper-container">
                    <div class="swiper-wrapper">
                        ${a.map(k=>f`
                        <div class="swiper-slide">
                            <div class="card card-outline">
                                <div class="card-header">${k.title}</div>
                                <div class="card-content card-content-padding">${k.body}</div>

                            </div>
                        </div>
                        `)}
                    </div>
                </div>
                ${a.length==0&&f`
                <div class="card card-outline skeleton-text skeleton-effect-wave faq-loading">
                    <div class="card-header">_________________</div>
                    <div class="card-content card-content-padding">__________________________________________</div>

                </div>
                `}
            </div>
        </div>
    </div>
`}}x.id="7a40d7a4aa";x.style=`
    .spotify-icon {
        height: 20px;
        width: 20px;
        background-image: url(./assets/icons/spotify.svg);
        margin-right: 5px;
    }
    .faq_title {
        margin-bottom: 0;
    }

`;class ai{constructor(c,d){q(this,"login",()=>{const c="https://accounts.spotify.com/authorize",d="c34980adc6984ebd9418e19f418f10dd",{host:t,protocol:o,pathname:p}=window.location,u=`${o}//${t}${p}`,a=["playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private","user-library-read","user-library-modify","user-follow-read","user-follow-modify","user-top-read","user-read-recently-played"].toString().replace(",","%20"),v="token";window.location=`${c}?client_id=${d}&redirect_uri=${u}&scope=${a}&response_type=${v}`});q(this,"parseUrlHash",()=>{let d=window.location.hash.substr(1).split("&");const t={};d.forEach(p=>{let u=p.split("="),a=u[0],v=u[1];t[a]=v});let o=t.expires_in;if(o!=null&&!isNaN(o)){let p=parseInt(o),u=new Date;u.setSeconds(p),t.expireOnDate=u.toJSON()}else return null;return t});q(this,"isTokenValid",c=>{try{let d=c.expireOnDate,t=Date.parse(d);return new Date().getTime()<t}catch{return!1}});this.app=c,this.width=d}}let B,z=new ai(si),A,L=!1;localStorage.getItem("tokenMap")!=null&&localStorage.getItem("tokenMap")!="null"?(B=JSON.parse(localStorage.getItem("tokenMap")),z.isTokenValid(B)?(A=M,L=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):window.location.hash==null||window.location.hash==""?A=x:(B=z.parseUrlHash(),localStorage.setItem("tokenMap",JSON.stringify(B)),A=M,L=!0)):window.location.hash==null||window.location.hash==""?A=x:(B=z.parseUrlHash(),B!=null?(localStorage.setItem("tokenMap",JSON.stringify(B)),A=M,L=!0,window.location.hash&&(window.location.href=window.location.origin+window.location.pathname)):(A=x,L=!1));let Q=new Z;L&&Q.setAccessToken(B.access_token);O.dispatch("addSpotifyApi",Q);O.dispatch("addLoginMethod",z.login);var si=new ii({name:"Statify",theme:"md",el:"#app",component:A,tokenMap:B,store:O,view:{browserHistory:!0,browserHistoryAnimateOnLoad:!0,browserHistoryRoot:window.location.origin,browserHistorySeparator:""},routes:ti,on:{pageInit:function(){}}});function li(){console.log(window.innerHeight),console.log(window.innerWidth)}window.onresize=li;const oi=()=>{const s=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(s)},ni=()=>"standalone"in window.navigator&&window.navigator.standalone;oi()&&!ni()&&(console.log(12),globalThis.setState({showInstallMessage:!0}));
