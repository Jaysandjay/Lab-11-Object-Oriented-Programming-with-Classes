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

// Call to string
console.log("toString()")
product.toString()

// Call get total value
console.log("getTotalValue()")
product.getTotalValue()

console.log(`\n`)


// Part 2: Adding Inheritance
console.log("Part 2: Adding Inheritance")

// Create a Subclass: PerishableProductProperties:
class PerishableProductProperties extends ProductProperties {
    // Constructor method
    constructor( name, price, quantity, experationDate){
        // call constructor of superclass
        super(name, price, quantity),
        // define new variable
        this.experationDate = experationDate
    }

    // Override toString() Adds the expiration date to the string representation
    toString(){
        let string = `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Experation Date: ${this.experationDate}`
        console.log(string)
        return string
    }
}

// Create at least two instances of this class with sample data
// Pass arguments to class
let perishableProduct1 = new PerishableProductProperties("Milk", 1.5, 5, "2025-06-20" )
let perishableProduct2 = new PerishableProductProperties("Asparagus", 4.00, 2, "2025-12-05" )
