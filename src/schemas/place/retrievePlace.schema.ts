import * as yup from "yup";
import { IPlace } from "../../interfaces/place";

export const retrievePlaceSchema: yup.SchemaOf<IPlace> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  latitude: yup.string().required(),
  longitude: yup.string().required(),
});
