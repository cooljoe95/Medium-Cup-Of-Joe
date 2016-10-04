class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :story_id, null: false

      t.timestamps
    end

    add_index :tags, :name
    add_index :tags, :story_id
  end
end
