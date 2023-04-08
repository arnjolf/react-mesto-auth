export const validateConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Profile Popup
export const profilePopupElement = document.querySelector("#profile__popup");
export const profilePopupContainer =
  profilePopupElement.querySelector(".popup__container");
export const nameInput = profilePopupContainer.querySelector("#popup__name");
export const jobInput = profilePopupContainer.querySelector("#popup__job");
export const profilePopupSelector = "#profile__popup";
export const nameSelector = ".profile__name";
export const statusSelector = ".profile__job";
export const profileSaveButton = profilePopupElement.querySelector(
  ".popup__save-button"
);

//NewCard Popup
export const cardPopupElement = document.querySelector("#add-card__popup");
export const cardPopupContainer =
  cardPopupElement.querySelector(".popup__container");
export const cardsGallery = ".elements";

export const cardPopupSelector = "#add-card__popup";
export const cardSaveButton = cardPopupElement.querySelector(
  ".popup__save-button"
);

//ChangeAvatar Popup
export const changeAvatarSelector = "#change-avatar__popup";
export const changeAvatarContainer = document.querySelector(
  ".profile__avatar-place"
);
export const changeAvatarPopupElement = document.querySelector(
  "#change-avatar__popup"
);
export const changeAvatarPopupContainer =
  changeAvatarPopupElement.querySelector(".popup__container");

//Image Popup
export const imagePopupSelector = "#card-image__popup";

//Global
export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const buttonAddNewCard = document.querySelector(".profile__add-button");
export const deleteCardPopupSelector = "#delete-card__popup";
export const avatarSaveButton = changeAvatarPopupElement.querySelector(
  ".popup__save-button"
);

export const profileAvatar = document.querySelector(".profile__avatar");
export const profileName = document.querySelector(nameSelector);
export const profileAbout = document.querySelector(statusSelector);
