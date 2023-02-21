function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Dra Marina Luiza Carbonera',
			text: 'Biomédica Esteta',
			url: 'https://seusite.com/sua_url',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}