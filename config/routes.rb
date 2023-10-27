Rails.application.routes.draw do
  namespace :admin do
    resources :products
    resources :categories
    resources :sections
    resources :news
    resources :contacts
  end

  namespace :api do
    resources :products, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :sections, only: [:index, :show]
    resources :news, only: [:index, :show]
    resources :contacts, only: [:index, :show]
  end

  root 'admin/products#index'
end