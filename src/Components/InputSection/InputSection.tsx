import React from "react";
import "antd/dist/antd.css";
import { Select, InputNumber } from "antd";

import {
  InputsWrapper,
  LocationTimeInputsContainer,
  ButtonsContainer,
  AppButton,
} from "./InputSection.style";

const { Option } = Select;

export default function InputSection() {
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val: string) {
    console.log("search:", val);
  }

  return (
    <InputsWrapper>
      <LocationTimeInputsContainer>
        <Select
          showSearch
          style={{ width: 100, height: 35 }}
          placeholder="Origem"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
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
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="011">011</Option>
          <Option value="016">016</Option>
          <Option value="017">017</Option>
          <Option value="018">018</Option>
        </Select>

        <InputNumber
          style={{ width: 115 }}
          min={1}
          max={10000}
          placeholder="Tempo (min)"
          onChange={onChange}
        />
      </LocationTimeInputsContainer>

      <Select
        showSearch
        style={{ width: 360, height: 35 }}
        placeholder="Plano FaleMais"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="falemais 30">FaleMais 30</Option>
        <Option value="falemais 60">FaleMais 60</Option>
        <Option value="falemais 120">FaleMais 120</Option>
      </Select>

      <ButtonsContainer>
        <AppButton>
          <p>
            Limpar
          </p>
        </AppButton>
        <AppButton>
          <p>
            Calcular
          </p>
        </AppButton>
      </ButtonsContainer>
    </InputsWrapper>
  );
}
