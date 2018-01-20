# == Schema Information
#
# Table name: product_properties
#
#  id          :integer          not null, primary key
#  value       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  product_id  :integer          not null
#  property_id :integer          not null
#

class ProductProperty < ApplicationRecord
  validates :value, :product_id, :property_id, presence: true

  belongs_to :product,
    class_name: 'Product',
    foreign_key: :product_id,
    primary_key: :id

  belongs_to :property,
    class_name: 'Property',
    foreign_key: :property_id,
    primary_key: :id

    
end
