import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//rafc para crear nuevo

export const InicioSesion = () => {

  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    correo: "",
    contrasena: ""
  });

  const onChangeHandler = (event) => {

    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
    console.log(dataForm);
  }

  const [inicioSesion, setInicioSesion] = useState("");



  const submitHandler = async () => {
    event.preventDefault();

    const url = `http://localhost:9090/api/usuario/auth/${dataForm.correo}/${dataForm.contrasena}`;

    try {
      const result = await axios.get(url);
      const resultData = (await result).data;
      const resultEstimacion = resultData[0];  
      const id = resultEstimacion.id;
      console.log(id);
      navigate(`/historial/${id}`);
    } catch (err) {
      setInicioSesion("Error de Inicio de Sesion");
    }

  }

  return (
    <div className="container">
      <legend>Inicio de Sesion</legend>
      <form onSubmit={submitHandler} >

        <fieldset>

          <div className="form-group">
            <label >Correo</label>
            <input type="email"
              className="form-control"
              name="correo"
              
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label >Password</label>
            <input
              type="password"
              className="form-control"
              name="contrasena"
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">Inicio de sesion</button>
        </fieldset>
      </form>
      <div> {inicioSesion} </div>
    </div>


  )
}
