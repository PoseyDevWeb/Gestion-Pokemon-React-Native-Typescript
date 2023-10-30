import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const StyledTextListVide = styled.Text`
  font-size: 40px;
  margin: 10px;
  margin-top:100px
`;

export const StyledCenteredContainerListVide = styled.View`
  flex: 1;
  align-items: center;
  
  
`;


export const StyledContainer = styled.View`
  background-color: #f8f8f8;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 3;
`;

export const StyledPokemonName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const StyledPokemonId = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin-bottom: 10px;
`;


export const StyledButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-top : 10px;
  margin-bottom: 20px;
`;

export const StyledButton = styled.Button`
  flex: 1;
  background-color: blue;
`;

// Style PokemonDetail


export const pokemonDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    marginTop:60,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  detailItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  detailItemImage: {
    width: 300, 
    height: 300, 
    resizeMode: 'cover', 
    marginBottom: 10,
    alignContent:'center',
    marginLeft:40,
    marginTop:50,
   
  },
});




