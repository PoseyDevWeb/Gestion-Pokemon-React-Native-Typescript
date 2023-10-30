# Test-Technique-Gestion-Pokemon-React-Native
Bienvenue dans l'application Pokémon ! Cette application utilise React Native en Typescript avec Expo pour afficher une liste de Pokémon avec des détails sur chacun d'eux.

Pokémon App
Bienvenue dans l'application Pokémon ! Cette application utilise React Native en Typescript avec
Expo pour afficher une liste de Pokémon avec des détails sur chacun d'eux.

Installation

1. Cloner le Répertoire

git clone https://github.com/PoseyDevWeb/Test-Technique-Gestion-Pokemon-React-Native.git

 cd votre-repositor
 
2. Installer Expo CLI
   
Assurez-vous d'avoir Expo CLI installé globalement. Si ce n'est pas le cas, installez-le avec la
commande suivante :

npm install -g expo-cli

3. Installer les Dépendances
   
npm install


Configuration

1. URL de Base de l'API :
   
 Ouvrez le fichier src/store/pokemon/api.ts.
 Mettez à jour la valeur de baseUrl dans la fonction createApi avec l'URL de base de
votre API.

Exécution de l'Application

1. Démarrer Expo :
   
expo start

2. Scanner le Code QR sur Expo Go (App Expo sur l'App Store) :
   
 Ouvrez l'application Expo Go sur votre appareil iOS externe.
 Scannez le code QR affiché dans votre terminal ou navigateur Expo.

Structure du Projet

1. src/store :
   
 api.ts : Configure l'API en utilisant createApi de @reduxjs/toolkit/query/react. Gère les
requêtes liées aux Pokémon.

 pokemonSlice.ts : Définit la slice Redux pour gérer l'état des Pokémon. Utilise createSlice de
@reduxjs/toolkit.

 types.ts : Contient les types utilisés dans l'application pour décrire la structure des données
Pokémon.

2. src/screens :

 PokemonList.tsx : Affiche une liste de Pokémon avec pagination. Utilise
useGetPokemonListQuery pour obtenir la liste des Pokémon depuis l'API.

 PokemonDetail.tsx : Affiche les détails d'un Pokémon sélectionné. Utilise
useGetPokemonDetailQuery pour obtenir les détails d'un Pokémon.

3. src/styles.ts :

 Composants stylisés : Utilise styled-components/native pour créer des composants stylisés
réutilisables tels que StyledContainer, StyledPokemonName, etc.

 Styles CSS : Contient des styles CSS pour la mise en forme, la disposition et le style des
composants.

Approche et Choix Techniques

1. Redux Toolkit avec RTK Query :
   
 Pourquoi : Utilise Redux Toolkit pour simplifier la gestion de l'état global de l'application. RTK
Query est intégré pour simplifier les requêtes API.

 Comment : Configuré avec configureStore et utilise createApi pour gérer les requêtes d'API.

2. React Navigation :
   
 Pourquoi : Utilise React Navigation pour une navigation fluide entre les écrans.
 Comment : Les écrans sont organisés avec un Stack.Navigator dans App.tsx.

3. Styled Components :
   
 Pourquoi : Utilise styled-components/native pour une approche de stylage propre et
maintenable.

 Comment : Les composants stylisés sont définis dans styles.ts et réutilisés à travers
l'application.

4. Pagination :

 Pourquoi : Implémente une pagination pour afficher un nombre limité de Pokémon par page.

 Comment : Utilise le state local pour gérer la pagination et FlatList pour afficher la liste
paginée.


5. Chargement Asynchrone et Gestion des Erreurs :

 Pourquoi : Fournit une meilleure expérience utilisateur pendant le chargement et en cas
d'erreur.

 Comment : Utilise des indicateurs de chargement (loading) et gère les erreurs avec error lors
de la récupération des données depuis l'API.

6. Expo et Déploiement sur iOS externe :

 Pourquoi : Utilise Expo pour simplifier le développement et le déploiement sur des appareils
iOS externes.

 Comment : Les utilisateurs peuvent scanner le code QR généré par Expo pour charger
l'application sur leur appareil iOS externe.

Ces choix et structures sont conçus pour rendre le code maintenable, extensible et offrir une
expérience utilisateur fluide. N'hésitez pas à demander des clarifications ou des détails
supplémentaires ! 
