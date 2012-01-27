TodoApp::Application.routes.draw do
  resources :tasks
  match '/auth/:provider/callback' => 'sessions#create'
  root :to => 'home#index'
end
