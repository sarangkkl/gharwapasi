import React,{useState} from "react";
import { Seo,BreadCrum, Card,GharwapasiFormWrapper,BlogCard } from "../../components";
import { MainConatainer } from "../../components/styledComponents/basicui";
import { getExshow } from "../../appollo/exshow/exshow";
import { getBlogs } from '../../appollo/blog/blog'



const ApplyGharwapasi = ({ res,blogs }) => {
  const activeLink = "Apply Gharwapasi";
  const previosArray = [{ label: "Home", path: "/" }];
  const [isFormActive,setIsFormActive] = useState(false);


  const handleFormActive = () => {
    setIsFormActive(!isFormActive);
  }

  return (
    <MainConatainer>
      <Seo title="Apply Gharwapasi" description="You can apply for gharwapasi from this website we will help you in all possible way we can"/>
      
      <div className="container">
        <BreadCrum activeLink={activeLink} previosArray={previosArray} />
        <div className="row">
          <div className="col-md-6 mx-auto my-5">
            <GharwapasiFormWrapper/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 my-2">
            <div className="row">
              {res.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <Card
                    title={item.attributes.title}
                    video={item.attributes.video}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
            {blogs.map((item,index)=>(
                  <div className="col-md-4">
                    <BlogCard key={index} blog={item}/>
                  </div>
            ))}

            </div>
          </div>
        </div>
      </div>
      
    </MainConatainer>
  );
};

export default ApplyGharwapasi;

export const getStaticProps = async () => {
  const res = await getExshow();
  const blogs = await getBlogs();
  return {
    props: {
      res,
      blogs
    },
  };
};
