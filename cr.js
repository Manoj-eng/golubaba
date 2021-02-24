var tbody=document.getElementById("tbody")
getData()

function getData()

{
fetch('http://192.168.1.10:80/api/users/' )
.then(res => res.json())
.then((apidata)=> display(apidata))
.catch((error)=>{
    console.log(error)
})

}

var res="";

function display(display1)
{
    let tbl="";
     res=display1.result;
    
    for(let i=0;i< res.length ;i++)
    {
        
tbl+=`<tr>
<td> ${res[i].id}</td>
<td> ${res[i].name}</td>

<td><button type="button"  id="${res[i].id}"  onclick="cwlick(${i})" class="btn btn-primary">VIEW</button>
<button type="button" id="${res[i].id}"  onclick="create_data(${i})" class="btn btn-secondary">EDIT</button>
<button type="button" id="${res[i].id}"  onclick="erase(${i})" class="btn btn-Danger">DELETE</button></td>
</tr>
`
  
document.getElementById("tbody").innerHTML=tbl;
    }

}

//VIEW

function cwlick(id)
{

console.log(id)
    fetch(" http://192.168.1.10:80/api/users/", {"method":"GET"})
    .then((res)=> res.json())
    .then( (apidata) =>{
let res= apidata.result;  

var table=` <tr>
<td>`+res[id].id+`</td>
<td>`+res[id].name+`</td>

<td>`+res[id].address+`</td>

<td>`+res[id].phone+`</td>

<td>`+res[id].email+`</td>




    
</tr>`
tbody.innerHTML = table;
    } )

}


//EDIT

function create_data()
{
    // let value=id.data[0];
    // let i=id.data[0].id;
    // console.log(value);
    let form="";
    
            form +=" <form id='form_table'>";
            form +="<label for=''>Name &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='name' id='name' class='input_post_form' placeholder='' ><br><br>";

            form +="<label for=''>Email Id </label>";
            form +="<input type='text' name='email' id='' class='input_post_form' placeholder=''><br><br>";

            form +="<label for=''>Address&nbsp;</label>";
            form +="<input type='text' name='address' id='' class='input_post_form'><br><br>";

            form +="<label for=''>Phone &nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='phone' id='' class='input_post_form'><br><br>";

            form +="<label for=''>Gender&nbsp;&nbsp;</label>";
            form +="<input type='text' name='gender' id=''  class='input_post_form'><br><br>";

            form +="<label for=''>Country&nbsp;</label>";
            form +="<input type='text' name='country' id=''  class='input_post_form'><br><br>";

            form +="<label for=''>state   &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='state' id='' class='input_post_form'><br><br>";
            form +="<input type='submit' name='name' id='' value='submit' >"
            form +="</form>";
            
            document.getElementById("body").innerHTML=form;

            
            form_table.onsubmit = async (e) => {
                e.preventDefault();

                let response = await fetch(' http://192.168.1.10:80/api/auth/register', {
                method: 'POST',
                body: new FormData(form_table)
                });

                let result = await response.json();

                alert(result.message);
            };
}


//DELETE

function erase(id)
    {
         alert("Delete"+id);
         let key=res[id].id;

         fetch('http://192.168.1.10:80/api/user/delete/'+key,{ method: 'DELETE'})
         .then(() => { console. log('removed'); })
         .then((res) => res.json())
         .then((data) =>  console.log(data))
         .catch(function (err) {
            console.log(err);
        });
    }




    //UPDATE A PARTICULAR  ENTRY 

    function update(id){
        

        fetch( 'http://192.168.1.10:80/api/user/update/'+id, {method:'PUT'})
        .then(() => { console.log('update');})
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(function(err){
            console.log(err);
        });
        console.log("value updated successfully");
        alert("value added successfully");
    }