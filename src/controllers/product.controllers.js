import Product from '../models/product.model.js'

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const createProduct = async (req, res) => {
  const { title, category, price, stock } = req.body
  const newProduct = new Product({ title, category, price, stock })
  const savedProduct = await newProduct.save()
  res.json(savedProduct)
}

export const getProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  if (!product) return res.status(404).json(['Product not found'])
  res.json(product)
}

export const deleteProduct = (req, res) => {
  res.json('Eliminando un producto')
}

export const updateProduct = (req, res) => {
  res.json('Actualizando un producto')
}
