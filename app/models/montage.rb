class Montage < ActiveRecord::Base
  has_many :clips
  before_create :make_slug
  # validates :name, :presence => true

  def to_param
    self.slug
  end
  
  private

  def make_slug
    self.slug = self.name.downcase.gsub(/[^a-z1-9]+/, '-').chomp('-')
  end
end
