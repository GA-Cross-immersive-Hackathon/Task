class RegistrationsController < Devise::RegistrationsController

  protected

  def after_sign_up_path_for(users)
    new_action_path
  end

  def after_inactive_sign_up_path_for(users)
    new_action_path
  end

end
