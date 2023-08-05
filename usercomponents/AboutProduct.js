import React, { useState } from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AboutProduct(props) {

    const [state, setState]=useState(false)

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column' }}>
            {matches?<>
            <div onClick={() => setState(!state)} style={{ display:'flex',width: '100%',  margin: '3% 3% 1%', fontWeight:500, cursor:'pointer' }}>
                <div style={{display:'flex', flexGrow:1}} >
                Key Features
                </div>
                <div style={{display:'flex', marginRight:'4%'}}>
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
            {state?<div style={{ width: '100%', margin: '0%',color:'#95a5a6', fontSize:'12px' }} >
                <ul>
                    <li>Over-the-ear Wireless Headphone</li>
                    <li>Stereo Sound and Bass. Mic Sensitivity</li>
                    <li>Multi-function buttons</li>
                    <li>Speaker Impedance: 32?</li>
                    <li>12 Hours of Music Play-time 10 Hours of Talk-time</li>
                    <li>2 Hours of Charging Time, 500 Hours of Standby-time.</li>
                </ul>
                
            </div>:<></>}

            </>:<>
            
            <div style={{ width: '100%',  margin: '3% 3% 1%', fontWeight:500,  }}>
            Key Features
            </div>
            <div style={{ width: '100%', margin: '0%',color:'#95a5a6' }} >
                <ul>
                <li>Over-the-ear Wireless Headphone</li>
                    <li>Stereo Sound and Bass. Mic Sensitivity</li>
                    <li>Multi-function buttons</li>
                    <li>Speaker Impedance: 32?</li>
                    <li>12 Hours of Music Play-time 10 Hours of Talk-time</li>
                    <li>2 Hours of Charging Time, 500 Hours of Standby-time.</li>
                </ul>
                
            </div>
            </>}
        </div >



    )
}