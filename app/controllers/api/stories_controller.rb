class Api::StoriesController < ApplicationController

  def index
    # if params[:user] != "0"
    #   @stories =  Story.where(response_id: nil).where(author: (User.find(params[:user]).followed_people)).includes(:author)
    # else
      @stories = Story.where(original_post_id: nil).includes(:author).includes(:likes)
      @authors = @stories.map{ |story| story.author_id }
      @authors = User.find(@authors)
      @authors = @authors.each_with_object({}) { |v,h| h[v.id] = v }
    render "api/stories/index"
  end


  def create
    @story = Story.create(story_params)
    @story.author = current_user
    @story.save!
    if @story[:original_post_id]
      @story = Story.find(@story[:original_post_id])
    end
    @responses = []
    @authors = {}
    @authors[current_user.id] = current_user
    render "api/stories/show"
  end

  def show
    debugger
    @story = Story.where(id: params[:id]).first
    @responses = @story.responses.includes(:author).includes(:likes)
    @authors = @responses.map{ |story| story.author_id }
    @authors = User.find(@authors)
    @authors = @authors.each_with_object({}) { |v,h| h[v.id] = v }
    render "api/stories/show"
  end

  def story_params
    params.require(:story).permit(:response_id, :author, :original_post_id, :title, :body, :author_id)
  end

end
