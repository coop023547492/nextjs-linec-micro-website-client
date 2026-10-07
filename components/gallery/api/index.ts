import { COOP_DOMAIN_LANDING_API } from "@/utils/constants";
import axios from "axios";

export const getGalleryFeatues = async () => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_gallery_features.php`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery features:", error);
    return [];
  }
};

export const getGalleryById = async (galleryId: string) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_gallery_by_id.php`,
      {
        params: { gallery_id: galleryId },
      }
    );
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery id:", error);
    return null;
  }
};

export const getGallerys = async ({ page }: { page: string }) => {
  try {
    const response = await axios.get(
      `${COOP_DOMAIN_LANDING_API}/get_gallery_all.php`,
      {
        params: { page },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery features:", error);
    return [];
  }
};
