export function dataHandler(quote, element) {
	const { author, text, avatar } = quote;
	element.innerHTML = `
		<p class='quote'>"${text}"</p>
		<div class='profile'>
			<div class='avatar'>
				<img src='${avatar ? avatar : './src/assets/images/unknow-profile.png'}' alt='Профиль' class='avatar'>
			</div>
			<p class='author'>${author}</p>
		</div>
	`;
}
