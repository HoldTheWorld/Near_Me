
// import styles from './maps.module.css'


function MapsTest() {
  let ymaps = window.ymaps;
  ymaps.ready(init);

function init() {
    // Создаем выпадающую панель с поисковыми подсказками и прикрепляем ее к HTML-элементу по его id.
    var suggestView1 = new ymaps.SuggestView('suggest1');
}



/////

  return (
      <div>
      <p class="header">Начните вводить запрос для появления поисковой подсказки</p>
      <input type="text" id="suggest1" style={{width:'300px', margin: '5px'}}></input>
      </div>
  )
}
export default MapsTest
