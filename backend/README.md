# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


* Routing

|メソッド    |URL                                       |コントローラ#アクション              |ルート名                              |説明                             |
|----------|-------------------------------------------|---------------------------------|----------------------------------|-----------------------------------|
| GET      | `/users/new`                              | `users#new`                     | new_user                         | 新しいユーザー作成フォームを表示       |
| GET      | `/boards`                                 | `boards#index`                  | boards                           | ボードの一覧を表示                   |
| GET      | `/boards/new`                             | `boards#new`                    | new_board                        | 新しいボード作成フォームを表示         |
| POST     | `/boards`                                 | `boards#create`                 | create_board                     | 新しいボードを作成                   |
| GET      | `/boards/:id`                             | `boards#show`                   | board                            | 特定のボードの詳細を表示              |
| GET      | `/boards/:id/edit`                        | `boards#edit`                   | edit_board                       | ボード編集フォームを表示              |
| PATCH    | `/boards/:id`                             | `boards#update`                 | update_board                     | 特定のボードを更新                   |
| DELETE   | `/boards/:id`                             | `boards#destroy`                | destroy_board                    | 特定のボードを削除                   |
| GET      | `/boards/:board_id/categories`            | `categories#index`              | board_categories                 | ボードに関連するカテゴリーの一覧を表示   |
| GET      | `/boards/:board_id/categories/new`        | `categories#new`                | new_board_category               | 新しいカテゴリー作成フォームを表示      |
| POST     | `/boards/:board_id/categories`            | `categories#create`             | create_board_category            | 新しいカテゴリーを作成                |
| GET      | `/boards/:board_id/categories/:id`        | `categories#show`               | board_category                   | 特定のカテゴリーの詳細を表示           |
| GET      | `/boards/:board_id/categories/:id/edit`   | `categories#edit`               | edit_board_category              | カテゴリー編集フォームを表示           |
| PATCH    | `/boards/:board_id/categories/:id`        | `categories#update`             | update_board_category            | 特定のカテゴリーを更新                |
| DELETE   | `/boards/:board_id/categories/:id`        | `categories#destroy`            | destroy_board_category           | 特定のカテゴリーを削除                |