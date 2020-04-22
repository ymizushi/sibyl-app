class TypeToKind < ActiveRecord::Migration[6.0]
  def up
    add_column :activities, :kind, :string
    remove_column :activities, :type, :string
  end

  def down
    remove_column :activities, :kind, :string
    add_column :activities, :type, :string
  end 
end
