Rails.application.routes.draw do
  root 'top#index'
  scope :api do
    scope :v1 do
      resources :activities
      get 'activity_stat', to: 'activities#stat'
    end
  end
end
