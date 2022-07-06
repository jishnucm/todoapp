
function todo_data(){
    $.ajax({
        url:"addtodo",
        type:"POST",
        data:{
           title:$('#title').val() ,
           description:$('#description').val() ,
           status:$('#status').val() ,
           date:$('#date').val() 
        },
        success: function(response){
          alert(response.message)
        }
    })
}
