Rails.application.routes.draw do
  namespace :admin do
    resources :products
    resources :categories
  end

  namespace :api do
    resources :products, only: [:index, :show]
  end

  root 'admin/products#index'
end