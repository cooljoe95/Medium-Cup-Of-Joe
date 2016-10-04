class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :response_id

      t.timestamps
    end

    add_index :stories, :author_id
    add_index :stories, :response_id
  end
end
