import React from 'react';
import { MainConatainer,FbBanner } from '../components/styledComponents/basicui';
import { Seo,BlogCard,Card } from '../components';
import { getBlogs } from '../appollo/blog/blog';
import { crousal2 } from '../assets/images'
import { getExshow } from '../appollo/exshow/exshow';
import { FlexBox,HeroImage,GridContainer } from '../styles/containers';


const index = ({blogs,exshow}) => {


  return (
    <MainConatainer>
      <Seo title="The Mission Gharwapasi" description="Gharwapasi is the process of taking back the muslim in the dharma who willingly want to come." keywords="Mission Gharwapasi"/>
        {/* <h3>{process.env.REACT_APP_BACKEND_URL}</h3> */}
        <FlexBox>
            <HeroImage>
              <img src={crousal2.src} alt='The mission Gharwapasi'/>
            </HeroImage>
            <FbBanner id="fb-root mx-4">
              <div className="fb-page" data-href="https://www.facebook.com/SwamiJitendranandJee" data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SwamiJitendranandJee" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SwamiJitendranandJee">Swami Jitendranand Sarswati Ji Maharaj</a></blockquote></div>
            </FbBanner> 
        </FlexBox>
        <GridContainer>
            {blogs.map((item,index)=>(
                <BlogCard key={index} blog={item}/>
            ))}
        </GridContainer>

      <GridContainer >
          {exshow.map((item,index)=>(
            <Card key={index} title={item.attributes.title} video={item.attributes.video}/>         
          ))}
      </GridContainer>
    </MainConatainer>
  )
}

export default index


export const getStaticProps = async () => {
  const blogs = await getBlogs();
  const exshow = await getExshow();
  return {
    props: {
      blogs,
      exshow
    }
  }
}