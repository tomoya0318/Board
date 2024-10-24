class CategoriesController < ApplicationController
  before_action :set_board, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  before_action :set_category, only: [:show, :edit, :update, :destroy]
  def index
    @categories = @board.categories
    render json: @categories
  end

  def new
    @category = @board.categories.new
    render json: @category
  end

  def create
    @category = @board.categories.new(category_params)

    if @category.save
      redirect_to "/boards/#{@category.board.id}"
    else
      render json:@category.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @category
  end
  
  def edit
    render json: @category
  end

  def update
    if @category.update(label: category_params[:label])
      redirect_to "/boards/#{@category.board.id}"
    else
      render json:@category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @category.destroy
    redirect_to "/boards/#{@category.board.id}/categories"
  end

  private
  def set_board
    @board = Board.find(params[:board_id]) 
  end

  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:label)
  end
end
