import { COOP_DOMAIN_LANDING_API } from "@/utils/constants";
import axios from "axios";

export const getPerformanceData = async (category?: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_updatedata_all.php`,
      {
        params: {
          category: category,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching performance data:", error);
    return null;
  }
};

export const getBanners = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_banners.php`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching performance data:", error);
    return [];
  }
};
