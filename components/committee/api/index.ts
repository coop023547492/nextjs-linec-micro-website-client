import { COOP_DOMAIN_LANDING_API } from "@/utils/constants";
import axios from "axios";

export const getCommitteeCategories = async (catId: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_personnel_by_category.php`,
      {
        params: { category: catId },
      }
    );
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching committee categories:", error);
    throw error;
  }
};
