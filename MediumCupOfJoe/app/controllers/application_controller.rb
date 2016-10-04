class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def signed_in?
    !!current_user
  end

  def login(user)
    session[:token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.try(:reset_session_token!)
    session[:token] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session[:token])
  end

  def require_logged_in!
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
