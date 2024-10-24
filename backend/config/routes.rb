Rails.application.routes.draw do
  get '/users/new', to: 'users#new'
  #board
  get '/boards', to: 'boards#index'
  get '/boards/new', to: 'boards#new'
  post '/boards', to: 'boards#create'
  get '/boards/:id', to: 'boards#show'
  get '/boards/:id/edit', to: 'boards#edit'
  patch '/boards/:id', to: 'boards#update'
  delete '/boards/:id', to: 'boards#destroy'
  #category
  get '/boards/:board_id/categories', to: 'categories#index'
  get '/boards/:board_id/categories/new', to: 'categories#new'
  post '/boards/:board_id/categories', to: 'categories#create'
  get '/boards/:board_id/categories/:id', to: 'categories#show'
  get '/boards/:board_id/categories/:id/edit', to: 'categories#edit'
  patch '/boards/:board_id/categories/:id', to: 'categories#update'
  delete '/boards/:board_id/categories/:id', to: 'categories#destroy'
end