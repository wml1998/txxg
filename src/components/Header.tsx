import React, { useState, useEffect } from 'react'
import { TotalType } from '../utils/types'
import "./header.module.scss"


const Hospital = (props: { total: TotalType }) => {
    console.log('total...', props.total)
    return <div>
        <div className='head'>
            <div className="jump">追踪进展</div>
            <div className="jump_zhuizong">更多疫情</div>
            <div className="publish">数据来源：国家及各地卫健委每日信息发布</div>
        </div>
        <div className='timeBox'>
            {
                props.total &&
                <div>
                    <p>统计截至 <span>{props.total.lastUpdateTime}</span></p>
                    <div className="fourBox">
                        <div className='confirm_box icbar'>
                            <div className="add_confirm"><p>+{props.total.chinaAdd.confirm}</p>
                            
                            <p>{props.total.chinaTotal.confirm}</p></div>
                            <div className='total_confirm'>
                                <p>全国确诊</p>
                            </div>
                        </div>
                        <div className='suspect_box icbar'>
                            <div className='add_suspect'>{props.total.chinaAdd.suspect}</div>
                            <div className='total_suspect'><p>{props.total.chinaTotal.suspect}</p>
                                <p>疑似病例</p>
                            </div>
                        </div>
                        <div className='heal_box icbar'>
                            <div className='add_heal'>+{props.total.chinaAdd.heal}</div>
                            <div className='total_heal'><p>{props.total.chinaTotal.heal}</p>
                                <p>治愈人数</p>
                            </div>
                        </div>
                        <div className='dead_box icbar'>
                            <div className='add_dead'>+{props.total.chinaAdd.dead}</div>
                            <div className='total_dead'><p>{props.total.chinaTotal.dead}</p>
                                <p>死亡人数</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Hospital
