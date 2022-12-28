import React, { useEffect, useState } from "react";
import Listitem from "./Listitem/Listitem";
import './Product.css';
import Loader from "../UI/Loader";
import axios from "axios";


function Products() {
    const [items, setitems] = useState([])
    const [loader, setloader] = useState(true);
  
    useEffect(() => {
        // fetch(`https://react-guide-2023-default-rtdb.firebaseio.com/items.json`)
        // .then(response=>response.json())
        // .then(data=>{
        //     console.log(data);
        // })
        // .catch(error=>{
        //     console.log(error);
        // })
        // ;
        //  axios.get(`https://react-guide-2023-default-rtdb.firebaseio.com/items.json`)
        // .then(response=>{
        //    const data=response.data;
        //    const transformdata=data.map((item,index)=>{
        //     return {
        //         ...item,
        //         index
        //     }
        //    })
        //    setitems(transformdata)
        // })
        async function fetchitems() {
            try {
                const response = await axios.get(`https://industrial-training-7e456-default-rtdb.firebaseio.com/items.json`)
                const data = response.data;
                const transformdata = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                
                setitems(transformdata)

            } catch (error) {
                console.log("error", error)
            }
            finally{
                setloader(false);
            }

        }
        fetchitems();
    }, [])
    
    return (
        <>
        
            <div className="products">
                {
                    items.map(item => {
                        return (
                            <Listitem  key={item.id} data={item} />
                        )
                    })
                }

            </div>
            {loader&&<Loader/>}

        </>
    )
}
export default Products;