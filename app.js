console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');

karticky.forEach((karticka) => {
	const nastaveniCasovace = () => {
		karticka.classList.add('otocena');
	};
	karticka.addEventListener('click', () => {
		karticka.classList.toggle('otocena');
		setTimeout(nastaveniCasovace, 3000);
	});
});
