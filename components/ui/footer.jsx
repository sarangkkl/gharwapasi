import React from "react";
import Link from 'next/link';
import {FacebookIcon,InstagramIcon,YouTubeIcon,TelegramIcon,TwitterIcon,
  } from "../../assets/icons";
import { FooterLinks } from '../styledComponents/basicui'

const Footer = () => {

  const Alllinks = [
    {
      "title": "Help Section",
      "links": [
        {"label":"Apply Gharwapasi","href":"/apply-gharwapasi"},
        {"label":"Marriage Consultation","href":"/marriage-consultation"},
        {"label":"Report Victim","href":"/report-victim"},
      ]
    },
    {
      "title": "Legals",
      "links": [
        {"label":"Privacy Policy","href":"/privacy-policy"},
        {"label":"Terms & Condition","href":"/terms-and-condition"},
        {"label":"Report Victim","href":"/report-victim"},
      ]
    },
    {
      "title": "Data Collection",
      "links": [
        {"label":"All cases","href":"/all-cases"},
        {"label":"Love Jihad","href":"/love-jihad"},
        {"label":"Halala","href":"/halala"},
        {"label":"Mutah","href":"/mutah"},
      ]
    },
    {
      "title": "Services",
      "links": [
        {"label":"Blogs","href":"/blogs"},
        {"label":"News","href":"/news"},
        {"label":"Announcements","href":"/announcements"},
        {"label":"Clubs","href":"/clubs"},
        {"label":"Join Mission","href":"/join-mission"},
      ]
    }
  ]


  return (
<footer className="bg-light text-center ">
 
  <div className="container p-4">

   
  <div style={{display:"flex",justifyContent:"space-evenly",width:"200px",margin:"10px auto"}}>
            <div>
              <a href="https://www.facebook.com/SwamiJitendranandJee">
                <FacebookIcon color="primary" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/swamijitendranand/">
                <InstagramIcon color="secondary" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/c/SwamiJitendranandSarswati">
                <YouTubeIcon color="warning" />
              </a>
            </div>
            <div>
              <a href="https://t.me/SwamiJitendranandJee">
                <TelegramIcon color="primary"/>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/SJitendranand_">
                <TwitterIcon color="primary"/>
              </a>
            </div>
          </div>


    <section className="">
      <form action="">
       
        <div className="row d-flex justify-content-center">
      
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
        
          <div className="col-md-5 col-12">
    
            <div className="form-outline mb-4" >
              <input type="email" id="form5Example2" className="form-control" style={{border:"1px solid black"}}/>
              
            </div>
          </div>
          
          <div className="col-auto">

        
            <button type="submit" className="btn btn-primary mb-4" disabled>
              Subscribe
            </button>
          </div>
         
        </div>
    
      </form>
    </section>
 
    <section className="mb-4">
      <p>
        Gharwapasi is the mission of hindus to make the peoples back to their orignal root where they feel connected India not with ideology of foreigners invaders.

      </p>
    </section>



   
    <section className="">
     
      <div className="row">

          {Alllinks.map((item,index)=>(
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={index}>
              <FooterLinks>
                <p>{item.title}</p>
                {item.links.map((x,i)=>(
                  <div key={i}>
                    <Link href={x.href} >{x.label}</Link>
                  </div>
                ))}
              </FooterLinks>
            </div>
          ))}
          {/* <p className="section__heading">Help Section</p>

          <ul className="list-unstyled mb-0">
            <li>
              <Link href="apply-gharwapasi" className="text-dark">Apply Gharwapasi</Link>
            </li>
            <li>
              <Link href="coming-soon" className="text-dark">Marriage Consultaion</Link>
            </li>
            <li>
              <Link href="coming-soon" className="text-dark">Report Victim</Link>
            </li>
           
          </ul> */}
        
      </div>
      
    </section>
    

  </div>
  


  <div className="text-center p-3" style={{backgroundColor:"rgba(255,0,0,0.2)"}}>
    © 2022 Copyright:
    <a className="text-dark" href="#">Gharwapasi.in</a>
  </div>
  

</footer>

  );
};

export default Footer;
