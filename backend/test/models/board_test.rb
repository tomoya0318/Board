require "test_helper"

class BoardTest < ActiveSupport::TestCase
    setup do
        @board = Board.new(title: "Sample Board", categories: ["category1", "category2"])
      end
    
      test "valid board" do
        assert @board.valid?
      end
    
      test "invalid without title" do
        @board.title = nil
        assert_not @board.valid?
        assert_not_nil @board.errors[:title]
      end
    end