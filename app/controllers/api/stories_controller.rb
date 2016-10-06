class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all;
    @authors = @stories.map{ |story| story.author_id }
    @authors = User.find(@authors)
    @authors = @authors.each_with_object({}) { |v,h| h[v.id] = v }
    render "api/stories/index"
  end

end
