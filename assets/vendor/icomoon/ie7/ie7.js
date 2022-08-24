/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-send-icon': '&#xe936;',
		'icon-attachment': '&#xe937;',
		'icon-date': '&#xe932;',
		'icon-input-credit': '&#xe933;',
		'icon-pencil': '&#xe934;',
		'icon-invoice': '&#xe935;',
		'icon-bag-clock': '&#xe900;',
		'icon-succes-paper': '&#xe906;',
		'icon-succes-card': '&#xe90f;',
		'icon-megaphone': '&#xe914;',
		'icon-megaphone-big': '&#xe915;',
		'icon-motor': '&#xe916;',
		'icon-notification': '&#xe917;',
		'icon-phone': '&#xe918;',
		'icon-plus': '&#xe919;',
		'icon-plus-flat': '&#xe91a;',
		'icon-search': '&#xe91b;',
		'icon-shut-eye': '&#xe91c;',
		'icon-star-flat': '&#xe91d;',
		'icon-star-radio': '&#xe91e;',
		'icon-store': '&#xe91f;',
		'icon-tick': '&#xe920;',
		'icon-trash': '&#xe921;',
		'icon-user': '&#xe922;',
		'icon-minus': '&#xe923;',
		'icon-apple': '&#xe924;',
		'icon-Arrow-icon-left': '&#xe925;',
		'icon-Arrow-icon-right': '&#xe926;',
		'icon-bag': '&#xe927;',
		'icon-clock': '&#xe928;',
		'icon-credit-card': '&#xe929;',
		'icon-cros': '&#xe92a;',
		'icon-default-key': '&#xe92b;',
		'icon-exit': '&#xe92c;',
		'icon-gear': '&#xe92d;',
		'icon-headphone': '&#xe92e;',
		'icon-key-input': '&#xe92f;',
		'icon-mail': '&#xe930;',
		'icon-map-pin': '&#xe931;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
