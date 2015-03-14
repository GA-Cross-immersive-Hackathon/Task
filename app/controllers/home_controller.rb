class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]

  def index
		render text: 'This is the homepage that only authenticated users can see'
	end
end
