define(['./EventManager', './util', './user', './project', './topMenu', './config', './ext/agent'], function(EventManager, util, user, project, topMenu, config, agent) {
	function init() {
		if(!config.pc) {
			initAjax();
		}

		if(config.pc) {
			initHref();
		}

		angular.bootstrap('.ng-app', ['kenrobot']);

		agent.init(config.extension);
		user.init();
		project.init();
		topMenu.init();
	}
	
	function initAjax() {
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
	}

	function initHref() {
		var openUrl = function(url) {
			util.dispatchEvent("app:openUrl", {url: url});
		}
			
		$('a.open-browser').on('click', function() {
			openUrl($(this).attr('href'));

			return false;
		});
	}

	return {
		init: init,
	}
});