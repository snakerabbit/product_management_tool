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
  validates :upc, format:{ with: /\d*/, on: :create }

  has_many :product_properties


end
