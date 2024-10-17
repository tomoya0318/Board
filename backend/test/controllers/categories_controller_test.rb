require "test_helper"

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @board = boards(:one)
    @category = @board.categories.create!(label: "Sample Category")
  end

  test "index" do
    get board_categories_url(@board)
    assert_response :success
    assert_not_nil assigns(:categories)
  end

  test "new" do
    get new_board_category_url(@board)
    assert_response :success
  end

  test "create" do
    assert_difference('Category.count', 1) do
      post create_board_category_url(@board), params: { category: { label: "New Category" } }
    end
    assert_redirected_to board_path(@board)
  end

  test "not create category with invalid data" do
    assert_no_difference('Category.count') do
      post create_board_category_url(@board), params: { category: { label: "" } }
    end
    assert_response :unprocessable_entity
  end

  test "show" do
    get board_category_url(@board, @category)
    assert_response :success
  end

  test "edit" do
    get edit_board_category_url(@board, @category)
    assert_response :success
  end
  test "update" do
    patch update_board_category_url(@board, @category), params: { category: { label: "Updated Label" } }
    assert_redirected_to board_path(@board)
    @category.reload
    assert_equal "Updated Label", @category.label
  end

  test "not update category with invalid data" do
    patch update_board_category_url(@board, @category), params: { category: { label: "" } }
    assert_response :unprocessable_entity
  end
  
  test "destroy" do
    assert_difference('Category.count', -1) do
      delete destroy_board_category_url(@board, @category)
    end
    assert_redirected_to board_categories_path(@board)
  end
end
