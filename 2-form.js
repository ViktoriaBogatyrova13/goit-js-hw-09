import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.elements.email,n=t.elements.message,s="feedback-form-state";let e={email:"",message:""};function r(){localStorage.setItem(s,JSON.stringify(e))}function i(){const a=localStorage.getItem(s);a&&(e=JSON.parse(a),e.email&&(o.value=e.email),e.message&&(n.value=e.message))}t.addEventListener("input",a=>{const{name:m,value:l}=a.target;e[m]=l.trim(),r()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),t.reset(),localStorage.removeItem(s),e={email:"",message:""}});i();
//# sourceMappingURL=2-form.js.map
