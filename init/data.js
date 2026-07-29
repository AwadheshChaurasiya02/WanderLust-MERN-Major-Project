const sampleListing = [
{
  title: "Floating Bamboo Villa",
  description: "Handcrafted bamboo villa floating over a peaceful rainforest lake with private kayaking access.",
  image: {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    filename: "floating-bamboo-villa"
  },
  price: 420,
  location: "Ubud",
  country: "Indonesia",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [115.2625, -8.5069]
  },
  category: "Trending"
},
{
  title: "Arctic Glass Igloo",
  description: "Luxury glass igloo offering uninterrupted views of the Northern Lights.",
  image: {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    filename: "arctic-glass-igloo"
  },
  price: 780,
  location: "Rovaniemi",
  country: "Finland",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [25.7294, 66.5039]
  },
  category: "Arctic"
},
{
  title: "Santorini Windmill Home",
  description: "A restored white windmill converted into a luxury cliffside home.",
  image: {
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    filename: "santorini-windmill-home"
  },
  price: 650,
  location: "Santorini",
  country: "Greece",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [25.4615, 36.3932]
  },
  category: "Iconic Cities"
},
{
  title: "Black Forest Treehouse",
  description: "Luxury treehouse hidden among centuries-old pine trees with panoramic forest views.",
  image: {
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    filename: "black-forest-treehouse"
  },
  price: 310,
  location: "Baden-Baden",
  country: "Germany",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [8.2415, 48.7606]
  },
  category: "Camping"
},
{
  title: "Amalfi Lemon Villa",
  description: "Mediterranean villa surrounded by fragrant lemon orchards overlooking the sea.",
  image: {
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    filename: "amalfi-lemon-villa"
  },
  price: 560,
  location: "Amalfi",
  country: "Italy",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [14.6029, 40.6333]
  },
  category: "Rooms"
},
{
  title: "Patagonia Mountain Lodge",
  description: "Remote wooden lodge with glacier views and world-class hiking trails.",
  image: {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    filename: "patagonia-mountain-lodge"
  },
  price: 470,
  location: "El Chalten",
  country: "Argentina",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [-72.8863, -49.3315]
  },
  category: "Mountains"
},
{
  title: "Maldives Coral Water Villa",
  description: "Elegant overwater villa with a private deck and coral reef access.",
  image: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    filename: "maldives-coral-water-villa"
  },
  price: 920,
  location: "Vaavu Atoll",
  country: "Maldives",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [73.5123, 3.4817]
  },
  category: "Boats"
},
{
  title: "Royal Desert Palace",
  description: "Historic sandstone palace featuring royal suites and desert sunset views.",
  image: {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    filename: "royal-desert-palace"
  },
  price: 510,
  location: "Jaisalmer",
  country: "India",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [70.9083, 26.9157]
  },
  category: "Castles"
},
{
  title: "Lavender Farm Cottage",
  description: "Stone cottage surrounded by endless lavender fields in the countryside.",
  image: {
    url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae",
    filename: "lavender-farm-cottage"
  },
  price: 240,
  location: "Provence",
  country: "France",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [5.3698, 43.9352]
  },
  category: "Farms"
},
{
  title: "Iceland Volcano Dome",
  description: "Luxury geodesic dome near volcanic landscapes with geothermal hot springs.",
  image: {
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    filename: "iceland-volcano-dome"
  },
  price: 390,
  location: "Vik",
  country: "Iceland",
  reviews: [],
  owner: null,
  geometry: {
    type: "Point",
    coordinates: [-19.0085, 63.4186]
  },
  category: "Domes"
}
]

module.exports={data:sampleListing}