import React from "react";
import ThemeOff from '../../assets/images/themeOff.svg';
import ThemeOn from '../../assets/images/themeOn.svg';
import { Icone } from '../UI';



const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />
const claro = <Icone src={ThemeOn} alt="Tema Claro" />

export default ({tema}) => (tema ? claro : escuro);
