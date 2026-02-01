import React, { useReducer } from "react";
import "../form.css";

const Form_useReducer = () => {
  const initialState = {
    username: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmpassword: { value: "", error: "" },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_VALUE":
        //dispatch中設置的field欄位決定哪個欄位要更動
        //[action.field] : 把action.field當作物件key(username,email,password,confirmpassword)
        //...state[action.field] : copy某欄位的所有屬性
        //value:action.value : 其欄位value屬性更新
        return {
          ...state,
          [action.field]: { ...state[action.field], value: action.value },
        };
      case "VALIDATE": {
        //copy state物件給next
        const next = { ...state };

        if (next.username.value.length > 8) {
          next.username = { ...next.username, error: "" };
        } else {
          next.username = {
            ...next.username,
            error: "Username must be 8 length long.",
          };
        }

        if (next.email.value.includes("@gmail")) {
          next.email = { ...next.email, error: "" };
        } else {
          next.email = { ...next.email, error: "Email should have @gmail" };
        }

        if (next.password.value.length > 8) {
          next.password = { ...next.password, error: "" };
        } else {
          next.password = {
            ...next.password,
            error: "Password should be 8 letters long.",
          };
        }

        if (
          next.confirmpassword.value !== "" &&
          next.confirmpassword.value === next.password.value
        ) {
          next.confirmpassword = { ...next.confirmpassword, error: "" };
        } else {
          next.confirmpassword = {
            ...next.confirmpassword,
            error: "Password didn't match.",
          };
        }

        return next;
      }
      //當dispatch設置不明type時，保底資料(原樣)回傳
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: state.username.error ? "red" : "green" }}
            value={state.username.value}
            onChange={(e) =>
              dispatch({
                type: "SET_VALUE",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <p className="error">{state.username.error}</p>

          <input
            type="Email"
            placeholder="Email"
            style={{ borderColor: state.email.error ? "red" : "green" }}
            value={state.email.value}
            onChange={(e) =>
              dispatch({
                type: "SET_VALUE",
                field: "email",
                value: e.target.value,
              })
            }
          />
          <p className="error">{state.email.error}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: state.password.error ? "red" : "green" }}
            value={state.password.value}
            onChange={(e) =>
              dispatch({
                type: "SET_VALUE",
                field: "password",
                value: e.target.value,
              })
            }
          />
          <p className="error">{state.password.error}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{
              borderColor: state.confirmpassword.error ? "red" : "green",
            }}
            value={state.confirmpassword.value}
            onChange={(e) =>
              dispatch({
                type: "SET_VALUE",
                field: "confirmpassword",
                value: e.target.value,
              })
            }
          />
          <p className="error">{state.confirmpassword.error}</p>

          <button
            type="button"
            className="submit-btn"
            onClick={() => dispatch({ type: "VALIDATE" })}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form_useReducer;
