$(document).ready(function() {
    // remove all button appear when more than one item in the TODO list
    let remove_all_btn_check = false;
    // remove all of the TODO list button
    $('body').on("click", "#remove-all", function() {
        console.log('remove all');
        $('.input-group').remove(".list");
    });
    // remove a single TODO list button
    $('body').on("click", ".delete-btn", function(){
        console.log('delete button pressed');
        $(this).closest('.list').remove();
    });
    // edit a new TODO list button
    $('body').on("click", ".edit-btn", function(){
        console.log("edit button pressed");
        // get list name
        let list_name = $(this).parent().siblings('p').text();  
        console.log(list_name);
        $('input').val(""); // empty the input field
        $("input").attr("placeholder", list_name);
        $('#submit-btn').text("編輯");
    });
    // submit/edit button click
    $('body').on("click", "#submit-btn", function() {
        if($('#submit-btn').text() == "編輯") {
            // original item name
            let initial_name = $("input").attr("placeholder");
            console.log(initial_name);
            // edit the list name
            let list_name = $('input').val();
            for(var i = 1; i<$('.input-group').length; i++) {
                if($('.input-group').eq(i).find('p').text() == initial_name) {
                    $('.input-group').eq(i).find('p').text(list_name);
                    break;
                }
            }
            $('input').val(""); // empty the input field
            $("input").attr("placeholder", "例如:買早餐");
            $('#submit-btn').text("送出");
        }
        else{
            let item_name = $('input').val();
            console.log(item_name);
            $('.container').append(`<div class="input-group mt-3 list">
            <p class="form-control border-0">${item_name}
            </p>
            <div class="input-group-append">
                <button class="btn edit-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square mt-2 text-success" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
                <button class="btn delete-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill mt-2 text-danger" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg>
                </button>
            </div>
        </div>`);
            $('input').val(""); // empty the input field
            $("input").attr("placeholder", "例如:買早餐");
        }
    });
    $('body').on("click", "button", function(){
        console.log('$(.input-group).length: ' + $('.input-group').length);
        if($(".input-group").length < 2){
            $('#remove-all').remove();
            remove_all_btn_check = false;            
        }
        else{
            if(!remove_all_btn_check){
                $('.container').after(`<div class="text-center mt-3">
                <button class="btn btn-danger" id="remove-all">清除所有項目</button>
            </div>`);
                remove_all_btn_check = true;
            }
        }
    });
});