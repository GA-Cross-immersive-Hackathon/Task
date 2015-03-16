class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string     :content, null: false
      t.references :user
      t.boolean    :priority, :default => false
      t.datetime   :time_started
      t.datetime   :time_finished
      t.timestamps
    end
  end
end
