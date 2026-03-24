function iniciar(){
  document.querySelector(".btn").style.display="none";
  document.getElementById("contenido").style.display="block";

  let audio = document.getElementById("audio");
  audio.play().catch(()=>{});
}