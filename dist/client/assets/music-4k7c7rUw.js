import{r as e,t}from"./jsx-runtime-DGeXAQPT.js";import{r as n}from"./index-CbGv-AtY.js";import{t as r}from"./Panel-Cx86f0nZ.js";import{o as i,s as a}from"./content-BYhcoS0p.js";import{t as o}from"./LikeButton-wrHPKGcA.js";var s=e(n()),c=t();function l(e){let t=e*37%360,n=(e*47+120)%360,r=(e*53+240)%360;switch(e%10){case 0:return`
        repeating-linear-gradient(
          45deg,
          hsl(${t}, 80%, 60%) 0px,
          hsl(${t}, 80%, 60%) 4px,
          hsl(${n}, 70%, 50%) 4px,
          hsl(${n}, 70%, 50%) 8px
        )
      `;case 1:return`
        radial-gradient(circle at 30% 30%, hsl(${t}, 80%, 60%) 2px, transparent 3px),
        radial-gradient(circle at 70% 70%, hsl(${n}, 70%, 50%) 2px, transparent 3px),
        radial-gradient(circle at 50% 50%, hsl(${r}, 80%, 60%) 3px, transparent 4px),
        hsl(${t}, 60%, 40%)
      `;case 2:return`
        repeating-linear-gradient(
          0deg,
          hsl(${t}, 70%, 50%) 0px,
          hsl(${t}, 70%, 50%) 2px,
          hsl(${n}, 60%, 40%) 2px,
          hsl(${n}, 60%, 40%) 10px
        ),
        repeating-linear-gradient(
          90deg,
          hsl(${n}, 70%, 50%) 0px,
          hsl(${n}, 70%, 50%) 2px,
          hsl(${t}, 60%, 40%) 2px,
          hsl(${t}, 60%, 40%) 10px
        )
      `;case 3:return`
        linear-gradient(
          135deg,
          hsl(${t}, 80%, 60%),
          hsl(${n}, 70%, 50%),
          hsl(${r}, 80%, 60%)
        )
      `;case 4:return`
        repeating-conic-gradient(
          hsl(${t}, 80%, 60%) 0% 25%,
          hsl(${n}, 70%, 50%) 0% 50%
        )
      `;case 5:return`
        repeating-linear-gradient(
          45deg,
          hsl(${t}, 80%, 60%) 0px,
          hsl(${t}, 80%, 60%) 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          -45deg,
          hsl(${n}, 70%, 50%) 0px,
          hsl(${n}, 70%, 50%) 3px,
          transparent 3px,
          transparent 8px
        ),
        hsl(${r}, 60%, 40%)
      `;case 6:return`
        repeating-linear-gradient(
          -45deg,
          hsl(${t}, 80%, 60%) 0px,
          hsl(${t}, 80%, 60%) 4px,
          hsl(${n}, 70%, 50%) 4px,
          hsl(${n}, 70%, 50%) 8px,
          hsl(${r}, 80%, 60%) 8px,
          hsl(${r}, 80%, 60%) 12px
        )
      `;case 7:return`
        repeating-linear-gradient(
          60deg,
          hsl(${t}, 80%, 60%) 0px,
          hsl(${t}, 80%, 60%) 5px,
          hsl(${n}, 70%, 50%) 5px,
          hsl(${n}, 70%, 50%) 10px
        )
      `;case 8:return`
        repeating-radial-gradient(
          circle at 20% 30%,
          hsl(${t}, 80%, 60%) 0px,
          hsl(${n}, 70%, 50%) 8px,
          hsl(${r}, 80%, 60%) 16px
        )
      `;case 9:return`
        radial-gradient(circle at 20% 20%, hsl(${t}, 80%, 60%) 4px, transparent 5px),
        radial-gradient(circle at 80% 80%, hsl(${n}, 70%, 50%) 6px, transparent 7px),
        radial-gradient(circle at 50% 30%, hsl(${r}, 80%, 60%) 3px, transparent 4px),
        radial-gradient(circle at 70% 20%, hsl(${t}, 70%, 50%) 5px, transparent 6px),
        radial-gradient(circle at 30% 70%, hsl(${n}, 80%, 60%) 4px, transparent 5px),
        hsl(${r}, 60%, 40%)
      `;default:return`
        linear-gradient(
          135deg,
          hsl(${t}, 80%, 60%),
          hsl(${n}, 70%, 50%),
          hsl(${r}, 80%, 60%)
        )
      `}}function u(){let[e,t]=(0,s.useState)([]),[n,u]=(0,s.useState)([]),[d,f]=(0,s.useState)(!0),[p,m]=(0,s.useState)(0),[h,g]=(0,s.useState)(!1),[_,v]=(0,s.useState)(0),[y,b]=(0,s.useState)(.8),[x,S]=(0,s.useState)(new Set),C=(0,s.useRef)(null),w=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=localStorage.getItem(`music-volume`);e!==null&&b(parseFloat(e))},[]),(0,s.useEffect)(()=>{Promise.all([a(),i()]).then(([e,n])=>{t(e),u(n),f(!1)})},[]),(0,s.useEffect)(()=>{e.length>0&&p>=e.length&&m(0)},[e,p]);let T=e[p]||null,E=e=>{let t=w.current?.getBoundingClientRect();if(!t)return;let n=(e.clientX-t.left)/t.width;n=Math.min(1,Math.max(0,n)),v(n*100);let r=C.current;r&&T?.src&&r.duration&&(r.currentTime=n*r.duration)};(0,s.useEffect)(()=>{v(0),g(!1)},[p]),(0,s.useEffect)(()=>{C.current&&(C.current.volume=y),localStorage.setItem(`music-volume`,String(y))},[y]),(0,s.useEffect)(()=>{if(!T?.src){if(!h)return;let e=window.setInterval(()=>{v(e=>e>=100?0:e+.6)},120);return()=>window.clearInterval(e)}let e=C.current;e&&(h?e.play():e.pause())},[h,T?.src]);let D=(e,n)=>{t(t=>t.map(t=>t.id===e?{...t,likes:n}:t))},O=e=>{S(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};if(d)return(0,c.jsx)(`div`,{className:`p-10 text-center`,children:`Loading music...`});if(!T)return(0,c.jsx)(`div`,{className:`p-10 text-center`,children:`No tracks found.`});let k={};e.forEach(e=>{let t=e.playlist||`General`;k[t]||(k[t]=[]),k[t].push(e)});let A=[...new Set([...n,...Object.keys(k).filter(e=>!n.includes(e))])];return(0,c.jsxs)(`div`,{className:`mx-auto max-w-6xl px-4 py-10`,children:[(0,c.jsxs)(`header`,{className:`mb-8`,children:[(0,c.jsx)(`div`,{className:`crt text-xl text-gold`,children:`> load ./music.wav`}),(0,c.jsx)(`h1`,{className:`mt-2 font-pixel text-2xl glow-gold md:text-3xl`,children:`MUSIC.WAV`}),(0,c.jsx)(`p`,{className:`mt-3 max-w-2xl text-muted-foreground`,children:`A rotating selection of my work.`}),(0,c.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,c.jsx)(`a`,{href:`https://open.spotify.com/artist/7LO0UMyp39smYDxo7drq60`,target:`_blank`,rel:`noreferrer`,className:`button-option bg-gold px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-magenta)] transition-transform hover:-translate-y-0.5`,children:`▸ Spotify`}),(0,c.jsx)(`a`,{href:`https://www.youtube.com/@pxldev`,target:`_blank`,rel:`noreferrer`,className:`button-option bg-magenta px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-gold)] transition-transform hover:-translate-y-0.5`,children:`▸ YouTube`})]})]}),(0,c.jsx)(`div`,{className:`mb-6`,children:(0,c.jsx)(r,{title:`now_playing.exe`,accent:`gold`,children:(0,c.jsxs)(`div`,{className:`flex flex-col md:flex-row gap-6`,children:[(0,c.jsx)(`div`,{className:`md:w-1/3`,children:(0,c.jsx)(`div`,{className:`pixelated aspect-square w-full max-w-xs mx-auto md:mx-0 overflow-hidden bg-[conic-gradient(from_45deg,var(--color-magenta),var(--color-gold),var(--color-cyan),var(--color-violet),var(--color-magenta))]`,children:T.cover?(0,c.jsx)(`img`,{src:T.cover,alt:T.title,className:`h-full w-full object-cover`}):null})}),(0,c.jsxs)(`div`,{className:`flex-1 flex flex-col justify-between`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{className:`font-pixel text-[10px] uppercase text-gold`,children:T.album}),(0,c.jsx)(`div`,{className:`crt mt-1 text-2xl text-foreground`,children:T.title}),T.playlist&&(0,c.jsxs)(`div`,{className:`crt text-sm text-muted-foreground`,children:[`Playlist: `,T.playlist]}),T.description&&(0,c.jsx)(`div`,{className:`mt-3 crt text-base text-muted-foreground leading-relaxed border-l-2 border-gold pl-3`,children:T.description}),(0,c.jsx)(`div`,{className:`mt-3 flex justify-start`,children:(0,c.jsx)(o,{itemId:T.id,likes:T.likes||0,onToggle:D})})]}),(0,c.jsxs)(`div`,{className:`mt-4`,children:[(0,c.jsx)(`div`,{ref:w,onClick:E,className:`h-4 cursor-pointer border border-border bg-panel-2 p-0.5`,children:(0,c.jsx)(`div`,{className:`h-full bg-gold transition-[width]`,style:{width:`${_}%`}})}),(0,c.jsxs)(`div`,{className:`mt-1 flex justify-between crt text-base text-muted-foreground`,children:[(0,c.jsxs)(`span`,{children:[`0:`,String(Math.floor(_/100*60)).padStart(2,`0`)]}),(0,c.jsx)(`span`,{children:T.duration})]}),(0,c.jsxs)(`div`,{className:`mt-5 flex items-center justify-between relative`,children:[(0,c.jsx)(`div`,{className:`flex items-center gap-2`}),(0,c.jsxs)(`div`,{className:`absolute left-1/2 -translate-x-1/2 flex items-center gap-2`,children:[(0,c.jsx)(`button`,{type:`button`,onClick:()=>m(t=>(t-1+e.length)%e.length),className:`border border-border bg-panel-2 px-4 py-3 font-pixel text-[10px] hover:border-gold hover:text-gold`,children:`◀◀`}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>g(e=>!e),className:`bg-gold px-6 py-3 font-pixel text-[12px] text-primary-foreground shadow-[3px_3px_0_0_var(--color-magenta)]`,children:h?`❚❚ PAUSE`:`▶ PLAY`}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>m(t=>(t+1)%e.length),className:`border border-border bg-panel-2 px-4 py-3 font-pixel text-[10px] hover:border-gold hover:text-gold`,children:`▶▶`})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(`span`,{className:`crt text-sm text-muted-foreground`,children:`🔊`}),(0,c.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:y,onChange:e=>b(parseFloat(e.target.value)),className:`w-24 h-1.5 bg-border rounded appearance-none cursor-pointer`,style:{background:`linear-gradient(to right, var(--color-gold) 0%, var(--color-gold) ${y*100}%, var(--color-border) ${y*100}%, var(--color-border) 100%)`}}),(0,c.jsxs)(`span`,{className:`crt text-xs text-muted-foreground w-10 text-right`,children:[Math.round(y*100),`%`]})]})]}),T.src&&(0,c.jsx)(`audio`,{ref:C,src:T.src,onTimeUpdate:e=>{let t=e.currentTarget;v(t.currentTime/(t.duration||1)*100)},onEnded:()=>m(t=>(t+1)%e.length)}),!T.src&&(0,c.jsxs)(`div`,{className:`mt-4 border border-dashed border-border bg-panel-2 p-2 text-center crt text-sm text-muted-foreground`,children:[`error — no `,(0,c.jsx)(`span`,{className:`text-gold`,children:`src`}),` found for the track.`]})]})]})]})})}),(0,c.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:A.map(t=>{let n=k[t]||[],i=new Map;n.forEach(e=>{let t=e.album||`[Single]`;i.has(t)||i.set(t,[]),i.get(t).push(e)});let a=[],s=new Set;return n.forEach(e=>{let t=e.album||`[Single]`;s.has(t)||(s.add(t),a.push([t,i.get(t)]))}),(0,c.jsx)(r,{title:`tracklist.dat — ${t}`,accent:`magenta`,children:(0,c.jsx)(`ol`,{className:`divide-y divide-border`,children:a.map(([n,r])=>{if(n===`[Single]`||r.length===1)return r.map(t=>{let n=e.indexOf(t);return(0,c.jsx)(`li`,{children:(0,c.jsxs)(`button`,{type:`button`,onClick:()=>{m(n),g(!0)},className:`flex w-full items-center justify-between gap-3 px-2 py-3 text-left transition-colors ${p===n?`bg-panel-2 text-gold`:`text-foreground hover:bg-panel-2 hover:text-gold`}`,children:[(0,c.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[t.cover?(0,c.jsx)(`img`,{src:t.cover,alt:``,className:`w-8 h-8 object-cover pixelated flex-shrink-0`}):(0,c.jsx)(`div`,{className:`w-8 h-8 flex-shrink-0 border border-border`,style:{background:l(n)}}),(0,c.jsxs)(`div`,{className:`min-w-0`,children:[(0,c.jsx)(`div`,{className:`crt truncate text-lg`,children:t.title}),(0,c.jsx)(`div`,{className:`font-pixel text-[8px] uppercase text-muted-foreground`,children:t.album})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[(0,c.jsx)(`span`,{className:`crt text-base text-muted-foreground`,children:t.duration}),(0,c.jsx)(o,{itemId:t.id,likes:t.likes||0,onToggle:D})]})]})},t.id)});let i=`${t}-${n}`,a=x.has(i),s=r[0];return(0,c.jsxs)(`li`,{className:`border-t border-border first:border-t-0`,children:[(0,c.jsxs)(`button`,{type:`button`,onClick:()=>O(i),className:`flex w-full items-center justify-between px-2 py-2 text-left transition-colors hover:bg-panel-2`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-3 min-w-0`,children:[s.cover?(0,c.jsx)(`img`,{src:s.cover,alt:n,className:`w-8 h-8 object-cover pixelated flex-shrink-0`}):(0,c.jsx)(`div`,{className:`w-8 h-8 flex-shrink-0 border border-border`,style:{background:l(e.indexOf(s))}}),(0,c.jsx)(`span`,{className:`font-pixel text-xs truncate text-gold`,children:n}),(0,c.jsxs)(`span`,{className:`text-xs text-muted-foreground whitespace-nowrap`,children:[`(`,r.length,` tracks)`]})]}),(0,c.jsx)(`span`,{className:`font-pixel text-xs text-muted-foreground ml-2`,children:a?`▼`:`▶`})]}),a&&(0,c.jsx)(`div`,{className:`pl-4 border-l-2 border-gold/30 ml-2 space-y-0`,children:r.map(t=>{let n=e.indexOf(t);return(0,c.jsx)(`div`,{className:`border-t border-border first:border-t-0`,children:(0,c.jsxs)(`button`,{type:`button`,onClick:()=>{m(n),g(!0)},className:`flex w-full items-center justify-between gap-3 px-2 py-3 text-left transition-colors ${p===n?`bg-panel-2 text-gold`:`text-foreground hover:bg-panel-2 hover:text-gold`}`,children:[(0,c.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[t.cover?(0,c.jsx)(`img`,{src:t.cover,alt:``,className:`w-8 h-8 object-cover pixelated flex-shrink-0`}):(0,c.jsx)(`div`,{className:`w-8 h-8 flex-shrink-0 border border-border`,style:{background:l(n)}}),(0,c.jsxs)(`div`,{className:`min-w-0`,children:[(0,c.jsx)(`div`,{className:`crt truncate text-lg`,children:t.title}),(0,c.jsx)(`div`,{className:`font-pixel text-[8px] uppercase text-muted-foreground`,children:t.album})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[(0,c.jsx)(`span`,{className:`crt text-base text-muted-foreground`,children:t.duration}),(0,c.jsx)(o,{itemId:t.id,likes:t.likes||0,onToggle:D})]})]})},t.id)})})]},i)})})},t)})})]})}export{u as component};