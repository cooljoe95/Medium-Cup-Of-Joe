# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = User.create([
	{
		username: "1",
		password: "password",
		email: "num1@co.com"
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
	}
])

stories = Story.create([
  {
    title: "One's first post",
    body: "This is the first post made by user: 1",
    author_id: 1,
    response_id: nil
  },
  {
    title: "One's Second Post",
    body: "This is the second post made by user: 1",
    author_id: 1,
    response_id: nil
  },
  {
    title: "Two's first Post",
    body: "This is the first and only post made by user: 2",
    author_id: 2,
    response_id: nil
  },
  {
    title: "Three's response to One",
    body: "I'm user three and I'm responding to One's second post",
    author_id: 3,
    response_id: 2
  },
  {
    title: "Four's original first Post",
    body: "LOL, this works",
    author_id: 4,
    response_id: nil
  },
  {
    title: "Four also responds to other posters",
    body: "I Guess I can respond to a response",
    author_id: 4,
    response_id: 4
  },
  {
    title: "Four will also respond to an original poster",
    body: "I am responding to an original poster",
    author_id: 4,
    response_id: 3
  }
])
