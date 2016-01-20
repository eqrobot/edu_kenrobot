modulex.add("html-parser",[],function(t,e,n){var i,r,a,o,s,l,u,c,h,d,p,f,g,m,v,b,C,N,y,x,w,k,T,S,A,H,$;i=function(t){function e(t,e){if(e)for(var n in e)t[n]=e[n]}function n(){}var i=/^[\s\xa0]+|[\s\xa0]+$/g,r=String.prototype.trim;return t={isBooleanAttribute:function(t){return/^(?:checked|disabled|selected|readonly|defer|multiple|nohref|noshape|nowrap|noresize|compact|ismap)$/i.test(t)},collapseWhitespace:function(t){return t.replace(/[\s\xa0]+/g," ")},isLetter:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t},isValidAttributeNameStartChar:function(t){return!this.isWhitespace(t)&&'"'!==t&&"'"!==t&&">"!==t&&t!==!1&&"/"!==t&&"="!==t},isWhitespace:function(t){return/^[\s\xa0]$/.test(t)},merge:function(){for(var t={},n=0,i=arguments.length;i>n;n++)e(t,arguments[n]);return t},mix:e,each:function(t,e){if(t)for(var n=0,i=t.length;i>n&&e(t[n],n)!==!1;n++);},extend:function(t,i,r,a){t.superclass=n.prototype=i.prototype;var o=t.prototype=new n;return o.constructor=t,e(o,r),e(t,a),t},indexOf:function(t,e){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},trim:r?function(t){return null==t?"":r.call(t)}:function(t){return null==t?"":(t+"").replace(i,"")}}}(),r=function(t){function e(t){this.position=t||0}return e.prototype={constructor:e,advance:function(){this.position++},clone:function(){var t=new e;return t.position=this.position,t},retreat:function(){this.position=Math.max(--this.position,0)}},t=e}(),a=function(t){function e(){this.lineCursors=[]}function n(t,e){for(var n=e.position,i=0;i<t.length;i++){var r=t[i].position;if(r===n)return i;if(n>r)return-1}return-1}function i(t,e){for(var n=e.position,i=0;i<t.length;i++){var r=t[i].position;if(r===n)return-1;if(r>n)return i}return i}return e.prototype={constructor:e,add:function(t){var e=i(this.lineCursors,t);-1!==e&&this.lineCursors.splice(e,0,t.clone())},remove:function(t){var e=this.lineCursors,i=n(this.lineCursors,t);-1!==i&&e.splice(i,1)},row:function(t){for(var e=this.lineCursors,n=0;n<e.length;n++)if(e[n].position>t.position)return n-1;return n},col:function(t){var e=0,n=this.lineCursors[this.row(t)-1];return n&&(e=n.position),t.position-e}},t=e}(),o=function(t){function e(t){var e=0;return t.replace(/\n/g,function(){e++}),e}function n(t,e,n){this.parentNode=null,this.page=t,this.startPosition=e,this.endPosition=n,this.nodeName=null,this.previousSibling=null,this.nextSibling=null}return n.prototype={constructor:n,getStartLine:function(){if(this.page){if("startLine"in this)return this.startLine;this.startLine=e(this.page.getText(0,this.startPosition))}return-1},getEndLine:function(){if(this.page){if("endLine"in this)return this.endLine;this.endLine=e(this.page.getText(0,this.endPosition))}return-1},toHtml:function(){return this.page&&this.page.getText?this.page.getText(this.startPosition,this.endPosition):""},toDebugString:function(){var t=[],e=this;return t.push(e.nodeName+"  [ "+e.startPosition+"|"+e.getStartLine()+" : "+e.endPosition+"|"+e.getEndLine()+" ]\n"),t.push(e.toHtml()),t.join("")}},t=n}(),s=function(t){function e(t,e,n,i){this.nodeType=2,this.name=t,this.assignment=e,this.value=n,this.quote=i}var n=i;return e.prototype={clone:function(){var t=new e;return n.mix(t,this),t},equals:function(t){return this.name===t.name&&this.value===t.value&&this.nodeType===t.nodeType}},e.prototype.clone=function(){var t=new e;return n.mix(t,this),t},t=e}(),l=function(t){return t={}}(),u=function(t){return t={}}(),c=function(t){return t={scan:function(t,e,n){var i=e.parseCDATA(n.quoteSmart,t.nodeName),r=e.getPosition(),a=e.nextNode();a&&(1===a.nodeType&&a.isEndTag()&&a.tagName===t.tagName||(e.setPosition(r),a=null)),t.closed=!0,i&&t.appendChild(i)}}}(),h=function(t){var e=c,n=u;return t=n.textarea={scan:function(t,n,i){i=i||{},e.scan(t,n,i)}}}(),d=function(t){function e(t){return String(t).replace(/'/g,"&quot;")}function n(){this.output=[]}var r=i,a=r.isBooleanAttribute;return n.prototype={constructor:n,append:function(){for(var t,e=this.output,n=arguments,i=0;i<n.length;i++)if(t=n[i],t.length>1)for(var r=0;r<t.length;r++)e.push(t.charAt(r));else e.push(t);return this},openTag:function(t){this.append("<",t.tagName)},openTagClose:function(t){t.isSelfClosed&&this.append(" ","/"),this.append(">")},closeTag:function(t){this.append("</",t.tagName,">")},attribute:function(t){var n=t.value||"",i=t.name;a(i)&&!n&&(n=i),this.append(" ",i,'="',e(n),'"')},text:function(t){this.append(t)},cdata:function(t){this.append(t)},comment:function(t){this.append("<!--"+t+"-->")},getHtml:function(){return this.output.join("")}},l.BasicWriter=t=n,t}(),p=function(t){function e(t){return String(t).replace(/"/g,"&quot;")}function n(t,e){var n=e.value||"",i=e.name;return v(n)?0:"input"===t&&"value"===i||N.test(i)}function r(t){return!/[ "'=<>`]/.test(t)}function a(t,e){var n=t.nodeName,i=e.name,r=e.value||"";return r=v(r.toLowerCase()),"script"===n&&"language"===i&&"javascript"===r||"form"===n&&"method"===i&&"get"===r||"input"===n&&"type"===i&&"text"===r||"script"===n&&"type"===i&&"text/javascript"===r||"style"===n&&"type"===i&&"text/css"===r||"area"===n&&"shape"===i&&"rect"===r}function o(t){return/\[if[^\]]+\]/.test(t)}function s(t){return/^on[a-z]+/.test(t)}function l(t,e){return/^(?:a|area|link|base)$/.test(e)&&"href"===t||"img"===e&&/^(?:src|longdesc|usemap)$/.test(t)||"object"===e&&/^(?:classid|codebase|data|usemap)$/.test(t)||"q"===e&&"cite"===t||"blockquote"===e&&"cite"===t||("ins"===e||"del"===e)&&"cite"===t||"form"===e&&"action"===t||"input"===e&&("src"===t||"usemap"===t)||"head"===e&&"profile"===t||"script"===e&&("src"===t||"for"===t)}function u(t,e){return/^(?:a|area|object|button)$/.test(e)&&"tabindex"===t||"input"===e&&("maxlength"===t||"tabindex"===t)||"select"===e&&("size"===t||"tabindex"===t)||"textarea"===e&&/^(?:rows|cols|tabindex)$/.test(t)||"colgroup"===e&&"span"===t||"col"===e&&"span"===t||("th"===e||"td"===e)&&("rowspan"===t||"colspan"===t)}function c(t,e){var n=t.nodeName,i=e.name,r=e.value||"";return s(i)?r=v(r).replace(/^javascript:[\s\xa0]*/i,"").replace(/[\s\xa0]*;$/,""):"class"===i?r=C(v(r)):l(i,n)||u(i,n)?r=v(r):"style"===i&&(r=v(r).replace(/[\s\xa0]*;[\s\xa0]*$/,"")),r}function h(t){return t.replace(/^(\[[^\]]+\]>)[\s\xa0]*/,"$1").replace(/[\s\xa0]*(<!\[endif\])$/,"$1")}function p(t){return v(t).replace(/^(?:[\s\xa0]*\/\*[\s\xa0]*<!\[CDATA\[[\s\xa0]*\*\/|[\s\xa0]*\/\/[\s\xa0]*<!\[CDATA\[.*)/,"").replace(/(?:\/\*[\s\xa0]*\]\]>[\s\xa0]*\*\/|\/\/[\s\xa0]*\]\]>)[\s\xa0]*$/,"")}function f(){var t=this;f.superclass.constructor.apply(t,arguments),t.inPre=0}var g=d,m=i,v=m.trim,b=m.isBooleanAttribute,C=m.collapseWhitespace,N=new RegExp("^(?:class|id|style|title|lang|dir|on(?:focus|blur|change|click|dblclick|mouse(?:down|up|over|move|out)|key(?:press|down|up)))$");return m.extend(f,g,{comment:function(t){o(t)&&(t=h(t),f.superclass.comment.call(this,t))},openTag:function(t){var e=this;"pre"===t.tagName&&(e.inPre=1),f.superclass.openTag.apply(e,arguments)},closeTag:function(t){var e=this;"pre"===t.tagName&&(e.inPre=0),f.superclass.closeTag.apply(e,arguments)},cdata:function(t){t=p(t),f.superclass.cdata.call(this,t)},attribute:function(t,i){var o,s=this,l=t.name,u=t.value||"";if(!n(i,t)&&!a(i,t)){if(b(l))return s.append(" ",l),void 0;o=e(c(i,t)),u&&r(u)||(o='"'+o+'"'),s.append(" ",l,"=",o)}},text:function(t){var e=this;e.inPre||(t=C(t)),e.append(t)}}),t=f}(),f=function(t){function e(){this.tagNames=[],this.attributeNames=[],this.tags=[],this.comment=[],this.text=[],this.cdata=[],this.attributes=[],this.root=[]}function n(t,e){for(var n=0;t&&n<t.length;n++)if(t[n].priority>e)return n;return t.length}function r(t,e){for(var n=0;t&&n<t.length;n++){var i=t[n].value;s.each(i,function(t){e=e.replace(t[0],t[1])})}return e}function a(t,e,n){var i,r,a;for(r=0;t&&r<t.length;r++){if(i=t[r].value,(a=i.apply(null,e))===!1)return!1;if(n&&a&&a!==n){if("string"==typeof a){if(n.toHtml()===a)return n;n.nodeValue=a,a=n}return this.onNode(a)}}return n}function o(t,e,n,i){for(var r=0;t&&r<t.length;r++){var a,o=t[r].value,s=e.name;if(o[s]&&(a=o[s].call(null,e.value,n))===!1)return a;"string"==typeof a&&(e.value=a)}return i}var s=i;return e.prototype={constructor:e,addRules:function(t,e){e=e||10;for(var i in t){var r=this[i];if(r){var a=n(r,e);r.splice(a,0,{value:t[i],priority:e})}}},onTagName:function(t){return r(this.tagNames,t)},onAttributeName:function(t){return r(this.attributeNames,t)},onText:function(t){return a.call(this,this.text,[t.toHtml(),t],t)},onCData:function(t){return a.call(this,this.cdata,[t.toHtml(),t],t)},onAttribute:function(t,e){return o(this.attributes,t,e,t)},onComment:function(t){return a.call(this,this.comment,[t.toHtml(),t],t)},onNode:function(t){var e=t.nodeType;return 1===e?this.onTag(t):3===e?this.onText(t):8===e?this.onComment(t):void 0},onFragment:function(t){return a.call(this,this.root,[t],t)},onTag:function(t){for(var e,n=["^",t.tagName,"$"],i=this.tags,r=0;r<n.length;r++)for(var a=n[r],o=0;o<i.length;o++){var s=i[o].value;if(s[a]){if((e=s[a](t))===!1)return!1;if(e&&e!==t)return this.onNode(e);if(!t.tagName)return t}}return t}},t=e}(),g=function(t){var e,n=i,r=n.merge,a={isindex:1,fieldset:1},o={input:1,button:1,select:1,textarea:1,label:1},s=r({a:1},o),l=r({iframe:1},s),u={hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1},c={ins:1,del:1,script:1,style:1},h=r({b:1,acronym:1,bdo:1,"var":1,"#text":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1},c),d=r({sub:1,img:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1},h),p=r({p:1},d),f=r({iframe:1},d,o),g={img:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#text":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1},m=r({a:1},f),v={tr:1},b={"#text":1},C=r({param:1},g),N=r({form:1},a,l,u,p),y={li:1},x={style:1,script:1},w={base:1,link:1,meta:1,title:1},k=r(w,x),T={head:1,body:1},S={html:1},A={address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1},H=t={$nonBodyContent:r(S,T,w),$block:A,$blockLimit:{body:1,div:1,td:1,th:1,caption:1,form:1},$inline:m,$body:r({script:1,style:1},A),$cdata:{script:1,style:1},$empty:{area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1},$listItem:{dd:1,dt:1,li:1},$list:{ul:1,ol:1,dl:1},$nonEditable:{applet:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,script:1,textarea:1,param:1},$removeEmpty:{abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},html:T,head:k,style:b,body:N,base:{},link:{},meta:{},title:b,col:{},tr:{td:1,th:1},img:{},colgroup:{col:1},noscript:N,td:N,br:{},th:N,center:N,kbd:m,button:r(p,u),basefont:{},h5:m,h4:m,samp:m,h6:m,ol:y,h1:m,h3:m,option:b,h2:m,form:r(a,l,u,p),select:{optgroup:1,option:1},font:m,ins:m,menu:y,abbr:m,label:m,table:{thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1},code:m,script:b,tfoot:v,cite:m,li:N,input:{},iframe:N,strong:m,textarea:b,noframes:N,big:m,small:m,span:m,hr:{},dt:m,sub:m,optgroup:{option:1},param:{},bdo:m,"var":m,div:N,object:C,sup:m,dd:N,strike:m,area:{},dir:y,map:r({area:1,form:1,p:1},a,c,u),applet:C,dl:{dt:1,dd:1},del:m,isindex:{},fieldset:r({legend:1},g),thead:v,ul:y,acronym:m,b:m,a:f,blockquote:N,caption:m,i:m,u:m,tbody:v,s:m,address:r(l,p),tt:m,legend:m,q:m,pre:r(h,s),p:m,em:m,dfn:m},$=["article","figure","nav","aside","section","footer"];for(var P in H)for(var L in H[P])if("div"===L)for(e=0;e<$.length;e++)H[P][$[e]]=H[P][L];for(e=0;e<$.length;e++)H[$[e]]=H.div;return t}(),m=function(t){function e(t){this.source=t,this.lineIndex=new n}var n=a;return e.prototype={constructor:e,getChar:function(t){var e=this.source,n=t.position;if(n>=e.length)return-1;var i=e.charAt(n);if(t.advance(),"\r"===i){i="\n",n=t.position;var r=e.charAt(n);"\n"===r&&t.advance()}return"\n"===i&&this.lineIndex.add(t),i},ungetChar:function(t){var e=this.source;t.retreat();var n=t.position,i=e.charAt(n);"\n"===i&&0!==n&&(i=e.charAt(n-1),"\r"===i&&t.retreat())},getText:function(t,e){return this.source.slice(t,e)},row:function(t){return this.lineIndex.row(t)},col:function(t){return this.lineIndex.col(t)}},t=e}(),v=function(t){function e(t){"string"==typeof t?(this.nodeValue=t,e.superclass.constructor.apply(this,[null,-1,-1])):(e.superclass.constructor.apply(this,arguments),this.nodeValue=this.toHtml()),this.nodeType=3,this.nodeName="#text"}var n=o,r=i;return r.extend(e,n,{writeHtml:function(t,e){var n;if(!e||(n=e.onText(this))!==!1){if(n&&this!==n)return n.writeHtml(t,e),void 0;t.text(this.toHtml())}},toHtml:function(){return this.nodeValue?this.nodeValue:e.superclass.toHtml.apply(this,arguments)}}),t=e}(),b=function(t){function e(){e.superclass.constructor.apply(this,arguments),this.nodeType=4,this.nodeName="#cdata"}var n=v,r=i;return r.extend(e,n,{writeHtml:function(t,e){var n;if(!e||(n=e.onCData(this))!==!1){if(n&&this!==n)return n.writeHtml(t,e),void 0;t.cdata(this.toHtml())}}}),t=e}(),C=function(t){function e(t,e,n){t.nodeName=t.tagName=e.toLowerCase(),t._updateSelfClosed(),d.each(n,function(e,n){t.setAttribute(n,e)})}function n(t,i,r,a){var o=this;if(o.childNodes=[],o.firstChild=null,o.lastChild=null,o.attributes=a||[],o.nodeType=1,"string"==typeof t)e.apply(null,[o].concat([].slice.call(arguments,0)));else{n.superclass.constructor.apply(o,arguments),a=o.attributes,a[0]&&(o.nodeName=a[0].name.toLowerCase(),o.tagName=o.nodeName.replace(/\//,""),o._updateSelfClosed(),a.splice(0,1));var s=a[a.length-1],l=!(!s||!/\/$/.test(s.name));l&&(a.length=a.length-1),o.isSelfClosed=o.isSelfClosed||l,o.closed=o.isSelfClosed}o.closedStartPosition=-1,o.closedEndPosition=-1}function r(t){var e=t.childNodes;if(t.firstChild=e[0],t.lastChild=e[e.length-1],e.length>=1&&(e[0].nextSibling=e[0].nextSibling=null,e[0].parentNode=t),e.length>1){for(var n=0;n<e.length-1;n++)e[n].nextSibling=e[n+1],e[n+1].previousSibling=e[n],e[n+1].parentNode=t;e[e.length-1].nextSibling=null}}function a(t,e){if(t&&t.length)for(var n=0;n<t.length;n++)if(t[n].name===e)return t[n];return null}var u=o,c=s,h=g,d=i,p=l;return d.extend(n,u,{_updateSelfClosed:function(){var t=this;t.isSelfClosed=!!h.$empty[t.nodeName],t.isSelfClosed||(t.isSelfClosed=/\/$/.test(t.nodeName)),t.closed=t.isSelfClosed},clone:function(){var t=new n,e=[];return d.each(this.attributes,function(t){e.push(t.clone())}),d.mix(t,{childNodes:[],firstChild:null,lastChild:null,attributes:e,nodeType:this.nodeType,nodeName:this.nodeName,tagName:this.tagName,isSelfClosed:this.isSelfClosed,closed:this.closed,closedStartPosition:this.closedStartPosition,closedEndPosition:this.closedEndPosition}),t},setTagName:function(t){var e=this;e.nodeName=e.tagName=t,t&&e._updateSelfClosed()},equals:function(t){if(!t||this.nodeName!==t.nodeName)return 0;if(this.nodeType!==t.nodeType)return 0;if(this.attributes.length!==t.attributes.length)return 0;for(var e=0;e<this.attributes.length;e++)if(!this.attributes[e].equals(t.attributes[e]))return 0;return 1},isEndTag:function(){return/^\//.test(this.nodeName)},appendChild:function(t){this.childNodes.push(t),r(this)},replace:function(t){var e=t.parentNode.childNodes,n=d.indexOf(t,e);e[n]=this,r(t.parentNode)},replaceChild:function(t,e){var n=this,i=n.childNodes,a=d.indexOf(e,i);i[a]=t,r(n)},prepend:function(t){this.childNodes.unshift(t),r(this)},insertBefore:function(t){var e=t.parentNode.childNodes,n=d.indexOf(t,e);e.splice(n,0,this),r(t.parentNode)},insertAfter:function(t){var e=t.parentNode.childNodes,n=d.indexOf(t,e);n===e.length-1?t.parentNode.appendChild(this):this.insertBefore(t.parentNode.childNodes[[n+1]])},empty:function(){this.childNodes=[],r(this)},removeChild:function(t){var e=t.parentNode.childNodes,n=d.indexOf(t,e);e.splice(n,1),r(t.parentNode)},getAttribute:function(t){var e=a(this.attributes,t);return e&&e.value},setAttribute:function(t,e){var n=a(this.attributes,t);n?n.value=e:this.attributes.push(new c(t,"=",e,'"'))},removeAttribute:function(t){var e=a(this.attributes,t);if(e){var n=d.indexOf(e,this.attributes);this.attributes.splice(n,1)}},filterChildren:function(){var t=this;if(!t.isChildrenFiltered){var e=new p.BasicWriter;t._writeChildrenHTML(e);var n=new p.Parser(e.getHtml()),i=n.parse().childNodes;t.empty(),d.each(i,function(e){t.appendChild(e)}),t.isChildrenFiltered=1}},writeHtml:function(t,e){var n,i,r=this,a=r.tagName;if("!doctype"===a)return t.append(this.toHtml()+"\n"),void 0;if(r.__filter=e,r.isChildrenFiltered=0,e){if(!(a=e.onTagName(a)))return;if(r.tagName=a,n=e.onTag(r),n===!1)return;if(n&&(r=n),1!==r.nodeType)return r.writeHtml(t,e),void 0;if(!r.tagName)return r._writeChildrenHTML(t),void 0}t.openTag(r);for(var o=r.attributes,s=0;s<o.length;s++){var l=o[s];if(i=l.name,e){if(!(i=e.onAttributeName(i,r)))continue;if(l.name=i,e.onAttribute(l,r)===!1)continue}t.attribute(l,r)}t.openTagClose(r),r.isSelfClosed||(r._writeChildrenHTML(t),t.closeTag(r))},_writeChildrenHTML:function(t){var e=this,n=e.isChildrenFiltered?0:e.__filter;d.each(e.childNodes,function(e){e.writeHtml(t,n)})},outerHtml:function(){var t=new p.BasicWriter;return this.writeHtml(t),t.getHtml()}}),t=n}(),N=function(t){function e(){e.superclass.constructor.apply(this,arguments),this.nodeType=8,this.nodeName="#comment"}var n=v,r=i;return r.extend(e,n,{writeHtml:function(t,e){var n;if(!e||(n=e.onComment(this))!==!1){if(n&&this!==n)return n.writeHtml(t,e),void 0;t.comment(this.toHtml())}},toHtml:function(){if(this.nodeValue)return this.nodeValue;var t=n.superclass.toHtml.apply(this,arguments);return t.substring(4,t.length-3)}}),t=e}(),y=function(t){function e(){this.childNodes=[],this.nodeType=9,this.nodeName="#fragment"}var n=C,r=i;return r.extend(e,n,{writeHtml:function(t,e){this.__filter=e,this.isChildrenFiltered=0,e&&e.onFragment(this),this._writeChildrenHTML(t)}}),t=e}(),x=function(t){function e(){this.childNodes=[],this.nodeType=9,this.nodeName="#document"}var n=C,r=i;return r.extend(e,n,{writeHtml:function(t,e){this.__filter=e,this._writeChildrenHTML(t)}}),t=e}(),w=function(t){function e(t,i){function o(){h.childNodes.length&&(h.insertAfter(d),d=h,h=t.clone())}if(t.closed=1,!i.fixByDtd)return 0;var u=1,c=[].concat(t.childNodes);if(s.each(c,function(e){return n(t,e)?void 0:(u=0,!1)}),u)return 0;for(var h=t.clone(),d=t,p=[],f=0;f<c.length;f++){var g=c[f];if(n(h,g))h.appendChild(g);else{if(1!==g.nodeType)continue;var m=g.tagName;if(r.$listItem[m]){o();var v=l[g.tagName],b=new a;for(b.nodeName=b.tagName=v;f<c.length;){if(c[f].tagName===m)b.appendChild(c[f]);else if(3===c[f].nodeType&&s.trim(c[f].toHtml()))break;f++}b.insertAfter(d),d=b,f--;continue}o(),g.equals(h)?(g.insertAfter(d),d=g):n(g,h)?(h=t.clone(),s.each(g.childNodes,function(t){h.appendChild(t)}),g.empty(),g.insertAfter(d),d=g,g.appendChild(h),p.push(h),h=t.clone()):(g.insertAfter(d),d=g)}}return h.childNodes.length&&h.insertAfter(d),t.parentNode.removeChild(t),s.each(p,function(t){e(t,i)}),1}function n(t,e){if(9===t.nodeType)return 1;if(!r[t.tagName])throw new Error("dtd["+t.tagName+"] === undefined!");if(8===e.nodeType)return 1;var n=e.tagName||e.nodeName;return!!r[t.tagName][n]}var r=g,a=C,o=u,s=i,l={li:"ul",dt:"dl",dd:"dl"},c={dd:{dl:1},dt:{dl:1},li:{ul:1,ol:1},option:{select:1},optgroup:{select:1}};return t={scan:function(t,n,i){function r(n,r){for(l=n;l>r;l--){var a=u[l],o=u[l-1];o.appendChild(a),e(a,i)}t=u[r],u.length=r}function a(t){var e,n=0;if(e=c[t.tagName]){for(var i=u.length-1,a=u[i];a&&!(a.tagName in e);){if(a.tagName===t.tagName){n=1;break}i--,a=u[i]}n&&r(u.length-1,i-1)}return n}var s,l,u;u=i.stack=i.stack||[];do{if(s=n.nextNode())if(1===s.nodeType)if(s.isEndTag()&&s.tagName===t.tagName)s=null;else if(s.isEndTag()){if(s.isEndTag()){var h=-1;for(l=u.length-1;l>=0;l--){var d=u[l];if(d.tagName===s.tagName){h=l;break}}-1!==h&&(u[u.length-1].appendChild(t),e(t,i),r(u.length-1,h),s=null)}}else o[s.tagName]?(o[s.tagName].scan(s,n,i),t.appendChild(s)):s.isSelfClosed?t.appendChild(s):(u.push(t),a(s)&&u.push(t),t=s);else t.appendChild(s);null===s&&u.length>0&&(s=u[u.length-1],o[s.tagName]?s=null:(u.length=u.length-1,s.appendChild(t),e(t,i),t=s))}while(s);e(t,i)}}}(),k=function(t){var e=c,n=g,i=u,r=t={scan:function(t,n,i){i=i||{},i.quoteSmart=1,e.scan(t,n,i),i.quoteSmart=0}};for(var a in n.$cdata)i[a]=r;return t}(),T=function(t){function e(){var t=this;e.superclass.constructor.apply(t,arguments),t.inPre=0,t.indentChar="	",t.indentLevel=0,t.allowIndent=0,t.rules={};var n=a.merge(r.$nonBodyContent,r.$block,r.$listItem,r.$tableContent,{select:1,script:1,style:1});for(var i in n)t.setRules(i,{allowIndent:1,breakBeforeOpen:1,breakAfterOpen:1,breakBeforeClose:1,breakAfterClose:1});a.each(["p","h1","h2","h3","h4","h5","h6"],function(e){t.setRules(e,{allowIndent:0,breakAfterOpen:0,breakBeforeClose:0})}),t.setRules("option",{breakBeforeOpen:1}),t.setRules("optiongroup",{breakBeforeOpen:1}),t.setRules("br",{breakAfterOpen:1}),t.setRules("title",{allowIndent:0,breakBeforeClose:0,breakAfterOpen:0}),t.setRules("pre",{breakAfterOpen:1,allowIndent:0})}var n=d,r=g,a=i;return a.extend(e,n,{indentation:function(){this.inPre||this.append(new Array(this.indentLevel+1).join(this.indentChar)),this.allowIndent=0},lineBreak:function(){var t=this.output;if(!this.inPre&&t.length){for(var e=t.length-1;e>=0&&/[\r\n\t ]/.test(t[e]);e--);t.length=e+1,this.append("\n")}this.allowIndent=1},setRules:function(t,e){this.rules[t]||(this.rules[t]={}),a.mix(this.rules[t],e)},openTag:function(t){var n=t.tagName,i=this.rules[n]||{};this.allowIndent?this.indentation():i.breakBeforeOpen&&(this.lineBreak(),this.indentation()),e.superclass.openTag.apply(this,arguments)},openTagClose:function(t){var e=t.tagName,n=this.rules[e]||{};t.isSelfClosed?this.append(" />"):(this.append(">"),n.allowIndent&&this.indentLevel++),n.breakAfterOpen&&this.lineBreak(),"pre"===e&&(this.inPre=1)},closeTag:function(t){var n=this,i=t.tagName,r=n.rules[i]||{};r.allowIndent&&n.indentLevel--,n.allowIndent?n.indentation():r.breakBeforeClose&&(n.lineBreak(),n.indentation()),e.superclass.closeTag.apply(n,arguments),"pre"===i&&(n.inPre=0),r.breakAfterClose&&n.lineBreak()},text:function(t){this.allowIndent&&this.indentation(),this.inPre||(t=a.collapseWhitespace(t)),this.append(t)},comment:function(t){this.allowIndent&&this.indentation(),this.append("<!--"+t+"-->")},cdata:function(t){this.allowIndent&&this.indentation(),this.append(a.trim(t))}}),t=e}(),S=function(t){function e(t,e){var i=this;i.page=new o(t),i.cursor=new n,i.nodeFactory=this,this.cfg=e||{}}var n=r,a=-1,o=m,l=v,u=b,c=i,h=s,d=C,p=N;return e.prototype={constructor:e,setPosition:function(t){this.cursor.position=t},getPosition:function(){return this.cursor.position},nextNode:function(t){var e,n,i,r=this,a=r.cursor,o=r.page;switch(e=a.position,n=o.getChar(a)){case-1:i=null;break;case"<":n=o.getChar(a),-1===n?i=r.makeString(e,a.position):"/"===n||c.isLetter(n)?(o.ungetChar(a),i=r.parseTag(e)):"!"===n||"?"===n?(n=o.getChar(a),-1===n?i=r.makeString(e,a.position):">"===n?i=r.makeComment(e,a.position):(o.ungetChar(a),"-"===n?i=r.parseComment(e,t):(o.ungetChar(a),i=r.parseTag(e)))):(o.ungetChar(a),i=r.parseString(e,t));break;default:o.ungetChar(a),i=r.parseString(e,t)}return i},makeComment:function(t,e){var n,i;if(n=e-t,0!==n){if(2>n)return this.makeString(t,e);i=this.nodeFactory.createCommentNode(this.page,t,e)}else i=null;return i},makeString:function(t,e){var n,i=null;return n=e-t,n>0&&(i=this.nodeFactory.createStringNode(this.page,t,e)),i},makeCData:function(t,e){var n,i=null;return n=e-t,n>0&&(i=this.nodeFactory.createCDataNode(this.page,t,e)),i},makeTag:function(t,e,n){var i,r;if(i=e-t,0!==i){if(2>i)return this.makeString(t,e);r=this.nodeFactory.createTagNode(this.page,t,e,n)}else r=null;return r},createTagNode:function(t,e,n,i){return new d(t,e,n,i)},createStringNode:function(t,e,n){return new l(t,e,n)},createCDataNode:function(t,e,n){return new u(t,e,n)},createCommentNode:function(t,e,n){return new p(t,e,n)},parseTag:function(t){function e(){if(l&&-1===i&&o.length)throw new Error(o[0].name+" syntax error at row "+(u.row(d)+1)+" , col "+(u.col(d)+1))}var n,i,r=[],o=[],s=this.cfg,l=s.strict,u=this.page,h=0,d=this.cursor;for(r[0]=d.position;!n;){switch(r[h+1]=d.position,i=u.getChar(d),h){case 0:-1===i||">"===i||"<"===i?("<"===i&&(u.ungetChar(d),r[h+1]=d.position),n=!0):o.length?("/"===i||c.isValidAttributeNameStartChar(i))&&(h=1):("/"===i||c.isValidAttributeNameStartChar(i))&&(h=1);break;case 1:a===i||">"===i||"<"===i?("<"===i&&(u.ungetChar(d),r[h+1]=d.getPosition),this.standalone(o,r),n=!0):c.isWhitespace(i)?(r[6]=r[2],h=6):"="===i&&(h=2);break;case 2:a===i||">"===i?(this.standalone(o,r),n=!0):"'"===i?(h=4,r[4]=r[3]):'"'===i?(h=5,r[5]=r[3]):c.isWhitespace(i)||(h=3);break;case 3:a===i||">"===i?(this.naked(o,r),n=!0):c.isWhitespace(i)&&(this.naked(o,r),r[0]=r[4],h=0);break;case 4:a===i?(this.singleQuote(o,r),n=!0):"'"===i&&(this.singleQuote(o,r),r[0]=r[5]+1,h=0);break;case 5:a===i?(this.doubleQuote(o,r),n=!0):'"'===i&&(this.doubleQuote(o,r),r[0]=r[6]+1,h=0);break;case 6:a===i?(this.standalone(o,r),r[0]=r[6],u.ungetChar(d),h=0):"="===i?(r[2]=r[6],r[3]=r[7],h=2):c.isWhitespace(i)||(this.standalone(o,r),r[0]=r[6],u.ungetChar(d),h=0);break;default:throw new Error("how ** did we get in state "+h)}e()}return this.makeTag(t,d.position,o)},parseComment:function(t,e){var n,i,r,o=this.page,s=this.cursor;for(n=!1,r=0;!n;)if(i=o.getChar(s),a===i)n=!0;else switch(r){case 0:if(">"===i)n=!0;else{if("-"!==i)return this.parseString(t,e);r=1}break;case 1:if("-"!==i)return this.parseString(t,e);i=o.getChar(s),a===i?n=!0:">"===i?n=!0:(o.ungetChar(s),r=2);break;case 2:if("-"===i)r=3;else if(a===i)return this.parseString(t,e);break;case 3:r="-"===i?4:2;break;case 4:">"===i?n=!0:c.isWhitespace(i)||(r=2);break;default:throw new Error("how ** did we get in state "+r)}return this.makeComment(t,s.position)},parseString:function(t,e){for(var n,i=0,r=this.page,o=this.cursor,s=0;!i;)if(n=r.getChar(o),a===n)i=1;else if(!e||0!==s||'"'!==n&&"'"!==n)if(e&&0!==s&&"\\"===n)n=r.getChar(o),a!==n&&"\\"!==n&&n!==s&&r.ungetChar(o);else if(e&&n===s)s=0;else if(e&&0===s&&"/"===n)if(n=r.getChar(o),a===n)i=1;else if("/"===n){do n=r.getChar(o);while(a!==n&&"\n"!==n)}else if("*"===n){do{do n=r.getChar(o);while(a!==n&&"*"!==n);n=r.getChar(o),"*"===n&&r.ungetChar(o)}while(a!==n&&"/"!==n)}else r.ungetChar(o);else 0===s&&"<"===n&&(n=r.getChar(o),a===n?i=1:"/"===n||c.isLetter(n)||"!"===n||"?"===n?(i=1,r.ungetChar(o),r.ungetChar(o)):r.ungetChar(o));else s=n;return this.makeString(t,o.position)},parseCDATA:function(t,e){var n,i,r,o,s,l,u,h=this.cursor,d=this.page;for(n=h.position,i=0,r=!1,o="",u=!1;!r;)switch(s=d.getChar(h),i){case 0:switch(s){case-1:r=!0;break;case"'":t&&!u&&(""===o?o="'":"'"===o&&(o=""));break;case'"':t&&!u&&(""===o?o='"':'"'===o&&(o=""));break;case"\\":t&&""!==o&&(s=d.getChar(h),a===s?r=!0:"\\"!==s&&s!==o&&d.ungetChar(h));break;case"/":if(t&&""===o)if(s=d.getChar(h),a===s)r=!0;else if("/"===s)u=!0;else if("*"===s){do{do s=d.getChar(h);while(a!==s&&"*"!==s);s=d.getChar(h),"*"===s&&d.ungetChar(h)}while(a!==s&&"/"!==s)}else d.ungetChar(h);break;case"\n":u=!1;break;case"<":t?""===o&&(i=1):i=1}break;case 1:switch(s){case-1:r=!0;break;case"/":i=!e||d.getText(h.position,h.position+e.length)===e&&!d.getText(h.position+e.length,h.position+e.length+1).match(/\w/)?2:0;break;case"!":s=d.getChar(h),a===s?r=!0:"-"===s?(s=d.getChar(h),a===s?r=!0:i="-"===s?3:0):i=0;break;default:i=0}break;case 2:u=!1,a===s?r=!0:c.isLetter(s)?(r=!0,d.ungetChar(h),d.ungetChar(h),d.ungetChar(h)):i=0;break;case 3:u=!1,a===s?r=!0:"-"===s&&(s=d.getChar(h),a===s?r=!0:"-"===s?(s=d.getChar(h),a===s?r=!0:">"===s?i=0:(d.ungetChar(h),d.ungetChar(h))):d.ungetChar(h));break;default:throw new Error("unexpected "+i)}return l=h.position,this.makeCData(n,l)},singleQuote:function(t,e){var n=this.page;t.push(new h(n.getText(e[1],e[2]),"=",n.getText(e[4]+1,e[5]),"'"))},doubleQuote:function(t,e){var n=this.page;t.push(new h(n.getText(e[1],e[2]),"=",n.getText(e[5]+1,e[6]),'"'))},standalone:function(t,e){var n=this.page;t.push(new h(n.getText(e[1],e[2])))},naked:function(t,e){var n=this.page;t.push(new h(n.getText(e[1],e[2]),"=",n.getText(e[3],e[4])))}},t=e}(),A=function(t){var e=w,n=u;return t={getScanner:function(t){return n[t]||e}}}(),H=function(t){function e(t,e){t=s.trim(t),this.originalHTML=t,t=/^(<!doctype|<html|<body)/i.test(t)?"<document>"+t+"</document>":"<body>"+t+"</body>",this.lexer=new d(t),this.opts=e||{}}function n(t){var e=a(t,"body",3);if(e){var n=e.parentNode,i=n.childNodes,r=s.indexOf(e,i);if(r!==i.length-1)for(var o=i.slice(r+1,i.length),l=0;l<o.length;l++)n.removeChild(o[l]),"body"===o[l].tagName?s.each(o[l].childNodes,function(t){e.appendChild(t)}):e.appendChild(o[l])}return e}function r(t){var e,n,i=t.childNodes,r=u.p,a=0;for(n=0;n<i.length;n++)if(e=i[n],3===e.nodeType||1===e.nodeType&&r[e.nodeName]){a=1;break}if(a){var o=[],s=new c;for(s.nodeName=s.tagName="p",n=0;n<i.length;n++)e=i[n],3===e.nodeType||1===e.nodeType&&r[e.nodeName]?s.appendChild(e):(s.childNodes.length&&(o.push(s),s=s.clone()),o.push(e));for(s.childNodes.length&&o.push(s),t.empty(),n=0;n<o.length;n++)t.appendChild(o[n])}}function a(t,e,n){if(0===n)return 0;"number"==typeof n&&n--;var i,r=t.childNodes;if(r)for(var o=0;o<r.length;o++){if(r[o].tagName===e)return r[o];if(i=a(r[o],e,n))return i}return 0}function o(t){for(var e=[].concat(t.childNodes),n=0;n<e.length;n++)if("html"===e[n].nodeName){for(var i=e[n],r=0;n>r;r++)3!==e[r].nodeType||s.trim(e[r].toHtml())||t.removeChild(e[r]);for(;i.firstChild&&3===i.firstChild.nodeType&&!s.trim(i.firstChild.toHtml());)i.removeChild(i.firstChild);break}}var s=i,u=g,c=C,h=y,d=S,p=x,f=A;return e.prototype={constructor:e,elements:function(){var t,e,i=this.lexer,a=this.opts;e=t=i.nextNode(),"document"!==t.tagName&&(e=new p,e.appendChild(t)),e.nodeType=9,f.getScanner("div").scan(t,i,a);var l=n(e);l&&a.autoParagraph&&r(l),o(e);var u,c=this.originalHTML,d=new h;return u=/^(<!doctype|<html|<body)/i.test(c)?e.childNodes:l.childNodes,s.each(u,function(t){d.appendChild(t)}),d},parse:function(){return this.elements()}},l.Parser=t=e,t}(),$=function(t){var e=g,n=S,r=H,a=d,s=T,l=p,u=f,c=b,h=N,m=C,y=v;return t={version:"1.0.2",Utils:i,CData:c,Comment:h,Node:o,Tag:m,Text:y,Lexer:n,Parser:r,BasicWriter:a,BeautifyWriter:s,MinifyWriter:l,Filter:u,DTD:e,serialize:function(t,e){var n=new a;return t.writeHtml(n,e),n.getHtml()},parse:function(t){return new r(t).parse()}}}(),n.exports=$});