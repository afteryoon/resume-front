const MyResume = () => {

    const resumeInfo={
        myName:{
            korName:"정상윤",
            engName:"SangYoon-Jung"
        },
        miniInfo:{
            birthDay:"1996-03-05",
            address:"서울시 강동구",
            email:"khsso10649@gmail.com",
            phone:"010-2358-5582"
        }
    }

    const imgSrc="/img/jsyPhoto.jpg";

    return(

      

        <div className="resmecontentTopInfo resmecontentTopInfoVa">

            <div>
                <img src={imgSrc}/>
            </div>

            <div className="resumeName font_pilseung">
                    <h1>{resumeInfo.myName.korName}</h1>
                    <h3>{resumeInfo.myName.engName}</h3>
            </div>

            
            <div className="miniInfo font_eastar">

                <div style={{textAlign:"left", marginLeft:"82px", marginTop:"30px"}}>
                    <h3>{resumeInfo.miniInfo.birthDay}</h3>
                    <h3>{resumeInfo.miniInfo.address}</h3>
                    <h3>{resumeInfo.miniInfo.email}</h3>
                    <h3>{resumeInfo.miniInfo.phone}</h3>
                </div>
                   
            </div>
           
        </div>


    )
}
export default MyResume;