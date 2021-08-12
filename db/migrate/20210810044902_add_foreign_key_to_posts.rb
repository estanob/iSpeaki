class AddForeignKeyToPosts < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :posts, :users, column: :creator_id
  end
end