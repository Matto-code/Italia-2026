// ============================================================
//  ITALIA FAMILY PORTAL — Supabase Configuration
//  Edit SUPABASE_URL and SUPABASE_KEY with your own values.
//  See SETUP.md for step-by-step instructions.
// ============================================================

const SUPABASE_URL = 'https://jxpzsgtiacrkefrrfnkq.supabase.com';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4cHpzZ3RpYWNya2VmcnJmbmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MTcxNDIsImV4cCI6MjA5NTk5MzE0Mn0._nNjSYr11zvh_BjytIK094b-FbLXe_6u_ij_-mLwQuk';

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
