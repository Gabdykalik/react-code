class CreateNews < ActiveRecord::Migration[7.0]
  def change
    create_table :news do |t|
      t.string :title
      t.string :info
      t.text :body
      t.string :image

      t.timestamps
    end
  end
end
