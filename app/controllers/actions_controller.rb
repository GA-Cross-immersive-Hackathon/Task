class ActionsController < ApplicationController
  before_action :find_user

  def index
    @actions = @user.actions
  end

  def new
    @actions = Action.new
  end

  def create
    binding.pry
    @actions = @user.actions.create(
      # task_params
    )
    redirect_to action_path(@actions)
  end

  def show
    @actions = Action.find(params[:id])
  end

  private

  def find_user
    @user = User.find(current_user)
  end

end
