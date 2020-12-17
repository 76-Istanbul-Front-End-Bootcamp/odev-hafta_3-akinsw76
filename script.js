//Select
var petsTable = document.getElementById("petsTable");
var tBody = petsTable.querySelector("tbody");
var divImg = document.getElementById('divImg-1');
//URL
var urlCat ="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg";
var urlMnk ="https://cdn.mos.cms.futurecdn.net/bQgcMwEnyhFu6ASuUFrtsn-1200-80.jpg";
tBody.addEventListener("click",run);

function run(e){
//Event Delegation
  if(e.target.textContent === "Mila"){
  addToUI("Mila");
  }if(e.target.textContent === "4"){
  addToUI("4");
  }if(e.target.textContent === "Charlie"){
  addToUI("Charlie");
  }if(e.target.textContent === "2"){
  addToUI("2");
  }

}

function addToUI(Value){

  if(Value === "Mila") {

    var Img0 = document.createElement('img');
    Img0.src = urlCat;
    divImg.appendChild(Img0);

  }else if (Value === "4") {
    var Img0 = document.createElement('img');
    Img0.src=urlCat;
    divImg.appendChild(Img0);
  } else if (Value ==="Charlie") {
    var Img0 = document.createElement('img');
    Img0.src=urlMnk;
    divImg.appendChild(Img0);
  }else if (Value === "2") {
    var Img0 = document.createElement('img');
    Img0.src=urlMnk;
    divImg.appendChild(Img0);
  }
}

class Animal{
  constructor (name){
    this.name = name;
  }
  action(){
    document.getElementById(this.actionSoundName).play();
  }

  putInTheDocument(){

    var petTR = document.createElement("tr");

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
  }
}

class Cat extends Animal{
  constructor (name) {
    super(name);
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
  }
}

class Monkey extends Animal{
  constructor(name){
    super(name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
  }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
