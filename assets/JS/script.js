// definition de la fonction afin d'afficher le resultat
function result(){
  // definition des variable permettant d'effectuer le calcul
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // definition de la fonction mathfloor afin d'afficher l'entier
  var integer = Math.floor(firstNumber);
  // calcul
  var res = integer % secondNumber;
  alert(res);
  // deifinition de la variable regex
  var regex = /^[^a-zA-Z\-éèêëïäîç\d{0,3},)?(\d{3},)?\d{0,3}]+$/;
  // condition pour la regex afin d'éviter les conflits
  if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
    alert('');
  }else{
}
}
