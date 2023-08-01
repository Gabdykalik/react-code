class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: categories_json(@categories)
  end

  private

  def categories_json(categories)
    categories.map do |category|
      {
        id: category.id,
        name: category.name
      }
    end
  end
end