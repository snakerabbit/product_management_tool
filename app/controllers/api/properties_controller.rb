class Api::PropertiesController < ApplicationController
  def create
    @property = Property.new(property_params)
  end


  def index
    @properties = Property.all()
    if @properties
      render :index
    else
      render json: @properties.errors, status: 422
    end
  end

  def show
    @property = Property.find(params[:id])
    render :show
  end

  private
  def property_params
    params.require(:property).permit(:name)
  end
end
