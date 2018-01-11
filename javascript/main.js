function hideSection(){
  alert("hideSection()> debug");
  document.getElementById("section_button").style.display = "block";
  document.getElementById("panel").style.display = "none";
}


function showSection(){
  document.getElementById("section_button").style.display = "none";
  document.getElementById("panel").style.display = "block";

}

function jaiDeLaChance(){
  let text = "J'ai de la chance!!!"
  alert(text);
  text = text.replace(/ /g, "+");
  alert(text);
}

function updateInput(){
  let text = document.getElementById("google").value;
  alert(text);
  text = text.replace(/ /g, "+");
  alert(text);
}
