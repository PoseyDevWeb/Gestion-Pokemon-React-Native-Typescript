import React, {useEffect} from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useGetPokemonDetailQuery } from '../store/pokemon/api';
import { pokemonDetailsStyles } from '../styles';

const PokemonDetail = () => {
  const selectedPokemon = useSelector((state: RootState) => state.pokemon.selectedPokemon);
  const pokemonId = selectedPokemon.url.split('/').slice(-2, -1)[0];
  const numericPokemonId = parseInt(pokemonId, 10);
const { data: pokemonDetail, isLoading } = useGetPokemonDetailQuery(numericPokemonId);

  useEffect(() => {
    const fetchData = async () => {
     
      // Vérifie si la conversion est réussie (n'est pas NaN)
      if (!isNaN(numericPokemonId)) {
        // Appelle l'API pour obtenir les détails du Pokémon
        await useGetPokemonDetailQuery(numericPokemonId);
      }
    };
  
    if (!pokemonDetail && !isLoading) {
      fetchData();
    }
  }, [pokemonDetail, isLoading, pokemonId]);

  if (!pokemonDetail) {
    // Peut-être afficher un indicateur de chargement ici
    return null;
  }


  if (!selectedPokemon) {
    // Gérer le cas où selectedPokemon est null
    return (
      <View>
        <Text>No Pokemon selected</Text>
      </View>
    );
  }

  const { name, image, weight, height } = pokemonDetail;
  const typeNames = pokemonDetail.types.map((type:any) => type.type.name);
  const formattedTypes = typeNames.join(' et ');
  const imageFrontDefaultOfficialArtwork = pokemonDetail.sprites?.other?.['official-artwork']?.front_default;

  return (
    <View style={pokemonDetailsStyles.container}>
        {imageFrontDefaultOfficialArtwork && (
          <Image
            source={{ uri: imageFrontDefaultOfficialArtwork }}
            style={pokemonDetailsStyles.detailItemImage} 
          />
        )}
      <Text style={pokemonDetailsStyles.title}>Pokemon Details</Text>
      <View style={pokemonDetailsStyles.detailsContainer}>
        <Text style={pokemonDetailsStyles.detailItem}>Name : {pokemonDetail.name}</Text>
        <Text style={pokemonDetailsStyles.detailItem}>Weight : {pokemonDetail.weight} kg</Text>
        <Text style={pokemonDetailsStyles.detailItem}>Height : {pokemonDetail.height} m</Text>
        <Text style={pokemonDetailsStyles.detailItem}>Types : {formattedTypes}</Text>
      
      </View>
    </View>
  );
   
};

export default PokemonDetail;








