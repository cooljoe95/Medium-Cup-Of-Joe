# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  story_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Like < ActiveRecord::Base
  belongs_to :story
  belongs_to :liker, class_name: "User", foreign_key: "author_id"
end
