import{_ as V,o as S,c as z,a as g,w as r,e as N,r as v,V as m,b as n,d as a}from"./app.997ecbff.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:s,openBlock:t,createElementBlock:k}=m;function d(e,o){const u=c("STree");return t(),k("div",null,[s(u,{data:e.data},null,8,["data"])])}const{ref:l}=m;return{render:d,...{setup(e,{expose:o}){o();const i={data:l([{label:"docs",id:"docs"},{label:"packages",id:"packages",expanded:!0,children:[{label:"plugin-vue",id:"plugin-vue"},{label:"vite",id:"vite",expanded:!0,children:[{label:"src",id:"src"},{label:"README.md",id:"README.md"}]}]},{label:"scripts",id:"scripts",children:[{label:"release.ts",id:"release.ts"},{label:"verifyCommit.ts",id:"verifyCommit.ts"}]},{label:"pnpm-workspace.yaml",id:"pnpm-workspace.yaml"}]),ref:l};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}}}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:s,openBlock:t,createElementBlock:k}=m;function d(e,o){const u=c("STree");return t(),k("div",null,[s(u,{data:e.data,checkable:""},null,8,["data"])])}const{ref:l}=m;return{render:d,...{setup(e,{expose:o}){o();const i={data:l([{label:"docs",id:"docs"},{label:"packages",id:"packages",expanded:!0,children:[{label:"plugin-vue",id:"plugin-vue",checked:!0},{label:"vite",id:"vite",expanded:!0,children:[{label:"src",id:"src"},{label:"README.md",id:"README.md",checked:!0}]}]},{label:"scripts",id:"scripts",children:[{label:"release.ts",id:"release.ts",checked:!0},{label:"verifyCommit.ts",id:"verifyCommit.ts"}]},{label:"pnpm-workspace.yaml",id:"pnpm-workspace.yaml"}]),ref:l};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}}}(),"render-demo-2":function(){const{createElementVNode:c,openBlock:s,createElementBlock:t,createCommentVNode:k,toDisplayString:d,normalizeStyle:l,createTextVNode:y,resolveComponent:e,withCtx:o,createVNode:u}=m,i={key:0,id:"octicon_file_16",viewBox:"0 0 16 16",width:"16",height:"16",fill:"#57606a",style:{display:"inline-block"}},E=[c("path",{"fill-rule":"evenodd",d:"M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"},null,-1)],A={key:1,id:"octicon_file-directory-fill_16",viewBox:"0 0 16 16",width:"16",height:"16",fill:"#54aeff",style:{display:"inline-block"}},x=[c("path",{d:"M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"},null,-1)],C=[c("path",{"fill-rule":"evenodd",d:"M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"},null,-1)],w={key:0,class:"devui-tree-node__indent"},F=["onClick"],B=[c("path",{d:"M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"},null,-1)];function M(_,b){const f=e("STree");return s(),t("div",null,[u(f,{data:_.data},{content:o(({treeNode:p})=>[p.isLeaf?(s(),t("svg",i,E)):(s(),t("svg",A,x)),y(" "+d(p.label)+" ",1),p.isLeaf?(s(),t("svg",{key:2,title:"modified",viewBox:"0 0 16 16",width:"16",height:"16",fill:"#9a6700",style:l({position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"})},C,4)):k("",!0)]),icon:o(({nodeData:p,toggleExpend:q})=>[p.isLeaf?(s(),t("span",w)):(s(),t("span",{key:1,onClick:D=>{D.stopPropagation(),q(p)}},[(s(),t("svg",{style:l({transform:p.expanded?"rotate(90deg)":"",display:"inline-block",margin:"0 5px",cursor:"pointer"}),viewBox:"0 0 1024 1024",width:"12",height:"12"},B,4))],8,F))]),_:1},8,["data"])])}const{ref:h}=m;return{render:M,...{setup(_,{expose:b}){b();const p={data:h([{label:"docs",id:"docs"},{label:"packages",id:"packages",expanded:!0,children:[{label:"plugin-vue",id:"plugin-vue"},{label:"vite",id:"vite",expanded:!0,children:[{label:"src",id:"src"},{label:"README.md",id:"README.md"}]}]},{label:"scripts",id:"scripts",children:[{label:"release.ts",id:"release.ts"},{label:"verifyCommit.ts",id:"verifyCommit.ts"}]},{label:"pnpm-workspace.yaml",id:"pnpm-workspace.yaml"}]),ref:h};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}}}()}},W=JSON.parse('{"title":"Tree \u6811\u5F62\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u573A\u666F","slug":"\u4F7F\u7528\u573A\u666F"},{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"}],"relativePath":"components/tree/index.md"}'),H=N('<h1 id="tree-\u6811\u5F62\u63A7\u4EF6" tabindex="-1">Tree \u6811\u5F62\u63A7\u4EF6 <a class="header-anchor" href="#tree-\u6811\u5F62\u63A7\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5177\u6709\u5C42\u7EA7\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002\u4F8B\u5982\uFF1A\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\u3002</p><h2 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h2>',4),L=n("div",null,"\u57FA\u672C\u7528\u6CD5\uFF1A\u5C55\u5F00\u6536\u8D77",-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("STree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("STree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"docs"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"docs"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"packages"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"packages"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"plugin-vue"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"plugin-vue"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"release.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"release.ts"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"verifyCommit.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"verifyCommit.ts"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"pnpm-workspace.yaml"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"pnpm-workspace.yaml"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),P=n("div",null,"\u9009\u62E9\u6A21\u5F0F\uFF1A\u652F\u6301\u7236\u8282\u70B9\u5168\u9009",-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("STree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"checkable"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("STree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"docs"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"docs"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"packages"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"packages"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"plugin-vue"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"plugin-vue"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"checked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"checked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"release.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"release.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"checked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"verifyCommit.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"verifyCommit.ts"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"pnpm-workspace.yaml"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"pnpm-workspace.yaml"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),O=n("div",null,"\u81EA\u5B9A\u4E49\u56FE\u6807\uFF1A\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807\u3001\u5185\u5BB9\u7B49",-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("STree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ treeNode }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeNode.isLeaf"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("octicon_file_16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 16 16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#57606a"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a("inline-block")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
          `),n("span",{class:"token attr-name"},"fill-rule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evenodd"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(`
        `),n("span",{class:"token attr-name"},"v-else"),a(`
        `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("octicon_file-directory-fill_16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 16 16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#54aeff"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a("inline-block")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
          `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      {{ treeNode.label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeNode.isLeaf"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("modified"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 16 16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#9a6700"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          position: `),n("span",{class:"token punctuation"},"'"),a("absolute"),n("span",{class:"token punctuation"},"'"),a(`,
          right: 0,
          top: `),n("span",{class:"token punctuation"},"'"),a("50%"),n("span",{class:"token punctuation"},"'"),a(`,
          transform: `),n("span",{class:"token punctuation"},"'"),a("translateY(-50%)"),n("span",{class:"token punctuation"},"'"),a(`,
        }`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
          `),n("span",{class:"token attr-name"},"fill-rule"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("evenodd"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ nodeData, toggleExpend }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nodeData.isLeaf"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-tree-node__indent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(`
        `),n("span",{class:"token attr-name"},"v-else"),a(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`
          (event) => {
            event.stopPropagation();
            toggleExpend(nodeData);
          }
        `),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
            transform: nodeData.expanded ? `),n("span",{class:"token punctuation"},"'"),a("rotate(90deg)"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),a(`,
            display: `),n("span",{class:"token punctuation"},"'"),a("inline-block"),n("span",{class:"token punctuation"},"'"),a(`,
            margin: `),n("span",{class:"token punctuation"},"'"),a("0 5px"),n("span",{class:"token punctuation"},"'"),a(`,
            cursor: `),n("span",{class:"token punctuation"},"'"),a("pointer"),n("span",{class:"token punctuation"},"'"),a(`,
          }`),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
            `),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("STree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"docs"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"docs"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"packages"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"packages"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"plugin-vue"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"plugin-vue"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vite"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"src"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"README.md"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"release.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"release.ts"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"verifyCommit.ts"'),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"verifyCommit.ts"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"pnpm-workspace.yaml"'),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"pnpm-workspace.yaml"'),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function Y(c,s,t,k,d,l){const y=v("render-demo-0"),e=v("demo"),o=v("render-demo-1"),u=v("render-demo-2");return S(),z("div",null,[H,g(e,{sourceCode:`<template>
  <STree :data="data"></STree>
</template>
<script setup>
import { ref } from "vue";
const data = ref([
  {
    label: "docs",
    id: "docs",
  },
  {
    label: "packages",
    id: "packages",
    expanded: true,
    children: [
      {
        label: "plugin-vue",
        id: "plugin-vue",
      },
      {
        label: "vite",
        id: "vite",
        expanded: true,
        children: [
          {
            label: "src",
            id: "src",
          },
          {
            label: "README.md",
            id: "README.md",
          },
        ],
      },
    ],
  },
  {
    label: "scripts",
    id: "scripts",
    children: [
      {
        label: "release.ts",
        id: "release.ts",
      },
      {
        label: "verifyCommit.ts",
        id: "verifyCommit.ts",
      },
    ],
  },
  {
    label: "pnpm-workspace.yaml",
    id: "pnpm-workspace.yaml",
  },
]);
<\/script>
`},{description:r(()=>[L]),highlight:r(()=>[R]),default:r(()=>[g(y)]),_:1}),g(e,{sourceCode:`<template>
  <STree :data="data" checkable></STree>
</template>
<script setup>
import { ref } from "vue";
const data = ref([
  {
    label: "docs",
    id: "docs",
  },
  {
    label: "packages",
    id: "packages",
    expanded: true,
    children: [
      {
        label: "plugin-vue",
        id: "plugin-vue",
        checked: true,
      },
      {
        label: "vite",
        id: "vite",
        expanded: true,
        children: [
          {
            label: "src",
            id: "src",
          },
          {
            label: "README.md",
            id: "README.md",
            checked: true,
          },
        ],
      },
    ],
  },
  {
    label: "scripts",
    id: "scripts",
    children: [
      {
        label: "release.ts",
        id: "release.ts",
        checked: true,
      },
      {
        label: "verifyCommit.ts",
        id: "verifyCommit.ts",
      },
    ],
  },
  {
    label: "pnpm-workspace.yaml",
    id: "pnpm-workspace.yaml",
  },
]);
<\/script>
`},{description:r(()=>[P]),highlight:r(()=>[j]),default:r(()=>[g(o)]),_:1}),g(e,{sourceCode:`<template>
  <STree :data="data">
    <template #content="{ treeNode }">
      <svg
        v-if="treeNode.isLeaf"
        id="octicon_file_16"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="#57606a"
        style="display:inline-block"
      >
        <path
          fill-rule="evenodd"
          d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
        ></path>
      </svg>
      <svg
        v-else
        id="octicon_file-directory-fill_16"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="#54aeff"
        style="display:inline-block"
      >
        <path
          d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
        ></path>
      </svg>
      {{ treeNode.label }}
      <svg
        v-if="treeNode.isLeaf"
        title="modified"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="#9a6700"
        :style="{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }"
      >
        <path
          fill-rule="evenodd"
          d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
    </template>
    <template #icon="{ nodeData, toggleExpend }">
      <span v-if="nodeData.isLeaf" class="devui-tree-node__indent"></span>
      <span
        v-else
        @click="
          (event) => {
            event.stopPropagation();
            toggleExpend(nodeData);
          }
        "
      >
        <svg
          :style="{
            transform: nodeData.expanded ? 'rotate(90deg)' : '',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer',
          }"
          viewBox="0 0 1024 1024"
          width="12"
          height="12"
        >
          <path
            d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"
          ></path>
        </svg>
      </span>
    </template>
  </STree>
</template>
<script setup>
import { ref } from "vue";
const data = ref([
  {
    label: "docs",
    id: "docs",
  },
  {
    label: "packages",
    id: "packages",
    expanded: true,
    children: [
      {
        label: "plugin-vue",
        id: "plugin-vue",
      },
      {
        label: "vite",
        id: "vite",
        expanded: true,
        children: [
          {
            label: "src",
            id: "src",
          },
          {
            label: "README.md",
            id: "README.md",
          },
        ],
      },
    ],
  },
  {
    label: "scripts",
    id: "scripts",
    children: [
      {
        label: "release.ts",
        id: "release.ts",
      },
      {
        label: "verifyCommit.ts",
        id: "verifyCommit.ts",
      },
    ],
  },
  {
    label: "pnpm-workspace.yaml",
    id: "pnpm-workspace.yaml",
  },
]);
<\/script>
`},{description:r(()=>[O]),highlight:r(()=>[$]),default:r(()=>[g(u)]),_:1})])}var X=V(T,[["render",Y]]);export{W as __pageData,X as default};
