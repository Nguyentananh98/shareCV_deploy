import { DatePicker } from "@mui/x-date-pickers";
import { CertificateItemProps } from "./types";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import CustomSelect from "@/common/components/control/select/Select";
import { Input } from "@/common/components/control/Input";
import { languageOptions, languageCertificationOptions } from "./mockData";

export default function CertificateItem({
  index,
  initialValues,
  newest,
  onAdd,
  onRemove,
  onChange,
}: CertificateItemProps) {
  return (
    <div
      className={`flex flex-col gap-5  ${
        !newest &&
        "border-t-2 border-r-0 border-b-0 border-l-0 border-solid border-slate-200"
      }`}
    >
      <div className="flex flex-row gap-10 items-center">
        <span className="font-bold text-primary">{`Chứng chỉ ${
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
      <div>
        <CustomSelect
          instanceId={"language"}
          isMulti={false}
          options={languageOptions}
          label="Tên ngoại ngữ"
          value={{ label: initialValues.language, value: "" }}
          onChange={(value) => onChange(index, "language", value?.label)}
        />
      </div>
      <div className="flex flex-row gap-10">
        <CustomSelect
          label="Tên chứng chỉ"
          instanceId={"certificate_name"}
          isMulti={false}
          options={languageCertificationOptions}
          value={{ label: initialValues.certificate, value: "" }}
          onChange={(value) => onChange(index, "certificate", value?.label)}
        />
        <Input
          label="Level"
          placeholder="Please type here"
          value={initialValues.level}
          onChange={(e) => onChange(index, "level", e.target.value)}
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
    </div>
  );
}
