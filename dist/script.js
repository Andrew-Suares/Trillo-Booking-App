const dd_menu = document.querySelector('.user-nav__user')

			dd_menu.addEventListener('click', function () {
				dd_menu.classList.toggle('active')
			})



			let searchable = [
				'Erand Fiesta Hotel',
				'Krystal Cancun Resort',
				'Villa Palmeras',
				'Dreams Vista Cancun Golf',
				'City Express Plus Cancun',
				'The Grand at Moon Palace',
				'Extended Suites Cancún Cumbres',
				'Le Blanc Resort',
			];
			
			
			const searchInput = document.querySelector('.search__input');
			const searchWrapper = document.querySelector('.search');
			const resultsWrapper = document.querySelector('.results');
			
			searchInput.addEventListener('keyup', () => {
				let results = [];
				let input = searchInput.value;
				if (input.length) {
					results = searchable.filter((item) => {
						return item.toLowerCase().includes(input.toLowerCase());
					});
				}
				renderResults(results);
			});
			
			function renderResults(results) {
				if (!results.length) {
					return searchWrapper.classList.remove('show');
				}
			
				const content = results
					.map((item) => {
						return `<li>${item}</li>`;
					})
					.join('');
			
				searchWrapper.classList.add('show');
				resultsWrapper.innerHTML = `<ul>${content}</ul>`;
			}		