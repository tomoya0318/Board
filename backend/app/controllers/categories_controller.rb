class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def new
    @category = Category.new
  end

  def create
    @board = Board.find(params[:board_id])
    @category = @board.categories.new(category_params)

    if @category.save
      redirect_to board_path(@board)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @category = Category.find(params[:id])
  end
  
  def edit
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])
  
    if @category.update(label: category_params[:label])
      redirect_to board_path(@category.board)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    redirect_to board_categories_path(@category.board)
  end

  private
  def category_params
    params.require(:category).permit(:label)
  end
end
