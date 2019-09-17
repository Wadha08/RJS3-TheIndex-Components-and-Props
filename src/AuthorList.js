import React from "react";
import AuthorCard from "./AuthorCard";



function AuthorList(props)
{
   const authorList = props.authors.map(author=> {return(<AuthorCard author= {author} key={author.first_name}/>)})
    return (
        <div>
            {authorList}
            
            </div>
            )
}



export default AuthorList;