Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :products, only: [:index, :show, :create]
    resources :product_properties, only: [:index, :show, :create]
    resources :properties, only: [:index, :show, :create]
  end
  root "static_pages#root"
end
