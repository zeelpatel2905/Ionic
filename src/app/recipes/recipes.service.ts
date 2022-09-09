import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Manchurian',
      imageUrl:
        'https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-6.jpg',
      ingredients: [
        'Cabbage',
        'Carrot',
        'Capsicum',
        'Spring onion',
        'Corn Flour',
        'Maida',
        'Salt',
      ],
    },
    {
      id: 'r2',
      title: 'Pizza',
      imageUrl:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg&q=60',
      ingredients: [
        'Salt',
        'Flour',
        'Yeast',
        'White Sugar',
        'Mozzarella Cheese',
        'Garlic',
        'Onion',
        'Tomatos',
        'Oregano',
      ],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
