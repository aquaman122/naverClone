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
          <div>
            <div>

              <div>
                <div>메일 아이콘</div>
                <div>메일</div>
              </div>
              <div>
                <div>카페 아이콘</div>
                <div>카페</div>
              </div>
              <div>
                <div>블로그 아이콘</div>
                <div>블로그</div>
              </div>
              <div>
                <div>쇼핑 아이콘</div>
                <div>쇼핑</div>
              </div>
              <div>
                <div>뉴스 아이콘</div>
                <div>뉴스</div>
              </div>
              <div>
                <div>증권 아이콘</div>
                <div>증권</div>
              </div>
              <div>
                <div>부동산 아이콘</div>
                <div>부동산</div>
              </div>
              <div>
                <div>지도 아이콘</div>
                <div>지도</div>
              </div>
              <div>
                <div>웹툰 아이콘</div>
                <div>웹툰</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
