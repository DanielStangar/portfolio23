import{_ as b,o as _,c as v,b as t,t as g,p as C,a as I,h as $,w as O,T as X,e as o,L as Y,N as D,g as s}from"./index-6bad489f.js";const E="/portfolio23/assets/002copy-small-d0f64753.jpg",M="/portfolio23/assets/A18photo-8dcde407.jpg",K="/portfolio23/assets/Admaker2-0d61ecde.jpg",z="/portfolio23/assets/CV-2023-3-93054928.pdf",R="/portfolio23/assets/Cavendish Cars-fdb87ce3.jpg",U="/portfolio23/assets/GUlogo2-ca3cbd5c.png",Q="/portfolio23/assets/Planner-wide-af2bd2cd.jpg",q="/portfolio23/assets/Planner-wide2-9415cdfd.jpg",ee="/portfolio23/assets/Port2stack-51604691.jpg",te="data:text/css;base64,CgpodG1sLCBib2R5ewogIG1pbi1oZWlnaHQ6IDEwMHZoOwogIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTsKIHBhZGRpbmc6IDA7CiBtYXJnaW46IDA7CiAKICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7CiAgbGluZS1oZWlnaHQ6IDEuNjsKICBmb250LWZhbWlseTogSW50ZXIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwKICAgIENhbnRhcmVsbCwgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjsKICBmb250LXNpemU6IDE1cHg7CiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsKICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsKICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOwp9Cg==",se="/portfolio23/assets/bluesmoke3-6a4cb537.jpg",oe="/portfolio23/assets/Firabase9-cert-f1120e46.png",ne="/portfolio23/assets/Vue3-compAPI-cert-58bc7a4f.jpeg",ae="/portfolio23/assets/css3-cert-1e94a6bf.png",ie="/portfolio23/assets/html5-cert-a8f1d446.png",le="/portfolio23/assets/js-cert-762768f3.png",re="/portfolio23/assets/python-cert-f1a648ea.png",pe="/portfolio23/assets/vue3-animation-cert-f748d494.png",ce="/portfolio23/assets/vue3-pinia-cert-4799e962.png",de="/portfolio23/assets/flowerclub-93f5f0a8.jpg",ge="data:text/css;base64,QGltcG9ydCAnLi9iYXNlLmNzcyc7CgojYXBwIHsKCiAgbWFyZ2luOiAwIGF1dG87CiAgcGFkZGluZzogMHJlbTsKCiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKfQoKaHRtbCB7CgogIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2JsdWVzbW9rZTMuanBnJyk7CiAKICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OwogICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsKICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7Cgp9CgoKCgoKCgo=",be="/portfolio23/assets/portfolio23 page-dd25eb13.jpg",_e="/portfolio23/assets/todolist-0bf349e0.jpg",ue={class:"panel"},fe=["src"],he={__name:"Panel",props:{image:String},setup(n){const l=n;function i(){return new URL(Object.assign({"../assets/002copy-small.jpg":E,"../assets/A18photo.jpg":M,"../assets/Admaker2.jpg":K,"../assets/CV-2023-3.pdf":z,"../assets/Cavendish Cars.jpg":R,"../assets/GUlogo2.png":U,"../assets/Planner-wide.jpg":Q,"../assets/Planner-wide2.jpg":q,"../assets/Port2stack.jpg":ee,"../assets/base.css":te,"../assets/bluesmoke3.jpg":se,"../assets/certificates/Firabase9-cert.png":oe,"../assets/certificates/Vue3-compAPI-cert.jpeg":ne,"../assets/certificates/css3-cert.png":ae,"../assets/certificates/html5-cert.png":ie,"../assets/certificates/js-cert.png":le,"../assets/certificates/python-cert.png":re,"../assets/certificates/vue3-animation-cert.png":pe,"../assets/certificates/vue3-pinia-cert.png":ce,"../assets/flowerclub.jpg":de,"../assets/main.css":ge,"../assets/portfolio23 page.jpg":be,"../assets/todolist.jpg":_e})[`../assets/${l.image}`],self.location)}return(c,d)=>(_(),v("section",ue,[t("img",{src:i(),id:"image"},null,8,fe)]))}},r=b(he,[["__scopeId","data-v-0dfddf8c"]]),me=n=>(C("data-v-066b0239"),n=n(),I(),n),Te={class:"subnav"},we={class:"btns-instructions"},ve=me(()=>t("p",null,"You can try the actual website live on you device using the button DEMO or see the the underlying code on GitHub by pressing CODE.",-1)),Ce={__name:"Subnav",props:{panelTitle:String,panelText:String,panelText2:String},emits:["openWebsite","openGit"],setup(n,{emit:l}){const i=n,c=()=>{l("openWebsite")},d=()=>{l("openGit")};return(u,f)=>(_(),v("div",Te,[t("h2",{ref:"websiteTitle"},g(i.panelTitle),513),t("button",{onClick:c},"Demo"),t("button",{onClick:d},"Code"),t("div",we,[t("p",null,g(i.panelText),1),t("p",null,g(i.panelText2),1),ve])]))}},p=b(Ce,[["__scopeId","data-v-066b0239"]]),Ie="Small Taxi Business",xe="This is the first website I have made and it promotes my own enterprising. Probably the most important aspect is that it serves its purpose. I am not able to say how many phone calls are made directly from the website, but for sure I  get every month several email requests for taxi without spending any money for advertising.",ye="TECHNICAL: The website is just HTML and CSS. Its buttons make phone calls, send text messages and emails. The contact page sends emails too. There is also a short book available for download as a gift for customers.",Ae="Local Club of Flower Arrangers",je="I have made this website free of charge for Lingfield Flower Club, which is a bunch of very skilled flower arrangers. The club managers were happy that the website worked out more elegant and attractive than websites of clubs in neighbouring areas.",We="TECHNICAL: The website has animations that were first done in vanilla Javascript. Later I have rebuilt the website in Vue JS3, with composition API, Pinia and Firestore database, which added administrative back door to be able to edit and create adverts.",ke="Planner for Forgetful Managers",Ge="This web app is seemingly simple to-do list, but it gives prompts to help user remember to note down tasks that might otherwise be forgotten. It is meant for everybody and it really works.",Ze="TECHNICAL: This was my exercise of basic Javascript and I used a local storage to save users data.",Le="Another Taxi Company",Se="My colleague liked my first website so much that he wanted a copy of it for himself. Eventually I did it only partially, using the color and style of his business card as a basis. Later I made for this website a backdoor administrative entrance to enable the owner to modify his price list. That is quite practical in time of inflation and ever-changing fuel prices.",Ve="TECHNICAL:The first version was just HTML, CSS and some JavaScript. The second version I built using Vue JS3 and Firebase Firestore database to have a backend for editing the price list. There is also an authentication for the database entry.",Fe="Advert Maker",Je="This is actually a simple Content Management System tailor made for the flower club website. It allows club managers to make new adverts, delete the outdated ones and edit as needed. Because the managers of the club are mostly retired ladies in their 70s, I have included also an interactive instruction manual to make it easier for them to work with it.",Be="TECHNICAL: This is made in Vue JS3, Composition API with the use of Vue Router, Pinia, Vite and Firebase Firestore database and its authentication facility.",Ne="This Portfolio Website",Pe="The portfolio website is there to introduce myself and I made it relatively simple and clean. It showed me that apart from coding I also need to study more of new web designing trends and I plan to work on this aspect of it in near future.",He="TECHNICAL: This website is made in Vue JS3, Composition API with the use of Vue Router and Vite.",$e=n=>(C("data-v-f59a1f5f"),n=n(),I(),n),Oe={class:"container"},Xe=$e(()=>t("h1",null,"Portfolio of Products",-1)),Ye={ref:"images",class:"images"},De={class:"web"},Ee={class:"web"},Me={class:"web"},Ke={class:"web"},ze={class:"web"},Re={class:"web"},Ue={__name:"PortfolioView",setup(n){const l=Ie,i=xe,c=ye,d=Ae,u=je,f=We,x=ke,y=Ge,A=Ze,j=Le,W=Se,k=Ve,G=Fe,Z=Je,L=Be,S=Ne,V=Pe,F=He;function h(){window.open("https://g-universal.com/Alpha18/")}function J(){window.open("https://github.com/DanielStangar/Website-Alpha18cars")}function m(){window.open("https://g-universal.com/Flowers%20Club/")}function B(){window.open("https://github.com/DanielStangar/Lingfield-Flowers-Club")}function T(){window.open("https://g-universal.com/ToDo%201/")}function N(){window.open("https://github.com/DanielStangar/Todo-Prototype-1")}function P(){window.open("https://ccars-v.netlify.app/")}function H(){window.open("https://github.com/DanielStangar/ccars-2.0")}return(w,e)=>(_(),$(X,{name:"page",appear:""},{default:O(()=>[t("div",Oe,[o(Y),t("header",null,[Xe,o(D)]),t("main",null,[t("div",Ye,[t("section",De,[o(r,{image:"A18photo.jpg",onClick:e[0]||(e[0]=a=>h())}),o(p,{panelTitle:s(l),panelText:s(i),panelText2:s(c),onOpenWebsite:e[1]||(e[1]=a=>h()),onOpenGit:e[2]||(e[2]=a=>J())},null,8,["panelTitle","panelText","panelText2"])]),t("section",Ee,[o(r,{image:"flowerclub.jpg",onClick:e[3]||(e[3]=a=>m())}),o(p,{panelTitle:s(d),panelText:s(u),panelText2:s(f),onOpenWebsite:e[4]||(e[4]=a=>m()),onOpenGit:e[5]||(e[5]=a=>B())},null,8,["panelTitle","panelText","panelText2"])]),t("section",Me,[o(r,{panelTitle:w.planner,image:"Planner-wide2.jpg",onClick:e[6]||(e[6]=a=>T())},null,8,["panelTitle"]),o(p,{panelTitle:s(x),panelText:s(y),panelText2:s(A),onOpenWebsite:e[7]||(e[7]=a=>T()),onOpenGit:e[8]||(e[8]=a=>N())},null,8,["panelTitle","panelText","panelText2"])]),t("section",Ke,[o(r,{image:"Cavendish Cars.jpg",onClick:e[9]||(e[9]=a=>w.ccarsWebsite())}),o(p,{panelTitle:s(j),panelText:s(W),panelText2:s(k),onOpenWebsite:e[10]||(e[10]=a=>P()),onOpenGit:e[11]||(e[11]=a=>H())},null,8,["panelTitle","panelText","panelText2"])]),t("section",ze,[o(r,{image:"Admaker2.jpg"}),o(p,{panelTitle:s(G),panelText:s(Z),panelText2:s(L)},null,8,["panelTitle","panelText","panelText2"])]),t("section",Re,[o(r,{image:"portfolio23 page.jpg"}),o(p,{panelTitle:s(S),panelText:s(V),panelText2:s(F)},null,8,["panelTitle","panelText","panelText2"])])],512)])])]),_:1}))}},qe=b(Ue,[["__scopeId","data-v-f59a1f5f"]]);export{qe as default};
