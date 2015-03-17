class AddActionNameToActions < ActiveRecord::Migration
  def change
  	add_column :actions, :action_name, :text
  	rename_column :actions, :content, :notes
  end
end
