task :prune => [:environment] do
  Montage.all.each do |m|
    m.destroy if m.clips.empty?
  end
end