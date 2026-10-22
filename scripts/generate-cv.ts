import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  
  // Set PDF Metadata
  pdfDoc.setTitle('Muhammad Qasim — SEO Specialist CV');
  pdfDoc.setAuthor('Muhammad Qasim');
  pdfDoc.setSubject('Professional Curriculum Vitae — SEO Specialist');
  pdfDoc.setKeywords(['SEO Specialist', 'Search Engine Optimization', 'Technical SEO', 'On-Page SEO', 'Keyword Research', 'Muhammad Qasim']);
  pdfDoc.setCreator('Muhammad Qasim Portfolio');
  pdfDoc.setProducer('Muhammad Qasim Portfolio');

  // Load fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // A4 dimensions: 595.28 x 841.89 pt
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 42;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const darkBg = rgb(0.04, 0.05, 0.04); // #0A0C0A
  const whiteText = rgb(0.96, 0.96, 0.95); // #F4F5F0
  const limeAccent = rgb(0.72, 0.96, 0.0); // #B8F500
  const grayText = rgb(0.45, 0.47, 0.45); // #737873
  const lightGrayText = rgb(0.72, 0.73, 0.71); // #B5B8AF
  const dividerColor = rgb(0.18, 0.20, 0.18); // Subtle border
  const cardBg = rgb(0.08, 0.09, 0.08); // #141714

  // Helper to add a page
  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  // Draw Page 1 Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: darkBg,
  });

  // Top header accent line
  page.drawRectangle({
    x: margin,
    y: y,
    width: contentWidth,
    height: 3,
    color: limeAccent,
  });
  y -= 22;

  // Full Name
  page.drawText('MUHAMMAD QASIM', {
    x: margin,
    y: y,
    size: 26,
    font: fontBold,
    color: whiteText,
  });
  y -= 18;

  // Title & Specialization
  page.drawText('SEO SPECIALIST', {
    x: margin,
    y: y,
    size: 13,
    font: fontBold,
    color: limeAccent,
  });
  y -= 18;

  // Contact Info bar
  const contactLine = 'Pakistan  |  muhammadqasim0435976@gmail.com  |  linkedin.com/in/muhammad-qasim-waheed/';
  page.drawText(contactLine, {
    x: margin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: lightGrayText,
  });
  y -= 20;

  // Thin section divider
  page.drawLine({
    start: { x: margin, y },
    end: { x: margin + contentWidth, y },
    thickness: 1,
    color: dividerColor,
  });
  y -= 18;

  // Helper for Section Titles
  function drawSectionTitle(title: string) {
    page.drawText(title, {
      x: margin,
      y: y,
      size: 11,
      font: fontBold,
      color: limeAccent,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: margin + 80, y },
      thickness: 1.5,
      color: limeAccent,
    });
    page.drawLine({
      start: { x: margin + 80, y },
      end: { x: margin + contentWidth, y },
      thickness: 0.5,
      color: dividerColor,
    });
    y -= 14;
  }

  // Helper to wrap text
  function drawWrappedText(text: string, x: number, width: number, size: number, font: any, color: any, lineHeight: number) {
    const words = text.split(' ');
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine.length > 0 ? `${currentLine} ${word}` : word;
      const textWidth = font.widthOfTextAtSize(testLine, size);

      if (textWidth <= width) {
        currentLine = testLine;
      } else {
        page.drawText(currentLine, { x, y, size, font, color });
        y -= lineHeight;
        currentLine = word;
      }
    }

    if (currentLine.length > 0) {
      page.drawText(currentLine, { x, y, size, font, color });
      y -= lineHeight;
    }
  }

  // 1. PROFESSIONAL SUMMARY
  drawSectionTitle('PROFESSIONAL SUMMARY');
  const summaryText =
    'SEO Specialist with practical experience in keyword research, on-page optimization, technical SEO, content writing, competitor analysis, and organic search performance monitoring. Focused on identifying search opportunities, improving website content relevance, reviewing technical SEO issues, and supporting sustainable organic growth through research-driven optimization. Continuously developing SEO knowledge and analytical skills to deliver structured, user-focused search optimization.';
  drawWrappedText(summaryText, margin, contentWidth, 9, fontRegular, whiteText, 14);
  y -= 12;

  // 2. EXPERIENCE
  drawSectionTitle('PRACTICAL EXPERIENCE (~1.5 YEARS COMBINED)');
  
  // Experience 1
  page.drawText('SEO Specialist — Search Optimization & Organic Strategy', {
    x: margin,
    y: y,
    size: 10.5,
    font: fontBold,
    color: whiteText,
  });
  page.drawText('~1 Year Practical SEO Experience', {
    x: margin + contentWidth - 160,
    y: y,
    size: 9,
    font: fontBold,
    color: limeAccent,
  });
  y -= 13;
  page.drawText('SEO-Related Work Across Office Environments  |  Pakistan', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontOblique,
    color: grayText,
  });
  y -= 14;

  const expBullets = [
    'Conducted comprehensive keyword research and search intent mapping to identify high-value search visibility opportunities.',
    'Optimized on-page SEO elements including title tags, meta descriptions, heading structure (H1–H6), and image alt attributes.',
    'Reviewed crawlability, robots.txt directives, XML sitemaps, canonical tags, and internal link structure to support site health.',
    'Collaborated on SEO content writing, topic planning, and content optimization aligned with user intent and query relevance.',
    'Monitored search performance, impressions, clicks, and CTR metrics using Google Search Console and Google Analytics 4.',
  ];

  for (const bullet of expBullets) {
    page.drawText('•', { x: margin + 6, y, size: 9, font: fontBold, color: limeAccent });
    drawWrappedText(bullet, margin + 18, contentWidth - 18, 8.5, fontRegular, lightGrayText, 12);
    y -= 3;
  }
  y -= 6;

  // Experience 2
  page.drawText('Digital Operations & Search Support Role', {
    x: margin,
    y: y,
    size: 10,
    font: fontBold,
    color: whiteText,
  });
  page.drawText('~6 Months Practical Experience', {
    x: margin + contentWidth - 160,
    y: y,
    size: 9,
    font: fontRegular,
    color: grayText,
  });
  y -= 13;
  page.drawText('Office Environment  |  Pakistan', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontOblique,
    color: grayText,
  });
  y -= 13;

  const exp2Bullets = [
    'Assisted with website content auditing, structural link checks, and mobile-friendliness reviews across live pages.',
    'Assisted in monitoring keyword movements, audience search behavior, and preparing periodic search activity summaries.',
  ];

  for (const bullet of exp2Bullets) {
    page.drawText('•', { x: margin + 6, y, size: 9, font: fontBold, color: limeAccent });
    drawWrappedText(bullet, margin + 18, contentWidth - 18, 8.5, fontRegular, lightGrayText, 12);
    y -= 3;
  }
  y -= 12;

  // 3. CORE SEO SKILLS
  drawSectionTitle('CORE SEO COMPETENCIES');

  const skillsCategories = [
    { title: 'Keyword Research', items: 'Keyword Research, Search Intent Analysis, Competitor Keyword Analysis, Keyword Mapping, Content Gap Analysis, Topic Research' },
    { title: 'On-Page SEO', items: 'Title Tag Optimization, Meta Description Optimization, Heading Structure (H1–H6), Internal Linking, URL Optimization, Image SEO, Content Optimization' },
    { title: 'Technical SEO', items: 'Website SEO Audits, Crawling & Indexing Analysis, XML Sitemap Checks, Robots.txt Review, Canonical Tag Checks, Redirect & Broken-Link Analysis, Mobile SEO, Core Web Vitals Fundamentals' },
    { title: 'Content SEO', items: 'SEO Content Writing, Content Planning, Content Optimization, Content Refreshing, Search Intent Alignment, SEO-Friendly Content Structure' },
    { title: 'Analytics & Reporting', items: 'Organic Search Performance Analysis, Google Search Console, Google Analytics 4, Clicks & Impressions Analysis, CTR Analysis, SEO Reporting, Performance Monitoring' },
  ];

  for (const cat of skillsCategories) {
    page.drawText(cat.title + ': ', { x: margin, y, size: 9, font: fontBold, color: whiteText });
    const indent = fontBold.widthOfTextAtSize(cat.title + ':  ', 9);
    drawWrappedText(cat.items, margin + indent, contentWidth - indent, 8.5, fontRegular, lightGrayText, 12);
    y -= 3;
  }
  y -= 12;

  // 4. SELECTED WEBSITE PROJECTS
  drawSectionTitle('SELECTED WEBSITE PROJECTS (PORTFOLIO ENTRIES)');
  page.drawText('Live websites featured in professional portfolio for examining site structure, content relevance, and technical SEO opportunities:', {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: grayText,
  });
  y -= 14;

  const projects = [
    { name: 'Twenty47 Logistics', url: 'https://twenty47logistics.com/', cat: 'Logistics', desc: 'Examining logistics content relevance, site navigation, and search visibility opportunities.' },
    { name: 'Royal Cosmetic Surgery', url: 'https://www.royalcosmeticsurgery.com.pk/', cat: 'Cosmetic Surgery / Healthcare', desc: 'Healthcare content relevance, medical search intent, on-page SEO, and site health.' },
    { name: 'Revline Medical Solutions', url: 'https://revlinemedicalsolutions.com/', cat: 'Medical Solutions', desc: 'B2B medical service page structure, search intent, and indexing considerations.' },
    { name: 'ES Connect', url: 'https://esconnect.co.uk/', cat: 'Business Website', desc: 'Business service search relevance, page structure, content optimization, and technical SEO.' },
    { name: 'Hair Transplant in Islamabad', url: 'https://hairtransplantinislamabad.com/', cat: 'Hair Restoration / Healthcare', desc: 'Specialized healthcare local search intent, service-page content, and local SEO signals.' },
    { name: 'Dental Clinic Islamabad', url: 'https://dentalclinicislamabad.com/', cat: 'Dental / Healthcare', desc: 'Dental services local visibility, service-page content, on-page optimization, and technical SEO.' },
  ];

  for (const proj of projects) {
    page.drawText(proj.name, { x: margin, y, size: 8.5, font: fontBold, color: whiteText });
    const nameWidth = fontBold.widthOfTextAtSize(proj.name + ' ', 8.5);
    page.drawText(`(${proj.cat})  —  `, { x: margin + nameWidth, y, size: 8, font: fontRegular, color: grayText });
    const catWidth = fontRegular.widthOfTextAtSize(`(${proj.cat})  —  `, 8);
    page.drawText(proj.url, { x: margin + nameWidth + catWidth, y, size: 8, font: fontRegular, color: limeAccent });
    y -= 11;
    page.drawText(proj.desc, { x: margin + 10, y, size: 7.5, font: fontRegular, color: lightGrayText });
    y -= 12;
  }

  // Footer on Page 1
  page.drawLine({
    start: { x: margin, y: margin + 14 },
    end: { x: margin + contentWidth, y: margin + 14 },
    thickness: 0.5,
    color: dividerColor,
  });
  page.drawText('Muhammad Qasim  |  SEO Specialist  |  Email: muhammadqasim0435976@gmail.com  |  Pakistan', {
    x: margin,
    y: margin + 4,
    size: 7.5,
    font: fontRegular,
    color: grayText,
  });

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public', 'muhammad-qasim-seo-specialist-cv.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`CV successfully written to ${outputPath} (${pdfBytes.length} bytes)`);
}

generateCV().catch((err) => {
  console.error('Failed to generate CV:', err);
  process.exit(1);
});
