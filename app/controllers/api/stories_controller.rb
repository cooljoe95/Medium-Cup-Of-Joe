class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all;
    render "api/stories/index"
  end

end
