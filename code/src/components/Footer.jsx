import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      {/*stahnout react knihovnu na forms*/}
      {/*Form contacts section */}
      <div className="flex flex-col mb-16 p-8 md:flex-row md:justify-around">
        {/*form*/}
        <div className="mb-16 md:w-1/3 lg:w-1/3">
          <form>
            <label htmlFor="name" className="paragraph text-white">
              Vaše jméno
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              className="form-input mb-4"
            />
            <br />
            <label htmlFor="email" className="paragraph text-white">
              Váš email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              className="form-input mb-4"
            />
            <br />
            {/* ::after for dropdown*/}
            <label htmlFor="message" className="paragraph text-white">
              Řekněte mi o vašem projektu
            </label>
            <br />
            <textarea
              cols="60"
              rows="8"
              id="message"
              name="textarea"
              placeholder=""
              wrap="soft"
              className="form-input h-16 resize-none overflow-auto text-start"
            />
            <br />
            <br />
            <Button label="Odeslat" className="button" />
          </form>
        </div>
        {/*contacts*/}
        <div className="md:w-1/3 lg:w-1/3">
          <h2 className="heading mb-2">Kontakty</h2>
          <div className="flex items-center gap-4">
            <img
              src="./imgs/email.png"
              alt="email icon"
              className="w-[28px] h-[28px]"
            />
            <p className="paragraph text-white">info@warp.cz</p>
          </div>
          <p className="heading2 mt-20 max-w-[300px]">
            Pojďme společně posílit váš byznys
          </p>
        </div>
      </div>
      {/* Bottom section */}
      <div className="bg-secondary flex justify-center flex-col items-center">
        <img
          src="./imgs/warp-logo.png"
          alt="warp logo"
          className="w-[125px] h-[125px]"
        />
        <ul className="nav-text text-white flex gap-4 mb-4">
          <li>
            <a href="#">O mně</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Služby</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
        <ul className="flex gap-4 mb-4">
          <li>
            <a href="#">
              <img
                src="./imgs/instagram-icon.png"
                alt="instagram icon"
                className="w-[28px] h-[28px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./imgs/facebook-icon.png"
                alt="facebook icon"
                className="w-[28px] h-[28px]"
              />
            </a>
          </li>
        </ul>
        <p className="paragraph text-white pb-4">© 2024 Warp</p>
      </div>
    </>
  );
};

export default Footer;
