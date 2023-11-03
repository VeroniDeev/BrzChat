class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.date :sent
      t.text :content
      t.references :friendship, null: false, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
