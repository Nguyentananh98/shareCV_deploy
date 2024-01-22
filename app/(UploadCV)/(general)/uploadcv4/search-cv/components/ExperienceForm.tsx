"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { ExperienceFormProps } from "./type";

function ExperienceForm() {
  const [experiences, setExperiences] = useState<ExperienceFormProps[]>([
    {
      company_name: "",
      job_title: "",
      department: "",
      position: [],
      responsibilities: [],
      start_date: new Date(),
      end_date: new Date(),
    },
  ]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        company_name: "",
        job_title: "",
        department: "",
        position: [],
        responsibilities: [],
        start_date: new Date(),
        end_date: new Date(),
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (index: number, key: string, value: any) => {
    setExperiences(
      experiences.map((experience, i) =>
        i === index ? { ...experience, [key]: value } : experience
      )
    );
  };

  return (
    <Box display="flex" flexDirection="column" width="100%" maxWidth="1000px">
      <Box display="flex" flexDirection="column-reverse" className="gap-6">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            index={index}
            newest={index === experiences.length - 1}
            initialValues={experience}
            onAdd={handleAddExperience}
            onRemove={handleRemoveExperience}
            onChange={handleExperienceChange}
          />
        ))}
      </Box>
      <div className="w-full flex justify-end my-4">
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "10px 30px",
            borderRadius: "22px",
          }}
        >
          Tiếp tục
        </Button>
      </div>
    </Box>
  );
}

export default ExperienceForm;
