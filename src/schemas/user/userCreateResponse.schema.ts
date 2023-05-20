import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse } from "../../interfaces/user";

export const userCreateResponseSchema: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    email: yup.string().email().required(),
  });
