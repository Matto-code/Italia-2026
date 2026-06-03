# 🇮🇹 Italia 2026 — Supabase Setup Guide

This guide gets you live real-time sync in about 10 minutes. Free, no credit card needed.

---

## Step 1 — Create a Supabase account

1. Go to [supabase.com](https://supabase.com) and click **Start your project**
2. Sign in with GitHub (recommended) or email
3. Click **New Project**
4. Name it `italia-2026`, choose the free tier, set a database password, pick a region close to Australia (e.g. Singapore or Sydney)
5. Wait ~2 minutes for it to spin up

---

## Step 2 — Get your credentials

1. In your project dashboard, go to **Settings → API**
2. Copy two values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon public key** — a long string starting with `eyJ...`

---

## Step 3 — Update config.js

Open `config.js` and replace the placeholder values:

```js
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';  // ← paste Project URL
const SUPABASE_KEY = 'eyJ...YOUR-ANON-KEY...';            // ← paste anon key
```

---

## Step 4 — Create the database tables

In your Supabase dashboard, go to **SQL Editor** and run this SQL to create all tables:

```sql
-- Packing items
create table packing_items (
  id text primary key,
  category text not null,
  label text not null,
  checked boolean default false,
  who text default 'shared',
  created_at timestamptz default now()
);

-- Budget expenses
create table budget_expenses (
  id text primary key,
  desc text not null,
  amt numeric not null,
  cat text,
  who text,
  created_at timestamptz default now()
);

-- Ideas board
create table ideas (
  id text primary key,
  title text not null,
  cat text,
  location text,
  url text,
  notes text,
  added_by text,
  votes int default 0,
  created_at timestamptz default now()
);

-- Memories
create table memories (
  id text primary key,
  caption text not null,
  location text,
  author text,
  emoji text,
  img_url text,
  created_at timestamptz default now()
);

-- Chat messages
create table chat_messages (
  id text primary key,
  text text not null,
  author text,
  reactions jsonb default '{}',
  created_at timestamptz default now()
);
```

---

## Step 5 — Enable Realtime

In Supabase dashboard:
1. Go to **Database → Replication**
2. Toggle on all 5 tables: `packing_items`, `budget_expenses`, `ideas`, `memories`, `chat_messages`

---

## Step 6 — Set permissions (Row Level Security)

For a family portal, the simplest approach is to allow all reads and writes. In SQL Editor:

```sql
alter table packing_items  enable row level security;
alter table budget_expenses enable row level security;
alter table ideas           enable row level security;
alter table memories        enable row level security;
alter table chat_messages   enable row level security;

create policy "allow all" on packing_items  for all using (true) with check (true);
create policy "allow all" on budget_expenses for all using (true) with check (true);
create policy "allow all" on ideas           for all using (true) with check (true);
create policy "allow all" on memories        for all using (true) with check (true);
create policy "allow all" on chat_messages   for all using (true) with check (true);
```

---

## Step 7 — Push to GitHub Pages

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `italia-2026` (make it **Public**)
3. Upload all files from this folder (drag & drop in the GitHub UI)
4. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
5. After ~1 minute your portal will be live at:

```
https://YOUR-GITHUB-USERNAME.github.io/italia-2026
```

Share that URL with the family and everyone is connected!

---

## 📁 File structure

```
italia-2026/
├── index.html       ← Home / portal hub
├── planner.html     ← Day-by-day itinerary
├── packing.html     ← Collaborative packing lists
├── budget.html      ← Expense tracker & split
├── ideas.html       ← Ideas board with links & voting
├── memories.html    ← Memory wall
├── chat.html        ← Family chat with reactions
├── shared.css       ← Shared design system
├── config.js        ← 🔑 Supabase credentials (edit this!)
└── SETUP.md         ← This file
```

---

## 💡 Tips

- The portal works **without Supabase** — it falls back to local storage in each browser. Set up Supabase when you want everything to sync live across the family.
- Each page subscribes to real-time changes, so when Mum ticks a packing item, Dad sees it update instantly.
- The chat has emoji reactions — tap the `+` on any message to react.
- In the Ideas board, everyone can vote on restaurants and activities.
- The Budget tracker auto-converts AUD to EUR using a rate you can update.

---

*La Dolce Vita · Italia 2026 · Family Portal*
