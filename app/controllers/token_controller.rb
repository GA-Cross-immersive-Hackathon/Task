class TokenController < ApplicationController
  def token
    generate_token
  end

  private
  def generate_token
    token = session["_csrf_token"]
    render :json => token
  end
end
