const countPeople = document.querySelector('#countPeople');
const txtZero = document.querySelector('#txtZero');
const bill = document.querySelector('#bill');
let percents = document.querySelectorAll('.percentTip');
const total = document.querySelector('#total');
const reset = document.querySelector('#reset');
const tip = document.querySelector('#tipAmount');
const txtCustom = document.querySelector('.txtCustom');
const custom1 = document.querySelector('.custom1');

txtCustom.addEventListener('click',function(){
		custom1.style.display='block';
});

custom1.addEventListener('input',function(){
			const billValue = parseFloat(bill.value) || 0;
			const peopleValue = parseInt(countPeople.value)||0;
			let customTip = parseFloat(custom1.value)/100;
			tip.innerHTML = `$${((billValue * customTip) / peopleValue).toFixed(2)}`; 
	    total.innerHTML =`$${((billValue + (billValue * customTip)/peopleValue ).toFixed(2))}`;
	    if (custom1.value ==='' || custom1.value === 0 ) {
	    	tip.innerHTML =`$0.00`;
	    	total.innerHTML=`$0.00`;
	    }

	    if (billValue===0 || peopleValue===0) {
	    	tip.innerHTML =`$0.00`;
	    	total.innerHTML=`$0.00`;
	    }
});

percents.forEach(btn => {
  btn.addEventListener('click', () => {
  		const billValue = parseFloat(bill.value) || 0;
			const peopleValue = parseInt(countPeople.value)||0;
	    percents.forEach(btn => btn.classList.remove('active'));
	    btn.classList.add('active');
	    let btnTip = parseFloat(btn.innerHTML)/100;
	    tip.innerHTML = `$${((billValue * btnTip) / peopleValue).toFixed(2)}`; 
	    total.innerHTML =`$${((billValue + (billValue * btnTip)/peopleValue ).toFixed(2))}`;
    }); 	
});

bill.addEventListener('input',function(){
const billValue = parseFloat(bill.value) || 0;
const peopleValue = parseInt(countPeople.value)||0;
	if (peopleValue === 0 && billValue > 0) {
		txtZero.style.display='block';
		countPeople.style.border = '1px solid red';	
	}else if (peopleValue === 0 && billValue === 0) {
		txtZero.style.display='none';
		countPeople.style.border = '1px solid lightgrey';		
	}

	if(peopleValue > 0 && billValue > 0){
		total.innerHTML =`$${((billValue/peopleValue ).toFixed(2))}`;
	}else{
		total.innerHTML=`$0.00`;
		tip.innerHTML=`$0.00`;
	}
});

countPeople.addEventListener('input',function(){
	const billValue = parseFloat(bill.value) || 0;
	const peopleValue = parseInt(countPeople.value) || 0;
	

	if (peopleValue > 0 ) {
		txtZero.style.display='none';	
		countPeople.style.border = '1px solid lightgrey';		
	}else if(peopleValue === 0 && billValue > 0){
		txtZero.style.display='block';
		countPeople.style.border = '1px solid red';	
	}

	if(peopleValue > 0 && billValue > 0 ){
		total.innerHTML =`$${((billValue/peopleValue ).toFixed(2))}`;
	}else{
		total.innerHTML=`$0.00`;
		tip.innerHTML=`$0.00`;
	}

	if(peopleValue > 0 && billValue > 0 && custom1.value > 0){
			let customTip = parseFloat(custom1.value)/100;
			tip.innerHTML = `$${((billValue * customTip) / peopleValue).toFixed(2)}`; 
	    total.innerHTML =`$${((billValue + (billValue * customTip)/peopleValue ).toFixed(2))}`;	
	}
});

function clearForm(){
	total.innerHTML=`$0.00`;
	tip.innerHTML=`$0.00`;
	bill.value='';
	countPeople.value='';
	txtZero.style.display='none';	
	countPeople.style.border = '1px solid lightgrey';		
	custom1.style.display='none';
	custom1.value='';
	percents.forEach(btn => {
	    percents.forEach(btn => btn.classList.remove('active'));
	});
}

reset.addEventListener('click',function(){
		clearForm();
});


