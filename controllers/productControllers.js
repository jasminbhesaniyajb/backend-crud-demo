import product from '../models/product.js'

export const products = async (req, res) => {
  try {
    const products = await product.find()
    res.status(200).send(products)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const createProduct = async (req, res) => {
  const productData = {
    name: req.body.name,
    image: req.body.image,
    categorie: req.body.categorie,
    price: req.body.price,
    status: req.body.status,
  }
  try {
    const data = new product(productData)
    await data.save()
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const updateProduct = async (req, res) => {
  try {
    await product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send("Product updated successfully.")
  } catch (error) {
    res.status(400).send(error)
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await product.deleteOne({id:req.params.id})
    res.status(200).send("Product remove successfully.")
  } catch (error) {
    res.status(400).send(error)
  }
}