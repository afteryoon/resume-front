import IndexMyInfo from "../components/IndexMyInfo";
import MyselfComponent from "../components/MyselfComponent";
import Features from "../components/home/Features";


const Home = () => {

    return(
        <div >

            <div className="homeContainer">
                <IndexMyInfo />
                <MyselfComponent />
            </div>

           <div>
                <Features />
           </div>

            
            

        </div>
    )
}

export default Home;