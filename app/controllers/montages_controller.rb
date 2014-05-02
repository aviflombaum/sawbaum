require 'open-uri'

class MontagesController < ApplicationController

  def new
    
  end

  def vines
    vine_doc = Nokogiri::HTML(open(params[:vine_url]))    
    @vine_video_url = vine_doc.css("meta[property='twitter:player:stream']").attr("content").value
  end
end
