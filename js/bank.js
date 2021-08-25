// get the input value using this function
function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const amount = parseFloat(inputText);

    input.value = '';
    return amount ;
};

//update total function
function updateTotal(totalId, amount){

    let totalField = document.getElementById(totalId);
    const previousTotal = parseFloat(totalField.innerText);
    const newTotal = previousTotal + amount ;

    totalField.innerText = newTotal;
};

//get balance
function getBalance(){
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const amount = parseFloat(balanceText);

    return amount ;
};


//update Balance function
function upgradedBalance(amount, add){

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotal = getBalance();

    if (add == true) {
       balanceTotal.innerText = previousBalanceTotal + amount ;
    } 
    else if (add == false) {
        balanceTotal.innerText = previousBalanceTotal - amount ;
    } 
        
};





// deposit event
document.getElementById('deposit-button').addEventListener('click',function(){

    const getAmount = getInput('deposit-amount');
    
    if (getAmount > 0 && getAmount != String) {
         updateTotal('deposit-total', getAmount);
         upgradedBalance (getAmount , true);

    }
});

// withdraw event
document.getElementById('withdraw-button').addEventListener('click',function(){

    const getAmount = getInput('withdraw-amount');
    if(getAmount > 0 && getAmount != String ) {
        updateTotal('withdraw-total', getAmount);
        upgradedBalance (getAmount , false);   
    }
});
