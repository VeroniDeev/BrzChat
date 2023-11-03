class Api::V1::Auth::DeleteController < ApplicationController
  def destroy
    token = TokenManager.decode(params[:token])

    if !token
      return render json: {"state": "failed"}, status: :unauthorized
    end
    user = User.find_by(id: token["user_id"])
    if user
      user.destroy
      return render json: {"state": "success"}, ok: :ok
    end
  end
end
