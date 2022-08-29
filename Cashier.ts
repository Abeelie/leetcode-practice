class Cashier {
    receiverOfDiscount: number
    discount: number
    nThPerson: number
    store: {}
    
    constructor(n, discount, products, prices){
        this.receiverOfDiscount = n;
        this.discount = discount;
        this.nThPerson = 1;
        this.store = {};
        
        for(let i = 0; i < products.length; i++){
            const productID: number = products[i];
            const price: number = prices[i];
            this.store[productID] = price;    
        }

    }
    
    getBill(product, amount) : number{
        let bill: number = 0;
        let j: number = 0;
        
        for(const id of product){
            if(id in this.store){
                bill += (this.store[id] * amount[j]);
                j++;
            }
        }
        
        if(this.nThPerson === this.receiverOfDiscount){
            this.nThPerson = 1;
            return bill * ((100 - this.discount) / 100);
        }
        
        this.nThPerson++;
        
        return bill;
    }
}