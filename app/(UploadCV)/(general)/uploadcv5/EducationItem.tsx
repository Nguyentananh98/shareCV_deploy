"use client";

import { IconButton } from "@mui/material";
import { EducationItemProps } from "./type";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import CustomSelect from "@/common/components/control/select/Select";
import { Input } from "@/common/components/control/Input";
import { academicDegree } from "./mockData";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function EducationItem({
  index,
  initialValues,
  newest,
  onAdd,
  onRemove,
  onChange,
}: EducationItemProps) {
  return (
    <div className={`flex flex-col gap-5  ${!newest && "border-t-2 border-r-0 border-b-0 border-l-0 border-solid border-slate-200"}`}>
      <div className="flex flex-row gap-10 items-center">
        <span className="font-bold text-primary">{`Bằng cấp ${
          index + 1
        }`}</span>
        {newest ? (
          <IconButton onClick={onAdd}>
            <SquareAdd className="fill-green-500" />
          </IconButton>
        ) : (
          <IconButton onClick={() => onRemove(index)}>
            <SquareXmark className="fill-red-600" />
          </IconButton>
        )}
      </div>
      <div className="flex flex-row gap-10">
          <CustomSelect
          instanceId={"academic_degree"}
            isMulti={false}
            options={academicDegree}
            value={{ label: initialValues.academic_degree, value: 0 }}
            label="Học vị"
            onChange={(value) =>
              onChange(index, "academic_degree", value?.label)
            }
          />
        <Input
          label="Tên trường, tổ chức"
          placeholder="Please type here"
          value={initialValues.university}
          onChange={(e) => onChange(index, "university", e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-10">
        <Input
          label="Chuyên ngành"
          placeholder="Please type here"
          onChange={(e) => onChange(index, "major", e.target.value)}
          value={initialValues.major}
        />
        <Input
          label="GPA"
          placeholder="Please type here"
          onChange={(e) => onChange(index, "gpa", e.target.value)}
          value={initialValues.gpa}
        />
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-full">
          <p className="font-medium text-primary  text-sm">
            Thời gian bắt đầu<span className="text-red-500">*</span>
          </p>
          <DatePicker
            value={dayjs(initialValues.start_date)}
            onChange={(date) => onChange(index, "start_date", date?.toDate())}
            slotProps={{
              openPickerButton: {
                color: "primary",
              },
              textField: {
                fullWidth: true,
                sx: {
                  bgcolor: "white",
                  fieldset: {
                    borderColor: "primary.main",
                    borderRadius: "10px",
                  },
                },
              },
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-medium text-primary text-sm">
            Thời gian kết thúc<span className="text-red-500">*</span>
          </p>
          <DatePicker
            value={dayjs(initialValues.end_date)}
            onChange={(date) => onChange(index, "end_date", date?.toDate())}
            slotProps={{
              openPickerButton: {
                color: "primary",
              },
              textField: {
                fullWidth: true,
                sx: {
                  bgcolor: "white",
                  fieldset: {
                    borderColor: "primary.main",
                    borderRadius: "10px",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
