
document.addEventListener('click', function(e){
  if(e.target && e.target.classList.contains('add-to-cart')){
    const button = e.target;
    button.textContent = "Added to Cart ";
    button.style.backgroundColor = "#28a745"; // green color
    button.style.color = "white"; // text white
    button.disabled = true; // optional: disable button
  }
});
function scrollToOrder(){
 document.getElementById('order').scrollIntoView({behavior:'smooth'});
}

/* Map */
var map = L.map('map').setView([24.8607,67.0011],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([24.8607,67.0011]).addTo(map).bindPopup('Java Buzz').openPopup();

/* Blog Load */
fetch('blogs.json')
.then(r=>r.json())
.then(data=>{
 const c=document.getElementById('blogContainer');
 data.forEach(b=>{
  c.innerHTML+=`
   <div class="card">
    <img src="${b.img}">
    <div class="card-body">
     <h3>${b.title}</h3>
     <p>${b.text}</p>
    </div>
   </div>`;
 });
});