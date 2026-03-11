function toggleMenu(){
const nav=document.getElementById('nav');
if(nav.style.display==="flex"){
nav.style.display="none";
}else{
nav.style.display="flex";
}
}

document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Thank you! Your booking request has been submitted.");
this.reset();
});
<script>
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
</script>