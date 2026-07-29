const listing = window.listing;

const coords = listing.geometry.coordinates;

const map = L.map("map").setView(
    [coords[1], coords[0]],
    8
);

L.tileLayer(
`https://maps.geoapify.com/v1/tile/osm-carto/{z}/{x}/{y}.png?apiKey=process.env.GEOAPIFY_API_KEY`,
).addTo(map);

L.marker([coords[1], coords[0]])
.addTo(map)
.bindPopup(listing.title)
.openPopup();