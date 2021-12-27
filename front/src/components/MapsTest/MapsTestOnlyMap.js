// import styles from './maps.module.css'

// only maps

import { useState, useEffect } from 'react'
function MapsTest() {
  let [addr, setAddr] = useState('')

  const a = '5ae2e3f221c38a28845f05b6e94dd44c91ceac03cdfc62d2a58e3808';

  let ymaps = window.ymaps;
  let myMap;
  ymaps.ready(init);
  let myPlacemark;
  let adress

  async function setAdd1 (add) {
    setAddr(add)
  }

  async function init() {
    // let adress
    // let myPlacemark;
    const { geolocation } = ymaps;
    // console.log(geolocation);
    const myMap = new ymaps.Map('map', {
      center: [55.753994, 37.622093],
      zoom: 10,
      controls: ['geolocationControl'],
    }, {
      searchControlProvider: 'yandex#search',
    });

    geolocation.get({
      provider: 'yandex',
      mapStateAutoApply: true,
    }).then((result) => {
      // Красным цветом пометим положение, вычисленное через ip.
      // result.geoObjects.options.set('preset', 'islands#redCircleIcon');
      // result.geoObjects.get(0).properties.set({
      // balloonContentBody: 'Мое местоположение',
      // });
      myMap.geoObjects.add(result.geoObjects);
    });

    geolocation.get({
      provider: 'browser',
      mapStateAutoApply: true,
    }).then((result) => {
      // Синим цветом пометим положение, полученное через браузер.
      // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
      result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
      // console.log(result.geoObjects);
      myMap.geoObjects.add(result.geoObjects);
    });




    // Поиск по клику

    myMap.events.add('click', function (e) {
      let coords = e.get('coords');

      // Если метка уже создана – просто передвигаем ее.
      if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
      }
      // Если нет – создаем.
      else {
        myPlacemark = createPlacemark(coords);
        myMap.geoObjects.add(myPlacemark);
        // Слушаем событие окончания перетаскивания на метке.
        myPlacemark.events.add('dragend', function () {
          getAddress(myPlacemark.geometry.getCoordinates());
        });
      }
      getAddress(coords);
    });

    // Создание метки.
    function createPlacemark(coords) {
      return new ymaps.Placemark(coords, {
        iconCaption: 'поиск...'
      }, {
        preset: 'islands#violetDotIconWithCaption',
        draggable: true
      });
    }
    // Определяем адрес по координатам (обратное геокодирование).
    async function getAddress(coords) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res) {
        let firstGeoObject = res.geoObjects.get(0);

        myPlacemark.properties
          .set({
            // Формируем строку с данными об объекте.
            iconCaption: [
              // Название населенного пункта или вышестоящее административно-территориальное образование.
              firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
              // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
            ].filter(Boolean).join(', '),
            // В качестве контента балуна задаем строку с адресом объекта.
            balloonContent: firstGeoObject.getAddressLine()
          });
          setAddr('adress')
        adress = myPlacemark.properties._data.balloonContent;
        setAdd1(adress)
        console.log(adress);
        
      });
    }
  }



  return (
    <>
      <div id="map" style={{width:'90%', margin: '0 auto', height:"600px"}}></div>
      <button type={"click"} >click</button>
    </>
  )
}
export default MapsTest
