
import Banner1 from '../components/banners/banner' 
import Banner2 from '../components/banners/growing_banner'
import Banner3 from '../components/banners/slide-in-horizontal'
import Banner4 from '../components/banners/slide-in-vertical'
import Banner5 from '../components/banners/banner_image'

export default function LandingPage(){

    return (      
      <>
       <Banner1 text='Welcome to this cool app' bgColor='grey' color='white' height='large' 
       fontSize='txt_xl'/>

       <div style={{height:'10vh'}}></div>

       <Banner2 text='Welcome again' bgColor='grey' color='white' height='medium' 
       fontSize={'txt_xl'}/>

       <div style={{height:'10vh'}}></div>

       <Banner3 text='Welcome , what again??' bgColor='grey' color='white' height='large' 
       fontSize='txt_xl'/>

       <div style={{height:'100vh'}}></div>

       <Banner4 text='Welcome, oh , it is the fourth time' bgColor='grey' color='white'
                 persistence='short' image='/cart.png' fontSize='txt_lg'/>
       
       <div style={{height:'10vh'}}></div>
       <Banner5 text='I am not writing that again' bgColor='grey' color='white' height='large'
       img='/cart.png'/>

      </>
    )
}