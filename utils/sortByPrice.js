const sortByPrice = (hotels, flag) => {
  if (flag) {
    return hotels.sort((a, b) => a.price - b.price);
  } else {
    return hotels.sort((a, b) => b.price - a.price);
  }
};

const sortByRattings = (hotels, flag) => {
  if (flag) {
    return hotels.sort((a, b) => a.rating - b.rating);
  } else {
    return hotels.sort((a, b) => b.rating - a.rating);
  }
};

const sortByReviews = (hotels, flag) => {
  if (flag === 'least') {
    return hotels.sort((a, b) => a.reviews - b.reviews);
  } else if (flag === 'most') {
    return hotels.sort((a, b) => b.reviews - a.reviews);
  } else {
    return { res: 'not found' };
  }
};

function filterByAmenity(hotels, amenity) {
  return hotels.filter(
    (res) => res.amenity.toLowerCase() === amenity.toLowerCase()
  );
}

const filterByCountry = (hotels, country) => {
  return hotels.filter(
    (res) => res.country.toLowerCase() === country.toLowerCase()
  );
};

const filterByCategory = (hotels, cat) => {
  return hotels.filter(
    (res) => res.category.toLowerCase() === cat.toLowerCase()
  );
};

module.exports = {
  sortByPrice,
  sortByRattings,
  sortByReviews,
  filterByAmenity,
  filterByCountry,
  filterByCategory,
};
