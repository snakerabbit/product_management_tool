class Api::ProductPropertiesController < ApplicationController
  def create
    @product_property = ProductProperty.new(product_property_params)

    if @product_property.save
      render :show
    else
      render json: @product_property.errors, status: 422
  end

  def show
    @product_property = ProductProperty.find(params[:id])
  end

  private

  def product_property_params
    params.require(:product_property).permit(:value, :product_id, :property_id)
  end
end
