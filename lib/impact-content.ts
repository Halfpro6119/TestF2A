/**
 * Shared impact content - videos and articles.
 * Used by homepage, impact catalogue, and individual article pages.
 */

export interface VideoTestimonial {
  name: string;
  quote: string;
  videoSrc: string;
  location: string;
}

export interface ImpactArticle {
  slug: string;
  title: string;
  excerpt: string;
  location: string;
  date: string;
  image?: string;
  content: string;
}

export const videos: VideoTestimonial[] = [
  {
    name: "Story of Change 1",
    quote:
      "Hear directly from those whose lives have been transformed by access to ostomy supplies.",
    videoSrc: "/videos/F2A Video Testimonial 1.mp4",
    location: "Africa",
  },
  {
    name: "Story of Change 2",
    quote:
      "Real stories of dignity, hope, and community support.",
    videoSrc: "/videos/F2A Video Testimonial 2.mp4",
    location: "Africa",
  },
  {
    name: "Story of Change 3",
    quote: "How your support is changing lives every day.",
    videoSrc: "/videos/F2A Video Testimonial 3.mp4",
    location: "Africa",
  },
  {
    name: "Story of Change 4",
    quote: "Together we are restoring hope and human worth.",
    videoSrc: "/videos/F2A Video Testimonial 4.mp4",
    location: "Africa",
  },
];

export const articles: ImpactArticle[] = [
  {
    slug: "dignity-restored",
    title: "Dignity Restored: John's Journey",
    excerpt:
      "After years of struggling with limited access to supplies, John found hope through Footprints to Africa. His story shows how a simple delivery can transform a life.",
    location: "South Africa",
    date: "2025-01-15",
    content: `
      <p>John had been living with an ostomy for over five years when he first heard about Footprints to Africa. Like many ostomates in under-resourced communities, he had been making do with improvised solutions when supplies ran out—often leading to infections and social isolation.</p>
      
      <p>"I felt like I had lost my dignity," John recalls. "I couldn't work, I couldn't be around people. I was ashamed."</p>
      
      <p>When a shipment of supplies arrived at his local hospital through Footprints to Africa, everything changed. For the first time in years, John had access to proper ostomy bags and the support he needed.</p>
      
      <p>"The supplies gave me more than just physical comfort—they gave me my life back. I can work again. I can be with my family. I feel like a person again."</p>
      
      <p>Today, John volunteers to help other ostomates in his community access the same support that changed his life.</p>
    `,
  },
  {
    slug: "hope-in-zimbabwe",
    title: "Hope in Zimbabwe: A Mother's Story",
    excerpt:
      "A mother's determination to care for her son led her to Footprints to Africa. Discover how community support and essential supplies brought hope to their family.",
    location: "Zimbabwe",
    date: "2025-02-01",
    content: `
      <p>When Grace's son underwent emergency surgery that resulted in an ostomy, she had no idea where to turn. The hospital could only provide a few days' worth of supplies, and the cost of purchasing more was far beyond what her family could afford.</p>
      
      <p>"I was terrified," Grace says. "I didn't know how I would care for him. I felt so alone."</p>
      
      <p>Through a partner hospital connected to Footprints to Africa, Grace learned about the charity's work. Within weeks, a delivery of supplies arrived—enough to give her son stability and her family peace of mind.</p>
      
      <p>"It wasn't just the supplies. It was knowing that someone, somewhere, cared about us. That we weren't forgotten."</p>
      
      <p>Grace's son is now back in school, and she has become an advocate for ostomy awareness in her community.</p>
    `,
  },
  {
    slug: "community-support",
    title: "Community Support Changes Lives",
    excerpt:
      "In Botswana, a network of ostomates and healthcare workers has grown around Footprints to Africa's deliveries. See how one shipment sparked a movement.",
    location: "Botswana",
    date: "2025-01-22",
    content: `
      <p>What started as a single delivery of ostomy supplies to a hospital in Botswana has grown into something much larger: a community of support, shared knowledge, and hope.</p>
      
      <p>Nurse Mpho was one of the first to witness the impact. "Before Footprints to Africa, we had patients who would disappear after discharge because they had no way to manage at home. Now we can follow up. We can connect them with others who understand."</p>
      
      <p>The regular shipments have allowed the hospital to establish an ostomy support group. Patients share tips, encourage one another, and help new ostomates navigate the challenges they once faced alone.</p>
      
      <p>"It's not just about the supplies," Mpho says. "It's about dignity, belonging, and knowing you're not alone. Footprints to Africa gave us the foundation to build that."</p>
    `,
  },
  {
    slug: "delivery-of-hope",
    title: "The Delivery That Changed Everything",
    excerpt:
      "A volunteer describes the moment a shipment arrived in Namibia—and the faces of those who received it. A reminder of why every donation matters.",
    location: "Namibia",
    date: "2025-02-10",
    content: `
      <p>David had been coordinating deliveries for Footprints to Africa for two years when he witnessed something he would never forget.</p>
      
      <p>"We arrived at the hospital with the shipment. Word had spread that supplies were coming. There were people waiting—patients, families, nurses. You could see the relief on their faces before we even opened the boxes."</p>
      
      <p>One woman approached David with tears in her eyes. She had been reusing bags for weeks, washing and drying them because she had no other option. The infection risk was high, and she had been living in constant fear.</p>
      
      <p>"She held my hand and said, 'Thank you. You have no idea what this means.' I thought about every person who had donated, every volunteer who had sorted and packed. It all came together in that moment."</p>
      
      <p>That delivery, David says, reinforced why he gives his time to Footprints to Africa. "Every box we send carries hope. Every donation makes a difference. I've seen it with my own eyes."</p>
    `,
  },
];

export function getAllArticles(): ImpactArticle[] {
  return articles;
}

export function getArticleBySlug(slug: string): ImpactArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
