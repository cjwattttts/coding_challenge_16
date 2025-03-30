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
  