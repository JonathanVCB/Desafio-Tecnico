import * as yup from "yup";
import { IUserRequest } from "../../interfaces/user";

export const userCreateRequestSchema: yup.SchemaOf<IUserRequest> = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
