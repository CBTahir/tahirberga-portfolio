import { profile } from "@/lib/profile";

export function GET() {
  return Response.json({
    name: profile.name,
    url: profile.domain,
    headline: profile.headline,
    location: profile.location,
    description: profile.intro,
    about: profile.about,
    current: profile.current,
    security: profile.security,
    direction: profile.direction,
    interests: profile.interests,
    experience: profile.experience,
    projects: profile.projects,
    links: profile.links,
  });
}
