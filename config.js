// ============================================================
//  ITALIA FAMILY PORTAL — Supabase Configuration
//  Edit SUPABASE_URL and SUPABASE_KEY with your own values.
//  See SETUP.md for step-by-step instructions.
// ============================================================

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Helper: initialise Supabase client (loaded via CDN in each page)
function getSupabase() {
  return supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

// Shared colour palette & design tokens
const PORTAL = {
  name: 'La Dolce Vita',
  trip: 'Italia 2026',
  dates: '15 Sept – 7 Oct 2026',
  members: ['Mum', 'Dad', 'Everyone'], // customise with family names
};
