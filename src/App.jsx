import "./App.css";

//1. Create a React component called WelcomeBanner to display the message "Welcome to My Recipe App!". Pass the app name, My Recipe as props.

const WelcomeBanner = (props) => {
  return <h1>Welcome to {props.name}!</h1>;
};

//2. Create a React component called RecipeDetails to display the following details. Pass the recipe data object as props.

const recipeData = {
  title: "Chocolate Cake",
  author: "Baker Betty",
  rating: 4.7,
};

const RecipeDetails = (props) => {
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Title: {props.data.title}</p>
      <p>Author: {props.data.author}</p>
      <p>Rating: {props.data.rating}</p>
    </div>
  );
};

//3. Create a React component called MovieInformation to display the following details. Pass the movie data object as props.

const movieData = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  releaseDate: "March 24, 1972",
};

const MovieInformation = (props) => {
  return (
    <div>
      <h2>Movie Information</h2>
      <p>Title: {props.data.title}</p>
      <p>Director: {props.data.director}</p>
      <p>Release Date: {props.data.releaseDate}</p>
    </div>
  );
};

//4. Create a React component called ProductFeatures to display the following details. Pass the product data object as props.

const productData = {
  name: "Smartwatch",
  color: "Black",
  size: "Medium",
};

const ProductFeatures = (props) => {
  return (
    <div>
      <h2>Product Features</h2>
      <p>Name: {props.data.name}</p>
      <p>Color: {props.data.color}</p>
      <p>Size: {props.data.size}</p>
    </div>
  );
};

//5. Create a React component called UserProfileCard to display the name, email and role of user. Pass the name, email and role as props.

const userData = {
  name: "Alice",
  email: "alice@example.com",
  role: "Admin",
};

const UserProfileCard = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.data.name}</p>
      <p>Email: {props.data.email}</p>
      <p>Role: {props.data.role}</p>
    </div>
  );
};
export default function App() {
  return (
    <div>
      <WelcomeBanner name="My Recipe App" />
      <RecipeDetails data={recipeData} />
      <MovieInformation data={movieData} />
      <ProductFeatures data={productData} />
      <UserProfileCard data={userData} />
    </div>
  );
}
