class Section < ApplicationRecord
  validates :title, :body, presence: true
end
