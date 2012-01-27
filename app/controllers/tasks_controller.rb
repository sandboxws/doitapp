class TasksController < ApplicationController
  def create
    puts '>>>>>>>>>>>>> in create action'
    @task = Task.new params[:task]
    #@task.title = params[:title]
    @task.save
    render :nothing => true
  end
end
