require "test_helper"

class BoardTest < ActiveSupport::TestCase
  setup do
    @board = Board.new(title: "Second Board")
    @board.categories.build(label: "Category 1")
    @board.categories.build(label: "Category 2")
  end

  test "valid board" do
    assert @board.valid?
  end

  test "invalid without title" do
    @board.title = nil
    assert_not @board.valid?
    assert_not_nil @board.errors[:title]
  end

  test "board has categories" do
    assert_equal 2, @board.categories.size
  end
end