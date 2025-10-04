import * as allReducers from "../../../store/reducer";
import Combiner from "./Combiner";

export const predefinedStore = Combiner(allReducers);
export default predefinedStore;