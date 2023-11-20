import Product from '../models/product.model.js'
import { valdiateProduct, validatePartialProduct } from '../schemas/product.schema.js'

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const createProduct = async (req, res) => {
  const result = valdiateProduct(req.body)
  if (result.error) return res.status(400).json(result.error.issues.map(error => error.message))
  const newProduct = new Product(result.data)
  const savedProduct = await newProduct.save()
  res.json(savedProduct)
}

export const getProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  if (!product) return res.status(404).json(['Product not found'])
  res.json(product)
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndDelete(id)
  if (!product) return res.json(404).json(['Product not found'])
  res.json(product)
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const result = validatePartialProduct(req.body)
  if (result.error) return res.status(400).json(result.error.issues.map(error => error.message))
  const product = await Product.findByIdAndUpdate(id, result.data, { new: true })
  if (!product) return res.status(404).json(['Product not found'])
  res.json(product)
}
