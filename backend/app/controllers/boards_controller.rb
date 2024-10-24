class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :edit, :update, :destroy]
  def index
    @boards = Board.all
    render json:@boards
  end

  def new
    @board = Board.new
    render json:@boards
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      redirect_to "/boards"
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @board
  end
  
  def edit
    render json: @board
  end

  def update
    if @board.update(title: board_params[:title])
      redirect_to '/boards'
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @board.destroy
    head :no_content
  end

  private
    def set_board
      @board = Board.find(params[:id])
    end

    def board_params
      params.require(:board).permit(:title)
    end
end
