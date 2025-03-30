//TASK 2
function fetchProductsThen() { // fetches products using .then()
    fetch('https://www.course-api.com/javascript-store-products') // fetches product data
      .then(response => response.json()) // converts the response to JSON
      .then(products => {
        products.forEach(product => { // loops through each product
          console.log(product.name); // logs product name
        });
      })
      .catch(error => { // catches and logs errors
        console.log('An error occurred:', error);
      });
  }
  
  fetchProductsThen(); // triggers the function to fetch products
  
//TASK 3
async function fetchProductsAsync() { // fetches products using async/await
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products'); // fetches product data
      const products = await response.json(); // parses the response to JSON
      displayProducts(products); // displays the products
    } catch (error) { // catches and logs errors
      handleError(error); // calls handleError to log errors
    }
  }
  
  fetchProductsAsync(); // triggers the function to fetch products
  