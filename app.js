// items

const menu = [
	{
		id: 1,
		title: "Garden Salad",
		category: "lunch",
		price: 15.99,
		img: "./food.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 2,
		title: "Butternut Squash Soup",
		category: "lunch",
		price: 12.99,
		img: "./food1.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 3,
		title: "Pesto Pasta",
		category: "lunch",
		price: 16.99,
		img: "./food2.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 4,
		title: "Glazed Meatballs",
		category: "lunch",
		price: 12.99,
		img: "./food3.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 5,
		title: "Avacado Toast",
		category: "breakfast",
		price: 10.99,
		img: "./food4.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 6,
		title: "French Toast",
		category: "breakfast",
		price: 11.99,
		img: "./food5.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 7,
		title: "Monster",
		category: "shakes",
		price: 9.99,
		img: "./shake1.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 8,
		title: "Cookie",
		category: "shakes",
		price: 9.99,
		img: "./shake2.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
	{
		id: 9,
		title: "Rainbow Magic",
		category: "shakes",
		price: 9.99,
		img: "./shake3.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam illo repellendus assumenda quae. Voluptates explicabo repellendus, id fugit deleniti harum consequuntur debitis nemo doloremque, in earum, sit at necessitatibus?",
	},
];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
	displayMenuItems(menu);
});

// filter items

filterBtns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const category = e.currentTarget.dataset.id;
		const menuCategory = menu.filter(function (menuItem) {
			if (menuItem.category === category) {
				return menuItem.category;
			}
		});
		if (category === "all") {
			displayMenuItems(menu);
		} else {
			displayMenuItems(menuCategory);
		}
	});
});

function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		return ` <article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
	});
	displayMenu = displayMenu.join("");
	sectionCenter.innerHTML = displayMenu;
}
