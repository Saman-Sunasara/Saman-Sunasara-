import { useState } from 'react'
import { projects } from '../data/portfolio'
import { getProjectExplanation } from '../lib/chatLogic'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const [explanations, setExplanations] = useState({})
  const [loadingProject, setLoadingProject] = useState('')

  async function handleExplain(projectName) {
    setLoadingProject(projectName)

    window.setTimeout(() => {
      setExplanations((current) => ({
        ...current,
        [projectName]: getProjectExplanation(projectName),
      }))
      setLoadingProject('')
    }, 700)
  }

  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="A collection of projects focused on solving real-world problems through AI and scalable applications."
        />
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onExplain={handleExplain}
              explanation={explanations[project.title]}
              loading={loadingProject === project.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
