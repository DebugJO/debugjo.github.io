module Jekyll
  class YouTubeTag < Liquid::Tag
    @videoid = nil
    @width = ''
    @height = ''

    def initialize(tag_name, markup, tokens)
      if markup =~ /(?:(?:https?:\/\/)?(?:www.youtube.com\/(?:embed\/|watch\?v=)|youtu.be\/)?(\S+)(?:\?rel=\d)?)(?:\s+(\d+)\s(\d+))?/i
        @videoid = $1
        @width = $2 || "640"
        @height = $3 || "480"
      end
      super
    end

    def render(context)
      ouptut = super
      if @videoid
        intrinsic = ((@height.to_f / @width.to_f) * 100)
        padding_bottom = ("%.2f" % intrinsic).to_s  + "%"
        video = "<style>.bt-video-container iframe,.bt-video-container object,.bt-video-container embed{position:absolute;top:0;left:0;width:100%;height:100%;margin-top:0}</style>\n"
        video += %Q{<div class="bt-video-container" style="position:relative;padding-bottom:56.25%;height:auto;max-width:100%overflow:hidden"><iframe width="#{@width}" height="#{@height}" src="http://www.youtube.com/embed/#{@videoid}?rel=0" frameborder="0" allowfullscreen></iframe></div>}
      else
        "Error processing input, expected syntax: {% youtube video_id [width height] %}"
      end
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTubeTag)
