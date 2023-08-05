import { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';



export default function BannerItem(props) {
    return (<div>
   
        <div style={{ display: 'flex', marginTop: 40 }}>
            <span 
            style={{ marginLeft: 52, 
            borderWidth: 2, border: '2px solid black',
             borderRadius: 12, backgroundColor: "#d5ddd6", display: 'flex', 
             justifyContent: 'center', padding: 
             '5px' }}>
                Product Type <KeyboardArrowDownOutlinedIcon /></span>
            <span 
            style={{ marginLeft: 52, 
            borderWidth: 2, border: '2px solid black',
             borderRadius: 12, backgroundColor: "#d5ddd6", display: 'flex',
              justifyContent: 'center', padding: '5px' }}>
                Price</span>
            <span 
            style={{ marginLeft: 52, 
            borderWidth: 2, border: '2px solid black',
             borderRadius: 12, backgroundColor: "#d5ddd6",
              display: 'flex', justifyContent: 'center', padding: '5px'
               }}>
                Review</span>

                <span 
            style={{ marginLeft: 52, 
            borderWidth: 2, border: '2px solid black',
             borderRadius: 12, backgroundColor: "#d5ddd6",
              display: 'flex', justifyContent: 'center', padding: '5px'
               }}>
                All Filters</span>

        </div>
</div>)

}