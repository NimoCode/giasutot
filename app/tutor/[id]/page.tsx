import { notFound } from "next/navigation";
import tutorsData from "@/data/tutors.json";
import TutorDetail from "@/components/tutor/TutorDetail";
import { generateMetadata } from "./metadata";

export { generateMetadata };

interface TutorDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tutorsData.map((tutor) => ({
    id: tutor.id,
  }));
}

export default async function TutorDetailPage({
  params,
}: TutorDetailPageProps) {
  const { id } = await params;
  const tutor = tutorsData.find((t) => t.id === id);

  if (!tutor) {
    notFound();
  }

  return <TutorDetail tutor={tutor} />;
}

