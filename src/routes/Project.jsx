import { readConfigFile } from "typescript";
import Carousel from 'react-bootstrap/Carousel';
import BackgroundCarouselImage from '../components/project/BackgroundCarouselImage';

const Project = () => {

 
    // 배열 형식 => ["프로젝트명", "이미지url","기간", "참여인원", "간단설명", ["기능1", "기능2", "기능3"], ["기술스택1", "기술스택2", "기술스택3"]];
    const myProject1 = [
        "다가치", 
        ["/img/my_project1_1.png", "/img/my_project1_2.png", "/img/my_project1_3.png", "/img/my_project1_4.png"], 
        "2023.08-2023.09", 
        "7명", 
        "취미생활을 공유하고 경험을 나누는 다가치!", 
        ["모임을 달력에 기록, 길 안내까지!", "친목을 도모하는 단체 채팅!", "내 마음대로 취향껏 고르는 레이아웃"], 
        ["spring","springBoot", "oracleDB", "Java","JavaScript", "git"],
        "https://www.notion.so/fa933c9f080f425cb5648860b8186dbd?pvs=4"
    ];
    const myProject1_github = 'https://github.com/newTypeo/dagachi';

    const myProject2 = [
        "리눅스 server_instance", 
        ["/img/lworker_properties.png", "/img/http_conf.png", "/img/server_cluster.png", "/img/start_sh.png"], 
        "2023.10-2023.12", 
        "1명", 
        "서버 관리와 로그 관리 도메인의 이해", 
        ["아파치 톰캣 다운로드, server.xml 작성", "로그 경로 설정, 도메인 설정", "백업 매니저를 사용한 클러스터링"], 
        ["LInux","centOS",  ],
        "https://www.notion.so/89393768cca34c5eaa481a4b54f1a36e?pvs=4"
    ];
    



    return (
        <div className="projectContainer" id="project">
            <h1 className="font_pilseung">Projects</h1>
            <Carousel className="mainCarousel" interval={null} as={'div'} indicatorLabels={[1, 2, 3]}>
                <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject1} myProject1_github = {myProject1_github} />
                    
                </Carousel.Item>
                 <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject2} myProject1_github={null} />
                    
                </Carousel.Item>
                {/* <Carousel.Item>
                    <BackgroundCarouselImage projectInfo = {myProject1} />
                    
                </Carousel.Item>  */}
            </Carousel>
        </div>
    )
}


export default Project;