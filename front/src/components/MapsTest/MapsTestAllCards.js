
// import styles from './maps.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from '../CardInput/CardInput'
import { useThemeContext } from '../../context/themeContext'

import { useNavigate } from 'react-router-dom'
import { addNewCard } from '../../redux/actions/cards.action'

function MapsTest() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLightTheme, setTheme } = useThemeContext()
  const user = useSelector((state) => {
    return state.user
  })

  let [addr, setAddr] = useState('')
  const [category, setCategory] = useState()
  const categoryes = useSelector((state) => state.categoryes)

  const inputs = [
    useInput({ name: 'title', type: 'text', id: 'title' }),
    useInput({ name: 'text', type: 'text', id: 'text' }),
    useInput({ name: 'image', type: 'file', id: 'image' }),
    useInput({ name: 'price', type: 'text', id: 'price' }),
    useInput({ name: 'instagram', type: 'text', id: 'instagram' }),
    useInput({ name: 'whatsapp', type: 'text', id: 'whatsapp' }),
    useInput({ name: 'telegram', type: 'text', id: 'telegram' }),
  ]




  const a = '5ae2e3f221c38a28845f05b6e94dd44c91ceac03cdfc62d2a58e3808';


  // let ymaps = window.ymaps;
  // let myMap;
  // // ymaps.ready(init);
  // let myPlacemark;
  // let adress

  // useEffect(() => {
  //   ymaps.ready(init);
  // }, [])

  // let adressFromBack

  // ////////////////////////////////
  // async function showAdressFromBack() {
  //   const response3 = await fetch(`${process.env.REACT_APP_API_URL}/api/card/test`);
  //   adressFromBack = await response3.json();
  //   console.log(adressFromBack);


  //   for (let i = 0; i < adressFromBack.length; i++) {
  //     ///// Определение координат из адрес
  //     let addressGeo
  //     let addressCards = ymaps.geocode(adressFromBack[i].adress);
  //     addressCards.then(
  //       // eslint-disable-next-line no-loop-func
  //       function (res) {
  //         addressGeo = res.geoObjects.get(0).geometry.getCoordinates();
  //         console.log(addressGeo);



  //         // Установка метки
  //         let myPoint = new ymaps.Placemark([addressGeo[0], addressGeo[1]], {
  //           balloonContentHeader: adressFromBack[i].title,
  //           // balloonContentHeader: 'sasasa',

  //           // balloonContentLayout: BalloonContentLayout,
  //           // balloonPanelMaxMapArea: 0,
  //           balloonContentBody:[
  //             // `info: ${adressFromBack[i].image}`,
  //             // `${addres} <br/> <br/> `
  //             // 'ssadsasda'
  //           `${adressFromBack[i].text} <br/> <br/>`
  //           + `wikipedia: <br/> <a href='/'>Подробнее</a> <br/><br/>`
  //           // + `${text} <br/>`
  //           + `Фото:<br> <img src="${adressFromBack[i].image}" style='height:200px; weight:200px '> <br/>`,
              
  //         ],
  //         // Зададим содержимое нижней части балуна.
  //       balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
  //       // Зададим содержимое всплывающей подсказки.
  //       hintContent: 'Рога и копыта'
  //       }, {
  //           preset: 'islands#icon',
  //           iconColor: '#0095B6',
  //         });
  //         console.log(myPoint)
  //         myMap.geoObjects
  //           .add(myPoint);
  //       },
  //     );
  //     /////

  //   }



  // }
  // /////////////////////// 

  // async function init() {
  //   // let adress
  //   // let myPlacemark;
  //   const { geolocation } = ymaps;
  //   // console.log(geolocation);
  //   myMap = new ymaps.Map('map', {
  //     center: [55.753994, 37.622093],
  //     zoom: 10,
  //     controls: ['geolocationControl'],
  //   }, {
  //     searchControlProvider: 'yandex#search',
  //   });

  //   // местоположение по IP
  //   geolocation.get({
  //     provider: 'yandex',
  //     mapStateAutoApply: true,
  //   }).then((result) => {
  //     // Красным цветом пометим положение, вычисленное через ip.
  //     // result.geoObjects.options.set('preset', 'islands#redCircleIcon');
  //     // result.geoObjects.get(0).properties.set({
  //     // balloonContentBody: 'Мое местоположение',
  //     // });
  //     myMap.geoObjects.add(result.geoObjects);
  //   });

  //   // местоположение по браузеру
  //   geolocation.get({
  //     provider: 'browser',
  //     mapStateAutoApply: true,
  //   }).then((result) => {
  //     // Синим цветом пометим положение, полученное через браузер.
  //     // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
  //     result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
  //     // console.log(result.geoObjects);
  //     myMap.geoObjects.add(result.geoObjects);
  //   });

  //   // Поиск по клику
  //   myMap.events.add('click', function (e) {
  //     let coords = e.get('coords');

  //     // Если метка уже создана – просто передвигаем ее.
  //     if (myPlacemark) {
  //       myPlacemark.geometry.setCoordinates(coords);
  //     }
  //     // Если нет – создаем.
  //     else {
  //       myPlacemark = createPlacemark(coords);
  //       myMap.geoObjects.add(myPlacemark);
  //       // Слушаем событие окончания перетаскивания на метке.
  //       myPlacemark.events.add('dragend', function () {
  //         getAddress(myPlacemark.geometry.getCoordinates());
  //       });
  //     }
  //     getAddress(coords);
  //   });

  //   // Создание метки.
  //   function createPlacemark(coords) {
  //     return new ymaps.Placemark(coords, {
  //       iconCaption: 'поиск...'
  //     }, {
  //       preset: 'islands#violetDotIconWithCaption',
  //       draggable: true
  //     });
  //   }
  //   // Определяем адрес по координатам (обратное геокодирование).
  //   async function getAddress(coords) {
  //     myPlacemark.properties.set('iconCaption', 'поиск...');
  //     ymaps.geocode(coords).then(function (res) {
  //       let firstGeoObject = res.geoObjects.get(0);

  //       myPlacemark.properties
  //         .set({
  //           // Формируем строку с данными об объекте.
  //           iconCaption: [
  //             // Название населенного пункта или вышестоящее административно-территориальное образование.
  //             firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
  //             // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
  //             firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
  //           ].filter(Boolean).join(', '),
  //           // В качестве контента балуна задаем строку с адресом объекта.
  //           balloonContent: firstGeoObject.getAddressLine()
  //         });
  //       adress = myPlacemark.properties._data.balloonContent;
  //       console.log(adress);
  //       setAddr(adress)

  //     });
  //   }
  //   showAdressFromBack()


  // }


  // function getCardData(event) {
  //   event.preventDefault()
  //   console.log(addr);
  //   dispatch(addNewCard({
  //     title: inputs[0].getValue(),
  //     text: inputs[1].getValue(),
  //     image: 'https://i.ibb.co/GFcfRrK/Intersect.png',
  //     // image: inputs[2].getValue(),
  //     price: Number(inputs[3].getValue()),
  //     category_id: Number(2),
  //     user_id: user.value.id,
  //     instagram: inputs[4].getValue(),
  //     whatsapp: inputs[5].getValue(),
  //     telegram: inputs[6].getValue(),
  //     isActive: true,
  //     adress: addr,
  //   }))
  //   navigate('/')
  // }

  return (
    <>
      <>

        {isLightTheme && <div className={styles.card_input_container_light}>
          <form className={styles.card_input_box_light} onSubmit={getCardData}>
            {inputs.map(el => <Input
              key={el.attrs.id}
              id={el.attrs.id}
              name={el.attrs.name}
              type={el.attrs.type}
              value={el.attrs.value}
              handleChange={el.handleChange}
            />)}
            <select onChange={(event) => setCategory(event.target.value)}>
              {categoryes.map((el) => <option value={el.id}>{el.title}</option>)}
            </select>
            <button className={styles.button_light} variant="primary" type="submit">
              Submit
            </button>
          </form>

        </div>}

        {!isLightTheme && <div className={styles.card_input_container_dark}>
          <form className={styles.card_input_box_dark} onSubmit={getCardData}>
            {inputs.map(el => <Input
              key={el.attrs.id}
              id={el.attrs.id}
              name={el.attrs.name}
              type={el.attrs.type}
              value={el.attrs.value}
              handleChange={el.handleChange}
            />)}
            <select onChange={(event) => setCategory(event.target.value)}>
              {categoryes.map((el) => <option value={el.id}>{el.title}</option>)}
            </select>
            <button className={styles.button_dark} variant="primary" type="submit">
              Submit
            </button>
          </form>
        </div>}

      </>
      <div id="map" style={{ width: '90%', margin: '0 auto', height: "600px" }}></div>
      <button type={"click"}>click</button>
      <p>{addr}</p>
    </>
  )
}
export default MapsTest
