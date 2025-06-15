async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener datos");
    }
}

//Crear una función que filtre productos por categoría
function filterByCategory(products, category) {
    category = category.toLowerCase().trim();
    return products.filter(product => product.category === category);
}

//Implementar una función que ordene productos por precio (ascendente/descendente)
function orderProductByPrice(products, order='mayor'){
    order = order.toLowerCase().trim();
    if (order==='mayor'){
        return [...products].sort((a, b) => a.price - b.price);
    }
    else if (order==='menor'){
        return [...products].sort((a, b) => b.price - a.price);
    }
    else{
        console.error("Error al elegir el orden")
    }
}

//Desarrollar una función que calcule el precio promedio por categoría
function averagePriceByCategory(products, category){
    let sum = 0;
    let elements = 0;
    category = category.toLowerCase().trim();

    const categoryExists = products.some(product => product.category === category);
    if (!categoryExists) {
        throw new Error(`La categoria ${category} no existe`);
    }
    
    products.forEach(product => {
        if(category === product.category){
            sum+=product.price;
            elements++;
        }
    })

    return sum/elements;
}


//Crear una función que busque productos por nombre (incluso con coincidencias parciales)
function searchProductsByName(products, search) {
    search = search.toLowerCase().trim();
    const result = products.filter(product => product.title.toLowerCase().includes(search));

    if (result.length === 0) {
        throw new Error(`No se encontraron productos con "${search}"`);
    }

    return result;
}


///Agrupar los productos en un objeto donde las claves (key) sean las categorías
function groupByCategory(products) {
    const grouped = {};

    for (const product of products) {
        const category = product.category;

        if (!(category in grouped)) {
            grouped[category] = [];
        }

        grouped[category].push(product);
    }

    return grouped;
}

function findExtremesByCategory(products) {
    let grouped = {};

    grouped = groupByCategory(products);

    const result = {};
    for (const category in grouped) {
        const productsInCategory = grouped[category];
        let cheapest = productsInCategory[0];
        let mostExpensive = productsInCategory[0];

        for (const product of productsInCategory) {
            if (product.price < cheapest.price) {
                cheapest = product;
            }
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }

        result[category] = {
            cheapest,
            mostExpensive
        };
    }

    return result;
}

async function showResults() {
    try {
        const products = await getData();

        console.log("Filtrados por categoría (jewelery):");
        console.log(filterByCategory(products, 'jewelery'));

        console.log("Ordenados por precio (ascendente):");
        console.log(orderProductByPrice(products, 'mayor'));

        console.log("Precio promedio de categoría (jewelery):");
        console.log(averagePriceByCategory(products, 'jewelery'));

        console.log("Búsqueda de productos por nombre (gold):");
        console.log(searchProductsByName(products, 'gold'));

        console.log("Productos agrupados por categoría:");
        console.log(groupByCategory(products));

        console.log("Producto más barato y caro por categoría:");
        console.log(findExtremesByCategory(products));

    } catch (error) {
        console.error("Error al mostrar los resultados:", error);
    }
}

showResults();
