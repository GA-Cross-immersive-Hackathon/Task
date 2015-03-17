class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]

  def index
    @user = find_user
    @token_value = session["_csrf_token"]
		render :index
	end

  private

    def find_user
      @user = User.find(current_user)
    end
end
