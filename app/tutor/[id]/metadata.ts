import { Metadata } from "next";
import tutorsData from "@/data/tutors.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tutor = tutorsData.find((t) => t.id === id);

  if (!tutor) {
    return {
      title: "Gia sư không tìm thấy",
    };
  }

  return {
    title: `${tutor.name} - Gia sư ${tutor.subjects.join(", ")} | Gia Sư Tiếng Anh`,
    description: tutor.short_bio,
    openGraph: {
      title: `${tutor.name} - Gia sư ${tutor.subjects.join(", ")}`,
      description: tutor.short_bio,
      type: "profile",
    },
  };
}


