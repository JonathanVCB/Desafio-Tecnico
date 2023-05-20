import * as yup from "yup";
import { IPlaceRequest } from "../../interfaces/place";

export const CreatePlaceRequestSchema: yup.SchemaOf<IPlaceRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    latitude: yup.string().required(),
    longitude: yup.string().required(),
  });
