define(function() {
	return {
		// 离开页面时，是否显示unload对话框
		// showUnloadDialog: true,

		//第一次访问时，是否显示引导
		// showFirstVisitHint: true,

		//编译是否需要登录
		buildAuth: true,

		extension: {
			//Chrome app id
			appId: "hhgmonhbodfiplppmcangkmlfkcnilpd",
			// appId: "coafmbildhjbgppkdkodlhaipakglmca",
			// appId: "gneclbfodabekgmaodhgajekmjgjkjbg",

			//Chrome app启动时是否需要登录
			// launchAuth: true,

			//Chrome app debug url
			debugUrl: "http://platform.kenrobot.com/extension/debug",

			//Chrome app burn url
			burnUrl: "http://platform.kenrobot.com/extension/burn",

			arduinoDriverUrl: "http://platform.kenrobot.com/help/arduino-driver",

			//烧写速度
			burnDelay: 250,
		}
	};
});