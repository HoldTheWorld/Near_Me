<div> <i className="fab fa-instagram "></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setInstagram(event.target.value)} value={instagram} placeholder="instagram" disabled={isActive} /></div>
<div> <i className="fab fa-whatsapp "></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setWhatsapp(event.target.value)} value={whatsapp} placeholder="whatsapp" disabled={isActive} /></div>
<div> <i className="fab fa-telegram-plane "></i> <input className={`${styles.input__detail_page_light} ${isActive ? '' : styles.visible__input_light}`} onChange={(event) => setTelegram(event.target.value)} value={telegram} placeholder="telegram" disabled={isActive} /></div>
</div>
<div className={styles.detail_button_block_light}>
{user ?
  <button className={styles.button_light}>Message</button>
:
<></>
}

{Number(userId) === Number(user?.id) ?
<>
<button className={`${styles.button_light}  ${isActive ? '' : styles.deactiveBtn}`} onClick={activateEdit}>Edit</button>
<button className={styles.button_light} className={`${styles.button_light} ${isActive ? styles.deactiveBtn : ''}`} onClick={() => editCard({ id, image, title, text, instagram, whatsapp, telegram })}>Success</button>
<button className={styles.button_light} onClick={() => { deleteCard(cardData.id) }}>Delete</button>
</>
:
<></>
}
</div>
</div>
}
{
  !isLightTheme && <div className={styles.detail_main_container_dark}>
  <div className={styles.detail_img_block_dark}>
  <img className={styles.detail_img_dark} onChange={(event) => setImage(event.target.value)} alt='serv-img' src={image} />
  </div>
  
  <div className={styles.detail_description_dark}>
  <p>Заголовок</p>
  <div className={styles.detail_title_dark}>
  {/* {cardData.title} */}
  <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Введите заголовок" ddisabled={isActive} />
  </div>
  <p>Описание</p>
  <div className={styles.detail_text_dark}>
  {/* {cardData.text} */}
  <input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setText(event.target.value)} value={text} placeholder="Введите описание" disabled={isActive} />
  








{
!isLightTheme && <div className={styles.detail_main_container_dark}>
<div className={styles.detail_img_block_dark}>
<img className={styles.detail_img_dark} onChange={(event) => setImage(event.target.value)} alt='serv-img' src={image} />
</div>

<div className={styles.detail_description_dark}>
<p>Заголовок</p>
<div className={styles.detail_title_dark}>
{/* {cardData.title} */}
<input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Введите заголовок" ddisabled={isActive} />
</div>
<p>Описание</p>
<div className={styles.detail_text_dark}>
{/* {cardData.text} */}
<input className={`${styles.input__detail_page_dark} ${isActive ? '' : styles.visible__input_dark}`} onChange={(event) => setText(event.target.value)} value={text} placeholder="Введите описание" disabled={isActive} />
