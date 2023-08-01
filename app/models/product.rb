class Product < ApplicationRecord
  has_many_attached :images
  attr_accessor :images_to_delete
  belongs_to :category
  validates :name, :body, :price, :category, :quantity, presence: true
end
