// Crea un sistema de gestión de productos que use Partial, Pick y Omit para diferentes operaciones ABM.
const PRODUCTS_ARRAY: Product[] = [];

interface Details {
    readonly id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
}

type IDSelector = Pick<Details, "id">;
type ModifyProduct = Omit<Partial<Details>, "id">;
type CreateProduct = Omit<Details, "id">;

class Product implements Details{
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public category: string;
    public inStock: boolean;

    constructor(details: CreateProduct){
        this.id = Product.createID();
        Object.assign(this, details);
        Product.addProduct(this);
    }

    public static createID(): number{
        return PRODUCTS_ARRAY.length + 1;
    }
    public getID(this: IDSelector): number{
        return this.id;
    }

    ///ABML
    private static addProduct(product: Product): void{
        PRODUCTS_ARRAY.push(product);
    }
    public static modifyProduct(product: Product, update: ModifyProduct): void{
        Object.assign(product, update);
    }
    public static deleteProduct(product: Product): void{
        PRODUCTS_ARRAY.splice(product.id-1, 1);
    }
    public static listProducts(): void{
        let size = PRODUCTS_ARRAY.length;

        for(let i=0; i<size; i++){
            console.log(PRODUCTS_ARRAY[i]);
        }
    }

}

const oreos = new Product({ 
    name: "Oreos",
    description: "Sandwich cookie with cream filling",
    price: 9.99,
    category: "Cookie",
    inStock: true
});

const coke = new Product({
    name: "Coca-Cola",
    description: "Cola soft drink",
    price: 3.99,
    category: "Soda",
    inStock: true
});

Product.listProducts();
Product.modifyProduct(oreos, {price: 8.99});
Product.listProducts();
Product.deleteProduct(coke);
Product.listProducts();

