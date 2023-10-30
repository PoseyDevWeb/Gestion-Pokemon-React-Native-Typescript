import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useGetPokemonListQuery } from '../store/pokemon/api';
import { useDispatch } from 'react-redux';
import { selectPokemon } from '../store/pokemonSlice';
import { Pokemon } from '../store/pokemon/types';
import { StyledContainer, StyledPokemonName, StyledTouchableOpacity, StyledButton, StyledCenteredContainerListVide, StyledButtonContainer, StyledTextListVide } from '../styles';
import { useNavigation } from '@react-navigation/native';

const PokemonList = () => {
  // const { data: pokemonList, error, isLoading } = useGetPokemonListQuery();
    const { data, error } = useGetPokemonListQuery();
    // const {isLoading : isLoading} = useGetPokemonListQuery()
  const pokemonList = data?.results || []; // Utilise data?.results s'il est défini, sinon utilise un tableau vide
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedPokemonList = pokemonList?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    if (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  }, [error]);

  const renderPokemonItem = ({ item }: { item: Pokemon }) => {
    const pokemonId = item.url.split('/').slice(-2, -1)[0];

    const handlePokemonSelect = (pokemon : Pokemon) => {
      dispatch(selectPokemon(pokemon));
      navigation.navigate("PokemonDetail" as never);
  
    };

    return(
    

<ScrollView>
<StyledTouchableOpacity onPress={() => handlePokemonSelect(item)}>
  <StyledContainer>
    <StyledPokemonName>{item.name}</StyledPokemonName>
    
  </StyledContainer>
</StyledTouchableOpacity>
</ScrollView>
  )
    };

      useEffect(() => {
    setCurrentPage(1);
  }, [pokemonList]);



  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout when the component unmounts or when the data is loaded
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <View style={{ flex: 1, overflow: 'scroll' }}>
  {loading && (
    <StyledCenteredContainerListVide>
      <StyledTextListVide>Loading...!</StyledTextListVide>
    </StyledCenteredContainerListVide>
  )}

  {error && !loading && (
    <StyledCenteredContainerListVide>
      <StyledTextListVide>Liste Introuvable!</StyledTextListVide>
    </StyledCenteredContainerListVide>
  )}

  {pokemonList.length === 0 && !error && !loading && (
    <StyledCenteredContainerListVide>
      <StyledTextListVide>Liste Vide</StyledTextListVide>
    </StyledCenteredContainerListVide>
  )}

  {pokemonList.length > 0 && !loading && (
    <React.Fragment>
      <FlatList
        data={paginatedPokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
      />

      <StyledButtonContainer>
        <StyledButton
          title="Page précédente"
          onPress={handlePrevPage}
          disabled={currentPage === 1}
        />
        <StyledButton
          title="Page suivante"
          onPress={handleNextPage}
          disabled={currentPage * itemsPerPage >= pokemonList.length}
        />
      </StyledButtonContainer>
    </React.Fragment>
  )}
</View>
  );

};

export default PokemonList;
