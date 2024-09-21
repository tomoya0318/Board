# 環境変数の設定とコンテナの立ち上げ

## 環境変数の設定  
1. **`.env`ファイルを生成**
    ```bash
    mv ./.env.sample ./.env
    ```  
2. **`DB_PASSWORD`に生成した値を使用**
    ```bash
    openssl rand -base64 32 | tr -dc 'A-Za-z0-9' | head -c 32
    ```

## コンテナの立ち上げ  
1. **Dockerのイメージを作成**
    ```bash
    docker compose build
    ```
2. **データベースの作成**
    ```bash
    docker compose run api rails db:create
    ```
3. **コンテナを起動**
    - 下記のコマンドでフロントエンドを`http://localhost:3000`、バックエンドを`http://localhost:8000`で立ち上げます。
    ```bash
    docker compose up
    ```

