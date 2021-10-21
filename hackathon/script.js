//create html body
document.body.innerHTML=`
<h1>CATS</h1>
<div class="search">
<input class="input" type = "text"  id = "txtSearch"  onkeydown = "if (event.keyCode == 13)document.getElementById('btnSearch').click()" placeholder="Enter below tags name then press 'enter' for search cats.."  />
<input class="button" type = "button"   id = "btnSearch"  value = "Search"  onclick = "searchcats();"/>

</div>
<section class="catdisplay"></section>
<section class="usercontent">
</section>
`
//display screen function
async function getallusers() {
    const data = await fetch ("https://cataas.com/api/cats");
    const users = await data.json();
    const usercontainer =document.querySelector(".usercontent")

    users.forEach((cats)=>{
    usercontainer.innerHTML+= `
    
<div class="content"><p></p>
<ul id="myUL">
<li>${cats.tags[0]}</li>
<img src="https://cataas.com/cat/${cats.id}"alt="cataas.com/cat">
</ul>
</div>
    `;
});
 
    
}
getallusers();
//search function 
async function searchcats(){
   console.log("srch");
   const tag=document.querySelector(".input").value;
   console.log(tag);

   const data = await fetch("https://cataas.com/cat/"+tag)
   console.log(data);
   const usercontainer =document.querySelector(".catdisplay")
   
    usercontainer.innerHTML+= `
    
<div class="display">
<h3 class="searchtag">${tag}</h3>

<img class="showcat" src="${data.url}" alt="cataas.com/cat">
 
</div>
    `
}
    

