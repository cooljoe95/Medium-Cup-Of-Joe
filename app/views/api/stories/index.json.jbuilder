@stories.each do |story|
  json.set! story.id do
    json.partial! "api/stories/story", story: story
    json.author @authors[story.author_id], :id, :username, :profile_pic_url
    json.numLikes story.likes.length
  end
end
