$(document).ready(() => {
   $('.delete-todo').on('click', (e) => {
        $target = $(e.target);
        //console.log($target);
        const id = $target.attr('data-id');
        console.log(id);
    });
});