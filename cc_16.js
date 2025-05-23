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
      console.log(products); // log the response to check what is returned
      displayProducts(products); // displays the products
    } catch (error) { // catches and logs errors
      handleError(error); // calls handleError to log errors
    }
  }
  
  fetchProductsAsync(); // triggers the function to fetch products
  
  function displayProducts(products) { // displays the fetched products
    const productContainer = document.getElementById('product-container'); // selects the product container

    // loops through the first 5 products
    products.slice(0, 5).forEach(product => {
      const productDiv = document.createElement('div'); // creates a div for the product
      productDiv.classList.add('product'); // adds a class for styling

      const name = document.createElement('h3'); // creates the name element
      name.textContent = product.fields.name; // sets the product name from the fields object

      const price = document.createElement('p'); // creates the price element
      if (product.fields.price !== undefined) { // checks if the price exists in fields
        price.textContent = `$${product.fields.price.toFixed(2)}`; // sets the product price if it exists
      } else {
        price.textContent = "Price not available"; // sets a fallback message if price is undefined
      }

      const img = document.createElement('img'); // creates the image element
      img.src = product.fields.image[0].url; // sets the product image URL from the fields object
      img.alt = product.fields.name; // sets the alt attribute for the image

      // appends elements to the product div
      productDiv.appendChild(name);
      productDiv.appendChild(price);
      productDiv.appendChild(img);

      productContainer.appendChild(productDiv); // appends the product div to the container
    });
}
  
//TASK 5
function handleError(error) { // logs the error message
    console.log('An error occurred:', error); // logs the error with a message
  }

//TASK 6
fetchProductsThen(); // triggers fetch with .then()
fetchProductsAsync(); // triggers fetch with async/await
