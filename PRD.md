# Product Requirements Document (PRD)
## Marathon Portfolio v2

---

## 1. Product Overview

### 1.1 Purpose
A personal portfolio website for Devon Purification to showcase professional experience, projects, and skills for job seeking purposes.

### 1.2 Target Audience
- Hiring managers and recruiters in tech
- Technical interviewers reviewing candidates
- Potential collaborators or clients

### 1.3 Design Philosophy
Inspired by Bungie's Marathon game aesthetic:
- High-contrast neon colors on black backgrounds
- HUD (Heads-Up Display) style UI elements
- Geometric, angular design language
- Technical/terminal typography
- Subtle retro-futuristic effects

---

## 2. Features List

### 2.1 Layout & Navigation

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| L1 | Fixed left sidebar navigation | Must Have | 1 |
| L2 | Smooth scroll to sections | Must Have | 2 |
| L3 | Active section highlighting in nav | Must Have | 2 |
| L4 | Mobile hamburger menu | Must Have | 3 |
| L5 | Responsive layout (mobile-first) | Must Have | 3 |

### 2.2 Sidebar Component

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| S1 | Name/Logo display at top | Must Have | 1 |
| S2 | Navigation links (About, Projects, Resume) | Must Have | 1 |
| S3 | Contact links at bottom (GitHub, LinkedIn, Email) | Must Have | 1 |
| S4 | HUD-style visual design | Must Have | 1 |
| S5 | Hover states with glow effects | Nice to Have | 3 |

### 2.3 About Section

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| A1 | Profile introduction/bio | Must Have | 2 |
| A2 | Professional tagline | Must Have | 2 |
| A3 | Skills overview with tech badges | Must Have | 2 |
| A4 | Skills organized by category | Nice to Have | 2 |

### 2.4 Projects Section

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| P1 | Project cards grid | Must Have | 2 |
| P2 | Project title and description | Must Have | 2 |
| P3 | Tech stack badges per project | Must Have | 2 |
| P4 | Links to GitHub/live demo | Must Have | 2 |
| P5 | Project highlights/bullet points | Nice to Have | 2 |
| P6 | Hover effects on cards | Nice to Have | 3 |

### 2.5 Resume Section

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| R1 | Work experience timeline | Must Have | 3 |
| R2 | Job title, company, dates | Must Have | 3 |
| R3 | Job highlights/achievements | Must Have | 3 |
| R4 | Education section | Must Have | 3 |
| R5 | Download PDF resume button | Must Have | 3 |
| R6 | Skills summary | Nice to Have | 3 |

### 2.6 Visual Effects (Marathon Aesthetic)

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| V1 | Marathon color palette implementation | Must Have | 1 |
| V2 | Custom typography (Orbitron, Share Tech Mono) | Must Have | 1 |
| V3 | Scanline CRT overlay effect | Nice to Have | 3 |
| V4 | Corner bracket decorations | Nice to Have | 3 |
| V5 | Neon glow effects on interactive elements | Nice to Have | 3 |
| V6 | Angular clip-path shapes | Nice to Have | 3 |
| V7 | Smooth animations/transitions | Nice to Have | 3 |

### 2.7 Technical Requirements

| ID | Feature | Priority | Task |
|----|---------|----------|------|
| T1 | Fast page load (<3s) | Must Have | 3 |
| T2 | SEO meta tags | Nice to Have | 3 |
| T3 | Vercel deployment | Must Have | 3 |
| T4 | Accessibility basics (semantic HTML, alt text) | Should Have | 2-3 |

---

## 3. Task Breakdown

### Task 1: Foundation
**Goal**: Set up project infrastructure and core navigation

**Features Included**:
- L1: Fixed left sidebar navigation
- S1-S4: Complete sidebar component
- V1-V2: Color palette and typography

**Deliverables**:
- [ ] React + Vite project initialized
- [ ] CLAUDE.md created
- [ ] PRD.md created
- [ ] progress.txt created
- [ ] CSS variables (colors, fonts, spacing)
- [ ] Global styles and reset
- [ ] Fixed left sidebar with navigation links
- [ ] Basic page structure

---

### Task 2: Content Sections
**Goal**: Build About and Projects sections with real content

**Features Included**:
- L2-L3: Smooth scroll and active state
- A1-A4: Complete About section
- P1-P5: Complete Projects section
- T4: Basic accessibility

**Deliverables**:
- [ ] About section component
- [ ] Bio and tagline display
- [ ] Skills badges by category
- [ ] Projects section component
- [ ] Project cards with details
- [ ] Tech stack badges
- [ ] Smooth scroll navigation
- [ ] Active section highlighting
- [ ] Content data populated

---

### Task 3: Resume & Polish
**Goal**: Complete Resume section and add visual polish

**Features Included**:
- L4-L5: Mobile responsive
- S5: Hover glow effects
- P6: Project card hovers
- R1-R6: Complete Resume section
- V3-V7: Visual effects
- T1-T3: Performance and deployment

**Deliverables**:
- [ ] Resume section component
- [ ] Experience timeline
- [ ] Education display
- [ ] PDF download button
- [ ] Mobile hamburger menu
- [ ] Responsive layout
- [ ] Scanline overlay effect
- [ ] Corner decorations
- [ ] Glow effects
- [ ] Animations
- [ ] Vercel deployment config

---

## 4. Content Requirements

### About Section Content
- Name: Devon Purification
- Title: Software Engineer
- Tagline: Fintech | Full-Stack | QA Automation | AI/ML
- Bio: Professional summary paragraph

### Projects (Examples to include)
- AI/ML research projects
- Mobile banking QA automation
- Personal web projects
- Open source contributions

### Resume Content
- QA Engineer at MyBambu (2025)
- SW Engineering Designer at FAU (2024)
- Engineering Intern at Motorola Solutions (2018-2019)
- BS Computer Science from FAU (2024)

---

## 5. Success Criteria

1. **Visual Impact**: Site immediately conveys Marathon aesthetic
2. **Professional**: Content clearly presents qualifications
3. **Functional**: All links work, PDF downloads, responsive
4. **Fast**: Page loads quickly on mobile and desktop
5. **Free**: Deployed on Vercel free tier with no recurring costs
