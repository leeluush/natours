/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGVlbHV1c2giLCJhIjoiY2xwOWpoYWlvMnBuODJrcW9sZHIwNGhsNiJ9.zycMqcIRt7oYQSSDkwVmKg';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/leeluush/clp9lia90002b01pa7kdg98dk',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // create a marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add market
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description} </p>`)
      .addTo(map);

    // Extand the map bounds
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds),
    {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
      }
    };
};
