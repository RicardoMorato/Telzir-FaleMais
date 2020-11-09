import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select, InputNumber } from "antd";
import { v4 as uuidv4 } from "uuid";

import {
  InputsWrapper,
  LocationTimeInputsContainer,
  AppButton,
} from "./InputSection.style";

const { Option } = Select;

export default function InputSection({
  handleDataUpdate,
  tableData,
}: {
  handleDataUpdate: Function;
  tableData: Array<Object>;
}) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [plan, setPlan] = useState("");

  function handleOptions(otherInputsName: string) {
    if (otherInputsName.length === 0) {
      return (
        <>
          <Option value="011">011</Option>
          <Option value="016">016</Option>
          <Option value="017">017</Option>
          <Option value="018">018</Option>
        </>
      );
    } else if (otherInputsName === "011") {
      return (
        <>
          <Option value="016">016</Option>
          <Option value="017">017</Option>
          <Option value="018">018</Option>
        </>
      );
    } else {
      return <Option value="011">011</Option>;
    }
  }

  function handleSubmit() {
    if (from && to && time && plan) {
      handleDataUpdate([
        ...tableData,
        {
          key: uuidv4(),
          origem: from,
          destino: to,
          tempo: time,
          plano: plan,
        },
      ]);
    } else {
      alert(
        "Todas as informações devem ser preenchidas para calcularmos corretamente"
      );
    }
  }

  console.log(tableData);

  return (
    <InputsWrapper>
      <LocationTimeInputsContainer>
        <Select
          showSearch
          style={{ width: 100, height: 35 }}
          placeholder="Origem"
          optionFilterProp="children"
          onChange={(value) => setFrom(value.toString())}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="011">011</Option>
          <Option value="016">016</Option>
          <Option value="017">017</Option>
          <Option value="018">018</Option>
        </Select>

        <Select
          showSearch
          style={{ width: 100, height: 35 }}
          placeholder="Destino"
          optionFilterProp="children"
          onChange={(value) => setTo(value.toString())}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {handleOptions(from)}
        </Select>

        <InputNumber
          style={{ width: 115 }}
          min={1}
          max={10000}
          placeholder="Tempo (min)"
          onChange={(value) => {
            if (value) setTime(value.toString());
          }}
        />
      </LocationTimeInputsContainer>

      <Select
        showSearch
        style={{ width: 360, height: 35 }}
        placeholder="Plano FaleMais"
        optionFilterProp="children"
        onChange={(value) => setPlan(value.toString())}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="falemais 30">FaleMais 30</Option>
        <Option value="falemais 60">FaleMais 60</Option>
        <Option value="falemais 120">FaleMais 120</Option>
      </Select>

      <AppButton onClick={handleSubmit}>
        <p>Calcular</p>
      </AppButton>
    </InputsWrapper>
  );
}
