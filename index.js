import{a as i,S as c,i as u}from"./assets/vendor-CjwUT-lV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d="49490613-8cd40a9bd53e95e64061d42d8";i.defaults.baseURL="https://pixabay.com/api";i.defaults.params={key:d};function f(o){return i.get("/",{params:{q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>{var s;return(s=e.data)!=null&&s.hits.length?e.data.hits:Promise.reject("Sorry, there are no images matching your search query. Please try again!")})}function n(){document.querySelector(".loader").classList.toggle("active")}const m=new c("#gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector("#gallery");function h(o){p.innerHTML=o.map(e=>`<li class="gallery-item">
              <a href="${e.largeImageURL}"><img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"/></a>
              <ul class="gallery-item-desc">
                <li>
                  <h3>Likes</h3>
                  <p>${e.likes}</p>
                </li>
                <li>
                  <h3>Views</h3>
                  <p>${e.views}</p>
                </li>
                <li>
                  <h3>Comments</h3>
                  <p>${e.comments}</p>
                </li>
                <li>
                  <h3>Downloads</h3>
                  <p>${e.downloads}</p>
                </li>
              </ul>
        </li>`).join(""),m.refresh()}document.getElementById("search-form").addEventListener("submit",o=>{o.preventDefault();const e=o.target;g(e.elements.query.value).then(()=>e.reset())});function g(o){return n(),f(o).then(e=>{h(e)}).catch(e=>u.error({message:e})).finally(()=>n())}
//# sourceMappingURL=index.js.map
