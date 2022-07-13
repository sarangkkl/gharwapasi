import React,{useState} from "react";
import { Seo, GharwapasiForm, BreadCrum, Card } from "../../components";
import { MainConatainer } from "../../components/styledComponents/basicui";
import { cover1 } from "../../assets/images";
import { getExshow } from "../../appollo/exshow/exshow";
import { CoverImg } from "./applySharwapasiStyle";


const ApplyGharwapasi = ({ res }) => {
  const activeLink = "Apply Gharwapasi";
  const previosArray = [{ label: "Home", path: "/" }];
  const [isFormActive,setIsFormActive] = useState(false);


  const handleFormActive = () => {
    setIsFormActive(!isFormActive);
  }

  return (
    <MainConatainer>
      <Seo title="Apply Gharwapasi" />
      <CoverImg src={cover1.src} />
      <div className="container">
        <BreadCrum activeLink={activeLink} previosArray={previosArray} />
        <div className="row">
          <div className="col-md-6 mx-auto my-5">
            <GharwapasiForm/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 my-2">
            <div className="row">
              {res.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <Card
                    title={item.attributes.title}
                    video={item.attributes.video}
                  />
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
  getExshow().then((res) => {});
  return {
    props: {
      res,
    },
  };
};
