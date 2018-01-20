class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :upc, null: false
      t.datetime :available_on, null: false
      t.timestamps
    end
  end
end
