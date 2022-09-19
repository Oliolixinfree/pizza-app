import { RootState } from '../store';

// создание селектора, принято называть через select/selector
export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
