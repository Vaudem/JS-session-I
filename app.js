
var log = function(data){
	console.log(data);
}



// exercice 1
log('------ exercice 1 ------');

var displayTextBox = function(msg) {
	window.alert(msg);
};

displayTextBox("hello");
displayTextBox("world");



// exercice 2
log('------ exercice 2 ------');

var sentence = function(a, b){
	log(a + b);  // ou (a + " " + b) pour mettre direct l'espace
};

sentence("C'est une belle journée", " pour s'exercer sur JS!");



//exercice 3
log('------ exercice 3 ------');

/* var isNumber = function(a,b){
	var result = a * b;
	if (isNaN(result)) return "ceci n'est pas un nombre !";
	else return result;
};

log(isNumber(3,"a")); */

/*var isNumber = function(a,b){
	var result = a * b;
	if (Number(result)) return result;
	else return "ceci n'est pas un nombre";
};

log(isNumber(3,2));
log(isNumber(3,"a"));
//ok mais avec 0 il affiche "ceci n'est pas un nombre"*/


var isNumber = function(a,b){
	var result = a * b;
	if (Number.isFinite(result) == true) return result;
	else return "ceci n'est pas un nombre" && alert("exercice 3 = not a number");
};

log(isNumber(3,2));
log(isNumber(3,"a"));





//exercice 4
log('------ exercice 4 ------');


var user1 = {
	name : "Jean",
	age : 23
};

var user2 = {
	name : "Jeannine",
	age : 25
};


var getName = function(user){
	return user.name;
};

log(getName(user1));


var getAge = function(user){
	return user.age;
};

log(getAge(user2));

var displayUserInfo = function(user){
	return `<br> Cet utilisateur se nommant ${user.name} est âgé(e) de ${user.age} ans.`

};

log(displayUserInfo(user1));



var getDiv = function(user){
	var DivCible = document.getElementById("res_user");
	DivCible.innerHTML += displayUserInfo(user);
	return DivCible;
};

log(getDiv(user1));
log(getDiv(user2));



//exercice 5
log('------ exercice 5 ------');


var afficheID = function(){
var DivParent = document.getElementById("grandediv");
log(DivParent);
log(DivParent.children);
var getParagraph = document.getElementById("ptext");
log (getParagraph);

	for(var i=0; i < DivParent.children.length; i++){
		log(DivParent.children[i]);
		log(DivParent.children[i].id); 
		getParagraph.innerHTML += "id n°" + [i+1] + ": " + DivParent.children[i].id + "<br>";
		
	};
};


afficheID();


//exercice 6
log('------ exercice 6 ------');

var colorDiv = function(a,b,c,d,e){
	var select = document.querySelector(a);
	select.addEventListener('click', function(){
		this.style.backgroundColor = 'red';});
	var select = document.querySelector(b);
	select.addEventListener('click', function(){
		this.style.backgroundColor = 'blue';});
	var select = document.querySelector(c);
	select.addEventListener('click', function(){
		this.style.backgroundColor = 'yellow';});
	var select = document.querySelector(d);
	select.addEventListener('click', function(){
		this.style.backgroundColor = 'pink';});
	var select = document.querySelector(e);
	select.addEventListener('click', function(){
		this.style.backgroundColor = 'green';});



};

colorDiv("#div_1", "#div_2", "#div_3", "#div_4", "#div_5");





// version Alexandre
var changebgall = function(s, color){
//var elm = document.querySelectorAll(s); 
var elm = document.getElementsByClassName(s);
var changebg = function(event) {
	event.target.style.backgroundColor = color;
	console.log("---- typeof ----");
	console.log(typeof event);
};

var i;
for(i=0; i< elm.length; i++){
	elm[i].addEventListener("click", changebg)
};
};

changebgall("alex","red");





//version Julie

(function exo6() {
	var div1 = document.getElementsByClassName("julie");
for (var i=0; i < div1.length ; i++){
	div1[i].addEventListener("click",changeColor);
};
}());

function changeColor(){
	this.style.backgroundColor = "green";
};
 //fonction encapsulée 


















































