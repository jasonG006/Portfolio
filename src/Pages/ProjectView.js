import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from "@mui/material"
import { useLocation } from 'react-router-dom'
import { PiKeyReturnFill } from "react-icons/pi"
import TextField from '../Components/TextField'
import "../Styles/ProjectView.css"
import Carousel from '../Components/Carousel/Carousel'
import ExternalWidget from '../Components/ExternalWidget/ExternalWidget'

export default function ProjectView()
{
    const { state } = useLocation()
    const navigate = useNavigate()

    if (!state || !state.ProjectInfo)
    {
        return <div>Not Found</div>
    }

    const { ProjectInfo } = state
    

    return (
        <div className='ProjectInfo_Container'>
            <Tooltip title={"Return"} arrow> 
                <div className='Return_Button' onClick={() => navigate('/')}>
                    <PiKeyReturnFill />
                </div>
            </Tooltip>
            <div className='Project_Conatiner' >
                <Carousel Images={ProjectInfo.ProjectCarouselImages} />
                <div className='Project_Content'>
                    <div className='Project_Content_Info'>
                        <h2>{ProjectInfo && ProjectInfo.ProjectTitle}</h2>
                        {ProjectInfo.ProjectTags &&
                            <div className='All_Tags'>
                                {ProjectInfo.ProjectTags && ProjectInfo.ProjectTags.map((Element, Id) =>
                                {
                                    return (<span className='Tag' id={Id}>{Element}</span>)
                                })}
                            </div>
                        }
                    </div>
                    {ProjectInfo.EmbedLink &&
                    <>
                        <ExternalWidget title={ProjectInfo.ProjectTitle} src={ProjectInfo.EmbedLink}/>
                    </>
                    }
                </div>
            </div>
            <div className='ProjectInfo_Contents'>
                {ProjectInfo.ProjectOverview &&
                    <TextField Title={"Project Overview"} Message={ProjectInfo.ProjectOverview}/>
                }
                <div className='Content_Box'>
                    {!ProjectInfo.ProjectShowcaseVideo?
                    (
                        <div className='Project-Showcase-Video-Skeleton'>
                            <p> No Showcase Video</p>
                        </div>
                    ) :
                    (
                        <iframe title="Project Showcase Video" src={ProjectInfo.ProjectShowcaseVideo} frameBorder="0" allowFullScreen/>
                    )}
                </div>
                {ProjectInfo.ProjectRole &&
                    <TextField Title={"My Role"} Message={ProjectInfo.ProjectRole}/>
                }
                {ProjectInfo.TechnicalDetails &&
                    <TextField Title={"Technical Details"} Message={ProjectInfo.TechnicalDetails}/>
                }
                {ProjectInfo.Collaboration &&
                    <TextField Title={"Collaboration"} Message={ProjectInfo.Collaboration}/>
                }
                {ProjectInfo.Learnings &&
                    <TextField Title={"Learnings"} Message={ProjectInfo.Learnings}/>
                }
                {ProjectInfo.FuturePlans &&
                    <TextField Title={"Future Plans"} Message={ProjectInfo.FuturePlans}/>
                }
            </div>
        </div>
    )
}