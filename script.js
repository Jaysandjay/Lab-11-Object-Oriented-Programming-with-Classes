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

    // PART 3 Add a Static Method to the Product Class Method
    static applyDiscount(products, discount){
        for(let product of products){
            let discountedPrice = (product.price - (product.price * discount))
            product.price = discountedPrice
            console.log("Product with discounted price:")
            product.toString()
            console.log(`\n`)
        }
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

console.log("Instance 1 of perishable Product class")
console.log("toString()")
perishableProduct1.toString()
console.log("Total Value")
perishableProduct1.getTotalValue()
console.log(`\n`)

console.log("Instance 2 of perishable Product class")
console.log("toString()")
perishableProduct2.toString()
console.log("Total Value")
perishableProduct2.getTotalValue()
console.log(`\n`)



// Part 3: Static Methods and Properties
console.log("Part 3: Static Methods and Properties")
console.log(`\n`)
// Add a Static Method to the Product Class Method (SEE ABOVE FOR ADDED CONTENT)
// Call static method
ProductProperties.applyDiscount([perishableProduct1, perishableProduct2], 0.10)


// Part 4: Store Management
console.log("// Part 4: Store Management")

class StoreClassProperites {
    // constructor Method
    constructor(){
        this.inventory = []
    }

    // Adds a product to the inventory
    addProduct(product){
        this.inventory.push(product)
    }

    // Returns the total value of all products in the inventory
    getInventoryValue(){
        let total = 0
        for(const product of this.inventory){
            total += product.price
        }
        total = Math.round(total * 100) / 100
        console.log("The total value of the inventory is: $" + total)
        return total
    }

    // Finds a product by its name and returns it, or returns null if not found
    findProductBtName(name){
        let product = this.inventory.filter((product) => product.name === name)
        if(product){
            console.log("Found product: " + product.toString())
            return product
        }else{
            console.log("Not found")
            return null
        }
    }
}

// Create store instance
let inventory = new StoreClassProperites()

// Store products in inventory
inventory.addProduct(product)
inventory.addProduct(perishableProduct1)
inventory.addProduct(perishableProduct2)

console.log("Store products")
console.log(inventory.inventory)
console.log(`\n`)

// Get total Value
console.log("Get total value of all products")
inventory.getInventoryValue()