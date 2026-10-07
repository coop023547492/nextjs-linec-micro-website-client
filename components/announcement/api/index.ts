import { COOP_DOMAIN_LANDING_API } from "@/utils/constants";
import axios from "axios";

export const getAnnouncementFeatures = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_announcement_features.php`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching announcement features:", error);
  }
};

export const getAnnouncements = async ({ page }: { page: string }) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_announcement_all.php`,
      {
        params: {
          page,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching announcements:", error);
  }
};

export const getAnnouncementById = async (id: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_announcement_by_id.php`,
      {
        params: {
          id: id,
        },
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching announcements:", error);
  }
};
