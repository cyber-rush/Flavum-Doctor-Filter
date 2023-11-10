import React from "react";
import FaqItem from "./FaqItem";
import { faqs } from "../../assets/data/faqs";

export default function FaqList() {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </ul>
  );
}
