class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false
      t.integer :story_id, null: false

      t.timestamps
    end

    add_index :likes, :author_id
    add_index :likes, :story_id
    add_index :likes, [:author_id, :story_id], unique: true
  end
end
