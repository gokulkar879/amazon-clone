export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET": return {...state, basket: [...state.basket, action.item], total_items: state.total_items+1, total_cost: parseFloat(state.total_cost)+parseFloat(action.item.price)}
    }
}

export const initialState = {
    user: "gokul_karki",
    basket: [],
    total_items: 0,
    total_cost: 0,
}