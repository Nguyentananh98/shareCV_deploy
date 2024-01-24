"use client";

import { useState } from "react";
import { ProjectFormProps, initialProjectForm } from "./type";
import ProjectItem from "./ProjectItem";

export default function UploadCV7() {
  const [projects, setProjects] = useState<ProjectFormProps[]>([
    initialProjectForm,
  ]);

  const handleRemoveProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleAddProject = () => {
    setProjects([...projects, initialProjectForm]);
  };

  const handleProjectChange = (index: number, key: string, value: any) => {
    setProjects(
      projects.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  const handleAddAward = (index: number) => {
    setProjects(
      projects.map((item, i) =>
        i === index ? { ...item, awards: [...item.awards, ""] } : item
      )
    );
  };

  const handleRemoveAward = (index: number, awardIndex: number) => {
    setProjects(
      projects.map((item, i) =>
        i === index
          ? { ...item, awards: item.awards.filter((_, j) => j !== awardIndex) }
          : item
      )
    );
  };

  const handleChangeAward = (
    index: number,
    awardIndex: number,
    value: string
  ) => {
    setProjects(
      projects.map((project, i) =>
        i === index
          ? {
              ...project,
              awards: project.awards.map((award, j) =>
                j === awardIndex ? value : award
              ),
            }
          : project
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="p-10 bg-background rounded-3xl">
          <div className="flex flex-col-reverse gap-10">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                index={index}
                newest={index === projects.length - 1}
                initialValues={project}
                onAddAward={handleAddAward}
                onRemoveAward={handleRemoveAward}
                onChangeAward={handleChangeAward}
                onAdd={handleAddProject}
                onRemove={handleRemoveProject}
                onChange={handleProjectChange}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
