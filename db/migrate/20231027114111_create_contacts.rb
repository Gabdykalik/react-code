class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.text :body
      t.string :tel1
      t.string :tel2
      t.string :tel3
      t.string :email
      t.string :email2
      t.string :whatsapp
      t.string :telegram
      t.string :instagram
      t.text :address

      t.timestamps
    end
  end
end
