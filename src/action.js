import React, {useState} from 'react';
import db from './db';
import { useNavigate } from "react-router-dom";

const Action = () => {
    const navigate = useNavigate();

    return ( 
        <div className='category-action'>
            {db.map(item => {
                return (
                    <div>
                        {item.genre1 === 'Action' || item.genre2 === 'Action' || item.genre3 === 'Action'?
                        <div className='category-div'>
                            <div className='category-name'>{item.name}</div>
                            <img className='category-img' src={item.url} height='350' width='250' />
                            <div className='category-sl'>{item.storyLine}
                            <br/>
                            <button className='category-btn'
                            onClick={()=> navigate(`/profile/${item.id}`)}
                            >more info</button></div>
                        </div>
                        : ""  
                    }
                    </div>
                )
            })}
        </div>
    );
}
 
export default Action;