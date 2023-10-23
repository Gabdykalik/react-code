class Api::SectionsController < ApplicationController
  def index
    @sections = Section.all
    render json: sections_json(@sections)
  end

  def show
    section_ids = JSON.parse(params[:id])

    sections = Section.where(id: section_ids)
    render json: sections_json(sections)
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  private

  def sections_json(sections)
    sections.map { |section| section_json(section) }
  end

  def section_json(section)
    {
      id: section.id,
      title: section.title,
      body: section.body,
    }
  end
end