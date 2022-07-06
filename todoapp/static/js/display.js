function display_data(){
    
    $.ajax({
        url:"display_data",
        type:"GET",
        success: function(response){
            $('.trclass').remove()
            let k=1
            for(i=0;i<response.message.length;i++){
                $('#table_data').append("<tr class='trclass'><td >"+ k 
                +"</td><td>"+ response.message[i].title
                +"</td><td>"+ response.message[i].description
                +"</td><td class="+ response.message[i].status + " >"+ response.message[i].status+
                "</td><td>"+ response.message[i].date+
                "</td><td><a onclick='delete_todo(" + response.message[i].id + ")' ><i class='fa fa-trash'></i></a></td><td><a data-target='#updatetodo_data' data-toggle='modal' onclick='update_todo(" + response.message[i].id + ")' ><i class='fa-solid fa-pencil'></i></a></td></tr>")
             k++ 

            }
           

         


            
        }
    })
}

function delete_todo(id){
    del=confirm("do you want to delete")
        if(del){
    $.ajax({
        url:"delete_todo",
        type:"POST",
        data:{
            id:id
        },
        success:function(response){
           
            alert(response.message)
            display_data()
            
       
        }
    })

}

}

function update_todo(id){
    $.ajax({
        url:"update_todo",
        type:"POST",
        data:{
            id:id
        },
        success:function(response){

        
        console.log(response.message[0])
          $('#id').val(response.message[0].id)
          $('#modaltitle').val(response.message[0].title)
       
          $('#modaldescription').val(response.message[0].description)
          $('#modalstatus').val(response.message[0].status)
          $('#modaldate').val(response.message[0].date)
            
        }
    })

}
function update_table(){
    $.ajax({
        url:"update_table",
        type:"POST",
        data:{
            id: $('#id').val(),
            title:$('#modaltitle').val(),
            description:$('#modaldescription').val(),
            status: $('#modalstatus').val(),
            date:$('#modaldate').val()
        },
        success:function(response){

        
       alert(response.message)
       display_data()
            
        }
    })

}

function update_date() {
    $.ajax({
      url:"update_date",
      type:"POST",
      data:{
        date:$('#datefield').val(),
        
      },
      success:function(response){
        // $('#table_data').empty()
        $('.trclass').remove()
        k=1
        for(i=0;i<response.message.length;i++){
            $('#table_data').append("<tr  class='trclass'><td>"+k
            +"</td><td>"+ response.message[i].title
            +"</td><td>"+ response.message[i].description
            +"</td><td class="+ response.message[i].status + " >"+ response.message[i].status+
            "</td><td>"+ response.message[i].date+
            "</td><td><a onclick='delete_todo(" + response.message[i].id + ")' ><i class='fa fa-trash'></i></a></td><td><a data-target='#updatetodo_data' data-toggle='modal' onclick='update_todo(" + response.message[i].id + ")' ><i class='fa-solid fa-pencil'></i></a></td></tr>")
         k++ 

        }
      
      }
    })
 }
