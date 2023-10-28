// class ProductCotroller {
//   data = [];
//   constructor() {
//     const productsJSON = fs.readFileSync("src/models/products.json", "utf8");
//     this.data = JSON.parse(productsJSON);
//   }

//   getData(conditions) {
//     const productFilter = this.data.filter((product) =>
//       conditions.find((condition) => condition.value == product[condition.key])
//     );
//     return productFilter;
//   }
// }

// export default ProductCotroller;
