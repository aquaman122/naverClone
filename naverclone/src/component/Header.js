import './Header.css';
import {IoIosCafe} from 'react-icons/io';
import {BiSolidBellRing, BiDotsHorizontalRounded, BiNews, BiShoppingBag, BiLogoGmail, BiLogoBlogger} from 'react-icons/bi';
import {RiFundsBoxFill} from 'react-icons/ri';
import {BsMap, BsFillHouseAddFill} from 'react-icons/bs';
import {SiNaver, SiWebtoon} from 'react-icons/si';
import {RxHamburgerMenu} from 'react-icons/rx';
import {FaRegCommentDots, FaApplePay} from 'react-icons/fa';

function onMouseOver(event) {
  
}

export default function Header() {

  return (
    <>
      <div className='header'>
      {/* 제일 윗줄 icons */}
      <div className='header-icons'>
        <div className='icon-boxes'>
          <div onMouseOver={onMouseOver} className='icons1'><RxHamburgerMenu size={30} /></div>
          <div className='icons1'><FaApplePay size={30} /></div>
        </div>
        <div className='icon-boxes'>
          <div className='icons2'><FaRegCommentDots size={30} /></div>
          <div className='icons2'><BiSolidBellRing size={30} /></div>
        </div>
      </div>
      {/* 검색창 */}
      <div className='header-search'>
        <div className='search__container'>
          <div className='header-search__icon'><SiNaver size={26} color="#02C75A" /></div>
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
            <div className='menu__icons'><BiLogoGmail size={32} color="#02C75A" /></div>
            <div className='menu__name'>메일</div>
          </div>
          <div>
            <div className='menu__icons'><IoIosCafe size={32} color="#02C75A" /></div>
            <div className='menu__name'>카페</div>
          </div>
          <div>
            <div className='menu__icons'><BiLogoBlogger size={32} color="#02C75A" /></div>
            <div className='menu__name'>블로그</div>
          </div>
          <div>
            <div className='menu__icons'><BiShoppingBag size={32} color="#02C75A" /></div>
            <div className='menu__name'>쇼핑</div>
          </div>
          <div>
            <div className='menu__icons'><BiNews size={32} color="#02C75A" /></div>
            <div className='menu__name'>뉴스</div>
          </div>
          <div>
            <div className='menu__icons'><RiFundsBoxFill size={32} color="#02C75A" /></div>
            <div className='menu__name'>증권</div>
          </div>
          <div>
            <div className='menu__icons'><BsFillHouseAddFill size={32} color="#02C75A" /></div>
            <div className='menu__name'>부동산</div>
          </div>
          <div>
            <div className='menu__icons'><BsMap size={32} color="#02C75A" /></div>
            <div className='menu__name'>지도</div>
          </div>
          <div>
            <div className='menu__icons'><SiWebtoon size={32} color="#02C75A" /></div>
            <div className='menu__name'>웹툰</div>
          </div>
          <div>
            <div className='menu__icons'><BiDotsHorizontalRounded size={32} color="#02C75A" /></div>
          </div>
          
        </div>
      </div>
      {/* 아이콘 끝 */}
    </div>
   </>
  )
}