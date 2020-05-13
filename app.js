console.log('it works!!!');

const checkBox = document.querySelector('#checkbox-prices');
const basicPrice = document.querySelector('#price-basic');
const profPrice = document.querySelector('#price-pro');
const masterPrice = document.querySelector('#price-master');



checkBox.addEventListener('click', function(e){
     if(this.checked){
       setMonthlyPrice();
     }

     else{
         setAnnualPrice();
     }
});


const setMonthlyPrice = () => {
    basicPrice.innerHTML = "&dollar;19.99";
    profPrice.innerHTML = "&dollar;24.99"
    masterPrice.innerHTML = "&dollar;39.99"
}

const setAnnualPrice = () => {
    basicPrice.innerHTML = "&dollar;199.99";
    profPrice.innerHTML = "&dollar;249.99"
    masterPrice.innerHTML = "&dollar;399.99"
}
