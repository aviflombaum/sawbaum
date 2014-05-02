require 'open-uri'

class MontagesController < ApplicationController

  def new
    @montage = Montage.new
  end

  def create
    @montage = Montage.new(montage_params)
    @montage.save

    redirect_to edit_montage_path(@montage)
  end

  def edit
    @montage = Montage.find_by(:slug => params[:id])
  end

  def show
    @montage = Montage.find_by(:slug => params[:id])
  end


  private
    def montage_params
      params.require(:montage).permit(:name)
    end
end
