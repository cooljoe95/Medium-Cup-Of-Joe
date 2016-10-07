class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all;
    @authors = @stories.map{ |story| story.author_id }
    @authors = User.find(@authors)
    @authors = @authors.each_with_object({}) { |v,h| h[v.id] = v }
    render "api/stories/index"
  end


  def create

  end

  def show
    @story = Story.find(params[:id])
    @responses = @story.responses.includes(:author)
    @authors = @story.author_id
    puts(@story)
    puts(@responses)
    puts(@authors)
    render "api/stories/show"
  end

  def story_params
    params.require(:story).permit(:response_id, :author, :original_post, :title, :body)
  end

end
