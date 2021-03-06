class Api::LikesController < ApplicationController

  def create
    Like.create!(
      author_id: params[:like_relationship][:author_id],
      story_id: params[:like_relationship][:story_id]
    )
    render :nothing => true
  end

  def destroy
    Like.
      where(author_id: params[:delete_me][:author_id]).
      where(story_id: params[:delete_me][:story_id]).
      first.
      destroy
    render :nothing => true
  end

end
