'use strict';
	// Create book objects
	let books = [
		new BookModel({
			id: 1,
			title: 'Horror stories with React',
			author: new AuthorModel({name: 'Alfred Angular'}),
			isbn: "1111-222222-6666"
		}),
		new BookModel({
			id: 2,
			title: 'The Angular Fiasco',
			author: new AuthorModel({name: 'Robert React'}),
			isbn: "1331-123456-7777"
		}),
		new BookModel({
			id: 3,
			title: 'The Vue Skyfall',
			author: new AuthorModel({name: 'Vanessa Vanilla'}),
			isbn: "1411-987654-6666"
		}),
		new BookModel({
			id: 4,
			title: 'jQuery the forgotten gem',
			author: new AuthorModel({name: 'Ivar Explorer'}),
			isbn: "2111-123789-5678"
		}),
		new BookModel({
			id: 5,
			title: 'Angular Reboot 3',
			author: new AuthorModel({name: 'Steven Syntax'}),
			isbn: "3311-000112-4545"
		}),
		new BookModel({
			id: 6,
			title: 'Web Component',
			author: new AuthorModel({name: 'Luigi Bambini'}),
			isbn: "3311-000112-4646"
		})		
	];

	// Find all DOM elements which we want to render to
	const bookTables =
		document.querySelectorAll('[data-container="books-table"]');
	for(let i = 0; i < bookTables.length; i++){
		// Initialize the table component
		new BookTableComponent({
			books: books,
			containerElement: bookTables[i]
		});
	}
