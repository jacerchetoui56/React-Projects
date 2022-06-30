import React from 'react'


export default function Project(props) {
    const image = props.infos.imageUrl
    return (
        <>
            <a target='_blank' href={props.infos.link} rel="noreferrer">
                <div className="project">
                    <img src={image} alt="" />
                    <h3>{props.infos.name}</h3>
                    <div className="keywords">
                        {props.infos.keywords.map(keyword => {
                            return <span>{keyword}</span>
                        })}
                    </div>
                </div>
            </a>
        </>
    )
}
