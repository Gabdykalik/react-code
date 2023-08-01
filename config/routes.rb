Rails.application.routes.draw do
  namespace :admin do
    resources :products
  end

  namespace :api do
    resources :products, only: [:index, :show]
  end
end