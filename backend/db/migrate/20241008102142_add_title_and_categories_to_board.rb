class AddTitleAndCategoriesToBoard < ActiveRecord::Migration[7.0]
  def change
    add_column :boards, :title, :string
    add_column :boards, :categories, :string, array: true, default: []
  end
end
