import './App.css';
import adImage from './images/adImg.png'
import rightAdImg from './images/right__ad.jpeg'
import {CgProfile} from 'react-icons/cg';
import Header from './component/Header';

function App() {
  return (
    <>
      {/* 전체 좌우 공백 */}
      <div className='container'>
        <Header />
        
        <div className='layout-container'>
          <div className='layout-left__column'>
            <div className='left__ad'>
              <img className='left__ad__img' src={adImage} alt="adImg" />
            </div>
            {/* 뉴스 */}
            <div className='left__news'>
              <div className='news__header'>
                <a href="/">뉴스스탠드</a>
                <a href="/">+ 언론사편집</a>
                <a href="/">/ 엔터</a>
                <a href="/">/ 스포츠</a>
                <a href="/">/ 경제</a>
              </div>
              <div className='news__haeder__preview'>

              </div>
            </div>
            {/* 뉴스 끝 */}
          </div>

          <div className='layout-right__column'>
            {/* 로그인 창 */}
            <div className='right__login'>
              <div className='login__top'>
                <div className='login__profile'><CgProfile /></div>
                <div className='login__id'>
                  
                </div>
                <button>로그아웃 [-</button>
              </div>
              <div></div>
            </div>
            {/* 로그인 창 */}

            <div className='right__ad'>
              <img className='right__ad__img' src={rightAdImg} alt="right__ad" />
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
