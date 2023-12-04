const treasure = (location) => {
  var bomb = Math.floor(Math.random() * 9)
  var treasure = Math.floor(Math.random() * 9)
  var tree = Math.floor(Math.random() * 9)
  
  if (bomb === treasure || bomb === 0) 
  {document.getElementById(location).innerHTML = "💣"
  alert ("boom!");
  
  document.getElementById("0").removeAttribute('onclick'); 
  document.getElementById("1").removeAttribute('onclick'); 
  document.getElementById("2").removeAttribute('onclick'); 
  document.getElementById("3").removeAttribute('onclick'); 
  document.getElementById("4").removeAttribute('onclick'); 
  document.getElementById("5").removeAttribute('onclick'); 
  document.getElementById("6").removeAttribute('onclick'); 
  document.getElementById("7").removeAttribute('onclick');
  document.getElementById("8").removeAttribute('onclick');  
  
  alert ("You have lost please restart game.")
  }
  else
  if (treasure != bomb && treasure === 7)
  {
      document.getElementById(location).innerHTML = "🌈"
      alert ("You're rich!"); 
      
      document.getElementById("0").removeAttribute('onclick'); 
      document.getElementById("1").removeAttribute('onclick'); 
      document.getElementById("2").removeAttribute('onclick'); 
      document.getElementById("3").removeAttribute('onclick'); 
      document.getElementById("4").removeAttribute('onclick'); 
      document.getElementById("5").removeAttribute('onclick'); 
      document.getElementById("6").removeAttribute('onclick'); 
      document.getElementById("7").removeAttribute('onclick');
      document.getElementById("8").removeAttribute('onclick'); 
  
      alert ("You are an awesome hunter! Please restart!")
  }
  else
  {document.getElementById(location).innerHTML = "🌴"}

  
 
return location
}




