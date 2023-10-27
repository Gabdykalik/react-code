class AddImagesToNews < ActiveRecord::Migration[7.0]
  def change
    add_column :news, :image_metadata, :text
  end
end
