import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Switch, useParams } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


//Beauty 상품 영역
function Beauty1() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/beauty1.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/beauty1_1.jpg'></img>
          <h3>딘토</h3>
          <p>블러피니쉬 블러셔 4종</p>
        </div>
        <div className='product1'>
            <img src='./img/beauty1_2.jpg'></img>
            <h3>롬앤</h3>
            <p>한올 픽스 마스카라 2type</p>
        </div>
        <div className='product1'>
            <img src='./img/beauty1_3.jpg'></img>
            <h3>네이밍</h3>
            <p>컬러풀 아이 팔레트 6g </p>
        </div>
      </div>
    </div>
  )
}
function Beauty2() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/beauty2.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/beauty2_1.jpg'></img>
          <h3>리즈다</h3>
          <p>멜로 무드 핏 치크블러셔</p>
        </div>
        <div className='product1'>
          <img src='./img/beauty2_2.jpg'></img>
          <h3>하킷</h3>
          <p>레이어 슬림 브로우</p>
        </div>
        <div className='product1'>
          <img src='./img/beauty2_3.jpg'></img>
          <h3>에뛰드</h3>
          <p>플레이 컬러 아이즈 미니 쥬얼리</p>
        </div>
      </div>
    </div>
  )
}
function Beauty3() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/beauty3.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/beauty3_1.jpg'></img>
          <h3>에뛰드</h3>
          <p>더블래스팅 쿠션 매트</p>
        </div>
        <div className='product1'>
          <img src='./img/beauty3_2.jpg'></img>
          <h3>데이지크</h3>
          <p>블렌딩 무드 치크</p>
        </div>
        <div className='product1'>
          <img src='./img/beauty3_3.jpg'></img>
          <h3>하킷</h3>
          <p>플래시 매트 립</p>
        </div>
      </div>
    </div>
  )
}
function Beauty4() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/beauty4.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/beauty4_1.jpg'></img>
          <h3>투에이엔</h3>
          <p>듀얼치크 01 코튼캔디바이올렛</p>
        </div>
        <div className='product1'>
          <img src='./img/beauty4_2.jpg'></img>
          <h3>삐아</h3>
          <p>레디 투 웨어 네일 컬러</p>
        </div>
        <div className='product1'>
          <img src='./img/beauty4_3.jpg'></img>
          <h3>이든미네랄</h3>
          <p>퍼펙트 아이브로우 젤</p>
        </div>
      </div>
    </div>
  )
}
//Beauty 상품 영역 종료
//Casual 상품 영역 시작
function Casual1() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/casual1.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/CASUAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/casual1_top.jpg'></img>
          <h3>아수라</h3>
          <p>레브 홀터 니트 (IVORY)</p>
        </div>
        <div className='product1'>
          <img src='./img/casual1_buttom.jpg'></img>
          <h3>게이트리스</h3>
          <p>다트 진</p>
        </div>
        <div className='product1'>
          <img src='./img/casual1_bag.jpg'></img>
          <h3>딜라잇풀</h3>
          <p>Dolphin twins beach bag - White</p>
        </div>
      </div>
    </div>
  )
}
function Casual2() {
  return (
    <div className='content'>
      <div className='conmain' >
        <img src='./img/casual2.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/CASUAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/casual2_top.jpg'></img>
          <h3>엘이이와이</h3>
          <p>Logo Strappy Top Black</p>
        </div>
        <div className='product1'>
          <img src='./img/casual2_buttom.jpg'></img>
          <h3>엘이이와이</h3>
          <p>Scotch Logo Track Pants Blue</p>
        </div>
        <div className='product1'>
          <img src='./img/casual2_bag.jpg'></img>
          <h3>일리고</h3>
          <p>SIGNATURE BAG_WHITE</p>
        </div>
      </div>
    </div>
  )
}
function Casual3() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/casual3.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/CASUAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/casual3_top.jpg'></img>
          <h3>쎄쎄쎄</h3>
          <p>물나염 프린팅 스판컷팅 티셔츠</p>
        </div>
        <div className='product1'>
          <img src='./img/casual3_buttom.jpg'></img>
          <h3>엘이이와이</h3>
          <p>Cargo Short Pants Khaki</p>
        </div>
        <div className='product1'>
          <img src='./img/casual3_bag.jpg'></img>
          <h3>딜라잇풀</h3>
          <p>Moon bag Large - Cream</p>
        </div>
      </div>
    </div>
  )
}
function Casual4() {
  return (
    <div className='content'>
      <div className='conmain' >
        <img src='./img/casual4.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/CASUAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/casual4_top.jpg'></img>
          <h3>이에스씨 스튜디오</h3>
          <p>stripe short sleeve polor shirt (black)</p>
        </div>
        <div className='product1'>
          <img src='./img/casual4_bag.jpg'></img>
          <h3>브라운브레스</h3>
          <p>COMBINE SLING BAG - GREY</p>
        </div>
        <div className='product1'>
          <img src='./img/casual4_sh.jpg'></img>
          <h3>미즈노</h3>
          <p>WAVE RIDER 10(PREMIUM)</p>
        </div>
      </div>
    </div>
  )
}
//Casual 상품 영역 종료
//Street 상품 영역 시작
function Street1() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/street1.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/STREET'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/street1_top.jpg'></img>
          <h3>아이토브</h3>
          <p>Stripe halter neck PK</p>
        </div>
        <div className='product1'>
          <img src='./img/street1_buttom.jpg'></img>
          <h3>배드블러드</h3>
          <p>댄스 클래스 헤비웨이트 와이드 2 way 조거 - 화이트</p>
        </div>
        <div className='product1'>
          <img src='./img/street1_bag.png'></img>
          <h3>나이스이온즈</h3>
          <p>NCAO Logo Backpack</p>
        </div>
      </div>
    </div>
  )
}
function Street2() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/street2.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/STREET'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/street2_top.jpg'></img>
          <h3>페노메논시퍼</h3>
          <p>PRINT SHORT SELEEVE CROP</p>
        </div>
        <div className='product1'>
          <img src='./img/street2_buttom.jpg'></img>
          <h3>시그레이트</h3>
          <p>체인 슬릿 롱 스커트</p>
        </div>
        <div className='product1'>
          <img src='./img/street2_bag.jpg'></img>
          <h3>이콤마이</h3>
          <p>WAVE BAG (BLACK)</p>
        </div>
      </div>
    </div>
  )
}
function Street3() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/street3.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/STREET'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/street3_top.jpg'></img>
          <h3>스튜디오 칸틴</h3>
          <p>메탈탭 슬릿 크롭 크루넥 니트</p>
        </div>
        <div className='product1'>
          <img src='./img/street3_buttom.jpg'></img>
          <h3>마뗑킴</h3>
          <p>MATIN KIM LOGO PRINT SHORTS</p>
        </div>
        <div className='product1'>
          <img src='./img/street3_bag.jpg'></img>
          <h3>마뗑킴</h3>
          <p>BUCKLE BAG IN SKY</p>
        </div>
      </div>
    </div>
  )
}
function Street4() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/street4.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/STREET'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/street4_top.jpg'></img>
          <h3>오드원아웃</h3>
          <p>Flower crop corset_White</p>
        </div>
        <div className='product1'>
          <img src='./img/street4_buttom.jpg'></img>
          <h3>참스</h3>
          <p>SEMI BOOTCUT WIDE PINTUCK</p>
        </div>
        <div className='product1'>
          <img src='./img/street4_bag.jpg'></img>
          <h3>마지셔우드</h3>
          <p>HOBO MINI_cream beige crinkle</p>
        </div>
      </div>
    </div>
  )
}
//Street 상품 영역 종료
//Formal 상품 영역 시작
function Formal1() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/formal1.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/FORMAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/formal1_top.jpg'></img>
          <h3>위메농</h3>
          <p>Joshep vestish top</p>
        </div>
        <div className='product1'>
          <img src='./img/formal1_buttom.jpg'></img>
          <h3>하드코어 해피니스</h3>
          <p>MAXI LONG SKIRT</p>
        </div>
        <div className='product1'>
          <img src='./img/formal1_bag.jpg'></img>
          <h3>폴스부띠끄</h3>
          <p>VERE(베르)_PM2LSD7VRTBR</p>
        </div>
      </div>
    </div>
  )
}
function Formal2() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/formal2.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/FORMAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/formal2_top.jpg'></img>
          <h3>인사일런스 우먼</h3>
          <p>링클 랩 셔츠 WHITE</p>
        </div>
        <div className='product1'>
          <img src='./img/formal2_buttom.jpg'></img>
          <h3>리이</h3>
          <p>PINTUCKED PLEATED WIDE LEG </p>
        </div>
        <div className='product1'>
          <img src='./img/formal2_bag.jpg'></img>
          <h3>유르트</h3>
          <p>Beoseon Canvas</p>
        </div>
      </div>
    </div>
  )
}
function Formal3() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/formal3.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/FORMAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/formal3_buttom.jpg'></img>
          <h3>무신사 스탠다드</h3>
          <p>우먼즈 와이드 버뮤다 하프 슬랙스</p>
        </div>
        <div className='product1'>
          <img src='./img/formal3_bag.jpg'></img>
          <h3>덱케</h3>
          <p>보우 미니크로스 DE2C3ABG046WBK</p>
        </div>
        <div className='product1'>
          <img src='./img/formal3_sh.jpg'></img>
          <h3>닥터마틴</h3>
          <p>1461 3홀 모노 블랙 14345001</p>
        </div>
      </div>
    </div>
  )
}
function Formal4() {
  return (
    <div className='content'>
      <div className='conmain'>
        <img src='./img/formal4.jpg'></img>
      </div>
      <p className='pix'>모델 착용 상품</p>
      <NavLink exact to='/FORMAL'><img className='btn' src='/img/row.png'></img></NavLink>
      <div className='product'>
        <div className='product1'>
          <img src='./img/formal4_top.jpg'></img>
          <h3>애쉬아워</h3>
          <p>Linen Punched Collar Knit Black</p>
        </div>
        <div className='product1'>
          <img src='./img/formal4_buttom.jpg'></img>
          <h3>시그니처</h3>
          <p>썸머 더블턱 와이드 슬랙스</p>
        </div>
        <div className='product1'>
          <img src='./img/formal4_bag.jpg'></img>
          <h3>프록시엘</h3>
          <p>recycled nylon wide open briefcase</p>
        </div>
      </div>
    </div>
  )
}
//Formal 상품 영역 종료
function BEAUTY() {
  return (
    <div className='main'>
      <NavLink to='/Beauty1'><img src='./img/beauty1.jpg'></img></NavLink>
      <NavLink to='/Beauty2'><img src='./img/beauty2.jpg'></img></NavLink>
      <NavLink to='/Beauty3'><img src='./img/beauty3.jpg'></img></NavLink>
      <NavLink to='/Beauty4'><img src='./img/beauty4.jpg'></img></NavLink>
    </div>
  )
}
function CASUAL() {
  return (
    <div className='main'>
        <NavLink to='/Casual1'><img src='./img/casual1.jpg'></img></NavLink>
        <NavLink to='/Casual2'><img src='./img/casual2.jpg'></img></NavLink>
        <NavLink to='/Casual3'><img src='./img/casual3.jpg'></img></NavLink>
        <NavLink to='/Casual4'><img src='./img/casual4.jpg'></img></NavLink>
    </div>
  )
}
function STREET() {
  return (
    <div className='main'>
      <NavLink to='/Street1'><img src='./img/street1.jpg'></img></NavLink>
      <NavLink to='/Street2'><img src='./img/street2.jpg'></img></NavLink>
      <NavLink to='/Street3'><img src='./img/street3.jpg'></img></NavLink>
      <NavLink to='/Street4'><img src='./img/street4.jpg'></img></NavLink>
    </div>
  )
}
function FORMAL() {
  return (
    <div className='main'>
      <NavLink to='/Formal1'><img src='./img/formal1.jpg'></img></NavLink>
      <NavLink to='/Formal2'><img src='./img/formal2.jpg'></img></NavLink>
      <NavLink to='/Formal3'><img src='./img/formal3.jpg'></img></NavLink>
      <NavLink to='/Formal4'><img src='./img/formal4.jpg'></img></NavLink>
    </div>
  )
}
function App() {
  return (
    <div className='maintext'>
      <h2>LOOK BOOK</h2>
      <ul>
        <li><NavLink exact to='/'>BEAUTY</NavLink></li>
        <li><NavLink to='/CASUAL'>CASUAL</NavLink></li>
        <li><NavLink to='/STREET'>STREET</NavLink></li>
        <li><NavLink to='/FORMAL'>FORMAL</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><BEAUTY></BEAUTY></Route> 
        <Route path='/CASUAL'><CASUAL></CASUAL></Route>
        <Route path='/STREET'><STREET></STREET></Route>
        <Route path='/FORMAL'><FORMAL></FORMAL></Route>
        <Route path='/Beauty1'><Beauty1></Beauty1></Route>
        <Route path='/Beauty2'><Beauty2></Beauty2></Route>
        <Route path='/Beauty3'><Beauty3></Beauty3></Route>
        <Route path='/Beauty4'><Beauty4></Beauty4></Route>
        <Route path='/Casual1'><Casual1></Casual1></Route>
        <Route path='/Casual2'><Casual2></Casual2></Route>
        <Route path='/Casual3'><Casual3></Casual3></Route>
        <Route path='/Casual4'><Casual4></Casual4></Route>
        <Route path='/Street1'><Street1></Street1></Route>
        <Route path='/Street2'><Street2></Street2></Route>
        <Route path='/Street3'><Street3></Street3></Route>
        <Route path='/Street4'><Street4></Street4></Route>
        <Route path='/Formal1'><Formal1></Formal1></Route>
        <Route path='/Formal2'><Formal2></Formal2></Route>
        <Route path='/Formal3'><Formal3></Formal3></Route>
        <Route path='/Formal4'><Formal4></Formal4></Route>
        <Route path='/'>페이지를 찾을 수 없습니다.</Route>
      </Switch>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
