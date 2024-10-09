Rails.application.routes.draw do
  get 'users/new'
  get '/boards', to: 'boards#index', as: 'boards'
  get '/boards/new', to: 'boards#new', as: 'new_board'
  post '/boards', to: 'boards#create'
  get '/boards/:id', to: 'boards#show', as: 'board'
  get '/boards/:id/edit', to: 'boards#edit', as: 'edit_board'
  patch '/boards/:id', to: 'boards#update'
  put '/boards/:id', to: 'boards#update'
  delete '/boards/:id', to: 'boards#destroy'
end
