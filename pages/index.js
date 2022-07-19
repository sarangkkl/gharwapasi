import React from 'react';
import { MainConatainer } from '../components/styledComponents/basicui';
import { Seo,Crousal,BlogCard,Card } from '../components';
import { getBlogs } from '../appollo/blog/blog';
import { getExshow } from '../appollo/exshow/exshow';

const index = ({blogs,exshow}) => {


  return (
    <MainConatainer>
      <Seo title="The Mission Gharwapasi" description="Gharwapasi is the process of taking back the muslim in the dharma who willingly want to come." keywords="Mission Gharwapasi"/>
        <div className="row container">
          <div className="col-md-8">
              <Crousal/>
          </div>
          <div className="col-md-4">
            <div id="fb-root mx-4">
              <div class="fb-page" data-href="https://www.facebook.com/SwamiJitendranandJee" data-tabs="timeline" data-width="600" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SwamiJitendranandJee" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SwamiJitendranandJee">Swami Jitendranand Sarswati Ji Maharaj</a></blockquote></div>
            </div>
          </div>
        </div>
      <div className="row container my-2">
          <div className="row mx-auto">
            {blogs.map((item,index)=>(
              <div className='col-md-4 '>
                <BlogCard key={index} blog={item}/>
              </div>
            ))}
          </div>
      </div>

      <div className="row container">
          {exshow.map((item,index)=>(
          <div className="col-md-4">
            <Card key={index} title={item.attributes.title} video={item.attributes.video}/>
          </div>
          ))}
      </div>
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