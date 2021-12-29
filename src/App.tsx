import React, {useCallback, useEffect, useRef, useState} from 'react';
import classes from './App.module.css';
import {profileAPI} from "./api/Api";
import Main from "./components/main/main";
import {UserType} from "./types/usersType";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";

const App: React.FC = () => {

    const [users, setUsers] = useState<UserType[]>([])
    const [usersPage, setUsersPage] = useState(1)
    const [userLimit] = useState(4)
    const [searchValue, setSearchValue] = useState<string>("");
    const [sort, setSort] = useState<boolean>(false)
    const [posts,setPosts]=useState ([])
    const searchRef: React.MutableRefObject<NodeJS.Timeout | null | undefined> = useRef()


    const getPosts = useCallback((id)=>{
        profileAPI.getUserPosts(id).then(res => setPosts(res.data))
    },[users,sort])
    const clearPosts =useCallback(()=>{
        return( setPosts([]))
    },[])

    const handleNext = useCallback(() => {
        setUsersPage(usersPage + 1)
    }, [usersPage, userLimit, searchValue, sort,posts])
    const handlePrev = useCallback(() => {
        if (usersPage > 1) {
            setUsersPage(usersPage - 1)
        }
    }, [usersPage, userLimit, searchValue, sort])
    const changeTextHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }, [usersPage, userLimit, searchValue, sort])

    useEffect(() => {
        clearTimeout( searchRef.current as NodeJS.Timeout);
        searchRef.current = setTimeout(() => {
            profileAPI.getAllUsers(usersPage, userLimit, searchValue, sort).then(res => setUsers(res.data))
        }, 500);
    }, [usersPage, userLimit, searchValue, sort]);

    return (
        <div  className={classes.app}>
            <Header searchValue={searchValue} changeHandler={changeTextHandler}/>
             <Main clearPosts={clearPosts} getPosts={getPosts} posts={posts} users={users} sortObj={{sort, setSort}}/>
            <Footer handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    );
}

export default App;
