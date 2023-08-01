class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :body
      t.integer :price
      t.string :category
      t.integer :quantity

      t.timestamps
    end
  end
end
