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
    render :new
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
    @time_est = params[:time_available]
    actions = @user.actions.where("time_estimated <= ?", @time_est)
    # these are priority actions that are at or below the time available
    @priority_actions = actions.where(priority: true).order("time_estimated").reverse
    nonpriority = actions.where(priority: false)
    # these are the nonpriority actions that are at or below the time available
    @sorted_actions = nonpriority.order("time_estimated").reverse
  end

  def update
    # if 'start' find the corresponding action and update the column time_started
    # if 'end' find the corresponding action and update the column time_finished
    # and calculate the time it took to accomplish task

  end

  def destroy
    @action = Action.find(params[:id])
    # binding.pry
    @action.destroy
  end

  private

  def action_params
    params.permit(:notes, :time_estimated, :action_name, :priority)
  end

  def find_user
    @user = User.find(current_user)
  end

end
