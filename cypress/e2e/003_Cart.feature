Feature: Shopping Cart Functionality on E-commerce Site

Scenario: [S_1007, TC_1012] Add Product to Cart
  Given User is viewing a product
  When User click on the "Add to Cart" button
  Then the product should be added to Users cart

Scenario: [S_1008, TC_1013] Update Quantity of Product in Cart
  Given User added products to cart
  When User increase the quantity of a product to 2
  Then the quantity of the product in Users cart should be updated to 2

Scenario: [S_1009, TC_1014] Remove Product from Cart
  Given User have products in cart
  When User click on the remove button next to a product
  Then the product should be removed from cart