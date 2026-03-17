import{a as c,S as m,i as l}from"./assets/vendor-BDPjZNE_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(s){const r="https://pixabay.com",i="/api/",a=new URLSearchParams({key:"55051390-ef93f0dae1124012c9fc0333f",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=r+i+"?"+a;return c.get(e)}function p(s){const{webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:n}=s;return`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${a}"
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
            <p class="image-number">${o}</p>
          </div>
          <div class="image-description">
            <p class="image-text">Downloads</p>
            <p class="image-number">${n}</p>
          </div>
          </div>
        </li>`}function u(s){const r=s.map(p).join("");document.querySelector(".gallery").insertAdjacentHTML("afterbegin",`${r}`),new m(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function d(){const s=document.querySelector(".gallery");s.innerHTML=""}const f={formEl:document.querySelector(".form")};f.formEl.addEventListener("submit",s=>{s.preventDefault(),d();const r=s.target.elements["search-text"].value.trim();if(!r){l.show({message:"Fill please field",messageColor:"white",color:"red",position:"topRight"});return}g(r).then(i=>{const a=i.data.hits;if(a.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"});return}u(a)}).catch(i=>{l.show({message:"Sorry, error. Please try again later!",messageColor:"white",color:"red",position:"topRight"}),console.log(i)})});
//# sourceMappingURL=index.js.map
