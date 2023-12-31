import React, { useEffect, useState } from 'react'
// import Location from './Location'
import { Button, Grid } from '@mui/material'


export default function Quantity() {

    return (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={0}>
            <Grid item xs={12} style={{ width: '100%', margin: '0px', padding: "0% 4%", fontWeight: 600, fontSize: '19px' }}>
                Select the Quantity
            </Grid>

            {/* Quantity 1 */}
            <Grid item xs={12} style={{ width: '100%', margin: '0px', padding: "0% 4%", fontWeight: 400, fontSize: '19px' }}>
                <table border={0} style={{ width: '100%', border:'1px solid #b2bec3 ', borderRadius:'10px',padding:'10px', margin:'10px 0px'}} >
                    <tr >
                        <td style={{padding:'0% 2%'}} >
                         Single Item
                        </td>
                        <td rowspan="2" >
                            <div style={{display:'flex', justifyContent:'right', alignItems:'center'}} >
                            <Button variant='contained' style={{lineHeight:'35px', background:"#00d3ff"}} >Add Card</Button>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ width: '100%' ,padding:"0% 0%",display:"flex", flexDirection:'row' }}>
                        <td style={{ width: '100%', margin: '0px', fontWeight: 400, fontSize: '16px', display: 'flex', color: '#515151', alignItems: 'center', justifyContent: 'left' }}>
                            <div style={{  margin: '0% 2%', fontWeight: 700, fontSize: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                &#8377;350
                            </div>
                            <div style={{ margin: '0% 2%', fontWeight: 400, fontSize: '16px', display: 'flex', color: '#515151', alignItems: 'center', justifyContent: 'center' }} >
                                <s>&#8377;450</s>
                            </div>
                            <div style={{  margin: '0% 2%', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: "center" }} >
                                <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', border: '1px solid', padding: '4px 15px', borderRadius: "10px", background: '#00d3ff', fontWeight:700, color:'#fff'}} >
                                    23% Off
                                </div>
                            </div>
                        </td>


                    </tr>
                </table>
            </Grid>


            {/* Quantity 2 */}
            <Grid item xs={12} style={{ width: '100%', margin: '0px', padding: "0% 4%", fontWeight: 400, fontSize: '19px' }}>
                <table border={0} style={{ width: '100%', border:'1px solid #b2bec3', borderRadius:'10px',padding:'10px', margin:'10px 0px'}} >
                    <tr >
                        <td style={{padding:'0% 2%'}} >
                        Combo
                        </td>
                        <td rowspan="2" >
                            <div style={{display:'flex', justifyContent:'right', alignItems:'center'}} >
                            <Button variant='contained' style={{lineHeight:'35px', background:"#00d3ff"}} >Add Card</Button>
                            </div>
                        </td>
                    </tr>
                    <tr style={{ width: '100%' ,padding:"0% 0%",display:"flex", flexDirection:'row' }}>
                        <td style={{ width: '100%', margin: '0px', fontWeight: 400, fontSize: '16px', display: 'flex', color: '#515151', alignItems: 'center', justifyContent: 'left' }}>
                            <div style={{  margin: '0% 2%', fontWeight: 700, fontSize: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                &#8377;550
                            </div>
                            <div style={{  margin: '0% 2%', fontWeight: 400, fontSize: '16px', display: 'flex', color: '#515151', alignItems: 'center', justifyContent: 'center' }} >
                                <s>&#8377;650</s>
                            </div>
                            <div style={{  margin: '0% 2%', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: "center" }} >
                                <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', border: '1px solid', padding: '4px 15px', borderRadius: "10px", background: '#00d3ff', fontWeight:700, color:'#fff'}} >
                                    19% Off
                                </div>
                            </div>
                        </td>


                    </tr>
                </table>
            </Grid>
        </Grid>


    </div>
    )
}