

const Features = () => {
  return (
    <div className="features" id="myStory">
        <h2 className="font_pilseung" style={{marginTop:"20px", fontSize:"45px"}}>MyStory</h2>
    <   div class="chat">
            <div class="message received">
                <span class="content">당신을 소개해주세요 😊</span>
            </div>
            <div class="message sent">
                <span class="content">
                <p>
                    안녕하세요! 반갑습니다! 😊
                </p>
                <p>
                    프로그래밍을 좋아하는 신입 개발자 정상윤입니다!
                </p>
                </span>
                
            </div>
            <div class="message received">
                <span class="content">해당 분야의 본인의 장점 무엇인가요? 😊</span>
            </div>
            <div class="message sent">
                <span class="content">
                    <p>
                    저의 장점은 뛰어난 소통 능력과 책임감입니다!
                    </p>
                    <p>
                     학원 수업 중 헷갈리는 부분은 넘어가지 않고, 질문을 정리하여 강사님께 올바른 질문을 하는 법을 배웠습니다.
                    </p>
                    <p>
                     이러한 경험은 프로그래밍을 공부, 팀원과의 소통, 주어진 시간 내에 프로젝트를 완성하는데 있어 큰 도움이 되었습니다.  
                    </p>
                </span>
            </div>
            <div class="message received">
                <span class="content">최근 IT 기술 트렌드는 무엇이 있나요? 😊</span>
            </div>
            <div class="message sent">
                <span class="content">
                    <p>
                        온프라미스 환경에서 AWS로의 마이그레이션과 
                        쿠버네티스를 사용한 컨테이너화는 방향성이 될 것이라 생각했습니다. 
                    </p>
                    <p>
                        지금도 자동 통합과 자동 배포 환경에서 개발을 진행하는 곳이 늘어나고 있으며, 빈도 높은 EKS 환경에서의 버전 업데이트로 인해 개발자들은 코드 관리와 넓은 범위의 이해와 공부에 노력하고 있습니다. 저도 그에 맞춰 AWS 용어와 개념을 공부를 병행하며 먼저 리눅스 환경을 공부하고, 네트워크의 이론적인 공부를 정리하였습니다.
                    </p>
                    <p>
                       이후엔 업무에 익숙해진 다음 AWS 와 관련된 자격증을 공부를 병행할 계획입니다!
                    </p>
                </span>
            </div>

            <div class="message received">
                <span class="content">취업 후 본인의 목표에 대해 이야기 해주세요! 😊</span>
            </div>
            <div class="message sent">
                <span class="content">
                    <p>
                        프로젝트를 마치고 "효율적인 코딩"의 중요성을 깨달았습니다!
                    
                    </p>
                   
                    <p>
                        리펙토링을 할 때 핸들러 하나에 여러 트래픽을 확인하고 줄인 경험이 있습니다.
                         이는 자연스럽게 효율적인 코드를 짜고 싶단 단기적인 목표를 갖게 되었습니다.
                    </p>
                    <p>
                        더 나아가 API를 제공받는 입장에서 누군가에게 인터페이스 혹은 데이터를 줄 수 있는 API를 개발하고,
                        WEB이란 커다란 흐름을 알고 이에 맞춰 AWS, DevOps , DB 등의 공부도 병행하는 개발자를 목표로 잡았습니다.
                    </p>
                </span>
            </div>
        
        </div>
    </div>
  );
}

export default Features;