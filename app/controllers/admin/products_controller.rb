class Admin::ProductsController < ApplicationController
  def index
    @products = Product.all.order(created_at: :desc)
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)

    pp '******'
    pp params[:product][:image]

    if params[:product][:image].present?
      @product.image.attach(params[:product][:image])
    end

    if @product.save
      redirect_to admin_product_path(@product)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])

    if @product.update(product_params)
      redirect_to admin_product_path(@product)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    redirect_to admin_products_path, status: :see_other
  end

  private

  def product_params
    params.require(:product).permit(:name, :body, :price, :category, :quantity, images: [], images_attachments_attributes: [:id, :_destroy])
  end
end