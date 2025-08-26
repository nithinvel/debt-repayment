import React from 'react'
import'./Home.css'
 import StarIcon from '@mui/icons-material/Star';
const Home = () => {
  return (
    <div>
        <section className='header'>
            <a href='#'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpgTWo2Qvkt8sCnNTg_2ZL1VTsaMTnal3DQ&s' style={{height:'10vh', borderRadius:'100%'}}></img></a>
            <div>
            <ul  className='navbar'>
                <li><a href='#'>| Home |</a></li>
                <li><a href='#'>| Order History |</a></li>
                <li><a href='#'>| contanct us |</a></li>
                <li><a href='#'>| Account |</a></li>
                <li><a href='#'>| Help |</a></li>
               
            </ul>
            </div>

        </section>
        <section className='banner'>
            <div className='banimg'>
        <img src='https://img.freepik.com/free-vector/watercolor-bakery-sale-banner-design_23-2149439050.jpg?t=st=1727239611~exp=1727243211~hmac=9427d259543c531c13b916842bb6ca0f63afd435689e5f06ca0342b958da103a&w=1800' style={{height:'60vh', borderRadius:'38px'}} ></img>
        </div>
        <div className='bantext'>
        <h1 style={{color:"brown"}}>Welcome Buddy!!!</h1>
        <p>Sweeten your day the right way🍯. </p>
        <p style={{fontSize:'19px'}}>Cake is one of the most beloved desserts in the world. Whether it’s <br/>for a special occasion or just a <br/>sweet treat, cake is a dessert that brings people together.</p>
        </div>
        </section>
        
        <section>
            <div className='ice'>
                <center>
           <h1>Ice creams</h1>
           <p>Crave-Worthy Scoops Satisfaction in Every Bite 🍨</p>
           </center>
           </div>
        </section>
        <section>
            <div className='img1'>
                <div>
             <img src='https://img.freepik.com/free-photo/sweet-ice-cream-cone-with-strawberry-generative-ai_188544-12340.jpg?t=st=1727346691~exp=1727350291~hmac=b5d01190bce1fe31b2131200ff5d6d9ec5a775a77c389c4ae6bd7411483ab4c8&w=2000'style={{height:'30vh'}}></img>
             <h1>Choco berry🍓</h1>
             <p>choco and the fusion of berry in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now! </button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/delicious-ice-cream-winter-time_23-2149618910.jpg?t=st=1727347350~exp=1727350950~hmac=b80f1f499ffaaa6c7fe9d0111174d27c029312a901cd9457d5a62e9aadad357e&w=1800'style={{height:'30vh'}}></img>
             <h1>Blue berry🫐</h1>
             <p>choco and the fusion of  blueberry in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/view-delicious-frozen-ice-cream-dessert-with-bananas_23-2150823006.jpg?t=st=1727347470~exp=1727351070~hmac=1b46311bb9c5e12a5388a058956b98f1173f8c2b90f31d70516e076d430cab51&w=2000'style={{height:'30vh'}}></img>
             <h1>Butterscotch🍪</h1>
             <p>choco and the fusion of berry in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>

             </div>
            </div>
        </section>
        <section>
            <div className='ice'>
                <center>
           <h1>Special Items</h1>
           <p>Fueling dessert cravings, one bite at a time</p>
           </center>
           </div>
        </section>
        <section>
            <div className='img1'>
                <div>
             <img src='https://img.freepik.com/free-photo/delicious-cookies-basket_23-2150707141.jpg?t=st=1727354216~exp=1727357816~hmac=437419b47c7531423d6f74af3af0d0e63d1f30372d21cc6e9155666a956bd775&w=1480'style={{height:'30vh'}}></img>
             <h1>Cookies 🍪</h1>
             <p>chocolava and the fusion of chocochips in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/high-angle-delicious-indian-dessert_23-2149312428.jpg?t=st=1727354868~exp=1727358468~hmac=f274cc8e2bd000632e3b8546c0cf953a65d1229e4849e311a22f097d5b95e921&w=1480'style={{height:'30vh'}}></img>
             <h1>Gulab Jamun</h1>
             <p>Sweetness in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/sweet-homemade-layered-honey-cake-with-spices-nuts_114579-14283.jpg?t=st=1727355019~exp=1727358619~hmac=2d68d1824e23b9ddf70edfecaeb52c060a7a56abc55d871cda0d0e3fa14fe698&w=1480'style={{height:'30vh'}}></img>
             <h1>Honey crunches</h1>
             <p> crunche fusion of honey in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>

             </div>
            </div>
        </section>
        <section>
            <div className='ice'>
                <center>
           <h1>Cakes</h1>
           <p>Elevating Celebrations with Every Slice🍰 </p>
           </center>
           </div>
        </section>
        <section>
            <div className='img1'>
                <div>
             <img src='https://img.freepik.com/free-photo/front-view-red-cake-slice-fruit-cake-piece-inside-plate-with-fresh-cranberries-grey_140725-20810.jpg?t=st=1727355423~exp=1727359023~hmac=fd4312e0a06eb8c21e3fee31ac8972538dfc1b1fc4943ba241c3417a70f6d98c&w=1480'style={{height:'30vh'}}></img>
             <h1>Red velvet🍓</h1>
             <p>the fusion of berry in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/delicious-cake-with-oreos_23-2148531559.jpg?t=st=1727355539~exp=1727359139~hmac=1a3e4667ee3d88791528aabbabd7755cda5e7a03312f44e80e2085a7bfbcb246&w=1480'style={{height:'30vh'}}></img>
             <h1>Oreo CakeCake🍪</h1>
             <p>the chunche of  oreo in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/tiramisu-piece-with-coffee-beans_23-2148531561.jpg?t=st=1727355586~exp=1727359186~hmac=d0de6aed62d6368e52ea5757d1bf9503b822e33d2f5f1949c1652b5f78d45163&w=1480'style={{height:'30vh'}}></img>
             <h1>Coffee cake</h1>
             <p> the fusion of Cofee seeds in every Bite</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>

             </div>
            </div>
        </section>
        <section>
            <div className='ice'>
                <center>
           <h1>Shakes</h1>
           <p>Thick and light fullfilled of milk</p>
           </center>
           </div>
        </section>
        <section>
            <div className='img1'>
                <div>
             <img src='https://img.freepik.com/free-photo/front-view-desserts-with-gummy-worms-sprinkles_23-2148603249.jpg?t=st=1727355714~exp=1727359314~hmac=ff819e5f21d4b4cd9dd4956528b81b76828e5bfb7484a3e292f37916675f5c9c&w=740'style={{height:'30vh'}}></img>
             <h1>Raspberry🍓</h1>
             <p>Raspberry mixed with milk</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/front-view-chocolate-dessert-jar-with-marshmallows_23-2148603314.jpg?t=st=1727355747~exp=1727359347~hmac=ad5eaf6e7b93fd416f543ae0dfdc919e9fbe4d8887a449d73e7cbb846192f1ad&w=740'style={{height:'30vh'}}></img>
             <h1>Belgiumchocolate Shake🍪 </h1>
             <p>Belgiumchocolate mixed with milk</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>
             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/still-life-healthy-coconut-smoothie_23-2148170905.jpg?t=st=1727355853~exp=1727359453~hmac=bf348da89269e241a261400ab4683ef69a8208750f20bcd8c890cabcad5c97a1&w=740'style={{height:'30vh'}}></img>
             <h1>Tendercoconut Shake🥥 </h1>
             <p>coconut mixed with milk</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>

             </div>
             <div>
             <img src='https://img.freepik.com/free-photo/delicious-pina-colada-cocktail-with-leaves_23-2150143199.jpg?t=st=1727355951~exp=1727359551~hmac=12727e5ad580bf2dfefefef6ca0104eb15665c37049df9f46a52a03aa2217666&w=740'style={{height:'30vh'}}></img>
             <h1>Pineapple Shake🍍</h1>
             <p> Pineapple mixed with milk</p><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon style={{color:'gold'}}/><StarIcon/>
             <p>4/5</p><button className='button'>Order Now!</button>

             </div>
             
            </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <footer>
            <img src='footer.jpg' style={{width:'180vh'}}></img>
        </footer>
        
    </div>
  )
}

export default Home