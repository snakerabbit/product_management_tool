class Api::ProductsController < ApplicationController

  def create
    @product = Product.new(product_params)

    if @product.save
      render :show
    else
      render json: @product.errors
    end
  end

  def index
    @products = Product.all()
    if @products
      render :index
    else
      render json: @products.errors, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  private

  def product_params
    params.require(:product).permit(:name, :upc, :available_on, :product_properties)
  end
end
