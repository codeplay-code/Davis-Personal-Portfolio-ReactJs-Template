import Particles from "react-tsparticles";
import "./ParticleBackground.scss";

const ParticleBackground = ({ particleConfig }) => {
  return (
    <Particles className="cs_hero_particle_1" params={particleConfig}></Particles>
  )
}

export default ParticleBackground;
