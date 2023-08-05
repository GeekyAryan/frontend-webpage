import React, { useEffect, useState } from 'react'
// import Location from './Location'
import { Grid } from '@mui/material'


export default function ProductNamePrice() {

    return (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={0}>
            <Grid item xs={12} style={{ width: '100%', margin: '0px', padding:"0% 4%", fontWeight:600, fontSize:'19px' }}>
            Boat Ear Wireless Headphone
            </Grid>
            {/* <Grid item xs={12} style={{ width: '100%', margin: '0px', padding:"2% 4%", fontWeight:400, fontSize:'16px', color:'#515151' }}>
               <p> 1-Piece </p>
            </Grid> */}
            {/* <Grid item xs={12} style={{ width: '100%' ,padding:"0% 4%",display:"flex", flexDirection:'row' }}>
                <div style={{  margin: '0% 2%', fontWeight:700, fontSize:'19px', display:'flex',alignItems:'center', justifyContent:'center' }} >
                    &#8377;326
                </div>
                <div style={{  margin: '0% 2%', fontWeight:400, fontSize:'16px', display:'flex', color:'#515151', alignItems:'center', justifyContent:'center'  }} >
                    <s>&#8377;350</s>
                </div>
                <div style={{ margin: '0% 2%', fontWeight:400,  display:'flex', alignItems:'center', justifyContent:"center" }} >
                    <div style={{  fontSize:'14px', display:'flex', alignItems:'center', border:'1px solid', padding:'4px 15px' , borderRadius:"10px", background: '#00d3ff', fontWeight:700, color:'#fff'}} >
                        6% Off
                    </div>
                </div>
            </Grid> */}

        </Grid>


    </div>
    )
} 