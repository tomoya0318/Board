#rubyのバージョン指定
FROM ruby:3.3.5-slim
ARG RUBYGEMS_VERSION=3.5.19

# 必要なパッケージのインストールとクリーンアップ
RUN apt-get update -qq && \
    apt-get install -y postgresql-client build-essential libpq-dev nodejs git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /api

#Gemをインストール
COPY  Gemfile Gemfile.lock ./
RUN gem install bundler
RUN gem update --system ${RUBYGEMS_VERSION} && \
    bundle install

# Rails固有のエントリーポイント対応
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 8000

CMD ["rails", "server", "-b", "0.0.0.0"]