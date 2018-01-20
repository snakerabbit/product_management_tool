class AddColumnToProductProperties < ActiveRecord::Migration[5.1]
  def change
    add_column :product_properties, :product_id, :integer
    add_column :product_properties, :property_id, :integer
  end
end
