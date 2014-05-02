class ClipsController < ApplicationController
  def create
    @montage = Montage.find_by(:slug => params[:montage_id])
    @clip = @montage.clips.create_from_vine(params[:vine_url])
  end

  def destroy
    @clip = Clip.find(params[:id])
    @montage = @clip.montage
    @clip.destroy
  end

  def update
    @clip = Clip.find(params[:id])
    @clip.top = params[:top] if params[:top].present?
    @clip.left = params[:left] if params[:left].present?
    @clip.z_index = params[:z_index] if params[:z_index].present?
    @clip.opacity = params[:opacity] if params[:opacity].present?
    @clip.width = params[:width] if params[:width].present?
    @clip.height = params[:height] if params[:height].present?
    @clip.save

    head :ok
  end
end
