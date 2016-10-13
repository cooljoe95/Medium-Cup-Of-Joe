json.extract! user, :id, :username, :profile_pic_url, :followed_people
json.following do
  user.followed_people.each do |person|

    json.set! person.id do
      json.extract! person, :stories
      json.extract! person, :liked_stories
    end
  end
end

json.liked_stories do
  user.liked_stories.each do |story|
    json.set! story.id do
    end
  end
end
