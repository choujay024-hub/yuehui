// Supabase 配置
// 把下面两个值替换成你自己 Supabase 项目的：
//   1. SUPABASE_URL      → 在 Supabase 后台 → Settings → API → Project URL
//   2. SUPABASE_ANON_KEY  → 在 Supabase 后台 → Settings → API → anon/public key

const SUPABASE_URL = 'https://lajhfebszkkpvdjeyock.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhamhmZWJzemtrcHZkamV5b2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NjE0MzYsImV4cCI6MjA5OTQzNzQzNn0.p7ovoAFm1wjpDHaEisbrZFMMl2Z66443GZHGRBdrW_E';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
