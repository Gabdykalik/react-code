class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: products_json(@products)
  end

  def show
    product_ids = JSON.parse(params[:id])

    products = Product.where(id: product_ids)
    render json: products_json(products)
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  private

  def products_json(products)
    products.map { |product| product_json(product) }
  end

  def product_json(product)
    {
      id: product.id,
      name: product.name,
      body: product.body,
      price: product.price,
      category: product.category,
      quantity: product.quantity,
      image_urls: product_image_urls(product)
    }
  end

  def product_image_urls(product)
    product.images.map { |image| url_for(image) }
  end
end