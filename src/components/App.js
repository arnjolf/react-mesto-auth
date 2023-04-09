import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    console.log(card);
    setSelectedCard(card);
    console.log(selectedCard);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main
          onCardClick={handleCardClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input"
          id="popup__name"
          name="profile-name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__name-error popup__error"></span>
        <input
          type="text"
          className="popup__input"
          id="popup__job"
          name="profile-job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__job-error popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input"
          id="place-name"
          name="place-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="place-name-error popup__error"></span>
        <input
          type="url"
          className="popup__input"
          id="card-image"
          name="place-src"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="card-image-error popup__error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__input"
          id="avatar-src"
          name="avatar-src"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-src-error popup__error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
