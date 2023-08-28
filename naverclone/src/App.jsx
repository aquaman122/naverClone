import './App.css';

function App() {
  return (
    <>
      {/* 전체 좌우 공백 */}
      <div className='container'>
        {/* div 3개 container */}
        <div className='header'>
          {/* 제일 윗줄 icons */}
          <div className='header-icons'>
            <div className='icon-boxes'>
              <div className='icons'>menu</div>
              <div className='icons'>NPay</div>
            </div>
            <div className='icon-boxes'>
              <div className='icons'>comment</div>
              <div className='icons'>alarm</div>
            </div>
          </div>
          {/* 검색창 */}
          <div className='header-search'>
            <div className='search__container'>
              <h1>
                <a>icon</a>
              </h1>
              <form>
                <fieldset>
                  <input type="text" className='header-search__input' placeholder='검색어를 입력해 주세요.'/>
                  <button className='header-search__button'>input equipment</button>
                  <button className='header-search__button'>dot</button>
                  <button className='header-search__button'>search</button>
                </fieldset>
              </form>
            </div>
          </div>
          {/* 아이콘들 */}
          <div className='header-menu'>
            <div className='menu__container'>

              <div>
                <div className='menu__icons'>메일</div>
                <div className='menu__name'>메일</div>
              </div>
              <div>
                <div className='menu__icons'>카페</div>
                <div className='menu__name'>카페</div>
              </div>
              <div>
                <div className='menu__icons'>블로그</div>
                <div className='menu__name'>블로그</div>
              </div>
              <div>
                <div className='menu__icons'>쇼핑</div>
                <div className='menu__name'>쇼핑</div>
              </div>
              <div>
                <div className='menu__icons'>뉴스</div>
                <div className='menu__name'>뉴스</div>
              </div>
              <div>
                <div className='menu__icons'>증권</div>
                <div className='menu__name'>증권</div>
              </div>
              <div>
                <div className='menu__icons'>부동산</div>
                <div className='menu__name'>부동산</div>
              </div>
              <div>
                <div className='menu__icons'>지도</div>
                <div className='menu__name'>지도</div>
              </div>
              <div>
                <div className='menu__icons'>웹툰</div>
                <div className='menu__name'>웹툰</div>
              </div>
              
            </div>
          </div>
          {/* 아이콘 끝 */}
        </div>
        
        <div className='layout-container'>
          <div className='layout-left__column'>
            <div className='left__ad'>
              <img src="" alt="" />
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
            <div className='right__login'>
              
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
