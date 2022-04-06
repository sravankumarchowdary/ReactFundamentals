import React from 'react'

const HomeCmp = (props) => {
    // console.log(props);
    const sendDataToParent = () => {
        let txt = "coming from child";
        console.log("----------------Child function");
        props.hitButton("coming from child");
    }

    // const getById = (id) => {
    //     props.getProductId(id)
    // }
    
    return (
        <div>
            Home page
            <br />
            <button onClick={sendDataToParent}>Send Data to parent</button>
            <h1>{props.childData}</h1>
            <br />
            {props.isloading ? 'button is clicked' : 'about to clicked'}
            <h1>{props.title}</h1>
            <h1>{props.user.name + props.total}</h1>
            <button onClick={props.UpdateTitle}>update</button>
            {/* <h1>{list[1].pname}</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props?.products?.length > 0 ? props?.products?.map((item, index) => (<tr key={index}>
                        <td>{item?.id}</td>
                        <td>{item?.pname}</td>
                        <td>{item?.cost}</td>
                        <td><button onClick={() => props.getProductId(item.id)}>Delete</button></td>
                        {/* <td><button onClick={() => getById("sadasd")}>Delete</button></td> */}
                    </tr>)) : <tr><td>'No data'</td></tr>}
                </tbody>
            </table>
            {/* {list.map((item, index) =>(<h6 key={index}>{index}. ss</h6>))} */}

        </div>
    )
}

export default HomeCmp