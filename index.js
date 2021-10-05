function calculateTip() {
    const amountBillElement = document.getElementById('amountBill');
    const percentageTipElement = document.getElementById('percentageTip');
    const peopleNumberElement = document.getElementById('peopleNumber');

    const billAmount = Math.abs(parseInt(amountBillElement.value));
    const tipPercentage = Math.abs(parseInt(percentageTipElement.value));
    const peolpeNumber = Math.abs(parseInt(peopleNumberElement.value));

    amountBillElement.value = billAmount;
    percentageTipElement.value = tipPercentage;
    peopleNumberElement.value = peolpeNumber;
    try {
        if(billAmount == null) throw "empty";
        if(isNaN(billAmount)) throw "not a number";
       
      }
      catch(err) {
        alert(err);
      }
    

    const totalTip = Math.floor((billAmount * (tipPercentage/100)) / peolpeNumber);
    const totalToPay = Math.floor(billAmount +(billAmount*(tipPercentage/100)));
    const tipPerPerson = totalToPay/peolpeNumber;
    
    
    document.getElementById('tipAmount').innerText = totalTip;
   
    document.getElementById('perPerson').innerText = tipPerPerson;
}
