import * as React from "react";
import { useForm } from "react-hook-form";
import formimage from "./formimage.svg";
import { makeStyles } from "@material-ui/core/styles";
import "./Form.css";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  const classes = useStyles();
  return (
    <div>
      <h1 className="h1">
        <defs />
        <g stroke="none" fill="none">
          <g>
            <rect
              id="Rectangle"
              fill="#EC5990"
              x="0"
              y="0"
              width="150"
              height="150"
              rx="20"
            />
          </g>
        </g>
        Let's Talk
      </h1>
      <Grid container>
        <Grid item xs={12} sm={7} md={7}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First name" />
            <input {...register("lastName")} placeholder="Last name" />
            <select {...register("category")}>
              <option value="">Select...</option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
            </select>

            <input type="submit" />
          </form>
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <img src={formimage} className="formimg" alt="" />
        </Grid>
      </Grid>
    </div>
  );
}
