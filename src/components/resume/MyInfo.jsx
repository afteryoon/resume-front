import Button from 'react-bootstrap/Button';
const MyInfo = ()=> {

    const academic  ={
        highSchool:{
            scName:"선사고등학교",
            period:"2012.03-2015.02",
        },
        university:{
            scName:"삼육대학교",
            department:"생활체육학과",
            period:"2015.03-2021.02",
        },
        academy:{
            scName:"KH 정보교육원",
            department:"자바(JAVA) 기반 개발자 양성과정",
            period:"2023.02-2023.09",
        }
    }
    const url='https://leaf-vault-03a.notion.site/4f31ad53553f4216b52c8d9ddb3a58f3?pvs=4';
    const notion='https://leaf-vault-03a.notion.site/Technology-e02bae21e66e4cb7a8b159aee264d3d4?pvs=4';
    const git='https://github.com/newTypeo/dagachi';
    const urlClick=(e)=>{
        const url=e.target.dataset.to;
        window.open(url);
    }


    return(
        <div className="myInfoContainer">
            
            <div className="myInfoContents">
                
                 <div>
                    <h4>{academic.academy.scName}</h4>
                    <h4>{academic.academy.department}</h4>
                    <h4>{academic.academy.period}</h4>
                    
                </div>
                
                <div>
                    <h4>{academic.university.scName}</h4>
                    <h4>{academic.university.department}</h4>
                    <h4>{academic.university.period}</h4>
                </div>
                <div>
                    <h4>강사가 인정한 강철체력, 긍정적인 마인드</h4>
                    <h4>교육기간 단 한번의 지각도 허용치 않은 성실성</h4>
                    <h4>사교성과 커뮤니케이션 능력의 소유자</h4>
                    <h4>끈기와 책임감을 갖춘 인재</h4>
                    <br/>
                </div>
                <div>
                    <h4>
                        책임감있는 신입 개발자 정상윤입니다.
                    </h4>
                    <h4>
                        성실함과 인성을 바탕으로 함께하고 싶습니다.
                    </h4>
                    <h4>
                    <Button variant="outline-primary" onClick={urlClick} data-to={url}>매일 백준풀기</Button>{' '}
                    </h4>
                    <h4>
                    <Button variant="outline-primary" onClick={urlClick} data-to={notion}>notion 바로가기</Button>{' '}
                    </h4>
                    <h4>
                    <Button variant="outline-primary" onClick={urlClick} data-to={git}>git 바로가기</Button>{' '}
                    </h4>
                </div>
              
            </div>

        </div>
    )
}

export default MyInfo;