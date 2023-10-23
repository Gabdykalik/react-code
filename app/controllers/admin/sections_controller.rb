class Admin::SectionsController < ApplicationController
  def index
    @sections = Section.all.order(created_at: :desc)
  end

  def show
    @section = Section.find(params[:id])
  end

  def new
    @section = Section.new
  end

  def create
    @section = Section.new(section_params)

    if @section.save
      redirect_to admin_section_path(@section)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @section = Section.find(params[:id])
  end

  def update
    @section = Section.find(params[:id])

    if @section.update(section_params)
      redirect_to admin_section_path(@section)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @section = Section.find(params[:id])
    @section.destroy

    redirect_to admin_sections_path, status: :see_other
  end

  private

  def section_params
    params.require(:section).permit(:title, :body)
  end
end
