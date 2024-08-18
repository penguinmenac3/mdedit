var g=Object.defineProperty;var b=(o,e,n)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var f=(o,e,n)=>b(o,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}})();const v=`# Test

> Created: 14.08.2024
>
> Author: Michael Fuerst
>
> Tags: #Test, #Markdown, #Editor

This is a simple test file.
We have multiple lines inside of a paragraph.

Then there is a new paragraph.

\`\`\`bash
# Print Hello World
echo "Hello World"

# Another comment
echo "I dunno what to write here"
\`\`\`

* An unordered list
* Items
    * subitems
    * more subitems
        - and subsubitems
        - more subsubitems
    * Back to a higher level
* Top level again
    1. Ordered subset
    2. Next ordered entry
        a. Foo
        b. Bar
    3. More stuff
* Wow, done!

## Another section

Hello World

## Yet another section

### With subsections

### Direclty following each other with no content

## Tables

A table without special formatting rules

| a   | b   |
| --- | --- |
| 42  | 13  |
| c   | d   |

A table with formatting

| a   | b   | c   |
|:--- |:---:| ---:|
| 42  | 13  | 37  |
| e   | f   | g   |

## Images

Here is an image directly embedded.

TODO

Here is an image linked.

TODO

## Videos

Here is a video directly embedded.

TODO

Here is a video linked.

TODO
`;class y{constructor(e,n=null,r=!0){f(this,"_isSaved",!0);f(this,"allowEdit",!0);this.root=e,this.onSave=n,n==null&&(this.allowEdit=!1),r&&n!=null&&document.addEventListener("keydown",t=>{t.ctrlKey&&t.key==="s"&&(t.preventDefault(),this.save())})}load(e,n=!1){return!this._isSaved&&!n?!1:(this.root.innerHTML="",this._isSaved=!0,this.render(e).forEach(t=>{this.root.appendChild(t)}),!0)}save(){let e="";for(let n of this.root.children)e+=n.getAttribute("data-text")+`

`;for(;e.endsWith(`

`);)e=e.slice(0,e.length-1);this.onSave==null?this.isSaved()||alert("ERROR: This should not happen! Documents should not be editable if onSave is null."):this.onSave(e)&&(this._isSaved=!0)}isSaved(){return this._isSaved}pluginCreateChunk(e){return""}pluginOpenEditor(e,n){return null}render(e){let n=e.split("```"),r=[];for(let t=0;t<n.length;t+=2){let l=n[t];for(;l.includes(`


`);)l=l.replace(`


`,`

`);let i=n[t+1];for(let s of l.split(`

`))s!=""&&r.push(this.createChunk(s));i&&(i="```"+i+"```",r.push(this.createChunk(i)))}return r}createChunk(e){let n=document.createElement("div");n.classList.add("chunk");let r=this.pluginCreateChunk(e);if(r!="")n.innerHTML=r;else if(e.startsWith("```")){let t=e.slice(e.indexOf(`
`)+1,e.lastIndexOf(`
`));n.innerHTML="<pre>"+t+"</pre>"}else if(e.startsWith("# ")){let t=e.slice(e.indexOf("# ")+2);n.innerHTML="<h1>"+t+"</h1>"}else if(e.startsWith("## ")){let t=e.slice(e.indexOf("## ")+3);n.innerHTML="<h2>"+t+"</h2>"}else if(e.startsWith("### ")){let t=e.slice(e.indexOf("### ")+4);n.innerHTML="<h3>"+t+"</h3>"}else if(e.startsWith("#### ")){let t=e.slice(e.indexOf("#### ")+5);n.innerHTML="<h4>"+t+"</h4>"}else if(e.startsWith("* ")||e.startsWith("- ")){let t=e.slice(2);n.innerHTML="<ul>"+t+"</ul>"}else if(e.startsWith("> ")){let t="";for(let i of e.split(`
`))i.startsWith(">")&&(i=i.slice(1)),t+=i+`
`;let l="";for(let i of t.split(`

`))l+="<p>"+i+"</p>";n.innerHTML="<blockquote>"+l+"</blockquote>"}else if(e.startsWith("| ")){let t=[],l=[],i=[],s=e.split(`
`);for(let h in s){let d=h,p=s[d].split("|");if(d>=2){let c=[];i.push(c)}for(let c=1;c<p.length-1;c++){let u=p[c];d==0?l.push(u):d==1?(console.log(u),u.startsWith(":")&&u.endsWith(":")?t.push("center"):u.startsWith(":")?t.push("left"):u.endsWith(":")?t.push("right"):t.push("left")):i[d-2].push(u)}}let a=`<table>
<thead>
`;for(let h in l)a+="<th style='text-align: "+t[h]+";'>"+l[h]+"</th>";a+=`
</thead>
<tbody>
`;for(let h of i){a+="<tr>";for(let d in h)a+="<td style='text-align: "+t[d]+";'>"+h[d]+"</td>";a+=`</tr>
`}a+=`</tbody>
</table>`,n.innerHTML=a}else n.innerHTML="<p>"+e+"</p>";return n.onclick=t=>{this.allowEdit&&this.openEditor(n)},n.setAttribute("data-text",e),n}openEditor(e){let n=e.getAttribute("data-text"),r=this;function t(s){if(s!=""){let a=r.render(s);for(let h of a)r.root.insertBefore(h,i)}r.root.removeChild(i),s!=n&&(r._isSaved=!1)}let l=this.pluginOpenEditor(n,t);if(l!=null){l.setAttribute("data-text",n),this.root.replaceChild(l,e);return}let i=document.createElement("textarea");i.classList.add("editorChunk"),i.placeholder="Add markdown text here!",i.value=n,i.style.height=n.split(`
`).length*1.2+.2+"em",i.setAttribute("data-text",n),this.root.replaceChild(i,e),i.focus(),i.setSelectionRange(n.length,n.length),i.onkeyup=()=>{i.setAttribute("data-text",i.value),i.style.height=i.value.split(`
`).length*1.2+.2+"em"},i.onblur=s=>{t(i.value)},i.addEventListener("keydown",s=>{(s.ctrlKey||s.shiftKey)&&s.key==="Enter"&&i.blur()})}}let T=document.querySelector("#app"),m=null;m=o=>(console.log(o),alert("Saved!"),!0);let O=new y(T,m);O.load(v);
