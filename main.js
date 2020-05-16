setTimeout(function(){
	window.onload=location.href="#home";
		home();

},100);

window.addEventListener('hashchange', function(){
	if (location.hash == "#home") {
		setTimeout(function(){
			home();
		},100);
	}
});


// FUNCTION HOME


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


function home(){
	setTimeout(function(){
		// if (location.hash=="#home" || location.hash=="#home2" ) {
			var save = JSON.parse(localStorage.getItem('saves'));
			var savemsr1 = JSON.parse(localStorage.getItem('savemsr'));
			var foo=document.getElementById("foodiv");
			foo.innerHTML="";
			
			for(var i=0; i<save.length; i++){
				var date = save[i].date;
				var time = save[i].time;
				var blood = save[i].blood;
				var insulin = save[i].insulin;
				var carbs = save[i].carbs;
				var meal = save[i].meal;

				if(date==today){

				foo.innerHTML+= 
				'<div class="card bg-light" style="width: auto; height: auto; margin: 1em;">'+
  				'<div class="card-body">'+
  				'<h4 class="card-title">Today</h4>'+
    			'<h5 class="card-title">Time : '+time+'</h5>'+
    			'<p class="card-text">Blood : '+blood+'</p>'+
    			'<p class="card-text">Insulin : '+insulin+'</p>'+
    			'<p class="card-text">Carbs : '+carbs+'</p>'+
    			'<p class="card-text">Meal : '+meal+'</p>'+
    			'</div></div>'; }
    			else{
    				foo.innerHTML+=
    				'<div class="card bg-light" style="width: auto; height: auto; margin: 1em;">'+
  				'<div class="card-body">'+
  				'<h4 class="card-title">Date : '+date+'</h4>'+
    			'<h5 class="card-title">Time : '+time+'</h5>'+
    			'<p class="card-text">Blood : '+blood+'</p>'+
    			'<p class="card-text">Insulin : '+insulin+'</p>'+
    			'<p class="card-text">Carbs : '+carbs+'</p>'+
    			'<p class="card-text">Meal : '+meal+'</p>'+
    			'</div></div>'

    			}
				
				
			}

			var foo1=document.getElementById("foodiv1");
			foo1.innerHTML="";

			for(var j=0; j<savemsr1.length; j++){
				var date1 = savemsr1[j].date1;
				var time1 = savemsr1[j].time1;
				var	blood1 = savemsr1[j].blood1
				var	insulinf = savemsr1[j].insulinf
				var	insulinc = savemsr1[j].insulinc
				var	insulinl = savemsr1[j].insulinl
				var	pills = savemsr1[j].pills
				var	act = savemsr1[j].act
				var	bd = savemsr1[j].bd
				var	hyp = savemsr1[j].hyp
				
				if (date1==today) {
				foo1.innerHTML+= 
				'<div class="card bg-light" style="width: auto; height: auto; margin: 1em;">'+
  				'<div class="card-body">'+
  				'<h4 class="card-title">Today</h4>'+
    			'<h5 class="card-title">Time : '+time1+'</h5>'+
    			'<p class="card-text">Blood : '+blood1+'</p>'+
    			'<p class="card-text">Insulin(food) : '+insulinf+'</p>'+
    			'<p class="card-text">Insulin(corr.) : '+insulinc+'</p>'+
    			'<p class="card-text">Insulin(long acting) : '+insulinl+'</p>'+
    			'<p class="card-text">Pills : '+pills+'</p>'+
    			'<p class="card-text">Activity : '+act+'</p>'+
    			'<p class="card-text">Body Weight : '+bd+'</p>'+
    			'<p class="card-text">Hypoglycemia : '+hyp+'</p>'+
    			'</div></div>';
				}
				else{
				foo1.innerHTML+= 
				'<div class="card bg-light" style="width: auto; height: auto; margin: 1em;">'+
  				'<div class="card-body">'+
  				'<h4 class="card-title">Date : '+date+'</h4>'+
    			'<h5 class="card-title">Time : '+time1+'</h5>'+
    			'<p class="card-text">Blood : '+blood1+'</p>'+
    			'<p class="card-text">Insulin(food) : '+insulinf+'</p>'+
    			'<p class="card-text">Insulin(corr.) : '+insulinc+'</p>'+
    			'<p class="card-text">Insulin(long acting) : '+insulinl+'</p>'+
    			'<p class="card-text">Pills : '+pills+'</p>'+
    			'<p class="card-text">Activity : '+act+'</p>'+
    			'<p class="card-text">Body Weight : '+bd+'</p>'+
    			'<p class="card-text">Hypoglycemia : '+hyp+'</p>'+
    			'</div></div>';
				}
				
			}
		// }
	}, 1500);
}



var buttonf=document.getElementById('btn');

buttonf=addEventListener('submit', saveFood);

let saves=JSON.parse(localStorage.getItem('saves')) || [];

// FUNCTION FOOD

function saveFood(ev){
	ev.preventDefault();

	var date= document.getElementById('date').value;
	
	var time= document.getElementById('time').value;

	var blood= document.getElementById('blood').value;

	var insulin= document.getElementById('insulin').value;

	var carbs= document.getElementById('carbs').value;

	var meal= document.getElementById('meal').value;

	let save={
		date: date,
		time: time,
		blood: blood,
		insulin: insulin,
		carbs: carbs,
		meal: meal
	}
	saves.push(save);
	localStorage.setItem('saves', JSON.stringify(saves));
	window.location.href="#home";
	home()
}

// FUNCTION MEASUREMENT

var buttonm=document.getElementById('btn2');

buttonm=addEventListener('submit', saveMesr);

let saveMsr=JSON.parse(localStorage.getItem('savemsr')) || [];

function saveMesr(ev){
	ev.preventDefault();	

	var date1= document.getElementById('date1').value;
	
	var time1= document.getElementById('time1').value;

	var blood1= document.getElementById('blood1').value;

	var insulinf= document.getElementById('insulinf').value;

	var insulinc= document.getElementById('insulinc').value;

	var insulinl= document.getElementById('insulinl').value;

	var pills= document.getElementById('pills').value;

	var act= document.getElementById('act').value;

	var bd= document.getElementById('bd').value;

	var hyp= document.getElementById('hyp').value;

	let saveM={
		date1: date1,
		time1: time1,
		blood1: blood1,
		insulinf: insulinf,
		insulinc: insulinc,
		insulinl: insulinl,
		pills: pills,
		act: act,
		bd: bd,
		hyp: hyp
	}
	saveMsr.push(saveM);
	localStorage.setItem('savemsr', JSON.stringify(saveMsr));
	
	window.location.href="#home";
	home()
}


