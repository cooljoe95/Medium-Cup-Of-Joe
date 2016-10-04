class Api::SessionController < ApplicationController

  def method_name

  end

  def current_user
    @current_user = User.find_by(session_token: self.session_token)
  end
end
