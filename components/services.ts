// import { Moltin, gateway, ProductBase, Resource, Product } from '@moltin/sdk'

// async function main() {
//   const g: Moltin = gateway({ client_id, client_secret })
//   const auth = await g.Authenticate()

//   const newProduct: ProductBase = {
//     type: 'product',
//     name: 'My Product',
//     slug: 'my-prod',
//     sku: 'my-prod',
//     manage_stock: false,
//     description: 'Some description',
//     status: 'draft',
//     commodity_type: 'physical',
//     price: [
//       {
//         amount: 5499,
//         currency: 'USD',
//         includes_tax: true,
//       },
//     ],
//   }

//   const nP: Resource<Product> = await g.Products.Create(newProduct)
// }
