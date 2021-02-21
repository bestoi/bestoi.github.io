<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link href="https://vhjc.github.io/new.css" rel="stylesheet">
		<script type="text/javascript" src="https://vhjc.github.io/new.js"></script>
		<title>新标签页</title>
		<link rel="shortcut icon" href="https://bestoi.github.io/ico.ico">
	</head>
	<body>
		<div id="bg"></div>
		<span id="search">
			<div id="datetime">
				<script>
					setInterval("document.getElementById('datetime').innerHTML=new Date().toLocaleString();", 1);
				</script>
			</div>
			<form action="javascript:searchbaidu()">
				<input type="submit" value="Baidu"/>
				<input id="baidu" type="text" placeholder="百度一下" autofocus="true" autocomplete="off"/>
			</form>
			<form action="javascript:searchbing()">
				<input type="submit" value="Bing"/>
				<input id="bing" type="text" placeholder="必应搜索" autocomplete="off"/>
			</form>
			<form action="javascript:searchgooglem()">
				<input type="submit" value="Googlem"/>
				<input id="googlem" type="text" placeholder="谷歌搜索(建议先安装谷歌上网助手)" autocomplete="off"/>
			</form>
			<form action="javascript:zhihu()">
				<input type="submit" value="Zhihu"/>
				<input id="zhihu" type="text" placeholder="搜索知乎" autocomplete="off"/>
			</form>
			<div id="about">
				<span>
					&copy; 2020 
					<a href="view-source:https://vhjc.github.io/bsttab">网页源代码</a>
				</span>
				<span>
					<a href="#感谢您的支持">点赞</a>
				</span>
				<span>
					背景图片来自必应每日一图
				</span>
				<span>
					<a>可以把这个页面设置成浏览器主页</a>
				</span>
				<details>
					<summary>建议清除浏览器缓存再访问</summary>
					<p>若不清除缓存可能会导致JavaScript加载错误</p>
				</details>
			</div>
		</span>

		<span id="buttons">
			<a href="https://www.youdao.com" target="_blank">有道词典</a>
			<a href="https://map.baidu.com" target="_blank">百度地图</a>
			<a href="https://bing.com/images" target="_blank">Bing图片</a>
			<a href="https://bilibili.com" target="_blank">Bilibili</a>
			<a href="https://www.csdn.net/" target="_blank">CSDN</a>
			<a href="https://www.luogu.com.cn/" target="_blank">洛谷</a>
			<a href="https://music.163.com" target="_blank">网易云音乐</a>
			<a href="https://mail.163.com" target="_blank">163邮箱</a>
			<a href="https://wenku.baidu.com" target="_blank">百度文库</a>
			<a href="https://jianshu.com" target="_blank">简书</a>
			<a href="https://ximalaya.com" target="_blank">喜马拉雅</a>
			<a href="https://www.iqiyi.com/" target="_blank">爱奇艺</a>
			<a href="https://noi.top" target="_blank">Online Judge</a>
			<a href="https://tool.lu" target="_blank">工具箱</a>
			<a href="https://chrome.google.com/webstore/category/extensions?hl=zh-CN" target="_blank">谷歌网上应用商店</a>
		</span>
	</body>
</html>
