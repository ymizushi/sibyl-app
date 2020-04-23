Rails.application.routes.draw do
  root 'top#index'
  scope :api do
    scope :v1 do
      resources :activities
    end
  end
end
