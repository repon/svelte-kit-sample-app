import { readFile } from 'fs/promises'

const loadProducts = async () => {
  const content = await readFile('data/products.json', { encoding: 'utf-8' });
  return JSON.parse(content)
}

const getProductFromDatabase = async (productId) => {
  const products = await loadProducts()
  return products.find(product => productId === product.id)
}

const getRelatedProductsFromDatabase = async (productId) => {
  const products = await loadProducts()
  return products.filter(product => productId !== product.id)
}

export const load = async ({ params }) => {
  const productId = params.id
  const product = await getProductFromDatabase(productId);
  const relatedProducts = await getRelatedProductsFromDatabase(productId);
  return { product, relatedProducts }
}