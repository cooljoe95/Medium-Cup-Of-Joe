# == Schema Information
#
# Table name: stories
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :text             not null
#  author_id   :integer          not null
#  response_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Story < ActiveRecord::Base
  belongs_to :author, class_name: "User", foreign_key: "author_id"
  belongs_to :original_post, class_name: "Story", foreign_key: "response_id"

  has_many :responses, class_name: "Story", foreign_key: "response_id"

  validates :body, :author, presence: true
end
