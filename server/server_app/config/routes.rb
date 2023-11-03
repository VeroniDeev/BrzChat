Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :auth do
        resources :signup, only: [:create]
        resources :signin, only: [:create]
        resources :delete, only: [:destroy]
      end
      namespace :data do
        resources :conversation
        resources :user
      end
    end
  end
end
