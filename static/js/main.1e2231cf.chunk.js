(this["webpackJsonphomomorphic-project"]=this["webpackJsonphomomorphic-project"]||[]).push([[0],{21:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(18),s=n.n(o),i=(n(30),n(31),n(32),n(3)),l=n.n(i),u=n(6),j=n(2),d=(n(21),n(12)),b=function(e){var t=e.name,n=(e.email,e.id),a="".concat(window.location.origin,"/file/").concat(n);return Object(c.jsx)("a",{href:a,children:Object(c.jsxs)("div",{className:"myCard dib br2  ma2 grow  shadow-5 tc",children:[Object(c.jsx)("img",{src:"/contract2.png",alt:"profile",className:"icons"}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"cardTitle ",children:[Object(c.jsx)("h2",{className:"title",children:t}),Object(c.jsxs)("span",{style:{color:"white"},children:[" ID : ",n," "]})]})]})})},h=(n(34),n(23)),p=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(!1),i=Object(j.a)(s,2),d=i[0],b=i[1],p=Object(a.useState)(""),O=Object(j.a)(p,2),f=O[0],m=O[1],v=Object(a.useState)(""),x=Object(j.a)(v,2),y=x[0],g=x[1],S=Object(a.useState)("in"),w=Object(j.a)(S,2),N=w[0],k=w[1],C=Object(a.useState)(!1),K=Object(j.a)(C,2),T=K[0],A=K[1],E=e.server;function _(e){if(void 0!==e)return JSON.stringify(e,(function(e,t){return"bigint"===typeof t?"".concat(t,"n"):t}))}var P=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(!0),t.preventDefault(),""!=f.trim()){e.next=4;break}return e.abrupt("return");case 4:return g("Generating the keys & the file..."),e.next=7,h.generateRandomKeys(3072);case 7:for(r in n=e.sent,c=n.publicKey,a=n.privateKey)a["".concat(r)]=_(a["".concat(r)]);o(JSON.stringify(a)),b(!0),s=_(c),fetch("".concat(E,"/id"),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({content:[],publicKey:s,title:f})}).then((function(e){return e.json()})).then((function(e){g(e.message),A(!1)})).catch((function(e){g("Failed to generate the file"),A(!1)}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F="modal ld ld-slide-ltr-".concat(N);return Object(c.jsxs)("div",{className:F,children:[Object(c.jsx)("h2",{children:"Create new File "}),Object(c.jsxs)("form",{onSubmit:P,children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"db center",children:[Object(c.jsx)("label",{children:"File Name"}),Object(c.jsx)("input",{className:"ma2 ",type:"text",onChange:function(e){return m(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"db ",children:[Object(c.jsx)("label",{className:"dib ma2",children:"Your Private Key:"}),Object(c.jsx)("textarea",{id:"privatekey",className:"privateField center fieldcontainer",disabled:!0,value:r})]}),d?Object(c.jsxs)("p",{style:{color:"red"},children:[" Make sure to save your private key,",Object(c.jsx)("br",{}),"you will use it to decrypt your file."]}):"",Object(c.jsx)("p",{style:{color:"red"},children:y})]}),Object(c.jsxs)("div",{className:"actions",children:[Object(c.jsx)("button",{className:"ma2 ",disabled:!!T,children:"Create File"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),k("out"),setTimeout((function(){e.setshowModal(!1),window.location.reload(!1)}),2e3)},children:"close"})]})]})]})};var O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(-1),s=Object(j.a)(o,2),i=(s[0],s[1],Object(a.useState)("https://homomorphic-server.herokuapp.com")),h=Object(j.a)(i,2),O=h[0],f=(h[1],Object(a.useState)(!1)),m=Object(j.a)(f,2),v=m[0],x=m[1];return console.log(" keyyyyy \n",'\n  {"lambda":""2385128274998604186348365713560752968760405693505101775118516919851343466617545084168730919590431984722960235639807801309473610654474668626657999131708989625473845831016134764748121799156852049443164020599869321359217130616448044729179882742660109412744034702572502677041213980341841433873892716315804279162033263694832843262854216862179439882226029587827502632430499229885692432298117362891266842261359722415154205549214063784336006501313745233511330109769127714724620623943199526303448837404177743121009092100254844757824123591774224888704420211127233018588942124443461742603800425960621498594936120724362659233509526755357103794867118599779567940538716769473094947135635267931896658069685140762895817920906045573541584345349135593275508554900986767271590614299893155934201850521402669871837424141242526615236905746970866085469609917249101274762120229917245620965325837991934692544176487045181318972862545942747693709832324n"","mu":""4568304398421090445630397328660877292304485369792641475046671773738216190320458962212349119327235994374298504022894372560528915554539097636424104261566556612519754378003491092703166489575303510268015358716431088917065491852901296210847330434172474198852403121069463502382505311934404349826511995099926699473995782468832020845076671070374906795947229381231291957170182369382581223137833897760030983620328213060866690355341775318769293494905852494012637165622299095770806444425186677632373922238172686015447071980759848553602348086690343280154269056309738362667881063147599715823808051478553471317411023525712339397006371848080319873597711167289984567255952373924998510034994291794367634144783572794762347678039420268406776521647668996231971334518831937104606968815498462909114281446705895502431776757357308623552695815013156773355343276103014380686549539112295547015984136057785817683176136672857058836433997863448608590310967n"","_p":""3571018152498762822201638720943960867597758523598992333150088336483347773956242222803065448213364822079795941987284598320387412113923424154497407726624666327835817416920056810973935679084046545592258347113232981850935984710161168773450320713975118639905553097371115690332878196142872363906864252453999198040101077198042912729635165524596579535691644604641544953609096446146746084836893723535956803565063381466721875510983986307483560346289083703974648131439537949n"","_q":""1335825343441420948126677293262852446047779831894829012332745894816549727649930579951020381921521603081172523534784759453778782849435179106751228428304741951179058291419357176329623116924977223835617550676814599525796621425433252230184866610250689981082402354549991151666439348561120985485323285378424000818875811447696587585306952201982016889410151146295447221370169603675491057767959940105718423869280264294753038134946102761315359908779147448077715654226948527n"","publicKey":"{"n":"4770256549997208372696731427121505937520811387010203550237033839702686933235090168337461839180863969445920471279615602618947221308949337253315998263417979250947691662032269529496243598313704098886328041199738642718434261232896089458359765485320218825488069405145005354082427960683682867747785432631608558324066527389665686525708433724358879764452059175655005264860998459771384864596234725782533684522719444830308411098428127568672013002627490467022660219538255434356084743826582822935213689015168799887556539694331034998482478483445951383581643176340296172064309409855389007276958626087437960548475502697361473396427332525589915929148224503117931890101202966822087684318851912596399451733791285160978960067620712135038620611805113185868561813795322926730719061022985170845292346782305654685792574861081478332269562430933907150205269656735345154377904101509718676274297437458783031018442042889282893013956243937859173086151123n","_n2":"22755347552791268943142856300817423043209652531184088448891995624385450657783842939139384883206708237458482329842740621559589910250526494976437871396307619277976557607460809957696561031950392726062235330271486320884732329110608447981543446365584710312143967618500996620829232395827995117702794018543570337651741620645464073481775671065481348423889826017277924067773199763042523689055125960473792225026980173926027790015166213071865935600608762212868086173875522837821599532925781858331646607871631276856511793840267528725777718957139145249031399646841131350429222196010294566009179616897984050023623426862999714225833173981377217810979769064789334273222292122133222548255938052984876590633829452914061130624181651784874801157431468661844609941260871822970219494455149147345323647835239454322496448921370136392920774710788324131202502892798999274251752178542760012626011223826829665277736475103570265488383073494320045186738223018768896513267207123404154790622791337794867075309352755315588242883698575800894382768100162544959024974023207572127574787239614719717794028099588478423409419916380869100610949835569635374953234158739438941074030112263668579464975741669027769433079101022927065253486226796367290230998666521088808450422802642776882025380410324998192186037480187047635710262539177025949604491898722569811111714553698585652428995460036495776273031050426715153635919392965697438801361905635300862027858224198660292144849414889924749219539671252029533906148473615024500296685428774482812509988183176811102920040803477409978893938455414929844612956477925703246586321430272030175029793153104233849685588778689314881863914552312297761831392264858882407861704829461421407609797657447206610149961116719847990992783952396378964215585370670407979769323907155373635585084312082823098774215707379610157408775339559780711596276556460948947024573994161129n","g":"4062950315983168936454403165614297525960939089882735657828954252076233454848447827390504873935225605792302460951929610094208246114982543091256101735010858760072652232060444435336539678631908063682364560913080416497300678136336943525489094143991519468440857547445770757744680002594235279352050713754123599563963401034398086399926376762586569205057068619240607903273822525636205562712256359993551741399066048697587804161481057242330844850411479911940442237630170934871233879186995095535661596341426973914148249029784057720417490513327924299789763837419521774461520817531938656936859443528495429961639587913807091190498153638517388807622102350485898655571947698392607603873776444265756038045205219083847870045485587349270674179054452633570869165196525405909884434519546022065360823333721467985407680375677544509712204301236292252664445696848382215361877711166069769328308388044712436743047780896334406028208965115782529018520841782053301770886700176105556695222581796285646025799309529326586632262432718530515748582971620668139497085633230901012686712766225419789223436470684736001264568503297813566514166827077409425370578477949535814475906402019950790194501411275154933353906035229590457198579996930092586444012639276826584436244544792786698252144725030035876960482858351589673335864236725101853455128982873128076870676791869362906057311658216198470385022788761206095808184396228564232990929654700754309187170037006900008587409344866188231391804599163365050370996844934696953094995847827462969865669270727180261947134879307381904795395379268644252002421036953758656529343861482105205473391114664823739684605472839117167275875369728944934031998460135712816552198935813525858627915081494937975006748817636067174020420361446096175374571310704346698933102009703323765203629469586768080415992135337216876315372756798035934082120253850411135556651331732461n"}"}\n\n  '),Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(O,"/viewDB")).then((function(e){return e.json()})).then((function(e){console.log(e);for(var t=[],n=0;n<e.length;n++){var a=e[n];t.push(Object(c.jsx)(b,{name:a.title,id:a.id}))}r(t)}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"mybutton-1 mt4",onClick:function(){x(!0)},children:Object(c.jsx)("span",{children:"Create New file"})}),v?Object(c.jsx)(p,{showModal:v,setshowModal:x,server:O}):"",Object(c.jsx)("div",{children:n})]})})},f=n(11),m=n(15),v=n.n(m),x=n(23);var y=function(e){var t=Object(a.useState)("https://homomorphic-server.herokuapp.com"),n=Object(j.a)(t,2),r=n[0],o=(n[1],Object(a.useState)()),s=Object(j.a)(o,2),i=(s[0],s[1],Object(a.useState)("This is a demonstration.")),d=Object(j.a)(i,2),b=d[0],h=d[1],p=Object(a.useState)("This is a demonstration."),O=Object(j.a)(p,2),m=O[0],y=O[1],g=Object(a.useState)({__html:'This <span class="aka">is a</span> demonstration.'}),S=Object(j.a)(g,2),w=S[0],N=S[1],k=Object(a.useState)('This <span class="aka">is a</span> demonstration.'),C=Object(j.a)(k,2),K=(C[0],C[1]),T=Object(a.useState)("This is a demonstration."),A=Object(j.a)(T,2),E=A[0],_=A[1],P=Object(a.useState)([]),F=Object(j.a)(P,2),L=(F[0],F[1]),D=Object(a.useState)([0,0]),J=Object(j.a)(D,2),I=J[0],M=J[1],B=Object(a.useState)(!1),H=Object(j.a)(B,2),z=H[0],R=H[1],W=Object(a.useState)([]),q=Object(j.a)(W,2),G=q[0],U=q[1],Y=Object(a.useState)(!1),Q=Object(j.a)(Y,2),V=(Q[0],Q[1],e.location.pathname.replace("/file/","")),X=Object(a.useState)(),Z=Object(j.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(),ne=Object(j.a)(te,2),ce=ne[0],ae=ne[1],re=Object(a.useRef)(null),oe=function(e){h(e),y(e)},se=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(!0),setTimeout((function(){var e=E;console.log("-----------"),console.log(e);var t=e.split("");console.log(t),console.log($);for(var n=$.encrypt(0),c=(console.time("encryption"),0);c<t.length;c++){var a=Number(t[c].charCodeAt(0));if(9668===a?(console.log("yes"),a=16):9658===a&&(a=6),c<G.length)if(G[c]<a)a-=G[c];else{if(!(G[c]>a)){a=0,t[c]=ie(n);continue}a+=127-G[c]}t[c]=ie($.encrypt(a))}var o=console.timeEnd("encryption");console.log("the text array",t),console.log("Time to encrypt: ",o),fetch("".concat(r,"/update/").concat(V),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({content:t})}).then((function(e){console.log(e),R(!1)})),console.log(4)}),3e3);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ie(e){if(void 0!==e)return JSON.stringify(e,(function(e,t){return"bigint"===typeof t?"".concat(t,"n"):t}))}function le(e){return JSON.parse(e,(function(e,t){if("string"===typeof t){var n=t.match(/(-?\d+)n/);n&&n[0]===t&&(t=BigInt(n[1]))}return t}))}return Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(r,"/").concat(V)).then((function(e){return e.json()})).then((function(e){console.log(e),e.publicKey=le(e.publicKey),ee(new x.PublicKey(e.publicKey.n,e.publicKey.g));var t=new x.PublicKey(e.publicKey.n,e.publicKey.g),n=prompt("Enter the given private key for file ID: ".concat(V));try{var c=JSON.parse(n);for(var a in c)c["".concat(a)]=le(c["".concat(a)]);c=new x.PrivateKey(c.lambda,c.mu,c.publicKey,c._p,c._q),ae(c);var r="a".charCodeAt(0),o=t.encrypt(r);if(Number(c.decrypt(o))!==r)throw"wrong private public pairs";if(console.log(c),void 0===c.lambda)throw"bad Key"}catch(b){alert("Bad Key")(window.location.href=window.location.origin)}var s=le(e.content);console.log(s);for(var i,l="",u=[],j=0;j<s.length;j++){var d=Number(c.decrypt(s[j]));d%=127,u.push(d),16===d?d=9668:6===d&&(d=9658),l+=String.fromCharCode(d)}U(u),L(l),oe(l),K(i=l),N({__html:i}),_(i)})).catch((function(e){window.location.href=window.location.origin,console.error("Error:",e)}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("keep alive");case 1:case"end":return e.stop()}}),e)}))),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{}),Object(c.jsx)(f.ScrollSync,{children:Object(c.jsxs)("div",{className:"textAreas",children:[Object(c.jsx)("h2",{children:" Server-side text : "}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(f.ScrollSyncPane,{children:Object(c.jsx)("div",{className:"textHigh",children:b})}),Object(c.jsx)(f.ScrollSyncPane,{children:Object(c.jsx)("textarea",{className:"textArea shadow-2",value:m,onChange:function(e){console.log(re),console.log(e.target.value);var t=e.target.value;t=(t=t.replace("<","\u25c4")).replace(">","\u25ba"),console.log(t);var n=v.a.sanitize(t,{ALLOWED_TAGS:["span"],ALLOWED_ATTR:["class","className"]});h(n),y(n)},disabled:!0})})]}),Object(c.jsx)("h2",{className:"H2sizeFixing",children:" Editable text : "}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(f.ScrollSyncPane,{children:Object(c.jsx)("div",{className:"textHigh",dangerouslySetInnerHTML:w})}),Object(c.jsx)(f.ScrollSyncPane,{children:Object(c.jsx)("textarea",{className:"textArea shadow-2",value:E,onChange:function(e){console.log("area change",I),console.log(e),console.log(re);var t=e.target.value;t=(t=t.replace("<","\u25c4")).replace(">","\u25ba"),e.target.value=e.target.value.replace("<","\u25c4"),e.target.value=e.target.value.replace(">","\u25ba"),console.log(t);var n=v.a.sanitize(t,{ALLOWED_TAGS:["span"],ALLOWED_ATTR:["class","className"]});console.log(n,"temp222");v.a.sanitize(t);N({__html:t}),_(e.target.value)},ref:re,onKeyPress:function(e){console.log(e);e.keyCode>=48&&e.keyCode<=57||e.keyCode>=65&&e.keyCode<=90||e.keyCode>=97&&e.keyCode<=122||e.keyCode>=186&&e.keyCode<=192||e.keyCode>=219&&e.keyCode,console.log(e.keyCode,e.key),e=e.target,console.log("keypress ",re.current.value),console.log(e.selectionStart," ",e.selectionEnd),M([e.selectionStart,e.selectionEnd])}})})]})]})}),z?Object(c.jsx)("div",{className:"dib button center shadow-5   mybutton",children:Object(c.jsxs)("span",{children:["Updating... ",Object(c.jsx)("span",{className:"ld ld-spinner ld-clock"})]})}):Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("div",{className:"dib button center shadow-5   mybutton",onClick:Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:Object(c.jsx)("span",{children:"Update and send to server"})}),Object(c.jsx)("div",{className:"dib button shadow-5     mybutton",onClick:Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(!0),void setTimeout((function(){fetch("".concat(r,"/").concat(V)).then((function(e){return e.json()})).then((function(e){var t=le(e.content);console.log(t);for(var n="",c=[],a=0;a<t.length;a++){var r=Number(ce.decrypt(t[a]));r%=127,c.push(r),16===r?r=9668:6===r&&(r=9658),n+=String.fromCharCode(r)}U(c),oe(n),R(!1)})).catch((function(e){console.error("Error:",e),R(!1)}))}),3e3);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),children:Object(c.jsx)("span",{children:"Update current content"})})]})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},S=n(4);n(40);s.a.render(Object(c.jsxs)(r.a.StrictMode,{children:[Object(c.jsx)("div",{className:"header  ",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("h1",{className:"tl   ",children:"Public Homomorphic service"})})}),Object(c.jsx)(d.a,{children:Object(c.jsxs)(S.c,{children:[Object(c.jsx)(S.a,{path:"/file/:id",exact:!0,component:y}),Object(c.jsx)(S.a,{path:"/",component:O})]})})]}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.1e2231cf.chunk.js.map