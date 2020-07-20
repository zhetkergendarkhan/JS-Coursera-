var languages= ["C++","Java","Python"];
var name= prompt("What is your name?");

if(name.length!=0){
document.write("hello" +  name);
}
else
document.write("You did not enter the name");

function loadingFunc(){
	document.getElementById('langu').innerHTML= languages;
}

function myFunc(){
	var language= prompt("Add your lang of programming");
	 
	languages[languages.length]= language;
	document.getElementById('langu').innerHTML= languages;

}