class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :body, :price, :category, :quantity, :image_url

  def image_url
    if object.image.attached?
      rails_blob_url(object.image)
    else
      ActionController::Base.helpers.asset_path('placeholder_image.png')
    end
  end
end