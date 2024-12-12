const loadProducts = async () => (
  [
    {
      id: 'svelte-book',
      name: 'Svelte Guide',
      price: 3500,
      images: [
      'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-1.png',
      'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-2.png',
      'https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-3.png',
      ]
    },
    {
      id: 'react-book',
      name: 'React Book',
      price: 3500,
      images: [
        'https://github.com/svelte-book/sample-app/raw/main/static/react-book-1.png',
        'https://github.com/svelte-book/sample-app/raw/main/static/react-book-2.png',
        'https://github.com/svelte-book/sample-app/raw/main/static/react-book-3.png',
      ]
    },
    {
      id: 'vue-book',
      name: 'Vue Book',
      price: 3500,
      images: [
        'https://github.com/svelte-book/sample-app/raw/main/static/vue-book-1.png',
        'https://github.com/svelte-book/sample-app/raw/main/static/vue-book-2.png',
        'https://github.com/svelte-book/sample-app/raw/main/static/vue-book-3.png',
      ]
    },
    {
      id: 'angular-book',
      name: 'Angular Book',
      price: 3500,
      images: [
        'https://github.com/svelte-book/sample-app/raw/main/static/angular-book-1.png',
        'https://github.com/svelte-book/sample-app/raw/main/static/angular-book-2.png',
        'https://github.com/svelte-book/sample-app/raw/main/static/angular-book-3.png',
      ]
    },
  ]
)

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