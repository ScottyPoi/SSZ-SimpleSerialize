(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9742],{37225:function(e){"use strict";function a(e){!function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,alias:"tag"}]}),e.languages.flow["function-variable"].pattern=/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,lookbehind:!0})}(e)}e.exports=a,a.displayName="flow",a.aliases=[]}}]);