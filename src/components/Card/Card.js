export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="element">
      <img
        src={card.link}
        alt=""
        className="element__image"
        onClick={handleClick}
      />
      <button className="element__trash-can"></button>
      <div className="element__footer">
        <h2 className="element__place">{card.name}</h2>
        <div className="element__like-container">
          <button
            type="button"
            className="element__like-button"
            aria-label="нравится"
          ></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
