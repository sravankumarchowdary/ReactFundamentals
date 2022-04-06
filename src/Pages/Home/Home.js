import React, { useState } from 'react';
import HomeCmp from '../../Components/HomeCmp/HomeCmp';

const Home = () => {
    // var title = "Home page title come here";

    var list = [
        { id: 12, pname: 'sdad', cost: 12 },
        { id: 34, pname: 'sdgfhj', cost: 12 },
        { id: 154, pname: 'ijhgfd', cost: 12 },
        { id: 562, pname: 'dsd5bv78', cost: 12 }
    ]


    const [title, setTitle] = useState("Default");
    const [isloading, setIsloading] = useState(false);
    const [user, setUser] = useState({ name: '', location: '' });
    const [total, setTotal] = useState(0);
    const [products, setproducts] = useState([]);

    const [childData, setChildData] = useState("");


    const UpdateTitle = () => {
        console.log("--------");
        // title = "update from function"
        // setTitle(title + "update from function");
        const newProduct = { id: 989, pname: 'demo', cost: 8675 }

        setTitle("update from function");
        setIsloading(!isloading);
        setUser({ ...user, name: 'john' });
        setTotal(100)
        // const copyList = [...list, newProduct]
        const copyList2 = [...list]
        copyList2.push(newProduct);
        setproducts(copyList2);

    }

    const hitButton = (val) => {
        console.log("----------------Parent function", val);
        setChildData(val);
    }

    const getProductId = (id) => {
        console.log("======", id);
        const oldData = products.filter(item => item.id !== id);
        setproducts(oldData);
    }

    // console.log(user);

    return (
        <HomeCmp
            title={title}
            isloading={isloading}
            user={user}
            total={total}
            products={products}
            childData={childData}

            UpdateTitle={UpdateTitle}
            hitButton={hitButton}
            getProductId={getProductId}
        />
    )
}

export default Home;