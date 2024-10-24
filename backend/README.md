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

|メソッド    |URL                                       |コントローラ#アクション              |説明                             |
|----------|-------------------------------------------|---------------------------------|-----------------------------------|
| GET      | `/users/new`                              | `users#new`                     | 新しいユーザー作成フォームを表示       |
| GET      | `/boards`                                 | `boards#index`                  | ボードの一覧を表示                   |
| GET      | `/boards/new`                             | `boards#new`                    | 新しいボード作成フォームを表示         |
| POST     | `/boards`                                 | `boards#create`                 | 新しいボードを作成                   |
| GET      | `/boards/:id`                             | `boards#show`                   | 特定のボードの詳細を表示              |
| GET      | `/boards/:id/edit`                        | `boards#edit`                  　| ボード編集フォームを表示              |
| PATCH    | `/boards/:id`                             | `boards#update`                　| 特定のボードを更新                   |
| DELETE   | `/boards/:id`                             | `boards#destroy`                | 特定のボードを削除                   |
| GET      | `/boards/:board_id/categories`            | `categories#index`              | ボードに関連するカテゴリーの一覧を表示   |
| GET      | `/boards/:board_id/categories/new`        | `categories#new`              　 | 新しいカテゴリー作成フォームを表示      |
| POST     | `/boards/:board_id/categories`            | `categories#create`           　 | 新しいカテゴリーを作成                |
| GET      | `/boards/:board_id/categories/:id`        | `categories#show`             　| 特定のカテゴリーの詳細を表示           |
| GET      | `/boards/:board_id/categories/:id/edit`   | `categories#edit`        　　　　| カテゴリー編集フォームを表示           |
| PATCH    | `/boards/:board_id/categories/:id`        | `categories#update`    　　　　  | 特定のカテゴリーを更新                |
| DELETE   | `/boards/:board_id/categories/:id`        | `categories#destroy`    　　　　 | 特定のカテゴリーを削除                |