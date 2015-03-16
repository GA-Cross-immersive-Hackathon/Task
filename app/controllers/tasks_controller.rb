class TasksController < ApplicationController
  before_action :find_user

  def index
    @tasks = @user.tasks
  end

  def new
    @task = Task.new
  end

  def create
    @task = @user.tasks.create(
      # task_params
    )
    redirect_to task_path(@task)
  end

  def show
    @task = Task.find(params[:id])
  end

  private

  def find_user
    @user = User.find(session[:user_id])
  end

end
