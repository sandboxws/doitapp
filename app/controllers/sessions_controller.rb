class SessionsController < ApplicationController
  def create
    info = omniauth_hash['info']
    credentials = omniauth_hash['credentials']
    @user = User.find_by_uid info['uid']
    @user = User.new if @user.nil?
    @user.uid = omniauth_hash['uid']
    @user.name = info['name']
    @user.twitter_handle = info['nickname']
    @user.twitter_image_url = info['image']
    @user.twitter_token = credentials['token']
    @user.twitter_secret = credentials['secret']
    
    @user.save
    #puts @user.inspect
    # sigin the user to our app
    render :nothing => true
  end
  
  private
  def omniauth_hash
    request.env['omniauth.auth']
  end
end
