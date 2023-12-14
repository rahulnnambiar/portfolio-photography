import React from 'react';
import Nav from '../components/navigation';
import Footer from '../components/footer';

const Home = props =>{ 
    
    return(
        <>  

            <div className='main-div'>
                <Nav/>
                <h1>Body</h1>
                <Footer/>
            </div>
            
        </>
    )
}
export default Home