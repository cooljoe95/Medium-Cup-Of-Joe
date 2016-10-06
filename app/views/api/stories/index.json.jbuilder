@stories.each do |story|
  json.set! story.id do
    json.partial! "api/stories/story", story: story
    json.author @authors[story.author_id], :id, :username, :profile_pic_url
  end
end
