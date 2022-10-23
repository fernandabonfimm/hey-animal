import React from "react";
import Base from "../../components/BaseLayout";
import { MdOutlineBiotech } from "react-icons/md";

const Profile = () => {
  return (
    <Base
      goTo={"/profile"}
      Icon={<MdOutlineBiotech />}
      goToName={"Perfil do Usuário"}
      titlepage={"ao seu perfil"}
      nameofuser={"Fernanda Bonfim"}
      children={
        <>
          <h1>Hello World!</h1>
        </>
      }
    />
  );
};
export default Profile;
