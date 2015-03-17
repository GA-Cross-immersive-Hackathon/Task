class RegistrationsController < Devise::RegistrationsController

  protected

  def after_sign_up_path_for(users)
    new_action_path
  end

  def after_inactive_sign_up_path_for(users)
    new_action_path
  end

  def after_sign_in_path_for(users)
    root_path
  end

end
