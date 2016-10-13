# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_pic_url :string
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :stories, class_name: "Story", foreign_key: "author_id"
  has_many :follower_ids, class_name: "Follow", foreign_key: "followed_id"
  has_many :followed_ids, class_name: "Follow", foreign_key: "follower_id"
  has_many :liked_story_ids, class_name: "Like", foreign_key: "author_id"

  has_many :followed_people, through: :followed_ids
  has_many :followers, through: :follower_ids
  has_many :liked_stories, through: :liked_story_ids, source: :story

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user
      user.is_password?(password) ? user : nil
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
