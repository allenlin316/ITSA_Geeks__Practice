$(document).ready(function(){
    // update after selecting images
    $("#img_file").change(function(e){
        let file_names="";
        let file_size=0;
        for(var i=0; i<e.target.files.length; i++){
            if(i)   file_names += ",";
            console.log(e.target.files[i].name);
            file_names += e.target.files[i].name;
            console.log(`${i}: ${e.target.files[i].size}`);
            file_size += e.target.files[i].size;
        }
        $('.file_name').text(file_names) // print all file names
        $('.selected_files').text(e.target.files.length) // print num of files
        console.log(file_size);
        $('.total_size').text(`${Math.round(file_size/1024/1024 * 1000)/1000} MiB (${file_size} bytes)`)
    })
})