import { Input } from "@/common/components/control/Input";
import IconButton from "@mui/material/IconButton";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import { AwardItemProps } from "./type";
import { Textarea } from "@/common/components/control/textarea";


export default function AwardItem({
    index,
  initialValues,
  newest,
  onAdd,
  onRemove,
  onChange,
}: AwardItemProps) {
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
            label="Tên giải thưởng"
            placeholder="Please type here"
            value={initialValues.name_award}
            onChange={(e) => onChange(index, "name_award", e.target.value)}
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
          
        </div>
        <div>
            <Textarea
            label="Mô tả"
            rows={6}
            placeholder="Please type here"
            value={initialValues.description}
            onChange={(e) => onChange(index, "description", e.target.value)}
            />
        </div>
        
      </div>
    );
            }