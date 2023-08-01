class Product < ApplicationRecord
  has_many_attached :images
  validates :name, :body, :price, :category, :quantity, presence: true
end
