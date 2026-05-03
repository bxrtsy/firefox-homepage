if (enable_search) {
	const search_wrapper = document.getElementById("search-wrapper");
	search_wrapper.innerHTML = `
		<form action="${search_engine_url}" method="GET">
			<input class="search" type="text" name="q" placeholder="Search with ${search_engine_name}...">
		</form>
	`
}

function create_shortcut(url, image, tooltip) {
	return `
		<a class="shortcut-anchor" href="${url}">
			<img class="shortcut" src="shortcuts/${image}.svg"
				 onerror="this.src='shortcuts/placeholder.svg'; this.onerror=null;">
			<span class="tooltip">${tooltip}</span>
		</a>
	`;
}

if (enable_shortcuts) {
	const shortcut_wrapper = document.getElementById("shortcut-wrapper");

	// Put SVG icon in shortcuts/ when adding a shortcut
	const content = shortcuts.map(url => create_shortcut('https://' + url, url, url));

	if (enable_new_shortcut) {
		content.push(create_shortcut('config.js', 'new', 'New shortcut'));
	}

	shortcut_wrapper.innerHTML = content.join('');
}
