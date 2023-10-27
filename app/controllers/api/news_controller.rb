class Api::NewsController < ApplicationController
  def index
    @news = News.all.order("id DESC")
    render json: all_news_json(@news)
  end

  def show
    news_ids = JSON.parse(params[:id])

    news = News.where(id: news_ids)
    render json: all_news_json(news)
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  private

  def all_news_json(news)
    news.map { |news| news_json(news) }
  end

  def news_json(news)
    date = news.created_at
    {
      id: news.id,
      title: news.title,
      info: news.info,
      body: news.body,
      image_urls: news_image_urls(news),
      created_at: date.strftime("%d.%m.%Y")
    }
  end

  def news_image_urls(news)
    news.images.map { |image| url_for(image) }
  end
end