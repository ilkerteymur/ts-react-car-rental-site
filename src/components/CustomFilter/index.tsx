import Select from "react-select";
import { OptionType } from "../../types";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // url'e eklenecek parametreyi belirleme
    const key = title === "Yakıt Tip" ? "fuel" : "year";

    // eğer bir değer seçildiyse onu url'e eklme
    if (selected?.value) {
      params.set(key, selected.value.toLocaleLowerCase());
    } else {
      // eğer seçilen seçeneğin value'su boşsa url'den parametreyi kaldır
      params.delete(key);
    }
    // url'i güncelleme
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e) => setSelected(e)}
        placeholder={title}
        options={options}
        className="min-w-[100px] text-black"
      />
    </div>
  );
};

export default CustomFilter;
