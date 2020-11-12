(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{502:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-query-parameters"}},[t._v("#")]),t._v(" Using Query Parameters")]),t._v(" "),a("h2",{attrs:{id:"about-query-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-query-strings"}},[t._v("#")]),t._v(" About Query Strings")]),t._v(" "),a("p",[t._v("A query string allows you to pass information to and from a website by simply adding, or “appending,” that information to the end of a URL. This information is stored in the query string and is captured by the website when it reads the URL.")]),t._v(" "),a("p",[t._v("Data can be passed into any request using a query string. Once passed, the data can be captured in node from the request object. This data can be used for anything you like, from a filter, to adding additinoal context to a request.")]),t._v(" "),a("h2",{attrs:{id:"how-to-use-query-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-query-strings"}},[t._v("#")]),t._v(" How to Use Query Strings")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Query_string",target:"_blank",rel:"noopener noreferrer"}},[t._v("query string"),a("OutboundLink")],1),t._v(" portion of a URL is the part of the URL after the question mark "),a("code",[t._v("?")]),t._v(". For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("?answer=42\n")])])]),a("p",[t._v("Each "),a("code",[t._v("key=value")]),t._v(" pair is called a "),a("em",[t._v("query parameter")]),t._v(". If your query string has multiple query parameters, they're separated by "),a("code",[t._v("&")]),t._v(". For example, the below string has 2 query parameters, "),a("code",[t._v("a")]),t._v(" and "),a("code",[t._v("b")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("?a=1&b=2\n")])])]),a("p",[t._v("Express automatically parses query parameters for you and stores them on the "),a("a",{attrs:{href:"https://masteringjs.io/tutorials/express/req",target:"_blank",rel:"noopener noreferrer"}},[t._v("request object"),a("OutboundLink")],1),t._v(" as "),a("a",{attrs:{href:"http://expressjs.com/en/4x/api.html#req.query",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("req.query")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Demo of making a request to the server")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000/test?a=1&b=2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In the server")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: '1', b: '2' }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"objects-and-arrays-in-query-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects-and-arrays-in-query-strings"}},[t._v("#")]),t._v(" Objects and Arrays in Query Strings")]),t._v(" "),a("p",[t._v("If a query parameter appears multiple times in the query string, Express will group the values into an array. For example, given the below query string:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("?color=black&color=yellow\n")])])]),a("p",[t._v("Express will set "),a("code",[t._v("req.query.color")]),t._v(" to an array "),a("code",[t._v("['black', 'yellow']")]),t._v(".")]),t._v(" "),a("p",[t._v("If you use square brackets in a query string parameter, Express will parse that parameter as an object.")]),t._v(" "),a("p",[t._v("For example, Express will parse "),a("code",[t._v("?shoe[color]=white")]),t._v(" into the object "),a("code",[t._v("{ shoe: { color: 'white' } }")])])])}),[],!1,null,null,null);e.default=r.exports}}]);