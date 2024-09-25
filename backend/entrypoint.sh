#!/bin/bash
   set -e
# サーバーのPIDファイルを削除
rm -f /backend/tmp/pids/server.pid
# データベースが利用可能になるのを待つ関数
wait_for_db() {
 echo "Waiting for database to become available..."
 while ! pg_isready -h db -p 5432 -q -U postgres; do
   sleep 2
 done
 echo "Database is available."
}

# データベースのセットアップ
setup_database() {
 echo "Setting up database..."
 bundle exec rails db:create
 bundle exec rails db:migrate
 RAILS_ENV=test bundle exec rails db:create
 RAILS_ENV=test bundle exec rails db:migrate
 echo "Database setup completed."
}

# メイン処理
main() {
 wait_for_db
 setup_database
 echo "Executing command: $@"
 exec "$@"
}

main "$@"
