class ActionsController < ApplicationController
  before_action :find_user

  def index
    @actions = @user.actions
    render :index
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
  end

  def show
    @actions = Action.find(params[:id])
  end

  private

  def action_params
    params.permit(:notes, :time_estimated, :action_name, :priority)
  end
  def find_user
    @user = User.find(current_user)
  end

end
