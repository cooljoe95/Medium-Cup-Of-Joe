json.extract! user, :id, :username, :profile_pic_url, :followed_people
json.following do
  user.followed_people.each do |person|

    json.set! person.id do
      json.extract! person, :stories
    end
  end
end
