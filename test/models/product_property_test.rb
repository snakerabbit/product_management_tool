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

require 'test_helper'

class ProductPropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
