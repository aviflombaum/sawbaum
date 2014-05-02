require 'open-uri'

class Clip < ActiveRecord::Base
  belongs_to :montage

  def self.create_from_vine(vine_url)
    vine_doc = Nokogiri::HTML(open(vine_url))    
    self.create(:vine_video_url => vine_doc.css("meta[property='twitter:player:stream']").attr("content").value)
  end
end
