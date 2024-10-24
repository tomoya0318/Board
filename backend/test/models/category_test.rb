require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  setup do
    @board = boards(:one)
    @category = @board.categories.build(label: "TestCategory")
  end

  test "valid category" do
    assert @category.valid?
  end

  test "invalid without label" do
    @category.label = nil
    assert_not @category.valid?
    assert_not_nil @category.errors[:label]
  end
end
