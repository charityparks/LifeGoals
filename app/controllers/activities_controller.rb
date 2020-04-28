class ActivitiesController < ApplicationController

  def index
    render :json => Activity.all, :include => :category
  end
end
