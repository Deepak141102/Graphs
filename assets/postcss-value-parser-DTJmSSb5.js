var E=40,k=41,I=39,m=34,b=92,C=47,P=44,q=58,w=42,S=117,V=85,X=43,_=/^[a-f0-9?-]+$/i,j=function(c){for(var s=[],t=c,r,d,f,e,o,u,i,h,n=0,a=t.charCodeAt(n),O=t.length,v=[{nodes:s}],A=0,l,x="",y="",g="";n<O;)if(a<=32){r=n;do r+=1,a=t.charCodeAt(r);while(a<=32);e=t.slice(n,r),f=s[s.length-1],a===k&&A?g=e:f&&f.type==="div"?(f.after=e,f.sourceEndIndex+=e.length):a===P||a===q||a===C&&t.charCodeAt(r+1)!==w&&(!l||l&&l.type==="function"&&l.value!=="calc")?y=e:s.push({type:"space",sourceIndex:n,sourceEndIndex:r,value:e}),n=r}else if(a===I||a===m){r=n,d=a===I?"'":'"',e={type:"string",sourceIndex:n,quote:d};do if(o=!1,r=t.indexOf(d,r+1),~r)for(u=r;t.charCodeAt(u-1)===b;)u-=1,o=!o;else t+=d,r=t.length-1,e.unclosed=!0;while(o);e.value=t.slice(n+1,r),e.sourceEndIndex=e.unclosed?r:r+1,s.push(e),n=r+1,a=t.charCodeAt(n)}else if(a===C&&t.charCodeAt(n+1)===w)r=t.indexOf("*/",n),e={type:"comment",sourceIndex:n,sourceEndIndex:r+2},r===-1&&(e.unclosed=!0,r=t.length,e.sourceEndIndex=r),e.value=t.slice(n+2,r),s.push(e),n=r+2,a=t.charCodeAt(n);else if((a===C||a===w)&&l&&l.type==="function"&&l.value==="calc")e=t[n],s.push({type:"word",sourceIndex:n-y.length,sourceEndIndex:n+e.length,value:e}),n+=1,a=t.charCodeAt(n);else if(a===C||a===P||a===q)e=t[n],s.push({type:"div",sourceIndex:n-y.length,sourceEndIndex:n+e.length,value:e,before:y,after:""}),y="",n+=1,a=t.charCodeAt(n);else if(E===a){r=n;do r+=1,a=t.charCodeAt(r);while(a<=32);if(h=n,e={type:"function",sourceIndex:n-x.length,value:x,before:t.slice(h+1,r)},n=r,x==="url"&&a!==I&&a!==m){r-=1;do if(o=!1,r=t.indexOf(")",r+1),~r)for(u=r;t.charCodeAt(u-1)===b;)u-=1,o=!o;else t+=")",r=t.length-1,e.unclosed=!0;while(o);i=r;do i-=1,a=t.charCodeAt(i);while(a<=32);h<i?(n!==i+1?e.nodes=[{type:"word",sourceIndex:n,sourceEndIndex:i+1,value:t.slice(n,i+1)}]:e.nodes=[],e.unclosed&&i+1!==r?(e.after="",e.nodes.push({type:"space",sourceIndex:i+1,sourceEndIndex:r,value:t.slice(i+1,r)})):(e.after=t.slice(i+1,r),e.sourceEndIndex=r)):(e.after="",e.nodes=[]),n=r+1,e.sourceEndIndex=e.unclosed?r:n,a=t.charCodeAt(n),s.push(e)}else A+=1,e.after="",e.sourceEndIndex=n+1,s.push(e),v.push(e),s=e.nodes=[],l=e;x=""}else if(k===a&&A)n+=1,a=t.charCodeAt(n),l.after=g,l.sourceEndIndex+=g.length,g="",A-=1,v[v.length-1].sourceEndIndex=n,v.pop(),l=v[A],s=l.nodes;else{r=n;do a===b&&(r+=1),r+=1,a=t.charCodeAt(r);while(r<O&&!(a<=32||a===I||a===m||a===P||a===q||a===C||a===E||a===w&&l&&l.type==="function"&&l.value==="calc"||a===C&&l.type==="function"&&l.value==="calc"||a===k&&A));e=t.slice(n,r),E===a?x=e:(S===e.charCodeAt(0)||V===e.charCodeAt(0))&&X===e.charCodeAt(1)&&_.test(e.slice(2))?s.push({type:"unicode-range",sourceIndex:n,sourceEndIndex:r,value:e}):s.push({type:"word",sourceIndex:n,sourceEndIndex:r,value:e}),n=r}for(n=v.length-1;n;n-=1)v[n].unclosed=!0,v[n].sourceEndIndex=t.length;return v[0].nodes},z=function c(s,t,r){var d,f,e,o;for(d=0,f=s.length;d<f;d+=1)e=s[d],r||(o=t(e,d,s)),o!==!1&&e.type==="function"&&Array.isArray(e.nodes)&&c(e.nodes,t,r),r&&t(e,d,s)};function $(c,s){var t=c.type,r=c.value,d,f;return s&&(f=s(c))!==void 0?f:t==="word"||t==="space"?r:t==="string"?(d=c.quote||"",d+r+(c.unclosed?"":d)):t==="comment"?"/*"+r+(c.unclosed?"":"*/"):t==="div"?(c.before||"")+r+(c.after||""):Array.isArray(c.nodes)?(d=N(c.nodes,s),t!=="function"?d:r+"("+(c.before||"")+d+(c.after||"")+(c.unclosed?"":")")):r}function N(c,s){var t,r;if(Array.isArray(c)){for(t="",r=c.length-1;~r;r-=1)t=$(c[r],s)+t;return t}return $(c,s)}var B=N,U,R;function D(){if(R)return U;R=1;var c=45,s=43,t=46,r=101,d=69;function f(e){var o=e.charCodeAt(0),u;if(o===s||o===c){if(u=e.charCodeAt(1),u>=48&&u<=57)return!0;var i=e.charCodeAt(2);return u===t&&i>=48&&i<=57}return o===t?(u=e.charCodeAt(1),u>=48&&u<=57):o>=48&&o<=57}return U=function(e){var o=0,u=e.length,i,h,n;if(u===0||!f(e))return!1;for(i=e.charCodeAt(o),(i===s||i===c)&&o++;o<u&&(i=e.charCodeAt(o),!(i<48||i>57));)o+=1;if(i=e.charCodeAt(o),h=e.charCodeAt(o+1),i===t&&h>=48&&h<=57)for(o+=2;o<u&&(i=e.charCodeAt(o),!(i<48||i>57));)o+=1;if(i=e.charCodeAt(o),h=e.charCodeAt(o+1),n=e.charCodeAt(o+2),(i===r||i===d)&&(h>=48&&h<=57||(h===s||h===c)&&n>=48&&n<=57))for(o+=h===s||h===c?3:2;o<u&&(i=e.charCodeAt(o),!(i<48||i>57));)o+=1;return{number:e.slice(0,o),unit:e.slice(o)}},U}var F=j,Q=z,L=B;function p(c){return this instanceof p?(this.nodes=F(c),this):new p(c)}p.prototype.toString=function(){return Array.isArray(this.nodes)?L(this.nodes):""};p.prototype.walk=function(c,s){return Q(this.nodes,c,s),this};p.unit=D();p.walk=Q;p.stringify=L;var G=p;export{G as l};
