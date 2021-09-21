import React from 'react'
import Search from './Search'

function HistoryList(props) {
    const str = props.text;
    console.log(str);
    const getCount = (data) => {
        let vowelsCount=0;
        let consonantCount=0;
        for(let i of data){
            for(let j of i){
               if(j ==='a'||j==='e'||j==='i'||j==='o'||j==='u')
                {
                    vowelsCount+=1;
                }else{
                    consonantCount+=1;
                }
             }
        }
        return [vowelsCount,consonantCount]
             
     }
    return (
        <div>
        <ul>
        {
        str.map(data => {
                const [vowelsCount,consonantCount] = getCount(data);

                return ( 
                <div>
                <li>words:{data}</li>
                <p>vowels:{vowelsCount}</p>
                <p>consonant:{consonantCount}</p>
                </div>
                );
             })
         }
         </ul>
        </div>
    )
}

export default HistoryList;
