source "https://rubygems.org"

# Jekyll 버전 (GitHub Pages 환경과 유사하게 설정)
gem "jekyll", "~> 4.3.3"

# Minimal Mistakes 테마 라이브러리
gem "minimal-mistakes-jekyll"

# GitHub Pages 배포를 위한 필수 플러그인들
group :jekyll_plugins do
  gem "jekyll-include-cache"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
  gem "jekyll-gist"
  gem "jekyll-paginate"
  gem "jekyll-remote-theme" # remote_theme 설정을 쓸 경우 필수
end

# 루비 3.x 버전 이상에서 필요한 라이브러리 (에러 방지용)
gem "webrick"
