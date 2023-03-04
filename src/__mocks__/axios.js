const response = {
    data: {
        id: 1,
        name: "Chicken Parmesan",
        author: "Maria Valentina",
        country: "Italy",
        flag: "https://flagcdn.com/it.svg",
        description: "A classic Italian dish of breaded chicken topped with tomato sauce and melted mozzarella cheese.",
        image: "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",
        ingredients: [
          {
            ingredient: "chicken breasts",
            quantity: 2
          },
          {
            ingredient: "flour",
            quantity: 0.5
          },
          {
            ingredient: "eggs",
            quantity: 2
          },
          {
            ingredient: "bread crumbs",
            quantity: 1
          },
          {
            ingredient: "tomato sauce",
            quantity: 1
          },
          {
            ingredient: "mozzarella cheese",
            quantity: 1
          }
        ],
        directions: [
          "Preheat the oven to 400 degrees F.",
          "Cut the chicken breasts in half lengthwise to create thin cutlets.",
          "In a shallow dish, combine the flour and some salt and pepper.",
          "In a separate shallow dish, beat the eggs.",
          "In a third shallow dish, mix the bread crumbs with some grated Parmesan cheese.",
          "Dredge each chicken cutlet in the flour mixture, then dip it in the egg mixture, and then coat it with the bread crumb mixture, pressing gently to help the bread crumbs adhere.",
          "Heat some oil in a large oven-safe skillet over medium-high heat. Add the chicken cutlets and cook until they are golden brown on both sides, about 2 minutes per side.",
          "Pour the tomato sauce over the chicken and sprinkle with the mozzarella cheese. Transfer the skillet to the oven and bake until the cheese is melted and bubbly, about 10 minutes.",
          "Serve the chicken Parmesan with a side of pasta or a salad."
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(response),
};