import React, { useState } from "react";
import "../styles/formAddress.css";
import image from "../assets/spacelivery.png";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { SiAlienware } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";

export const EditAddress = () => {
  const [planet, setPlanet] = useState("Terra");
  const [address, setAddress] = useState({
    country: "",
    city: "",
    street: "",
    postalCode: "",
    lot: "",
    name: "",
    email: "",
    phoneNumber: "",
    help: "",
    services: [],
    terms: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Endereço editado:", address);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          SpaceLivery
          <LiaSpaceShuttleSolid style={{ marginLeft: 10 }} />
        </h1>
        <nav>
          <button className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/edit">Editar dados</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="form-section">
          <h2>Edite seu endereço</h2>

          <form onSubmit={handleSubmit}>
            <label>Você é um?</label>
            <label>
              <div className="planets">
                <label
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  terráqueo - moro na terra <GrUserManager />
                  <input
                    style={{ width: "20%" }}
                    type="radio"
                    value="Terra"
                    checked={planet === "Terra"}
                    onChange={handlePlanetChange}
                  />
                </label>
                <label
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  marciano - sou de marte
                  <SiAlienware />
                  <input
                    style={{ width: "20%" }}
                    type="radio"
                    value="Marte"
                    checked={planet === "Marte"}
                    onChange={handlePlanetChange}
                  />
                </label>
              </div>
            </label>

            {planet === "Terra" && (
              <>
                <label>
                  País
                  <input
                    type="text"
                    name="country"
                    value={address.country}
                    onChange={handleInputChange}
                    placeholder="Seu país"
                  />
                </label>
                <label>
                  Cidade
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleInputChange}
                    placeholder="Sua cidade"
                  />
                </label>
                <label>
                  Endereço
                  <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleInputChange}
                    placeholder="Seu endereço"
                  />
                </label>
                <label>
                  Código Postal
                  <input
                    type="text"
                    name="postalCode"
                    value={address.postalCode}
                    onChange={handleInputChange}
                    placeholder="Seu código postal"
                  />
                </label>
              </>
            )}

            {planet === "Marte" && (
              <label>
                Número do Lote
                <input
                  type="text"
                  name="lot"
                  value={address.lot}
                  onChange={handleInputChange}
                  placeholder="ex: 1234"
                />
              </label>
            )}

            <label>
              Nome
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleInputChange}
                placeholder="Seu nome"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={address.email}
                onChange={handleInputChange}
                placeholder="Seu email"
              />
            </label>
            <label>
              Número de Telefone
              <input
                type="tel"
                name="phoneNumber"
                value={address.phoneNumber}
                onChange={handleInputChange}
                placeholder="US +1(555) 000 - 0000"
              />
            </label>

            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className="image-section">
          <img src={image} alt="mars" />
        </div>
      </main>
    </div>
  );
};
