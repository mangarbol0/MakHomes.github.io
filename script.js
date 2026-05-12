const properties = [

{
    image: "images/Buzigahouse.jpeg",
    title: "4 Bedrooms Mansion For Rent In Buziga With Servants Quarters Monthly",
    category: "For Rent",
    usage: "Residential",
    type: "House",
    location: "Buziga",
    price: 4000000
},

{
    image: "images/Bunga-house-for-sale-4-850x570.jpeg",
    title: "5 Bedroom Mansion for Sale in Bunga Kampala",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Bunga",
    price: 2190000000
},

{
    image: "images/Akrighthouse.jpeg",
    title: "5 Bedrooms House For Sale In Akright City Bwebajja Entebbe Road On 25 Decimals",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Akright",
    price: 2000000000
},

{
    image: "images/Aquamarine-Heights-Condominiums-1.jpg",
    title: "Aquarium Heights Apartment for Sale in Munyonyo Kampala",
    category: "For Sale",
    usage: "Residential",
    type: "Apartment",
    location: "Munyonyo",
    price: 572000000
},

{
    image: "images/kira-twobedrooms.jpg",
    title: "Two Bedrooms furnished Apartments For Rent in Kira Town Kampala",
    category: "For Rent",
    usage: "Residential",
    type: "Apartment",
    location: "Kira",
    price: 5200000
},

{
    image: "images/3 bedrooms in Akright.jpeg",
    title: "Three Bedrooms furnished Apartments For Rent Akright City",
    category: "For Rent",
    usage: "Residential",
    type: "Apartment",
    location: "Akright",
    price: 6700000
},

{
    image: "images/commercialinmuonyonyo.jpg",
    title: "This commercial property for rent in Munyonyo Kampaala",
    category: "For Rent",
    usage: "Commercial",
    type: "House",
    location: "Munyonyo",
    price: 55000000
},

{
    image: "images/kololo-steam.jpeg",
    title: "3 Bedroom Apartment for Sale in Kololo, Kampala Pool, Gym, Steam & Sauna",
    category: "For Sale",
    usage: "Residential",
    type: "Apartment",
    location: "Kololo",
    price: 1501500000
},

{
    image: "images/House-in-Kira-Bulindo-for-Sale-850x570.jpeg",
    title: "4 Bedroom House for Sale in Kira Bulindo",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Kira",
    price: 780000000
},

{
    image: "images/Munyonyo-kigo-house.jpeg",
    title: "New 4 Bedroom House for Sale in Munyonyo Kigo",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Munyonyo",
    price: 650000000
},

{
    image: "images/Bwebajja-house.jpg",
    title: "4 Bedroom House for Sale in Bwebajja, Entebbe",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Bwebajja",
    price: 820000000
},

{
    image: "images/Bunga.webp",
    title: "5 bedroom house for sale in Bunga, Kampala",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Bunga",
    price: 1190000000
},

{
    image: "images/Furnished-2-Bedrooms-Apartments-in-Kira-town-1.jpg",
    title: "2 bedrooms furnished Apartments For Sale In Kira Town Kampala",
    category: "For Sale",
    usage: "Residential",
    type: "Apartment",
    location: "Kira",
    price: 6500000
},

{
    image: "images/landbweya.webp",
    title: "Land for sale in Bweya, Entebbe",
    category: "For Sale",
    usage: "Residential",
    type: "Land",
    location: "Bweya",
    price: 600000000
},

{
    image: "images/land-bwebajja.jpeg",
    title: "60 Decimals Lake View Plot Of Land For Sale In Bwebajja Dundu Entebbe Road",
    category: "For Sale",
    usage: "Residential",
    type: "Land",
    location: "Bwebajja",
    price: 550000000
},

{
    image: "images/kololo-rental.jpeg",
    title: "2 Bedrooms Furnished Apartments For Rent In Kololo Kampala",
    category: "For Rent",
    usage: "Residential",
    type: "Apartment",
    location: "Kololo",
    price: 5200000
},

{
    image: "images/standalone.jpeg",
    title: "4 Bedrooms Standalone House For Rent In Lubowa",
    category: "For Rent",
    usage: "Residential",
    type: "House",
    location: "Lubowa",
    price: 5000000
},

{
    image: "images/rentinmunyonyo.jpg",
    title: "5 Bedrooms House For Rent In Munyonyo On Quarter An Acre",
    category: "For Rent",
    usage: "Residential",
    type: "House",
    location: "Munyonyo",
    price: 7400000
},

{
    image: "images/land-kira.jpeg",
    title: "2 Plots Of 25 Decimals Each For Sale In Kira Parliamentary SACCO",
    category: "For Sale",
    usage: "Residential",
    type: "Land",
    location: "Kira",
    price: 185000000
},

{
    image: "images/house-for-rent-in-Kololo-11.jpeg",
    title: "A bungalows house for rent in Kololo, Kampala",
    category: "For Rent",
    usage: "Residential",
    type: "Bungalow",
    location: "Kololo",
    price: 5200000
},

{
    image: "images/landinbunga.jpeg",
    title: "12 Decimals Plot Of Land For Sale In Bunga Kawuku",
    category: "For Sale",
    usage: "Residential",
    type: "Land",
    location: "Bunga",
    price: 350000000
},

{
    image: "images/House-for-sale-in-Bunga-Kampala-Uganda-2.jpg",
    title: "Luxurious 5 Bedroom Mansion for Sale in Bunga Kampala",
    category: "For Sale",
    usage: "Residential",
    type: "House",
    location: "Bunga",
    price: 2300000000
},

];

function displayProperties(data) {

const container =
document.getElementById("propertyContainer");

container.innerHTML = "";

data.forEach(property => {

container.innerHTML += `

<div class="card">

<img src="${property.image}">

<div class="card-info">

<h3>${property.title}</h3>

<p>${property.category}</p>

<p>${property.usage}</p>

<p>${property.type}</p>

<p>${property.location}</p>

<h4>UGX ${property.price.toLocaleString()}</h4>
</div>
</div>
`;
});
}

function filterProperties() {

const category =
document.getElementById("categoryFilter").value;

const usage =
document.getElementById("usageFilter").value;

const type =
document.getElementById("typeFilter").value;

const location =
document.getElementById("locationFilter").value;

const filtered =
properties.filter(property => {

return (

(category === "All" ||
property.category === category)
&&

(usage === "All" ||
property.usage === usage)
&&

(type === "All" ||
property.type === type)
&&

(location === "All" ||
property.location === location)
);
});
displayProperties(filtered);
}
displayProperties(properties);
