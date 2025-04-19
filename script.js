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
            discountedPrice = Math.round(discountedPrice * 100) / 100
            product.price = discountedPrice

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
console.log("Product with discounted price:")
perishableProduct1.toString()
perishableProduct2.toString()
console.log(`\n`)


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
    findProductByName(name){
        let product = this.inventory.find((product) => product.name === name)
        console.log(product)
        if(typeof product !== "undefined"){
            console.log("Found product: " + product.name)
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
console.log(`\n`)


// Part 5: Testing the System
console.log("Part 5: Testing the System")
// Create at least 5 products, including at least 2 PerishableProduct objects
let product1 = new ProductProperties("Banana", 2.00, 20)
let product2 = new ProductProperties("Watermelon", 8.00, 5)
let product3 = new ProductProperties("Cheese", 6.00, 30)
let product4 = new PerishableProductProperties("Chicken", 12.00, 15, "2025-05-01")
let product5 = new PerishableProductProperties("Beef", 15.00, 9, "2025-08-12")

// Add these products to a Store object.
let store = new StoreClassProperites()

// Create array of products
let myProducts = [product1, product2, product3, product4, product5]

// Add products to store
console.log("Add products to store")
for(const product of myProducts){
    store.addProduct(product)
}

console.log(store.inventory)
console.log(`\n`)

// Print the total inventory value before applying a 15% discount
console.log("Total value Before discount")
store.getInventoryValue()
console.log(`\n`)

// // Print the total inventory value after applying a 15% discount
// Discount items
ProductProperties.applyDiscount(myProducts, 0.15)


console.log("Total value after discount")
store.getInventoryValue()
console.log(`\n`)

// Find and print the details of a specific product by its name.
let specificProduct = store.findProductByName("Chicken")
specificProduct.toString()




// JS for HTML

// Product details
const nameInput = document.getElementById("name")
const priceInput = document.getElementById("price")
const quantityInput = document.getElementById("quantity")
const expiryInput = document.getElementById("expiry")

// Discount input
const discountInput = document.getElementById("discount")

// Search Input
const searchInput = document.getElementById("searchName")

// Display
const displayDiv = document.getElementById("display")
const valueDisplay = document.getElementById("valueDisplay")

// Buttons
const createBtn = document.getElementById("createClass")
const discountBtn = document.getElementById("applyDiscount")
const findBtn = document.getElementById("find")
const getValueBtn = document.getElementById("getValue")
const displayAllBtn = document.getElementById("displayAll")

// Create store

let userStore = new StoreClassProperites()


// Validation

function isNumber(str){
    console.log(isNaN(str.trim()))
    if (isNaN(str)) {
        return false;
      }
      return true;
}

function notEmpty(){
    if(
        nameInput.value.trim() != "" &&
        priceInput.value.trim() != "" &&
        quantityInput.value.trim() != ""  
    ){
        console.log("not Empty")
        return true
    }else{
        console.log("empty")
        return false
    }
}

function validateNum(){
    if(
        isNumber(priceInput.value) &&
        isNumber(quantityInput.value)
    ){
        return true
    }else{
        return false
    }
}


function validateForm(){
    if(
        notEmpty() &&
        expiryInput.value.trim() != "" &&
        validateNum()
    ){
        pushPerishableProductProperties() 
        displayDiv.textContent = JSON.stringify(userStore.inventory)
    }else if(
        notEmpty() &&
        validateNum()
    ){
        pushProducProperties()
        displayDiv.textContent = JSON.stringify(userStore.inventory)
    }else{
        alert("Please fill in required fields with correct value types")
    }
}

function pushPerishableProductProperties(){
    let product = new PerishableProductProperties(
        nameInput.value,
        parseInt(priceInput.value),
        parseInt(quantityInput.value),
        expiryInput.value
    )
    userStore.addProduct(product)
}

function pushProducProperties(){
    let product = new ProductProperties(
        nameInput.value,
        parseInt(priceInput.value),
        parseInt(quantityInput.value)
    )
    userStore.addProduct(product)
}

createBtn.addEventListener("click", function(e){
    e.preventDefault()
    validateForm()
})

function noInventory(){
    if(userStore.inventory.length != 0){
        return false
    }else{
        return true
    }
}


function discountProducts(){
    if(discountInput.value.trim() != "" && 
        isNumber(discountInput.value) &&
        noInventory() != true
    ){
        let discount = parseInt(discountInput.value.trim()) / 100
        for(let product of userStore.inventory){
            ProductProperties.applyDiscount(userStore.inventory, discount)
            displayDiv.textContent = JSON.stringify(userStore.inventory)
        }
    }else if(noInventory()){
        alert("Add products")
    }
    else{
        alert("Please fill in required fields with correct value types")
    }
}

discountBtn.addEventListener("click", function(){
    discountProducts()
})

findBtn.addEventListener("click", function(){
    if(noInventory()){
        alert("Add products")
    }else if (searchInput.value.trim() != ""){
        let product = userStore.findProductByName(searchInput.value.trim())
        console.log(product)
        if(product ){  
            displayDiv.textContent = JSON.stringify(product)
        }else{
            alert("Not found")
        }

    }else{
        alert("Please insert field")
    }
})

getValueBtn.addEventListener("click", function(){
    let value = userStore.getInventoryValue()
    valueDisplay.innerHTML = value
})

displayAllBtn.addEventListener("click", function(){
    displayDiv.textContent = JSON.stringify(userStore.inventory)
})