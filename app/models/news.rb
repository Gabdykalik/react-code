class News < ApplicationRecord
  has_many_attached :images
  attr_accessor :images_to_delete
  validates :title, :body, :info, presence: true
end
