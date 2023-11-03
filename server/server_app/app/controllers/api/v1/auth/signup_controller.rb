class Api::V1::Auth::SignupController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      token = TokenManager.encode(user_id: @user.id)
      render json: {"state": "success", "token": token}, status: :created
    else
      render json: {"state": "failed", "reason": @user.errors}, status: :unprocessable_entity
    end
  end
  def user_params
    params.permit(:username, :mail, :password)
  end
end
