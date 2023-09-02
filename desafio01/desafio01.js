class ProductManager {

    constructor() {
        this.products = []
        this.id = 0
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Error, completar los campos obligatorios")
        } else {
            const duplicateCode = this.products.find((product) => product.code === code)
            if (duplicateCode) {
                return console.log(`El codigo ingresado ${code} ya existe. Ingrese otro producto`)
            } else {
                const newProduct = {
                    id: this.generateId(),
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                }
                this.products.push(newProduct)
            }
        }
    }

    generateId() {
        return ++this.id
    }

    getProducts() {
        return this.products
    }

    getProductById(searchId) {
        let find = this.products.find((x) => x.id === searchId)
        if (find) {
            console.log(find)
        } else {
            console.log("Not found")
        }
    }
}

const x = new ProductManager()
x.addProduct("rqqr", "desc", "20", "x", "1", "3")
x.addProduct("Hola", "desc", "20", "x", "2", "3")
console.log(x.getProducts())

x.getProductById(2)

