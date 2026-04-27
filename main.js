if (enable_search) {
	const search_wrapper = document.getElementById("search-wrapper");
	search_wrapper.innerHTML = `
		<form action="${search_engine_url}" method="GET">
			<input class="search" type="text" name="q" placeholder="Search with ${search_engine_name}...">
		</form>
	`
}

if (enable_shortcuts) {
	const shortcut_wrapper = document.getElementById("shortcut-wrapper");

	// Put SVG icon in shortcuts/ when adding a shortcut
	const content = shortcuts.map(url => `
		<a class="shortcut-anchor" href="https://${url}">
			<img class="shortcut" src="shortcuts/${url}.svg">
			<span class="tooltip">${url}</span>
		</a>
	`);

	if (enable_new_shortcut) {
		content.push(`
			<a class="shortcut-anchor" href="config.js">
				<img class="shortcut" src="shortcuts/new.svg">
				<span class="tooltip">New shortcut</span>
			</a>
		`);
	}

	shortcut_wrapper.innerHTML = content.join('');
}
