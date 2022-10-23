import React from "react";
import Base from "../../components/BaseLayout";
import { MdOutlineBiotech } from "react-icons/md";

const Forms = () => {
  return (
    <Base
      goTo={"/forms"}
      Icon={<MdOutlineBiotech />}
      goToName={"Formulário"}
      titlepage={"ao Formulário"}
      nameofuser={"Fernanda Bonfim"}
      children={
        <>
          <h1>Hello World!</h1>
        </>
      }
    />
  );
};
export default Forms;
