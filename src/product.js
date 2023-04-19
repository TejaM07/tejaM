function Product(props){

    console.log("Product List-->",props.ProductList);

    return(

          <div>
            <table border={2}>
                <h1>Product List</h1>
                  <tr>
                     <td>Id</td>
                     <td>Name</td>
                     
                 </tr>

                
              {props.ProductList.map((product,i) =>
              (
              <tr>
                <td>{product.Id}</td>
                
                <td>{product.Name}</td>
    
                   </tr>
            )
          )}



          </table>
         </div>







        );


    }

    export default Product;