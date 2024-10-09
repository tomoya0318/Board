class BoardsController < ApplicationController
    def index
        @boards = Board.all
    end

    def new
        @board = Board.new
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            redirect_to boards_path
        else
            render :new, status: :unprocessable_entity
        end
    end

    def show
      @board = Board.find(params[:id])
    end
    def edit
      @board = Board.find(params[:id])
    end

    def update
      @board = Board.find(params[:id])
  
      if @board.update(title: board_params[:title])
        redirect_to boards_path
      else
        render :edit, status: :unprocessable_entity
      end
    end
  
    def destroy
      @board = Board.find(params[:id])
      @board.destroy
      redirect_to boards_path
    end

    private
    def board_params
      params.require(:board).permit(:user_id, :title, categories: [])
    end
end
