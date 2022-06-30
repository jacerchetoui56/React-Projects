import React from 'react'
import Project from './Project'
import projects from './projectData'

export default function Main() {
    return (
        <main>
            {
                projects.map(project => {
                    return <Project infos={project} />
                })
            }
        </main>
    )
}
