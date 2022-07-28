// import the actions
import { nextTick } from 'process';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
  } from '../utils/actions';

import { reducer } from '../utils/reducers';

// create a sample of what the global state looks like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
    cart: [
      {
        _id: '1',
        name: 'Soup',
        purchaseQuantity: 1
      },
      {
        _id: '2',
        name: 'Bread',
        purchaseQuantity: 2
      }
    ],
    cartOpen: false
  };

// test UPDATE_PRODUCTS action to add a product to the array
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products:[{},{}]
    });
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

// test UPDATE_CATEGORIES action to add a category to the array
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{},{}]
    });
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

// test UPDATE_CURRENT_CATEGORY action to change the current category value
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});

// test ADD_TO_CART to add a product to the cart
test('ADD_TO_CART', () => {
    let newState = reducer(initialState, {
        type: ADD_TO_CART,
        product: { purchaseQuantity: 1 }
    });
    expect(newState.cart.length).toBe(3);
    expect(initialState.cart.length).toBe(2);
});

// test ADD_MULTIPLE_TO_CART adding multiples of an item
test('ADD_MULTIPLE_TO_CART', () => {
    let newState = reducer(initialState, {
        type: ADD_MULTIPLE_TO_CART,
        products: [{},{}]
    });
    expect(newState.cart.length).toBe(4);
    expect(initialState.cart.length).toBe(2);
});

// test REMOVE_FROM_CART remove item from cart with an item still in cart and when item removed is last remaining item
test('REMOVE_FROM_CART', () => {
    let newState1 = reducer(initialState, {
      type: REMOVE_FROM_CART,
      _id: '1'
    });
  
    // cart is still open
    expect(newState1.cartOpen).toBe(true);
  
    // the second item should now be the first
    expect(newState1.cart.length).toBe(1);
    expect(newState1.cart[0]._id).toBe('2');
  
    let newState2 = reducer(newState1, {
      type: REMOVE_FROM_CART,
      _id: '2'
    });
  
    // cart is empty and closed
    expect(newState2.cartOpen).toBe(false);
    expect(newState2.cart.length).toBe(0);
  
    expect(initialState.cart.length).toBe(2);
  });

// test UPDATE_CART_QUANTITY update the quantity of an item in the cart
test('UPDATE_CART_QUANTITY', () => {
    let newState = reducer(initialState, {
        type: 'UPDATE_CART_QUANTITY',
        _id: '1',
        purchaseQuantity: 3
    });
    // cart should remain open after update, and quantity of item ID 1 should be increased from 1 to 3 while item ID 2 is unaffected
    expect(newState.cartOpen).toBe(true);
    expect(newState.cart[0].purchaseQuantity).toBe(3);
    expect(newState.cart[1].purchaseQuantity).toBe(2);
    expect(initialState.cartOpen).toBe(false);
});

// test CLEAR_CART all items should be removed and cart should be closed
test('CLEAR_CART', () => {
    let newState = reducer(initialState, {
        type: CLEAR_CART
    });
    expect(newState.cartOpen).toBe(false);
    expect(newState.cart.length).toBe(0);
    expect(initialState.cart.length).toBe(2)
});

// test TOGGLE_CART to toggle cart visibility, toggling open and then closed again
test('TOGGLE_CART', () => {
    let newState = reducer(initialState, {
        type: TOGGLE_CART
    });
    expect(newState.cartOpen).toBe(true);
    expect(initialState.cartOpen).toBe(false);

    let newState2 = reducer(newState, {
        type: TOGGLE_CART
    });
    expect(newState2.cartOpen).toBe(false);
});