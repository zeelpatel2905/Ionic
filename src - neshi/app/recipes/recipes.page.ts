import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Indian Style Sizler',
      imageUrl: 'https://depositphotos.com/184750028/stock-photo-close-tasty-steaming-chicken-sizzler.html',
      ingredients: ['French fries','Rice','Meat','Salad']

    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://en.wikipedia.org/wiki/Spaghetti',
      ingredients: ['Spaghetti','Tamatoes','Meat']

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
