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

    // Method  Returns a string representation of the product (e.g., "Product: Apple, Price: $2.50, Quantity: 50")
    toString(){
        let string = `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`
        console.log(string)
        return string
    }

}

// create new ProductProperties with arguments to pass for the neme, price, and quantity
let product = new ProductProperties("Apple", 3, 10)

