### 環境変数の設定  
   1. `.env`ファイルを生成
        ```
        mv ./.env.sample ./.env
        ```
    2. `DB_PASSWORD`に下記のコマンドで生成した値を使用
        ```
        openssl rand -base64 32 | tr -dc 'A-Za-z0-9' | head -c 32; echo
        ```

### コンテナの立ち上げ  
   1. dockerのimage作成
        ```
        docker compose build
        ```
   2. DBの作成
        ```
        docker compose run api rails db:create
        ```
   3. 起動  
      1. 下記のコマンドで立ち上げることでfrontを`http://localhost:3000`, backを`http://localhost:8000`で立ち上げ
      ```
      docker compose up
      ```