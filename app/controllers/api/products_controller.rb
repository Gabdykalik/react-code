class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products, each_serializer: ProductSerializer
  end

  def show
    product = Product.find(params[:id])
    render json: product_json(product)
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  private

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