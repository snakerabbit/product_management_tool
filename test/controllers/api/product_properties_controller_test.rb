require 'test_helper'

class Api::ProductPropertiesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_product_properties_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_product_properties_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_product_properties_update_url
    assert_response :success
  end

  test "should get create" do
    get api_product_properties_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_product_properties_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_product_properties_index_url
    assert_response :success
  end

  test "should get show" do
    get api_product_properties_show_url
    assert_response :success
  end

end
