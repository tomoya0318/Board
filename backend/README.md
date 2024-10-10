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

| メソッド | パス                 | コントローラ#アクション  | 説明                             |
|----------|---------------------|--------------------------|----------------------------------|
| GET      | `/boards`          | `boards#index`           | ボードの一覧を表示              |
| GET      | `/boards/new`      | `boards#new`             | 新しいボード作成フォームを表示  |
| POST     | `/boards`          | `boards#create`          | 新しいボードを作成              |
| GET      | `/boards/:id`      | `boards#show`            | 特定のボードの詳細を表示        |
| GET      | `/boards/:id/edit` | `boards#edit`            | ボード編集フォームを表示        |
| PATCH    | `/boards/:id`      | `boards#update`          | 特定のボードを更新              |
| DELETE   | `/boards/:id`      | `boards#destroy`         | 特定のボードを削除              |