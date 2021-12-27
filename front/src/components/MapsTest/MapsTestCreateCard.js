// import styles from './maps.module.css'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
// import styles from '../CardInput/CardInput'
import styles from './maps.module.css'

import { useThemeContext } from '../../context/themeContext'

import { useNavigate } from 'react-router-dom'
import { addNewCard } from '../../redux/actions/cards.action'

function MapsTest() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const upload = useRef()
  
  const { isLightTheme , setTheme} = useThemeContext()
  const user = useSelector((state)=>{
    return state.user
  })

  let [addr, setAddr] = useState('')
  const [category, setCategory] = useState(1)
  const categoryes = useSelector((state) => state.categoryes)
  const inputs = [
    useInput({ name: 'Название', type: 'text', id: 'title'}),
    useInput({ name: 'Описание', type: 'text', id: 'text'}),
    // useInput({ name: 'image', type: 'file', id: 'image'}),
    useInput({ name: 'Стоимость услуги (от)', type: 'text', id: 'price'}),
    useInput({ name: 'Instagram', type: 'text', id: 'instagram'}),
    useInput({ name: 'Whatsapp', type: 'text', id: 'whatsapp'}),
    useInput({ name: 'Telegram', type: 'text', id: 'telegram'}),
  ]

  const [image, setImage] = useState(null);
  const [reader] = useState(new FileReader())





  const a = '5ae2e3f221c38a28845f05b6e94dd44c91ceac03cdfc62d2a58e3808';


  let ymaps = window.ymaps;
  let myMap;
  // ymaps.ready(init);
  let myPlacemark;
  let adress

  useEffect(() => {
    ymaps.ready(init);
  }, [])

  function imageHandler() {
    reader.readAsDataURL(upload.current.files[0]);
    reader.addEventListener('load', function () {
      setImage(reader.result)
    });
  }
  ////////////////////////////////
  async function showArray() {
    const response3 = await fetch(`${process.env.REACT_APP_API_URL}/api/card/test`);
    const adressBack = await response3.json();
    // console.log(info);
    // Россия, Москва, улица Орджоникидзе, 3с5
    // getAddress

    /*  myPoint = new ymaps.Placemark([allCult[i].geometry.coordinates[1], allCult[i].geometry.coordinates[0]], {
        balloonContentHeader: allCult[i].properties.name,
        // balloonContentLayout: BalloonContentLayout,
        // balloonPanelMaxMapArea: 0,
        balloonContentBody:
          // `info: ${response3[image]}`,
          `${addres} <br/> <br/> `
          + `wikipedia: <br/> <a href=${wikipedia}>${allCult[i].properties.name}</a> <br/><br/>`
          + `${text} <br/>`
          + `Фото:<br> <img src="${style || ''}" style='height:${style.height && 0}px; weight:${style.weight && 0} '> <br/>`,
      }, {
        preset: 'islands#icon',
        iconColor: '#0095B6',
      });
      */

    // myMap.geoObjects
    // .add(myPoint);
    // }
  }
  /////////////////////// 

  async function init() {
    // let adress
    // let myPlacemark;
    const { geolocation } = ymaps;
    // console.log(geolocation);
    const myMap = new ymaps.Map('map', {
      center: [55.753994, 37.622093],
      zoom: 8,
      controls: ['geolocationControl'],
    }, {
      searchControlProvider: 'yandex#search',
    });

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
        // console.log(adress);
        setAddr(adress)

      });
    }
    showArray()

    ///// Определение координат из адреса
    // let addressGeo
    // let addressCards = ymaps.geocode("Россия, Москва, улица Стасовой, 2Б");
    // addressCards.then(
    //   function (res) {
    //     addressGeo = res.geoObjects.get(0).geometry.getCoordinates();
    //     // console.log(addressGeo);



    //     // Установка метки
    //     // let myPoint = new ymaps.Placemark([addressGeo[0], addressGeo[1]], {
    //     //   balloonContentHeader: 'Балун Header',
    //     //   // balloonContentLayout: BalloonContentLayout,
    //     //   // balloonPanelMaxMapArea: 0,
    //     //   balloonContentBody:
    //     //     // `info: ${response3[image]}`,
    //     //     // `${addres} <br/> <br/> `
    //     //     `sdsdfsd`
    //     //   // + `wikipedia: <br/> <a href=${wikipedia}>${allCult[i].properties.name}</a> <br/><br/>`
    //     //   // + `${text} <br/>`
    //     //   // + `Фото:<br> <img src="${style || ''}" style='height:${style.height && 0}px; weight:${style.weight && 0} '> <br/>`,
    //     // }, {
    //     //   preset: 'islands#icon',
    //     //   iconColor: '#0095B6',
    //     // });

    //     // myMap.geoObjects.add(myPoint);
    //   },
    // );
    /////
  }


 

  function getCardData(event) {
    event.preventDefault()
  
    dispatch(addNewCard({
      title: inputs[0].getValue(),
      text: inputs[1].getValue(),
      image: upload.current.value,
      price: Number(inputs[2].getValue()),
      category_id: Number(category),
      user_id: user.value.id,
      instagram: inputs[3].getValue(),
      whatsapp: inputs[4].getValue(),
      telegram: inputs[5].getValue(),
      isActive: true,
      adress: addr,
    }, upload.current.files[0]
    ))
    navigate('/')
  }


  return (
<>
    
    {isLightTheme && 
      <>
      <form className={styles.card_input_box_light} onSubmit={getCardData}>
          {inputs.map(el => <Input 
            key={el.attrs.id}
            id={el.attrs.id}
            name={el.attrs.name}
            type={el.attrs.type}
            value={el.attrs.value}
            handleChange={el.handleChange}
            />)}
            <label htmlFor='file' className={styles.upload_button_light}>Добавить фото</label>     
            <input className={styles.uploader_light} type='file' name='file' id='file' ref={upload} onChange={imageHandler}/>
            {image && <img className={styles.preview_light}  src={image}/>} 
            
            <select className={styles.cat_selector_light} onChange={(event)=>setCategory(event.target.value)}>
              {categoryes.map((el) => <option value={el.id}>{el.title}</option>)}
          </select>  
          <button className={styles.button_light} variant="primary" type="submit">
            Сохранить
          </button>
        </form>
      
      <div className={styles.mapbox_light}>
          <div id="map" style={{ width: '100%',padding: '10px', margin: 'auto', height: "100%" }}></div>
      </div>
        {/* <p>{addr}</p> */}

        </>
      }

      {!isLightTheme && 
        <>
       <form className={styles.card_input_box_dark} onSubmit={getCardData}>
          {inputs.map(el => <Input 
            key={el.attrs.id}
            id={el.attrs.id}
            name={el.attrs.name}
            type={el.attrs.type}
            value={el.attrs.value}
            handleChange={el.handleChange}
            />)}

            <label htmlFor='file'  className={styles.upload_button_dark}>Добавить фото</label>
            <input className={styles.uploader_dark} type='file' name='file' id='file' ref={upload} onChange={imageHandler}/>
            {image && <img className={styles.preview_dark} src={image}/>} 

          <select className={styles.cat_selector_dark} onChange={(event)=>setCategory(event.target.value)}>
          {categoryes.map((el) => <option value={el.id}>{el.title}</option>)}
          </select>       
          <button className={styles.button_dark} variant="primary" type="submit">
            Сохранить
          </button>
        </form>
        <div className={styles.mapbox_dark}>
        <div id="map" style={{ width: '100%', padding: '10px', margin: 'auto',  height: "100%" }}></div>

      </div>
          {/* <p>{addr}</p> */}
    </>
    }
    </>
  )
}
export default MapsTest
