# **App Name**: EasyMove Landing Page

## Core Features:

- Navbar with Anchor Links: Fixed navigation bar with links to all sections (Inicio, Serviços, Como funciona, Seguro da Carga, Depoimentos, Cidades, FAQ, Fotos, Contato) and a 'Pedir orçamento' button.
- Hero Section with Compact Form: Hero section featuring a headline, subheadline, compact initial form, WhatsApp button, and 'Pedir orçamento' CTA, along with a location-specific message.
- Firestore Lead Capture: Capture lead data from the initial (Hero) and complete (Contact) forms, storing the information in a Firestore database with fields for name, contact details, moving details, and consent.
- WhatsApp Integration: Implement a WhatsApp button at the top and a floating button with a pre-filled message including customer details (name, origin, destination, date) that's saved in Firestore. Also add a feature that allows you to dynamically set the 'WHATSAPP_NUMBER' global variable and configure N8N_WEBHOOK_URL so leads are POSTed to the N8N instance when that configuration variable is set.
- Service Cards: Display 'Nossos Serviços' using cards to illustrate what kinds of services that EasyMove can provide to the client. Include these topics: Mudança Residencial; Embalagem Profissional; Guarda‑móveis / Storage; Itens Especiais; Desmontagem/Montagem.
- Social Proof: Provide a social proof feature using customer testimonials that help promote trust. Each piece of social proof needs the customer's name plus the name of the city where they live.
- AI Powered Landing Page Suggestion Tool: An AI tool can be integrated to analyze user queries related to their moves and recommend specific sections or services on the landing page. This personalized guide enhances user experience by swiftly directing visitors to pertinent details, thus promoting greater engagement with the available offerings.

## Style Guidelines:

- Primary color: Dark blue (#0A2E50), evoking trust and professionalism. It harmonizes well with themes of reliability and security often associated with moving services. Avoid overly bright or saturated colors to maintain a professional feel.
- Background color: Light gray (#B0C0C4, desaturated and light shade of the primary color), providing a neutral backdrop that highlights content without being distracting.
- Accent color: Orange (#F5A623, analogous to the primary). Used for CTAs and highlights to draw attention and inject energy, complementing the professional aesthetic with a touch of vibrancy.
- Headline font: 'Montserrat' (sans-serif) for titles. Note: currently only Google Fonts are supported.
- Body font: 'Inter' (sans-serif) for texts. Note: currently only Google Fonts are supported.
- Use clean, modern icons to represent services and steps in the 'Como funciona' section. Ensure icons are consistent and align with the overall brand aesthetic.
- Employ a clean and structured layout with clear sections to facilitate easy navigation. Prioritize readability with sufficient whitespace and distinct visual hierarchy.