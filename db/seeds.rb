# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Story.destroy_all
Follow.destroy_all
Like.destroy_all

users = User.create([
	{
		username: "1",
		password: "password",
		email: "num1@co.com",
		profile_pic_url: "http://plusquotes.com/images/quotes-img/cool-pictures-24.jpg"
	},
	{
		username: "2",
		password: "password",
		email: "num2@co.com"
	},
	{
		username: "3",
		password: "password",
		email: "num3@co.com"
	},
	{
		username: "4",
		password: "password",
		email: "num4@co.com"
	},
	{
		username: "5",
		password: "password",
		email: "num5@co.com"
	},
	{
		username: "6",
		password: "password",
		email: "num6@co.com"
	},
  {
    username: "MaryShelley",
    password: "password",
    email: "ms@ms.org"
  }
])

stories = Story.create([
  {
    title: "One's first post",
    body: "<p>This is the first post made by user: 1</p>",
    author_id: 1,
  },
  {
    title: "One's Second Post",
    body: "<p>This is the <em>second</em> post made by user: 1</p>",
    author_id: 1,
  },
  {
    title: "Two's first Post",
    body: "<p>This is the first <strong>and</strong> only post made by user: 2</p>",
    author_id: 2,
  },
  {
    title: "Three's response to One",
    body: "<p>I'm user three and <em>I'm</em> responding to One's second post</p>",
    author_id: 3,
    original_post_id: 2
  },
  {
    title: "Four's original first Post",
    body: "<p><strong>LOL</strong>, this works</p>",
    author_id: 4,
  },
  {
    title: "Four also responds to other posters",
    body: "<p>I Guess I can respond to a response</p>",
    author_id: 4,
    response_id: 4,
    original_post_id: 2
  },
  {
    title: "Four will also respond to an original poster",
    body: "<p>I am responding to an original poster</p>",
    author_id: 4,
    original_post_id: 3
  },
  {
    title: "Frankenstein, or the Modern Prometheus",
    author_id: 7,
    body: "<p> Frankenstein</p>"
  }
])

follow = Follow.create([
  {
    follower_id: 1,
    followed_id: 2
  },
  {
    follower_id: 1,
    followed_id: 3
  },
  {
    follower_id: 1,
    followed_id: 4
  },
  {
    follower_id: 2,
    followed_id: 3
  }
])

like = Like.create([
  {
    author_id: 1,
    story_id: 3
  },
  {
    author_id: 1,
    story_id: 4
  },
  {
    author_id: 1,
    story_id: 5
  },
  {
    author_id: 2,
    story_id: 1
  },
  {
    author_id: 2,
    story_id: 2
  }
])
