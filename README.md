# 🐾 Pokédex App - React Native & Expo

## 📖 Description
Bienvenue dans **Pokédex App** ! Cette application mobile, développée en **React Native** avec **TypeScript** et **Expo**, permet de consulter une liste de Pokémon et d'afficher les détails de chacun d'eux.  

L'application offre une expérience fluide grâce à **Redux Toolkit**, **RTK Query**, **React Navigation** et **styled-components**, avec gestion de la pagination et des erreurs pour un rendu performant et maintenable.

---

## ⚡ Fonctionnalités
- Liste paginée de Pokémon  
- Détails complets pour chaque Pokémon  
- Navigation fluide entre les écrans avec **React Navigation**  
- Gestion centralisée de l'état et des requêtes API avec **Redux Toolkit + RTK Query**  
- Composants stylisés réutilisables avec **styled-components/native**  
- Gestion du chargement et des erreurs pour une expérience utilisateur optimale  

---

## 🛠️ Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/PoseyDevWeb/Test-Technique-Gestion-Pokemon-React-Native.git
cd Test-Technique-Gestion-Pokemon-React-Native
```
### 2. Installer Expo CLI (si non installé)
```
npm install -g expo-cli
```
### 3. Installer les dépendances
```
npm install
```

### 4. Configurer l'API

 **Ouvrez src/store/pokemon/api.ts et mettez à jour la valeur baseUrl dans la fonction createApi avec l’URL de votre API Pokémon**.

### ▶️ Exécution de l'application
```
expo start
```
**Scannez le QR code affiché avec l'application Expo Go sur un appareil iOS ou Android pour lancer l’application**.

## 📂 Structure du projet

### `src/store`
- **api.ts** : configuration de l’API avec `createApi` de RTK Query  
- **pokemonSlice.ts** : gestion de l’état des Pokémon avec `createSlice`  
- **types.ts** : types TypeScript décrivant la structure des données Pokémon  

### `src/screens`
- **PokemonList.tsx** : liste paginée des Pokémon avec pagination et récupération via `useGetPokemonListQuery`  
- **PokemonDetail.tsx** : affichage des détails d’un Pokémon via `useGetPokemonDetailQuery`  

### `src/styles.ts`
- Composants stylisés réutilisables avec `styled-components/native`  
- Styles CSS pour mise en forme et disposition des composants  

---

## ⚙️ Choix techniques

- **Redux Toolkit + RTK Query** : simplifie la gestion de l’état global et les requêtes API.  
- **React Navigation** : navigation fluide entre les écrans via un `Stack.Navigator`.  
- **Styled Components** : composants réutilisables et maintenables pour le stylage.  
- **Pagination** : FlatList avec état local pour limiter le nombre de Pokémon affichés par page.  
- **Gestion des erreurs et chargement** : indicateurs visuels pendant le chargement et gestion des erreurs API.  
- **Expo** : développement simplifié et déploiement facile sur appareils iOS et Android.  

---

## 💡 Conclusion

Cette architecture rend le code **maintenable**, **extensible** et assure une expérience utilisateur **fluide et réactive**. L'application peut facilement être enrichie avec de nouvelles fonctionnalités, comme la recherche par type de Pokémon, des filtres avancés ou des fonctionnalités sociales.
