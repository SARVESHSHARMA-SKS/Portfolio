import React from 'react'
import styles from "./Project.module.css"
const Projects = () => {
    

    return (
       

        <>
        <h1 style={{textAlign:"center",marginTop:"30px",  color:"#5E5757"}}>PROJECTS</h1>
        <div className={styles.outer }>
            <div >
                <img src="https://i.postimg.cc/rpwMHBmq/landingpagesst-1.png"  alt="makemytrip"/>
                <h3 >Clone of MakeMyTrip</h3>
                    <p>
                        <p style={{ textAlign: "center" }}> MakeMyTrip is an Indian online travel company.</p>
                        
                        <p style={{ textAlign: "justify" }}> We have implemented the search on the basis of stoppage, flight company, location. </p>
                        
                         Tech Stack: React.js | Node.js | Express | MongoDB | CSS | JAVASCRIPT
                        <br/>
                        Collaborative Project | 4-member team | Project
                         <br/>
                        Duration : 5 Days
                    </p>
                <a href="https://github.com/nitish14920/MakeMyTrip" target="_blank" rel="noopener noreferrer" >
                  <button>Github</button>
                </a>
                <a href="https://drive.google.com/file/d/1U6Hn-rWwWbHca7zUFDRY4askWe4r79JR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button>Demo</button>
                    </a>
                    <a href="https://medium.com/@sssarvesh1999/makemytrip-project-4308b68b44d6" target="_blank" rel="noopener noreferrer">
                    <button>Blog</button>
                </a>
                </div>
                
            <div>
                <img src="https://i.postimg.cc/bvjrCyDW/0-0-0-0-1-Document-Google-Chrome-28-08-2021-09-13-39.png"  alt="Couch"/>
                <h3>Clone of InternShala</h3>
                    <p>
                        <p style={{textAlign:"center"}}>Internshala is an internship listing and online
                        training platform.
                        </p>
        
                       <p style={{textAlign:"justify"}}>  We have added location, domain-based filtering and internship searching feature on Internshala Clone Website.</p>
                        
Tech Stack: HTML | CSS | Javascript | Node |
                        MongoDB| MySql | DOM |
                          <br/>
                        Collaborative Project | 4-member team | Project
                          <br/>
   Duration : 2 Weeks
                </p>
              
               <a href="https://blooming-bastion-29120.herokuapp.com/pages/index.ejs" target="_blank" rel="noopener noreferrer">
                
              <button>Github</button>
                </a>
               
                
                <a  href="https://drive.google.com/file/d/1NcgNpv6BcunAgagWgEJhVActhN_1mbq3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    
                        <button>Demo</button></a>
                     <a href="https://medium.com/@vs9425348?p=e8bfcdbac6cc" target="_blank" rel="noopener noreferrer">
                    <button>Blog</button>
                </a>
           
                </div>
               
            </div>
           
        </>
    )
}

export default Projects
