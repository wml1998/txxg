import React, {useState, useEffect} from 'react'
import {AreaType} from '../utils/types'
import '../views/Arear.css'
import {getDisease} from '../services/index'




 const Area = (props: {areaTree:AreaType []})=>{

    console.log('area...', props.areaTree);
    return <>
        <div>
            <h3>中国疫情</h3>
          
        </div>
        <div>
            <h3>海外疫情<span>确诊例</span><span>死亡例</span></h3>
            <div>
                <div className="OutBox">
                   <div className="listTitle">
                        <p>地区</p>
                        <p>确诊</p>
                        <p>治愈</p>
                        <p>死亡</p>
                   </div>
                    <div className="listData">
                        {
                            props.areaTree&&props.areaTree.map((item,index)=><div className="everyData" key={index}>
                                <p className="countryName">{item.name}</p>
                                <p>{item.total.confirm}</p>
                                 <p>{item.total.heal}</p>
                                 <p>{item.total.dead}</p>                         
                            </div>)
                        }
                    </div>  
                </div>

               
            </div>
        </div>

    </>
}


export default Area
