class Admin::NewsController < ApplicationController
  def index
    @all_news = News.all.order(created_at: :desc)
  end

  def show
    @news = News.find(params[:id])
  end

  def new
    @news = News.new
  end

  def create
    @news = News.new(news_params)

    if params[:news][:image].present?
      @news.image.attach(params[:news][:image])
    end

    if @news.save
      redirect_to admin_news_path(@news)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @news = News.find(params[:id])
  end

  def update
    @news = News.find(params[:id])

    # Call a custom method to handle image deletion
    handle_image_deletion

    # Remove images from news_params to prevent overwriting existing images
    news_params_without_images = news_params.except(:images, :images_to_delete)

    if @news.update(news_params_without_images)
      # Handle new images separately
      if params[:news][:images].present?
        params[:news][:images].each do |image|
          @news.images.attach(image)
        end
      end

      redirect_to admin_news_path(@news)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @news = News.find(params[:id])
    @news.destroy

    redirect_to admin_news_index_path, status: :see_other
  end

  private

  def handle_image_deletion
    # Only delete images if images_to_delete parameter is present
    if params[:news][:images_to_delete].present?
      # Convert the array of image IDs to integers
      images_to_delete = params[:news][:images_to_delete].map(&:to_i)
      # Remove the selected images from the news
      @news.images.where(id: images_to_delete).purge
    end
  end

  def news_params
    params.require(:news).permit(:title, :body, :info, images: [], images_to_delete: [])
  end
end
