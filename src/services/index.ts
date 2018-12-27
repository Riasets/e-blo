import authFetches from './auth';
import scheduleFetches from "./schedule";

const fetches = {
  ...authFetches,
  ...scheduleFetches,
};

export default fetches;
