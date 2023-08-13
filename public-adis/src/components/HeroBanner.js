import { useState, useEffect } from "react";
const HeroBanner = ({ data, setQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const [indexCategory, setIndexCategory] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery({
      categoryId: data[indexCategory].id,
      q: inputValue,
    });
  };
  return (
    <div className="hero-homepage">
      <div className="container wrapping-content">
        <div className="row">
          <div className="col-12 text-center">
            <div className="tagline">
              <h1>Anuncios y avisos clasificados</h1>
              <h2>Encuentra todo lo que buscas cerca de ti .</h2>
            </div>
            <div className="search_form">
              <form className="row" onSubmit={onSubmit}>
                <div className="form-group col-lg-4 col-sm-12">
                  <input
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    className="form-control"
                    placeholder="¿Qué estás buscando?"
                  />
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <select
                    className="form-control"
                    value={indexCategory}
                    onChange={(e) => setIndexCategory(e.target.value)}
                  >
                    {!!data.length &&
                      data.map((value, i) => (
                        <option value={i}>{value.category}</option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-lg-4 col-sm-12">
                  <button type="submit" className="custom-button">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
            <div className="popular_searches">
              Búsquedas populares:
              <a href="#">locales</a>,<a href="#">Autos</a>,
              <a href="#">Departamentos</a>,<a href="#">Alquiler</a>,
              <a href="#">Empleos</a>,<a href="#">Venta</a>,
              <a href="#">Traspaso</a>,<a href="#">Terrenos</a>,
              <a href="#">Ropa</a>,<a href="#">Casas</a>,<a href="#">abogado</a>
              ,<a href="#">Restaurante</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
