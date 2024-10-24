class Board < ApplicationRecord
  has_many :categories, dependent: :destroy
  validates :title, presence: true
end
