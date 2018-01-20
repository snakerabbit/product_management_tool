# == Schema Information
#
# Table name: products
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  upc          :string           not null
#  available_on :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Product < ApplicationRecord
  validates :name, :upc, :available_on, presence: true
  validates :name, :upc, uniqueness: true
  validates :upc, length: {minimum: 10, maximum: 13}
  # validates :available_on,:on => :create, :after =>lambda { Date.current }
  #gem not working
  has_many :product_properties,
    class_name: 'ProductProperty',
    foreign_key: :product_id,
    primary_key: :id

  has_many :properties,
    through: :product_properties,
    source: :property

end
