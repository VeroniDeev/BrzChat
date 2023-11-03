class CreateCalls < ActiveRecord::Migration[7.1]
  def change
    create_table :calls do |t|
      t.references :friendship, null: false, foreign_key: true
      t.integer :who_call
      t.date :start
      t.date :finish
      t.string :type

      t.timestamps
    end
  end
end
