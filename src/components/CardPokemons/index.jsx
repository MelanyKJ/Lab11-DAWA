import PokeballImage from '../../assets/icons/pokeball.png';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const CardPokemons = ({ pokemons }) => {
  return (
    <body>
          <div className="grid">
              <div className="grid__pokemon">
                    {pokemons.length > 0 &&
                      pokemons.map(({ pokemon }) => (
                        <div className="card">
                          <div className='card__title'>
                            <img className='card__title-img' src={PokeballImage} alt="" />
                          </div>
                          <h3 className='card__name'>{pokemon.name}</h3>                              
                          <img className='card__image' width={120} height={120} src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                            pokemon.url.split("/")[6]
                          }.svg`} alt="" loading='lazy'/>
                        </div>
                      ))}
              </div>

            </div>
    </body>


  );
};

export default CardPokemons;
