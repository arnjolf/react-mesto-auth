import RegistSuccess from "../../components/images/RegisterSuccess.svg";
import RegisterFault from "../../components/images/RegisterFault.svg";

export default function InfoTooltip(props) {
  return (
    <div className={`popup`} id="InfoTooltip__popup" tabIndex="0">
      <div className="InfoTooltip__container">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть попап"
        ></button>
        <img className="InfoTooltip__image" src={RegistSuccess} />
        <h2 className="InfoTooltip__text">Вы успешно зарегестрировались!</h2>
      </div>
    </div>
  );
}
