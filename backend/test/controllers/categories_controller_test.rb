require "test_helper"

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @board = boards(:one)
    @category = @board.categories.create!(label: "Sample Category")
  end

  test "index" do
    get "/boards/#{@board.id}/categories"
    assert_response :success
    assert_not_nil assigns(:categories)
  end

  test "new" do
    get "/boards/#{@board.id}/categories/new"
    assert_response :success
  end

  test "create" do
    assert_difference("Category.count", 1) do
      post "/boards/#{@board.id}/categories", params: { category: { label: "New Category" } }
    end
    assert_redirected_to "/boards/#{@board.id}"
  end

  test "not create category with invalid data" do
    assert_no_difference("Category.count") do
      post "/boards/#{@board.id}/categories", params: { category: { label: "" } }
    end
    assert_response :unprocessable_entity
  end

  test "show" do
    get "/boards/#{@board.id}/categories/#{@category.id}"
    assert_response :success
  end

  test "edit" do
    get "/boards/#{@board.id}/categories/#{@category.id}/edit"
    assert_response :success
  end

  test "update" do
    patch "/boards/#{@board.id}/categories/#{@category.id}", params: { category: { label: "Updated Label" } }
    assert_redirected_to "/boards/#{@board.id}"
    @category.reload
    assert_equal "Updated Label", @category.label
  end

  test "not update category with invalid data" do
    patch "/boards/#{@board.id}/categories/#{@category.id}", params: { category: { label: "" } }
    assert_response :unprocessable_entity
  end
  
  test "destroy" do
    assert_difference("Category.count", -1) do
      delete "/boards/#{@board.id}/categories/#{@category.id}"
    end
    assert_redirected_to "/boards/#{@board.id}/categories"
  end
end
