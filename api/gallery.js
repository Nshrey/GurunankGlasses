import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const folder = process.env.CLOUDINARY_GALLERY_FOLDER || "gurunanak-work";

    const result = await cloudinary.search
      .expression(`folder="${folder}" AND resource_type:image`)
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    const images = result.resources.map((img) => ({
      publicId: img.public_id,
      url: img.secure_url.replace("/upload/", "/upload/f_auto,q_auto,w_1000/"),
      width: img.width,
      height: img.height,
      alt: img.public_id.split("/").pop(),
    }));

    res.status(200).json({ images });
  } catch (error) {
    console.error("Cloudinary gallery error:", error);
    res.status(500).json({ error: "Failed to load gallery images" });
  }
}
