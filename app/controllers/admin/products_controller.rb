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

    # Call a custom method to handle image deletion
    handle_image_deletion

    # Remove images from product_params to prevent overwriting existing images
    product_params_without_images = product_params.except(:images, :images_to_delete)

    if @product.update(product_params_without_images)
      # Handle new images separately
      if params[:product][:images].present?
        params[:product][:images].each do |image|
          @product.images.attach(image)
        end
      end

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

  def handle_image_deletion
    # Only delete images if images_to_delete parameter is present
    if params[:product][:images_to_delete].present?
      # Convert the array of image IDs to integers
      images_to_delete = params[:product][:images_to_delete].map(&:to_i)
      # Remove the selected images from the product
      @product.images.where(id: images_to_delete).purge
    end
  end

  def product_params
    params.require(:product).permit(:name, :body, :price, :category_id, :quantity, images: [], images_to_delete: [])
  end
end