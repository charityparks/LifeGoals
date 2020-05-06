class ActivitiesController < ApplicationController

  def index
    render :json => Activity.all, :include => :category, status => 200
  end

  def create
    category = Category.find_by(name: params[:category].downcase)
    activity = Activity.create(name: params[:name], category: category)
    render :json => activity, :include => :category, :status => 201
  end

  def destroy
    Activity.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Record was successfully removed"}, :status => 200
  end
end
