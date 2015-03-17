class ActionsController < ApplicationController
  before_action :find_user

  def index
    @actions = @user.actions
    token = session["_csrf_token"]
    respond_to do |format|
    format.html
    format.json {render :json => token}  
    end
  end

  def new
    @actions = Action.new
  end

  def create
    binding.pry
    @actions = @user.actions.create(action_params)

    if @actions
      render json: {status: "success"}
    else
      render json: {status: "error"}
    end
    # redirect_to action_path(@actions)
  end

  def show
    @actions = Action.find(params[:id])
  end

  private
  def action_params
    params.permit(:notes, :time_estimated, :action_name)
  end
  def find_user
    @user = User.find(current_user)
  end

end
