import { FunctionComponent } from "preact";
import { PerfilType } from "../types.ts";

const Perfil: FunctionComponent<{ perfil: PerfilType }> = ({ perfil }) => {
  return (
    <div class="perfilContainer">
      <div class="perfil">
        <img src={perfil.photo} alt={`${perfil.name} photo.`} />
        <div class="perfilInfo">
          <h2>{perfil.name}</h2>
          <h3>{`Age ${perfil.age}`}</h3>
          <p id="perfilDescription">{perfil.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
