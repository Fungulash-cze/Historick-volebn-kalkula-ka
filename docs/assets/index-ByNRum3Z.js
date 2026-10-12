(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),e,!1);var t=e.exports;e.exports.create;var n={1920:{year:1920,title:`Volby do Poslanecké sněmovny 1920`,subtitle:`První parlamentní volby v nově zrozené Československé republice`,date:`18. a 25. dubna 1920`,turnout:`89,6 %`,stakes:`Rozhodovalo se o samotném charakteru mladého státu: zvítězí socialistická vize nového řádu, agrárně-venkovský konzervatismus, nebo liberálně-kapitálový národní stát?`,atmosphereQuote:`„Pryč od Vídně, pryč od Říma! Republika musí být sociálně spravedlivá a svobodná!“ – dobové heslo`,historicalContext:`V dubnu 1920 se konaly vůbec první parlamentní volby samostatného Československa podle nové demokratické Ústavy z února 1920. Po rozpadu habsburské monarchie a kruté světové válce čelila republika obrovským výzvám: hyperinflaci, nedostatku potravin a uhlí, radikalizaci dělnictva ovlivněného bolševickou revolucí v Rusku a napětí s početnou německou a maďarskou menšinou, které se ocitly v novém státě nedobrovolně.

Mezi hlavní témata patřila pozemková reforma (rozdělení šlechtických velkostatků), odluka církve od státu, 8hodinová pracovní doba a postavení Slovenska v novém unitárním státě. Zároveň to byly první celostátní volby v naší historii, v nichž měly ženy plné a rovné volební právo.`,outcomeSummary:`Volby přinesly triumf levice. Sociální demokraté (ČSSD) vedení Vlastimilem Tusarem získali přes 25,7 % hlasů a stali se nejsilnější stranou. Společně s německou sociální demokracií (DSAP) měla levice v parlamentu téměř většinu. Tusar sestavil koaliční vládu „rudozelené koalice“ (sociální demokraté a agrárníci).

Již na podzim 1920 však v ČSSD propukl hluboký rozkol mezi demokratickým křídlem a radikální leninskou levicí, což vedlo k pádu vlády, generální stávce a v květnu 1921 k založení Komunistické strany Československa (KSČ). Moc následně převzala úřednická vláda Jana Černého a posléze tzv. Pětka v čele s agrárníkem Antonínem Švehlou.`,parties:[{id:`cssd`,shortName:`ČSSD`,fullName:`Československá sociálně demokratická strana dělnická`,ideology:`Demokratický socialismus, odborové hnutí`,leaders:[`Vlastimil Tusar`,`Rudolf Bechyně`,`Bohumír Šmeral`],color:`#dc2626`,historicalPercentage:25.7,historicalSeats:74,description:`Hlavní strana průmyslového dělnictva. Požadovala socializaci klíčových odvětví, silnou ochranu pracujících a rozsáhlou pozemkovou reformu.`,programHighlight:`Socializace velkých podniků, 8hodinový pracovní den, sociální pojištění a odluka církve od státu.`},{id:`rszml`,shortName:`RSZML (Agrárníci)`,fullName:`Republikánská strana československého venkova`,ideology:`Agrarismus, venkovský konzervatismus, ochranářství`,leaders:[`Antonín Švehla`,`František Udržal`,`Karel Prášek`],color:`#16a34a`,historicalPercentage:9.7,historicalSeats:28,description:`Vlivná strana sedláků a venkovského obyvatelstva. Klíčový pilíř stability první republiky, obhájce soukromého zemědělského vlastnictví.`,programHighlight:`Půda do rukou rolníků, agrární cla proti levnému dovozu, zachování křesťanských tradic a řádu.`},{id:`csl`,shortName:`ČSL (Lidovci)`,fullName:`Československá strana lidová`,ideology:`Křesťanský socialismus, křesťanská demokracie, katolicismus`,leaders:[`Jan Šrámek`,`Bohumil Stašek`,`Alois Kříž`],color:`#eab308`,historicalPercentage:11.3,historicalSeats:33,description:`Tradiční obhájce katolických věřících, církevních škol a rodiny. Hledala kompromis mezi sociální péčí a křesťanskou morálkou.`,programHighlight:`Obrana katolické církve proti sekularismu, podpora církevního školství a rodinná politika.`},{id:`csns`,shortName:`ČSNS (Národní soc.)`,fullName:`Československá strana socialistická`,ideology:`Národní socialismus, vlastenectví, reformismus`,leaders:[`Václav Klofáč`,`Jiří Stříbrný`,`Emil Franke`],color:`#f97316`,historicalPercentage:8.1,historicalSeats:24,description:`Neklasová socialistická strana orientovaná na úředníky, řemeslníky a inteligenci. Silně vlastenecká a protirakouská.`,programHighlight:`Socializace bez marxistického dogmatismu, jednotný národní stát a radikální protikatolický postoj.`},{id:`csnd`,shortName:`ČsND (Národní dem.)`,fullName:`Československá národní demokracie`,ideology:`Národní liberalismus, konzervatismus, velkokapitál`,leaders:[`Karel Kramář`,`Alois Rašín`,`Viktor Dyk`],color:`#2563eb`,historicalPercentage:6.3,historicalSeats:19,description:`Reprezentantka velkoprůmyslu, bank a národovecké inteligence. Hájila tvrdou měnu (Rašínova deflace) a ostrý odpor k bolševismu.`,programHighlight:`Silná a stabilní měna, ochrana soukromého vlastnictví, nostrifikace podniků a spojenectví s Francií.`},{id:`dsap`,shortName:`DSAP (Něm. soc. dem.)`,fullName:`Deutsche sozialdemokratische Arbeiterpartei`,ideology:`Sociální demokracie, práva německojazyčné menšiny`,leaders:[`Ludwig Czech`,`Josef Seliger`],color:`#b91c1c`,historicalPercentage:11.1,historicalSeats:31,description:`Druhá nejsilnější strana v republice. Reprezentovala německé dělníky v pohraničí, bojovala za sociální práva a národnostní samosprávu.`,programHighlight:`Socialismus, národnostní rovnoprávnost pro Němce, odmítnutí čechoslovakismu a podpora autonomie.`},{id:`bdl`,shortName:`BdL (Něm. agrárníci)`,fullName:`Bund der Landwirte`,ideology:`Německý agrarismus, ochrana venkova`,leaders:[`Franz Spina`,`Wolfgang Zierhut`],color:`#15803d`,historicalPercentage:3.9,historicalSeats:11,description:`Strana německých zemědělců a sedláků v Sudetech. Později se stala jednou z prvních německých „aktivistických“ stran spolupracujících s vládou.`,programHighlight:`Obrana německého venkova, odmítání konfiskace půdy bez spravedlivé náhrady, dovozní cla.`},{id:`sls`,shortName:`SĽS (Hlinkovci)`,fullName:`Slovenská ľudová strana`,ideology:`Slovenský autonomismus, křesťanský konzervatismus`,leaders:[`Andrej Hlinka`,`Ferdiš Juriga`,`Florián Tománek`],color:`#854d0e`,historicalPercentage:6.8,historicalSeats:12,description:`V roce 1920 kandidovala ve volebním svazku s ČSL. Požadovala naplnění Pittsburské dohody, svébytnost slovenského národa a obranu víry.`,programHighlight:`Zákonodárná autonomie Slovenska, obrana katolické církve proti pražskému laicismu a čechoslovakismu.`}],questions:[{id:1,category:`Hospodářství a půda`,statement:`Veškerá zemědělská půda velkostatků nad 150 hektarů orné půdy (nebo 250 ha celkem) musí být zabavena a přidělena bezzemkům a drobným rolníkům.`,historicalNote:`Záborový zákon z dubna 1919 byl jedním z nejradikálnějších v Evropě. Postihl hlavně cizí (rakouskou a německou) šlechtu a církev.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:2,category:`Socializace a průmysl`,statement:`Klíčové uhelné doly, energetika a velké velkokapitálové podniky mají být bez prodlení znárodněny a předány pod správu pracujícího lidu.`,historicalNote:`Část poválečné společnosti volala po okamžité socializaci. Národní demokraté a agrárníci varovali před hospodářským krachem.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:3,category:`Sociální práva`,statement:`Zákonná osmihodinová pracovní doba a povinné nemocenské pojištění pro všechny dělníky musí být nekompromisně vymáhány státem bez výjimek.`,historicalNote:`ČSR zavedla 8hodinový pracovní den již v prosinci 1918 jako jedna z prvních zemí na světě, což průmyslníci kritizovali kvůli poklesu zisků.`,partyStances:{cssd:1,rszml:0,csl:1,csns:1,csnd:0,dsap:1,bdl:0,sls:1}},{id:4,category:`Církev a stát`,statement:`Škola a stát musí být zcela odděleny od římskokatolické církve; církevní vliv na společnost a její majetková privilegia musí být odstraněny.`,historicalNote:`Vlna sekularizace pod heslem „Pryč od Říma“ vedla ke stržení Mariánského sloupu a vzniku Církve československé (husitské).`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:0,dsap:1,bdl:-1,sls:-1}},{id:5,category:`Školství a víra`,statement:`Náboženská výchova a křesťanské hodnoty musí zůstat povinnou součástí vzdělávání mládeže na všech obecných i středních školách.`,historicalNote:`Otázka náboženství ve školách hluboce štěpila lidovce (kteří za něj bojovali) a socialisty (kteří požadovali čistě laickou školu).`,partyStances:{cssd:-1,rszml:0,csl:1,csns:-1,csnd:0,dsap:-1,bdl:1,sls:1}},{id:6,category:`Státoprávní uspořádání`,statement:`Slovensku musí být neprodleně udělena plná zákonodárná a správní autonomie s vlastním sněmem, jak slibovala Pittsburská dohoda.`,historicalNote:`Andrej Hlinka trval na závazku z Pittsburgu z roku 1918. Praha však prosazovala centralismus z obavy před maďarským revizionismem.`,partyStances:{cssd:-1,rszml:-1,csl:0,csns:-1,csnd:-1,dsap:0,bdl:0,sls:1}},{id:7,category:`Národní identita`,statement:`Češi a Slováci tvoří jeden jediný, nedílný státotvorný „národ československý“ s jedním státním jazykem.`,historicalNote:`Politický konstrukt „čechoslovakismu“ byl v Ústavě 1920 ukotven proto, aby Slované tvořili v ČSR přesvědčivou dvoutřetinovou většinu.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:-1}},{id:8,category:`Národnostní menšiny`,statement:`Německá a maďarská menšina má mít v oblastech, kde tvoří většinu, plnou samosprávu a německý jazyk má být rovnocenný úřednímu.`,historicalNote:`Více než 3 miliony Němců a 700 tisíc Maďarů se ocitlo v ČSR. Německé strany zpočátku odmítaly loajalitu k novému státu.`,partyStances:{cssd:0,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:1,sls:0}},{id:9,category:`Měnová politika`,statement:`Stát musí za cenu přísných rozpočtových škrtů a deflace udržet tvrdou a stabilní měnu, i kdyby to dočasně zvýšilo nezaměstnanost.`,historicalNote:`Alois Rašín prosadil ráznou měnovou odluku a deflační politiku, která zachránila korunu před německou hyperinflací, ale zdražila export.`,partyStances:{cssd:-1,rszml:0,csl:0,csns:-1,csnd:1,dsap:-1,bdl:0,sls:0}},{id:10,category:`Hospodářský nacionalismus`,statement:`Všechny akciové společnosti působící na území ČSR musí mít ústředí v republice a jejich vedení musí být v československých rukou (nostrifikace).`,historicalNote:`Zákon o nostrifikaci odstřihoval vídeňská a budapešťská ústředí a nutil podniky registrovat se a platit daně v Československu.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:1}},{id:11,category:`Zemědělství a cla`,statement:`Domácí zemědělci musí být chráněni před levnou zahraniční konkurencí vysokými ochrannými cly na dovoz obilí a potravin.`,historicalNote:`Agrárníci požadovali cla pro ochranu rolníků, zatímco městské socialistické strany žádaly levné potraviny pro dělnictvo.`,partyStances:{cssd:-1,rszml:1,csl:1,csns:-1,csnd:1,dsap:-1,bdl:1,sls:1}},{id:12,category:`Zahraniční politika`,statement:`Bezpečnost ČSR musí být postavena výhradně na vojenském spojenectví s Francií a dohodovými mocnostmi proti revanšismu.`,historicalNote:`Zahraniční politika Edvarda Beneše a Karla Kramáře stavěla na francouzském bezpečnostním deštníku a Malé dohodě.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:0}},{id:13,category:`Vztah k Sovětskému Rusku`,statement:`Československo by mělo diplomaticky uznat Sovětské Rusko a dělnictvo by se mělo solidarizovat s revolučním proletariátem.`,historicalNote:`Otázka podpory bolševického Ruska v polsko-sovětské válce roku 1920 rozštěpila levici a vedla ke vzniku komunistické frakce.`,partyStances:{cssd:0,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:14,category:`Zásluhy o stát`,statement:`Českoslovenští legionáři mají mít zákonem garantované přednostní právo na státní úřady, trafické licence a příděl zabrané půdy.`,historicalNote:`Legionářská tradice byla posvátným mýtem První republiky, pravice a nacionálové ji stavěli nad loajalitu menšin.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:1,dsap:-1,bdl:-1,sls:-1}},{id:15,category:`Volební právo a rovnost`,statement:`Zavedení všeobecného volebního práva pro ženy bez jakéhokoli majetkového či vzdělanostního censu je nezvratným úspěchem demokracie.`,historicalNote:`Československá ústava 1920 zaručila rovná politická práva ženám, což podporovala většina demokratického spektra.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:1,bdl:1,sls:1}}]},1946:{year:1946,title:`Volby do Ústavodárného shromáždění 1946`,subtitle:`Poslední částečně svobodné volby před čtyřiceti lety komunistické totality`,date:`26. května 1946`,turnout:`94,0 %`,stakes:`Rozhodovalo se o geopolitickém a mocenském směřování země: zůstane Československo pluralitní demokracií a mostem na Západ, nebo se stane vazalem Sovětského svazu?`,atmosphereQuote:`„Se Sovětským svazem na věčné časy a nikdy jinak!“ vs. „Za svobodu a křesťanskou kulturu!“`,historicalContext:`Volby v květnu 1946 probíhaly v jedinečné a vypjaté atmosféře těsně po skončení druhé světové války. V zemi panovala vděčnost Sovětskému svazu za osvobození od nacistické okupace a zároveň rozhořčení ze zrady západních mocností v Mnichově 1938. 

Politická scéna byla zásadně omezena systémem tzv. Národní fronty: předválečné pravicové strany (především agrárníci a národní sjednocení) byly zakázány pod záminkou kolaborace. Probíhal masový odsun téměř 3 milionů Němců, konfiskace jejich majetku a osidlování pohraničí. Klíčový těžký průmysl, doly a banky byly již od října 1945 znárodněny Benešovými dekrety. Komunisté (KSČ) pod vedením Klementa Gottwalda vystupovali v roli vlastenců hájících drobné živnostníky a sedláky, zatímco demokratické strany (ČSNS, ČSL a slovenská Demokratická strana) se snažily bránit zbytek občanských svobod a parlamentní pluralitu.`,outcomeSummary:`KSČ v českých zemích drtivě zvítězila se ziskem 40,17 % hlasů (celostátně 31,05 %). Na Slovensku však došlo k politickému zemětřesení: nekomunistická Demokratická strana (DS) získala 62 % hlasů a porazila slovenské komunisty. 

Klement Gottwald se stal předsedou koaliční vlády Národní fronty. Komunisté obsadili klíčová ministerstva vnitra (SNB), informací, zemědělství a financí. Vítězství demokratů na Slovensku komunisté neutralizovali tzv. Třetí pražskou dohodou, která omezila pravomoci slovenských orgánů. Výsledek voleb 1946 otevřel komunistům přímou cestu k ovládnutí bezpečnostního aparátu a k definitivnímu uchvácení moci během komunistického převratu v únoru 1948.`,parties:[{id:`ksc`,shortName:`KSČ`,fullName:`Komunistická strana Československa`,ideology:`Marxismus-leninismus, lidová demokracie, sovětská orientace`,leaders:[`Klement Gottwald`,`Rudolf Slánský`,`Václav Kopecký`],color:`#dc2626`,historicalPercentage:31.05,historicalSeats:93,description:`Vítěz voleb v českých zemích. Vystupovala jako tvůrce nového řádu, slibovala specifickou „československou cestu k socialismu“ bez kolchozů.`,programHighlight:`Pevné spojenectví se SSSR, dvouletý plán obnovy, příděl půdy v pohraničí rolníkům a monopol Národní fronty.`},{id:`csns`,shortName:`ČSNS`,fullName:`Československá strana národně socialistická`,ideology:`Národní socialismus, masarykovská demokracie, vlastenectví`,leaders:[`Petr Zenkl`,`Prokop Drtina`,`Hubert Ripka`],color:`#f97316`,historicalPercentage:18.37,historicalSeats:55,description:`Hlavní česká nekomunistická síla. Hájila odkaz T. G. Masaryka a Edvarda Beneše, usilovala o zachování svobody slova a vazeb na Západ.`,programHighlight:`Zastavení dalšího znárodňování, právní stát, ochrana živností a rovnováha mezi Východem a Západem.`},{id:`csl`,shortName:`ČSL`,fullName:`Československá strana lidová`,ideology:`Křesťanská demokracie, křesťanský socialismus`,leaders:[`Jan Šrámek`,`František Hála`,`Adolf Procházka`],color:`#eab308`,historicalPercentage:15.64,historicalSeats:46,description:`Křesťansky orientovaná strana opírající se o moravský venkov a katolické věřící. Hájila svobodu náboženství a církevní školství.`,programHighlight:`Obrana křesťanských rodinných hodnot, ochrana soukromého vlastnictví a svobodné volby bez diktátu.`},{id:`ds`,shortName:`Demokratická strana (DS)`,fullName:`Demokratická strana (na Slovensku)`,ideology:`Občanská demokracie, křesťanství, slovenská samospráva`,leaders:[`Jozef Lettrich`,`Ján Ursíny`,`Matej Josko`],color:`#2563eb`,historicalPercentage:14.07,historicalSeats:43,description:`Slovenský fenomén voleb 1946 (na Slovensku 62 %!). Sjednotila evangelíky i katolíky proti nástupu komunistické diktatury.`,programHighlight:`Slovenská národní samospráva, obnova tržních principů, svoboda vyznání a hráz proti bolševismu.`},{id:`cssd`,shortName:`ČSSD`,fullName:`Československá sociální demokracie`,ideology:`Demokratický socialismus, odborové hnutí`,leaders:[`Zdeněk Fierlinger`,`Bohumil Laušman`,`Václav Majer`],color:`#ea580c`,historicalPercentage:12.05,historicalSeats:37,description:`Hluboce rozpolcená strana mezi levicovým prokomunistickým křídlem (Fierlinger) a demokratickým protikomunistickým křídlem (Majer).`,programHighlight:`Hospodářské plánování, sociální jistoty pracujících, zachování parlamentních procedur.`},{id:`kss`,shortName:`KSS (na Slovensku)`,fullName:`Komunistická strana Slovenska`,ideology:`Marxismus-leninismus, revoluční socialismus`,leaders:[`Viliam Široký`,`Gustáv Husák`,`Karol Šmidke`],color:`#991b1b`,historicalPercentage:6.89,historicalSeats:21,description:`Slovenská organizace KSČ. Na Slovensku utrpěla porážku od Demokratické strany, následně s pomocí pražských komunistů usilovala o likvidaci DS.`,programHighlight:`Socializace, centralizace moci v rukou komunistů a potlačení vlivu církve na Slovensku.`}],questions:[{id:1,category:`Zahraniční orientace`,statement:`Zahraniční a bezpečnostní politika ČSR musí stát na bezvýhradném a trvalém spojenectví se Sovětským svazem jako jedinou zárukou proti Německu.`,historicalNote:`Sovětský svaz byl po válce vnímán jako osvoboditel. Demokratické strany však varovaly před jednostrannou závislostí na Moskvě.`,partyStances:{ksc:1,csns:0,csl:0,ds:-1,cssd:1,kss:1}},{id:2,category:`Most mezi světy`,statement:`Československo musí zůstat otevřeným mostem mezi Východem a Západem a zachovat těsné politické i obchodní vztahy s USA a Velkou Británií.`,historicalNote:`Prezident Edvard Beneš a nekomunistické strany věřili, že ČSR může syntetizovat západní demokracii a východní sociální spravedlnost.`,partyStances:{ksc:-1,csns:1,csl:1,ds:1,cssd:0,kss:-1}},{id:3,category:`Odsun menšin`,statement:`Odsun německého a maďarského obyvatelstva je morální a historickou nutností pro bezpečnost republiky a jejich majetek má patřit našemu lidu.`,historicalNote:`Na odsunu Němců na základě Postupimské dohody a Benešových dekretů panovala v roce 1946 naprostá shoda všech poválečných stran.`,partyStances:{ksc:1,csns:1,csl:1,ds:1,cssd:1,kss:1}},{id:4,category:`Hranice znárodnění`,statement:`Znárodnění velkého průmyslu a bank dekrety z října 1945 bylo správné, ale rozsah byl vyčerpán; soukromé řemeslo, maloobchod a střední firmy musí zůstat nedotčeny.`,historicalNote:`Gottwald v kampani 1946 veřejně sliboval, že živnostníkům nikdo jejich dílny nevezme, což po únoru 1948 okamžitě porušil.`,partyStances:{ksc:0,csns:1,csl:1,ds:1,cssd:0,kss:0}},{id:5,category:`Další vlna socializace`,statement:`Stát by měl v další etapě převzít také velkoobchod, zahraniční obchod a všechny průmyslové podniky s více než 50 zaměstnanci.`,historicalNote:`Tento cíl komunisté formulovali interně a prosadili jej do Hradeckého programu a po únorovém převratu.`,partyStances:{ksc:1,csns:-1,csl:-1,ds:-1,cssd:0,kss:1}},{id:6,category:`Zákaz pravicových stran`,statement:`Zákaz předválečné agrární strany a dalších pravicových subjektů byl spravedlivým krokem na ochranu republiky před kolaboranty.`,historicalNote:`Zákaz agrárníků zbavil statisíce venkovských voličů jejich přirozené strany. O jejich hlasy se tvrdě přetahovali komunisté a lidovci.`,partyStances:{ksc:1,csns:1,csl:0,ds:-1,cssd:1,kss:1}},{id:7,category:`Půda a pohraničí`,statement:`Zkonfiskovaná půda v pohraničí má být natrvalo zapsána do soukromého vlastnictví rolníků a kolchozy v naší zemi nesmí nikdy vzniknout.`,historicalNote:`Komunistický ministr zemědělství Julius Ďuriš rozdával dekrety na půdu se sloganem „Půda patří tomu, kdo na ní pracuje!“.`,partyStances:{ksc:1,csns:1,csl:1,ds:1,cssd:1,kss:1}},{id:8,category:`Plánované hospodářství`,statement:`Hospodářství musí být podřízeno závaznému státnímu centrálnímu plánu (Dvouletce) a volný trh musí ustoupit zájmům celku.`,historicalNote:`Dvouletý plán obnovy na léta 1947–1948 byl ústředním programovým bodem Gottwaldovy vlády po volbách.`,partyStances:{ksc:1,csns:0,csl:0,ds:-1,cssd:1,kss:1}},{id:9,category:`Církev a školství`,statement:`Církevní školy a svoboda náboženského vyučování musí být v nové ústavě plně zaručeny a chráněny před marxistickým vlivem.`,historicalNote:`Zatímco lidovci a slovenští demokraté viděli v křesťanství hráz proti totalitě, komunisté plánovali vytlačení církve z veřejného prostoru.`,partyStances:{ksc:-1,csns:0,csl:1,ds:1,cssd:-1,kss:-1}},{id:10,category:`Postavení Slovenska`,statement:`Slovenské národní orgány (SNR a Sbor pověřenců) mají mít plnou autonomii a Praha nesmí omezovat slovenskou samosprávu.`,historicalNote:`Po drtivém vítězství DS na Slovensku komunisté prosadili tzv. 3. pražskou dohodu, která slovenské orgány podřídila pražské vládě.`,partyStances:{ksc:-1,csns:-1,csl:0,ds:1,cssd:-1,kss:-1}},{id:11,category:`Bezpečnostní složky`,statement:`Sbor národní bezpečnosti (SNB) a vojenské zpravodajství musí být přísně apolitické a nesmí být obsazovány členy jedné dominantní strany.`,historicalNote:`Komunistický ministr vnitra Václav Nosek systematicky dosazoval komunisty do velení policie, což vedlo k vládní krizi v únoru 1948.`,partyStances:{ksc:-1,csns:1,csl:1,ds:1,cssd:0,kss:-1}},{id:12,category:`Lidové soudnictví a retribuce`,statement:`Mimořádné lidové soudy pro potrestání zrádců a kolaborantů mají jednat rychle a bez zbytečných průtahů formálního práva.`,historicalNote:`Retribuční dekrety vedly k odsouzení přes 30 000 osob. Komunisté retribuce často zneužívali k likvidaci politických konkurentů.`,partyStances:{ksc:1,csns:0,csl:-1,ds:-1,cssd:0,kss:1}},{id:13,category:`Odbory a závodní rady`,statement:`Jednotné odborové hnutí (ROH) a závodní rady mají mít právo spolurozhodovat o chodu podniků a kontrolovat vedení firem.`,historicalNote:`Antonín Zápotocký vybudoval z ROH údernou pěst komunistické strany, schopnou vyhlásit generální stávku a paralyzovat stát.`,partyStances:{ksc:1,csns:0,csl:-1,ds:-1,cssd:1,kss:1}},{id:14,category:`Monopol Národní fronty`,statement:`Systém Národní fronty, kde je opozice mimo vládní strany nepřípustná, je správnou zárukou národní jednoty.`,historicalNote:`Systém Národní fronty fakticky zrušil klasickou opoziční politiku a stal se nástrojem postupné likvidace demokracie.`,partyStances:{ksc:1,csns:0,csl:0,ds:-1,cssd:1,kss:1}},{id:15,category:`Bílé lístky jako protest`,statement:`Voličům musí být umožněno odevzdat prázdný bílý volební lístek jako legitimní projev nesouhlasu s nabídkou Národní fronty.`,historicalNote:`Bílé lístky byly jedinou povolenou formou protestu. Získaly 0,45 % v českých zemích a 0,76 % na Slovensku.`,partyStances:{ksc:-1,csns:0,csl:0,ds:1,cssd:0,kss:-1}}]},1990:{year:1990,title:`Volby do Federálního shromáždění 1990`,subtitle:`První svobodné a demokratické volby po 44 letech nadvlády jedné strany`,date:`8. a 9. června 1990`,turnout:`96,8 %`,stakes:`Rozhodovalo se o definitivním potvrzení pádu totality, tempu a charakteru ekonomické transformace a o budoucím soužití Čechů a Slováků ve společném státě.`,atmosphereQuote:`„Strany jsou pro straníky, Občanské fórum je pro všechny!“ – volební heslo OF`,historicalContext:`V červnu 1990 zažilo Československo první skutečně svobodné volby od roku 1946. V euforické atmosféře po Sametové revoluci (listopad 1989), zrušení článku 4 Ústavy o vedoucí úloze KSČ a zvolení Václava Havla prezidentem se k volebním urnám dostavilo neuvěřitelných 96,8 % oprávněných voličů.

Volby fungovaly především jako plebiscit o odmítnutí čtyřicetileté komunistické totality. Za širokým deštníkem revolučních hnutí (Občanské fórum v Česku, Verejnosť proti násiliu na Slovensku) se však již rýsovaly klíčové střety: Jak rychle přejít na tržní ekonomiku? Má se zvolit radikální cesta (Václav Klaus) nebo opatrnější sociální varianta (Valtr Komárek)? Jak se vypořádat s exponenty totality a tajnou policií StB (lustrace)? A jak uspořádat vztahy mezi Čechy a Slováky po vypjaté „pomlčkové válce“?`,outcomeSummary:`Občanské fórum (OF) v Česku získalo drtivých 53,15 % hlasů do Sněmovny lidu FS (celostátně 36,05 %), zatímco na Slovensku zvítězila Verejnosť proti násiliu (VPN) s 32,54 %. Komunistická strana (KSČS) skončila s 13,6 % druhá, což potvrdilo přítomnost nezanedbatelného postkomunistického elektorátu. Výrazného úspěchu dosáhlo na Moravě moravistické Hnutí za samosprávnou demokracii (HSD-SMS) s téměř 8 % hlasů v ČR.

Byla vytvořena koaliční federální vláda v čele s Marianem Čalfou (OF/VPN). Volby roku 1990 potvrdily návrat Československa k demokracii, ale mandát na dva roky předznamenal dramatické události: rozpad revolučních hnutí, spor o kuponovou privatizaci a následný rozpad společného státu v roce 1992.`,parties:[{id:`of`,shortName:`Občanské fórum (OF)`,fullName:`Občanské fórum`,ideology:`Široké antiautoritářské hnutí, liberální demokracie, tržní reformy`,leaders:[`Václav Klaus`,`Jiří Dienstbier`,`Jan Urban`,`Petr Pithart`],color:`#2563eb`,historicalPercentage:36.05,historicalSeats:68,description:`Vítěz voleb v ČR. Hnutí zrozené v Sametové revoluci, které sjednotilo disidenty, ekonomy i širokou veřejnost k demontáži komunismu.`,programHighlight:`Návrat do Evropy, právní stát, rychlá privatizace a tržní ekonomika, svoboda jednotlivce.`},{id:`vpn`,shortName:`Verejnosť proti násiliu (VPN)`,fullName:`Verejnosť proti násiliu`,ideology:`Občanské demokratické hnutí, humanismus, reformismus`,leaders:[`Fedor Gál`,`Vladimír Mečiar`,`Marián Čalfa`,`Milan Kňažko`],color:`#0284c7`,historicalPercentage:8.56,historicalSeats:19,description:`Slovenský protějšek OF, vítěz voleb na Slovensku. Bojovala za demokracii, ale s větším citem pro specifické sociální a národní potřeby Slovenska.`,programHighlight:`Demokratizace společnosti, federalismus s respektem k slovenské svébytnosti a sociálně citlivá transformace.`},{id:`kscs`,shortName:`KSČS`,fullName:`Komunistická strana Československa`,ideology:`Demokratický socialismus, postkomunismus`,leaders:[`Ladislav Adamec`,`Vasil Mohorita`,`Jiří Svoboda`],color:`#dc2626`,historicalPercentage:13.59,historicalSeats:23,description:`Bývalá státostrana po ztrátě mocenského monopolu. Hájila sociální jistoty, sociální stát a varovala před masovou nezaměstnaností a výprodejem majetku.`,programHighlight:`Zachování sociálních jistot, odpor k divoké privatizaci a plošným lustracím, vojenská neutralita.`},{id:`kdu`,shortName:`KDU / KDH`,fullName:`Křesťanská a demokratická unie (ČR) / KDH (SR)`,ideology:`Křesťanská demokracie, sociálně-tržní hospodářství, etika`,leaders:[`Josef Bartončík`,`Ján Čarnogurský`,`Václav Benda`],color:`#eab308`,historicalPercentage:10.84,historicalSeats:20,description:`Koalice lidovců a křesťanských aktivistů. V ČR byla těsně před volbami poškozena aférou kolem Josefa Bartončíka, na Slovensku získalo KDH silnou pozici.`,programHighlight:`Restituce církevního a soukromého majetku, ochrana rodiny, křesťanská morálka a sociálně-tržní řád.`},{id:`hsd_sms`,shortName:`HSD-SMS`,fullName:`Hnutí za samosprávnou demokracii – Společnost pro Moravu a Slezsko`,ideology:`Moravský regionalismus, samospráva, decentralizace`,leaders:[`Boleslav Bárta`,`Jaroslav Mezník`],color:`#9333ea`,historicalPercentage:5.39,historicalSeats:9,description:`Velké překvapení voleb na Moravě (v Jihomoravském kraji téměř 30 %!). Požadovalo zemské zřízení a konec pragocentrismu.`,programHighlight:`Obnova moravskoslezské samosprávy, trojfederace (Čechy, Morava a Slezsko, Slovensko) a zemský sněm.`},{id:`sns`,shortName:`SNS`,fullName:`Slovenská národná strana`,ideology:`Slovenský nacionalismus, suverenita`,leaders:[`Víťazoslav Móric`,`Stanislav Pánis`],color:`#84cc16`,historicalPercentage:3.67,historicalSeats:6,description:`Radikálně národní slovenská strana. Jako jediná parlamentní síla v roce 1990 otevřeně žádala samostatné Slovensko a konec federace.`,programHighlight:`Plná státní suverenita Slovenska, slovenština jako jediný úřední jazyk a samostatné vystupování v zahraničí.`},{id:`css`,shortName:`ČSS (Socialisté)`,fullName:`Československá strana socialistická`,ideology:`Středový sociální liberalismus, reformismus`,leaders:[`Jiří Vyvadil`,`Milan Nevima`],color:`#ea580c`,historicalPercentage:2.68,historicalSeats:0,description:`Bývalá strana Národní fronty, která se během listopadu 1989 postavila režimu (propůjčila balkón Melantrichu). Těsně nepřekročila 5% klauzuli.`,programHighlight:`Postupná sociálně-tržní transformace, posílení národní hrdosti a ochrana zaměstnanců.`},{id:`sz`,shortName:`SZ (Zelení)`,fullName:`Strana zelených`,ideology:`Environmentální politika, ekologie, antinukleární hnutí`,leaders:[`Aleš Šulc`,`Jaroslav Slanec`],color:`#16a34a`,historicalPercentage:3.1,historicalSeats:0,description:`Reagovala na děsivý stav životního prostředí v komunistickém ČSSR (smogy, kyselé deště, devastace Krušných hor).`,programHighlight:`Okamžité zastavení těžby uhlí v severních Čechách, ochrana ovzduší a pitné vody jako vládní priorita.`}],questions:[{id:1,category:`Ekonomická transformace`,statement:`Tržní transformace (liberalizace cen, privatizace a otevření trhů) musí proběhnout rychle a radikálně v podobě „šokové terapie“, i za cenu dočasného poklesu životní úrovně.`,historicalNote:`Spor mezi Václavem Klausem (rychlá reforma) a Valtrem Komárkem či Milanem Zeleným (postupná sociální cesta).`,partyStances:{of:1,vpn:1,kscs:-1,kdu:0,hsd_sms:0,sns:-1,css:-1,sz:0}},{id:2,category:`Kuponová privatizace`,statement:`Státní podniky by měly být zprivatizovány masovou účastí všech občanů formou investičních kuponů za symbolický poplatek.`,historicalNote:`Kuponová privatizace byla unikátní československý nápad, jak rychle rozdělit obrovský státní majetek mezi miliony občanů bez domácího kapitálu.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:-1,sz:0}},{id:3,category:`Sociální jistoty`,statement:`Přechod na tržní hospodářství musí být přísně regulován a zpomalen státem tak, aby nevznikla masová nezaměstnanost a neohrozila důchodce a rodiny.`,historicalNote:`Komunisté a část odborů varovali před sociálním kolapsem, na Slovensku hrozil rozpad zbrojního a těžkého průmyslu.`,partyStances:{of:-1,vpn:0,kscs:1,kdu:1,hsd_sms:1,sns:1,css:1,sz:1}},{id:4,category:`Zákaz KSČ`,statement:`Komunistická strana by měla být jako totalitní zločinecká organizace postavena zcela mimo zákon a její majetek bez náhrady zabaven.`,historicalNote:`Havel a vedení OF razili heslo „Nejsme jako oni“ a odmítli plošný zákaz KSČ, radikální antikomunisté však požadovali její zrušení.`,partyStances:{of:0,vpn:0,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:0,sz:0}},{id:5,category:`Lustrace a vyrovnání s minulostí`,statement:`Bývalí agenti a spolupracovníci StB a vysocí funkcionáři KSČ musí být zákonem vyloučeni z veřejných funkcí a justice.`,historicalNote:`Lustrační zákon z roku 1991 vyvolal obrovské spory; pro KDU a radikální část OF byl nutnou očistou státu.`,partyStances:{of:1,vpn:0,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:-1,sz:0}},{id:6,category:`Restituce majetku`,statement:`Veškerý majetek zabavený komunistickým režimem po únoru 1948 (včetně polností a domů) musí být vrácen původním vlastníkům či jejich dědicům.`,historicalNote:`Restituční zákony napravovaly křivdy, ale vyvolaly debaty, zda vracet i majetek církvím a zda jít před únor 1948.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:1,hsd_sms:1,sns:0,css:0,sz:1}},{id:7,category:`Společný stát`,statement:`Československá federace musí být zachována se silnými centrálními pravomocemi v měně, zahraniční politice a obraně.`,historicalNote:`Snaha zachovat funkční společný stát narážela na sílící slovenské požadavky na svébytnost a tzv. kompetenční spory.`,partyStances:{of:1,vpn:0,kscs:1,kdu:1,hsd_sms:1,sns:-1,css:1,sz:1}},{id:8,category:`Slovenská suverenita`,statement:`Slovensko by mělo získat plnou národní suverenitu a s Českou republikou vytvořit nanejvýš volnou konfederaci či samostatný stát.`,historicalNote:`SNS byla jedinou formací, která otevřeně hlásala samostatnost, což se stalo realitou o dva a půl roku později v lednu 1993.`,partyStances:{of:-1,vpn:-1,kscs:-1,kdu:-1,hsd_sms:-1,sns:1,css:-1,sz:-1}},{id:9,category:`Moravská samospráva`,statement:`V rámci nového uspořádání musí být obnoveno historické zemské zřízení Moravy a Slezska s vlastním zemským parlamentem a rozpočtem.`,historicalNote:`Hnutí HSD-SMS Boleslava Bárty požadovalo trojfederaci (Čechy, Morava-Slezsko, Slovensko) a odmítalo centralistickou moc Prahy.`,partyStances:{of:-1,vpn:0,kscs:0,kdu:0,hsd_sms:1,sns:0,css:1,sz:0}},{id:10,category:`Vstup do NATO a na Západ`,statement:`Československo by mělo co nejrychleji usilovat o plné členství v Severoatlantické alianci (NATO) a Evropském společenství.`,historicalNote:`V roce 1990 ještě existovala Varšavská smlouva. Myšlenka vstupu do NATO teprve zrála, Dienstbier zpočátku navrhoval rozpuštění obou bloků.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:0,sz:0}},{id:11,category:`Vojenská neutralita`,statement:`Československo by mělo vyhlásit trvalou vojenskou neutralitu po vzoru Rakouska a Švýcarska a nevstupovat do žádných aliancí.`,historicalNote:`Komunisté a část levice prosazovali neutralitu jako alternativu k integraci do západních vojenských struktur.`,partyStances:{of:-1,vpn:-1,kscs:1,kdu:-1,hsd_sms:0,sns:1,css:1,sz:1}},{id:12,category:`Odchod sovětských vojsk`,statement:`Odchod všech sovětských okupačních vojsk z našeho území musí proběhnout okamžitě, bezpodmínečně a do posledního vojáka.`,historicalNote:`Vyjednání bleskového odchodu 73 500 sovětských vojáků pod vedením Michaela Kocába a Jiřího Dienstbiera bylo klíčovým úspěchem roku 1990/91.`,partyStances:{of:1,vpn:1,kscs:0,kdu:1,hsd_sms:1,sns:1,css:1,sz:1}},{id:13,category:`Ekologie a životní prostředí`,statement:`Záchrana zdevastované přírody a ovzduší (zejména v Severních Čechách) musí mít v rozpočtu absolutní přednost i před tempem růstu ekonomiky.`,historicalNote:`Ekologické demonstrace v Teplicích předcházely 17. listopadu. Všichni uznávali katastrofální stav lesů a smog, ale lišily se priority financování.`,partyStances:{of:1,vpn:1,kscs:0,kdu:1,hsd_sms:1,sns:0,css:1,sz:1}},{id:14,category:`Křesťanské a rodinné hodnoty`,statement:`Zákony nové republiky se musí opírat o křesťanskou etiku a stát by měl omezit potraty a finančně podporovat tradiční vícedětné rodiny.`,historicalNote:`Lidovci a KDH kladli morální obrodu společnosti na první místo a varovali před konzumním a morálním úpadkem ze Západu.`,partyStances:{of:0,vpn:0,kscs:-1,kdu:1,hsd_sms:0,sns:1,css:0,sz:0}},{id:15,category:`Charakter politiky (OF vs. strany)`,statement:`Politiku by neměly ovládat tradiční stranické aparáty; široká občanská hnutí jsou pro novou společnost vhodnější než klasické ideologické strany.`,historicalNote:`Konflikt mezi Havlovou vizí „nepolitické politiky“ v rámci OF a Klausovým budováním standardní pravicové strany (budoucí ODS).`,partyStances:{of:1,vpn:1,kscs:-1,kdu:-1,hsd_sms:1,sns:-1,css:-1,sz:0}}]}};function r(e,t){let n=e.questions,r=n.length;return r===0?[]:e.parties.map(e=>{let i=0,a=r*2,o=0,s=0,c=0;n.forEach(n=>{let r=t[n.id]??0,a=n.partyStances[e.id]??0,l=Math.abs(r-a);i+=l,r!==0&&a!==0?r===a?o++:s++:c++});let l=Math.round((1-i/a)*100);return{party:e,matchPercentage:Math.max(0,Math.min(100,l)),agreeCount:o,disagreeCount:s,neutralCount:c}}).sort((e,t)=>t.matchPercentage-e.matchPercentage)}var i={view:`home`,year:1920,questionIndex:0,answers:{},partyScores:[],showHistoricalNote:!1,toastMessage:null,comparisonFilter:`all`,selectedPartyForDetails:null,expandedPartiesYear:null};function a(e){i.toastMessage=e,g(),setTimeout(()=>{i.toastMessage=null,g()},3e3)}function o(e){i.view=e,window.scrollTo({top:0,behavior:`smooth`}),g()}function s(e){i.year=e,i.questionIndex=0,i.answers={},i.partyScores=[],i.showHistoricalNote=!1,i.view=`quiz`,window.scrollTo({top:0,behavior:`smooth`}),g()}function c(e){let t=n[i.year],r=t.questions[i.questionIndex];i.answers[r.id]=e,i.questionIndex<t.questions.length-1?(i.questionIndex++,i.showHistoricalNote=!1,g()):l()}function l(){let e=n[i.year],a=r(e,i.answers);i.partyScores=a,i.selectedPartyForDetails=a[0]?.party.id||null,i.view=`results`;try{t({particleCount:60,spread:60,origin:{y:.6}})}catch(e){console.error(e)}window.scrollTo({top:0,behavior:`smooth`}),g()}function u(){return`
    <header class="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        <!-- Logo / Brand -->
        <button onclick="window.calcSetView('home')" class="flex items-center gap-3 text-left group">
          <div class="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs">
            VK
          </div>
          <div>
            <span class="font-bold text-sm text-slate-900 block leading-tight">
              Historická volební kalkulačka
            </span>
            <span class="text-[11px] text-slate-500 font-medium block">
              1920 · 1946 · 1990
            </span>
          </div>
        </button>

        <!-- Right navigation -->
        <nav class="flex items-center gap-3 text-xs font-medium">
          <button 
            onclick="window.calcSetView('home')" 
            class="px-3 py-1.5 rounded-md transition-colors ${i.view===`home`?`bg-slate-100 text-slate-900 font-semibold`:`text-slate-600 hover:text-slate-900`}"
          >
            Výběr voleb
          </button>
          ${i.view===`quiz`||i.view===`results`?`
            <span class="text-slate-300">|</span>
            <span class="text-slate-700 font-semibold px-2 py-0.5 bg-blue-50 text-blue-800 rounded text-[11px]">
              Volby ${i.year}
            </span>
          `:``}
        </nav>
      </div>
    </header>
  `}function d(){return`
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Clean Editorial Intro -->
      <section class="max-w-2xl mb-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          Která historická strana odpovídá vašim názorům?
        </h1>
        <p class="text-base text-slate-600 leading-relaxed font-normal">
          Vyberte si jeden ze tří klíčových parlamentních volebních roků. Zodpovězte 15 otázek vycházejících ze skutečných dobových programů a zjistěte procentuální shodu se všemi tehdejšími kandidujícími stranami.
        </p>
      </section>

      <!-- 3 Election Cards -->
      <section class="space-y-4 mb-14">
        ${[1920,1946,1990].map(e=>{let t=n[e],r=i.expandedPartiesYear===e;return`
            <div class="election-card p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <!-- Left content -->
              <div class="flex-1">
                <!-- Year & Meta row -->
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                    ${t.year}
                  </span>
                  <span class="text-slate-300">·</span>
                  <span class="text-xs font-semibold text-blue-700">
                    ${t.date}
                  </span>
                  <span class="text-slate-300">·</span>
                  <span class="text-xs text-slate-500 font-medium">
                    Účast ${t.turnout}
                  </span>
                </div>

                <!-- Title & Context -->
                <h2 class="text-lg font-bold text-slate-900 mb-1.5">
                  ${t.title}
                </h2>
                
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  ${t.stakes}
                </p>

                <!-- Clean parties summary with toggle -->
                <div class="text-xs text-slate-500">
                  <span>Kandidující strany (${t.parties.length}): </span>
                  <span class="text-slate-700 font-medium">
                    ${t.parties.map(e=>e.shortName).slice(0,4).join(`, `)}${t.parties.length>4?` a další ${t.parties.length-4}`:``}
                  </span>
                  <button 
                    onclick="window.calcToggleParties(${e})"
                    class="text-blue-600 hover:text-blue-800 underline ml-1 text-xs font-medium cursor-pointer"
                  >
                    ${r?`skrýt přehled`:`zobrazit všechny`}
                  </button>
                </div>

                ${r?`
                  <div class="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 animate-fadeIn">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${t.parties.map(e=>`
                        <div class="flex items-center gap-2">
                          <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${e.color};"></span>
                          <strong class="text-slate-900 font-semibold">${e.shortName}:</strong>
                          <span class="text-slate-500 truncate">${e.ideology}</span>
                        </div>
                      `).join(``)}
                    </div>
                  </div>
                `:``}
              </div>

              <!-- Right action button -->
              <div class="shrink-0 pt-2 md:pt-0">
                <button 
                  onclick="window.calcStartQuiz(${e})"
                  class="w-full md:w-auto px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Spustit kalkulačku</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          `}).join(``)}
      </section>

      <!-- Educational background -->
      <section class="border-t border-slate-200 pt-8">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          O projektu a historických datech
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div>
            <strong class="text-slate-900 block mb-1 font-semibold">15 dobových otázek pro každý rok</strong>
            Otázky pokrývají klíčové ekonomické, sociální, zahraniční a ústavní otázky, kterými tehdejší společnost skutečně žila.
          </div>
          <div>
            <strong class="text-slate-900 block mb-1 font-semibold">Přesná váhová matice postojů</strong>
            Postoje stran byly sestaveny na základě historických volebních programů, tiskovin a parlamentních hlasování.
          </div>
          <div>
            <strong class="text-slate-900 block mb-1 font-semibold">Skutečné volební výsledky</strong>
            Po dokončení kalkulačky se dozvíte nejen svou shodu, ale také reálné rozdělení mandátů a co po volbách následovalo.
          </div>
        </div>
      </section>
    </main>
  `}function f(){let e=n[i.year],t=e.questions.length,r=e.questions[i.questionIndex],a=Math.round((i.questionIndex+1)/t*100),o=i.answers[r.id];return`
    <main class="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 animate-fadeIn">
      
      <!-- Progress Bar & Question Step -->
      <div class="mb-6">
        <div class="flex items-center justify-between text-xs mb-2">
          <button 
            onclick="window.calcSetView('home')" 
            class="text-slate-500 hover:text-slate-800 transition-colors font-medium flex items-center gap-1 cursor-pointer"
          >
            <span>←</span>
            <span>Výběr roku</span>
          </button>
          
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900">Volby ${i.year}</span>
            <span class="text-slate-300">·</span>
            <span class="text-slate-600 font-medium">
              Otázka ${i.questionIndex+1} z ${t}
            </span>
          </div>
        </div>

        <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div 
            class="bg-blue-600 h-full transition-all duration-300 ease-out" 
            style="width: ${a}%;"
          ></div>
        </div>
      </div>

      <!-- Main Questionnaire Card -->
      <div class="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs mb-6">
        
        <!-- Category label -->
        <div class="mb-3">
          <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">
            ${r.category}
          </span>
        </div>

        <!-- Statement -->
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
          ${r.statement}
        </h2>

        <!-- Explanatory note toggle -->
        <div class="mb-8 pt-3 border-t border-slate-100">
          <button 
            id="btn-toggle-note"
            class="text-xs text-slate-500 hover:text-slate-900 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span class="text-[10px] transform ${i.showHistoricalNote?`rotate-90`:``} transition-transform">▶</span>
            <span>Dobový kontext a vysvětlení otázky</span>
          </button>

          ${i.showHistoricalNote?`
            <div class="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed animate-fadeIn">
              <strong>Historické pozadí:</strong> ${r.historicalNote}
            </div>
          `:``}
        </div>

        <!-- 3 Modern Electoral Buttons (Ano / Nevím / Ne) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <!-- Souhlasím (+1) -->
          <button 
            onclick="window.calcHandleAnswer(1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${o===1?`bg-emerald-700 text-white border-emerald-700 shadow-sm`:`bg-white hover:bg-emerald-50 text-slate-800 border-slate-300 hover:border-emerald-600`}"
          >
            <span class="text-base text-emerald-600 ${o===1?`text-white`:``}">✔</span>
            <span>Ano / Souhlasím</span>
          </button>

          <!-- Nevím / Neutrální (0) -->
          <button 
            onclick="window.calcHandleAnswer(0)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${o===0?`bg-slate-800 text-white border-slate-800 shadow-sm`:`bg-white hover:bg-slate-100 text-slate-700 border-slate-300 hover:border-slate-400`}"
          >
            <span class="text-base text-slate-400 ${o===0?`text-white`:``}">—</span>
            <span>Nevím / Neutrální</span>
          </button>

          <!-- Nesouhlasím (-1) -->
          <button 
            onclick="window.calcHandleAnswer(-1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${o===-1?`bg-rose-700 text-white border-rose-700 shadow-sm`:`bg-white hover:bg-rose-50 text-slate-800 border-slate-300 hover:border-rose-600`}"
          >
            <span class="text-base text-rose-600 ${o===-1?`text-white`:``}">✖</span>
            <span>Ne / Nesouhlasím</span>
          </button>

        </div>

      </div>

      <!-- Bottom controls: Back & Skip -->
      <div class="flex items-center justify-between text-xs text-slate-500 px-1">
        <button 
          ${i.questionIndex>0?`onclick="window.calcPrevQuestion()"`:`disabled`}
          class="hover:text-slate-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium flex items-center gap-1 cursor-pointer"
        >
          <span>←</span>
          <span>Předchozí otázka</span>
        </button>

        <!-- Minimal numbered pill navigator -->
        <div class="hidden sm:flex items-center gap-1">
          ${e.questions.map((e,t)=>{let n=i.answers[e.id]!==void 0;return`
              <button 
                onclick="window.calcJumpQuestion(${t})"
                class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono transition-colors cursor-pointer ${t===i.questionIndex?`bg-blue-600 text-white font-bold`:n?`bg-slate-200 text-slate-800 font-medium`:`text-slate-400 hover:bg-slate-100`}"
              >
                ${t+1}
              </button>
            `}).join(``)}
        </div>

        <button 
          onclick="window.calcHandleAnswer(0)"
          class="hover:text-slate-900 transition-colors font-medium flex items-center gap-1 cursor-pointer"
        >
          <span>Přeskočit</span>
          <span>→</span>
        </button>
      </div>

    </main>
  `}function p(){let e=n[i.year],t=i.partyScores[0],r=i.selectedPartyForDetails||t?.party.id,a=e.parties.find(e=>e.id===r)||t?.party;return`
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Top Headline -->
      <div class="mb-8">
        <div class="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <span>Výsledky kalkulačky</span>
          <span>·</span>
          <span>Volby ${i.year}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Vaše názorová shoda se stranami
        </h1>
      </div>

      <!-- #1 Match Highlight Card -->
      ${t?`
        <div class="bg-slate-900 text-white rounded-xl p-6 sm:p-8 mb-8 shadow-sm">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="max-w-xl">
              <span class="text-xs uppercase tracking-wider font-semibold text-blue-400 block mb-1">
                Nejvyšší shoda programu
              </span>
              <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                ${t.party.fullName} (${t.party.shortName})
              </h2>
              <div class="text-xs text-slate-400 mb-3 font-medium">
                ${t.party.ideology} · Klíčové osobnosti: <strong class="text-slate-200">${t.party.leaders.join(`, `)}</strong>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                ${t.party.description}
              </p>
              <div class="p-3 rounded-lg bg-slate-800 text-xs text-slate-200 border border-slate-700">
                <strong>Programové pilíře:</strong> ${t.party.programHighlight}
              </div>
            </div>

            <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800 border border-slate-700 min-w-[130px] shrink-0 self-center sm:self-auto">
              <span class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                ${t.matchPercentage}%
              </span>
              <span class="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                Shoda
              </span>
            </div>
          </div>
        </div>
      `:``}

      <!-- Complete Ranking of all parties (Bar chart) -->
      <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-slate-900 mb-1">
          Celkové pořadí všech kandidujících stran
        </h3>
        <p class="text-xs text-slate-500 mb-5">
          Klepnutím na libovolnou stranu zobrazíte podrobné srovnání odpovědí.
        </p>

        <div class="space-y-3">
          ${i.partyScores.map((e,t)=>{let n=a?.id===e.party.id;return`
              <div 
                onclick="window.calcSelectPartyDetails('${e.party.id}')"
                class="p-3 rounded-lg border transition-all cursor-pointer ${n?`border-blue-600 bg-blue-50/50`:`border-slate-200 hover:border-slate-300 bg-white`}"
              >
                <div class="flex items-center justify-between mb-1.5 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-[10px]">
                      ${t+1}
                    </span>
                    <strong class="text-slate-900 text-sm font-semibold">${e.party.shortName}</strong>
                    <span class="text-slate-500 text-xs hidden sm:inline">(${e.party.ideology})</span>
                  </div>
                  <div class="font-mono font-bold text-sm text-slate-900">
                    ${e.matchPercentage}%
                  </div>
                </div>

                <!-- Match bar -->
                <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-1">
                  <div 
                    class="h-full rounded-full transition-all duration-300" 
                    style="width: ${e.matchPercentage}%; background-color: ${e.party.color};"
                  ></div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Shoda: <strong>${e.agreeCount}</strong> · Rozpor: <strong>${e.disagreeCount}</strong></span>
                  <span>Reálný výsledek ${i.year}: <strong class="text-slate-800">${e.party.historicalPercentage}%</strong></span>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>

      <!-- Question Comparison Breakdown -->
      ${a?`
        <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-xs">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
            <div>
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Podrobný rozbor</span>
              <h3 class="text-base font-bold text-slate-900">
                Vaše odpovědi vs. ${a.fullName}
              </h3>
            </div>

            <!-- Filter tabs -->
            <div class="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetComparisonFilter('all')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${i.comparisonFilter===`all`?`bg-white text-slate-900 shadow-xs font-semibold`:`text-slate-600 hover:text-slate-900`}"
              >
                Všechny (15)
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('agree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${i.comparisonFilter===`agree`?`bg-white text-slate-900 shadow-xs font-semibold`:`text-slate-600 hover:text-slate-900`}"
              >
                Shoda
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('disagree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${i.comparisonFilter===`agree`?`text-slate-600 hover:text-slate-900`:i.comparisonFilter===`disagree`?`bg-white text-slate-900 shadow-xs font-semibold`:`text-slate-600 hover:text-slate-900`}"
              >
                Rozpor
              </button>
            </div>
          </div>

          <div class="space-y-3">
            ${e.questions.filter(e=>{let t=i.answers[e.id]??0,n=e.partyStances[a.id]??0;return i.comparisonFilter===`agree`?t!==0&&n!==0&&t===n:i.comparisonFilter!==`disagree`||t!==0&&n!==0&&t!==n}).map(e=>{let t=i.answers[e.id]??0,n=e.partyStances[a.id]??0,r=t!==0&&n!==0&&t===n,o=t!==0&&n!==0&&t!==n,s=t===1?`Ano`:t===-1?`Ne`:`Nevím`,c=n===1?`Ano`:n===-1?`Ne`:`Neutrální`;return`
                  <div class="p-3.5 rounded-lg border text-xs ${r?`border-emerald-200 bg-emerald-50/20`:o?`border-rose-200 bg-rose-50/20`:`border-slate-200 bg-white`}">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-slate-500 font-semibold uppercase text-[10px]">${e.category}</span>
                      <span class="text-[11px] font-semibold px-2 py-0.5 rounded ${r?`text-emerald-700 bg-emerald-100`:o?`text-rose-700 bg-rose-100`:`text-slate-600 bg-slate-100`}">
                        ${r?`✔ Shoda`:o?`✖ Rozpor`:`— Neutrální`}
                      </span>
                    </div>

                    <p class="font-medium text-slate-900 mb-2 leading-relaxed">
                      ${e.statement}
                    </p>

                    <div class="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                      <div>
                        <span class="text-slate-500 block text-[10px]">Váš hlas:</span>
                        <strong class="${t===1?`text-emerald-700`:t===-1?`text-rose-700`:`text-slate-700`} font-semibold">
                          ${s}
                        </strong>
                      </div>
                      <div>
                        <span class="text-slate-500 block text-[10px]">Postoj ${a.shortName}:</span>
                        <strong class="${n===1?`text-emerald-700`:n===-1?`text-rose-700`:`text-slate-700`} font-semibold">
                          ${c}
                        </strong>
                      </div>
                    </div>
                  </div>
                `}).join(``)}
          </div>
        </div>
      `:``}

      <!-- Real Historical Results -->
      <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-slate-900 mb-1">
          Jak tyto volby v roce ${i.year} skutečně dopadly?
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed mb-5">
          ${e.historicalContext}
        </p>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed mb-6">
          <strong>Povolební vývoj:</strong> ${e.outcomeSummary}
        </div>

        <!-- Historical percentages table -->
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Oficiální volební zisk stran (${i.year})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${e.parties.map(t=>`
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <div class="flex items-center justify-between mb-1">
                <strong class="text-slate-900 font-semibold">${t.shortName}</strong>
                <span class="font-mono font-bold text-slate-900">${t.historicalPercentage}%</span>
              </div>
              <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-1.5">
                <div class="h-full rounded-full" style="width: ${Math.min(100,t.historicalPercentage*2.2)}%; background-color: ${t.color};"></div>
              </div>
              <div class="text-[11px] text-slate-500 flex justify-between">
                <span>Mandátů: <strong>${t.historicalSeats>0?t.historicalSeats:`0`}</strong></span>
                <span>Účast: ${e.turnout}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Action controls -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button 
          onclick="window.calcShareResult()"
          class="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-tight transition-colors cursor-pointer shadow-xs"
        >
          Kopírovat výsledek
        </button>
        <button 
          onclick="window.calcSetView('home')"
          class="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs tracking-tight transition-colors cursor-pointer"
        >
          Vyzkoušet jiný volební rok
        </button>
      </div>

    </main>
  `}function m(){return i.toastMessage?`
    <div class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium animate-fadeIn">
      <span>${i.toastMessage}</span>
    </div>
  `:``}function h(){return`
    <footer class="border-t border-slate-200 py-8 px-4 sm:px-6 mt-16 text-slate-500 text-xs bg-white">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span class="font-bold text-slate-900">Historická volební kalkulačka</span>
          <span class="text-slate-300 mx-2">·</span>
          <span>1920 · 1946 · 1990</span>
        </div>
        <div class="text-[11px] text-slate-400">
          Založeno na dobových volebních programech a historických pramenech
        </div>
      </div>
    </footer>
  `}function g(){let e=document.getElementById(`app`);if(!e)return;let t=``;switch(i.view){case`home`:t=d();break;case`quiz`:t=f();break;case`results`:t=p()}e.innerHTML=`
    ${u()}
    ${t}
    ${h()}
    ${m()}
  `,_()}function _(){document.getElementById(`btn-toggle-note`)?.addEventListener(`click`,()=>{i.showHistoricalNote=!i.showHistoricalNote,g()})}window.calcStartQuiz=e=>s(e),window.calcHandleAnswer=e=>c(e),window.calcPrevQuestion=()=>{i.questionIndex>0&&(i.questionIndex--,i.showHistoricalNote=!1,g())},window.calcJumpQuestion=e=>{i.questionIndex=e,i.showHistoricalNote=!1,g()},window.calcSetView=e=>o(e),window.calcSelectPartyDetails=e=>{i.selectedPartyForDetails=e,g()},window.calcSetComparisonFilter=e=>{i.comparisonFilter=e,g()},window.calcToggleParties=e=>{i.expandedPartiesYear=i.expandedPartiesYear===e?null:e,g()},window.calcShareResult=()=>{let e=i.partyScores[0],t=e?`V Historické volební kalkulačce pro rok ${i.year} mi vyšla nejvyšší shoda s: ${e.party.fullName} (${e.matchPercentage} %)!`:`Vyzkoušejte Historickou volební kalkulačku (1920, 1946, 1990)!`;navigator.clipboard?navigator.clipboard.writeText(t).then(()=>{a(`Zkopírováno do schránky`)}).catch(()=>{a(t)}):a(t)},g();