class Api::ProductPropertiesController < ApplicationController
  def create
    @product_property = Product_Property.new(product_property_params)

    if @product_property.save
      render :show
    else
      render json: @product_property.errors, status: 422
  end

  def show
    @product_property = Product_Property.find(params[:id])
  end

  private

  def product_property_params
    params.require(:product_property).permit(:value, :product_id, :property_id)
  end
end
