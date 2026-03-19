import{a as c,S as m,i as l}from"./assets/vendor-BDPjZNE_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(r){const s="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"55051390-ef93f0dae1124012c9fc0333f",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=s+i+"?"+o;return c.get(e).then(t=>t.data)}function u(r){const{webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:a,downloads:n}=r;return`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${o}"
            />
          </a>
          <div class="image-container">
          <div class="image-description">
            <p class="image-text">Likes</p>
            <p class="image-number">${e}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Views</p>
            <p class="image-number">${t}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Comments</p>
            <p class="image-number">${a}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Downloads</p>
            <p class="image-number">${n}</p>
          </div>
          </div>
        </li>`}function g(r){const s=r.map(u).join("");document.querySelector(".gallery").insertAdjacentHTML("afterbegin",`${s}`),new m(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){const r=document.querySelector(".gallery");r.innerHTML=""}function f(){document.querySelector(".js-loader").classList.remove("hidden")}function y(){document.querySelector(".js-loader").classList.add("hidden")}const h={formEl:document.querySelector(".form")};h.formEl.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(!s){l.show({message:"Fill please field",messageColor:"white",color:"red",position:"topRight"});return}p(),f(),d(s).then(i=>{const o=i.hits;if(o.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"});return}g(o)}).catch(i=>{l.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"}),console.log(i)}).finally(()=>{y()}),r.target.reset()});
//# sourceMappingURL=index.js.map
