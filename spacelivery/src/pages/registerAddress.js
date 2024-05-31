import React, { useState } from "react";
import "../styles/formAddress.css";
import image from "../assets/spacelivery.png";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { SiAlienware } from "react-icons/si";
import { GrUserManager } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";

export const RegisterAddress = () => {
  const [planet, setPlanet] = useState("Terra");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
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
          <h2>Cadastre seu endereço</h2>
          <form>
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
                  Cidade
                  <input type="text" placeholder="Sua cidade" />
                </label>
                <label>
                  Endereço
                  <input type="text" placeholder="Seu endereço" />
                </label>
                <label>
                  CEP
                  <input type="text" placeholder="Seu cep" />
                </label>
              </>
            )}

            {planet === "Marte" && (
              <label>
                Número do Lote
                <input type="text" placeholder="ex: 1234" />
              </label>
            )}

            <label>
              Nome
              <input type="text" placeholder="Seu nome" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Seu email" />
            </label>
            <label>
              Número de Telefone
              <input type="tel" placeholder="US +1(555) 000 - 0000" />
            </label>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className="image-section">
          <img src={image} alt="mars" />
        </div>
      </main>
    </div>
  );
};
