// View.js
const View = {
    render(items){
        const list = $('#items-list');
        list.empty();
        items.forEach(item => {
            list.append(`<li>${item}</li>`);
        });
    },
};