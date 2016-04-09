<!DOCTYPE HTML>
<html>
	<head>
		<meta charset='utf-8'>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>啃萝卜智能硬件平台</title>
		<meta name="keywords" content="arduino 开发 IDE 开发平台 教程" />
		<meta name="description" content="啃萝卜智能硬件平台" />
		<meta name="csrf-token" content="{{csrf_token()}}" />

		<link href="/assets/images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
		<link href="/assets/css/index.css" rel="stylesheet" />

		<script src="/assets/js/jquery.js"></script>

		<script src="/assets/js/ng/vendor/beautify.js"></script>
		<script src="/assets/js/ng/vendor/prism.js"></script>
		<script src="/assets/js/ng/vendor/prism-line-numbers.js"></script>
		<script src="/assets/js/ng/vendor/lodash.js"></script>
		<script src="/assets/js/ng/vendor/jsPlumb.js"></script>
		<script src="/assets/js/ng/vendor/autogrow.js"></script>
		<script src="/assets/js/ng/vendor/bloqs.js"></script>

		<script src="/assets/js/ng/vendor/angular.js"></script>
		<script src="/assets/js/ng/vendor/angular-clipboard.js"></script>
		<script src="/assets/js/ng/vendor/angular-route.js"></script>
		<script src="/assets/js/ng/vendor/angular-sanitize.js"></script>
		<script src="/assets/js/ng/vendor/angular-translate.js"></script>
		<script src="/assets/js/ng/vendor/angular-translate-loader-static-files.js"></script>
		<script src="/assets/js/ng/vendor/ngDialog.js"></script>

		<script src="/assets/js/ng/app.js"></script>

		<script src="/assets/js/ng/factory/bloqs.factory.js"></script>
		<script src="/assets/js/ng/factory/lodash.factory.js"></script>

		<script src="/assets/js/ng/service/common.js"></script>
		<script src="/assets/js/ng/service/commonModals.js"></script>
		<script src="/assets/js/ng/service/hw2Bloqs.js"></script>
		<script src="/assets/js/ng/service/utils.js"></script>
		<script src="/assets/js/ng/service/nodeUtils.js"></script>
		<script src="/assets/js/ng/service/projectApi.js"></script>
		<script src="/assets/js/ng/service/alerts.js"></script>

		<script src="/assets/js/ng/directive/tab.js"></script>
		<script src="/assets/js/ng/directive/tabset.js"></script>
		<script src="/assets/js/ng/directive/dropdown.js"></script>
		<script src="/assets/js/ng/directive/toolbox.js"></script>
		<script src="/assets/js/ng/directive/bitbloqBloqCreator.js"></script>
		<script src="/assets/js/ng/directive/drag-drop.js"></script>
		<script src="/assets/js/ng/directive/scrollBar.js"></script>
		<script src="/assets/js/ng/directive/prism.js"></script>
		<script src="/assets/js/ng/directive/commonDropdown.js"></script>

		<script src="/assets/js/ng/controller/bloqsProject.js"></script>
		<script src="/assets/js/ng/controller/ApiController.js"></script>
		<script src="/assets/js/ng/controller/softwareTab.js"></script>
		<script src="/assets/js/ng/controller/toolboxSW.js"></script>
		<script src="/assets/js/ng/controller/hardwareTab.js"></script>
		<script src="/assets/js/ng/controller/alerts.js"></script>

		<script src="/assets/js/require.js" data-main="/assets/js/index"></script>
	</head>
	<body>
		<div class="main">
			<div class="main-wrap">
				<div class="main-header">
					<div class="logo">
					</div>
					<div class="wrap">
						<div class="top-menu">
							<ul>
								<li data-action="build"><i class="kenrobot ken-build"></i>编译</li><li data-action="burn"><i class="kenrobot ken-upload"></i>烧写</li><li data-action="format"><i class="kenrobot ken-format"></i>格式化</li><li data-action="save"><i class="kenrobot ken-save"></i>保存</li><li data-action="download"><i class="kenrobot ken-download"></i>下载</li><li data-action="logcat"><i class="kenrobot ken-terminal"></i>输出</li>
							</ul>
						</div>
						<div class="user-info {{isset($user) ? 'active' : ''}}">
							<div class="wrap">
								<a class="photo" href="{{$mainpage}}" target="_blank">
									<img src="{{$user->avatar_url or asset('assets/images/default_portrait.png')}}" />
								</a>
								<div class="welcome">
									<span class="name">{{isset($user) ? $user->name : ''}}</span><i class="kenrobot ken-triangle-down arrow"></i>
								</div>
							</div>
							<div class="user-menu">
								<ul>
									<li data-action="share"><i class="kenrobot ken-share"></i>分享</li>
									<li data-action="setting"><i class="kenrobot ken-setting"></i>设置</li>
									<li data-action="logout"><i class="kenrobot ken-logout"></i>退出</li>
								</ul>
							</div>
						</div>
						<div class="top-tabs">
							<ul>
							</ul>
						</div>
					</div>
				</div>
				<div class="main-content">
					<div class="project-sidebar">
						<button class="project-icon"><i class="kenrobot ken-project"></i></button>
						<div class="project-list">
							<div class="list x-scrollbar">
								<ul>
									<li data-project-id="0">
										<div class="title">
											<span class="name">我的项目</span><i class="kenrobot"></i>
										</div>
										<div class="view">
											<div data-view="software"><span class="name">我的项目</span>.ino</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="operation">
								<ul>
									<li class="new" data-action="new" title="新建项目"><i class="kenrobot ken-add"></i><span>新建</span></li>
									<li class="edit" data-action="edit" title="编辑项目"><i class="kenrobot ken-info-info2"></i>信息</li>
									<li class="delete" data-action="delete" title="删除项目"><i class="kenrobot ken-delete"></i>删除</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="ng-app" ng-app="kenrobot">
						<base href="/" />
						<div ng-include="'assets/images/sprite.svg'" ng-hide="true"></div>
						<div data-ng-include="'assets/views/components/alerts.html'" ng-controller="AlertsCtrl" class="alerts--container"></div>
						<div ng-view></div>
					</div>
				</div>
			</div>
			<div class="bottom-container">
				<div class="logcat"></div>
				<div class="drag-handle"></div>
			</div>
		</div>
		<div class="layers">
			<div class="float-layer">
				<div class="copyright">
					<div class="wrap">
						备案号：京ICP备15039570号&nbsp;&nbsp;&nbsp;&nbsp;Copyright © 2014 KenRobot.com All Rights Reserved
						<i class="kenrobot ken-close close-btn"></i>
					</div>
				</div>
			</div>
			<div class="drag-layer"></div>
			<div class="modal dialog-layer">
				<div class="x-dialog x-dialog-custom login-dialog">
					<i class="kenrobot ken-close x-dialog-close"></i>
					<ul class="switch">
						<li class="account active" data-action="account"></li>
						<li class="weixin" data-action="weixin"><div class="tips">扫码登录更安全</div></li>
					</ul>
					<div class="logo"></div>
					<div class="seperator"></div>
					<div class="wrap">
						<div class="tab tab-account active">
							<div class="title">账号登录</div>
							<form>
								{!! csrf_field() !!}
								<input class="qrcode-key" type="hidden" value="{{$key or ''}}">
								<div class="field">
									<span class="icon"><i class="kenrobot ken-user"></i></span>
									<input class="email" type="email" name="email" value="{{old('email')}}" placeholder="邮箱地址/手机号码" autocomplete="off" />
								</div>
								<div class="field">
									<span class="icon"><i class="kenrobot ken-password"></i></span>
									<input class="password" type="password" name="password" placeholder="密码" />
								</div>
								<div class="message">
									<span></span>
								</div>
								<input class="login-btn" type="button" value="登录" />
							</form>
						</div>
						<div class="tab tab-weixin">
							<div class="scan">
								<img src="{{asset('/assets/images/weixin-scan.png')}}" />
							</div>
							<img class="qrcode" alt="微信扫码" src="{{$qrcodeurl or ''}}" />
							<div class="tips">
								请使用微信扫一扫<br />
								扫码关注后即可直接登录
							</div>
						</div>
					</div>
					<div class="footer">
						<a class="forget-password" href="{{$find_password_url}}">忘记密码</a>
						<a class="register" href="{{$register_url}}">点击注册</a>
						<span class="no-account">还没有啃萝卜账号？</span>
					</div>
				</div>
				<div class="x-dialog x-dialog-info install-dialog">
					<div class="x-dialog-title">安装</div>
					<i class="kenrobot ken-close x-dialog-close"></i>
					<div class="x-dialog-content selectable">
						你没有安装啃萝卜<span class="strong">KenExt.crx</span>，请按以下步骤操作:
						<div class="step">
							Step 1: 点击<a href="http://platform.kenrobot.com/download/KenExt.crx" title="啃萝卜">下载</a><br />
							Step 2: 打开chrome浏览器，在地址栏输入<span class="strong">chrome://extensions</span><br />
							Step 3: 把<span class="strong">KenExt.crx</span>拖入浏览器<br />
							Step 4: 完成安装
						</div>
						<div class="des">说明: 如果顶部弹出“无法添加来自此网站的应用...”，请点击确定。由于一些你懂的原因，我们不能把插件发布到google应用商店。就算能发布，部分用户也不能...，所以<span class="helpless">╮(╯▽╰)╭</span></div>
					</div>
					<div class="x-dialog-btns">
						<button class="x-dialog-btn confirm">确定</button>
					</div>
				</div>
				<div class="x-dialog x-dialog-info arduino-driver-dialog">
					<div class="x-dialog-title">驱动问题</div>
					<i class="kenrobot ken-close x-dialog-close"></i>
					<div class="x-dialog-content selectable">
						如果你遇到了Arduino<span class="strong">驱动问题</span>，请按以下步骤操作:
						<div class="step">
							Step 1: 点击<a class="downloadUrl" href="#" title="Arduino驱动">下载</a>并解压<br />
							Step 2: 运行<span class="strong">arduino驱动安装.exe</span><br />
							Step 3: 完成安装
						</div>
					</div>
					<div class="x-dialog-btns">
						<button class="x-dialog-btn confirm">确定</button>
					</div>
				</div>
				<div class="x-dialog x-dialog-confirm delete-project-dialog">
					<div class="x-dialog-title">删除确认</div>
					<i class="kenrobot ken-close x-dialog-close"></i>
					<div class="x-dialog-content">
						删除后不可恢复，确定要删除项目"<span class="strong name"></span>"吗？
					</div>
					<div class="x-dialog-btns">
						<button class="x-dialog-btn confirm">确定</button><button class="x-dialog-btn cancel">取消</button>
					</div>
				</div>
				<div class="x-dialog x-dialog-info building-dialog">
					<div class="x-dialog-title">编译</div>
					<i class="kenrobot ken-close x-dialog-close"></i>
					<div class="x-dialog-content"></div>
					<div class="x-dialog-btns">
						<button class="x-dialog-btn confirm">确定</button>
					</div>
				</div>
				<div class="x-dialog x-dialog-custom burn-dialog">
					<div class="x-dialog-title">烧写</div>
					<i class="kenrobot ken-close x-dialog-close"></i>
					<div class="x-dialog-content">
						<div class="tab tab-init active">
							<div class="wrap">
								<div class="message">
									正在初始化，请稍候
								</div>
							</div>
						</div>
						<div class="tab tab-no-serial">
							<div class="wrap">
								<div class="message">
									未检测到有Arduino开发板或其它串口设备插入<br />
									<a class="driver" href='#'>驱动问题?</a>解决后请关闭本窗口，然后重新点击烧写图标
								</div>
							</div>
						</div>
						<div class="tab tab-connect">
							<div class="wrap">
								<div class="tips">
									未检测到Arduino开发板连接或您已连接多个<br />请手动设置串口
								</div>
								<div class="field">
									<label>端口:</label>
									<select class="port">
									</select>
									<label>波特率:</label>
									<select class="bitRate">
										<option>115200</option>
										<option>57600</option>
										<option>19200</option>
										<option>9600</option>
										<option>4800</option>
									</select>
								</div>
								<div>
									<input class="connect" type="button" value="连接" />
								</div>
								<div class="message"></div>
								<a class="driver" href='#'>驱动问题?</a>
							</div>
						</div>
						<div class="tab tab-burn">
							<div class="wrap">
								<div class="burn-wrap">
									<input class="burn" type="button" value="烧写" />
									<div class="message"></div>
								</div>
								<div class="burn-progress">
									<ul>
									@for($i = 0; $i < 50; $i++)
										<li></li>
									@endfor
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="dialog save-dialog">
				<div class="close-btn right">
					<i class="kenrobot ken-close"></i>
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
			<div class="message-layer"></div>
			@if(!$has_visit)
			<div class="modal guide-layer">
				<div class="guide-step guide-login">
					<div class="guide-title">提示：</div>
					<div class="guide-content">
						点击此处即可弹出<span class="strong">登录</span>窗口<br />
						登录后可解锁更多功能哦<br />
						推荐使用Google Chrome浏览器
					</div>
				</div>
				<div class="guide-step guide-interactive-mode">
					<div class="guide-title">提示：</div>
					<div class="guide-content">
						点击此处可切换<span class="strong">交互模式</span><br />
						包括拖拽模式和现代模式
					</div>
				</div>
				<div class="guide-step guide-code-edit">
					<div class="guide-title">提示：</div>
					<div class="guide-content">
						双击空白处或主板<br />
						可切换到<span class="strong">代码编辑</span>
					</div>
				</div>
				<div class="guide-step guide-burn">
					<div class="guide-title">提示：</div>
					<div class="guide-content">
						点击此处按钮可进行<br />
						<span class="strong">烧写</span>、<span class="strong">保存</span>和<span class="strong">下载</span>
					</div>
				</div>
				<div class="guide-step guide-enjoy">
					<div class="guide-content">
						尽情使用吧
					</div>
				</div>
			</div>
			@endif
		</div>
	</body>
</html>
