import { COOP_DOMAIN_LANDING_API } from "@/utils/constants";
import axios from "axios";

export const getPerformanceAll = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_performance_all.php`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching regulations:", error);
    throw error;
  }
};
