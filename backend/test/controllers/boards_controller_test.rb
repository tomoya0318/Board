require "test_helper"

class BoardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @board = boards(:one)
  end

  test "index" do
    get "/boards" 
    assert_response :success
    assert_not_nil assigns(:boards)
  end

  test "new board" do
    get "/boards/new"
    assert_response :success
  end

  test "create board" do
    assert_difference("Board.count") do
      post "/boards", params: {board: {title: " Third Board"}}
    end
    assert_redirected_to boards_path
  end

  test "create board with invalid data" do
    assert_no_difference("Board.count") do
      post "/boards", params: {board: {title: ""}}
    end
    assert_response :unprocessable_entity
  end

  test "edit" do
    get "/boards/#{@board.id}/edit"
    assert_response :success
  end

  test "update board" do
    patch "/boards/#{@board.id}", params: {board: {title: "Updated Title"}}
    assert_redirected_to boards_path
    @board.reload
    assert_equal "Updated Title", @board.title
  end

  test "update board with invalid data" do
    patch "/boards/#{@board.id}", params: {board: {title: ""}}
    assert_response :unprocessable_entity
  end


  test "destroy board" do
    @board = boards(:one)
    assert_difference("Board.count", -1) do
      delete "/boards/#{@board.id}"
    end
    assert_response :no_content
  end
end
