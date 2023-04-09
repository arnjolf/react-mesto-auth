import { useEffect, useState } from "react";
import { api } from "../../utils/Api";
import Card from "../Card/Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
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
