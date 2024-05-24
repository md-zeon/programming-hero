const disPlayCards = (cards, value) => {
    if(value === "Health") {
        const healthCards = cards.filter(card => card.category === value);
        return healthCards;
    } else if(value === "Clothing") {
        const clothingCards = cards.filter(card => card.category === value);
        return clothingCards;
    } else if(value === "Education") {
        const educationCards = cards.filter(card => card.category === value);
        return educationCards;
    } else if(value === "Food") {
        const foodCards = cards.filter(card => card.category === value);
        return foodCards;
    } else {
        return cards;
    }
}

export { disPlayCards }