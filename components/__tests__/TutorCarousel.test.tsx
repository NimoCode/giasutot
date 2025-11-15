import { render, screen } from "@testing-library/react";
import TutorCarousel from "../tutor/TutorCarousel";
import type { Tutor } from "@/types";

const mockTutors: Tutor[] = [
  {
    id: "tutor-1",
    name: "Nguyễn Thảo",
    avatar: "",
    subjects: ["Tiếng Anh"],
    levels: ["Tiểu học"],
    rating: 4.9,
    price_per_hour: 200000,
    short_bio: "Test bio 1",
    long_bio: "Long bio 1",
    teaching_experience_years: 5,
    education: "Test",
    sample_video_url: "",
    tags: ["Online"],
    gallery_images: [],
    contact: { email: "test@example.com", phone: "0900123456" },
    availability: ["Mon 17:00"],
    location: "Hà Nội",
  },
  {
    id: "tutor-2",
    name: "Trần Minh Anh",
    avatar: "",
    subjects: ["Tiếng Anh"],
    levels: ["Tiểu học"],
    rating: 4.8,
    price_per_hour: 180000,
    short_bio: "Test bio 2",
    long_bio: "Long bio 2",
    teaching_experience_years: 3,
    education: "Test",
    sample_video_url: "",
    tags: ["Offline"],
    gallery_images: [],
    contact: { email: "test2@example.com", phone: "0900123457" },
    availability: ["Tue 18:00"],
    location: "Hà Nội",
  },
];

describe("TutorCarousel", () => {
  it("renders tutors in carousel", () => {
    render(<TutorCarousel tutors={mockTutors} />);

    expect(screen.getByText("Nguyễn Thảo")).toBeInTheDocument();
    expect(screen.getByText("Trần Minh Anh")).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<TutorCarousel tutors={mockTutors} />);

    const prevButton = screen.getByLabelText(/previous tutor/i);
    const nextButton = screen.getByLabelText(/next tutor/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});


