class Api::FollowersController < ApplicationController

  def create
    Follow.create!(
      follower_id: params[:follow_relationship][:follower],
      followed_id: params[:follow_relationship][:following]
    )
    render :nothing => true
  end

  def destroy
    follow_relationship = Follow.
                              where(follower_id: params[:delete_me][:follower]).
                              where(followed_id: params[:delete_me][:following]).
                              first.
                              destroy
    render :nothing => true
  end

end
