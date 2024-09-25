# このアプリはなに
このアプリはgithubの看板を再現したものです

## 開発にあたって
- フロントエンドを`http://localhost:3000`，バックエンドを`http://localhost:8000`でアクセスできます．

## devcontainerを用いた開発環境の構築（推奨）
1. vscodeの拡張機能であるDev Containerをインストール(vscodeで`ms-vscode-remote.remote-containers`と調べると出ます)
2. 左下の`><`のマークをクリック
3. コンテナで再度開くをクリック
4. コンテナを開く
   1. frontend開発を行う場合
      - `Rails API Backend`をクリック
   2. backend開発を行う場合
      - `Next.js Frontend`をクリック

## コンテナの立ち上げ(ローカル環境でやりたい人向け)

1. **Dockerのイメージを作成**
    ```bash
    docker compose build
    ```
2. **front側のパッケージのインストール**
   1. 下記のコマンドでモジュールをインストールします
    ```bash
    docker compose run npm install
    ```
3. **コンテナを起動**
    - 下記のコマンドで立ち上げる．
    ```bash
    docker compose up
    ```


### backendの作業をする場合
1. **api側のコンテナへの入り方**
   1. 下記のコマンドで，コンテナ内に入れので，backendを触る方はコンテナ内でコマンドを打つのに使ってください．
   ```bash
   docker exec  -it board-api-1 bash
   ```