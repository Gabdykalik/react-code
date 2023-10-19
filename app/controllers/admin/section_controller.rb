class Admin::SectionsController < ApplicationController
  def index
    @sections = Section.all.order(created_at: :desc)
  end

  def show
    @section = Section.find(params[:id])
  end

  def new
    @section = Section.new
  end

  def create
    @section = Section.new(section_params)

    if params[:section][:image].present?
      @section.image.attach(params[:section][:image])
    end

    if @section.save
      redirect_to admin_section_path(@section)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @section = Section.find(params[:id])
  end

  def update
    @section = Section.find(params[:id])

    # Call a custom method to handle image deletion
    handle_image_deletion

    # Remove images from product_params to prevent overwriting existing images
    section_params_without_images = section_params.except(:images, :images_to_delete)

    if @section.update(section_params_without_images)
      # Handle new images separately
      if params[:section][:images].present?
        params[:section][:images].each do |image|
          @section.images.attach(image)
        end
      end

      redirect_to admin_section_path(@section)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @section = Section.find(params[:id])
    @section.destroy

    redirect_to admin_section_path, status: :see_other
  end

  private

  def handle_image_deletion
    # Only delete images if images_to_delete parameter is present
    if params[:section][:images_to_delete].present?
      # Convert the array of image IDs to integers
      images_to_delete = params[:section][:images_to_delete].map(&:to_i)
      # Remove the selected images from the product
      @section.images.where(id: images_to_delete).purge
    end
  end

  def section_params
    params.require(:section).permit(:name, :body, images: [], images_to_delete: [])
  end
end