import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.websiteUrl;
  const now = new Date();

  const staticPages = [
    "",
    "/services",
    "/about",
    "/industries",
    "/faq",
    "/contact",
    "/areas-we-serve",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: service.isEmergency ? 0.95 : 0.85,
  }));

  const industryPages = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...industryPages];
}
