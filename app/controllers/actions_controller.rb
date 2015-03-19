class ActionsController < ApplicationController
  before_action :find_user

  def index
    actions = @user.actions
    @all_sorted_actions = actions.order("time_estimated")
    # binding.pry
    render :index
  end

  def new
    @actions = @user.actions.new
  end

  def create
    # binding.pry
    @actions = @user.actions.create(action_params)
    if @actions
      render json: {status: "success"}
    else
      render json: {status: "error"}
    end
  end

  def current_list
    # binding.pry
    @time_est = params[:time_available]
    actions = @user.actions.where("time_estimated <= ?", @time_est)
    # these are priority actions that are at or below the time available
    @priority_actions = actions.where(priority: true)
    nonpriority = actions.where(priority: false)
    # these are the nonpriority actions that are at or below the time available
    @sorted_actions = nonpriority.order("time_estimated")
    binding.pry
  end

  private

  def action_params
    params.permit(:notes, :time_estimated, :action_name, :priority)
  end

  def find_user
    @user = User.find(current_user)
  end

end
