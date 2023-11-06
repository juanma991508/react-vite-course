/**
 * This function calculates total price of a new order
 *  @params {Array} products cartProduct: Array
 *  @returns {number} Total
 */
export const totalPrice = (products) => 
{
    return products.reduce((total, product) => total + product.price, 0);
}