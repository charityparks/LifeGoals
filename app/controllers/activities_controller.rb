class ActivitiesController < ApplicationController

  def index
    render :json => Activity.all, :include => :category, status => 200
  end

  def create
    category = Category.find_by(name: params[:category].downcase)
    activity = Activity.create(name: params[:name], category: category)
    render :json => activity, :status => 201
  end

  def destroy
    activity = Activity.find(params[:id])
        render :json => {id: params[:id], message: "Record was successfully removed"}, :status => 200
  end
end
