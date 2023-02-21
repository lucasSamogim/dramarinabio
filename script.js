function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Dra Marina Luiza Carbonera',
			text: 'Dra. Marina Carbonera - Biomédica Esteta',
			url: 'https://lucassamogim.github.io/dramarinabio/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}