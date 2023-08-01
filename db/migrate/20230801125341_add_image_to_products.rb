class AddImageToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :image_metadata, :text
  end
end
