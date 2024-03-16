import React from 'react';

const cafes = [
 {
   "name": "Ashley's Cafe",
   "place_id": "12hydbdf76sljfts87sbfis"
 },
 {
   "name": "Avenue Bakery Cafe",
   "place_id": "jahgde7wgdiau8ewsahgosd"
 },
 {
   "name": "Avenue Cafe",
   "place_id": "skjd86svvfdrsv55svbvf3f"
 },
 {
   "name": "Bazaar Cafe",
   "place_id": "kjk234g4gcvfx8usg1l33pi"
 },
 {
   "name": "California Chicken Cafe",
   "place_id": "12hydbdf76sljfts87sbfis"
 },
 {
   "name": "Hi-Lo Cafe",
   "place_id": "mjdhgetr4pojfyts22fzfsh"
 },
 {
   "name": "Philz Coffee",
   "place_id": "urhw3837ehalod7w02b7835"
 }
];

const places = [
 {
   "id": "12hydbdf76sljfts87sbfis",
   "street_no": "1B",
   "locality": "Macarthur Blvd",
   "postal_code": "20619",
   "lat": "38.1781 N",
   "long": "118.4171 W"
 },
 {
   "id": "jahgde7wgdiau8ewsahgosd",
   "street_no": "60H",
   "locality": "Solomos Island Road",
   "postal_code": "20688",
   "lat": "36.7783 N",
   "long": "119.4179 W"
 },
 {
   "id": "kjk234g4gcvfx8usg1l33pi",
   "street_no": "45250",
   "locality": "Worth Avenue, Unit A",
   "postal_code": "20619",
   "lat": "36.1152",
   "long": "117.521"
 },
 {
   "id": "saswe3s6yydtdr52hsd72yst",
   "street_no": "1X",
   "locality": "Macarthur Blvd",
   "postal_code": "20687",
   "lat": "36.7783",
   "long": "119.4179"
 },
 {
   "id": "skjd86svvfdrsv55svbvf3f",
   "street_no": "7S",
   "locality": "Three Notch Road",
   "postal_code": "20619",
   "lat": "36.83",
   "long": "119.6"
 },
 {
   "id": "mjdhgetr4pojfyts22fzfsh",
   "street_no": "22803",
   "locality": "Gunston Dr Lexington Park",
   "postal_code": "20688",
   "lat": "35.7788",
   "long": "119.979"
 },
 {
   "id": "urhw3837ehalod7w02b7835",
   "street_no": "225",
   "locality": "Macarthur Blvd",
   "postal_code": "20687",
   "lat": "35.77813",
   "long": "119.41791"
 }
];

function findCaliforniaCafes(searchTerm) {
  const results = cafes.filter(cafe => cafe.name.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map(cafe => {
                          const placeDetails = places.find(place => place.id === cafe.place_id);
                          return { ...cafe, ...placeDetails };
                      });
  return results;
}

function App() {
  const searchTerm = 'Avenue';
  const results = findCaliforniaCafes(searchTerm);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Café Explorer</h1>
      <h2 className="text-xl font-semibold mb-2">Results for: {searchTerm}</h2>
      <div className="grid grid-cols-1 gap-4">
        {results.map((result, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
            <p className="mb-1">Street: {result.street_no}</p>
            <p className="mb-1">Locality: {result.locality}</p>
            <p className="mb-1">Postal Code: {result.postal_code}</p>
            <p className="mb-1">Latitude: {result.lat}</p>
            <p>Longitude: {result.long}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
