import { render, screen } from "@testing-library/react";
import TutorCard from "../tutor/TutorCard";
import type { Tutor } from "@/types";

const mockTutor: Tutor = {
  id: "tutor-1",
  name: "Nguyễn Thảo",
  avatar: "/test-avatar.jpg",
  subjects: ["Tiếng Anh"],
  levels: ["Tiểu học"],
  rating: 4.9,
  price_per_hour: 200000,
  short_bio: "Test bio",
  long_bio: "Long test bio",
  teaching_experience_years: 5,
  education: "Test education",
  sample_video_url: "",
  tags: ["Online", "Offline"],
  gallery_images: [],
  contact: {
    email: "test@example.com",
    phone: "0900123456",
  },
  availability: ["Mon 17:00-19:00"],
  location: "Hà Nội",
};

describe("TutorCard", () => {
  it("renders tutor information correctly", () => {
    render(<TutorCard tutor={mockTutor} />);

    expect(screen.getByText("Nguyễn Thảo")).toBeInTheDocument();
    expect(screen.getByText("Tiếng Anh")).toBeInTheDocument();
    expect(screen.getByText("Test bio")).toBeInTheDocument();
    expect(screen.getByText("Hà Nội")).toBeInTheDocument();
    expect(screen.getByText(/200.000/)).toBeInTheDocument();
  });

  it("renders link to tutor detail page", () => {
    render(<TutorCard tutor={mockTutor} />);

    const link = screen.getByRole("link", { name: /xem chi tiết/i });
    expect(link).toHaveAttribute("href", "/tutor/tutor-1");
  });

  it("displays rating correctly", () => {
    render(<TutorCard tutor={mockTutor} />);

    expect(screen.getByText(/4.9/)).toBeInTheDocument();
  });
});


