// steps : 1 set the current element
document.getElementById('btn-deposit').addEventListener('click', function(){
// steps : 2
const depositFiled = document.getElementById('deposit-filed');
const newDepositAmountString = depositFiled.value;
const newDepositAmount = parseFloat(newDepositAmountString)
// console.log(typeof newDepositAmount);
// console.log(depositAmount);

// step- 3 
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString)
// console.log(typeof previousDepositTotal);


// step : 4
const currentDepositAmount = previousDepositTotal + newDepositAmount;



// step - 5 Add balance amount

const balanceTotal = document.getElementById('balance-total');
const newBalanceTotalString = balanceTotal.innerText;
const newBalanceTotal = parseFloat(newBalanceTotalString);
const currentBalance =  newBalanceTotal + newDepositAmount;


balanceTotal.innerText = currentBalance;




depositTotalElement.innerText = currentDepositAmount;


// clear the deposit filed
depositFiled.value = ' ';

})



























// btn-withdraw
// steps : 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
// steps : 2
         const withdrawFiled = document.getElementById('withdraw-filed');
         const withdrawAmountString = withdrawFiled.value;
         const withdrawAmount = parseFloat(withdrawAmountString)
     //     steps : 3 

     const widthTotalELement =  document.getElementById('width-total');
     const widthTotalString = widthTotalELement.innerText;
     const widthTotal = parseFloat(widthTotalString)
    //  console.log (typeof widthTotal);

    const currentWithdraw = widthTotal + withdrawAmount;

    // step : 4
     
    const balanceTotal2 = document.getElementById('balance-total');
    const newBalanceTotalString2 = balanceTotal2.innerText;
    const newBalanceTotal2 = parseFloat(newBalanceTotalString2);

    const currentBalance2 = newBalanceTotal2 - withdrawAmount;

    balanceTotal2.innerText = currentBalance2;

     widthTotalELement.innerText = currentWithdraw;


     
           // clear the deposit filed
           withdrawFiled.value = '';
})