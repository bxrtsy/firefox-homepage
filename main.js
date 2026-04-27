// Add your shortcuts here
const shortcuts = [
	'www.wikipedia.org',
	'github.com',
	'www.figma.com',
	'www.reddit.com',
	'www.youtube.com',
	'music.youtube.com',
	'gemini.google.com',
	// 'www.spotify.com'
];

const container = document.getElementById('shortcut-container');

// Put SVG icon in shortcuts/ when adding a shortcut
const content = shortcuts.map(url => `
	<a class="shortcut-anchor" href="https://${url}">
		<img class="shortcut" src="shortcuts/${url}.svg">
		<span class="tooltip">${url}</span>
	</a>
`);

// content.push('<a class="shortcut-anchor" href="main.js"><img class="shortcut" src="shortcuts/new.svg"></a>');

container.innerHTML = content.join('');
