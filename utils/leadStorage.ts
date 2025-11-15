import type { Lead } from "@/types";

export function saveLead(lead: Lead & { tutorId: string; tutorName: string }) {
  // Save to localStorage only (no download)
  // Email is now sent via API route
  const existingLeads = getLeads();
  const updatedLeads = [...existingLeads, lead];
  localStorage.setItem("leads", JSON.stringify(updatedLeads));

  // Download file is disabled - data is sent via email instead
  // downloadLeadsJSON(updatedLeads);
}

export function getLeads(): (Lead & { tutorId: string; tutorName: string })[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("leads");
  return stored ? JSON.parse(stored) : [];
}

export function downloadLeadsJSON(leads: (Lead & { tutorId: string; tutorName: string })[]) {
  // Create a downloadable JSON file
  const dataStr = JSON.stringify(leads, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `leads-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


