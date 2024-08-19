const RecipeList = () => {
  const data = [
    {
      name: "Baked Salmon",
      ingredients: [
        "Salmon",
        "Pine Nuts",
        "Butter Lettuce",
        "Yellow Squash",
        "Olive Oil",
        "Garlic",
      ],
      steps: [
        "Preheat the oven to 350 degrees.",
        "Spread the olive oil around a glass baking dish.",
        "Add the salmon, garlic, and pine nuts to the dish.",
        "Bake for 15 minutes.",
        "Add the yellow squash and put back in the oven for 30 mins.",
        "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
      ],
    },
    {
      name: "Fish Tacos",
      ingredients: [
        "Whitefish",
        "Cheese",
        "Iceberg Lettuce",
        "Tomatoes",
        "Tortillas",
      ],
      steps: [
        "Cook the fish on the grill until hot.",
        "Place the fish on the 3 tortillas.",
        "Top them with lettuce, tomatoes, and cheese",
      ],
    },
  ];

  return (
    <div>
      <h1>Delicious Recipes</h1>
      {data.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <h3>Cooking Instructions</h3>
          <ul>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
