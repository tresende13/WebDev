<!DOCTYPE html>
<html lang="en">

<head>
	<noscript><meta http-equiv="refresh" content="0; URL=/files/mmintz/F04PL0N7X/microsoftmvcvalidation.debug.js?nojsmode=1" /></noscript>
<script type="text/javascript">
window.load_start_ms = new Date().getTime();
window.load_log = [];
window.logLoad = function(k) {
	var ms = new Date().getTime();
	window.load_log.push({
		k: k,
		t: (ms-window.load_start_ms)/1000
	})
}
if(self!==top)window.document.write("\u003Cstyle>body * {display:none !important;}\u003C\/style>\u003Ca href=\"#\" onclick="+
"\"top.location.href=window.location.href\" style=\"display:block !important;padding:10px\">Go to Slack.com\u003C\/a>");
</script>


<script type="text/javascript">
window.callSlackAPIUnauthed = function(method, args, callback) {
	var url = '/api/'+method+'?t='+new Date().getTime();
	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			req.onreadystatechange = null;
			var obj;
			
			if (req.status == 200) {
				if (req.responseText.indexOf('{') == 0) {
					try {
						eval('obj = '+req.responseText);
					} catch (err) {
						console.warn('unable to do anything with api rsp');
					}
				}
			}
			
			obj = obj || {
				ok: false	
			}
			
			callback(obj.ok, obj, args);
		}
	}
	
	req.open('POST', url, 1);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var args2 = [];
	for (i in args) {
		args2[args2.length] = encodeURIComponent(i)+'='+encodeURIComponent(args[i]);
	}

	req.send(args2.join('&'));
}
</script>
			<meta name="referrer" content="no-referrer">
			<meta name="superfish" content="nofish">
	<script type="text/javascript">



var TS_last_log_date = null;
var TSMakeLogDate = function() {
	var date = new Date();

	var y = date.getFullYear();
	var mo = date.getMonth()+1;
	var d = date.getDate();

	var time = {
	  h: date.getHours(),
	  mi: date.getMinutes(),
	  s: date.getSeconds(),
	  ms: date.getMilliseconds()
	};

	Object.keys(time).map(function(moment, index) {
		if(time[moment] < 10) {
			time[moment] = '0' + time[moment];
		}
	});

	var str = y + '/' + mo + '/' + d + ' ' + time.h + ':' + time.mi + ':' + time.s + '.' + time.ms;
	if (TS_last_log_date) {
		var diff = date-TS_last_log_date;
		//str+= ' ('+diff+'ms)';
	}
	TS_last_log_date = date;
	return str+' ';
}

var TSSSB = {
	

	call: function() {
		return false;
	}

	
}

</script>	<script type="text/javascript">TSSSB.call('didFinishLoading');</script>
	    <meta charset="utf-8">
    <title>MicrosoftMvcValidation.debug.js | Bluetube Slack</title>
    <meta name="author" content="Slack">

							
																
    									
		
		<!-- output_css "core" -->
    <link href="https://slack.global.ssl.fastly.net/fd07/style/rollup-plastic.css" rel="stylesheet" type="text/css">

	<!-- output_css "regular" -->
    <link href="https://slack.global.ssl.fastly.net/133f/style/comments.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/806b/style/stars.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/2df8/style/print.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/38f9/style/files.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/1d8a/style/libs/codemirror.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/1e63/style/libs/lato-1.css" rel="stylesheet" type="text/css">

	

	
	
	

	<!--[if lt IE 9]>
	<script src="https://slack.global.ssl.fastly.net/ef0d/js/libs/html5shiv.js"></script>
	<![endif]-->

	
<link id="favicon" rel="shortcut icon" href="https://slack.global.ssl.fastly.net/272a/img/icons/favicon-32.png" sizes="16x16 32x32 48x48" type="image/png" />

<link rel="icon" href="https://slack.global.ssl.fastly.net/ba3c/img/icons/app-256.png" sizes="256x256" type="image/png" />

<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-152.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-144.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-120.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-72.png" />
<link rel="apple-touch-icon-precomposed" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-57.png" />

<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://slack.global.ssl.fastly.net/272a/img/icons/app-144.png" />	<script>
!function(a,b){function c(a,b){try{if("function"!=typeof a)return a;if(!a.bugsnag){var c=e();a.bugsnag=function(d){if(b&&b.eventHandler&&(u=d),v=c,!y){var e=a.apply(this,arguments);return v=null,e}try{return a.apply(this,arguments)}catch(f){throw l("autoNotify",!0)&&(x.notifyException(f,null,null,"error"),s()),f}finally{v=null}},a.bugsnag.bugsnag=a.bugsnag}return a.bugsnag}catch(d){return a}}function d(){B=!1}function e(){var a=document.currentScript||v;if(!a&&B){var b=document.scripts||document.getElementsByTagName("script");a=b[b.length-1]}return a}function f(a){var b=e();b&&(a.script={src:b.src,content:l("inlineScript",!0)?b.innerHTML:""})}function g(b){var c=l("disableLog"),d=a.console;void 0===d||void 0===d.log||c||d.log("[Bugsnag] "+b)}function h(b,c,d){if(d>=5)return encodeURIComponent(c)+"=[RECURSIVE]";d=d+1||1;try{if(a.Node&&b instanceof a.Node)return encodeURIComponent(c)+"="+encodeURIComponent(r(b));var e=[];for(var f in b)if(b.hasOwnProperty(f)&&null!=f&&null!=b[f]){var g=c?c+"["+f+"]":f,i=b[f];e.push("object"==typeof i?h(i,g,d):encodeURIComponent(g)+"="+encodeURIComponent(i))}return e.join("&")}catch(j){return encodeURIComponent(c)+"="+encodeURIComponent(""+j)}}function i(a,b){if(null==b)return a;a=a||{};for(var c in b)if(b.hasOwnProperty(c))try{a[c]=b[c].constructor===Object?i(a[c],b[c]):b[c]}catch(d){a[c]=b[c]}return a}function j(a,b){a+="?"+h(b)+"&ct=img&cb="+(new Date).getTime();var c=new Image;c.src=a}function k(a){var b={},c=/^data\-([\w\-]+)$/;if(a)for(var d=a.attributes,e=0;e<d.length;e++){var f=d[e];if(c.test(f.nodeName)){var g=f.nodeName.match(c)[1];b[g]=f.value||f.nodeValue}}return b}function l(a,b){C=C||k(J);var c=void 0!==x[a]?x[a]:C[a.toLowerCase()];return"false"===c&&(c=!1),void 0!==c?c:b}function m(a){return a&&a.match(D)?!0:(g("Invalid API key '"+a+"'"),!1)}function n(b,c){var d=l("apiKey");if(m(d)&&A){A-=1;var e=l("releaseStage"),f=l("notifyReleaseStages");if(f){for(var h=!1,k=0;k<f.length;k++)if(e===f[k]){h=!0;break}if(!h)return}var n=[b.name,b.message,b.stacktrace].join("|");if(n!==w){w=n,u&&(c=c||{},c["Last Event"]=q(u));var o={notifierVersion:H,apiKey:d,projectRoot:l("projectRoot")||a.location.protocol+"//"+a.location.host,context:l("context")||a.location.pathname,userId:l("userId"),user:l("user"),metaData:i(i({},l("metaData")),c),releaseStage:e,appVersion:l("appVersion"),url:a.location.href,userAgent:navigator.userAgent,language:navigator.language||navigator.userLanguage,severity:b.severity,name:b.name,message:b.message,stacktrace:b.stacktrace,file:b.file,lineNumber:b.lineNumber,columnNumber:b.columnNumber,payloadVersion:"2"},p=x.beforeNotify;if("function"==typeof p){var r=p(o,o.metaData);if(r===!1)return}return 0===o.lineNumber&&/Script error\.?/.test(o.message)?g("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors"):(j(l("endpoint")||G,o),void 0)}}}function o(){var a,b,c=10,d="[anonymous]";try{throw new Error("")}catch(e){a="<generated>\n",b=p(e)}if(!b){a="<generated-ie>\n";var f=[];try{for(var h=arguments.callee.caller.caller;h&&f.length<c;){var i=E.test(h.toString())?RegExp.$1||d:d;f.push(i),h=h.caller}}catch(j){g(j)}b=f.join("\n")}return a+b}function p(a){return a.stack||a.backtrace||a.stacktrace}function q(a){var b={millisecondsAgo:new Date-a.timeStamp,type:a.type,which:a.which,target:r(a.target)};return b}function r(a){if(a){var b=a.attributes;if(b){for(var c="<"+a.nodeName.toLowerCase(),d=0;d<b.length;d++)b[d].value&&"null"!=b[d].value.toString()&&(c+=" "+b[d].name+'="'+b[d].value+'"');return c+">"}return a.nodeName}}function s(){z+=1,a.setTimeout(function(){z-=1})}function t(a,b,c){var d=a[b],e=c(d);a[b]=e}var u,v,w,x={},y=!0,z=0,A=10;x.noConflict=function(){return a.Bugsnag=b,x},x.refresh=function(){A=10},x.notifyException=function(a,b,c,d){b&&"string"!=typeof b&&(c=b,b=void 0),c||(c={}),f(c),n({name:b||a.name,message:a.message||a.description,stacktrace:p(a)||o(),file:a.fileName||a.sourceURL,lineNumber:a.lineNumber||a.line,columnNumber:a.columnNumber?a.columnNumber+1:void 0,severity:d||"warning"},c)},x.notify=function(b,c,d,e){n({name:b,message:c,stacktrace:o(),file:a.location.toString(),lineNumber:1,severity:e||"warning"},d)};var B="complete"!==document.readyState;document.addEventListener?(document.addEventListener("DOMContentLoaded",d,!0),a.addEventListener("load",d,!0)):a.attachEvent("onload",d);var C,D=/^[0-9a-f]{32}$/i,E=/function\s*([\w\-$]+)?\s*\(/i,F="https://notify.bugsnag.com/",G=F+"js",H="2.4.7",I=document.getElementsByTagName("script"),J=I[I.length-1];if(a.atob){if(a.ErrorEvent)try{0===new a.ErrorEvent("test").colno&&(y=!1)}catch(K){}}else y=!1;if(l("autoNotify",!0)){t(a,"onerror",function(b){return function(c,d,e,g,h){var i=l("autoNotify",!0),j={};!g&&a.event&&(g=a.event.errorCharacter),f(j),v=null,i&&!z&&n({name:h&&h.name||"window.onerror",message:c,file:d,lineNumber:e,columnNumber:g,stacktrace:h&&p(h)||o(),severity:"error"},j),b&&b(c,d,e,g,h)}});var L=function(a){return function(b,d){if("function"==typeof b){b=c(b);var e=Array.prototype.slice.call(arguments,2);return a(function(){b.apply(this,e)},d)}return a(b,d)}};t(a,"setTimeout",L),t(a,"setInterval",L),a.requestAnimationFrame&&t(a,"requestAnimationFrame",function(a){return function(b){return a(c(b))}}),a.setImmediate&&t(a,"setImmediate",function(a){return function(){var b=Array.prototype.slice.call(arguments);return b[0]=c(b[0]),a.apply(this,b)}}),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(b){var d=a[b]&&a[b].prototype;d&&d.hasOwnProperty&&d.hasOwnProperty("addEventListener")&&(t(d,"addEventListener",function(a){return function(b,d,e,f){return d&&d.handleEvent&&(d.handleEvent=c(d.handleEvent,{eventHandler:!0})),a.call(this,b,c(d,{eventHandler:!0}),e,f)}}),t(d,"removeEventListener",function(a){return function(b,d,e,f){return a.call(this,b,d,e,f),a.call(this,b,c(d),e,f)}}))})}a.Bugsnag=x,"function"==typeof define&&define.amd?define([],function(){return x}):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=x)}(window,window.Bugsnag);
Bugsnag.apiKey = "2a86b308af5a81d2c9329fedfb4b30c7";
Bugsnag.appVersion = "4ecc5aaac16db02d7ddcd4cf6742cf264e30b63c-1431028947";
Bugsnag.endpoint = "https://errors.slack-core.com/js";
Bugsnag.releaseStage = "prod";
Bugsnag.user = {id:"U03PUV2F9",name:"tanya",email:"tresende@bluetubeinc.com"};
Bugsnag.metaData = {};
Bugsnag.metaData.team = {id:"T032CPD2W",name:"Bluetube",domain:"bluetube"};
Bugsnag.refresh_interval = setInterval(function () { (window.TS && window.TS.client) ? Bugsnag.refresh() : clearInterval(Bugsnag.refresh_interval); }, 15 * 60 * 1000);
</script>			<script type="text/javascript">

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-106458-17', 'slack.com');
	ga('send', 'pageview');


	(function(e,c,b,f,d,g,a){e.SlackBeaconObject=d;
	e[d]=e[d]||function(){(e[d].q=e[d].q||[]).push([1*new Date(),arguments])};
	e[d].l=1*new Date();g=c.createElement(b);a=c.getElementsByTagName(b)[0];
	g.async=1;g.src=f;a.parentNode.insertBefore(g,a)
	})(window,document,"script","https://slack.global.ssl.fastly.net/dcf8/js/libs/beacon.js","sb");
	sb('set', 'token', '3307f436963e02d4f9eb85ce5159744c');
	sb('set', 'user_id', 'U03PUV2F9');
	sb('set', 'user_batch', "immediate-launch");
	sb('set', 'user_created', "2015-02-23");
	sb('set', 'name_tag', 'bluetube/tanya');
	sb('track', 'pageview');

	function track(a){ga('send','event','web',a);sb('track',a);}


	
	(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
	for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
	
	mixpanel.init("12d52d8633a5b432975592d13ebd3f34");

	function mixpanel_track(event_name){if(window.mixpanel&&event_name)mixpanel.track(event_name);}

</script>	
</head>

  <body >

		  			<script>
		
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w > 1440) document.querySelector('body').classList.add('widescreen');
		
		</script>
	
  	
	

			<nav id="site_nav" class="no_transition">

	<div id="site_nav_contents">

		<div id="user_menu">
			<div id="user_menu_contents">
				<div id="user_menu_avatar">
										<span class="member_image thumb_48" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-04-02/4302270253_83de6fa0d73da98465e7_192.jpg')" data-thumb-size="48" data-member-id="U03PUV2F9"></span>
					<span class="member_image thumb_36" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-04-02/4302270253_83de6fa0d73da98465e7_72.jpg')" data-thumb-size="36" data-member-id="U03PUV2F9"></span>
				</div>
				<h3>Signed in as</h3>
				<span id="user_menu_name">tanya</span>
			</div>
		</div>

		<div class="nav_contents">

			<ul class="primary_nav">
				<li><a href="/home"><i class="ts_icon ts_icon_home"></i>Home</a></li>
				<li><a href="/account"><i class="ts_icon ts_icon_user"></i>Account & Profile</a></li>
				<li><a href="/services/new"><i class="ts_icon ts_icon_wrench"></i>Integrations</a></li>
				<li><a href="/archives"><i class="ts_icon ts_icon_inbox"></i>Message Archives</a></li>
				<li><a href="/files"><i class="ts_icon ts_icon_file"></i>Files</a></li>
				<li><a href="/team"><i class="ts_icon ts_icon_team_directory"></i>Team Directory</a></li>
									<li><a href="/stats"><i class="ts_icon ts_icon_dashboard"></i>Statistics</a></li>
													<li><a href="/customize"><i class="ts_icon ts_icon_magic"></i>Customize</a></li>
													<li><a href="/account/team"><i class="ts_icon ts_icon_cog_o"></i>Team Settings</a></li>
							</ul>

			
		</div>

		<div id="footer">

			<ul id="footer_nav">
				<li><a href="/is">Tour</a></li>
				<li><a href="/apps">Apps</a></li>
				<li><a href="/brand-guidelines">Brand Guidelines</a></li>
				<li><a href="/help">Help</a></li>
				<li><a href="https://api.slack.com" target="_blank">API<i class="ts_icon ts_icon_external_link small_left_margin"></i></a></li>
								<li><a href="/pricing">Pricing</a></li>
				<li><a href="/help/requests/new">Contact</a></li>
				<li><a href="/terms-of-service">Policies</a></li>
				<li><a href="http://slackhq.com/" target="_blank">Our Blog</a></li>
				<li><a href="https://slack.com/signout/3080795098?crumb=s-1431029621-1b80272a86-%E2%98%83">Sign Out<i class="ts_icon ts_icon_sign_out small_left_margin"></i></a></li>
			</ul>

			<p id="footer_signature">Made with <i class="ts_icon ts_icon_heart"></i> by Slack</p>

		</div>

	</div>
</nav>	
			<header>
							<a id="menu_toggle" class="no_transition">
					<span class="menu_icon"></span>
					<span class="menu_label">Menu</span>
					<span class="vert_divider"></span>
				</a>
				<h1 id="header_team_name" class="inline_block no_transition">
					<a href="/home">
						<i class="ts_icon ts_icon_home" /></i>
						Bluetube
					</a>
				</h1>
				<div class="header_nav">
					<div class="header_btns float_right">
						<a id="team_switcher">
							<i class="ts_icon ts_icon_th_large ts_icon_inherit"></i>
							<span class="block label">Teams</span>
						</a>
						<a href="/help" id="help_link">
							<i class="ts_icon ts_icon_life_ring ts_icon_inherit"></i>
							<span class="block label">Help</span>
						</a>
						<a href="/messages">
							<img src="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-64.png" srcset="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-32.png 1x, https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-64.png 2x" />
							<span class="block label">Launch</span>
						</a>
					</div>
								                    <ul id="header_team_nav">
			                        			                            <li class="active">
			                            	<a href="https://bluetube.slack.com/home" target="https://bluetube.slack.com/">
			                            					                            			<i class="ts_icon ts_icon_check_circle_o active_icon"></i>
			                            					                            						                            		<i class="team_icon" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-03-10/3994012131_6f7eafa9497341220288_88.jpg');"></i>
				                            				                            		<span class="switcher_label team_name">Bluetube</span>
			                            	</a>
			                            </li>
			                        			                        <li id="add_team_option"><a href="https://slack.com/signin" target="_blank"><i class="ts_icon ts_icon_plus team_icon"></i> <span class="switcher_label">Sign in to another team...</span></a></li>
			                    </ul>
			                				</div>
			
			
		</header>
	
	<div id="page">

		<div id="page_contents" >

<p class="print_only">
	<strong>Created by mmintz on May 7, 2015 at 1:12 PM</strong><br />
	<span class="subtle_silver break_word">https://bluetube.slack.com/files/mmintz/F04PL0N7X/microsoftmvcvalidation.debug.js</span>
</p>

<div class="file_header_container no_print"></div>

<div class="alert_container">
		<div class="file_public_link_shared alert" style="display: none;">
		
	<i class="ts_icon ts_icon_link"></i> Public Link: <a class="file_public_link" href="https://slack-files.com/T032CPD2W-F04PL0N7X-1f72e99ee9" target="new">https://slack-files.com/T032CPD2W-F04PL0N7X-1f72e99ee9</a>
</div></div>

<div id="file_page" class="card top_padding">

	<p class="small subtle_silver no_print meta">
		37KB JavaScript/JSON snippet created on <span class="date">May 7th 2015</span>.
		This file is private.		<span class="file_share_list"></span>
	</p>

	<a id="file_action_cog" class="action_cog action_cog_snippet float_right no_print">
		<span>Actions </span><i class="ts_icon ts_icon_cog"></i>
	</a>
	<a id="snippet_expand_toggle" class="float_right no_print">
		<i class="ts_icon ts_icon_expand "></i>
		<i class="ts_icon ts_icon_compress hidden"></i>
	</a>

	<div class="large_bottom_margin clearfix">
		<pre id="file_contents">//!----------------------------------------------------------
//! Copyright (C) Microsoft Corporation. All rights reserved.
//!----------------------------------------------------------
//! MicrosoftMvcValidation.js


Type.registerNamespace(&#039;Sys.Mvc&#039;);

////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.Validation

Sys.Mvc.$create_Validation = function Sys_Mvc_Validation() { return {}; }


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.JsonValidationField

Sys.Mvc.$create_JsonValidationField = function Sys_Mvc_JsonValidationField() { return {}; }


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.JsonValidationOptions

Sys.Mvc.$create_JsonValidationOptions = function Sys_Mvc_JsonValidationOptions() { return {}; }


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.JsonValidationRule

Sys.Mvc.$create_JsonValidationRule = function Sys_Mvc_JsonValidationRule() { return {}; }


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.ValidationContext

Sys.Mvc.$create_ValidationContext = function Sys_Mvc_ValidationContext() { return {}; }


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.NumberValidator

Sys.Mvc.NumberValidator = function Sys_Mvc_NumberValidator() {
}
Sys.Mvc.NumberValidator.create = function Sys_Mvc_NumberValidator$create(rule) {
    /// &lt;param name=&quot;rule&quot; type=&quot;Sys.Mvc.JsonValidationRule&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.Validator&quot;&gt;&lt;/returns&gt;
    return Function.createDelegate(new Sys.Mvc.NumberValidator(), new Sys.Mvc.NumberValidator().validate);
}
Sys.Mvc.NumberValidator.prototype = {
    
    validate: function Sys_Mvc_NumberValidator$validate(value, context) {
        /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;param name=&quot;context&quot; type=&quot;Sys.Mvc.ValidationContext&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
        if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(value)) {
            return true;
        }
        var n = Number.parseLocale(value);
        return (!isNaN(n));
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.FormContext

Sys.Mvc.FormContext = function Sys_Mvc_FormContext(formElement, validationSummaryElement) {
    /// &lt;param name=&quot;formElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;validationSummaryElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;field name=&quot;_validationSummaryErrorCss&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_validationSummaryValidCss&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_formValidationTag&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_onClickHandler&quot; type=&quot;Sys.UI.DomEventHandler&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_onSubmitHandler&quot; type=&quot;Sys.UI.DomEventHandler&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_errors&quot; type=&quot;Array&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_submitButtonClicked&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_validationSummaryElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_validationSummaryULElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;fields&quot; type=&quot;Array&quot; elementType=&quot;FieldContext&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_formElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;replaceValidationSummary&quot; type=&quot;Boolean&quot;&gt;
    /// &lt;/field&gt;
    this._errors = [];
    this.fields = new Array(0);
    this._formElement = formElement;
    this._validationSummaryElement = validationSummaryElement;
    formElement[Sys.Mvc.FormContext._formValidationTag] = this;
    if (validationSummaryElement) {
        var ulElements = validationSummaryElement.getElementsByTagName(&#039;ul&#039;);
        if (ulElements.length &gt; 0) {
            this._validationSummaryULElement = ulElements[0];
        }
    }
    this._onClickHandler = Function.createDelegate(this, this._form_OnClick);
    this._onSubmitHandler = Function.createDelegate(this, this._form_OnSubmit);
}
Sys.Mvc.FormContext._Application_Load = function Sys_Mvc_FormContext$_Application_Load() {
    var allFormOptions = window.mvcClientValidationMetadata;
    if (allFormOptions) {
        while (allFormOptions.length &gt; 0) {
            var thisFormOptions = allFormOptions.pop();
            Sys.Mvc.FormContext._parseJsonOptions(thisFormOptions);
        }
    }
}
Sys.Mvc.FormContext._getFormElementsWithName = function Sys_Mvc_FormContext$_getFormElementsWithName(formElement, name) {
    /// &lt;param name=&quot;formElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Array&quot; elementType=&quot;Object&quot; elementDomElement=&quot;true&quot;&gt;&lt;/returns&gt;
    var allElementsWithNameInForm = [];
    var allElementsWithName = document.getElementsByName(name);
    for (var i = 0; i &lt; allElementsWithName.length; i++) {
        var thisElement = allElementsWithName[i];
        if (Sys.Mvc.FormContext._isElementInHierarchy(formElement, thisElement)) {
            Array.add(allElementsWithNameInForm, thisElement);
        }
    }
    return allElementsWithNameInForm;
}
Sys.Mvc.FormContext.getValidationForForm = function Sys_Mvc_FormContext$getValidationForForm(formElement) {
    /// &lt;param name=&quot;formElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.FormContext&quot;&gt;&lt;/returns&gt;
    return formElement[Sys.Mvc.FormContext._formValidationTag];
}
Sys.Mvc.FormContext._isElementInHierarchy = function Sys_Mvc_FormContext$_isElementInHierarchy(parent, child) {
    /// &lt;param name=&quot;parent&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;child&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    while (child) {
        if (parent === child) {
            return true;
        }
        child = child.parentNode;
    }
    return false;
}
Sys.Mvc.FormContext._parseJsonOptions = function Sys_Mvc_FormContext$_parseJsonOptions(options) {
    /// &lt;param name=&quot;options&quot; type=&quot;Sys.Mvc.JsonValidationOptions&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.FormContext&quot;&gt;&lt;/returns&gt;
    var formElement = $get(options.FormId);
    var validationSummaryElement = (!Sys.Mvc._validationUtil.stringIsNullOrEmpty(options.ValidationSummaryId)) ? $get(options.ValidationSummaryId) : null;
    var formContext = new Sys.Mvc.FormContext(formElement, validationSummaryElement);
    formContext.enableDynamicValidation();
    formContext.replaceValidationSummary = options.ReplaceValidationSummary;
    for (var i = 0; i &lt; options.Fields.length; i++) {
        var field = options.Fields[i];
        var fieldElements = Sys.Mvc.FormContext._getFormElementsWithName(formElement, field.FieldName);
        var validationMessageElement = (!Sys.Mvc._validationUtil.stringIsNullOrEmpty(field.ValidationMessageId)) ? $get(field.ValidationMessageId) : null;
        var fieldContext = new Sys.Mvc.FieldContext(formContext);
        Array.addRange(fieldContext.elements, fieldElements);
        fieldContext.validationMessageElement = validationMessageElement;
        fieldContext.replaceValidationMessageContents = field.ReplaceValidationMessageContents;
        for (var j = 0; j &lt; field.ValidationRules.length; j++) {
            var rule = field.ValidationRules[j];
            var validator = Sys.Mvc.ValidatorRegistry.getValidator(rule);
            if (validator) {
                var validation = Sys.Mvc.$create_Validation();
                validation.fieldErrorMessage = rule.ErrorMessage;
                validation.validator = validator;
                Array.add(fieldContext.validations, validation);
            }
        }
        fieldContext.enableDynamicValidation();
        Array.add(formContext.fields, fieldContext);
    }
    var registeredValidatorCallbacks = formElement.validationCallbacks;
    if (!registeredValidatorCallbacks) {
        registeredValidatorCallbacks = [];
        formElement.validationCallbacks = registeredValidatorCallbacks;
    }
    registeredValidatorCallbacks.push(Function.createDelegate(null, function() {
        return Sys.Mvc._validationUtil.arrayIsNullOrEmpty(formContext.validate(&#039;submit&#039;));
    }));
    return formContext;
}
Sys.Mvc.FormContext.prototype = {
    _onClickHandler: null,
    _onSubmitHandler: null,
    _submitButtonClicked: null,
    _validationSummaryElement: null,
    _validationSummaryULElement: null,
    _formElement: null,
    replaceValidationSummary: false,
    
    addError: function Sys_Mvc_FormContext$addError(message) {
        /// &lt;param name=&quot;message&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        this.addErrors([ message ]);
    },
    
    addErrors: function Sys_Mvc_FormContext$addErrors(messages) {
        /// &lt;param name=&quot;messages&quot; type=&quot;Array&quot; elementType=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        if (!Sys.Mvc._validationUtil.arrayIsNullOrEmpty(messages)) {
            Array.addRange(this._errors, messages);
            this._onErrorCountChanged();
        }
    },
    
    clearErrors: function Sys_Mvc_FormContext$clearErrors() {
        Array.clear(this._errors);
        this._onErrorCountChanged();
    },
    
    _displayError: function Sys_Mvc_FormContext$_displayError() {
        if (this._validationSummaryElement) {
            if (this._validationSummaryULElement) {
                Sys.Mvc._validationUtil.removeAllChildren(this._validationSummaryULElement);
                for (var i = 0; i &lt; this._errors.length; i++) {
                    var liElement = document.createElement(&#039;li&#039;);
                    Sys.Mvc._validationUtil.setInnerText(liElement, this._errors[i]);
                    this._validationSummaryULElement.appendChild(liElement);
                }
            }
            Sys.UI.DomElement.removeCssClass(this._validationSummaryElement, Sys.Mvc.FormContext._validationSummaryValidCss);
            Sys.UI.DomElement.addCssClass(this._validationSummaryElement, Sys.Mvc.FormContext._validationSummaryErrorCss);
        }
    },
    
    _displaySuccess: function Sys_Mvc_FormContext$_displaySuccess() {
        var validationSummaryElement = this._validationSummaryElement;
        if (validationSummaryElement) {
            var validationSummaryULElement = this._validationSummaryULElement;
            if (validationSummaryULElement) {
                validationSummaryULElement.innerHTML = &#039;&#039;;
            }
            Sys.UI.DomElement.removeCssClass(validationSummaryElement, Sys.Mvc.FormContext._validationSummaryErrorCss);
            Sys.UI.DomElement.addCssClass(validationSummaryElement, Sys.Mvc.FormContext._validationSummaryValidCss);
        }
    },
    
    enableDynamicValidation: function Sys_Mvc_FormContext$enableDynamicValidation() {
        Sys.UI.DomEvent.addHandler(this._formElement, &#039;click&#039;, this._onClickHandler);
        Sys.UI.DomEvent.addHandler(this._formElement, &#039;submit&#039;, this._onSubmitHandler);
    },
    
    _findSubmitButton: function Sys_Mvc_FormContext$_findSubmitButton(element) {
        /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Object&quot; domElement=&quot;true&quot;&gt;&lt;/returns&gt;
        if (element.disabled) {
            return null;
        }
        var tagName = element.tagName.toUpperCase();
        var inputElement = element;
        if (tagName === &#039;INPUT&#039;) {
            var type = inputElement.type;
            if (type === &#039;submit&#039; || type === &#039;image&#039;) {
                return inputElement;
            }
        }
        else if ((tagName === &#039;BUTTON&#039;) &amp;&amp; (inputElement.type === &#039;submit&#039;)) {
            return inputElement;
        }
        return null;
    },
    
    _form_OnClick: function Sys_Mvc_FormContext$_form_OnClick(e) {
        /// &lt;param name=&quot;e&quot; type=&quot;Sys.UI.DomEvent&quot;&gt;
        /// &lt;/param&gt;
        this._submitButtonClicked = this._findSubmitButton(e.target);
    },
    
    _form_OnSubmit: function Sys_Mvc_FormContext$_form_OnSubmit(e) {
        /// &lt;param name=&quot;e&quot; type=&quot;Sys.UI.DomEvent&quot;&gt;
        /// &lt;/param&gt;
        var form = e.target;
        var submitButton = this._submitButtonClicked;
        if (submitButton &amp;&amp; submitButton.disableValidation) {
            return;
        }
        var errorMessages = this.validate(&#039;submit&#039;);
        if (!Sys.Mvc._validationUtil.arrayIsNullOrEmpty(errorMessages)) {
            e.preventDefault();
        }
    },
    
    _onErrorCountChanged: function Sys_Mvc_FormContext$_onErrorCountChanged() {
        if (!this._errors.length) {
            this._displaySuccess();
        }
        else {
            this._displayError();
        }
    },
    
    validate: function Sys_Mvc_FormContext$validate(eventName) {
        /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Array&quot; elementType=&quot;String&quot;&gt;&lt;/returns&gt;
        var fields = this.fields;
        var errors = [];
        for (var i = 0; i &lt; fields.length; i++) {
            var field = fields[i];
            if (!field.elements[0].disabled) {
                var thisErrors = field.validate(eventName);
                if (thisErrors) {
                    Array.addRange(errors, thisErrors);
                }
            }
        }
        if (this.replaceValidationSummary) {
            this.clearErrors();
            this.addErrors(errors);
        }
        return errors;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.FieldContext

Sys.Mvc.FieldContext = function Sys_Mvc_FieldContext(formContext) {
    /// &lt;param name=&quot;formContext&quot; type=&quot;Sys.Mvc.FormContext&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;field name=&quot;_hasTextChangedTag&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_hasValidationFiredTag&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_inputElementErrorCss&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_inputElementValidCss&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_validationMessageErrorCss&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_validationMessageValidCss&quot; type=&quot;String&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_onBlurHandler&quot; type=&quot;Sys.UI.DomEventHandler&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_onChangeHandler&quot; type=&quot;Sys.UI.DomEventHandler&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_onInputHandler&quot; type=&quot;Sys.UI.DomEventHandler&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_onPropertyChangeHandler&quot; type=&quot;Sys.UI.DomEventHandler&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_errors&quot; type=&quot;Array&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;defaultErrorMessage&quot; type=&quot;String&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;elements&quot; type=&quot;Array&quot; elementType=&quot;Object&quot; elementDomElement=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;formContext&quot; type=&quot;Sys.Mvc.FormContext&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;replaceValidationMessageContents&quot; type=&quot;Boolean&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;validationMessageElement&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;validations&quot; type=&quot;Array&quot; elementType=&quot;Validation&quot;&gt;
    /// &lt;/field&gt;
    this._errors = [];
    this.elements = new Array(0);
    this.validations = new Array(0);
    this.formContext = formContext;
    this._onBlurHandler = Function.createDelegate(this, this._element_OnBlur);
    this._onChangeHandler = Function.createDelegate(this, this._element_OnChange);
    this._onInputHandler = Function.createDelegate(this, this._element_OnInput);
    this._onPropertyChangeHandler = Function.createDelegate(this, this._element_OnPropertyChange);
}
Sys.Mvc.FieldContext.prototype = {
    _onBlurHandler: null,
    _onChangeHandler: null,
    _onInputHandler: null,
    _onPropertyChangeHandler: null,
    defaultErrorMessage: null,
    formContext: null,
    replaceValidationMessageContents: false,
    validationMessageElement: null,
    
    addError: function Sys_Mvc_FieldContext$addError(message) {
        /// &lt;param name=&quot;message&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        this.addErrors([ message ]);
    },
    
    addErrors: function Sys_Mvc_FieldContext$addErrors(messages) {
        /// &lt;param name=&quot;messages&quot; type=&quot;Array&quot; elementType=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        if (!Sys.Mvc._validationUtil.arrayIsNullOrEmpty(messages)) {
            Array.addRange(this._errors, messages);
            this._onErrorCountChanged();
        }
    },
    
    clearErrors: function Sys_Mvc_FieldContext$clearErrors() {
        Array.clear(this._errors);
        this._onErrorCountChanged();
    },
    
    _displayError: function Sys_Mvc_FieldContext$_displayError() {
        var validationMessageElement = this.validationMessageElement;
        if (validationMessageElement) {
            if (this.replaceValidationMessageContents) {
                Sys.Mvc._validationUtil.setInnerText(validationMessageElement, this._errors[0]);
            }
            Sys.UI.DomElement.removeCssClass(validationMessageElement, Sys.Mvc.FieldContext._validationMessageValidCss);
            Sys.UI.DomElement.addCssClass(validationMessageElement, Sys.Mvc.FieldContext._validationMessageErrorCss);
        }
        var elements = this.elements;
        for (var i = 0; i &lt; elements.length; i++) {
            var element = elements[i];
            Sys.UI.DomElement.removeCssClass(element, Sys.Mvc.FieldContext._inputElementValidCss);
            Sys.UI.DomElement.addCssClass(element, Sys.Mvc.FieldContext._inputElementErrorCss);
        }
    },
    
    _displaySuccess: function Sys_Mvc_FieldContext$_displaySuccess() {
        var validationMessageElement = this.validationMessageElement;
        if (validationMessageElement) {
            if (this.replaceValidationMessageContents) {
                Sys.Mvc._validationUtil.setInnerText(validationMessageElement, &#039;&#039;);
            }
            Sys.UI.DomElement.removeCssClass(validationMessageElement, Sys.Mvc.FieldContext._validationMessageErrorCss);
            Sys.UI.DomElement.addCssClass(validationMessageElement, Sys.Mvc.FieldContext._validationMessageValidCss);
        }
        var elements = this.elements;
        for (var i = 0; i &lt; elements.length; i++) {
            var element = elements[i];
            Sys.UI.DomElement.removeCssClass(element, Sys.Mvc.FieldContext._inputElementErrorCss);
            Sys.UI.DomElement.addCssClass(element, Sys.Mvc.FieldContext._inputElementValidCss);
        }
    },
    
    _element_OnBlur: function Sys_Mvc_FieldContext$_element_OnBlur(e) {
        /// &lt;param name=&quot;e&quot; type=&quot;Sys.UI.DomEvent&quot;&gt;
        /// &lt;/param&gt;
        if (e.target[Sys.Mvc.FieldContext._hasTextChangedTag] || e.target[Sys.Mvc.FieldContext._hasValidationFiredTag]) {
            this.validate(&#039;blur&#039;);
        }
    },
    
    _element_OnChange: function Sys_Mvc_FieldContext$_element_OnChange(e) {
        /// &lt;param name=&quot;e&quot; type=&quot;Sys.UI.DomEvent&quot;&gt;
        /// &lt;/param&gt;
        e.target[Sys.Mvc.FieldContext._hasTextChangedTag] = true;
    },
    
    _element_OnInput: function Sys_Mvc_FieldContext$_element_OnInput(e) {
        /// &lt;param name=&quot;e&quot; type=&quot;Sys.UI.DomEvent&quot;&gt;
        /// &lt;/param&gt;
        e.target[Sys.Mvc.FieldContext._hasTextChangedTag] = true;
        if (e.target[Sys.Mvc.FieldContext._hasValidationFiredTag]) {
            this.validate(&#039;input&#039;);
        }
    },
    
    _element_OnPropertyChange: function Sys_Mvc_FieldContext$_element_OnPropertyChange(e) {
        /// &lt;param name=&quot;e&quot; type=&quot;Sys.UI.DomEvent&quot;&gt;
        /// &lt;/param&gt;
        if (e.rawEvent.propertyName === &#039;value&#039;) {
            e.target[Sys.Mvc.FieldContext._hasTextChangedTag] = true;
            if (e.target[Sys.Mvc.FieldContext._hasValidationFiredTag]) {
                this.validate(&#039;input&#039;);
            }
        }
    },
    
    enableDynamicValidation: function Sys_Mvc_FieldContext$enableDynamicValidation() {
        var elements = this.elements;
        for (var i = 0; i &lt; elements.length; i++) {
            var element = elements[i];
            if (Sys.Mvc._validationUtil.elementSupportsEvent(element, &#039;onpropertychange&#039;)) {
                var compatMode = document.documentMode;
                if (compatMode &amp;&amp; compatMode &gt;= 8) {
                    Sys.UI.DomEvent.addHandler(element, &#039;propertychange&#039;, this._onPropertyChangeHandler);
                }
            }
            else {
                Sys.UI.DomEvent.addHandler(element, &#039;input&#039;, this._onInputHandler);
            }
            Sys.UI.DomEvent.addHandler(element, &#039;change&#039;, this._onChangeHandler);
            Sys.UI.DomEvent.addHandler(element, &#039;blur&#039;, this._onBlurHandler);
        }
    },
    
    _getErrorString: function Sys_Mvc_FieldContext$_getErrorString(validatorReturnValue, fieldErrorMessage) {
        /// &lt;param name=&quot;validatorReturnValue&quot; type=&quot;Object&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;param name=&quot;fieldErrorMessage&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
        var fallbackErrorMessage = fieldErrorMessage || this.defaultErrorMessage;
        if (Boolean.isInstanceOfType(validatorReturnValue)) {
            return (validatorReturnValue) ? null : fallbackErrorMessage;
        }
        if (String.isInstanceOfType(validatorReturnValue)) {
            return ((validatorReturnValue).length) ? validatorReturnValue : fallbackErrorMessage;
        }
        return null;
    },
    
    _getStringValue: function Sys_Mvc_FieldContext$_getStringValue() {
        /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
        var elements = this.elements;
        return (elements.length &gt; 0) ? elements[0].value : null;
    },
    
    _markValidationFired: function Sys_Mvc_FieldContext$_markValidationFired() {
        var elements = this.elements;
        for (var i = 0; i &lt; elements.length; i++) {
            var element = elements[i];
            element[Sys.Mvc.FieldContext._hasValidationFiredTag] = true;
        }
    },
    
    _onErrorCountChanged: function Sys_Mvc_FieldContext$_onErrorCountChanged() {
        if (!this._errors.length) {
            this._displaySuccess();
        }
        else {
            this._displayError();
        }
    },
    
    validate: function Sys_Mvc_FieldContext$validate(eventName) {
        /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Array&quot; elementType=&quot;String&quot;&gt;&lt;/returns&gt;
        var validations = this.validations;
        var errors = [];
        var value = this._getStringValue();
        for (var i = 0; i &lt; validations.length; i++) {
            var validation = validations[i];
            var context = Sys.Mvc.$create_ValidationContext();
            context.eventName = eventName;
            context.fieldContext = this;
            context.validation = validation;
            var retVal = validation.validator(value, context);
            var errorMessage = this._getErrorString(retVal, validation.fieldErrorMessage);
            if (!Sys.Mvc._validationUtil.stringIsNullOrEmpty(errorMessage)) {
                Array.add(errors, errorMessage);
            }
        }
        this._markValidationFired();
        this.clearErrors();
        this.addErrors(errors);
        return errors;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.RangeValidator

Sys.Mvc.RangeValidator = function Sys_Mvc_RangeValidator(minimum, maximum) {
    /// &lt;param name=&quot;minimum&quot; type=&quot;Number&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;maximum&quot; type=&quot;Number&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;field name=&quot;_minimum&quot; type=&quot;Number&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_maximum&quot; type=&quot;Number&quot;&gt;
    /// &lt;/field&gt;
    this._minimum = minimum;
    this._maximum = maximum;
}
Sys.Mvc.RangeValidator.create = function Sys_Mvc_RangeValidator$create(rule) {
    /// &lt;param name=&quot;rule&quot; type=&quot;Sys.Mvc.JsonValidationRule&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.Validator&quot;&gt;&lt;/returns&gt;
    var min = rule.ValidationParameters[&#039;min&#039;];
    var max = rule.ValidationParameters[&#039;max&#039;];
    return Function.createDelegate(new Sys.Mvc.RangeValidator(min, max), new Sys.Mvc.RangeValidator(min, max).validate);
}
Sys.Mvc.RangeValidator.prototype = {
    _minimum: null,
    _maximum: null,
    
    validate: function Sys_Mvc_RangeValidator$validate(value, context) {
        /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;param name=&quot;context&quot; type=&quot;Sys.Mvc.ValidationContext&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
        if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(value)) {
            return true;
        }
        var n = Number.parseLocale(value);
        return (!isNaN(n) &amp;&amp; this._minimum &lt;= n &amp;&amp; n &lt;= this._maximum);
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.RegularExpressionValidator

Sys.Mvc.RegularExpressionValidator = function Sys_Mvc_RegularExpressionValidator(pattern) {
    /// &lt;param name=&quot;pattern&quot; type=&quot;String&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;field name=&quot;_pattern&quot; type=&quot;String&quot;&gt;
    /// &lt;/field&gt;
    this._pattern = pattern;
}
Sys.Mvc.RegularExpressionValidator.create = function Sys_Mvc_RegularExpressionValidator$create(rule) {
    /// &lt;param name=&quot;rule&quot; type=&quot;Sys.Mvc.JsonValidationRule&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.Validator&quot;&gt;&lt;/returns&gt;
    var pattern = rule.ValidationParameters[&#039;pattern&#039;];
    return Function.createDelegate(new Sys.Mvc.RegularExpressionValidator(pattern), new Sys.Mvc.RegularExpressionValidator(pattern).validate);
}
Sys.Mvc.RegularExpressionValidator.prototype = {
    _pattern: null,
    
    validate: function Sys_Mvc_RegularExpressionValidator$validate(value, context) {
        /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;param name=&quot;context&quot; type=&quot;Sys.Mvc.ValidationContext&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
        if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(value)) {
            return true;
        }
        var regExp = new RegExp(this._pattern);
        var matches = regExp.exec(value);
        return (!Sys.Mvc._validationUtil.arrayIsNullOrEmpty(matches) &amp;&amp; matches[0].length === value.length);
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.RequiredValidator

Sys.Mvc.RequiredValidator = function Sys_Mvc_RequiredValidator() {
}
Sys.Mvc.RequiredValidator.create = function Sys_Mvc_RequiredValidator$create(rule) {
    /// &lt;param name=&quot;rule&quot; type=&quot;Sys.Mvc.JsonValidationRule&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.Validator&quot;&gt;&lt;/returns&gt;
    return Function.createDelegate(new Sys.Mvc.RequiredValidator(), new Sys.Mvc.RequiredValidator().validate);
}
Sys.Mvc.RequiredValidator._isRadioInputElement = function Sys_Mvc_RequiredValidator$_isRadioInputElement(element) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    if (element.tagName.toUpperCase() === &#039;INPUT&#039;) {
        var inputType = (element.type).toUpperCase();
        if (inputType === &#039;RADIO&#039;) {
            return true;
        }
    }
    return false;
}
Sys.Mvc.RequiredValidator._isSelectInputElement = function Sys_Mvc_RequiredValidator$_isSelectInputElement(element) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    if (element.tagName.toUpperCase() === &#039;SELECT&#039;) {
        return true;
    }
    return false;
}
Sys.Mvc.RequiredValidator._isTextualInputElement = function Sys_Mvc_RequiredValidator$_isTextualInputElement(element) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    if (element.tagName.toUpperCase() === &#039;INPUT&#039;) {
        var inputType = (element.type).toUpperCase();
        switch (inputType) {
            case &#039;TEXT&#039;:
            case &#039;PASSWORD&#039;:
            case &#039;FILE&#039;:
                return true;
        }
    }
    if (element.tagName.toUpperCase() === &#039;TEXTAREA&#039;) {
        return true;
    }
    return false;
}
Sys.Mvc.RequiredValidator._validateRadioInput = function Sys_Mvc_RequiredValidator$_validateRadioInput(elements) {
    /// &lt;param name=&quot;elements&quot; type=&quot;Array&quot; elementType=&quot;Object&quot; elementDomElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
    for (var i = 0; i &lt; elements.length; i++) {
        var element = elements[i];
        if (element.checked) {
            return true;
        }
    }
    return false;
}
Sys.Mvc.RequiredValidator._validateSelectInput = function Sys_Mvc_RequiredValidator$_validateSelectInput(optionElements) {
    /// &lt;param name=&quot;optionElements&quot; type=&quot;DOMElementCollection&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
    for (var i = 0; i &lt; optionElements.length; i++) {
        var element = optionElements[i];
        if (element.selected) {
            if (!Sys.Mvc._validationUtil.stringIsNullOrEmpty(element.value)) {
                return true;
            }
        }
    }
    return false;
}
Sys.Mvc.RequiredValidator._validateTextualInput = function Sys_Mvc_RequiredValidator$_validateTextualInput(element) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
    return (!Sys.Mvc._validationUtil.stringIsNullOrEmpty(element.value));
}
Sys.Mvc.RequiredValidator.prototype = {
    
    validate: function Sys_Mvc_RequiredValidator$validate(value, context) {
        /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;param name=&quot;context&quot; type=&quot;Sys.Mvc.ValidationContext&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
        var elements = context.fieldContext.elements;
        if (!elements.length) {
            return true;
        }
        var sampleElement = elements[0];
        if (Sys.Mvc.RequiredValidator._isTextualInputElement(sampleElement)) {
            return Sys.Mvc.RequiredValidator._validateTextualInput(sampleElement);
        }
        if (Sys.Mvc.RequiredValidator._isRadioInputElement(sampleElement)) {
            return Sys.Mvc.RequiredValidator._validateRadioInput(elements);
        }
        if (Sys.Mvc.RequiredValidator._isSelectInputElement(sampleElement)) {
            return Sys.Mvc.RequiredValidator._validateSelectInput((sampleElement).options);
        }
        return true;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.StringLengthValidator

Sys.Mvc.StringLengthValidator = function Sys_Mvc_StringLengthValidator(minLength, maxLength) {
    /// &lt;param name=&quot;minLength&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;maxLength&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;field name=&quot;_maxLength&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    /// &lt;field name=&quot;_minLength&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;
    /// &lt;/field&gt;
    this._minLength = minLength;
    this._maxLength = maxLength;
}
Sys.Mvc.StringLengthValidator.create = function Sys_Mvc_StringLengthValidator$create(rule) {
    /// &lt;param name=&quot;rule&quot; type=&quot;Sys.Mvc.JsonValidationRule&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.Validator&quot;&gt;&lt;/returns&gt;
    var minLength = (rule.ValidationParameters[&#039;min&#039;] || 0);
    var maxLength = (rule.ValidationParameters[&#039;max&#039;] || Number.MAX_VALUE);
    return Function.createDelegate(new Sys.Mvc.StringLengthValidator(minLength, maxLength), new Sys.Mvc.StringLengthValidator(minLength, maxLength).validate);
}
Sys.Mvc.StringLengthValidator.prototype = {
    _maxLength: 0,
    _minLength: 0,
    
    validate: function Sys_Mvc_StringLengthValidator$validate(value, context) {
        /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;param name=&quot;context&quot; type=&quot;Sys.Mvc.ValidationContext&quot;&gt;
        /// &lt;/param&gt;
        /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
        if (Sys.Mvc._validationUtil.stringIsNullOrEmpty(value)) {
            return true;
        }
        return (this._minLength &lt;= value.length &amp;&amp; value.length &lt;= this._maxLength);
    }
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc._validationUtil

Sys.Mvc._validationUtil = function Sys_Mvc__validationUtil() {
}
Sys.Mvc._validationUtil.arrayIsNullOrEmpty = function Sys_Mvc__validationUtil$arrayIsNullOrEmpty(array) {
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementType=&quot;Object&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    return (!array || !array.length);
}
Sys.Mvc._validationUtil.stringIsNullOrEmpty = function Sys_Mvc__validationUtil$stringIsNullOrEmpty(value) {
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    return (!value || !value.length);
}
Sys.Mvc._validationUtil.elementSupportsEvent = function Sys_Mvc__validationUtil$elementSupportsEvent(element, eventAttributeName) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;eventAttributeName&quot; type=&quot;String&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    return (eventAttributeName in element);
}
Sys.Mvc._validationUtil.removeAllChildren = function Sys_Mvc__validationUtil$removeAllChildren(element) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
Sys.Mvc._validationUtil.setInnerText = function Sys_Mvc__validationUtil$setInnerText(element, innerText) {
    /// &lt;param name=&quot;element&quot; type=&quot;Object&quot; domElement=&quot;true&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;param name=&quot;innerText&quot; type=&quot;String&quot;&gt;
    /// &lt;/param&gt;
    var textNode = document.createTextNode(innerText);
    Sys.Mvc._validationUtil.removeAllChildren(element);
    element.appendChild(textNode);
}


////////////////////////////////////////////////////////////////////////////////
// Sys.Mvc.ValidatorRegistry

Sys.Mvc.ValidatorRegistry = function Sys_Mvc_ValidatorRegistry() {
    /// &lt;field name=&quot;validators&quot; type=&quot;Object&quot; static=&quot;true&quot;&gt;
    /// &lt;/field&gt;
}
Sys.Mvc.ValidatorRegistry.getValidator = function Sys_Mvc_ValidatorRegistry$getValidator(rule) {
    /// &lt;param name=&quot;rule&quot; type=&quot;Sys.Mvc.JsonValidationRule&quot;&gt;
    /// &lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Mvc.Validator&quot;&gt;&lt;/returns&gt;
    var creator = Sys.Mvc.ValidatorRegistry.validators[rule.ValidationType];
    return (creator) ? creator(rule) : null;
}
Sys.Mvc.ValidatorRegistry._getDefaultValidators = function Sys_Mvc_ValidatorRegistry$_getDefaultValidators() {
    /// &lt;returns type=&quot;Object&quot;&gt;&lt;/returns&gt;
    return { required: Function.createDelegate(null, Sys.Mvc.RequiredValidator.create), length: Function.createDelegate(null, Sys.Mvc.StringLengthValidator.create), regex: Function.createDelegate(null, Sys.Mvc.RegularExpressionValidator.create), range: Function.createDelegate(null, Sys.Mvc.RangeValidator.create), number: Function.createDelegate(null, Sys.Mvc.NumberValidator.create) };
}


Sys.Mvc.NumberValidator.registerClass(&#039;Sys.Mvc.NumberValidator&#039;);
Sys.Mvc.FormContext.registerClass(&#039;Sys.Mvc.FormContext&#039;);
Sys.Mvc.FieldContext.registerClass(&#039;Sys.Mvc.FieldContext&#039;);
Sys.Mvc.RangeValidator.registerClass(&#039;Sys.Mvc.RangeValidator&#039;);
Sys.Mvc.RegularExpressionValidator.registerClass(&#039;Sys.Mvc.RegularExpressionValidator&#039;);
Sys.Mvc.RequiredValidator.registerClass(&#039;Sys.Mvc.RequiredValidator&#039;);
Sys.Mvc.StringLengthValidator.registerClass(&#039;Sys.Mvc.StringLengthValidator&#039;);
Sys.Mvc._validationUtil.registerClass(&#039;Sys.Mvc._validationUtil&#039;);
Sys.Mvc.ValidatorRegistry.registerClass(&#039;Sys.Mvc.ValidatorRegistry&#039;);
Sys.Mvc.FormContext._validationSummaryErrorCss = &#039;validation-summary-errors&#039;;
Sys.Mvc.FormContext._validationSummaryValidCss = &#039;validation-summary-valid&#039;;
Sys.Mvc.FormContext._formValidationTag = &#039;__MVC_FormValidation&#039;;
Sys.Mvc.FieldContext._hasTextChangedTag = &#039;__MVC_HasTextChanged&#039;;
Sys.Mvc.FieldContext._hasValidationFiredTag = &#039;__MVC_HasValidationFired&#039;;
Sys.Mvc.FieldContext._inputElementErrorCss = &#039;input-validation-error&#039;;
Sys.Mvc.FieldContext._inputElementValidCss = &#039;input-validation-valid&#039;;
Sys.Mvc.FieldContext._validationMessageErrorCss = &#039;field-validation-error&#039;;
Sys.Mvc.FieldContext._validationMessageValidCss = &#039;field-validation-valid&#039;;
Sys.Mvc.ValidatorRegistry.validators = Sys.Mvc.ValidatorRegistry._getDefaultValidators();

// ---- Do not remove this footer ----
// Generated using Script# v0.5.0.0 (http://projects.nikhilk.net)
// -----------------------------------

// register validation
Sys.Application.add_load(function() {
  Sys.Application.remove_load(arguments.callee);
  Sys.Mvc.FormContext._Application_Load();
});
</pre>

		<p class="file_page_meta no_print" style="line-height: 1.5rem;">
			<label class="checkbox normal mini float_right no_top_padding no_min_width">
				<input type="checkbox" id="file_preview_wrap_cb"> wrap long lines
			</label>
		</p>

	</div>

	<div id="comments_holder" class="clearfix clear_both">
	<div class="col span_1_of_6"></div>
	<div class="col span_4_of_6 no_right_padding">
		<div id="file_page_comments">
					</div>	
		<form action="https://bluetube.slack.com/files/mmintz/F04PL0N7X/microsoftmvcvalidation.debug.js" 
		id="file_comment_form" 
					class="comment_form"
				method="post">
			<a href="/team/tanya" class="member_preview_link" data-member-id="U03PUV2F9" >
			<span class="member_image thumb_36" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-04-02/4302270253_83de6fa0d73da98465e7_72.jpg')" data-thumb-size="36" data-member-id="U03PUV2F9"></span>
		</a>		
		<input type="hidden" name="addcomment" value="1" />
	<input type="hidden" name="crumb" value="s-1431029621-84ae83d96a-☃" />

	<textarea id="file_comment" data-el-id-to-keep-in-view="file_comment_submit_btn" class="comment_input small_bottom_margin" name="comment" wrap="virtual" ></textarea>
	<span class="input_note float_left cloud_silver file_comment_tip">cmd+enter to submit</span>	<button id="file_comment_submit_btn" type="submit" class="btn float_right  ladda-button" data-style="expand-right"><span class="ladda-label">Add Comment</span></button>
</form>

<form action="https://bluetube.slack.com/files/mmintz/F04PL0N7X/microsoftmvcvalidation.debug.js" 
		id="file_edit_comment_form" 
					class="edit_comment_form hidden"
				method="post">
	<textarea id="file_edit_comment" class="comment_input small_bottom_margin" name="comment" wrap="virtual"></textarea><br>
	<span class="input_note float_left cloud_silver file_comment_tip">cmd+enter to submit</span>	<input type="submit" class="save btn float_right " value="Save Changes" />
	<button class="cancel btn btn_outline float_right small_right_margin ">Cancel</button>
</form>	
	</div>
	<div class="col span_1_of_6"></div>
</div>
</div>

	

		
	</div>
	<div id="overlay"></div>
</div>




<script type="text/javascript">
var cdn_url = 'https://slack.global.ssl.fastly.net';
</script>
			<script type="text/javascript">
<!--
	// common boot_data
	var boot_data = {
		start_ms: new Date().getTime(),
		app: 'web',
		is_mobile: false,
		user_id: 'U03PUV2F9',
		version_ts: '1431028947',
		version_uid: '4ecc5aaac16db02d7ddcd4cf6742cf264e30b63c',
		redir_domain: 'slack-redir.net',
		api_url: '/api/',
		team_url: 'https://bluetube.slack.com/',
		image_proxy_url: 'https://slack-imgs.com/',
		api_token: 'xoxs-3080795098-3810988519-3810988699-532b4b8e27',

		feature_status: false,
		feature_search_attachments: false,
		feature_archive_viewer: true,

		feature_reactions: false,
		feature_fullscreen_modals: false,
		feature_spaces: false,
		feature_a11y_keyboard_shortcuts: false,
		feature_email_integration: false,
		feature_email_ingestion: false,
		feature_attachments_inline: false,
		feature_cmd_autocomplete: true,
		feature_ms_on_space: true,
		feature_flexpane_rework: true,
		feature_fix_files: false,
		feature_chat_sounds: false,
		feature_require_at: true,
		feature_image_proxy: true,
		feature_channel_eventlog_client: true,
		feature_bot_users: true,
		feature_muting: true,
		feature_macssb1_banner: true,
		feature_winssb1_banner: true,
		feature_latest_event_ts: true,
		feature_no_redirects_in_ssb: true,
		feature_referer_policy: true,
		feature_client_exif_orientation_on_uploads: true,
		feature_lato_fonts: true,
		feature_at_channel_warning: true,
		feature_at_channel_warning_non_admin_message: true,
		feature_pins: true,
		feature_join_leave_rollups: true,
		feature_bot_message_label: true,
		feature_oldest_msg_storing: true,
		feature_new_btns_in_channel_list: true,
		feature_box_plugin: true,
		feature_post_previews: false,
		feature_pricing_page_refresh: false,
		feature_client_date_formatting: false,
		feature_more_field_in_message_attachments: false,
		feature_user_hidden_msgs: false,
		feature_prompt_to_share: false,
		feature_file_url_private_conversion: false,
		feature_spaces_in_windows: false,
		feature_screenhero: false,
		feature_msg_input_revisions: false,
		feature_combined_menu: false,
		feature_lazy_load_pins: true,
		feature_simple_latest: true,
		feature_channel_page_toggle_refactor: true,
		feature_admin_sort_by_join_date: false,

		img: {
			app_icon: 'https://slack.global.ssl.fastly.net/272a/img/slack_growl_icon.png'
		},
		page_needs_custom_emoji: false
	};



	// client boot data
			boot_data.login_data = JSON.parse('{\"ok\":true,\"self\":{\"id\":\"U03PUV2F9\",\"name\":\"tanya\",\"prefs\":{\"highlight_words\":\"\",\"user_colors\":\"\",\"color_names_in_list\":true,\"growls_enabled\":true,\"tz\":\"America\\/Los_Angeles\",\"push_dm_alert\":true,\"push_mention_alert\":true,\"push_everything\":false,\"push_idle_wait\":2,\"push_sound\":\"b2.mp3\",\"push_loud_channels\":\"\",\"push_mention_channels\":\"\",\"push_loud_channels_set\":\"\",\"email_alerts\":\"instant\",\"email_alerts_sleep_until\":0,\"email_misc\":true,\"email_weekly\":true,\"welcome_message_hidden\":false,\"all_channels_loud\":false,\"loud_channels\":\"\",\"never_channels\":\"\",\"loud_channels_set\":\"\",\"show_member_presence\":true,\"search_sort\":\"timestamp\",\"expand_inline_imgs\":true,\"expand_internal_inline_imgs\":true,\"expand_snippets\":false,\"posts_formatting_guide\":true,\"seen_welcome_2\":true,\"seen_ssb_prompt\":false,\"search_only_my_channels\":false,\"emoji_mode\":\"default\",\"emoji_use\":\"{\\\"simple_smile\\\":6,\\\"smiley\\\":1,\\\"confused\\\":1,\\\"smile\\\":1,\\\"raised_hands\\\":2,\\\"scream\\\":1,\\\"heart_eyes\\\":1,\\\"astonished\\\":1,\\\"joy\\\":2,\\\"flushed\\\":1,\\\"fearful\\\":1,\\\"satisfied\\\":1,\\\"stuck_out_tongue_winking_eye\\\":1}\",\"has_invited\":false,\"has_uploaded\":true,\"has_created_channel\":false,\"search_exclude_channels\":\"\",\"messages_theme\":\"default\",\"webapp_spellcheck\":true,\"no_joined_overlays\":false,\"no_created_overlays\":false,\"dropbox_enabled\":false,\"seen_user_menu_tip_card\":true,\"seen_team_menu_tip_card\":true,\"seen_channel_menu_tip_card\":true,\"seen_message_input_tip_card\":true,\"seen_channels_tip_card\":true,\"seen_domain_invite_reminder\":false,\"seen_member_invite_reminder\":false,\"seen_flexpane_tip_card\":true,\"seen_search_input_tip_card\":true,\"mute_sounds\":false,\"arrow_history\":false,\"tab_ui_return_selects\":true,\"obey_inline_img_limit\":true,\"new_msg_snd\":\"knock_brush.mp3\",\"collapsible\":false,\"collapsible_by_click\":true,\"require_at\":true,\"mac_ssb_bounce\":\"\",\"mac_ssb_bullet\":true,\"expand_non_media_attachments\":true,\"show_typing\":true,\"pagekeys_handled\":true,\"last_snippet_type\":\"csharp\",\"display_real_names_override\":0,\"time24\":false,\"enter_is_special_in_tbt\":false,\"graphic_emoticons\":false,\"convert_emoticons\":true,\"autoplay_chat_sounds\":true,\"ss_emojis\":true,\"sidebar_behavior\":\"\",\"mark_msgs_read_immediately\":true,\"start_scroll_at_oldest\":true,\"snippet_editor_wrap_long_lines\":false,\"ls_disabled\":false,\"sidebar_theme\":\"monument_theme\",\"sidebar_theme_custom_values\":\"{\\\"column_bg\\\":\\\"#0D7E83\\\",\\\"menu_bg\\\":\\\"#076570\\\",\\\"active_item\\\":\\\"#F79F66\\\",\\\"active_item_text\\\":\\\"#FFFFFF\\\",\\\"hover_item\\\":\\\"#D37C71\\\",\\\"text_color\\\":\\\"#FFFFFF\\\",\\\"active_presence\\\":\\\"#F79F66\\\",\\\"badge\\\":\\\"#F15340\\\"}\",\"f_key_search\":false,\"k_key_omnibox\":true,\"speak_growls\":false,\"mac_speak_voice\":\"com.apple.speech.synthesis.voice.Alex\",\"mac_speak_speed\":250,\"comma_key_prefs\":false,\"at_channel_suppressed_channels\":\"\",\"push_at_channel_suppressed_channels\":\"\",\"prompted_for_email_disabling\":false,\"full_text_extracts\":false,\"no_text_in_notifications\":false,\"muted_channels\":\"\",\"no_macssb1_banner\":false,\"no_winssb1_banner\":true,\"privacy_policy_seen\":true,\"search_exclude_bots\":false,\"fuzzy_matching\":false,\"load_lato_2\":false,\"fuller_timestamps\":false,\"last_seen_at_channel_warning\":0,\"enable_flexpane_rework\":false,\"flex_resize_window\":false,\"msg_preview\":false,\"msg_preview_displaces\":true,\"msg_preview_persistent\":true,\"emoji_autocomplete_big\":false,\"winssb_run_from_tray\":true,\"two_factor_auth_enabled\":false,\"mentions_exclude_at_channels\":true,\"confirm_clear_all_unreads\":true,\"box_enabled\":false},\"created\":1424705604},\"team\":{\"id\":\"T032CPD2W\",\"name\":\"Bluetube\",\"email_domain\":\"bluetubeinc.com\",\"domain\":\"bluetube\",\"msg_edit_window_mins\":-1,\"prefs\":{\"default_channels\":[\"C032CPD3G\",\"C032CPD3Q\"],\"disable_builtin_loading\":true,\"msg_edit_window_mins\":-1,\"allow_message_deletion\":true,\"hide_referers\":true,\"display_real_names\":false,\"who_can_at_everyone\":\"regular\",\"who_can_at_channel\":\"ra\",\"warn_before_at_channel\":\"always\",\"who_can_create_channels\":\"regular\",\"who_can_archive_channels\":\"regular\",\"who_can_create_groups\":\"ra\",\"who_can_post_general\":\"ra\",\"who_can_kick_channels\":\"admin\",\"who_can_kick_groups\":\"regular\",\"retention_type\":0,\"retention_duration\":0,\"group_retention_type\":0,\"group_retention_duration\":0,\"dm_retention_type\":0,\"dm_retention_duration\":0,\"require_at_for_mention\":0,\"compliance_export_start\":0},\"icon\":{\"image_34\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_34.jpg\",\"image_44\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_44.jpg\",\"image_68\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_68.jpg\",\"image_88\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_88.jpg\",\"image_102\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_102.jpg\",\"image_132\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_132.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_original.jpg\"},\"over_storage_limit\":false,\"plan\":\"std\"},\"latest_event_ts\":\"1431029021.000000\",\"channels\":[{\"id\":\"C041R1N6C\",\"name\":\"agile-process\",\"is_channel\":true,\"created\":1426472981,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03A6TU4C\",\"name\":\"all_wac_division_apps\",\"is_channel\":true,\"created\":1420569545,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0374MCKK\",\"name\":\"arts-for-learning\",\"is_channel\":true,\"created\":1418843733,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03CDS3ML\",\"name\":\"aso-website\",\"is_channel\":true,\"created\":1421331315,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C045XSGLG\",\"name\":\"beer\",\"is_channel\":true,\"created\":1427483224,\"creator\":\"U039WM8DH\",\"is_archived\":false,\"is_general\":false,\"has_pins\":true,\"is_member\":true,\"members\":[\"U032CQTJ8\",\"U032CTTUY\",\"U032RTT9W\",\"U033BKK1K\",\"U038AG18Y\",\"U038XGY0F\",\"U039WM8DH\",\"U039WNK7H\",\"U03DE5QBA\",\"U03KGFP73\",\"U03MQ0M2Y\",\"U03PUV2F9\",\"U03V84DTK\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"See title\",\"creator\":\"U039WM8DH\",\"last_set\":1427483224}},{\"id\":\"C03L3QC3A\",\"name\":\"bluetube-website\",\"is_channel\":true,\"created\":1423622909,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0374K0FQ\",\"name\":\"bso-general\",\"is_channel\":true,\"created\":1418831841,\"creator\":\"U036TD3JD\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03QJNF7L\",\"name\":\"bti-internal-systems\",\"is_channel\":true,\"created\":1424834860,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPKTJ\",\"name\":\"care-logistics\",\"is_channel\":true,\"created\":1416883144,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C042W06TN\",\"name\":\"cincinnatisymphony\",\"is_channel\":true,\"created\":1426705304,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03KGS093\",\"name\":\"cincy\",\"is_channel\":true,\"created\":1423501897,\"creator\":\"U032CTTUY\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03GDK8Q6\",\"name\":\"code-snippets\",\"is_channel\":true,\"created\":1422548858,\"creator\":\"U033BKK1K\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BH39UT\",\"name\":\"creative-\",\"is_channel\":true,\"created\":1421100532,\"creator\":\"U032KR334\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BSFY5Z\",\"name\":\"dads-garage\",\"is_channel\":true,\"created\":1421177250,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039WNERZ\",\"name\":\"dev-leads\",\"is_channel\":true,\"created\":1420481755,\"creator\":\"U032J83D3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03Q8PRMH\",\"name\":\"developers\",\"is_channel\":true,\"created\":1424792563,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CTTUY\",\"U032EEACT\",\"U032J83D3\",\"U033BKK1K\",\"U03410F2D\",\"U036TD3JD\",\"U036Y41KA\",\"U0375UZCY\",\"U03888XHK\",\"U038XK99Z\",\"U0394E3G8\",\"U039WM8DH\",\"U039WNK7H\",\"U03AYUTPC\",\"U03KGFP73\",\"U03KGJTD3\",\"U03MQ0M2Y\",\"U03PUV2F9\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"Got a cool dev tool to share? Got some badass code to share? Well this is the channel for it.\",\"creator\":\"U032EEACT\",\"last_set\":1424792563}},{\"id\":\"C03AQD6QA\",\"name\":\"ece\",\"is_channel\":true,\"created\":1420746522,\"creator\":\"U032KR334\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04JW1MJX\",\"name\":\"ep-testing-team\",\"is_channel\":true,\"created\":1430148254,\"creator\":\"U03DE5QBA\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032BCPEM\",\"name\":\"event-point\",\"is_channel\":true,\"created\":1416885237,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03UW4M20\",\"name\":\"event-point-dev\",\"is_channel\":true,\"created\":1425923864,\"creator\":\"U032CTTUY\",\"is_archived\":false,\"is_general\":false,\"has_pins\":true,\"is_member\":false},{\"id\":\"C03BH5V6B\",\"name\":\"eventpoint-public\",\"is_channel\":true,\"created\":1421101095,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03L3RKEC\",\"name\":\"filament\",\"is_channel\":true,\"created\":1423623274,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032SL6EU\",\"name\":\"gemba\",\"is_channel\":true,\"created\":1417020197,\"creator\":\"U032CQTJ8\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPD3G\",\"name\":\"general\",\"is_channel\":true,\"created\":1416883046,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":true,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CPD30\",\"U032CQDHW\",\"U032CQTJ8\",\"U032CTTUY\",\"U032EEACT\",\"U032GM2F6\",\"U032J83D3\",\"U032KR334\",\"U032LFXM6\",\"U032QKTG1\",\"U032RTT9W\",\"U032S2EN4\",\"U033BKK1K\",\"U03410F2D\",\"U036SQ8JX\",\"U036TD3JD\",\"U036WP3S3\",\"U036Y1HHU\",\"U036Y41KA\",\"U0375CPKF\",\"U0375HR4G\",\"U0375UZCY\",\"U03888XHK\",\"U038AG18Y\",\"U038BFPLU\",\"U038XGY0F\",\"U038XK99Z\",\"U038ZA4HT\",\"U0393BBN7\",\"U0394E3G8\",\"U039WM8DH\",\"U039WNK7H\",\"U03AYUTPC\",\"U03BRSJC2\",\"U03DE5QBA\",\"U03E0RDH2\",\"U03KGFP73\",\"U03KGJTD3\",\"U03MQ0M2Y\",\"U03PUV2F9\",\"U03PWRY86\",\"U03UQM7AB\",\"U03V84DTK\",\"U04JW0PKV\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"This channel is for team-wide communication and announcements. All team members are in this channel.\",\"creator\":\"\",\"last_set\":0}},{\"id\":\"C032D8ZFG\",\"name\":\"general-lyric-support\",\"is_channel\":true,\"created\":1416889563,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032D3VMW\",\"name\":\"general-mobile-chat\",\"is_channel\":true,\"created\":1416887127,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039ZSJR0\",\"name\":\"grubsorceressmolly\",\"is_channel\":true,\"created\":1420499941,\"creator\":\"U032KR334\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WVAS1\",\"name\":\"high_kiosk_countdown\",\"is_channel\":true,\"created\":1418766952,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03GGDSBC\",\"name\":\"interview-candidates\",\"is_channel\":true,\"created\":1422563484,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPN9S\",\"name\":\"jackson-healthcare\",\"is_channel\":true,\"created\":1416883158,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03LQ9VEE\",\"name\":\"jca_marketing\",\"is_channel\":true,\"created\":1423762931,\"creator\":\"U038AG18Y\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032D4VP0\",\"name\":\"kc-apex\",\"is_channel\":true,\"created\":1416887584,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0341FJAY\",\"name\":\"kc-ece-healthies\",\"is_channel\":true,\"created\":1417631278,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C037LDV5T\",\"name\":\"kc-gemba\",\"is_channel\":true,\"created\":1419001178,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03L7S62B\",\"name\":\"kc-pst-cert\",\"is_channel\":true,\"created\":1423669687,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03JHLBFE\",\"name\":\"kc-services-sitecore\",\"is_channel\":true,\"created\":1423152949,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039GU8K3\",\"name\":\"kennedy-center\",\"is_channel\":true,\"created\":1420216650,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04HF0XGB\",\"name\":\"logix\",\"is_channel\":true,\"created\":1429804047,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032D8Z80\",\"name\":\"lyric-opera-syos\",\"is_channel\":true,\"created\":1416889536,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03GDAD72\",\"name\":\"lyric-opera-updates\",\"is_channel\":true,\"created\":1422547375,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C046TGWSW\",\"name\":\"lyric-redesign\",\"is_channel\":true,\"created\":1427745109,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03JEKNLR\",\"name\":\"lyric-testing-team\",\"is_channel\":true,\"created\":1423147986,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032LRWFE\",\"name\":\"mac-users\",\"is_channel\":true,\"created\":1416956779,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C041YRP21\",\"name\":\"march-madness\",\"is_channel\":true,\"created\":1426534718,\"creator\":\"U032CTTUY\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WT6GF\",\"name\":\"marketing\",\"is_channel\":true,\"created\":1418766346,\"creator\":\"U032GM2F6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0389102V\",\"name\":\"micromeritics\",\"is_channel\":true,\"created\":1419357732,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BT5XSL\",\"name\":\"micromeritics-errors\",\"is_channel\":true,\"created\":1421169730,\"creator\":\"U033BKK1K\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03A8BJSM\",\"name\":\"mixer-radio\",\"is_channel\":true,\"created\":1420599810,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03V90X8L\",\"name\":\"mixer-radio-app\",\"is_channel\":true,\"created\":1426002152,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039Y3G3G\",\"name\":\"mohawk\",\"is_channel\":true,\"created\":1420483859,\"creator\":\"U032KR334\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03TSMJ9Y\",\"name\":\"mohawk-public\",\"is_channel\":true,\"created\":1425592045,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WV7SF\",\"name\":\"nyphil-maintenance\",\"is_channel\":true,\"created\":1418766935,\"creator\":\"U036TD3JD\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03894ZJM\",\"name\":\"nyphil_gtm\",\"is_channel\":true,\"created\":1419359015,\"creator\":\"U036WP3S3\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03F97KSB\",\"name\":\"operations\",\"is_channel\":true,\"created\":1422296967,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04EAHQ2E\",\"name\":\"osf\",\"is_channel\":true,\"created\":1429284994,\"creator\":\"U036WP3S3\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BEE36A\",\"name\":\"phone_system\",\"is_channel\":true,\"created\":1421073093,\"creator\":\"U038AG18Y\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036VUW1J\",\"name\":\"pregis\",\"is_channel\":true,\"created\":1418748584,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03UQ5RPX\",\"name\":\"q-biz\",\"is_channel\":true,\"created\":1425908836,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPD3Q\",\"name\":\"random\",\"is_channel\":true,\"created\":1416883046,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CPD30\",\"U032CQTJ8\",\"U032CTTUY\",\"U032EEACT\",\"U032GM2F6\",\"U032J83D3\",\"U032KR334\",\"U032LFXM6\",\"U032RTT9W\",\"U032S2EN4\",\"U033BKK1K\",\"U03410F2D\",\"U036SQ8JX\",\"U036TD3JD\",\"U036WP3S3\",\"U036Y1HHU\",\"U036Y41KA\",\"U0375CPKF\",\"U0375HR4G\",\"U0375UZCY\",\"U03888XHK\",\"U038AG18Y\",\"U038BFPLU\",\"U038XGY0F\",\"U038XK99Z\",\"U038ZA4HT\",\"U0393BBN7\",\"U0394E3G8\",\"U039WM8DH\",\"U039WNK7H\",\"U03AYUTPC\",\"U03BRSJC2\",\"U03DE5QBA\",\"U03E0RDH2\",\"U03KGFP73\",\"U03KGJTD3\",\"U03MQ0M2Y\",\"U03PUV2F9\",\"U03PWRY86\",\"U03UQM7AB\",\"U03V84DTK\",\"U04JW0PKV\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"A place for non-work banter, links, articles of interest, humor or anything else which you\'d like concentrated in some place other than work-related channels.\",\"creator\":\"\",\"last_set\":0}},{\"id\":\"C03KGSJBV\",\"name\":\"recruiting\",\"is_channel\":true,\"created\":1423502005,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03EG7C1L\",\"name\":\"resourcing\",\"is_channel\":true,\"created\":1421967439,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WL4FR\",\"name\":\"sales\",\"is_channel\":true,\"created\":1418764321,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C049BJS9K\",\"name\":\"salesforce-ats\",\"is_channel\":true,\"created\":1428087862,\"creator\":\"U03BRSJC2\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03739G5R\",\"name\":\"sea-tow-android\",\"is_channel\":true,\"created\":1418831661,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C034K1HVB\",\"name\":\"sea-tow-ios\",\"is_channel\":true,\"created\":1417805991,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C034132R9\",\"name\":\"sea-tow-mobile\",\"is_channel\":true,\"created\":1417641010,\"creator\":\"U032CQTJ8\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032H9166\",\"name\":\"sea-tow-raygun\",\"is_channel\":true,\"created\":1416931095,\"creator\":\"U032CQDHW\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032L795G\",\"name\":\"seatow-web\",\"is_channel\":true,\"created\":1416951810,\"creator\":\"U032J83D3\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WN0KD\",\"name\":\"seattle-symphony\",\"is_channel\":true,\"created\":1418764906,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032BGZU3\",\"name\":\"sitecore-general\",\"is_channel\":true,\"created\":1416887105,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032JPT2J\",\"name\":\"st-mobile-vesl-web\",\"is_channel\":true,\"created\":1416941544,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C038YNBRM\",\"name\":\"straz-center\",\"is_channel\":true,\"created\":1419879012,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03LBDRD4\",\"name\":\"suite22\",\"is_channel\":true,\"created\":1423678590,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03K09WB6\",\"name\":\"tessitura\",\"is_channel\":true,\"created\":1423260331,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03NFCZEU\",\"name\":\"tessitura-framework\",\"is_channel\":true,\"created\":1424277122,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04GHL3MX\",\"name\":\"tessitura-one-page\",\"is_channel\":true,\"created\":1429652012,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03LA0VFH\",\"name\":\"tessitura-software\",\"is_channel\":true,\"created\":1423681298,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03FD6CA0\",\"name\":\"the-newsroom\",\"is_channel\":true,\"created\":1422306329,\"creator\":\"U038XGY0F\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CPD30\",\"U032CQTJ8\",\"U032CTTUY\",\"U032GM2F6\",\"U032J83D3\",\"U032KR334\",\"U032LFXM6\",\"U032QKTG1\",\"U032S2EN4\",\"U03410F2D\",\"U036SQ8JX\",\"U036TD3JD\",\"U036WP3S3\",\"U036Y1HHU\",\"U0375CPKF\",\"U0375HR4G\",\"U0375UZCY\",\"U038AG18Y\",\"U038BFPLU\",\"U038XGY0F\",\"U038ZA4HT\",\"U0393BBN7\",\"U0394E3G8\",\"U039WNK7H\",\"U03E0RDH2\",\"U03MQ0M2Y\",\"U03PUV2F9\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"Retweets, Likes, and Shares! We want to know whats trending in YOUR world of social media. Want to share? Link it here! Everyone is welcome to join and it only takes a couple seconds.\",\"creator\":\"U038XGY0F\",\"last_set\":1422553878}},{\"id\":\"C03HRDMCC\",\"name\":\"ticket-alternative\",\"is_channel\":true,\"created\":1422979032,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C048A1JSX\",\"name\":\"tlcc-planning\",\"is_channel\":true,\"created\":1427895629,\"creator\":\"U038AG18Y\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03FCKZT0\",\"name\":\"ui\",\"is_channel\":true,\"created\":1422303288,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03K8KYRC\",\"name\":\"ux\",\"is_channel\":true,\"created\":1423409128,\"creator\":\"U032S2EN4\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0390JTDC\",\"name\":\"virtualusergroups\",\"is_channel\":true,\"created\":1419888111,\"creator\":\"U038XGY0F\",\"is_archived\":false,\"is_general\":false,\"has_pins\":true,\"is_member\":false},{\"id\":\"C0374H72Z\",\"name\":\"wac_digital\",\"is_channel\":true,\"created\":1418842478,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WJ98F\",\"name\":\"windows-users\",\"is_channel\":true,\"created\":1418763748,\"creator\":\"U033BKK1K\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03MU9EP4\",\"name\":\"wrench-heads\",\"is_channel\":true,\"created\":1424131764,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04GYTCFL\",\"name\":\"xamarin-dev-days\",\"is_channel\":true,\"created\":1429825971,\"creator\":\"U038XGY0F\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03JZK0QE\",\"name\":\"xamarin-forms\",\"is_channel\":true,\"created\":1423256390,\"creator\":\"U032S2EN4\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false}],\"groups\":[],\"ims\":[{\"id\":\"D03PUV2H5\",\"is_im\":true,\"user\":\"USLACKBOT\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2H9\",\"is_im\":true,\"user\":\"U032CPD30\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2HD\",\"is_im\":true,\"user\":\"U032CQDHW\",\"created\":1424705604,\"is_user_deleted\":true},{\"id\":\"D03PUV2K3\",\"is_im\":true,\"user\":\"U032CTTUY\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2JV\",\"is_im\":true,\"user\":\"U032EEACT\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PWVB8S\",\"is_im\":true,\"user\":\"U032J83D3\",\"created\":1424706198,\"is_user_deleted\":false},{\"id\":\"D03PVNT99\",\"is_im\":true,\"user\":\"U032LFXM6\",\"created\":1424709208,\"is_user_deleted\":false},{\"id\":\"D03PUV2KV\",\"is_im\":true,\"user\":\"U032S2EN4\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2JP\",\"is_im\":true,\"user\":\"U033BKK1K\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03S9MDNL\",\"is_im\":true,\"user\":\"U03410F2D\",\"created\":1425304732,\"is_user_deleted\":false},{\"id\":\"D04L1QWNH\",\"is_im\":true,\"user\":\"U03888XHK\",\"created\":1430333291,\"is_user_deleted\":false},{\"id\":\"D03PUV2KM\",\"is_im\":true,\"user\":\"U038BFPLU\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2KB\",\"is_im\":true,\"user\":\"U038ZA4HT\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2JK\",\"is_im\":true,\"user\":\"U0394E3G8\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PW6SF5\",\"is_im\":true,\"user\":\"U03BRSJC2\",\"created\":1424711265,\"is_user_deleted\":false},{\"id\":\"D03PUV2J1\",\"is_im\":true,\"user\":\"U03KGFP73\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03V9GHC5\",\"is_im\":true,\"user\":\"U03PWRY86\",\"created\":1426015122,\"is_user_deleted\":false},{\"id\":\"D04JW0PSD\",\"is_im\":true,\"user\":\"U04JW0PKV\",\"created\":1430148141,\"is_user_deleted\":false}],\"users\":[{\"id\":\"U032EEACT\",\"name\":\"acastro\",\"deleted\":false,\"status\":null,\"color\":\"674b1b\",\"real_name\":\"Andres Castro\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Andres\",\"last_name\":\"Castro\",\"title\":\"Code Messiah\",\"skype\":\"\",\"phone\":\"(678) 712-4609\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_original.jpg\",\"real_name\":\"Andres Castro\",\"real_name_normalized\":\"Andres Castro\",\"email\":\"acastro@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U036Y41KA\",\"name\":\"adan\",\"deleted\":false,\"status\":null,\"color\":\"9e3997\",\"real_name\":\"adan phun\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"adan\",\"last_name\":\"phun\",\"title\":\"\",\"skype\":\"aphun.bluetube\",\"phone\":\"\",\"real_name\":\"adan phun\",\"real_name_normalized\":\"adan phun\",\"email\":\"aphun@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03AYUTPC\",\"name\":\"aidan\",\"deleted\":false,\"status\":null,\"color\":\"de5f24\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"aarrowood@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0018-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V0KRQS\",\"name\":\"alexandern\",\"deleted\":false,\"status\":null,\"color\":\"965d1b\",\"real_name\":\"Alexander Nessel\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Alexander\",\"last_name\":\"Nessel\",\"real_name\":\"Alexander Nessel\",\"real_name_normalized\":\"Alexander Nessel\",\"email\":\"alexandern@eventpoint.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0001-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U0406RJ4D\",\"name\":\"amaffetone\",\"deleted\":false,\"status\":null,\"color\":\"bc3663\",\"real_name\":\"amy Maffetone\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"amy\",\"last_name\":\"Maffetone\",\"real_name\":\"amy Maffetone\",\"real_name_normalized\":\"amy Maffetone\",\"email\":\"amaffetone70@gmail.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0018-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U036Y1HHU\",\"name\":\"amitvimawala\",\"deleted\":false,\"status\":null,\"color\":\"db3150\",\"real_name\":\"Amit Vimawala\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Amit\",\"last_name\":\"Vimawala\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_original.jpg\",\"title\":\"What can I do to put you in a Mobile App today?\",\"skype\":\"\",\"phone\":\"6785240261\",\"real_name\":\"Amit Vimawala\",\"real_name_normalized\":\"Amit Vimawala\",\"email\":\"avimawala@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V84DTK\",\"name\":\"amy\",\"deleted\":false,\"status\":null,\"color\":\"e85d72\",\"real_name\":\"Amy Newbold\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Amy\",\"last_name\":\"Newbold\",\"title\":\"\",\"skype\":\"\",\"phone\":\"678-712-2115 ext. 307\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_original.jpg\",\"real_name\":\"Amy Newbold\",\"real_name_normalized\":\"Amy Newbold\",\"email\":\"anewbold@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03VABG5F\",\"name\":\"amylutz\",\"deleted\":false,\"status\":null,\"color\":\"dc7dbb\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"amy_lutz@mohawkind.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U032S2EN4\",\"name\":\"andrew\",\"deleted\":false,\"status\":null,\"color\":\"99a949\",\"real_name\":\"Andrew Cotten\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Andrew\",\"last_name\":\"Cotten \",\"title\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_original.jpg\",\"real_name\":\"Andrew Cotten\",\"real_name_normalized\":\"Andrew Cotten\",\"email\":\"acotten@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U0416F19N\",\"name\":\"andyt\",\"deleted\":false,\"status\":null,\"color\":\"9d8eee\",\"real_name\":\"\",\"tz\":\"America\\/Denver\",\"tz_label\":\"Mountain Daylight Time\",\"tz_offset\":-21600,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"andyt@eventpoint.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0002-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U033BKK1K\",\"name\":\"ben\",\"deleted\":false,\"status\":\"forever\",\"color\":\"4cc091\",\"real_name\":\"Ben McCrary\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Ben\",\"last_name\":\"McCrary\",\"title\":\"Winner\",\"skype\":\"bmccrary.bluetube\",\"phone\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_original.jpg\",\"real_name\":\"Ben McCrary\",\"real_name_normalized\":\"Ben McCrary\",\"email\":\"bmccrary@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03KGFP73\",\"name\":\"bhumphrey\",\"deleted\":false,\"status\":null,\"color\":\"84b22f\",\"real_name\":\"Brent Humphrey\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Brent\",\"last_name\":\"Humphrey\",\"title\":\"Software Developer\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_original.jpg\",\"real_name\":\"Brent Humphrey\",\"real_name_normalized\":\"Brent Humphrey\",\"email\":\"bhumphrey@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038XK99Z\",\"name\":\"brian\",\"deleted\":false,\"status\":null,\"color\":\"d55aef\",\"real_name\":\"Brian Santisi\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Brian\",\"last_name\":\"Santisi\",\"title\":\"Developer\",\"skype\":\"\",\"phone\":\"how are you today\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_original.jpg\",\"real_name\":\"Brian Santisi\",\"real_name_normalized\":\"Brian Santisi\",\"email\":\"bsantisi@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038XGY0F\",\"name\":\"bryttney\",\"deleted\":false,\"status\":null,\"color\":\"50a0cf\",\"real_name\":\"Bryttney Murphy\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Bryttney\",\"last_name\":\"Murphy\",\"title\":\"Marketing Magician\",\"skype\":\"\",\"phone\":\"(404) 545-3595\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_original.jpg\",\"real_name\":\"Bryttney Murphy\",\"real_name_normalized\":\"Bryttney Murphy\",\"email\":\"bmurphy@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032CQDHW\",\"name\":\"c0lby\",\"deleted\":true,\"profile\":{\"first_name\":\"Colby\",\"last_name\":\"Williams\",\"skype\":\"williams.colby\",\"phone\":\"(678) 619-2227\",\"title\":\"Mobile Lead\",\"real_name\":\"Colby Williams\",\"real_name_normalized\":\"Colby Williams\",\"email\":\"cwilliams@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006.png\"}},{\"id\":\"U032RTT9W\",\"name\":\"cjackson\",\"deleted\":false,\"status\":null,\"color\":\"2b6836\",\"real_name\":\"Carol Jackson\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Carol\",\"last_name\":\"Jackson\",\"real_name\":\"Carol Jackson\",\"real_name_normalized\":\"Carol Jackson\",\"email\":\"cjackson@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03UQM7AB\",\"name\":\"cmixon\",\"deleted\":false,\"status\":null,\"color\":\"7d414c\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"cmixon@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032QKTG1\",\"name\":\"dkellogg\",\"deleted\":false,\"status\":null,\"color\":\"df3dc0\",\"real_name\":\"Dave Kellogg\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Dave\",\"last_name\":\"Kellogg\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_original.jpg\",\"real_name\":\"Dave Kellogg\",\"real_name_normalized\":\"Dave Kellogg\",\"email\":\"dkellogg@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03QBSCN5\",\"name\":\"ericscott\",\"deleted\":false,\"status\":null,\"color\":\"a72f79\",\"real_name\":\"Eric Scott\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Eric\",\"last_name\":\"Scott\",\"real_name\":\"Eric Scott\",\"real_name_normalized\":\"Eric Scott\",\"email\":\"erics@eventpoint.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0002-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U032CPD30\",\"name\":\"grantmarkdavies\",\"deleted\":false,\"status\":null,\"color\":\"9f69e7\",\"real_name\":\"Grant Davies\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Grant\",\"last_name\":\"Davies\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_original.jpg\",\"skype\":\"grantmarkdavies\",\"phone\":\"6782697647\",\"title\":\"Chief Limey Officer\",\"real_name\":\"Grant Davies\",\"real_name_normalized\":\"Grant Davies\",\"email\":\"gdavies@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":true,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032KR334\",\"name\":\"heather\",\"deleted\":false,\"status\":null,\"color\":\"684b6c\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"hbaird@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U0393BBN7\",\"name\":\"ilene\",\"deleted\":false,\"status\":null,\"color\":\"43761b\",\"real_name\":\"Ilene Peguero\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Ilene\",\"last_name\":\"Peguero\",\"title\":\"\",\"skype\":\"ipeguero_2\",\"phone\":\"\",\"real_name\":\"Ilene Peguero\",\"real_name_normalized\":\"Ilene Peguero\",\"email\":\"ipeguero@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U036TD3JD\",\"name\":\"jayschiappa\",\"deleted\":false,\"status\":null,\"color\":\"5a4592\",\"real_name\":\"Jay Schiappa\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jay\",\"last_name\":\"Schiappa\",\"skype\":\"jayschiappa.bluetube\",\"phone\":\"678-619-2228\",\"title\":\"Team Lead - PFA\",\"real_name\":\"Jay Schiappa\",\"real_name_normalized\":\"Jay Schiappa\",\"email\":\"jschiappa@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032J83D3\",\"name\":\"jchen\",\"deleted\":false,\"status\":null,\"color\":\"e0a729\",\"real_name\":\"Jonathan Chen\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jonathan\",\"last_name\":\"Chen\",\"title\":\"Senior Software Engineer\",\"skype\":\"jchen.bluetube\",\"phone\":\"770-862-8533\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_original.jpg\",\"real_name\":\"Jonathan Chen\",\"real_name_normalized\":\"Jonathan Chen\",\"email\":\"jchen@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038BFPLU\",\"name\":\"jeremy\",\"deleted\":false,\"status\":null,\"color\":\"ea2977\",\"real_name\":\"Jeremy Herring\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jeremy\",\"last_name\":\"Herring\",\"title\":\"Things\",\"skype\":\"\",\"phone\":\"7702959192\",\"real_name\":\"Jeremy Herring\",\"real_name_normalized\":\"Jeremy Herring\",\"email\":\"jherring@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0026-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0026-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0026-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0026-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0026.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03UYA8TZ\",\"name\":\"jesse_horne\",\"deleted\":false,\"status\":null,\"color\":\"4d5e26\",\"real_name\":\"Jesse Horne\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jesse\",\"last_name\":\"Horne\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_original.jpg\",\"skype\":\"itlstudios\",\"phone\":\"561-702-2116\",\"real_name\":\"Jesse Horne\",\"real_name_normalized\":\"Jesse Horne\",\"email\":\"jesse_horne@mohawkind.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U033TMYCL\",\"name\":\"jgluck\",\"deleted\":true,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"jgluck@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013.png\"}},{\"id\":\"U0375UZCY\",\"name\":\"jgreene\",\"deleted\":false,\"status\":null,\"color\":\"c386df\",\"real_name\":\"Jaavan Greene\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_original.jpg\",\"first_name\":\"Jaavan\",\"last_name\":\"Greene\",\"title\":\"Verb\",\"skype\":\"jaavan.greene\",\"phone\":\"404\",\"real_name\":\"Jaavan Greene\",\"real_name_normalized\":\"Jaavan Greene\",\"email\":\"jgreene@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03GJS1H8\",\"name\":\"jwballard\",\"deleted\":false,\"status\":null,\"color\":\"8d4b84\",\"real_name\":\"John Ballard\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"John\",\"last_name\":\"Ballard\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_original.jpg\",\"title\":\"\",\"skype\":\"\",\"phone\":\"2063007818\",\"real_name\":\"John Ballard\",\"real_name_normalized\":\"John Ballard\",\"email\":\"johnb@eventpoint.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U03UXKWG1\",\"name\":\"kevin_leclair\",\"deleted\":false,\"status\":null,\"color\":\"aba727\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"kevin_leclair@mohawkind.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U032LFXM6\",\"name\":\"keyur\",\"deleted\":false,\"status\":null,\"color\":\"5b89d5\",\"real_name\":\"Keyur Vimawala\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Keyur\",\"last_name\":\"Vimawala\",\"real_name\":\"Keyur Vimawala\",\"real_name_normalized\":\"Keyur Vimawala\",\"email\":\"kvimawala@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019.png\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U047J3LHP\",\"name\":\"kinglovedesign\",\"deleted\":false,\"status\":null,\"color\":\"8469bc\",\"real_name\":\"Amber Love\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Amber\",\"last_name\":\"Love\",\"real_name\":\"Amber Love\",\"real_name_normalized\":\"Amber Love\",\"email\":\"amber@kinglovedesign.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0021.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U036SQ8JX\",\"name\":\"kkohler\",\"deleted\":false,\"status\":null,\"color\":\"bb86b7\",\"real_name\":\"Kevin Kohler\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Kevin\",\"last_name\":\"Kohler\",\"title\":\"\",\"skype\":\"\",\"phone\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_original.jpg\",\"real_name\":\"Kevin Kohler\",\"real_name_normalized\":\"Kevin Kohler\",\"email\":\"kkohler@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U04JW0PKV\",\"name\":\"ksamples\",\"deleted\":false,\"status\":null,\"color\":\"73769d\",\"real_name\":\"Karen Samples\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Karen\",\"last_name\":\"Samples\",\"real_name\":\"Karen Samples\",\"real_name_normalized\":\"Karen Samples\",\"email\":\"ksamples@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032GM2F6\",\"name\":\"lance\",\"deleted\":false,\"status\":null,\"color\":\"e96699\",\"real_name\":\"Lance Hayden\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Lance\",\"last_name\":\"Hayden\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_original.jpg\",\"title\":\"Marketing Manager\",\"skype\":\"lance.bluetube\",\"phone\":\"7707227870\",\"real_name\":\"Lance Hayden\",\"real_name_normalized\":\"Lance Hayden\",\"email\":\"lhayden@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U0375CPKF\",\"name\":\"mattbaker\",\"deleted\":false,\"status\":null,\"color\":\"385a86\",\"real_name\":\"Matt Baker\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Matt\",\"last_name\":\"Baker\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_original.jpg\",\"real_name\":\"Matt Baker\",\"real_name_normalized\":\"Matt Baker\",\"email\":\"mbaker@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03888XHK\",\"name\":\"mmintz\",\"deleted\":false,\"status\":null,\"color\":\"a63024\",\"real_name\":\"Matt Mintz\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Matt\",\"last_name\":\"Mintz\",\"real_name\":\"Matt Mintz\",\"real_name_normalized\":\"Matt Mintz\",\"email\":\"mmintz@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U036WP3S3\",\"name\":\"molly\",\"deleted\":false,\"status\":null,\"color\":\"235e5b\",\"real_name\":\"molly\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"molly\",\"last_name\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_original.jpg\",\"skype\":\"molly.holmes507\",\"phone\":\"7708152111\",\"title\":\"Tasks on tasks\",\"real_name\":\"molly\",\"real_name_normalized\":\"molly\",\"email\":\"mholmes@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038ZA4HT\",\"name\":\"mpence\",\"deleted\":false,\"status\":null,\"color\":\"d1707d\",\"real_name\":\"Matt Pence\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"phone\":\"\",\"first_name\":\"Matt\",\"last_name\":\"Pence\",\"title\":\"#FF7777\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_original.jpg\",\"skype\":\"\",\"real_name\":\"Matt Pence\",\"real_name_normalized\":\"Matt Pence\",\"email\":\"mpence@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032CTTUY\",\"name\":\"naterickard\",\"deleted\":false,\"status\":null,\"color\":\"3c989f\",\"real_name\":\"Nate Rickard\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Nate\",\"last_name\":\"Rickard\",\"title\":\"\",\"skype\":\"Nate.Rickard\",\"phone\":\"(513) 445-3383 x404\",\"real_name\":\"Nate Rickard\",\"real_name_normalized\":\"Nate Rickard\",\"email\":\"nrickard@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U039WM8DH\",\"name\":\"nickf\",\"deleted\":false,\"status\":null,\"color\":\"8f4a2b\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"nfisher@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03PWRY86\",\"name\":\"nicole\",\"deleted\":false,\"status\":null,\"color\":\"619a4f\",\"real_name\":\"Nicole Baker\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Nicole\",\"last_name\":\"Baker\",\"title\":\"UX\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_original.jpg\",\"real_name\":\"Nicole Baker\",\"real_name_normalized\":\"Nicole Baker\",\"email\":\"nbaker@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U039WNK7H\",\"name\":\"nlines\",\"deleted\":false,\"status\":null,\"color\":\"902d59\",\"real_name\":\"Noel Lines\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Noel\",\"last_name\":\"Lines\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_original.jpg\",\"skype\":\"\",\"phone\":\"4047710519\",\"title\":\"Web and Mobile Developer\",\"real_name\":\"Noel Lines\",\"real_name_normalized\":\"Noel Lines\",\"email\":\"nlines@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038AG18Y\",\"name\":\"paulpezzano\",\"deleted\":false,\"status\":null,\"color\":\"5870dd\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"ppezzano@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03410F2D\",\"name\":\"pk\",\"deleted\":false,\"status\":null,\"color\":\"d58247\",\"real_name\":\"Pranav Khandelwal\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Pranav\",\"last_name\":\"Khandelwal\",\"title\":\"=7\",\"skype\":\"\",\"phone\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_original.jpg\",\"real_name\":\"Pranav Khandelwal\",\"real_name_normalized\":\"Pranav Khandelwal\",\"email\":\"pkhandelwal@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03KGJTD3\",\"name\":\"pschreck\",\"deleted\":false,\"status\":null,\"color\":\"4ec0d6\",\"real_name\":\"Peter Schreck\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Peter\",\"last_name\":\"Schreck\",\"phone\":\"Where do I add a photo.\",\"title\":\"Peter\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_original.jpg\",\"real_name\":\"Peter Schreck\",\"real_name_normalized\":\"Peter Schreck\",\"email\":\"pschreck@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V54P5X\",\"name\":\"reilly\",\"deleted\":false,\"status\":null,\"color\":\"bd9336\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_original.jpg\",\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"reilly@leapcommunication.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U0375HR4G\",\"name\":\"roppell\",\"deleted\":true,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_original.jpg\",\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"rpoppell@bluetubeinc.com\"}},{\"id\":\"U03DE5QBA\",\"name\":\"sopheyschrull\",\"deleted\":false,\"status\":null,\"color\":\"827327\",\"real_name\":\"Sophey Schrull\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Sophey\",\"last_name\":\"Schrull\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_original.jpg\",\"real_name\":\"Sophey Schrull\",\"real_name_normalized\":\"Sophey Schrull\",\"email\":\"sschrull@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03MQ0M2Y\",\"name\":\"summit\",\"deleted\":false,\"status\":\"out for a walk, be back soon\",\"color\":\"e23f99\",\"real_name\":\"Summit Patel\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Summit\",\"last_name\":\"Patel\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_original.jpg\",\"real_name\":\"Summit Patel\",\"real_name_normalized\":\"Summit Patel\",\"email\":\"spatel@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032CQTJ8\",\"name\":\"sydney\",\"deleted\":false,\"status\":null,\"color\":\"e7392d\",\"real_name\":\"Sydney Blount\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Sydney\",\"last_name\":\"Blount\",\"title\":\"\",\"skype\":\"sydneyblount\",\"phone\":\"6787122115x514\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_original.jpg\",\"real_name\":\"Sydney Blount\",\"real_name_normalized\":\"Sydney Blount\",\"email\":\"sblount@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03PUV2F9\",\"name\":\"tanya\",\"deleted\":false,\"status\":null,\"color\":\"e475df\",\"real_name\":\"Tanya Resende\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Tanya\",\"last_name\":\"Resende\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_original.jpg\",\"real_name\":\"Tanya Resende\",\"real_name_normalized\":\"Tanya Resende\",\"email\":\"tresende@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03BRSJC2\",\"name\":\"theabashiru\",\"deleted\":false,\"status\":null,\"color\":\"a2a5dc\",\"real_name\":\"Thea Bashiru\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Thea\",\"last_name\":\"Bashiru\",\"title\":\"Sr. Recruiter\",\"skype\":\"\",\"phone\":\"(678) 650-0994\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_original.jpg\",\"real_name\":\"Thea Bashiru\",\"real_name_normalized\":\"Thea Bashiru\",\"email\":\"tbashiru@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03E0RDH2\",\"name\":\"todd\",\"deleted\":false,\"status\":null,\"color\":\"3c8c69\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"twascom@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V475GK\",\"name\":\"willeyk\",\"deleted\":false,\"status\":null,\"color\":\"dd8527\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"krista_willey@mohawkind.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U0394E3G8\",\"name\":\"wrenn\",\"deleted\":false,\"status\":null,\"color\":\"e06b56\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_original.jpg\",\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"wrenn@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"USLACKBOT\",\"name\":\"slackbot\",\"deleted\":false,\"status\":null,\"color\":\"757575\",\"real_name\":\"Slack Bot\",\"tz\":null,\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Slack\",\"last_name\":\"Bot\",\"image_24\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_24.png\",\"image_32\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_32.png\",\"image_48\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_48.png\",\"image_72\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_72.png\",\"image_192\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_192.png\",\"real_name\":\"Slack Bot\",\"real_name_normalized\":\"Slack Bot\",\"email\":null},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false}],\"bots\":[{\"id\":\"B00\",\"name\":\"dropbox\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/dropbox_48.png\"}},{\"id\":\"B03M464UT\",\"name\":\"giphy\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/24853\\/plugins\\/giphy\\/assets\\/bot_48.png\"}},{\"id\":\"B039Y5376\",\"name\":\"hangouts\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/11591\\/img\\/services\\/hangouts_48.png\"}},{\"id\":\"B039Y2AJ5\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03A39BTD\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03A39T61\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03L3RL9U\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B032BB90V\",\"name\":\"jira\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/14542\\/img\\/services\\/jira_48.png\"}},{\"id\":\"B032FMKLF\",\"name\":\"raygun\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B03BT5Y8S\",\"name\":\"raygun\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B03GP10H5\",\"name\":\"raygun\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B032KHEKD\",\"name\":\"twitter\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/twitter_48.png\"}},{\"id\":\"B032M2CC8\",\"name\":\"twitter\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/twitter_48.png\"}},{\"id\":\"B048DUBQ5\",\"name\":\"zapier\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/7bf4\\/img\\/services\\/zapier_48.png\"}},{\"id\":\"B032JSHGM\",\"name\":\"jenkins\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/jenkins-ci_48.png\"}},{\"id\":\"B039Z0JKL\",\"name\":\"incoming-webhook\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B039Z1RBN\",\"name\":\"incoming-webhook\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03AELQ0Q\",\"name\":\"slash-commands\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/23267\\/plugins\\/slash_commands\\/assets\\/bot_48.png\"}},{\"id\":\"B03C5GXG4\",\"name\":\"slash-commands\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/23267\\/plugins\\/slash_commands\\/assets\\/bot_48.png\"}},{\"id\":\"B03C3HT75\",\"name\":\"slackbot\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20492\\/plugins\\/slackbot\\/assets\\/bot_48.png\"}},{\"id\":\"B03C5J29W\",\"name\":\"slackbot\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20492\\/plugins\\/slackbot\\/assets\\/bot_48.png\"}},{\"id\":\"B03DCKTE0\",\"name\":\"raygun\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B048U9KMX\",\"name\":\"incoming-webhook\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/4324\\/img\\/services\\/incoming-webhook_48.png\"}}],\"svn_rev\":\"dev\",\"min_svn_rev\":99999,\"version_ts\":1431028947,\"min_version_ts\":1430492037,\"cache_version\":\"v7-dog\"}');
	
//-->
</script>			
			
		
	<!-- output_js "core" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/fe49/js/rollup-core_required.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/c212/js/libs/bootstrap_plastic.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/4bdd/js/libs/fastclick.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/8556/js/libs/headroom.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/c15e/js/plastic.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/97c2/js/TS.web.js" crossorigin="anonymous"></script>

			<!-- output_js "secondary" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/ea93/js/rollup-secondary_required.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/33c4/js/TS.storage.js" crossorigin="anonymous"></script>

		<!-- output_js "regular" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/fdb7/js/TS.web.comments.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/f758/js/TS.web.file.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/2eab/js/libs/codemirror.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/9e78/js/codemirror_load.js" crossorigin="anonymous"></script>

		<script type="text/javascript">
	<!--
		boot_data.page_needs_custom_emoji = true;
		
		boot_data.file = JSON.parse('{\"id\":\"F04PL0N7X\",\"created\":1431029534,\"timestamp\":1431029534,\"name\":\"MicrosoftMvcValidation.debug.js\",\"title\":\"MicrosoftMvcValidation.debug.js\",\"mimetype\":\"text\\/plain\",\"filetype\":\"javascript\",\"pretty_type\":\"JavaScript\\/JSON\",\"user\":\"U03888XHK\",\"editable\":true,\"size\":37804,\"mode\":\"snippet\",\"is_external\":false,\"external_type\":\"\",\"is_public\":false,\"public_url_shared\":false,\"url\":\"https:\\/\\/slack-files.com\\/files-pub\\/T032CPD2W-F04PL0N7X-1f72e99ee9\\/microsoftmvcvalidation.debug.js\",\"url_download\":\"https:\\/\\/slack-files.com\\/files-pub\\/T032CPD2W-F04PL0N7X-1f72e99ee9\\/download\\/microsoftmvcvalidation.debug.js\",\"url_private\":\"https:\\/\\/files.slack.com\\/files-pri\\/T032CPD2W-F04PL0N7X\\/microsoftmvcvalidation.debug.js\",\"url_private_download\":\"https:\\/\\/files.slack.com\\/files-pri\\/T032CPD2W-F04PL0N7X\\/download\\/microsoftmvcvalidation.debug.js\",\"permalink\":\"https:\\/\\/bluetube.slack.com\\/files\\/mmintz\\/F04PL0N7X\\/microsoftmvcvalidation.debug.js\",\"permalink_public\":\"https:\\/\\/slack-files.com\\/T032CPD2W-F04PL0N7X-1f72e99ee9\",\"edit_link\":\"https:\\/\\/bluetube.slack.com\\/files\\/mmintz\\/F04PL0N7X\\/microsoftmvcvalidation.debug.js\\/edit\",\"preview\":\"\\/\\/!----------------------------------------------------------\\n\\/\\/! Copyright (C) Microsoft Corporation. All rights reserved.\\n\\/\\/!----------------------------------------------------------\\n\\/\\/! MicrosoftMvcValidation.js\\n\\n\\nType.registerNamespace(\'Sys.Mvc\');\\n\\n\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\n\\/\\/ Sys.Mvc.Validation\",\"preview_highlight\":\"<div class=\\\"sssh-code\\\"><div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/!----------------------------------------------------------<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/! Copyright (C) Microsoft Corporation. All rights reserved.<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/!----------------------------------------------------------<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/! MicrosoftMvcValidation.js<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre>Type.<span class=\\\"sssh-property\\\">registerNamespace<\\/span><span>&#40;<\\/span><span class=\\\"sssh-string\\\">\'Sys.Mvc\'<\\/span><span>&#41;<\\/span><span>;<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ Sys.Mvc.Validation<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<\\/div>\",\"lines\":884,\"lines_more\":874,\"channels\":[],\"groups\":[],\"ims\":[\"D04L1QWNH\"],\"comments_count\":0}');
		boot_data.file.comments = JSON.parse('[]');

		

		var g_editor;

		$(function(){

			var wrap_long_lines = !!TS.model.code_wrap_long_lines;

			g_editor = CodeMirror(function(elt){
				var content = document.getElementById("file_contents");
				content.parentNode.replaceChild(elt, content);
			}, {
				value: $('#file_contents').text(),
				lineNumbers: true,
				matchBrackets: true,
				indentUnit: 4,
				indentWithTabs: true,
				enterMode: "keep",
				tabMode: "shift",
				viewportMargin: Infinity,
				readOnly: true,
				lineWrapping: wrap_long_lines
			});

			$('#file_preview_wrap_cb').bind('change', function(e) {
				TS.model.code_wrap_long_lines = $(this).prop('checked');
				g_editor.setOption('lineWrapping', TS.model.code_wrap_long_lines);
			})

			$('#file_preview_wrap_cb').prop('checked', wrap_long_lines);

			CodeMirror.switchSlackMode(g_editor, 'javascript');
		});

		
		$('#file_comment').css('overflow', 'hidden').autogrow();
	//-->
	</script>

			<script type="text/javascript">TS.boot(boot_data);</script>
	<!-- slack-www212 / 2015-05-07 13:13:42 / v4ecc5aaac16db02d7ddcd4cf6742cf264e30b63c -->

</body>
</html>