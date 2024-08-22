"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[209],{7494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(4848),o=n(8453);const a={title:"How do I create templates?"},s=void 0,i={id:"faq/create-template",title:"How do I create templates?",description:"The azd template has this file structure defined by azd conventions",source:"@site/docs/1-faq/5-create-template.md",sourceDirName:"1-faq",slug:"/faq/create-template",permalink:"/docs/faq/create-template",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How do I create templates?"},sidebar:"docs",previous:{title:"How do I discover one?",permalink:"/docs/faq/discover-azd"},next:{title:"How do I contribute templates?",permalink:"/docs/faq/contribute-template"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"azd template"})," has this file structure defined ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/make-azd-compatible?source=recommendations&pivots=azd-create#azd-conventions",children:"by azd conventions"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"\u251c\u2500\u2500 .devcontainer              [ For DevContainer ]\r\n\u251c\u2500\u2500 .github/.azdo              [ Configure GitHub workflow or Azure Pipelines ]\r\n\u251c\u2500\u2500 .vscode                    [ VS Code workspace configurations ]\r\n\u251c\u2500\u2500 infra                      [ Creates and configures Azure resources ]\r\n\u2502   \u251c\u2500\u2500 main.bicep/main.tf     [ Main infrastructure file ]\r\n\u2502   \u251c\u2500\u2500 main.parameters.json/  [ Parameters file ]\r\n        main.tfvars.json   \r\n\u251c\u2500\u2500 src                        [ Contains directories for the app code ]\r\n\u2514\u2500\u2500 azure.yaml                 [ Describes the app and type of Azure resources]\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The Azure Developer CLI (azd) tool helps you with the process of ",(0,r.jsx)(t.em,{children:"creating"})," the template with ",(0,r.jsx)(t.code,{children:"azd init"})," as the first step, followed by creation of the ",(0,r.jsx)(t.code,{children:"infra/"})," folder, updating of the ",(0,r.jsx)(t.code,{children:"azure.yaml"})," file, and validation of template using ",(0,r.jsx)(t.code,{children:"azd up"})," to provision and deploy resources."]}),"\n",(0,r.jsx)(t.admonition,{title:"READ THE DOCS",type:"tip",children:(0,r.jsxs)(t.p,{children:["Learn more about ",(0,r.jsxs)(t.a,{href:"https://aka.ms/azure-dev/enabletemplateworkflow.png",children:["making your codebase ",(0,r.jsx)(t.code,{children:"azd"}),"compatible"]})]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);