import React from "react";
const HomeCategories = ({ data, setChoosesCategory }) => {
  return (
    <div class="category-container">
      <div class="container">
        <h2 class="text-center styleh2 karma">
          <a class="greens" href="#">
            Categorias
          </a>
        </h2>
        <div class="cat-icons">
          {!!data.length &&
            data.map((value, i) => {
              if (
                value.icon === "fa fa-film" ||
                value.icon === "fa fa-book" ||
                value.icon === "fa fa-child"
              ) {
                return (
                  <a
                    key={value.id}
                    onClick={() => setChoosesCategory(value.id)}
                  >
                    <div class="mainicon">
                      <i class={value.icon} aria-hidden="true"></i>
                      <span class="text-icon">{value.category}</span>
                    </div>
                  </a>
                );
              }

              if (value.icon === "mainicon icon") {
                <a key={value.id} onClick={() => setChoosesCategory(value.id)}>
                  <div class="mainicon icon" data-icon="F">
                    <span class="text-icon">Support</span>
                  </div>
                </a>;
              }

              return (
                <a key={value.id} onClick={() => setChoosesCategory(value.id)}>
                  <div class={value.icon}>
                    <span class="text-icon">{value.category}</span>
                  </div>
                </a>
              );
            })}
        </div>
        {/* <div class="cat-icons">
          <a href="#">
            <div class="mainicon icon maida-laptop">
              <span class="text-icon">Laptops</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-briefcase">
              <span class="text-icon">Empleos</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-t-shirt">
              <span class="text-icon">Ropa</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-car-1">
              <span class="text-icon">Carros</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-calculator">
              <span class="text-icon">Auditors</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-zoo">
              <span class="text-icon">máscotas</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-town-hall">
              <span class="text-icon">Finance</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-art-gallery">
              <span class="text-icon">Art</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-fast-food">
              <span class="text-icon">Comida</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-bar">
              <span class="text-icon">Club</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-delivery-transport-2">
              <span class="text-icon">Logistics</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-display">
              <span class="text-icon">Electronicos</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-cup">
              <span class="text-icon">Cafe</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-case-medic">
              <span class="text-icon">Doctores</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon">
              <i class="fa fa-film" aria-hidden="true"></i>
              <span class="text-icon">Entretenimiento</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-soccer">
              <span class="text-icon">Juegos</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon maida-phone">
              <span class="text-icon">Celulares</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon icon" data-icon="F">
              <span class="text-icon">Support</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon">
              <i class="fa fa-book" aria-hidden="true"></i>
              <span class="text-icon">Libros</span>
            </div>
          </a>
          <a href="#">
            <div class="mainicon">
              <i class="fa fa-child" aria-hidden="true"></i>
              <span class="text-icon">Para niños</span>
            </div>
          </a>
          <div class="clearfix"></div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeCategories;
