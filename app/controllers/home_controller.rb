class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]

  def index
    @user = find_user
		render :index
	end

  private

    def find_user
      @user = User.find(current_user)
    end
end
