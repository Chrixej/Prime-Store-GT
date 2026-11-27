const WA="50254071797";
const I={1:"images/01-camas-mascotas-a.jpg",2:"images/02-combo-navideno.jpg",3:"images/03-combo-dulce-navidad.jpg",4:"images/04-combo-arbolito.jpg",5:"images/05-camas-mascotas-b.jpg",6:"images/06-cama-xl-perros.jpg",7:"images/07-cojines-sillas.jpg",8:"images/08-cortinas-navidenas.jpg",9:"images/09-cojines-decorativos.jpg",10:"images/10-cojines-navidenos.jpg",11:"images/11-portada-familia.jpg",12:"images/12-combo-cojines-1.jpg",14:"images/14-combo-cojines-2.jpg",15:"images/15-combo-cojines-3.jpg"};
const S=[
{id:"combos",n:"Combos",t:"Combos navideños",d:"Combos de cojines de 45×45 cm para vestir tu casa de Navidad.",p:["Combo de 6 cojines: Q219.99","Combo Navideño y Dulce Navidad: Q120.00 cada uno"],im:[4,12,14,15,2,3],it:[["Combo de 6 cojines","","Q219.99"],["Combo Navideño","","Q120.00"],["Combo Dulce Navidad","","Q120.00"]]},
{id:"cojines",n:"Cojines",t:"Cojines navideños",d:"Medidas de 45×45 cm.",p:["1 por Q39.99","6 por Q229.99"],im:[10],it:[["Rudy","6214"],["Dulce Navidad","4105"],["Copos","4104"],["Frosty","6217"],["Santa","6218"],["Destellos","6219"]]},
{id:"cortinas",n:"Cortinas",t:"Cortinas navideñas",d:"Sets de cortinas con diseños de temporada.",p:["Cada set: Q79.99"],im:[8],it:[["Set de cortinas Encanto Navideño","6439","Q79.99"],["Set de cortinas Cascanueces","6443","Q79.99"]]},
{id:"sillas",n:"Sillas",t:"Cojines para sillas",d:"Medidas de 40×40 cm.",p:["1 por Q29.99","4 por Q114.99"],im:[7],it:[["Vintage","3129"],["Velvet","6227"],["Navy","3131"],["London","3266"]]},
{id:"decorativos",n:"Decorativos",t:"Cojines decorativos",d:"Medidas de 45×45 cm.",p:["1 por Q39.99","3 por Q114.99"],im:[9],it:[["Dulce","5437"],["Canela","5438"],["Oasis","5439"],["Jardín","5448"],["Primavera","5444"],["Radiante","5451"],["Dorada","5447"]]},
{id:"mascotas",n:"Mascotas",t:"Camas para mascotas",d:"Para perros y gatos. Promo exclusiva.",p:["1 por Q85.00"],im:[1,5],it:[["Tobby","6038"],["Bruno","6059"],["Coco","3552"],["Madison","5728"],["Moka","3551"],["Velvet","5726"],["Sky","3550"]]},
{id:"cama-xl",n:"Cama XL",t:"Cama XL para perros",d:"Colección Bruno. 107 cm de diámetro por 10 cm de alto. Amplia y acolchonada, con cobertor removible con zipper para lavarlo. Ideal para perros medianos y grandes.",p:["Precio de introducción: Q240.00"],im:[6],it:[["Cama XL Bruno","6061","Q240.00"],["Cama XL Tobby","6062","Q240.00"]]}
];
const L=(m)=>"https://api.whatsapp.com/send?phone="+WA+"&text="+encodeURIComponent(m);
const $=(i)=>document.getElementById(i);
const CI='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.5L21 7H6"/></svg>';
$("h").src=I[11];

$("nv").innerHTML=S.map(s=>`<a href="#${s.id}">${s.n}</a>`).join("");
$("m").innerHTML=S.map(s=>`<section id="${s.id}"><h2>${s.t}</h2><div class="pr">${s.p.map(x=>`<span>${x}</span>`).join("")}</div><p class="d">${s.d}</p><div class="g">${s.im.map(n=>`<button class="im" type="button" aria-label="Ampliar foto"><img src="${I[n]}" alt="${s.t}" loading="lazy"></button>`).join("")}</div>${s.im.length>1?'<small class="sw">Desliza para ver más fotos</small>':""}<ul>${s.it.map(([a,c,p])=>`<li><span>${a}<small>${[c&&"Código "+c,p].filter(Boolean).join(", ")}</small></span><span class="q"><button class="add" type="button" data-k="${s.id}|${a}" data-d="1">${CI}Agregar al carrito</button><span class="st" hidden><button type="button" data-k="${s.id}|${a}" data-d="-1" aria-label="Quitar uno">−</button><b>0</b><button type="button" data-k="${s.id}|${a}" data-d="1" aria-label="Agregar uno">+</button></span></span></li>`).join("")}</ul></section>`).join("");
const lb=$("lb");
$("m").addEventListener("click",e=>{const i=e.target.closest(".im img");if(i){lb.querySelector("img").src=i.src;lb.hidden=false}});
lb.onclick=()=>{lb.hidden=true};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){lb.hidden=true;$("cp").hidden=true}});
const T={combos:[219.99],cojines:[39.99,6,229.99],cortinas:[79.99],sillas:[29.99,4,114.99],decorativos:[39.99,3,114.99],mascotas:[85],"cama-xl":[240]};
const C={};let MSG="";const q2=n=>"Q"+n.toFixed(2);
function calc(){let tot=0,ln=[];for(const s of S){let u=0;for(const [a,c,p] of s.it){const n=C[s.id+"|"+a]||0;if(!n)continue;const ask=p==="Consultar precio";ln.push(n+" x "+a+(c?" (código "+c+")":"")+(ask?" - precio por confirmar":""));if(s.id==="combos"){if(!ask)tot+=n*parseFloat(p.slice(1))}else if(!ask)u+=n}const t=T[s.id];if(u)tot+=t[1]?Math.floor(u/t[1])*t[2]+(u%t[1])*t[0]:u*t[0]}return{tot,ln}}
function up(){const{tot,ln}=calc();const n=Object.values(C).reduce((x,y)=>x+y,0);$("fab").innerHTML=CI+(n?"Carrito ("+n+") "+q2(tot):"Carrito");$("cl").innerHTML=ln.length?ln.map(x=>"<li>"+x+"</li>").join(""):"<li>Aún no has agregado productos.</li>";$("ct").textContent=q2(tot);MSG="Hola, quiero hacer este pedido:\n"+ln.join("\n")+"\nTotal estimado: "+q2(tot);$("send").href=L(MSG);$("cc").hidden=!n;$("send").hidden=!n}
$("m").addEventListener("click",e=>{const b=e.target.closest("button[data-k]");if(!b)return;const k=b.dataset.k;const n=C[k]=Math.max(0,(C[k]||0)+Number(b.dataset.d)),q=b.closest(".q");q.querySelector("b").textContent=n;q.querySelector(".add").hidden=n>0;q.querySelector(".st").hidden=n===0;up()});
$("fab").onclick=()=>{$("cp").hidden=false};$("cx").onclick=()=>{$("cp").hidden=true};
$("cc").onclick=async()=>{const b=$("cc");try{await navigator.clipboard.writeText(MSG)}catch(e){const a=document.createElement("textarea");a.value=MSG;document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(e2){}a.remove()}b.textContent="¡Pedido copiado!";setTimeout(()=>{b.textContent="Copiar pedido"},2000)};
up();
