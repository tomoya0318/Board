class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.references :board, null: false, foreign_key: true
      t.string :label
      t.string :items,array: true, default: []

      t.timestamps
    end
  end
end
