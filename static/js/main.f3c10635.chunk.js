(this.webpackJsonpelevator=this.webpackJsonpelevator||[]).push([[0],{20:function(e,t,r){"use strict";r.r(t);var s=r(0),o=r.n(s),i=r(7),n=r.n(i),a=r(2),c=r(1);const l=a.a.button`
  &[aria-pressed="true"] {
    background: yellow;
  }
  border-radius: 50%;
  border: 5px solid black;
  height: 100px;
  width: 100px;
  font-weight: bold;
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,d=e=>{let{pressed:t,...r}=e;return Object(c.jsx)(l,{"aria-pressed":!!t,...r})},u=a.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`,p=e=>{let{floors:t,pressed:r,onFloorRequest:s,...i}=e;const n=o.a.useCallback((e=>t=>{"function"===typeof s&&s(e)}),[s]),a=[];for(let o=0;o<t;o+=1)a.push(Object(c.jsx)(d,{pressed:r[o],onClick:n(o),children:o+1},o));return Object(c.jsx)(u,{...i,children:a})};p.defaultProps={floors:12,pressed:[],onFloorRequest:()=>{}};const x=a.a.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`,b=a.a.div`
  height: 100%;
  width: 30px;
  background: black;
  border-radius: 3px;
`,j=e=>Object(c.jsx)(x,{children:Object(c.jsx)(b,{})}),f=a.a.div`
  background: #fff;
  height: 100%;
`,h=a.a.div``,g=a.a.div`
  height: ${e=>e.height}px;
  padding: 10px;
  display: flex;
  gap: 10px;
  box-sizing: border-box;

  ${f} {
    flex: 1 1 auto;
  }

  ${h} {
    flex: 1 1 auto;
  }
`,O=e=>{let{height:t,...r}=e;return Object(c.jsxs)(g,{height:t,...r,children:[Object(c.jsx)(f,{}),Object(c.jsx)(f,{}),Object(c.jsx)(f,{}),Object(c.jsx)(h,{}),Object(c.jsx)(f,{}),Object(c.jsx)(f,{}),Object(c.jsx)(f,{})]})},v=100,k=a.a.div`
  height: ${e=>e.floors*v}px;
  width: 200px;
  background: gray;

  position: relative;
  ${x} {
    height: ${v}px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-${e=>e.currentFloor*v}px);
    transition: 1s ease-in-out transform;
  }
`,y=e=>{const t=[];for(let r=0;r<e.floors;r+=1)t.push(Object(c.jsx)(O,{height:v}));return Object(c.jsxs)(k,{...e,children:[t,Object(c.jsx)(j,{})]})};y.defaultProps={currentFloor:6};const w=a.a.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;function m(){const[e,t]=o.a.useState(0),[r,s]=o.a.useState([]),[i,n]=o.a.useState(!0),a=o.a.useRef(),l=o.a.useCallback((t=>{if(!r[t]&&t!==e){const e=[...r];e[t]=!0,s(e)}}),[r,e]),d=o.a.useCallback((e=>{t(e);const o=[...r];o[e]=!1,s(o)}),[r]);return o.a.useEffect((()=>{clearTimeout(a.current),a.current=setInterval((()=>{if(i){for(let t=e+1;t<8;t++)if(r[t])return void d(t);n(!1)}else{for(let t=e-1;t>=0;t--)if(r[t])return void d(t);n(!0)}}),2e3)}),[e,r,d,i]),Object(c.jsxs)(w,{className:"App",children:[Object(c.jsx)(y,{floors:8,currentFloor:e}),Object(c.jsx)(p,{floors:8,onFloorRequest:l,pressed:r})]})}const $=document.getElementById("root");n.a.render(Object(c.jsx)(s.StrictMode,{children:Object(c.jsx)(m,{})}),$)}},[[20,1,2]]]);
//# sourceMappingURL=main.f3c10635.chunk.js.map