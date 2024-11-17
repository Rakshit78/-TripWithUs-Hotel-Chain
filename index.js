const express = require('express');
const { resolve } = require('path');
const hotels = require('./hotel');
const {
  sortByPrice,
  sortByRattings,
  sortByReviews,
  filterByAmenity,
  filterByCountry,
  filterByCategory,
} = require('./utils/sortByPrice');
let cors = require('cors');

const app = express();
app.use(cors());
const port = 3010;

// app.use(express. Static('static'));


express. Static


app.get('/',(req,res)=>{
  res.status(200).send('welcome to tripWithUs')
})
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});
// /hotels/sort/pricing?pricing=low-to-high
app.get('/hotels/sort/pricing', (req, res) => {
  const { pricing } = req.query;
  const flag = pricing === 'low-to-high';
  const hotel = sortByPrice(hotels, flag);
  res.status(200).json({ hotels: hotel });
});
// /hotels/sort/rating
// /hotels/sort/rating?rating=low-to-high
app.get('/hotels/sort/rating', (req, res) => {
  const { rating } = req.query;
  const flag = rating === 'low-to-high';
  const result = sortByRattings(hotels, flag);
  res.status(200).json({ hotels: result });
});

app.get('/hotels/sort/reviews', (req, res) => {
  const reviews = req.query.reviews;
  const flag =
    reviews === 'least-to-most'
      ? 'least'
      : reviews === 'most-to-least'
      ? 'most'
      : 'not found';
  const result = sortByReviews(hotels, flag);
  res.status(200).json({ hotels: result });
});

app.get('/hotels/filter/amenity', (req, res) => {
  const amenity = req.query.amenity;
  console.log(amenity);
  const result = filterByAmenity(hotels, amenity);

  res.status(200).json({ hotels: result });
});

app.get('/hotels/filter/country', (req, res) => {
  const { country } = req.query;
  const result = filterByCountry(hotels, country);
  res.status(200).json({ hotels: result });
});

app.get('/hotels/filter/category', (req, res) => {
  const cat = req.query.category;
  const result = filterByCategory(hotels, cat);
  res.status(200).json({ hotels: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
