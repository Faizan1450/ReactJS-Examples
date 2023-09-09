const choice = (items) => {
    let random = Math.floor(Math.random() * items.length);
    return items[random];
}

const remove = (items, item) => {
    let index = items.indexOf(item);
    let temp1 = items.slice(0, index);
    let temp2 = items.slice(index + 1);
    return [...temp1, ...temp2];
}

export { choice, remove };