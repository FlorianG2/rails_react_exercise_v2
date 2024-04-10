class AddPriceToExercises < ActiveRecord::Migration[7.0]
  def change
    add_column :exercises, :price, :integer
  end
end
