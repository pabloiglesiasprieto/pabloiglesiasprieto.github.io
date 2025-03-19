// Controller.js
const Controller = {
    init() {
        this.bindEvents();
        this.updateView();
    },

    bindEvents() {
        $('#add-items-button').on('click', function () {
            const item = [
                Nombre = $('#item-name').val(),
                Apellido = $('#item-lastname').val(),
                Edad = $('#item-age').val(),
                Ciudad = $('#item-city').val(),
            ];
            Model.addItem(item);
            Controller.updateView();

            if(newItem){
                Model.addItem(newItem);
                Controller.updateView();
            }
        });
    },
    updateView(){
        const items = Model.getItems();
        View.render(items);
    },

};