#### Main Page

* [git.msjo.kr](http://git.msjo.kr) (debugjo.github.io)

#### 게시물 목록 가져오기 (페이징)
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
$.getJSON("https://www.msjo.kr/api/read/json?start=0&num=10&callback=?", function(data) {
	$("#xxx").empty();
	$.each(data.posts, function(i, posts) {
		$("#xxx").append("<li style='list-style-type:none; margin:0; padding:0; line-height:22px;'><a href='" + this["url"] + "'>ㆍ" + cutStr(this["regular-title"], 22) + " ⋅⋅</a></li>"); });
});	
</script>
```

#### 게시물 목록 가져오기
```html
<script type="text/javascript" src="http://www.msjo.kr/api/read/json"></script>
<ul>
<script type="text/javascript">
for (var i = 0; i < 20; i++) {
	document.write('<li><a style="font-family:Arial, Malgun Gothic;font-size:14px;" href="' + tumblr_api_read['posts'][i]['url'] + '">' + tumblr_api_read['posts'][i]['regular-title'] + '</a></li>');
}
</script>
</ul>
```

H3 CSS 수정할 목록
```html
<link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
<style>
#main-content h3:before {
	padding-right: 0.3em;
	margin-left: -2em;
	content: "///";
	color: #9ddcff;
}

#main-content h3 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-family: 'Architects Daughter', 'Helvetica Neue', Helvetica, Arial, serif;
    font-size: 18px;
    font-weight: bold;
    color: #474747;
    text-indent: 3px;
}
</style>
```

##### 메인 홈페이지에 연결할 목록
* http://www.msjo.kr
* http://git.msjo.kr
