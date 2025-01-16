class Category < ApplicationRecord
    belongs_to :board
    validates :board, presence: true
    validates :label, presence: true
end