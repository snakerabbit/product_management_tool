class AddValidationsToProductProperties < ActiveRecord::Migration[5.1]
  def change
    change_column :product_properties, :value, :string, null: false
    change_column :product_properties, :product_id, :integer, null: false
    change_column :product_properties, :property_id, :integer, null: false
  end
end
