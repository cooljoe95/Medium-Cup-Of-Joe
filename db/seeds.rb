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
