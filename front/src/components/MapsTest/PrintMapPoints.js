import { YMaps, Map, Placemark } from 'react-yandex-maps';
// const mapState = { center: [56.848217, 53.236675], zoom: 12 };
const PrintMapPoints = () => (
  
  <YMaps>
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} >
      <Placemark
        geometry={[55.684758, 37.738521]}
        modules={['geoObject.addon.balloon']}
      />
    </Map>
  </YMaps>
);

export default PrintMapPoints
