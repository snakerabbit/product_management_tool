# == Schema Information
#
# Table name: properties
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Property < ApplicationRecord
  validates :name, presence: true

  has_many :product_properties,
    class_name: 'ProductProperty',
    foreign_key: :property_id,
    primary_key: :id

  has_many :products,
    through: :product_properties,
    source: :product
end
