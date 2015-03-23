class ActionsController < ApplicationController
  before_action :find_user

  def index
    actions = @user.actions
    # these are priority actions
    @priority_actions = actions.where(priority: true).order("time_estimated").reverse
    nonpriority = actions.where(priority: false)
    # these are the nonpriority actions
    @sorted_actions = nonpriority.order("time_estimated").reverse
    # @all_sorted_actions = actions.order("time_estimated")
    render :index
  end

  def new
    @actions = @user.actions.new
    render :new
  end

  def create
    @actions = @user.actions.create(action_params)
    if @actions
      render json: {status: "success"}
    else
      render json: {status: "error"}
    end
  end

  def current_list
    @time_est = params[:time_available]
    actions = @user.actions.where("time_estimated <= ? AND is_completed = ?", @time_est, false)
    # these are priority actions that are at or below the time available
    @priority_actions = actions.where(priority: true).order("time_estimated").reverse
    nonpriority = actions.where(priority: false, is_completed: false)
    # these are the nonpriority actions that are at or below the time available
    @sorted_actions = nonpriority.order("time_estimated").reverse
  end

  def update
    @action = Action.find(params[:id])
    if params[:update] === "start"
      if @action.update({time_started:Time.now})
        render json: {status: "success"}
      else
        render json: {status: "error"}
      end
    elsif params[:update] === "stop"
      @action.update({time_finished: Time.now, is_completed: true})
      @total_time = hour_min(@action.time_finished,@action.time_started)
      @action.update({time_took: @total_time}) # won't store bc the schema is expecting an integer. We need to store it as an array or string
      time_obj = {
        estimated_time: @action.time_estimated,
        total_time: @total_time
      }
      if @total_time
        render json: {time_metrics: time_obj, status: "success"}
      else
        render json: {status: "error"}
      end

    end
  end

  def history
      @history = @user.actions.where("is_completed = ?", true)
      render :history
  end

  def destroy
    @action = Action.find(params[:id])
    @action.destroy
    if @action.destroy
      render json: {status: "success"}
    else
      render json: {status: "error"}
    end
  end

  private

  def hour_min(last,first)

   difference = last - first
   seconds    =  difference % 60
   difference = (difference - seconds) / 60
   minutes    =  difference % 60
   difference = (difference - minutes) / 60
   hours      =  difference % 24

   return hours,minutes,seconds

 end


  def action_params
    params.permit(:notes, :time_estimated, :action_name, :priority)
  end

  def find_user
    @user = User.find(current_user)
  end

end
