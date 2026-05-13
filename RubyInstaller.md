```bash
RubyInstaller 3.4 

gem install bundler

프로젝트 루트에서
bundle install
Gemfile 기준으로 설치

bundle exec jekyll serve
bundle exec jekyll serve --livereload

로그 안보이게
bundle exec jekyll serve --quiet
bundle exec jekyll serve --livereload --incremental 
```

## Ruby & Jekyll 환경 운영 가이드

### 1. 초기 환경 구축 (Windows)
*   **Ruby 설치:** RubyInstaller 3.4 버전 사용 (가장 안정적인 최신 계열).
*   **Bundler 설치:** 라이브러리(Gem)들을 관리하는 매니저를 설치
    ```bash
    gem install bundler
    ```
*   **MSYS2 설정 (ridk):** Windows에서 C 확장 도구들이 필요한 Gem(예: `eventmachine`, `sassc` 등)을 빌드할 때 필수
    *   `ridk install`: MSYS2 및 빌드 도구를 설치 (보통 1, 3번 선택).
    *   `ridk enable`: 현재 터미널 세션에서 MSYS2 도구들을 사용할 수 있도록 환경 변수를 활성화

---

### 2. 프로젝트 시작 및 관리
프로젝트 루트 폴더(Gemfile이 있는 곳)에서 수행합

*   **의존성 설치:** `Gemfile`에 적힌 모든 라이브러리를 설치하고 `Gemfile.lock`을 생성
    ```bash
    bundle install
    ```
*   **플랫폼 추가 (중요):** GitHub Actions(Linux)와의 호환성을 위해 반드시 실행
    ```bash
    bundle lock --add-platform x86_64-linux
    ```

---

### 3. 로컬 서버 실행 명령어 (Jekyll)
`bundle exec`를 앞에 붙여야 `Gemfile.lock`에 고정된 정확한 버전을 사용하여 실행

| 명령어 | 설명 |
| :--- | :--- |
| `bundle exec jekyll serve` | 로컬 서버 실행 (`http://127.0.0.1:4000`) |
| `bundle exec jekyll serve --livereload` | 수정 시 브라우저 자동 새로고침 |
| `bundle exec jekyll serve --incremental` | 변경된 파일만 다시 빌드 (속도 향상) |
| `bundle exec jekyll serve --quiet` | 불필요한 로그를 숨기고 깔끔하게 실행 |

**추천 조합 (쾌적한 개발 환경):**
```bash
bundle exec jekyll serve --livereload --incremental --quiet
```

