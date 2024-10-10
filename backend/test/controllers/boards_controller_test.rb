require "test_helper"

class BoardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @board = boards(:one)
  end

  test "index" do
    get boards_url
    assert_response :success
    assert_not_nil assigns(:boards)
  end

  test "new board" do
    get new_board_url
    assert_response :success
  end

  test "create board" do
    assert_difference('Board.count') do
      post boards_url, params: {board: {title: " Third Board", categories: ["category4"]}}
    end
    assert_redirected_to boards_path
  end

  test "create board with invalid data" do
    assert_no_difference('Board.count') do
      post boards_url, params: {board: {title: "", categories: []}}
    end
    assert_response :unprocessable_entity
  end

  test "edit" do
    get edit_board_url(@board)
    assert_response :success
  end

  test "update board" do
    patch board_url(@board), params: {board: {title: "Updated Title"}}
    assert_redirected_to boards_path
    @board.reload
    assert_equal "Updated Title", @board.title
  end

  test "update board with invalid data" do
    patch board_url(@board), params: {board: {title: ""}}
    assert_response :unprocessable_entity
  end

  test "destroy board" do
    assert_difference('Board.count', -1) do
      delete board_url(@board)
    end
    assert_redirected_to boards_path
  end
end
