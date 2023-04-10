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
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div
          onClick={onEditAvatar}
          className="profile__avatar-place"
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать профиль"
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          aria-label="добавить карточку"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return <Card onCardClick={onCardClick} key={card._id} card={card} />;
        })}
      </section>
    </main>
  );
}
