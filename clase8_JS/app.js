const CalculateTotal = ({items, tax, discount}) => { 
    let valorTotal = 0;

    for(let i = 0; i < items.length; i++) { 
        valorTotal += items[i]; 
    } 

    valorTotal += valorTotal * tax; 

    if(discount>0){ 
        valorTotal -= valorTotal * discount; 
    } 

    return valorTotal.toFixed(2); 
} 

const totalPurchase = {
    items: [10, 20, 30],
    tax: 0.05,
    discount: 0.10,
};
 
const totalDeCompra = CalculateTotal(totalPurchase); 
   
console.log("Total: " + totalDeCompra);