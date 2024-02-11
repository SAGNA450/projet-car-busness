import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Paramétre</h2>

        <div className="settings__top">
          <button className="setting__btn">Mes Details</button>
          <button className="setting__btn active__btn">Profil</button>
          <button className="setting__btn">Password</button>
          <button className="setting__btn">Email</button>
          <button className="setting__btn">Notification</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Mis à jour de votre profil et vos détails 
          </p>
          <form>
            <div className="form__group">
              <div>
                <label>Habite au </label>
                <input type="text" placeholder="Dakar, Sénégal" />
              </div>

              <div>
                <label>Modéle</label>
                <input type="text" placeholder="SYL 3108" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <div>
                <label>Numéro tel</label>
                <input type="number" placeholder="+221 77*******" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Date de naissance</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>Genre</label>
                <input type="text" placeholder="Male" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Votre Photo</label>
                <p className="profile-img__desc">
                Ceci sera affiché dans votre profil
                </p>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Supprimé</button>
                <button className="update__btn">Mis à jour</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;