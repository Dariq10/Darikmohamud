let username;

document.getElementById("mySubmit").onclick= function(){
  username= document.getElementById("username").value;
  console.log(username);
  document.getElementById("header").textContent=`hellow Mr ${username}`
}