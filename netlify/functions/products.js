const axios = require("axios");

async function getProducts() {
  const result = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")
  return result.data
}

exports.handler = async function (event, context) {
  try {
    const data = await getProducts();
    console.log('SUCCESS!');

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    console.log('request error', JSON.stringify(err));

    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};