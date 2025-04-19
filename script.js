// Part 1: Setting Up Classes

console.log("Part 1: Setting Up Classes")

class ProductProperties {
    // Constructor method
    constructor( name, price, quantity){
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }

    // Method  Returns the total value of the product in stock (price * quantity)
    getTotalValue(){
        console.log(this.price * this.quantity)
        return this.price * this.quantity
    }
}