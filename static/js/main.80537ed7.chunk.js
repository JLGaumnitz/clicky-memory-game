(this["webpackJsonpclicky-memory-game"]=this["webpackJsonpclicky-memory-game"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Adventures_of_Pippi_Longstocking.9f2f0df5.jpg"},function(e,t,a){e.exports=a.p+"static/media/Black_Beauty.f9e42b00.jpg"},function(e,t,a){e.exports=a.p+"static/media/Boxcar_Children.507d8fc4.jpg"},function(e,t,a){e.exports=a.p+"static/media/Charlie_and_the_Chocolate_Factory.b344fe59.jpg"},function(e,t,a){e.exports=a.p+"static/media/Charlottes_Web.6c977301.jpg"},function(e,t,a){e.exports=a.p+"static/media/Heidi.cb8e66bf.jpg"},function(e,t,a){e.exports=a.p+"static/media/Little_Women.d952d1af.jpg"},function(e,t,a){e.exports=a.p+"static/media/The_Hobbit.db8ced05.jpg"},function(e,t,a){e.exports=a.p+"static/media/The_Lion_the_Witch_and_the_Wardrobe.83b80cba.jpg"},function(e,t,a){e.exports=a.p+"static/media/The_Wizard_of_Oz.db24fdf3.jpg"},function(e,t,a){e.exports=a.p+"static/media/Wind_in_the_Willows.0266ad47.jpg"},function(e,t,a){e.exports=a.p+"static/media/Winnie_the_Pooh.ef33f47c.jpg"},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),s=a(4),o=a(5),l=a(19),h=a(6),u=a(1),f=a(20),d=(a(26),function(e){return c.a.createElement("div",{className:"navbar "},c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score: ",e.highScore))}),p=(a(27),a(28),function(e){return c.a.createElement("div",{className:"card",onClick:function(t){return e.clickEvent(t.target.src)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),m=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.covers.map((function(t,a){return c.a.createElement(p,{name:t,key:a,clickEvent:e.clickEvent})})))},g=(a(29),function(){return c.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"m-0"},"Click on each beloved Children's Classic to earn up to 12 points.",c.a.createElement("br",null),"Click on the same cover twice and the count starts over."))}),v=a(7),k=a.n(v),C=a(8),b=a.n(C),_=a(9),E=a.n(_),j=a(10),x=a.n(j),y=a(11),M=a.n(y),w=a(12),S=a.n(w),N=a(13),W=a.n(N),O=a(14),A=a.n(O),B=a(15),T=a.n(B),H=a(16),L=a.n(H),z=a(17),I=a.n(z),J=a(18),P=a.n(J),F=[k.a,b.a,E.a,x.a,M.a,S.a,W.a,A.a,T.a,L.a,I.a,P.a],q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,navMsgColor:"",navMessage:"Click any book to begin.",allCovers:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(u.a)(a)),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"shuffleArray",value:function(){for(var e=F.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),n=this.shuffleArray(),c=this.state.score,i=this.state.highScore;if(this.state.wasClicked.includes(e)||(c===i?(c++,i++):c++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:i,navMsgColor:"incorrect",navMessage:"Incorrect! Begin again ...",allCovers:n,wasClicked:[],shake:!0})}return this.setState({score:c,highScore:i,navMsgColor:"correct",navMessage:"Correct!",allCovers:n,wasClicked:a,shake:!1}),setTimeout((function(){return t.setState({navMsgColor:""})}),500)}},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(d,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor}),c.a.createElement(g,null),c.a.createElement(m,{shake:e.shake,covers:e.allCovers,clickEvent:this.clickEvent}))}}]),t}(n.Component);a(30);r.a.render(c.a.createElement(q,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.80537ed7.chunk.js.map