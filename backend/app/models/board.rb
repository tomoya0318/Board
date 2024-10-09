class Board < ApplicationRecord
  # has_many :columns, dependent: :destroy

  validates :user_id, presence: true
  validates :title, presence: true
  validates :categories, presence: true
end
