import React from 'react';
import Image from "../assets/google-logo.png"
import Search from "../components/Search";
import Header from '../components/Header';

function Home() {

    return (
        <>
            <div className="home_header">
                <Header />
            </div>
           
        <div className='home flex flex-col items-center justify-center mt-20 '>
            <div className="home_body">
                <img
                    src={Image}
                    alt="main img" className="w-72 m-auto mb-10 "/>
                    
                <div className="home_inputContainer">
                    {/*<Search/>*/}
                    <Search />
                </div>
            </div>
        </div>
        </>
    );

}

export default Home;
