
let list ='';
console.log(typeof(list));
list+='<ul>';
list+='<li>Hello</li>';
list+='<li>javascript!</li>';
list+='</ul>';
        
list+='<table border>';
list+='<tr><th>&&</th><th>and</th></tr>';
list+='<tr><td> false </td><td> false </td><td> false </td></tr>';
list+='<tr><td> true </td><td> false </td><td> false </td></tr>';
list+='<tr><td> false </td><td> true </td><td> false </td></tr>';
list+='<tr><td> true </td><td> true </td><td> true </td></tr>';    
list+='</table>';

list+='<table border>';
list+='<tr><th>||</th><th>or</th></tr>';
list+='<tr><td> false </td><td> false </td><td> false </td></tr>';
list+='<tr><td> true </td><td> false </td><td> true </td></tr>';
list+='<tr><td> false </td><td> true </td><td> true </td></tr>';
list+='<tr><td> true </td><td> true </td><td> true </td></tr>';
list+='</table>';
document.write(list);   //list안에 있는 내용을 뿌려줘라 