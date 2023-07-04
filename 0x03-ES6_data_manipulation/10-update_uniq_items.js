export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedGroceries = new Map();
  for (const [item, quantity] of groceriesMap) {
    const updatedQuantity = quantity === 1 ? 100 : quantity;

    updatedGroceries.set(item, updatedQuantity);
  }

  return updatedGroceries;
}
