import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from '../CardInput/CardInput'
import { useThemeContext } from '../../context/themeContext'
import { Link, useNavigate } from 'react-router-dom'


function MapsTest({ cards, select }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [map, setMap] = useState(null)
  const { isLightTheme, setTheme } = useThemeContext()
  let [addr, setAddr] = useState('')
  const categoryes = useSelector((state) => state.categoryes)

  const a = '5ae2e3f221c38a28845f05b6e94dd44c91ceac03cdfc62d2a58e3808';


  let ymaps = window.ymaps;
  let myMap;
  // ymaps.ready(init);
  let myPlacemark;
  let adress

  useEffect(() => {
    // if(document.querySelector('#map') !== undefined){
    //   console.log(document.querySelector(`.${styles.places_mapbox_light}`))
    //   // .remove(document.querySelector('#map'))
    // }

    setTimeout(() => {
      if ([...document.querySelector('#map').children].length > 0) {
        // ymaps.ready(init)
        document.querySelector('#map').innerHTML = ''
        ymaps.ready(init)
      } else {
        document.querySelector('#map').innerHTML = ''
        ymaps.ready(init)
      }
    }, 500)

    console.log(document.querySelector('ymaps'))
  }, [])

  let adressFromBack

  ////////////////////////////////
  async function init() {

    // let adress
    // let myPlacemark;
    const { geolocation } = ymaps;


    if (myMap) {
      myMap.destroy();

    } else {
      myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 10,
        controls: ['geolocationControl'],
      }, {
        searchControlProvider: 'yandex#search',
      });
    }

    // местоположение по IP
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

    // местоположение по браузеру
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
        adress = myPlacemark.properties._data.balloonContent;
        console.log(adress);
        setAddr(adress)

      });
    }
    showAdressFromBack()
  }

  /////////////
  async function showAdressFromBack() {
    const response3 = await fetch(`${process.env.REACT_APP_API_URL}/api/card/test/${select}`);
    adressFromBack = await response3.json();

    for (let i = 0; i < adressFromBack.length; i++) {
      ///// Определение координат из адрес
      let addressGeo

      let addressCards = ymaps.geocode(adressFromBack[i].adress);
      addressCards.then(
        // eslint-disable-next-line no-loop-func
        function (res) {
          addressGeo = res.geoObjects.get(0).geometry.getCoordinates();
          // console.log(addressGeo);

          // Установка метки
          let myPoint = new ymaps.Placemark([addressGeo[0], addressGeo[1]], {
            balloonContentHeader: adressFromBack[i].title,
            // balloonContentHeader: 'sasasa',

            // balloonContentLayout: BalloonContentLayout,
            // balloonPanelMaxMapArea: 0,
            balloonContentBody: [
              // `info: ${adressFromBack[i].image}`,
              // `${addres} <br/> <br/> `
              // 'ssadsasda'
              `${adressFromBack[i].text} <br/> <br/>`
              + ` <br/> <button type="button" style="background: #D4145A;
  border-radius: 100px;
  color: white;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid transparent;
  text-align: center;" class="btn__more" data-id=${cards[i].id}>Подробнее</button> <br/><br/>`
              // + `${text} <br/>`
              + `<br> <img src="http://localhost:3001/uploads/${cards[i].image}" style='height:120px; weight:120px '> <br/>`,

            ],
            // Зададим содержимое нижней части балуна.
            // balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
            // Зададим содержимое всплывающей подсказки.
            // hintContent: 'Рога и копыта'
          }, {
            preset: 'islands#icon',
            iconColor: '#0095B6',
          });
          // console.log(myPoint)
          myMap.geoObjects
            .add(myPoint);
        },
      );
      /////
    }
  }

  /////////////////////// 
  return (
    <div style="position: absolute" id="map" style={{ width: '100%', padding: '10px', margin: '0 auto', height: "100%" }}></div>
  )
}
export default MapsTest
