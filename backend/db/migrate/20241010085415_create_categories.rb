class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories, id: :uuid do |t|
      t.references :board, null: false, foreign_key: true, type: :uuid 
      t.string :label
      t.string :items,array: true, default: []

      t.timestamps
    end
  end
end
