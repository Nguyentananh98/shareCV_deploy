import { DatePicker } from "@mui/x-date-pickers";
import { ProjectItemProps } from "./type";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import CustomSelect from "@/common/components/control/select/Select";
import { Input } from "@/common/components/control/Input";


export default function ProjectItem({
    index,
  initialValues,
  newest,
  onAdd,
  onRemove,
  onChange,
  onAddAward,
  onRemoveAward,
  onChangeAward,
}: ProjectItemProps) {
    return (
      <div
        className={`flex flex-col gap-5  ${
          !newest &&
          "border-t-2 border-r-0 border-b-0 border-l-0 border-solid border-slate-200"
        }`}
      >
        <div className="flex flex-row gap-10 items-center">
          <span className="font-bold text-primary">{`Dự án ${index + 1}`}</span>
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
        <div></div>
        <div className="flex flex-row gap-10">
          <Input
            label="Tên dự án"
            placeholder="Please type here"
            value={initialValues.name_project}
            onChange={(e) => onChange(index, "name_project", e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-full">
            <p className="font-medium text-primary  text-sm">From</p>
            <DatePicker
              views={["month", "year"]}
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
            <p className="font-medium text-primary text-sm">To</p>
            <DatePicker
              views={["month", "year"]}
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
        <div>
          <div className="flex flex-row gap-5">
          <p className="block mb-2 text-sm font-medium text-primary">
            Thành tựu
          </p>
          <IconButton onClick={() => onAddAward(index)}>
            <SquareAdd className="fill-green-500" />
          </IconButton>
          </div>
          <div className="flex flex-col gap-5 my-0">
            {initialValues.awards.map((item, awardIndex) => (
              <div key={awardIndex} className="flex flex-row gap-5">
                <Input
                  value={item}
                  placeholder="Please type here"
                  onChange={(e) =>
                    onChangeAward(index, awardIndex, e.target.value)
                  }
                />
                 <IconButton onClick={() => onRemoveAward(index,awardIndex)}>
              <SquareXmark className="fill-red-600" />
            </IconButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}