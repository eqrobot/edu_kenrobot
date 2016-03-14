<!DOCTYPE HTML>
<html>
	<head>
		<meta charset='utf-8'>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>啃萝卜智能硬件平台</title>
		<meta name="description" content="啃萝卜智能硬件平台" />
		<meta name="keywords" content="啃萝卜智能硬件平台" />
		<meta name="csrf-token" content="{{csrf_token()}}" />

		<link href="/assets/images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
		<link href="/assets/css/bootstrap.css" rel="stylesheet" />
		<link href="/assets/css/iconfont.css" rel="stylesheet" />
		<link href="/assets/css/index.css" rel="stylesheet" />
		<link href="/assets/css/theme/default.css" rel="stylesheet" />

		<script src="/assets/js/lib/require.min.js" data-main="/assets/js/main"></script>
	</head>
	<body class="unselectable theme-default" data-theme="default">
		<div class="main">
			<div class="sidebar">
				<div class="bar">
					<div class="logo">
					</div>
					<ul>
						<li data-action="project"><i class="iconfont icon-xiangmu"></i>项目</li>
						<li data-action="board"><i class="iconfont icon-miniboard"></i>主板</li>
						<li data-action="component"><i class="iconfont icon-icon23"></i>元件</li>
						<li class="hide" data-action="library"><i class="iconfont icon-zhanshigongcheng"></i>库</li>
						<li data-action="save"><i class="iconfont icon-baocun"></i>保存</li>
						<li data-action="download"><i class="iconfont icon-download"></i>下载</li>
						<li data-action="burn"><i class="iconfont icon-paixu"></i>烧写</li>
						<li data-action="serial"><i class="iconfont icon-paixu"></i>串口助手</li>
						<!-- <li data-action="share"><i class="iconfont icon-share"></i>分享</li> -->
					</ul>
				</div>
				<div class="tab tab-project">
					<div class="project">
						<div class="operation">
							<ul>
								<li class="new" data-action="new"><i class="iconfont icon-plus"></i></li>
								<li class="delete" data-action="delete"><i class="iconfont icon-iconfonttrash"></i></li>
								<li class="cancel hide" data-action="cancel">取消</li>
								<li class="confirm hide" data-action="confirm">确定</li>
							</ul>
						</div>
						<div class="list x-scrollbar" data-operation="default">
							<ul>
								<li data-project-id="0">
									<div class="title">
										<span class="name">我的项目</span><i class="iconfont icon-lashenkuangxiangxia"></i>
									</div>
									<div class="view">
										<div><span class="name">我的项目</span>.uno</div>
										<div><span class="name">我的项目</span>.ino</div>
									</div>
								</li>
							</ul>
						</div>
						
					</div>
				</div>
				<div class="tab tab-board">
					<div class="board x-scrollbar">
						<ul class="list">
						@foreach($boards as $index => $board)
						@if($index == 0)
							<li class="normal" data-board="{{$board->name}}"><img class="image" src="/assets/images/board/arduino-uno-r3-small.png" /><span class="name">{{$board->label}}</span></li>
						@else
							<li class="forward" data-board="{{$board->name}}">
								<img class="image" src="/assets/images/board/arduino-uno-r3-small.png" />
								<span class="name">{{$board->label}}</span>
								<div class="stamps"></div>
							</li>
						@endif
						@endforeach
						</ul>
					</div>
				</div>
				<div class="tab tab-component">
					<div class="component">
						<div class="search">
							<input class="key" type="text" placeholder="搜索" spellcheck="false"/>
							<i class="iconfont icon-search"></i>
						</div>
						<div class="items x-scrollbar">
							<ul class="list">
							@foreach($components as $component)
								<li class="item" data-component-name="{{$component->name}}"><img class="image" src="{{$component->source}}" /><div class="name">{{$component->label}}</div></li>
							@endforeach
							</ul>
						</div>
					</div>
				</div>
				<div class="tab tab-library">
					<div class="library x-scrollbar">
						<ul class="list">
						@foreach($libraries as $library)
							<li data-library="{{$library->name}}">{{$library->name}}</li>
						@endforeach
						</ul>
					</div>
				</div>
			</div>
			<div class="tabs">
				<div class="tab active">
					<div class="hardware">
						<div class="center" id="hardware-container"></div>
						<div class="follow">
							<img class="follower" />
						</div>
						<div class="tools">
							<ul class="interactive-mode">
								<li data-action="changeInteractiveMode" data-mode="modern">
									<i class="iconfont icon-suotoukai"></i>
									<div class="tips">切换拖拽模式</div>
								</li>
								<li class="hide" data-action="changeInteractiveMode" data-mode="drag">
									<i class="iconfont icon-suotouguan"></i>
									<div class="tips">切换现代模式</div>
								</li>
							</ul>
							<ul class="mode">
								<li class="active" data-action="changeMode" data-mode="default">
									<i class="iconfont icon-move"></i>
									<div class="tips">默认</div>
								</li>
								<li data-action="changeMode" data-mode="clone">
									<i class="iconfont icon-clone"></i>
									<div class="tips">克隆</div>
								</li>
								<li data-action="changeMode" data-mode="delete">
									<i class="iconfont icon-iconfonttrash"></i>
									<div class="tips">删除</div>
								</li>
							</ul>
						</div>
						<div class="copyright">
							<div class="alert alert-info alert-dismissible" role="alert">
								<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								备案号：京ICP备15039570号&nbsp;&nbsp;&nbsp;&nbsp;Copyright © 2014 KenRobot.com All Rights Reserved
							</div>
						</div>
						<div class="name-dialog">
							<div class="wrap">
								<span class="name-label">名字</span>
								<input class="name" type="text" />
							</div>
						</div>
					</div>
				</div>
				<div class="tab">
					<div class="software">
						<div class="editor"></div>
						<div class="back{{isset($user) ? ' active' : ''}}">
							返回<br />硬件设计
						</div>
					</div>
				</div>
			</div>
			<div class="user{{isset($user) ? ' active' : ''}}">
				<div class="dialog">
					<a class="photo" href="{{$mainpage}}" target="_blank">
						<img src="{{$user->avatar_url or asset('assets/images/default_portrait.png')}}" />
					</a>
					<div class="welcome">
						Hi,<span class="name">{{isset($user) ? $user->name : ''}}</span>
					</div>
					<a class="logout" href="/auth/logout">退出</a>
					<i class="iconfont icon-close1 close-btn"></i>
				</div>
				<div class="indent">
					<i class="iconfont icon-lashenkuangxiangxia"></i>
				</div>
			</div>
		</div>
		<div class="drag-layer"></div>
		<div class="dialog-layer mask">
			<div id="login_dialog" class="dialog">
				<div class="close-btn left">
					<i class="iconfont icon-close1"></i>
				</div>
				<div>
					<a href="javascript:;" title="返回" class="baseLoginBtn" data-action="baseLogin active" style="display:none;"></a>
					<div class="tab baseLogin active">
						<div class="tips">登录到啃萝卜</div>
						<form>
							{!! csrf_field() !!}
							<div class="message">
								<span></span>
							</div>
							<div class="field">
								<label class="email-icon"></label>
								<input class="email" type="email" name="email" value="{{ old('email') }}" placeholder="邮箱地址/手机号码" autocomplete="off" />
							</div>
							<div class="field">
								<label class="password-icon"></label>
								<input class="password" type="password" name="password" />
							</div>
							<div class="remember"></div>
							<div>
								<input id="qrcode_key" type="hidden" value="{{$key or ''}}">
								<a class="btn-login">登录</a>
								<a class="btn-register" href="{{$register_url}}">注册</a>
							</div>
						</form>
					</div>
					<a href="javascript:;" title="返回" class="qrLoginBtn" data-action="qrLogin"></a>
					<div class="tab qrLogin">
						<div class="tips">请使用微信扫一扫</div>
						<div class="tips">扫码关注后即可直接登录</div>
						<img class="qrcode" alt="微信扫码" src="{{ $qrcodeurl or '' }}" />
					</div>
				</div>
			</div>
			<div id="use_weixin" style="display:none;">
				<img src="{{asset('/assets/images/use_weixin.png')}}" />
			</div>
		</div>
		<div id="save-dialog" class="dialog">
			<div class="close-btn right">
				<i class="iconfont icon-close1"></i>
			</div>
			<div class="wrapper">
				<form class="form-horizontal">
					<div class="form-group">
						<label class="col-sm-2 control-label">项目名称：</label>
						<div class="col-sm-10">
							<input class="form-control" name="name" type="text" autocomplete="off" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">项目简介：</label>
						<div class="col-sm-10">
							<textarea class="form-control" name="intro" rows="5"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">公开：</label>
						<div class="col-sm-10">
							<label class="checkbox-inline"><input type="radio" name="public-type" value="1" checked="true" />私有</label>
							<label class="checkbox-inline"><input type="radio" name="public-type" value="2" />完全公开</label>
							<label class="checkbox-inline"><input type="radio" name="public-type" value="3" />好友公开</label>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<input class="btn save pull-right" type="button" name="save" value="保存项目" />
						</div>
					</div>
				</form>
			</div>
		</div>
		@if(!$has_visit)
		<div class="login-hint-layer mask">
			<div class="login-hint">
				<div class="title">提示：</div>
				<div class="content">点击此处即可弹出<span class="strong">【登录】</span>窗口<br />登录后可解锁更多功能哦<br />推荐使用Google Chrome浏览器</div>
			</div>
		</div>
		@endif
	</body>
</html>
