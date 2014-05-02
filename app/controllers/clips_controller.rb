require 'open-uri'

class ClipsController < ApplicationController
  def create
    @montage = Montage.find_by(:slug => params[:montage_id])
    @clip = @montage.clips.create_from_vine(params[:vine_url])
  end

  def destroy
  end
end
