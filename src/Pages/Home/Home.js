import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import HomeCmp from '../../Components/HomeCmp/HomeCmp';

const Home = () => {
    // var title = "Home page title come here";

    // document.title = "Home - Fresh Data";

    // console.log(document.title);



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
    const [count, setCount] = useState(0);

    const [childData, setChildData] = useState("");
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    // DIDMOUNT
    useEffect(() => {
        document.title = "Home - Fresh Data";
        console.log(document.title);
        getUsersList();
        // WILL UNMOUNT
        // return () => {
        //   console.log("===========will unmount");
        // }
    }, []);

    // DID-UPDATE
    useEffect(() => {
        document.title = "updated title with " + count;
        setCount(preCount => preCount + 1);
        console.log(document.title, count);
    }, [products])

    // WILL UNMOUNT
    useEffect(() => {
        return () => {
            console.log("===========will unmount");
        }
    }, [])


    const getUsersList = () => {
        Axios.get('https://reqres.in/api/users?page=2', {
            headers: {
                "content-type": 'application/json',
                'Autherization': 'sjdghjagsdgsj'
            }
        }).then(resp => {
            console.log(resp.data.data);
            setUsers(resp.data.data)
        }).catch(err => {
            console.log("error", err);
        })
    }



    const UpdateTitle = () => {
        // console.log("--------");
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

    const navigateToNewPage = (val) => {
        console.log("======asjbdvasbnd", val);
        navigate('/user/'+val)
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
            users={users}

            UpdateTitle={UpdateTitle}
            hitButton={hitButton}
            getProductId={getProductId}
            navigateToNewPage={navigateToNewPage}
        />
    )
}

export default Home;