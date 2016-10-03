# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic_url | string    | 
- [ ] has_many 
   * comments
   * liked stories
   * stories

## Tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed
story_id    | integer   | not null, indexed, foreign key (references the story that is tagged with this 

## Stories
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
body            | text      | not null
author_id       | integer   | not null, foreign key (references the author), indexed
response_id     | integer   | indexed, foreign key (references the story that this story is in response to) (i.e. Comments)
- [ ] has_many
   * responses
   * tags
   * likes

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references a user), indexed, unique [followed_id]
followed_id | integer   | not null, foreign key (references a user), indexed

## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed, unique [story_id]
story_id    | integer   | not null, foreign key (references story), indexed
