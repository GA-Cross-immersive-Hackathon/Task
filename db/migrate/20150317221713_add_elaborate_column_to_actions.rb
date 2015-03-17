class AddElaborateColumnToActions < ActiveRecord::Migration
  def change
    add_column :actions, :elaborate, :boolean, :default => false
  end
end
