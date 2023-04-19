function Role(props){

    console.log("Role List-->",props.RoleList);

    return(

          <div>
            <table border={2}>
                <h1>RoleList</h1>
                  <tr>
                     <td>Id</td>
                     <td>Name</td>
                     <td>Role</td>
                     
                 </tr>

                
              {props.RoleList.map((role,i) =>
              (
              <tr>
                <td>{role.Id}</td>
                
                <td>{role.Name}</td>
                <td>{role.Role}</td>
    
                   </tr>
            )
          )}



          </table>
         </div>







        );


    }

    export default Role;