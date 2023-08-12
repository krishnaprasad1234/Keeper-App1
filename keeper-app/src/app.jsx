import React, { useState ,useEffect } from "react";
import Header from "./heading.jsx"
import Footer from "./footer.jsx"
import Text from "./text.jsx"
import Notes  from "./notes.js"
import TextArea from "./textarea.jsx"
import axios from 'axios';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from "./searchbox.jsx"
import Updatebox from "./updatebox.jsx";

function App(){
    const [array,setarray1] =useState([]);
    const [searcharray,setsearcharray] =useState([]);
    const [issearched,setsearched]= useState(false);
    const [isvisible,setvisible]=useState(false);
    const [updatetitle,settitle]=useState();
    const [updatedesc,setdesc]=useState();
    useEffect(() => {
        axios.get('http://localhost:8080/keeper-app')
          .then(response => setarray1(response.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      
      function On_add(item) {
       setsearched(false);
        const found = array.some(prev => prev.title === item.title);
        if (found) {
          alert('This title exists!! Give a different title');
        }
        
        if (!found) {
          setarray1(prevArray => [...prevArray, item]);
          axios.post('http://localhost:8080/keeper-app', item);
        }
      }
      
    
    function delete1(title){
      setsearched(false);
        setarray1(prev => prev.filter((item) => item.title !== title));
        axios.delete(`http://localhost:8080/keeper-app/${title}`);

    }

    function handleSearch(temp) {
        let i;
        for (i = 0; i < array.length; i++) {
          if (array[i].title === temp) {
            break;
          }
        }
        if (i === array.length) {
          alert('Searched title not present');
        } else {
          setsearcharray([array[i]]);
          setsearched(true);
        }
      }
    
       

      function update(title,description){
         
        setdesc(description);
        settitle(title);
        setvisible(true);
      }

      function update1(title1,title,description){
        setsearched(false);
        let i;
          for (i = 0; i < array.length; i++) {
            if (array[i].title === title) {
              break;
            }
          }

        if(title===title1){
          array[i].description=description;
          axios.put(`http://localhost:8080/keeper-app/${title1}`,
        {
          title: title,
          description: description,
        })
        .then(()=>{
          axios.get('http://localhost:8080/keeper-app')
          .then(response => setarray1(response.data))
        })
        }
        else {
          if(i !=array.length){alert("Duplicate title");}
          else{
            let i;
            for (i = 0; i < array.length; i++) {
              if (array[i].title === title1) {
                break;
              }
            }
            array[i].title=title;
            array[i].description=description;
            axios.put(`http://localhost:8080/keeper-app/${title1}`,
            {
              title: title,
              description: description,
            })
            .then(()=>{
              axios.get('http://localhost:8080/keeper-app')
              .then(response => setarray1(response.data))
            })
          }
        }
       
      }
    return(<div>
        <Header />
        <SearchBox onsearch={handleSearch}   />
        <TextArea onadd={On_add}/>
         {isvisible && <Updatebox title={updatetitle} desc={updatedesc} update={update1}/>}
         {issearched && searcharray.map((noteitem,index)=>{
          return <Text ondelete={delete1} onupdate={update} key={index} keep={index} title={noteitem.title} description={noteitem.description} />
        })}

        {!issearched && array.map((noteitem,index)=>{
          return <Text ondelete={delete1} onupdate={update} key={index} keep={index} title={noteitem.title} description={noteitem.description} />
        })}
        
        
        <Footer />
    </div>)
} 
export default App;