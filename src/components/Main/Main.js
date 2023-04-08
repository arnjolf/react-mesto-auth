import React from "react";
import { api } from "../../utils/Api";
import Card from "../Card/Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  let [userName, setUserName] = React.useState("");
  let [userDescription, setUserDescription] = React.useState("");
  let [userAvatar, setUserAvatar] = React.useState("");
  let [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUser().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <main class="main">
      <section class="profile">
        <div
          onClick={onEditAvatar}
          className="profile__avatar-place"
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>
        <div class="profile__info">
          <h1 class="profile__name">{userName}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            class="profile__edit-button"
            aria-label="Редактировать профиль"
          ></button>
          <p class="profile__job">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          class="profile__add-button"
          aria-label="добавить карточку"
        ></button>
      </section>
      <section class="elements">
        {cards.map((card) => {
          return <Card onCardClick={onCardClick} key={card._id} card={card} />;
        })}
      </section>
    </main>
  );
}
