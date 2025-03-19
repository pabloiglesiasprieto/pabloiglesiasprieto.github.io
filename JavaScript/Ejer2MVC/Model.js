// Model.js
const Model = {
    data:{
        items: [],
    },
    addItem(item) {
        this.data.items.push(item);
    },
    getItems(){
        return this.data.items;
    },
};