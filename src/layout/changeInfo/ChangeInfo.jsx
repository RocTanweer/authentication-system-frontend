import {
  InputCard,
  StyledSection,
  ChangeInfoForm,
  WrapperCI,
  InputCI,
} from "./ChangeInfo.styled";
import Button from "../../component/button/Button";
import Input from "../../component/input/Input";

const formInputs = ["name", "bio", "phone", "email", "password"];

/**
 *
 * @param {String} name name of the field in the Change Info form
 * @param {Number} index Index of the name in formInputs array
 * @returns jsx that forms one segment of the Change form
 */
const formUnitGenerator = (name, index) => {
  return (
    <div key={index}>
      <label htmlFor={name}>{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
      <InputCard
        width={416.93}
        height={name === "bio" ? 91.58 : 52}
        borderRadius={12}
      >
        <InputCI
          id={name}
          small
          type="text"
          name={name}
          placeholder={`Enter your ${name}...`}
          autoComplete="off"
          width="100%"
          as={`${name === "bio" ? "textarea" : ""}`}
          className={`${name === "bio" ? "textarea" : ""}`}
        />
      </InputCard>
    </div>
  );
};

function ChangeInfo() {
  return (
    <StyledSection>
      <WrapperCI width={845.91} height={827.56} borderRadius={12}>
        <header>
          <div>
            <h2>Change Info</h2>
            <p>Changes will be reflected to every services</p>
          </div>
        </header>
        <ChangeInfoForm>
          <div>
            <label htmlFor="picFile">
              <img
                src={"https://via.placeholder.com/72x72"}
                alt="profile-pic"
              />
            </label>
            <input type="file" id="picFile" name="photo" />
          </div>
          {formInputs.map((inputs, index) => {
            return formUnitGenerator(inputs, index);
          })}
          <Button type="submit" primary sm>
            Save
          </Button>
        </ChangeInfoForm>
      </WrapperCI>
    </StyledSection>
  );
}

export default ChangeInfo;
