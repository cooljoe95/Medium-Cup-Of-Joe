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
		username: "can_this_name_BE_any_longer",
		password: "password",
		email: "chandler@co.com",
		profile_pic_url: "https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg"
	},
	{
		username: "smelly_cat",
		password: "password",
		email: "phoebe@co.com",
		profile_pic_url: "https://ilovefriends.files.wordpress.com/2009/12/lisa_kudrow_3001.jpg"
	},
	{
		username: "geology_rocks",
		password: "password",
		email: "ross3@co.com",
		profile_pic_url: "http://vignette3.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/20111216200027"
	},
	{
		username: "ILovePizza",
		password: "password",
		email: "joey@co.com",
		profile_pic_url: "http://www.uncleodiescollectibles.com/img_lib/Matt%20LeBlanc%20122%205-14-14.jpg"
	},
	{
		username: "Werent_on_a_Break",
		password: "password",
		email: "rachael@co.com",
		profile_pic_url: "https://65.media.tumblr.com/27b72bcf4e3ab891219bafeed4f0cf1f/tumblr_inline_n6ifsuUn561safegj.jpg"
	},
	{
		username: "secret-chef",
		password: "password",
		email: "monica@co.com",
		profile_pic_url: "http://4.bp.blogspot.com/-WCJfZteB4Ww/UCWi2_pvjaI/AAAAAAAAHjU/GkVGlZagCyE/s1600/Monica+Friends.jpg"
	},
  {
    username: "NotGunther",
    password: "password",
    email: "ms@ms.org",
		profile_pic_url: "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/16/7/enhanced/webdr06/grid-cell-996-1442402630-2.jpg"
  }
])

stories = Story.create([
  {
    title: "One's first post",
    body: "<p>This is the first post made by <img src='https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg' /> user: 1</p>",
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
    body: "<p>I Guess I can respond <img src='https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg' />to a response</p>",
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
