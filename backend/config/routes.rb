Rails.application.routes.draw do
  get 'users/new', to: 'users#new', as: 'new_user'
  #board
  get '/boards', to: 'boards#index', as: 'boards'
  get '/boards/new', to: 'boards#new', as: 'new_board'
  post '/boards', to: 'boards#create', as: 'create_board'
  get '/boards/:id', to: 'boards#show', as: 'board'
  get '/boards/:id/edit', to: 'boards#edit', as: 'edit_board'
  patch '/boards/:id', to: 'boards#update', as: 'update_board'
  delete '/boards/:id', to: 'boards#destroy', as: 'destroy_board'
  #category
  get '/boards/:board_id/categories', to: 'categories#index', as: 'board_categories'
  get '/boards/:board_id/categories/new', to: 'categories#new', as: 'new_board_category'
  post '/boards/:board_id/categories', to: 'categories#create', as: 'create_board_category'
  get '/boards/:board_id/categories/:id', to: 'categories#show', as: 'board_category'
  get '/boards/:board_id/categories/:id/edit', to: 'categories#edit', as: 'edit_board_category'
  patch '/boards/:board_id/categories/:id', to: 'categories#update', as: 'update_board_category'
  delete '/boards/:board_id/categories/:id', to: 'categories#destroy', as: 'destroy_board_category'
end
