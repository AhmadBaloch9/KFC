import React from 'react'
// ===== Import Link From React Router Dom =====//
import { Link } from 'react-router-dom';
// ====== Import pictures from Assests ====//
import Zinger1 from '../Components/Assests/kfc1.png';
import Zinger2 from '../Components/Assests/kfc2.png';
import Zinger3 from '../Components/Assests/kfc3.png';
import Zinger4 from '../Components/Assests/kfc4.png';
import Zinger5 from '../Components/Assests/kfc5.png';
import Pizza1 from '../Components/Assests/Pizza1.jpg'
import Pizza2 from '../Components/Assests/Pizza2.jpg'
import Pizza3 from '../Components/Assests/Pizza3.jpg'
import Pizza4 from '../Components/Assests/Pizza4.jpg'
import Combo1 from '../Components/Assests/combo1.png';
import Combo2 from '../Components/Assests/combo2.png';
import Combo3 from '../Components/Assests/combo3.png';
import Combo4 from '../Components/Assests/combo4.png';
import Pick1 from '../Components/Assests/pick1.png';
import Pick2 from '../Components/Assests/pick2.png';
import Pick3 from '../Components/Assests/pick1.png';
import Pick4 from '../Components/Assests/pick2.png';
import Appstore from '../Components/Assests/Appstore.png'
import User from '../Components/Assests/user.png'
// ==== Import Font Awesome Icons From fon Awesome ====//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faGlassWater ,faHeart} from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faYoutube,faInstagram,faGoogle,} from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow,faMagnifyingGlass,faChartBar ,faXmark,} from '@fortawesome/free-solid-svg-icons';

// ====== Create Home Function ======//
const Home = () => {
  const [display,setDisplay]=React.useState(false);
  const[form,setForm]=React.useState(false)
  const show=()=>{
      setDisplay(true)
  }
  const Close=()=>{
    setDisplay(false)
  }
  const log=()=>{
    setForm(true)
  }
  const disappear =()=>{
    setForm(false)
  }
  return (
    <div>
      {/* ===== Container ====== */}
      <div className="container">
        {/* ==== Nav Bar ==== */}
        <div className="nav-bar">
          <div className="allTags">
            <div className="left">
              <li><Link className='tags'><FontAwesomeIcon className='BarsStaggered' icon={faBarsStaggered} onClick={show}/></Link></li>
              <li><Link className='Kfc'><h3>Kfc</h3></Link></li>
              <li><Link className='tags delv'>Delievry</Link></li>
              <li><Link className='tags pick'>PickUp</Link></li>
            </div>
            <div className="right">
              <li><Link className='tags glass'><FontAwesomeIcon icon={faGlassWater} /></Link></li>
              <li><Link className='tags btn' onClick={log}>Login</Link></li>
            </div>
          </div>
          {/* ====== Nav Bar text ====== */}
          <div className="text">
            <h1>Fresh and Best Food</h1>
            <p>KFC is the famous for his best food</p>
            <button>Explore Now</button>
          </div>
        </div>
        {/* ===== Button Reordered===== */}
        <div className="reodered">
          <button onClick={log}>ReOdered</button>
        </div>
        {/* ===== Section Container ==== */}
        <div className="section-container">
          {/* ==== Define Text ===== */}
          <div className="define">
            <h1>Explore Menu</h1>
          </div>
          {/* ======= Section 1 ======= */}

          <section className='section-1'>
            {/* ==== Box 1 ==== */}
            <div className="box">
              {/* === Box Img === */}
              <div className="picture">
                <img src={Zinger4} alt="This is an image" />
              </div>
              {/* ==== Box Text ==== */}
              <div className="box-text">
                <h5>Everyday</h5>
              </div>
            </div>
            {/* ==== Box 2 ==== */}
            <div className="box">
              {/* === Box Img === */}
              <div className="picture">
                <img src={Zinger2} alt="This is an image" />
              </div>
              {/* ==== Box Text ==== */}
              <div className="box-text">
                <div className="blank">
                  <h5>Signature</h5>
                </div>
              </div>
            </div>
            {/* ==== Box 3 ==== */}
            <div className="box">
              {/* === Box Img === */}
              <div className="picture">
                <img src={Zinger5} alt="This is an image" />
              </div>
              {/* ==== Box Text ==== */}
              <div className="box-text">

                <h5>Zinger</h5>

              </div>
            </div>

            {/* ==== Box 4 ==== */}
            <div className="box">
              {/* === Box Img === */}
              <div className="picture">
                <img src={Zinger4} alt="This is an image" />
              </div>
              {/* ==== Box Text ==== */}
              <div className="box-text">
                <h5>Sharing</h5>
              </div>
            </div>
            {/* ==== Box 5 ==== */}
            <div className="box">
              {/* === Box Img === */}
              <div className="picture">
                <img src={Zinger5} alt="This is an image" />
              </div>
              {/* ==== Box Text ==== */}
              <div className="box-text">
                <h5>Promotion</h5>
              </div>
            </div>
          </section>
          {/* ==== Define Text ===== */}
          <div className="define">
            <h1>Best Sellers</h1>
          </div>
          {/* ===== Section 2 ===== */}
          <section className="section-2">
            {/* ===== Box 1===== */}
            <div className="box">
            {/* === Box Image === */}
               <div className="box-img">
                {/* ==== Inside Image Text ==== */}
              <div className="inside">
                  <p>Rs: 6542</p>
               </div>
              <img src={Pizza1} alt="This is an image" />
            </div>
            {/* ==== Box Text ====*/}
            <div className="box-text">
                <h4>Pizza</h4>
                <p>Large Size</p>
                <h6>sit amet consectetur adipisicing elit. Error, maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, iste!</h6>
                <button>Ordered Now</button>
            </div>
            </div>
             {/* ===== Box 2===== */}
             <div className="box">
             
            {/* === Box Image === */}
               <div className="box-img">
               {/* ==== Inside Image Text ==== */}
               <div className="inside">
                  <p>Rs: 6542</p>
               </div>
              <img src={Pizza1} alt="This is an image" />
            </div>
            {/* ==== Box Text ====*/}
            <div className="box-text">
                <h4>Pizza with Botel</h4>
                <p>Medium Size</p>
                <h6>sit amet consectetur adipisicing elit. Error, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, magni.</h6>
                <button>Ordered Now</button>
            </div>
            </div>
             {/* ===== Box 3===== */}
             <div className="box">
            {/* === Box Image === */}
               <div className="box-img">
                 {/* ==== Inside Image Text ==== */}
             <div className="inside">
                  <p>Rs: 6542</p>
               </div>
              <img src={Pizza2} alt="This is an image" />
            </div>
            {/* ==== Box Text ====*/}
            <div className="box-text">
                <h4>Pizza with Burger</h4>
                <p>Extra Large Size</p>
                <h6>sit amet consectetur adipisicing elit. Error, maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, enim?</h6>
                <button>Ordered Now</button>
            </div>
            </div>
          </section>
          {/* ==== Define Text ===== */}
          <div className="define">
            <h1>Top Deals</h1>
          </div>
          {/* ======= Section 3 ======= */}
          <section className="section-3">
          {/* ==== Box 1 ==== */}
            <div className="box">
                <div className="box-img">
                <FontAwesomeIcon icon={faHeart} className='faHeart'/>
                  <img src={Combo1} alt="This is an image" />
                </div>
               
                <div className="box-text">
                  <h4>Twister Combo</h4>
                  <p>Twister + 1 Regular Fries + 1Regular Drink</p>
                  <h5>Rs 670</h5>
                  <button>Add To Bucket</button>
                </div>
            </div>
             {/* ==== Box 2 ==== */}
             <div className="box">
                <div className="box-img">
                <FontAwesomeIcon icon={faHeart} className='faHeart'/>
                  <img src={Combo2} alt="This is an image" />
                </div>
               
                <div className="box-text">
                  <h4>Zinger Combo</h4>
                  <p> 1 Twister + 1 Regular Fries + 1Regular Drink</p>
                  <h5>Rs 670</h5>
                  <button>Add To Bucket</button>
                </div>
            </div>
             {/* ==== Box 4 ==== */}
             <div className="box">
                <div className="box-img">
                <FontAwesomeIcon icon={faHeart} className='faHeart'/>
                  <img src={Combo3} alt="This is an image" />
                </div>
               
                <div className="box-text">
                  <h4>Pizza</h4>
                  <p>Twister + 1 Regular Fries + 1Regular Drink</p>
                  <h5>Rs 970</h5>
                  <button>Add To Bucket</button>
                </div>
            </div>
             {/* ==== Box 4 ==== */}
             <div className="box">
                <div className="box-img">
                <FontAwesomeIcon icon={faHeart} className='faHeart'/>
                  <img src={Combo4} alt="This is an image" />
                </div>
               
                <div className="box-text">
                  <h4>Family Festival</h4>
                  <p>Twister + 1 Regular Fries + 1Regular Drink</p>
                  <h5>Rs 970</h5>
                  <button>Add To Bucket</button>
                </div>
            </div>
          </section>
          {/*======= Section 4 ====== */}
          <section className="section-4">
              <div className="box-1">
          {/* ====== Box 1====== */}
            <div className="box">
            <img src={Pick1} alt="This is an image" />
            </div>
             {/* ====== Box 2====== */}
             <div className="box">
            <img src={Pick2} alt="This is an image" />
            </div>
            </div>
            <div className="box-2">
             {/* ====== Box 3====== */}
             <div className="box">
            <img src={Pick4} alt="This is an image" />
            </div>
             {/* ====== Box 4====== */}
             <div className="box">
            <img src={Pick3} alt="This is an image" />
            </div>
            </div>
          </section>
        </div>
        {/* ===== Footer ===== */}
        <footer>
            {/* ===== Kfc ===== */}
            <div className="kfc">
              <div className="box1">
                <h4>KFC</h4>
              </div>
              <div className="box2">
              <FontAwesomeIcon icon={faFacebook} className='fa'/>
              <FontAwesomeIcon icon={faYoutube} className='fa'/>
              <FontAwesomeIcon icon={faInstagram} className='fa'/>
              </div>
            </div>
            {/* ====== Footer Links===== */}
            <div className="footer-links">
              <div className="link">
                <li><Link className='about'>About</Link></li>
                <li><Link className='about'>Mitao Bhook</Link></li>
                <li><Link className='about'>Mitao Bhook - Scholorship</Link></li>
                <li><Link className='about'>Privacy Policy</Link></li>
                <li><Link className='about'>Careers</Link></li>
              </div>
              <div className="link">
                <li><Link className='about'>Contact Us</Link></li>
                <li><Link className='about'>Store Locator</Link></li>
                <li><Link className='about'>Track Order</Link></li>
              </div>
              <div className="link">
                <li><Link className='about'>Terms and Conditions</Link></li>
               
              </div>
              <div className="link">
               <img src={Appstore} alt="This is an image" />
              </div>
            </div>
        </footer>
        {/* ====== Copy Right ===== */}
        <div className="copy-right">
        <div className="box">
             <div className="text1">
              <p>2024 KFC.All Rights Reserved</p>
             </div>
             <div className="text2">
              <h5>Created By</h5>
              <p>Shahzad Ahmad Baloch</p>
             </div>
</div>
        </div>
      </div>
      {/* ========= Cickable Pages ======= */}
      {/* ====== Main ======= */}
      <div className="main" style={{left:display?`0%`:`-500px`}}>
      <FontAwesomeIcon icon={faXmark} className='xmark' onClick={Close}/>
      <div className="links">
        <button onClick={log}>Login</button>
</div>
{/* ======= Stores ====== */}
<div className="links">
       <div className="store">
       <FontAwesomeIcon icon={faLocationArrow} className='locat'/>
       <p>Store Locator</p>
       </div>
       <div className="store">
       <FontAwesomeIcon icon={faMagnifyingGlass} className='locat'/>
       <p>Track Order</p>
       </div>
       <div className="store">
       <FontAwesomeIcon icon={faChartBar} className='locat'/>
       <p>Explore Menu</p>
       </div>
</div>
{/* ===== Nav Links ====== */}
<div className="links nav">
  <li><Link className='nav-links'>About Us</Link></li>
  <li><Link className='nav-links'>FeedBack</Link></li>
  <li><Link className='nav-links'>Terms & conditions</Link></li>
  <li><Link className='nav-links'>Privacy Policy</Link></li>
  <li><Link className='nav-links'>Contact Us</Link></li>
  <li><Link className='nav-links'>Mitao Bhook</Link></li>
  <li><Link className='nav-links'>Scholoship</Link></li>
  <li><Link className='nav-links'>Carrers</Link></li>
</div>

      </div>
      {/* ======== Login Form ======= */}
      <div className="login">
      <div className="form" style={{opacity:form?`1`:`0`}}>
      <FontAwesomeIcon icon={faXmark} className='Xmark' onClick={disappear}/>
      <img src={User} alt="This is an image" className='User'/>
          <div className="text">
            <p>Welcome!</p>
            <input type="text" name="" id="" placeholder='Enter Your Phone Number'/>
            <input type="text" name="" id="" placeholder='Enter Your Name'/>
            <button>Login</button>
         <div className="google">
         <FontAwesomeIcon icon={faGoogle} className='faGoog'/>
         <button>Login with Google</button>
         </div>
          </div>

      </div>
    </div>
    </div>
  )
}

export default Home
