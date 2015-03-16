class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.string     :content, null: false
      t.references :user
      t.boolean    :priority, :default => false
      t.integer    :time_estimated
      t.datetime   :time_started
      t.datetime   :time_finished
      t.integer    :time_took
      t.boolean    :is_completed, :default => false
      t.timestamps
    end
  end
end
