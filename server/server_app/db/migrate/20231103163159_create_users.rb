class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :mail
      t.string :password_digest
      t.string :pic

      t.timestamps
    end
  end
end
